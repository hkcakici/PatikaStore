
import React, { useState } from 'react';
import ProductCard from './components/ProductCard';
import product_data from './product_data.json';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const App = () => {
  const [placeHolderText, setplaceHolderText] = useState("Search");
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>PatikaStore</Text>
      <TextInput
        style={styles.input_container}
        placeholder={placeHolderText}
      />

      <FlatList
        numColumns={2}
        keyExtractor={(item, index) => item.id.toString()}
        data={product_data}
        renderItem={renderProduct}
      />
    </SafeAreaView>
  );

};

const renderProduct = ({ item }) =>
(
  <ProductCard product={item} />
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'blue',
    margin: 5,
  },
  input_container: {
    height: 40,
    margin: 5,
    marginTop: 5,
    borderWidth: 0.5,
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'lightgrey',
  },
  product_container: {
    backgroundColor: 'white',
  },

});

export default App;