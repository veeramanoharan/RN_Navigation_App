import { View,Text,Pressable,Image,StyleSheet,Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MealDetails from "./mealDetails";

function MealItem({id,title,imageUrl,duration,complexity,affordability}){

    const navigation = useNavigation();
   
   function itemPressed(){
    navigation.navigate('Meal Details Page',{
        mealId: id,
    });
   }

    return(
        <View style={styles.outerContainer}>
            <Pressable android_ripple={{color:'#ccc'}} style={({pressed}) => (pressed ? styles.buttonPressed : null)}
              onPress={itemPressed}>

               <View style={styles.innerContainer}> 
                    <View>
                        <Image source={{uri: imageUrl}} style={styles.image}/>
                        <Text style = {styles.title}>{title}</Text>
                    </View>
                    <MealDetails duration={duration} complexity={complexity} affordability={affordability}/>
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
    
    buttonPressed: {
        opacity:0.7
    },
});