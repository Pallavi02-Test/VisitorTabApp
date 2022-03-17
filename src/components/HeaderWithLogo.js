import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { images } from '../constants';




const HeaderWithLogo = () => {

    return (

        // <View style={{
        //     felx:1,
        //     padding:10,
        //     marginTop:20,
        //     height:100,
        //     backgroundColor:'red'
        //     }}>
        <Image
            style={{ width: 220, height: 60 ,marginTop:40,marginLeft:30}}
            source={images.Logo}
        />
        // </View>

    );
};

export default HeaderWithLogo;