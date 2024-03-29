import { View, Text, Pressable, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/style";

function Button({ children, onPress, mode, style }) {
    return (
        <View style={style}>
            <Pressable onPress={onPress} style={({pressed}) => pressed && styles.pressed}>
                <View style={[styles.button, mode === 'flat' && styles.flat]}> 
                    <Text style={[styles.buttonText, mode === 'flat' && styles.flatText]}>{ children }</Text>
                </View>
            </Pressable>
        </View>
    );
}

export default Button;

const styles = StyleSheet.create({
    button: {
        borderRadius: 4,
        padding: 4,
        backgroundColor: GlobalStyles.color.highlight,
    },
    flat: {
        backgroundColor: 'transparent'
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
    flatText: {
        color: GlobalStyles.color.primaryAction
    },
    pressed: {
        opacity: .75,
        backgroundColor: GlobalStyles.color.border,
        borderRadius: 4,
    }
});