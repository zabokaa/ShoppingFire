import React from 'react';
// 1. extract prop DB 
import { View, FlatList, SafeAreaView, Text, StyleSheet } from 'react-native';
// !!! had prob before bc react-native was written with incorrect hyphen
// 4. IM getDocs and collections
import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
//2. useState
const [lists, setLists] = useState([]);


const fetchShoppingLists = async() => {
    const listsDocuments = await getDocs(collection(db, "shoppinglists"));
    //5. empty array (newLists) is created, which will be filled later in the forEach() loop
    let newLists = [];
    listsDocuments.forEach(docObject => {
        newLists.push({ id: docObject.id, ...docObject.data() })   //spread operator ... will get name+items
    });
    setLists(newLists);
};

useEffect(() => {
    fetchShoppingLists();
  }, [`${lists}`]
);



 //3. FlatList 
const ShoppingList = ({ db }) => {

  return 

    <SafeAreaView style={styles.container}>
        <FlatList
            data={lists}
            renderItem={({ item }) =>
                <Text>{item.name}: {item.items.join(", ")}</Text>}
            />
    </SafeAreaView>

}
const styles = StyleSheet.create({
    container: {
      flex: 1
    }
  });

export default ShoppingList;