import { Pressable, View, Text, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';

import { GlobalStyles } from "../../constants/style";
import { getFormattedDate } from "../../util/date";


function ExpenseItem({ id, amount, date, description }) {
    // Ensure amount is a number and format it to two decimal places
    const formattedAmount = parseFloat(amount).toFixed(2);

    const navigation = useNavigation();

    function expensePressHandler() {
        navigation.navigate('ManageExpense', {
            expenseId: id
        });
    }

    return (
        <Pressable onPress={expensePressHandler} style={({pressed}) => pressed && styles.pressed}>
            <View style={styles.ExpenseItem}>
                <View>
                    <Text style={[styles.textBase, styles.description]}>{description}</Text>
                    <Text style={styles.textBase}>{getFormattedDate(date)}</Text>
                </View>

                <View style={styles.amountContainer}>
                    <Text style={styles.amount}>{formattedAmount}€</Text>
                </View>
            </View>
        </Pressable>
    );
}

export default ExpenseItem;

const styles = StyleSheet.create({
    ExpenseItem: {
        padding: 12,
        marginVertical: 8,
        backgroundColor: GlobalStyles.color.primaryAction,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 6,
        elevation: 3,
        shadowColor: GlobalStyles.color.bgColor1,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4
    },
    textBase: {
        color: GlobalStyles.color.highlight
    },
    description: {
        fontSize: 16,
        marginBottom: 4,
        fontWeight: 'bold'
    },
    amountContainer: {
        paddingHorizontal: 12,
        paddingVertical: 4,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        minWidth: 80
    },
    amount: {
        color: GlobalStyles.color.highlight,
        fontWeight: 'bold'
    },
    pressed: {
        opacity: .75
    }
});