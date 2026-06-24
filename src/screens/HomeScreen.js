import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { useStore } from '../store/useStore';
import { LESSONS } from '../data/lessons';
import { getColors, COLORS, SPACING, FONTS, BORDER_RADIUS } from '../constants/theme';

export const HomeScreen = ({ onStartLesson, onAddTrack }) => {
    const currentTrack = useStore((state) => state.currentTrack);
    const activeTracks = useStore((state) => state.activeTracks);
    const selectTrack = useStore((state) => state.selectTrack);
    const isDarkMode = useStore((state) => state.isDarkMode);
    const toggleTheme = useStore((state) => state.toggleTheme);
    const colors = getColors(isDarkMode);

    const xp = useStore((state) => state.xpByTrack[currentTrack] || 0);
    const progress = useStore((state) => state.progress[currentTrack] || 0);
    const lessons = LESSONS[currentTrack] || [];

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
            <View style={[styles.header, { borderBottomColor: colors.border }]}>
                <View style={styles.trackSwitcher}>
                    {activeTracks.map(track => (
                        <TouchableOpacity
                            key={track}
                            onPress={() => selectTrack(track)}
                            style={[
                                styles.trackTab,
                                { backgroundColor: isDarkMode ? '#2D2D2D' : '#F7F7F7' },
                                currentTrack === track && [styles.activeTab, { borderColor: colors.primary, backgroundColor: colors.cardBackground }]
                            ]}
                        >
                            <Text style={styles.trackTabText}>
                                {track === 'java' ? '☕' : track === 'react' ? '⚛️' : track === 'postgresql' ? '🐘' : track === 'python' ? '🐍' : track === 'wsl_docker' ? '🐳' : track === 'agentes_ia' ? '🤖' : track === 'linux' ? '🐧' : '❓'}
                            </Text>
                        </TouchableOpacity>
                    ))}
                    <TouchableOpacity onPress={onAddTrack} style={[styles.addTrackTab, { backgroundColor: colors.border }]}>
                        <Text style={[styles.addTrackTabText, { color: colors.textSecondary }]}>+</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.stats}>
                    <Text style={[styles.statText, { color: colors.text }]}>🔥 0</Text>
                    <Text style={[styles.statText, { color: colors.text }]}>💎 {xp}</Text>
                    <TouchableOpacity onPress={toggleTheme} style={styles.themeToggle}>
                        <Text style={{ fontSize: 20 }}>{isDarkMode ? '☀️' : '🌙'}</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContent}>
                {lessons.map((lesson, index) => (
                    <View key={lesson.id} style={styles.nodeContainer}>
                        <TouchableOpacity
                            style={[
                                styles.node,
                                { backgroundColor: index === 0 || lesson.completed ? colors.primary : colors.gray }
                            ]}
                            onPress={() => onStartLesson(lesson)}
                        >
                            <Text style={styles.nodeIcon}>{lesson.completed ? '✅' : '⭐'}</Text>
                        </TouchableOpacity>
                        <Text style={[styles.nodeTitle, { color: colors.text }]}>{lesson.title}</Text>
                    </View>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        height: 70,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: SPACING.md,
        borderBottomWidth: 2,
    },
    trackSwitcher: {
        flexDirection: 'row',
        gap: SPACING.xs,
    },
    trackTab: {
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: '#F7F7F7',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'transparent',
    },
    activeTab: {
        borderColor: COLORS.primary,
        backgroundColor: '#fff',
    },
    trackTabText: {
        fontSize: 20,
    },
    addTrackTab: {
        width: 44,
        height: 44,
        borderRadius: 22,
        justifyContent: 'center',
        alignItems: 'center',
    },
    addTrackTabText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    headerTitle: {
        fontSize: FONTS.size.lg,
        fontWeight: 'bold',
    },
    stats: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: SPACING.md,
    },
    statText: {
        fontSize: FONTS.size.md,
        fontWeight: 'bold',
    },
    themeToggle: {
        width: 44,
        height: 44,
        borderRadius: 22,
        justifyContent: 'center',
        alignItems: 'center',
    },
    scrollContent: {
        alignItems: 'center',
        paddingVertical: SPACING.xl,
    },
    nodeContainer: {
        alignItems: 'center',
        marginBottom: SPACING.xl * 2,
    },
    node: {
        width: 80,
        height: 80,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    nodeIcon: {
        fontSize: 32,
    },
    nodeTitle: {
        marginTop: SPACING.sm,
        fontSize: FONTS.size.md,
        fontWeight: 'bold',
    }
});
