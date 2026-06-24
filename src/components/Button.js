import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { getColors, SPACING, BORDER_RADIUS, FONTS } from '../constants/theme';
import { useStore } from '../store/useStore';

export const Button = ({ title, onPress, type = 'primary', style }) => {
    const isDarkMode = useStore((state) => state.isDarkMode);
    const colors = getColors(isDarkMode);

    const getButtonStyle = () => {
        switch (type) {
            case 'secondary':
                return [styles.secondaryButton, { backgroundColor: colors.cardBackground, borderColor: colors.border }];
            case 'ghost':
                return styles.ghostButton;
            default:
                return [styles.primaryButton, { backgroundColor: colors.primary }];
        }
    };

    const getTextStyle = () => {
        switch (type) {
            case 'secondary':
                return [styles.secondaryText, { color: colors.textSecondary }];
            case 'ghost':
                return styles.ghostText;
            default:
                return styles.primaryText;
        }
    };

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={onPress}
            style={[styles.button, getButtonStyle(), style]}
        >
            <View style={styles.inner}>
                <Text style={[styles.text, getTextStyle()]}>{title}</Text>
            </View>
            <View style={[styles.bottomLayer, { backgroundColor: type === 'primary' ? colors.primaryDark : colors.border }]} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        height: 52,
        borderRadius: BORDER_RADIUS.md,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        position: 'relative',
        marginBottom: 4, // for the 3D effect space
    },
    inner: {
        zIndex: 2,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: BORDER_RADIUS.md,
    },
    bottomLayer: {
        position: 'absolute',
        bottom: -4,
        left: 0,
        right: 0,
        height: 52,
        borderRadius: BORDER_RADIUS.md,
        zIndex: 1,
    },
    primaryButton: {
        backgroundColor: COLORS.primary,
    },
    secondaryButton: {
        backgroundColor: '#fff',
        borderWidth: 2,
        borderColor: '#E5E5E5',
    },
    text: {
        fontSize: FONTS.size.md,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    primaryText: {
        color: '#fff',
    },
    secondaryText: {
        color: COLORS.gray,
    },
});
