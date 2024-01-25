import { View,Text,StyleSheet } from "react-native";

function Subtitles({children}){
    return(
        <View style={styles.subtitleContainer}>        
        <Text style={styles.subTitles}>{children}</Text>
          </View>
    );
}

export default Subtitles;

const styles = StyleSheet.create({
    subTitles:{
        color:'#e3b487',
        fontSize:16,
        fontWeight:'bold',
        textAlign:'center',
       
    },
    subtitleContainer: {
        marginVertical: 4,
        marginHorizontal:15,
        padding:6,
        borderBottomColor:'#e3b487',
        borderBottomWidth: 2,
    }
});