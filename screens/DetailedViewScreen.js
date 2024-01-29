import { CATEGORIES, MEALS } from '../data/ConstantData';
import { useLayoutEffect } from 'react';
import MealsList from '../components/MealsList/MealsList';


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
    
   return <MealsList meal_items={displayedMeal}/>

   
}
export default DetailedViewScreen;

