import { View, Text } from 'react-native';
import { EthPrice,NFTTitle } from './SubInfo.js';
import { COLORS,SIZES,FONTS } from '../constants/index.js';

import {useState} from 'react'

const DetailsDesc = ({data}) => {

  const [text,setText] = useState(data.description.slice(0,100));
  const [readMore,setReadMore] = useState(false);

  return (
    <>
    <View style={{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      width:'100%'
    }}>
      <NFTTitle title={data.name} subTitle={data.creator} titleSize={SIZES.extraLarge} subTitleSize={SIZES.font} />
      <EthPrice price={data.price} />
    </View>
    <View style={{marginVertical:SIZES.extraLarge*1.5}}>
      <Text style={{
        fontSize:SIZES.font,
        fontFamily:FONTS.semiBold,
        color:COLORS.gray,
      }}>
        Description
      </Text>
      <View style={{marginTop:SIZES.base}}>
      <Text style={{
        fontSize:SIZES.small,
        fontFamily:FONTS.regular,
        color:COLORS.secondary,
        lineHeight:SIZES.large,
      }}>
        {text}
        <Text style={{
        fontSize:SIZES.small,
        fontFamily:FONTS.semiBold,
        color:COLORS.secondary,}}
        onPress={() => {
          if(!readMore){
            setText(data.description);
            setReadMore(true);
          }
          else{
            setText(data.description.slice(0,100));
            setReadMore(false);
          }
        }}
        >
          {readMore? ' show less':' Read More'}
        </Text>
      </Text>
      </View>
    </View>
    </>
  )
}

export default DetailsDesc