import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import gameImage from '../../assets/pictures/game.png';

export default function Game() {
    return (
        <View style={styles.container}>
            <Image source={gameImage} style={styles.image} resizeMode="cover" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#c6c6c6',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 350,
        height: 350,
    },
});
