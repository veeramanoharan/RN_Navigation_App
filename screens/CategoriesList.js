import { FlatList } from 'react-native';
import GridTileComponent from '../Components/gridTileComp';
import {CATEGORIES} from '../data/dummy_data';


function CategoriesList({navigation}){

function renderCategory(itemData){
    function  pressHandler(){
            navigation.navigate('Meals Detailed View',
            {CID : itemData.item.id} ,);
    };

    return(
        <GridTileComponent title={itemData.item.title} 
            color={itemData.item.color} buttonPress={pressHandler}/>
    );

}
return(
    <FlatList data={CATEGORIES}
     keyExtractor={(item) => item.id} 
     renderItem={renderCategory}
     numColumns={2}
    />
);
}
export default CategoriesList;