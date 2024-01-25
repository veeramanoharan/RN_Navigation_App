import { Text,View,StyleSheet } from "react-native";


function List({data}){
    return(
        data.map((points) => (
            <View key={points} style={styles.listItem}>
                <Text style = {styles.itemText}> {points} </Text>
            </View>
            ))
    );
}

export default List;

const styles = StyleSheet.create({
    listItem:{
        borderRadius: 4,
        paddingHorizontal: 6,
        paddingVertical: 3,
        marginHorizontal: 16,
        marginVertical: 5,
        backgroundColor: '#e3b487'
    }, 
    itemText: {
        color: '#3f2f25',
        textAlign: 'center',
        fontSize:15,
        fontWeight:'700'
    }
});