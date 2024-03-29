import { View,Text,StyleSheet } from "react-native";

function MealDetails({duration,complexity,affordability,text_styles}){
    return(
        <View style = {styles.details}>
        <Text style={[styles.detail_items,text_styles]}>Duration - {duration}m</Text>
        <Text style={[styles.detail_items,text_styles]}>Complexity - {complexity.toUpperCase()}</Text>
        <Text style={[styles.detail_items,text_styles]}>Affordability - {affordability.toUpperCase()}</Text>
    </View>
    );
}
export default MealDetails;

const styles = StyleSheet.create({
    details:{
        flexDirection: 'row',
        alignItems: 'center',
        padding: 7,
        justifyContent: 'center'
    },
    detail_items:{
        marginHorizontal: 4,
        fontSize: 10,
    },
});