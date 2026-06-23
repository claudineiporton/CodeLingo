import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native';
import { Button } from '../components/Button';
import { COLORS, SPACING, FONTS } from '../constants/theme';
import { useStore } from '../store/useStore';

export const LanguageSelector = ({ onBack }) => {
    const selectTrack = useStore((state) => state.selectTrack);
    const activeTracks = useStore((state) => state.activeTracks);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>O que você quer aprender hoje?</Text>
                <Text style={styles.subtitle}>Escolha sua primeira trilha</Text>

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
        backgroundColor: COLORS.background,
    },
    content: {
        flex: 1,
        padding: SPACING.lg,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: FONTS.size.xl,
        fontWeight: 'bold',
        color: COLORS.text,
        textAlign: 'center',
        marginBottom: SPACING.sm,
    },
    subtitle: {
        fontSize: FONTS.size.md,
        color: COLORS.textSecondary,
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
