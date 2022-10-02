
import {View, TouchableOpacity, Text,} from 'react-native';
import { styles } from './styles';
import {MaterialIcons} from '@expo/vector-icons';

type Props = {
  icon: keyof typeof MaterialIcons.glyphMap,
  typecolor: string,
}

export function ButtonIcon({icon, typecolor}: Props) {
  return (
    <View>
      
      <TouchableOpacity style={styles.touchableopacity}>
        <MaterialIcons 
        name = {icon} 
        size = {24} 
        color = {typecolor} 
        style = {styles.materialicons}
        />
      </TouchableOpacity>

    </View>
  );
}