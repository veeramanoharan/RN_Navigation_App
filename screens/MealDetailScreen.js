import { View,Text,Image,StyleSheet,ScrollView } from "react-native";
import List from "../Components/mDetails/list";
import Subtitles from "../Components/mDetails/subtitles";
import MealDetails from "../Components/mealDetails";
import { MEALS } from "../data/dummy_data";
import { useContext, useLayoutEffect } from "react";
import IconButton from "../Components/IconButton";
import { Favourites_Context } from "../store/context/fav_context";

function MealDetailScreen({route,navigation}){
   const MealId = route.params.mealId
   const FavMealsContext = useContext(Favourites_Context);
   
   const IsMealFavourite = FavMealsContext.ids.includes(MealId);

    
    const SelectedMeal = MEALS.find((meal) => meal.id === MealId)
    
    function FavButtonHandler(){
        if(IsMealFavourite){
            FavMealsContext.removeFavourite(MealId);
            console.log('Removed from Favourite');
        }
        else{
            FavMealsContext.addFavourite(MealId);
            console.log('Added to Favourite');
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <IconButton icon={IsMealFavourite ? 'star' : 'star-o'} color='white' buttonPress={FavButtonHandler}/>
                );
            }
        })
    },[navigation,FavButtonHandler]);

    return(
        <ScrollView style={styles.scrollContainer}>
            <Image source={{uri:SelectedMeal.imageUrl}} style={styles.image}/>
            
            <Text style={styles.title}>{SelectedMeal.title}</Text>
            
            <MealDetails duration={SelectedMeal.duration} 
                complexity={SelectedMeal.complexity} 
                affordability={SelectedMeal.affordability}
                textStyles={styles.detailText}/>
            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <Subtitles>Ingridients</Subtitles>
                    <List data={SelectedMeal.ingredients} />
                    <Subtitles>Steps</Subtitles>
                        <List data={SelectedMeal.steps}/>
                </View>
            </View>    

        </ScrollView>
    );
}
export default MealDetailScreen;

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 250
    },
    title:{
        textAlign:'center',
        fontWeight:'bold',
        fontSize: 24,
        margin: 8,
        color:'white'
    },
    detailText:{
        color:'white',
        fontSize:13
    },
    listContainer: {
        maxWidth:'80%',

    },
    listOuterContainer:{
        alignItems:'center'
    },
    scrollContainer:{
        marginBottom: 30
    }
   
});