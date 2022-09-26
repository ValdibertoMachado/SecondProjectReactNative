import { View } from 'react-native';
import { Header } from '../../Components/Header';
import { styles } from './styles';
import { UsersThree } from 'phosphor-react-native'
import { Highlight } from '../../Components/Highlight';
import { Button } from '../../Components/Button';
import { Input } from '../../Components/Input';


export function NewGroup() {

  return (
    <View style={styles.view}>
      <Header ShowBackButton/>
      <View style={styles.viewtwo}>
      <UsersThree size={56} color='green' weight='fill'/>
      <Highlight text='Nova turma' subtext='Crie a turma para adicionar as pessoas'/>
      <Input valueplaceholder='Nome do Grupo'/>
      <Button text='Criar'/>
      </View>
    </View>
  );
}


