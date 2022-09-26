import { Text, View } from 'react-native';
import { styles } from './styles';
import { LoadIndicator } from './styles';


export function Loading() {
  return (
    <View style={styles.view}>
      <LoadIndicator/>
    </View>
  );
}