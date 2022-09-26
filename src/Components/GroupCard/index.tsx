
import {View, TouchableOpacity, Text} from 'react-native';
import { styles } from './styles';
import { UsersThree } from 'phosphor-react-native'

type Props = {
  text: string,

}

export function GroupCard({text}: Props) {
  return (
    <View style={styles.view}>
      
    <TouchableOpacity style={styles.touchableopacity}>
    <UsersThree size={32} color='green' style={styles.usersthree} weight='fill'/>
    <Text>
      {text}
    </Text>
    </TouchableOpacity>
    
    </View>
  );
}