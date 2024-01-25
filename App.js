import { StatusBar } from 'expo-status-bar';
import {Button} from 'react-native'
import CategoriesList from './screens/CategoriesList';
import { NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailedViewScreen from './screens/DetailedViewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Ionicons,Fontisto} from '@expo/vector-icons';
import FavouriteScreen from './screens/FavScreen';

const BottomTab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigation(){
  return(
    <Drawer.Navigator screenOptions={{
        headerStyle:{backgroundColor: '#351401'},
        headerTintColor:'white',
        sceneContainerStyle:{backgroundColor:'#3f2f25'},
        drawerContentStyle: {backgroundColor:'#351501'},
        drawerInactiveTintColor:'white',
        drawerActiveTintColor:'#351401',
        drawerActiveBackgroundColor:'#e4baa1',
    }}>
      <Drawer.Screen name='Categories List' 
        component={CategoriesList} 
        options={{
          title:'All Categories',
          drawerIcon: ({color,size}) => (<Ionicons name='list-circle-sharp' color={color} size={size}/>)
      }}/>
      <Drawer.Screen  name='Favourite Screen' component={FavouriteScreen}
       options={{
        title:'Favourites',
        drawerIcon: ({color,size}) => (<Fontisto name='favorite' color={color} size={size}/>)
    }}/>
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
              headerStyle:{backgroundColor: '#351401'},
              headerTintColor:'white',
              contentStyle:{backgroundColor:'#3f2f25'}
        }}>
     
          <Stack.Screen 
            name="Meals Categories Screen" 
            component={DrawerNavigation}
            options={{
              headerShown: false,
            }}
            />
          <Stack.Screen  name="Meals Detailed View" component={DetailedViewScreen}/>
          <Stack.Screen name='Meal Details Page' component={MealDetailScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}


