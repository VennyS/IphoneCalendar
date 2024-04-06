import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>Список дел</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        paddingTop: 50,
        height: 100,
        backgroundColor: 'silver',
    },
    text: {
        fontSize: 18,
        color: 'red',
        textAlign: 'center',
    }
});
