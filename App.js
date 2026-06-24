import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LanguageSelector } from './src/screens/LanguageSelector';
import { HomeScreen } from './src/screens/HomeScreen';
import { LessonScreen } from './src/screens/LessonScreen';
import { useStore } from './src/store/useStore';
import { getColors } from './src/constants/theme';

export default function App() {
    const currentTrack = useStore((state) => state.currentTrack);
    const activeTracks = useStore((state) => state.activeTracks);
    const isDarkMode = useStore((state) => state.isDarkMode);
    const colors = getColors(isDarkMode);
    const [currentLesson, setCurrentLesson] = useState(null);
    const [isAddingTrack, setIsAddingTrack] = useState(false);

    // Helper functions to defer state updates, allowing touch responders to reset properly
    const handleFinishLesson = () => {
        setTimeout(() => {
            setCurrentLesson(null);
        }, 100);
    };

    const handleStartLesson = (lesson) => {
        setTimeout(() => {
            setCurrentLesson(lesson);
        }, 100);
    };

    const handleAddTrack = () => {
        setTimeout(() => {
            setIsAddingTrack(true);
        }, 100);
    };

    const handleBackFromSelector = () => {
        setTimeout(() => {
            setIsAddingTrack(false);
        }, 100);
    };

    return (
        <View style={[styles.container, { backgroundColor: colors.background }]}>
            {(!currentTrack || isAddingTrack) ? (
                <LanguageSelector onBack={handleBackFromSelector} />
            ) : currentLesson ? (
                <LessonScreen
                    lesson={currentLesson}
                    onFinish={handleFinishLesson}
                />
            ) : (
                <HomeScreen
                    onStartLesson={handleStartLesson}
                    onAddTrack={handleAddTrack}
                />
            )}
            <StatusBar style={isDarkMode ? 'light' : 'dark'} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    placeholder: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
