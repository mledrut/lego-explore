import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import Home from './Home';
import Products from './components/Products';
import Details from './components/Details';
import { Image } from 'react-native';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
        <StatusBar style="dark" />
        <Stack.Navigator screenOptions={{
            headerTintColor: "black",
            headerBackTitle: "Retour",
            headerStyle: {
                backgroundColor: "#FFCF03"
            }
        }}>

            <Stack.Screen
              name='Home'
              component={Home}
              options={{
                title: 'Retour',
                headerTitle: () => 
                  <Image
                    source={require('./img/logo.png')}
                    style={{ width: 22, height: 25 }}
                  />
                ,
              }}
            />

            <Stack.Screen
              name='Products'
              component={Products}
            />

            <Stack.Screen
              name='Details'
              component={Details}
              options={({ route }) => ({
                title: route.params.item.name,
              })}
            />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App