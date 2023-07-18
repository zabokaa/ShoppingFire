
import { StyleSheet, View } from 'react-native';
// create navigator, IM before navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
//connect to firebase:
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import ShoppingList from './components/ShoppingList';

const App = () => {
 // copy paste from firebase (for web add SDK)
  const firebaseConfig = {
    apiKey: "AIzaSyAp74XqwmWlzHQfOqjE0Z9gm820hJ3Brww",
    authDomain: "shopping-list-fire.firebaseapp.com",
    projectId: "shopping-list-fire",
    storageBucket: "shopping-list-fire.appspot.com",
    messagingSenderId: "146197238947",
    appId: "1:146197238947:web:5743169cd2f47f2cdc1b16"
  };
   // Initialize Firebase
   const app = initializeApp(firebaseConfig);

   // Initialize Cloud Firestore and get a reference to the service
   const db = getFirestore(app);
 

  return (
    <View style={styles.container}>
      <NavigationContainer>
        {/* adding stack screen */}
        <Stack.Navigator>
          initialRouteName='ShoppingList'
          <Stack.Screen 
            name='ShoppingList'
            component={ShoppingList}
          >
            {/* for access to DB prop variables */}
            {props => <ShoppingList db={db} {...props} />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bfd8ad',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
