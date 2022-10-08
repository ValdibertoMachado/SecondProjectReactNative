
import {View, TouchableOpacity, Text,} from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

type Props = {

  text: string,
  onpress: any,
  boolean: boolean,
}

export function Button({text, onpress, boolean}: Props) {

  

  return (
    <View style={styles.view}>
      
      {boolean
      ?
      <TouchableOpacity onPress={onpress} style={styles.touchableopacity}><Text style={styles.text}>{text}</Text></TouchableOpacity>
      :
      <TouchableOpacity  style={styles.touchableopacity}><Text style={styles.text}>{text}</Text></TouchableOpacity>
      }

    </View>
  );
}