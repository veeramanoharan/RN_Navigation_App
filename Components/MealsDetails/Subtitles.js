import { View,Text,StyleSheet } from "react-native";

function Subtitles({children}){
    return(
        <View style={styles.subtitle_container}>        
        <Text style={styles.subtitles}>{children}</Text>
          </View>
    );
}

export default Subtitles;

const styles = StyleSheet.create({
    subtitles:{
        color:'#e3b487',
        fontSize:16,
        fontWeight:'bold',
        textAlign:'center',
       
    },
    subtitle_container: {
        marginVertical: 4,
        marginHorizontal:15,
        padding:6,
        borderBottomColor:'#e3b487',
        borderBottomWidth: 2,
    }
});