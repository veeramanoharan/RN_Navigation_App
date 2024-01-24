import { StatusBar } from 'expo-status-bar';
import {View} from 'react-native'
import CategoriesList from './screens/CategoriesList';
import { NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailedViewScreen from './screens/DetailedViewScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Categories" component={CategoriesList}/>
          <Stack.Screen  name="Meals Detailed View" component={DetailedViewScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}


