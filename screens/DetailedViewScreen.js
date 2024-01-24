import { View,StyleSheet,FlatList,ImageBackground } from 'react-native';
import MealItem from '../Components/mealItem';
import { MEALS } from '../data/dummy_data';


function DetailedViewScreen({route}){
   const catId = route.params.CID;

   const displayedMeal = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
   } );

   function renderMealItem(itemData){
        const item = itemData.item;
        const mealProps = {
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
            {/* <ImageBackground  source={require()}/> */}
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