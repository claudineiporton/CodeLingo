import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { useStore } from '../store/useStore';
import { LESSONS } from '../data/lessons';
import { COLORS, SPACING, FONTS, BORDER_RADIUS } from '../constants/theme';

export const HomeScreen = ({ onStartLesson, onAddTrack }) => {
    const currentTrack = useStore((state) => state.currentTrack);
    const activeTracks = useStore((state) => state.activeTracks);
    const selectTrack = useStore((state) => state.selectTrack);
    const xp = useStore((state) => state.xpByTrack[currentTrack] || 0);
    const progress = useStore((state) => state.progress[currentTrack] || 0);
    const lessons = LESSONS[currentTrack] || [];

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <View style={styles.trackSwitcher}>
                    {activeTracks.map(track => (
                        <TouchableOpacity
                            key={track}
                            onPress={() => selectTrack(track)}
                            style={[styles.trackTab, currentTrack === track && styles.activeTab]}
                        >
                            <Text style={styles.trackTabText}>
                                {track === 'java' ? '☕' : track === 'react' ? '⚛️' : track === 'postgresql' ? '🐘' : track === 'python' ? '🐍' : track === 'wsl_docker' ? '🐳' : track === 'agentes_ia' ? '🤖' : track === 'linux' ? '🐧' : '❓'}
                            </Text>
                        </TouchableOpacity>
                    ))}
                    <TouchableOpacity onPress={onAddTrack} style={styles.addTrackTab}>
                        <Text style={styles.addTrackTabText}>+</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.stats}>
                    <Text style={styles.statText}>🔥 0</Text>
                    <Text style={styles.statText}>💎 {xp}</Text>
                </View>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContent}>
                {lessons.map((lesson, index) => (
                    <View key={lesson.id} style={styles.nodeContainer}>
                        <TouchableOpacity
                            style={[
                                styles.node,
                                { backgroundColor: index === 0 || lesson.completed ? COLORS.primary : COLORS.gray }
                            ]}
                            onPress={() => onStartLesson(lesson)}
                        >
                            <Text style={styles.nodeIcon}>{lesson.completed ? '✅' : '⭐'}</Text>
                        </TouchableOpacity>
                        <Text style={styles.nodeTitle}>{lesson.title}</Text>
                    </View>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    header: {
        height: 70,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: SPACING.md,
        borderBottomWidth: 2,
        borderBottomColor: COLORS.border,
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
        backgroundColor: COLORS.border,
        justifyContent: 'center',
        alignItems: 'center',
    },
    addTrackTabText: {
        fontSize: 24,
        color: COLORS.textSecondary,
        fontWeight: 'bold',
    },
    headerTitle: {
        fontSize: FONTS.size.lg,
        fontWeight: 'bold',
        color: COLORS.primary,
    },
    stats: {
        flexDirection: 'row',
        gap: SPACING.md,
    },
    statText: {
        fontSize: FONTS.size.md,
        fontWeight: 'bold',
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
        color: COLORS.text,
    }
});
