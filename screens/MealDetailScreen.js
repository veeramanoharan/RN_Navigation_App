import { View,Text,Image,StyleSheet,ScrollView } from "react-native";
import List from "../components/MealsDetails/List";
import Subtitles from "../components/MealsDetails/Subtitles";
import MealDetails from "../components/MealDetails";
import { MEALS } from "../data/ConstantData";
import { useContext, useLayoutEffect } from "react";
import IconButton from "../components/IconButton";
import { Favourites_Context } from "../store/context/Favourites_Context";

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
                    <IconButton icon={IsMealFavourite ? 'star' : 'star-o'} color='white' button_press={FavButtonHandler}/>
                );
            }
        })
    },[navigation,FavButtonHandler]);

    return(
        <ScrollView style={styles.scroll_container}>
            <Image source={{uri:SelectedMeal.imageUrl}} style={styles.image}/>
            
            <Text style={styles.title}>{SelectedMeal.title}</Text>
            
            <MealDetails duration={SelectedMeal.duration} 
                complexity={SelectedMeal.complexity} 
                affordability={SelectedMeal.affordability}
                textStyles={styles.detail_text}/>
            <View style={styles.list_outer_container}>
                <View style={styles.list_container}>
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
    detail_text:{
        color:'white',
        fontSize:13
    },
    list_container: {
        maxWidth:'80%',

    },
    list_outer_container:{
        alignItems:'center'
    },
    scroll_container:{
        marginBottom: 30
    }
   
});