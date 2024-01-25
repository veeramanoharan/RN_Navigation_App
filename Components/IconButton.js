import { Pressable,StyleSheet } from "react-native";
import {AntDesign} from '@expo/vector-icons';

function IconButton({icon,color,buttonPress}){
    return(
        <Pressable onPress={buttonPress} style={({pressed}) => pressed && styles.pressed}>
            <AntDesign name={icon} size={28} color={color}/>
        </Pressable>
    );
}

export default IconButton;

const styles = StyleSheet.create({
    pressed:{
        opacity: 0.7,
    }
});