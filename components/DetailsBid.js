import { View, Text, Image } from 'react-native';
import React from 'react'
import { COLORS, FONTS, SIZES } from '../constants/index.js';
import { EthPrice } from './SubInfo.js';

const DetailsBid = ({ bid }) => {
  return (
    <View style={{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      width:'100%',
      marginVertical:SIZES.base,
      paddingHorizontal:SIZES.base *2,
      backgroundColor:'#ffeaa7',
    }}>
      <Image source={bid.image}
          resizeMode='contain'
          style={{width:48,
          height:48}}
        />
        <View>
          <Text style={{
            fontFamily:FONTS.semiBold,
            fontSize:SIZES.small,
            color:COLORS.primary,
          }} >
            Bid placed by {bid.name}
          </Text>
          <Text style={{
            fontFamily:FONTS.regular,
            fontSize:SIZES.small - 2,
            color:COLORS.secondary,
            marginTop:3,
          }} >
            {bid.date}
          </Text>
        </View>
        <EthPrice price={bid.price}/>
    </View>
  )
}

export default DetailsBid