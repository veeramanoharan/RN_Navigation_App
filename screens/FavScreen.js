import { useContext } from "react";
import { View,Text,StyleSheet } from "react-native";
import MealsList from "../Components/mList/MealsList";
import { MEALS } from "../data/dummy_data";
import { Favourites_Context } from "../store/context/fav_context";

function FavouriteScreen(){
    const FavMealsCntxt = useContext(Favourites_Context);
    const FavMeals = MEALS.filter((favMeal) => FavMealsCntxt.ids.includes(favMeal.id));

    if(FavMeals.length === 0){
        return(
            <View style={styles.rootContainer}>
                <Text style={styles.text}>
                    Start Adding Favorites...!
                </Text>
            </View>
        );
    }
    return(
        <MealsList mItems={FavMeals}/>
    );
}

export default FavouriteScreen;

const styles = StyleSheet.create({
    rootContainer:{
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