import { View, Text, StyleSheet } from 'react-native';

import { GlobalStyles } from '../../constants/style';

function ErrorOverlay({ message }) {
    return (    
        <View style={styles.container}>
            <Text style={[styles.text, styles.title]}>An error occured!</Text>
            <Text style={styles.text}>{message}</Text>
        </View>
    );
}

export default ErrorOverlay;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
        backgroundColor: GlobalStyles.color.border
    },
    text: {
        color: GlobalStyles.color.highlight,
        textAlign: 'center',
        marginBottom: 8
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    message: {
        fontSize: 14
    }
});