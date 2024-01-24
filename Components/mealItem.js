import { View,Text,Pressable,Image,StyleSheet,Platform } from "react-native";

function MealItem({title,imageUrl,duration,complexity,affordability}){
    return(
        <View style={styles.outerContainer}>
            <Pressable android_ripple={{color:'#ccc'}} style={({pressed}) => (pressed ? styles.buttonPressed : null)}>

               <View style={styles.innerContainer}> 
                    <View>
                        <Image source={{uri: imageUrl}} style={styles.image}/>
                        <Text style = {styles.title}>{title}</Text>
                    </View>
                    <View style = {styles.details}>
                        <Text style={styles.detailItems}>Duration - {duration}m</Text>
                        <Text style={styles.detailItems}>Complexity - {complexity.toUpperCase()}</Text>
                        <Text style={styles.detailItems}>Affordability - {affordability.toUpperCase()}</Text>
                    </View>
                </View> 
            </Pressable>
        </View>
    );
}
export default MealItem;

const styles = StyleSheet.create({
    image:{
        width:'100%', 
        height: 250
    },
    title:{
        textAlign:'center',
        fontWeight:'bold',
        fontSize: 17,
        margin: 8,

    },
    outerContainer:{
        margin:16,
        borderRadius:8,
        overflow: Platform.OS == 'android' ? 'hidden' : 'visible',
        backgroundColor:'white',
        elevation: 4,
        shadowColor:'black',
        shadowOpacity: 0.2,
        shadowOffset:{ width:0, height:2},
        shadowRadius: 8,
    },
    innerContainer:{
        borderRadius: 8,
        overflow:'hidden'
    },
    details:{
        flexDirection: 'row',
        alignItems: 'center',
        padding: 7,
        justifyContent: 'center'
    },
    detailItems:{
        marginHorizontal: 4,
        fontSize: 10,
    },
    buttonPressed: {
        opacity:0.7
    },
});