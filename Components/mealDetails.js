import { View,Text,StyleSheet } from "react-native";

function MealDetails({duration,complexity,affordability,textStyles}){
    return(
        <View style = {styles.details}>
        <Text style={[styles.detail_items,textStyles]}>Duration - {duration}m</Text>
        <Text style={[styles.detail_items,textStyles]}>Complexity - {complexity.toUpperCase()}</Text>
        <Text style={[styles.detail_items,textStyles]}>Affordability - {affordability.toUpperCase()}</Text>
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