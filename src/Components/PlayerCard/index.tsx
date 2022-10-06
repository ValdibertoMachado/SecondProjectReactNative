import {MaterialIcons} from '@expo/vector-icons';
import {View, TouchableOpacity, Text,} from 'react-native';
import { styles } from './styles';
import { ButtonIcon } from '../ButtonIcon';


type Props = {
  text: string,
  typecolor: string,
  icon: keyof typeof MaterialIcons.glyphMap;
  onRemove: () => void;

}

export function PlayerCard({text, typecolor, icon, onRemove}: Props) {
  return (
    <View style={styles.view}>
      
      <MaterialIcons 
        name = {icon} 
        size = {24} 
        color = {typecolor} 
        style = {styles.materialicons}
        />
        <Text style={styles.text}>
        {text}
      </Text>
      <ButtonIcon  icon='close' typecolor='red' onPress = {onRemove}/>
      
    </View>
  );
}