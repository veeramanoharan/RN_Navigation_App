import { View,Text,Image,StyleSheet,ScrollView } from "react-native";
import List from "../Components/mDetails/list";
import Subtitles from "../Components/mDetails/subtitles";
import MealDetails from "../Components/mealDetails";
import { MEALS } from "../data/dummy_data";
import { useLayoutEffect } from "react";
import IconButton from "../Components/IconButton";

function MealDetailScreen({route,navigation}){
    const MealId = route.params.mealId
    const SelectedMeal = MEALS.find((meal) => meal.id === MealId)
    function ButtonHandler(){
        console.log('Added to WhishList');
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <IconButton icon='heart' color='red' buttonPress={ButtonHandler}/>
                );
            }
        })
    },[navigation,ButtonHandler]);

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