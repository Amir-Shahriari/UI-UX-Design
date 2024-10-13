import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View, Text, Button, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import fruitsVeggiesImage from './image';
import background from './background'; // Assuming you have imported the background image correctly

const App = () => {
  const [selectedVegetable, setSelectedVegetable] = useState('Potato-$5');
  const [selectedFruit, setSelectedFruit] = useState('Orange-$11');
  const [vegetableQuantity, setVegetableQuantity] = useState(1);
  const [fruitQuantity, setFruitQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState('');

  const vegetables = [
    { name: 'Potato', price: 5 },
    { name: 'Carrot', price: 8 },
    { name: 'Tomato', price: 6 },
    { name: 'Spinach', price: 5 },
    { name: 'Broccoli', price: 7 }
  ];

  const fruits = [
    { name: 'Orange', price: 11 },
    { name: 'Blueberry', price: 13 },
    { name: 'Apple', price: 10 },
    { name: 'Banana', price: 9 },
    { name: 'Grapes', price: 13 }
  ];

  const calculateTotalPrice = () => {
    let total = 0;

    if (selectedVegetable) {
      const vegPrice = parseInt(selectedVegetable.match(/\d+/)[0]);
      total += vegPrice * vegetableQuantity;
    }

    if (selectedFruit) {
      const fruitPrice = parseInt(selectedFruit.match(/\d+/)[0]);
      total += fruitPrice * fruitQuantity;
    }

    setTotalPrice(total.toString());
  };

  return (
    <ImageBackground source={background} style={styles.backgroundImage}>
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.heading}>Welcome to POG</Text>
          <Image 
            source={fruitsVeggiesImage}
            style={styles.headerImage}
          />
        </View>
        <View style={styles.rowContainer}>
          <View style={styles.pickerContainer}>
            <Text style={styles.selection}>Select Veggies:</Text>
            <View style={styles.pickerWrapper}>
              <Picker itemStyle={{height:120}}
                selectedValue={selectedVegetable}
                onValueChange={(itemValue) => setSelectedVegetable(itemValue)}>
                {vegetables.map((vegetable, index) => (
                  <Picker.Item key={index} label={`${vegetable.name} - $${vegetable.price}`} value={`${vegetable.name}-$${vegetable.price}`} />
                ))}
              </Picker>
            </View>
          </View>
          <View style={styles.pickerContainer}>
            <Text style={styles.selection}>Quantity:</Text>
            <View style={styles.pickerWrapper}>
              <Picker itemStyle={{height:120}}
                selectedValue={vegetableQuantity}
                onValueChange={(itemValue) => setVegetableQuantity(itemValue)}>
                {[1, 2, 3, 4, 5].map((quantity) => (
                  <Picker.Item key={quantity} label={`${quantity}`} value={quantity} />
                ))}
              </Picker>
            </View>
          </View>
        </View>
        <View style={styles.rowContainer}>
          <View style={styles.pickerContainer}>
            <Text style={styles.selection}>Select Fruits:</Text>
            <View style={styles.pickerWrapper}>
              <Picker itemStyle={{height:120}}
                selectedValue={selectedFruit}
                onValueChange={(itemValue) => setSelectedFruit(itemValue)}>
                {fruits.map((fruit, index) => (
                  <Picker.Item key={index} label={`${fruit.name} - $${fruit.price}`} value={`${fruit.name}-$${fruit.price}`} />
                ))}
              </Picker>
            </View>
          </View>
          <View style={styles.pickerContainer}>
            <Text style={styles.selection}>Quantity:</Text>
            <View style={styles.pickerWrapper}>
              <Picker itemStyle={{height:120}}
                selectedValue={fruitQuantity}
                onValueChange={(itemValue) => setFruitQuantity(itemValue)}>
                {[1, 2, 3, 4, 5].map((quantity) => (
                  <Picker.Item key={quantity} label={`${quantity}`} value={quantity} />
                ))}
              </Picker>
            </View>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={calculateTotalPrice}>
            <Text style={styles.buttonText}>Calculate Total Price</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.totalContainer}>
          {totalPrice !== '' && <Text style={styles.totalText}>Total Cost of Order: ${totalPrice}</Text>}
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>App developed by [Ty, Mo, Amir, Harry]</Text>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    backgroundColor: '#00ff6d94',
    fontFamily: 'sans',
    fontSize: 28, 
    fontWeight: 'bold',
    color: 'black', 
    textAlign: 'center',
    marginBottom: 20,
  },
  headerImage: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20
  },
  pickerContainer: {
    flex: 1,
    marginHorizontal: 10,
  },
  pickerWrapper: {
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  buttonContainer: {
    marginTop: 20,
    alignSelf: 'center',
  },
  button: {
    backgroundColor: '#32cd32', 
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  totalContainer: {
    marginTop: 15,
    backgroundColor: '#00ff6d94',
  },
  totalText: {
    fontSize: 24, 
    fontWeight: '500',
    textAlign: 'center', 
    color: 'black' 
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '112%',
    backgroundColor: '#ffffff',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#aaaaaa',
    alignItems: 'center'
  },
  footerText: {
    fontSize: 14,
    color: '#2e8b57',
  },
  selection: {
    backgroundColor: '#00ff6d94',
    borderRadius: 10,
    fontFamily: 'serif',
    textAlign: 'center',
    fontSize: 22,
    marginBottom: 10,
    color: 'black',
  }
});

export default App;
