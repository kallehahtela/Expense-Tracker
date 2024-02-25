import { View, Text, StyleSheet } from "react-native";

import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/style";



function ExpensesOutput({ expenses, periodName, fallbackText }) {
    let content = <Text style={styles.infoText}>{fallbackText}</Text>;

    if (expenses.length > 0) { 
        content = <ExpensesList expenses={expenses} />;
    }

    return (
        <View style={styles.container}>
            <ExpensesSummary expenses={expenses} periodName={periodName}/>
            {content}
        </View>
    );
}

export default ExpensesOutput

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 24,
        paddingBottom: 0,
        backgroundColor: GlobalStyles.color.border
    },
    infoText: {
        color: GlobalStyles.color.highlight,
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 32
    }
});