import { View } from 'react-native';
import { Header } from '../../Components/Header';
import { styles } from './styles';
import { Highlight } from '../../Components/Highlight';
import { ButtonIcon } from '../../Components/ButtonIcon';
import { Input } from '../../Components/Input';





export function Players() {

  return (
    <View style={styles.view}>
      
      <Header ShowBackButton/>
      <Highlight text='Nome da turma' subtext='Adicione a galera e separe os times'/>
      
      <View style={styles.viewtwo}>
      <Input valueplaceholder = 'Nome da Pessoa'/>
      <ButtonIcon icon = 'home' typecolor = 'green'/>  
      </View>

    </View>
  );
}


