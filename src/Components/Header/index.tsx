import { CaretLeft } from 'phosphor-react-native';
import { Image, Text, View, TouchableOpacity} from 'react-native';
import { styles } from './styles';

type Props = {
  ShowBackButton?: boolean;
}

export function Header({ShowBackButton = true}: Props) {
  return (
    <View style={styles.view}>
      {
        ShowBackButton &&
        <TouchableOpacity style={styles.TouchableOpacity}>
      <CaretLeft color='white' size={32}/>
        </TouchableOpacity>
      }
      
      
      <Image
        source={require('../../assets/logo.png')}
      />
    </View>
  );
}