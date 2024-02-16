import { View, StyleSheet } from "react-native";

import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/style";

const DUMMY_EXPENSES =[
    {
        id: 'e1',
        description: 'Fuel',
        amount: '56,36',
        date: new Date('2024-2-16')
    },
    {
        id: 'e2',
        description: 'Grocery Store',
        amount: '130.35',
        date: new Date('2024-1-16')
    },
    {
        id: 'e3',
        description: 'Snack',
        amount: '8.76',
        date: new Date('2024-2-10')
    },
    {
        id: 'e4',
        description: 'Clothes',
        amount: '40,99',
        date: new Date('2024-2-12')
    },
];

function ExpensesOutput({ expenses, periodName }) {
    return (
        <View style={styles.container}>
            <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={periodName}/>
            <ExpensesList expenses={DUMMY_EXPENSES}/>
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
    }
});