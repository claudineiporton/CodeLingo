import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { ProgressBar } from '../components/ProgressBar';
import { Button } from '../components/Button';
import { getColors, SPACING, FONTS, BORDER_RADIUS } from '../constants/theme';
import { useStore } from '../store/useStore';

export const LessonScreen = ({ lesson, onFinish }) => {
    const [currentStep, setCurrentStep] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [isDone, setIsDone] = useState(false);
    const [hasChecked, setHasChecked] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);

    const currentTrack = useStore((state) => state.currentTrack);
    const addXp = useStore((state) => state.addXp);
    const updateProgress = useStore((state) => state.updateProgress);
    const isDarkMode = useStore((state) => state.isDarkMode);
    const colors = getColors(isDarkMode);

    const exercise = lesson.exercises[currentStep];
    const lessonProgress = (currentStep + 1) / lesson.exercises.length;

    const handleVerify = () => {
        if (exercise.type === 'info') {
            goToNext();
            return;
        }

        const correct = selectedOption === exercise.answer;
        setIsCorrect(correct);
        setHasChecked(true);
    };

    const goToNext = () => {
        if (currentStep + 1 < lesson.exercises.length) {
            setCurrentStep(currentStep + 1);
            setSelectedOption(null);
            setHasChecked(false);
            setIsCorrect(false);
        } else {
            setIsDone(true);
            addXp(currentTrack, 10);
            updateProgress(currentTrack, 1); // Mark as complete
        }
    };

    const handleContinue = () => {
        if (isCorrect) {
            goToNext();
        } else {
            // Try again
            setHasChecked(false);
            setSelectedOption(null);
        }
    };

    if (isDone) {
        return (
            <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
                <View style={styles.congratsContent}>
                    <Text style={styles.congratsEmoji}>🎉</Text>
                    <Text style={[styles.title, { color: colors.primary }]}>Lição Concluída!</Text>
                    <Text style={[styles.subtitle, { color: colors.textSecondary }]}>Você mandou super bem!</Text>
                    <View style={[styles.xpCard, { backgroundColor: colors.secondary }]}>
                        <Text style={styles.xpText}>+10 XP</Text>
                    </View>
                    <Button title="Continuar" onPress={onFinish} />
                </View>
            </SafeAreaView>
        );
    }

    const renderExerciseContent = () => {
        switch (exercise.type) {
            case 'info':
                return (
                    <ScrollView contentContainerStyle={styles.infoContainer} showsVerticalScrollIndicator={false}>
                        <Text style={[styles.infoTitle, { color: colors.text }]}>{exercise.title}</Text>
                        <View style={[styles.infoCard, { backgroundColor: isDarkMode ? '#1E1E1E' : '#F7F7F7', borderColor: colors.border }]}>
                            <Text style={[styles.infoText, { color: colors.text }]}>{exercise.content}</Text>
                        </View>
                        {exercise.tip && (
                            <View style={[styles.tipCard, { backgroundColor: isDarkMode ? '#2D2200' : '#FFF9E6', borderColor: colors.secondary }]}>
                                <Text style={[styles.tipText, { color: isDarkMode ? '#FFD042' : '#B28200' }]}>{exercise.tip}</Text>
                            </View>
                        )}
                    </ScrollView>
                );

            case 'tap-fill':
                const tokens = exercise.textTemplate.split(' ');
                return (
                    <View style={styles.exerciseLayout}>
                        <Text style={[styles.question, { color: colors.text }]}>{exercise.question}</Text>
                        
                        <View style={styles.codeTerminal}>
                            <View style={styles.terminalHeader}>
                                <View style={styles.terminalDotRed} />
                                <View style={styles.terminalDotYellow} />
                                <View style={styles.terminalDotGreen} />
                            </View>
                            <View style={styles.codeContainer}>
                                {tokens.map((token, index) => {
                                    if (token.includes('{blank}')) {
                                        const prefix = token.replace('{blank}', '');
                                        return (
                                            <TouchableOpacity
                                                key={index}
                                                activeOpacity={0.7}
                                                style={[
                                                    styles.codeChip,
                                                    styles.blankChip,
                                                    { borderColor: colors.blue },
                                                    selectedOption && [styles.blankChipFilled, { backgroundColor: colors.blue }]
                                                ]}
                                                onPress={() => !hasChecked && setSelectedOption(null)}
                                            >
                                                <Text style={[
                                                    styles.codeChipText,
                                                    styles.blankChipText,
                                                    selectedOption && styles.blankChipFilledText
                                                ]}>
                                                    {prefix}{selectedOption || '____'}
                                                </Text>
                                            </TouchableOpacity>
                                        );
                                    }
                                    return (
                                        <View key={index} style={styles.codeChip}>
                                            <Text style={styles.codeChipText}>{token}</Text>
                                        </View>
                                    );
                                })}
                            </View>
                        </View>

                        <View style={styles.chipPool}>
                            {exercise.options.map((option) => {
                                const isUsed = selectedOption === option;
                                return (
                                    <TouchableOpacity
                                        key={option}
                                        disabled={isUsed || hasChecked}
                                        style={[
                                            styles.optionChip,
                                            { backgroundColor: colors.cardBackground, borderColor: colors.border },
                                            isUsed && [styles.usedOptionChip, { backgroundColor: isDarkMode ? '#2D2D2D' : '#E5E5E5', borderColor: isDarkMode ? '#2D2D2D' : '#E5E5E5' }]
                                        ]}
                                        onPress={() => setSelectedOption(option)}
                                    >
                                        <Text style={[
                                            styles.optionChipText,
                                            { color: colors.text },
                                            isUsed && [styles.usedOptionChipText, { color: colors.gray }]
                                        ]}>{option}</Text>
                                    </TouchableOpacity>
                                );
                            })}
                        </View>
                    </View>
                );

            case 'multiple-choice':
            default:
                return (
                    <View style={styles.exerciseLayout}>
                        <Text style={[styles.question, { color: colors.text }]}>{exercise.question}</Text>

                        <View style={styles.options}>
                            {exercise.options.map((option) => {
                                const isSelected = selectedOption === option;
                                return (
                                    <TouchableOpacity
                                        key={option}
                                        disabled={hasChecked}
                                        style={[
                                            styles.option,
                                            { backgroundColor: colors.cardBackground, borderColor: colors.border },
                                            isSelected && [styles.selectedOption, { borderColor: colors.blue, backgroundColor: isDarkMode ? 'rgba(28, 176, 246, 0.15)' : '#E1F5FE' }]
                                        ]}
                                        onPress={() => setSelectedOption(option)}
                                    >
                                        <Text style={[
                                            styles.optionText,
                                            { color: colors.text },
                                            isSelected && [styles.selectedOptionText, { color: colors.blue }]
                                        ]}>{option}</Text>
                                    </TouchableOpacity>
                                );
                            })}
                        </View>
                    </View>
                );
        }
    };

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
            <View style={styles.header}>
                <TouchableOpacity onPress={onFinish}>
                    <Text style={[styles.closeBtn, { color: colors.textSecondary }]}>✕</Text>
                </TouchableOpacity>
                <ProgressBar progress={lessonProgress} />
            </View>

            <View style={styles.content}>
                {renderExerciseContent()}
            </View>

            {hasChecked ? (
                <View style={[
                    styles.banner,
                    isCorrect ? styles.correctBanner : styles.incorrectBanner,
                    {
                        backgroundColor: isCorrect 
                            ? (isDarkMode ? '#1B3C00' : '#D7FFB7') 
                            : (isDarkMode ? '#4A0E0E' : '#FFDFDF'),
                        borderColor: isCorrect ? colors.primary : colors.error
                    }
                ]}>
                    <View style={styles.bannerHeader}>
                        <Text style={[
                            styles.bannerTitle,
                            isCorrect ? styles.correctTitle : styles.incorrectTitle,
                            { color: isCorrect ? colors.primary : colors.error }
                        ]}>
                            {isCorrect ? '🎉 Excelente!' : '❌ Resposta incorreta'}
                        </Text>
                        {!isCorrect && (
                            <Text style={[styles.correctAnswerText, { color: isDarkMode ? '#AAA' : '#666' }]}>
                                Resposta correta: <Text style={{ fontWeight: 'bold' }}>{exercise.answer}</Text>
                            </Text>
                        )}
                    </View>
                    <Button
                        title="Continuar"
                        onPress={handleContinue}
                        type={isCorrect ? 'primary' : 'secondary'}
                    />
                </View>
            ) : (
                <View style={[styles.footer, { borderTopColor: colors.border }]}>
                    <Button
                        title={exercise.type === 'info' ? 'Continuar' : 'Verificar'}
                        onPress={handleVerify}
                        disabled={exercise.type !== 'info' && !selectedOption}
                    />
                </View>
            )}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: SPACING.md,
    },
    closeBtn: {
        fontSize: 24,
        color: COLORS.gray,
        marginRight: SPACING.md,
    },
    content: {
        flex: 1,
        paddingHorizontal: SPACING.lg,
        paddingBottom: SPACING.lg,
        justifyContent: 'center',
    },
    question: {
        fontSize: FONTS.size.xl,
        fontWeight: 'bold',
        color: COLORS.text,
        marginBottom: SPACING.xl,
    },
    options: {
        gap: SPACING.md,
    },
    option: {
        padding: SPACING.md,
        borderWidth: 2,
        borderColor: COLORS.border,
        borderRadius: BORDER_RADIUS.md,
        backgroundColor: '#fff',
    },
    selectedOption: {
        borderColor: COLORS.blue,
        backgroundColor: '#E1F5FE',
    },
    optionText: {
        fontSize: FONTS.size.md,
        color: COLORS.text,
    },
    selectedOptionText: {
        color: COLORS.blue,
        fontWeight: 'bold',
    },
    footer: {
        padding: SPACING.lg,
        borderTopWidth: 2,
        borderTopColor: COLORS.border,
    },
    title: {
        fontSize: FONTS.size.xxl,
        fontWeight: 'bold',
        color: COLORS.primary,
        textAlign: 'center',
        marginBottom: SPACING.sm,
    },
    subtitle: {
        fontSize: FONTS.size.lg,
        color: COLORS.textSecondary,
        textAlign: 'center',
        marginBottom: SPACING.xl,
    },
    congratsContent: {
        flex: 1,
        padding: SPACING.lg,
        justifyContent: 'center',
        alignItems: 'center',
    },
    congratsEmoji: {
        fontSize: 64,
        marginBottom: SPACING.md,
    },
    xpCard: {
        backgroundColor: COLORS.secondary,
        paddingHorizontal: SPACING.lg,
        paddingVertical: SPACING.sm,
        borderRadius: BORDER_RADIUS.xl,
        marginBottom: SPACING.xl * 2,
    },
    xpText: {
        fontSize: FONTS.size.lg,
        fontWeight: 'bold',
        color: '#fff',
    },
    infoContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        paddingVertical: SPACING.lg,
    },
    infoTitle: {
        fontSize: FONTS.size.xl,
        fontWeight: 'bold',
        color: COLORS.text,
        textAlign: 'center',
        marginBottom: SPACING.lg,
    },
    infoCard: {
        backgroundColor: '#F7F7F7',
        borderWidth: 2,
        borderColor: COLORS.border,
        borderRadius: BORDER_RADIUS.md,
        padding: SPACING.md,
        marginBottom: SPACING.lg,
    },
    infoText: {
        fontSize: FONTS.size.md,
        color: COLORS.text,
        lineHeight: 24,
    },
    tipCard: {
        backgroundColor: '#FFF9E6',
        borderWidth: 2,
        borderColor: COLORS.secondary,
        borderRadius: BORDER_RADIUS.md,
        padding: SPACING.md,
    },
    tipText: {
        fontSize: FONTS.size.md,
        color: '#B28200',
        fontWeight: '500',
        lineHeight: 22,
    },
    exerciseLayout: {
        flex: 1,
        justifyContent: 'center',
    },
    codeTerminal: {
        backgroundColor: '#1E1E1E',
        borderRadius: BORDER_RADIUS.md,
        padding: SPACING.md,
        marginBottom: SPACING.xl,
        borderWidth: 1,
        borderColor: '#333',
    },
    terminalHeader: {
        flexDirection: 'row',
        gap: 6,
        marginBottom: SPACING.md,
    },
    terminalDotRed: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#FF5F56',
    },
    terminalDotYellow: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#FFBD2E',
    },
    terminalDotGreen: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#27C93F',
    },
    codeContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: 8,
    },
    codeChip: {
        backgroundColor: '#2D2D2D',
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 4,
    },
    codeChipText: {
        color: '#F8F8F2',
        fontSize: FONTS.size.md,
        fontFamily: 'monospace',
    },
    blankChip: {
        borderStyle: 'dashed',
        borderWidth: 1.5,
        borderColor: COLORS.blue,
        backgroundColor: 'rgba(28, 176, 246, 0.15)',
        minWidth: 60,
        alignItems: 'center',
    },
    blankChipFilled: {
        borderStyle: 'solid',
        backgroundColor: COLORS.blue,
    },
    blankChipText: {
        fontWeight: 'bold',
    },
    blankChipFilledText: {
        color: '#fff',
    },
    chipPool: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: SPACING.md,
        marginTop: SPACING.md,
    },
    optionChip: {
        backgroundColor: '#FFF',
        borderWidth: 2,
        borderColor: COLORS.border,
        borderRadius: BORDER_RADIUS.md,
        paddingHorizontal: SPACING.md,
        paddingVertical: SPACING.sm,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
    },
    usedOptionChip: {
        backgroundColor: '#E5E5E5',
        borderColor: '#E5E5E5',
        opacity: 0.5,
    },
    optionChipText: {
        fontSize: FONTS.size.md,
        fontWeight: 'bold',
        color: COLORS.text,
    },
    usedOptionChipText: {
        color: COLORS.gray,
    },
    banner: {
        padding: SPACING.lg,
        borderTopWidth: 2,
    },
    correctBanner: {
        backgroundColor: '#D7FFB7',
        borderColor: '#58CC02',
    },
    incorrectBanner: {
        backgroundColor: '#FFDFDF',
        borderColor: '#FF4B4B',
    },
    bannerHeader: {
        marginBottom: SPACING.md,
    },
    bannerTitle: {
        fontSize: FONTS.size.lg,
        fontWeight: 'bold',
    },
    correctTitle: {
        color: COLORS.primaryDark,
    },
    incorrectTitle: {
        color: COLORS.error,
    },
    correctAnswerText: {
        fontSize: FONTS.size.sm,
        color: '#666',
        marginTop: 4,
    },
});
