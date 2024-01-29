import { Pressable,StyleSheet } from "react-native";
import {FontAwesome} from '@expo/vector-icons';

function IconButton({icon,color,button_press}){
    return(
        <Pressable onPress={button_press} style={({pressed}) => pressed && styles.pressed}>
            <FontAwesome name={icon} size={28} color={color}/>
        </Pressable>
    );
}

export default IconButton;

const styles = StyleSheet.create({
    pressed:{
        opacity: 0.7,
    }
});