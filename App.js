import { StatusBar } from 'expo-status-bar';
import {Button} from 'react-native'
import CategoriesList from './screens/CategoriesList';
import { NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailedViewScreen from './screens/DetailedViewScreen';
import MealDetailScreen from './screens/MealDetailScreen';

const Stack = createNativeStackNavigator();

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
            name="Categories" 
            component={CategoriesList}
            options={{
              title:'All Categories',
            }}/>
          <Stack.Screen  name="Meals Detailed View" component={DetailedViewScreen}/>
          <Stack.Screen name='Meal Details Page' component={MealDetailScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}


