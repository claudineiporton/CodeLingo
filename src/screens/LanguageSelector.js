import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { Button } from '../components/Button';
import { getColors, SPACING, FONTS } from '../constants/theme';
import { useStore } from '../store/useStore';

export const LanguageSelector = ({ onBack }) => {
    const selectTrack = useStore((state) => state.selectTrack);
    const activeTracks = useStore((state) => state.activeTracks);
    const isDarkMode = useStore((state) => state.isDarkMode);
    const toggleTheme = useStore((state) => state.toggleTheme);
    const colors = getColors(isDarkMode);

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
            <View style={styles.header}>
                <TouchableOpacity onPress={toggleTheme} style={styles.themeToggle}>
                    <Text style={{ fontSize: 20 }}>{isDarkMode ? '☀️' : '🌙'}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.content}>
                <Text style={[styles.title, { color: colors.text }]}>O que você quer aprender hoje?</Text>
                <Text style={[styles.subtitle, { color: colors.textSecondary }]}>Escolha sua primeira trilha</Text>

                <View style={styles.options}>
                    <Button
                        title="☕ Java (Backend)"
                        onPress={() => {
                            selectTrack('java');
                            onBack();
                        }}
                        style={styles.optionButton}
                    />
                    <Button
                        title="⚛️ React (Frontend)"
                        type="secondary"
                        onPress={() => {
                            selectTrack('react');
                            onBack();
                        }}
                        style={styles.optionButton}
                    />
                    <Button
                        title="🐘 PostgreSQL (Banco de Dados)"
                        type="secondary"
                        onPress={() => {
                            selectTrack('postgresql');
                            onBack();
                        }}
                        style={styles.optionButton}
                    />
                    <Button
                        title="🐍 Python (Data Science)"
                        type="secondary"
                        onPress={() => {
                            selectTrack('python');
                            onBack();
                        }}
                        style={styles.optionButton}
                    />
                    <Button
                        title="🐳 WSL & Docker (Infraestrutura)"
                        type="secondary"
                        onPress={() => {
                            selectTrack('wsl_docker');
                            onBack();
                        }}
                        style={styles.optionButton}
                    />
                    <Button
                        title="🤖 Agentes de IA (Ollama & OpenClaw)"
                        type="secondary"
                        onPress={() => {
                            selectTrack('agentes_ia');
                            onBack();
                        }}
                        style={styles.optionButton}
                    />
                    <Button
                        title="🐧 Linux (Terminal & Pastas)"
                        type="secondary"
                        onPress={() => {
                            selectTrack('linux');
                            onBack();
                        }}
                        style={styles.optionButton}
                    />
                    {activeTracks.length > 0 && (
                        <Button
                            title="Voltar"
                            type="ghost"
                            onPress={onBack}
                            style={{ marginTop: SPACING.md }}
                        />
                    )}
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingHorizontal: SPACING.lg,
        paddingTop: SPACING.md,
    },
    themeToggle: {
        width: 44,
        height: 44,
        borderRadius: 22,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        flex: 1,
        paddingHorizontal: SPACING.lg,
        paddingBottom: SPACING.lg,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: FONTS.size.xl,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: SPACING.sm,
    },
    subtitle: {
        fontSize: FONTS.size.md,
        marginBottom: SPACING.xl,
    },
    options: {
        width: '100%',
        gap: SPACING.md,
    },
    optionButton: {
        marginBottom: SPACING.md,
    }
});
