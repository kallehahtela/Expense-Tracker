import { View, Text, StyleSheet } from "react-native";

import { GlobalStyles } from '../../constants/style';

function ExpensesSummary({ expenses, periodName }) {    
    // Ensure each expense.amount is a number; otherwise, consider it as 0
    /*const expensesSum = expenses.reduce((sum, expense) => {
        const amount = parseFloat(expense.amount); // Convert to float to ensure it's a number
        return sum + (isNaN(amount) ? 0 : amount); // Only add if amount is a number
    }, 0);*/

    const expensesSum = expenses.reduce((sum, expense) => {
        return sum + expense.amount;
    }, 0)

    return (
        <View style={styles.container}>
            <Text style={styles.period}>{periodName}</Text>
            <Text style={styles.sum}>{expensesSum.toFixed(2)}€</Text>
        </View>
    );
}

export default ExpensesSummary; 

const styles = StyleSheet.create({
    container: {
        padding: 8,
        backgroundColor: GlobalStyles.color.bgColor2,
        borderRadius: 6,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    period: {
        fontSize: 13,
        color: GlobalStyles.color.highlight
    },
    sum: {
        fontSize: 16,
        fontWeight: 'bold',
        color: GlobalStyles.color.highlight
    }
});
