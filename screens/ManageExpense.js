import { useContext, useLayoutEffect } from 'react';
import { View, StyleSheet } from 'react-native';

import IconButton from '../components/UI/IconButton';
import { GlobalStyles } from '../constants/style';
import Button from '../components/UI/Button';
import { ExpensesContext } from '../store/expenses-context';
import ExpenseForm from '../components/ManageExpense/ExpenseForm';

function ManageExpense({ route, navigation }) {
    const expensesCtx = useContext(ExpensesContext);

    const editedExpenseId = route.params?.expenseId;
    const isEditing = !!editedExpenseId;

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

    function confirmHandler() {
        if (isEditing) {
            expensesCtx.updateExpense(
                editedExpenseId,
                {
                description: 'Test!!!!',
                amount: 9.95,
                date: new Date('2024-2-23'),
            });
        } else {
            expensesCtx.addExpense({
                description: 'Test',
                amount: 19.95,
                date: new Date('2024-2-20'),
            });
        }
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <ExpenseForm />
            <View style={styles.buttons}>
                <Button style={styles.button} mode='flat' onPress={cancelHandler}>Cancel</Button>
                <Button style={styles.button} onPress={confirmHandler}>{isEditing ? 'Update' : 'Add'}</Button>
            </View>
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
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        minWidth: 120,
        marginHorizontal: 8
    }
});