import { TextInput, Text, View, StyleSheet } from "react-native";
import Input from "./Input";
import { GlobalStyles } from "../../constants/style";

function ExpenseForm() {
    function amountChangedHandler() {};

    return (
        <View style={styles.form}>
            <Text style={styles.title}>Your Expense</Text>
            <View style={styles.inputsRow}>
                <Input style={styles.rowInput} label='Amount' textInputConfig={{
                    keyboardType: 'decimal-pad',
                    onChangeText: amountChangedHandler,
                }}/>
                <Input style={styles.rowInput} label='Date' textInputConfig={{
                    placeholder: 'YYYY-MM-DD',
                    maxLength: 10,
                    onChangeText: () => {}
                }}/>
            </View>

            <Input label='Description' textInputConfig={{
                multiline: true,
                autoCorrect: false,
                autoCaptitalize: 'sentences'
            }}/>
        </View>
    );
}

export default ExpenseForm;

const styles = StyleSheet.create({
    inputsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    rowInput: {
        flex: 1
    },
    form: {
        marginTop: 40
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: GlobalStyles.color.highlight,
        marginVertical: 24,
        textAlign: 'center'
    }
});