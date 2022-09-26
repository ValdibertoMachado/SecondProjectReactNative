
import {View, TextInput} from 'react-native';
import { styles } from './styles';

type Props = {
  valueplaceholder:string
}

export function Input({valueplaceholder}: Props) {
  return (
    <View style={styles.view}>
      <TextInput style={styles.textinput} placeholder={valueplaceholder} placeholderTextColor='black'/>
    </View>
  );
}