import React from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { COLORS, BORDER_RADIUS } from '../constants/theme';

export const ProgressBar = ({ progress }) => {
    const animatedWidth = React.useRef(new Animated.Value(progress)).current;

    React.useEffect(() => {
        Animated.timing(animatedWidth, {
            toValue: progress,
            duration: 500,
            useNativeDriver: false,
        }).start();
    }, [progress]);

    const width = animatedWidth.interpolate({
        inputRange: [0, 1],
        outputRange: ['0%', '100%'],
    });

    return (
        <View style={styles.container}>
            <View style={styles.background}>
                <Animated.View style={[styles.fill, { width }]}>
                    <View style={styles.highlight} />
                </Animated.View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 20,
        width: '100%',
        paddingHorizontal: 16,
        justifyContent: 'center',
    },
    background: {
        height: 12,
        backgroundColor: '#E5E5E5',
        borderRadius: 10,
        overflow: 'hidden',
    },
    fill: {
        height: '100%',
        backgroundColor: COLORS.primary,
        borderRadius: 10,
        position: 'relative',
    },
    highlight: {
        position: 'absolute',
        top: 3,
        left: '5%',
        width: '90%',
        height: 3,
        backgroundColor: 'rgba(255,255,255,0.3)',
        borderRadius: 5,
    }
});
