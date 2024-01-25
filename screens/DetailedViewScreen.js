import { View,StyleSheet,FlatList } from 'react-native';
import MealItem from '../Components/mealItem';
import { CATEGORIES, MEALS } from '../data/dummy_data';
import { useLayoutEffect } from 'react';


function DetailedViewScreen({route,navigation}){
   const catId = route.params.CID;

   const displayedMeal = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
   } );

   useLayoutEffect(()=> {
   const catTitle = CATEGORIES.find((category) => category.id === catId).title;
    navigation.setOptions({
        title: catTitle
    });
   },[catId,navigation])
    

   function renderMealItem(itemData){
        const item = itemData.item;
        const mealProps = {
            id:item.id,
            title: item.title,
            imageUrl:item.imageUrl,
            duration:item.duration,
            complexity:item.complexity,
            affordability:item.affordability,
        }
        return <MealItem {...mealProps}/>
   };

    return(
        <View style={styles.container}>
            <FlatList data={displayedMeal} keyExtractor={(item) => item.id} renderItem={renderMealItem}/>
        </View>
    );
}
export default DetailedViewScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 10,
    }
});