import React, { useState } from 'react'
import { View, Image, Text, TouchableHighlight } from 'react-native'

import {COLORS, SIZES} from '../../constants'
import { popular } from '../popular'

const Popular = () => {
    const [active, setActive] = useState(null)
    return (
      <View style={{  backgroundColor: '#9F81F7', paddingBottom: 60}}>

            
         
         <View 
          style={{
             marginTop: 10,
             flexDirection: 'row',
             flexWrap: 'wrap',
             justifyContent: 'space-between'
              }}>

            {popular.map((product, idx) => (

                <View style= {{
                  width: '30%',
               
                  borderRadius: SIZES.radius,
                  backgroundColor:active === idx ? COLORS.secondary : COLORS.primary}}  >

                <TouchableHighlight underlayColor={COLORS.secondary}
                 onPress={() => setActive(idx) }
                 
                 style={{ width: '100%', marginTop: 15}}>

                <View style={{ alignItems:'center' }}>
                
                    <Image
                      source={{ uri: product.image }} 
                      style={{width: 120 , height: 80 }} />


                    <Text style={{
                           fontSize: SIZES.h3,
                           color: COLORS.black,
                           margin: 5
                                 }}>
                          {product.name}
                    </Text>

                    <Text style={{
                           fontSize: SIZES.h3,
                           color: COLORS.black,
                           margin: 5
                                 }}>
                          {product.price}
                    </Text>
                    </View>

                </TouchableHighlight>
           
              </View>
            ))}
          </View>  
       </View>   
    )
}



export default Popular