
import {View, TouchableOpacity, Text,} from 'react-native';
import { styles } from './styles';


type Props = {
  text: string,

}

export function Button({text}: Props) {
  return (
    <View style={styles.view}>
      
      <TouchableOpacity style={styles.touchableopacity}>
      <Text style={styles.text}>
        {text}
      </Text>
      </TouchableOpacity>

    </View>
  );
}