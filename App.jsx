import * as React from 'react';
import { Text, View } from 'react-native';

// ---------- referencia https://reactnavigation.org/docs/tab-based-navigation
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// -------------- icono para el menu
// -------------- https://oblador.github.io/react-native-vector-icons/
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

// -------------- menu
import HomeScreen from './src/screen/HomeScreen'
import Ofertas from './src/ofertas/Ofertas';
import Chevre from './src/chevre/Chevre';

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Home!</Text>
//     </View>
//   );
// }

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false, tabBarActiveTintColor: '#E96E6E', }}>
        {/* <Tab.Screen name="Settings" component={HomeScreen} /> */}
        <Tab.Screen name="Ofertas" component={Ofertas} options={{ tabBarIcon: ({ size, focused, color }) => { return <MaterialIcons name={"reorder"} size={size} color={color} /> } }} />
        <Tab.Screen name="Inicio" component={HomeScreen} options={{ tabBarIcon: ({ size, focused, color }) => { return <Entypo name={"home"} size={size} color={color} /> } }} />        
        <Tab.Screen name="Chevre" component={Chevre} options={{ tabBarIcon: ({ size, focused, color }) => { return <FontAwesome5 name={"head-side-virus"} size={size} color={color} /> } }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}