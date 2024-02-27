import { useContext, useLayoutEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { GlobalStyles } from '../constants/style';
import { ExpensesContext } from '../store/expenses-context';

import Button from '../components/UI/Button';
import IconButton from '../components/UI/IconButton';
import ExpenseForm from '../components/ManageExpense/ExpenseForm';

function ManageExpense({ route, navigation }) {
    const expensesCtx = useContext(ExpensesContext);

    const editedExpenseId = route.params?.expenseId;
    const isEditing = !!editedExpenseId;

    const selectedExpense = expensesCtx.expenses.find(expense => expense.id === editedExpenseId);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense'
        });
    }, [ navigation, isEditing ]);

    function deleteExpenseHandler() {
        expensesCtx.deleteExpense(editedExpenseId);
        navigation.goBack();
    }

    function cancelHandler() {
        navigation.goBack();
    }

    function confirmHandler(expenseData) {
        if (isEditing) {
            expensesCtx.updateExpense(editedExpenseId, expenseData);
        } else {
            expensesCtx.addExpense(expenseData);
        }
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <ExpenseForm submitButtonLabel={isEditing ? 'Update' : 'Add'} onSubmit={confirmHandler} onCancel={cancelHandler} defaultValues={selectedExpense} />
            {isEditing && (
                <View style={styles.deleteContainer}>
                    <IconButton icon='trash-sharp' color={GlobalStyles.color.primaryAction} size={36} onPress={deleteExpenseHandler} />
                 </View>
                )}
        </View>
    );
}

export default ManageExpense;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: GlobalStyles.color.border,
    },
    deleteContainer: {
        marginTop: 16,
        paddingTop: 8,
        borderTopWidth: 2,
        borderTopColor: GlobalStyles.color.highlight,
        alignItems: 'center'
    },

});