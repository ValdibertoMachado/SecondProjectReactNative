import { View, Text} from 'react-native';
import { styles } from './styles';

type Props = {
    text: string,
    subtext: string,

}

export function Highlight({text, subtext}: Props) {
  return (
    <View style={styles.view}>
        <Text style={styles.text}>
            {text}
        </Text>
        <Text style={styles.subtext}>
            {subtext}
        </Text>
    </View>
  );
}