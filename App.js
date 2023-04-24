import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

import CategoriesScreen from './screens/CategoriesScreen';
import FavoritesScreen from './screens/FavouritesScreen';
import AnimalsOverviewScreen from './screens/AnimalsOverviewScreen';
import AnimalDetailScreen from './screens/AnimalDetailScreen';

import { Provider } from 'react-redux';
import {store} from './store/redux/store'


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: 'black' },
        headerTintColor: 'white',
        sceneContainerStyle: { backgroundColor: '#00004d' },
        drawerContentStyle: { backgroundColor: 'black' },
        drawerInactiveTintColor: 'white',
        drawerActiveTintColor: 'white',
        drawerActiveBackgroundColor: 'grey',
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: 'All Categories',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
    <StatusBar style="light" />
    <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: '#00004d' },
              headerTintColor: 'white',
              contentStyle: { backgroundColor: '#00004d' },
            }}
          >
            <Stack.Screen
              name="Drawer"
              component={DrawerNavigator}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="AnimalsOverView"
              component={AnimalsOverviewScreen}
            />
            <Stack.Screen
              name="AnimalDetail"
              component={AnimalDetailScreen}
              options={{
                title: 'Animal Facts',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
        </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
