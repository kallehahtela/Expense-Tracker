import { View, TextInput, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/style";

function Input({ label, style, textInputConfig }) {

    const inputStyles = [styles.input]

    if (textInputConfig && textInputConfig.multiline) {
        inputStyles.push(styles.inputMultiline);
    }

    return (
        <View style={[styles.inputContainer, style]}>
            <Text style={styles.label}>{label}</Text>
            <TextInput style={inputStyles} {...textInputConfig} />
        </View>
    );
}

export default Input;

const styles = StyleSheet.create({
    inputContainer: {
        marginHorizontal: 4,
        marginVertical: 8,
    },
    label: {
        fontSize: 14,
        fontWeight: '600',
        color: GlobalStyles.color.primaryAction,
        marginBottom: 10
    },
    input: {
        backgroundColor: GlobalStyles.color.bgColor1,
        color: GlobalStyles.color.highlight,
        fontWeight: '500',
        padding: 6,
        borderRadius: 6,
        fontSize: 18
    },
    inputMultiline: {
        minHeight: 100,
        textAlignVertical: 'top'
    }
});