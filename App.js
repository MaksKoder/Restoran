import React from 'react';
import { Text, View } from 'react-native'
import Categories from './src/components/Categories'
import Header from './src/components/Header'
import Popular from './src/components/Popular';


export default function App() {
  return (
    <View style={{ paddingTop: 20 }}>
      <Header/>
      <Categories />
      <Text style={{
        height: 50,
        textAlign: 'center',
        fontSize: 20,
        color: '#4B088A',
        fontWeight: 'bold',
        backgroundColor: '#9F81F7',
        paddingTop: 20
        
      }}>DISCOUNT OF THE DAY</Text>

      <Popular/>
     
    
    </View>
  );
}


