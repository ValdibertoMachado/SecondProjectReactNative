
import { useState } from 'react';
import {View, TextInput} from 'react-native';
import { Routes } from '../../routes';
import { styles } from './styles';

type Props = {
  valueplaceholder:string,
  onchangetext: any,
  }

export function Input({valueplaceholder, onchangetext}: Props,) {


  return (
    <View style={styles.view}>
      <TextInput onChangeText={onchangetext} style={styles.textinput} placeholder={valueplaceholder} placeholderTextColor='black'/>
    </View>
  );
}