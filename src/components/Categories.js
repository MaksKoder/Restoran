import React, { useState } from 'react'
import { View, Image, Text, TouchableHighlight, TouchableOpacity, Linking } from 'react-native'

import {COLORS, SIZES} from '../../constants'
import { categories } from '../categories'

const Categories = () => {
    const [active, setActive] = useState(null)
    return (
      <View style={{  backgroundColor: '#CECEF6', paddingBottom: 20}}>

             <Text style={{ 
                marginTop: 10,
                fontSize: SIZES.h2,
                color: '#8181F7',
                textAlign: 'center',
                fontWeight: 'bold'
                }} >
                Hi, Make Your Choice !
             </Text>
         
         <View 
          style={{
             marginTop: 10,
             flexDirection: 'row',
             flexWrap: 'wrap',
             justifyContent: 'space-between'
              }}>

            {categories.map((cat, idx) => (

                <View style= {{
                  width: '30%',
               
                  borderRadius: SIZES.radius,
                  backgroundColor:active === idx ? COLORS.secondary : COLORS.primary}}  >

                <TouchableHighlight underlayColor={COLORS.secondary}
                 onPress={() => setActive(idx)}
                 style={{ width: '100%', marginTop: 15}}>

          

                <View style={{ alignItems:'center' }}>
                
                    <Image
                      source={{ uri: cat.image }} 
                      style={{width: 120 , height: 80 }} />


                    <Text style={{
                           fontSize: SIZES.h3,
                           color: COLORS.black,
                           margin: 5
                                 }}>
                          {cat.name}
                    </Text>
                    </View>

              
            </TouchableHighlight>
           
              </View>
            ))}
          </View>  
       </View>   
    )
}

export default Categories