import {View, TouchableOpacity, Text,} from 'react-native';
import { styles } from './styles';


type Props = {
  isActive?: boolean,
  text: string,

}

export function Filter({isActive, text}: Props) {
  return (
    <View style={styles.view}>
      
      { isActive === true
      ? 
        <TouchableOpacity style={styles.touchableopacitytrue}><Text style={styles.text}>{text}</Text></TouchableOpacity> 
      : 
        <TouchableOpacity style={styles.touchableopacityfalse}><Text style={styles.text}>{text}</Text></TouchableOpacity>
      }
      
    </View>
  );
}