
import {View, TouchableOpacity, Text} from 'react-native';
import { styles } from './styles';

type Props = {
  text: string,

}

export function ListEmpty({text}: Props) {
  return (
    <View style={styles.view}>
      <Text>
        {text}
      </Text>
    </View>
  );
}