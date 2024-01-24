import { View,Pressable,Text,Platform } from "react-native";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

function GridTileComponent({title,color,buttonPress}){

    return (
        <View style={styles.gridItems}>
            <Pressable android_ripple={{color:'#ccc'}} 
                style={({pressed}) => [styles.buttons , pressed ? styles.buttonPressed : null]}
                onPress={buttonPress}>
                <View style={[styles.innerContainer , {backgroundColor:color}]}>
                    <Text style={styles.title}> {title} </Text>
                </View>
            </Pressable>
        </View>
    );

}

export default GridTileComponent;

const styles = StyleSheet.create({
    gridItems:{
        flex:1,
        margin:15,
        height:160,
        borderRadius:6,
        elevation:4,
        shadowColor:'black',
        shadowOpacity: 0.2,
        shadowOffset:{ width:0, height:2},
        shadowRadius: 8,
        backgroundColor:'white',
        overflow: Platform.OS == 'android'?'hidden' : 'visible'
    },
    innerContainer:{
        flex:1,
        padding: 15,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:6,
    },
    buttons:{
        flex:1,
    },
    buttonPressed: {
        opacity:0.2
    },
    title:{
        fontWeight:'bold',
        fontSize:17,
   }
});