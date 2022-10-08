import {View, TouchableOpacity, Text,} from 'react-native';
import { styles } from './styles';


type Props = {
  isActive?: boolean,
  text: string,
  onpress: any
    
  }

export function Filter({isActive, text, onpress}: Props) {
  
  return (
    <View style={styles.view}>
      
      { isActive === true
      ? 
        <TouchableOpacity onPress={onpress} style={styles.touchableopacitytrue}><Text style={styles.text}>{text}</Text></TouchableOpacity> 
      : 
        <TouchableOpacity onPress={onpress} style={styles.touchableopacityfalse}><Text style={styles.text}>{text}</Text></TouchableOpacity>
      }
      
    </View>
  );
}