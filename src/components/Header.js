import { setStatusBarBackgroundColor } from "expo-status-bar"
import React from "react"
import { Image, Linking, TouchableHighlight, View } from "react-native"

const Header = () => {
   
    return (

        <View style={{ 
            height: 100,
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: 'row'
            }}>

        <TouchableHighlight  onPress={() => Linking.openURL ('https://google.com')}>

            <Image 
             source={{
                uri: 'https://media.istockphoto.com/photos/maki-sushi-food-picture-id1053853732?b=1&k=20&m=1053853732&s=612x612&w=0&h=TEW7ZYY6SKeABaf8nltV2K-5kEzILV_UyMjVc3d7LRw=' 
                }}   
             style={{
                width: 200,
                height: 100
             }}
              />

        </TouchableHighlight>

        <View style={{ marginRight: 20, marginTop: 10 }}>

        <Image
             source={{
                uri: 'https://th.bing.com/th/id/OIP.rJMKBEiZMLfPjIktDfKmhwHaGE?w=243&h=199&c=7&r=0&o=5&dpr=2&pid=1.7' 
                }}
             style={{
                width: 40,
                height: 40
             }} />

        </View>
     </View>  
    )    
}

export default Header