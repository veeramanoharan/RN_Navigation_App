import { useContext } from "react";
import { View,Text,StyleSheet } from "react-native";
import MealsList from "../components/MealsList/MealsList";
import { MEALS } from "../data/ConstantData";
import { Favourites_Context } from "../store/context/Favourites_Context";

function FavouriteScreen(){
    const FavMealsCntxt = useContext(Favourites_Context);
    const FavMeals = MEALS.filter((favMeal) => FavMealsCntxt.ids.includes(favMeal.id));

    if(FavMeals.length === 0){
        return(
            <View style={styles.root_container}>
                <Text style={styles.text}>
                    Start Adding Favorites...!
                </Text>
            </View>
        );
    }
    return(
        <MealsList meal_items={FavMeals}/>
    );
}

export default FavouriteScreen;

const styles = StyleSheet.create({
    root_container:{
        flex: 1,
        justifyContent: 'center',
        alignItems:'center'
    },
    text:{
        fontSize:20,
        fontStyle:'italic',
        fontWeight:'700',
        color:'white'
    }
});