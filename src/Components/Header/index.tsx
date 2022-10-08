import { CaretLeft } from 'phosphor-react-native';
import { Image, Text, View, TouchableOpacity} from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

type Props = {
  ShowBackButton?: boolean;
  
}

export function Header({ShowBackButton = true}: Props) {

  const navigation = useNavigation()

  function handleNewGroup(){
    
    navigation.goBack()
  }

  return (
    <View style={styles.view}>
      {
        ShowBackButton &&
        <TouchableOpacity onPress={handleNewGroup} style={styles.TouchableOpacity}>
      <CaretLeft color='white' size={32}/>
        </TouchableOpacity>
      }
      
      <Image
        source={require('../../assets/logo.png')}
      />
    </View>
  );
}