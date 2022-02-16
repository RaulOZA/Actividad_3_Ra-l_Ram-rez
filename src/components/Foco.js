import React from 'react'
import {Image, TouchableOpacity, View} from 'react-native';
import { useState } from 'react';

const Foco = () => {

    const [estatus, setEstatus] = useState(false);

  return (
      <View>
          <TouchableOpacity onPress={()=>{setEstatus(!estatus)}}> 

          <Image source={estatus ? require('../../img/focoOn.png') : require('../../img/focoOff.png')}
            style={{width: 300, height: 300}}
          />

          </TouchableOpacity>
          

      </View>

  )
}

export default Foco