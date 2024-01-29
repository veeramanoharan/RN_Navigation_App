import { FlatList } from 'react-native';
import GridTileComponent from '../components/GridTileComponent';
import {CATEGORIES} from '../data/ConstantData';


function CategoriesList({navigation}){

function renderCategory(itemData){
    function  pressHandler(){
            navigation.navigate('Meals Detailed View',
            {CID : itemData.item.id} ,);
    };

    return(
        <GridTileComponent title={itemData.item.title} 
            color={itemData.item.color} button_press={pressHandler}/>
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