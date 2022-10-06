import { FlatList, View } from 'react-native';
import { Header } from '../../Components/Header';
import { styles } from './styles';
import { Highlight } from '../../Components/Highlight';
import { GroupCard } from '../../Components/GroupCard';
import { useState } from 'react';
import { ListEmpty } from '../../Components/ListEmpty';
import { Button } from '../../Components/Button';
import { useNavigation } from '@react-navigation/native';


export function Groups() {

  const [group, setGroup] = useState<string[]>(['Galera da Rocket', 'Amigos']);
  
  const navigation = useNavigation()
  function handleNewGroup(){
    navigation.navigate('Players')
  }

  return (
    <View style={styles.view}>

      <Header/>
      <Highlight
      text='Turmas'
      subtext='Jogue com a sua turma'
      />
      <FlatList
      data={group}
      keyExtractor={item => item}
      renderItem={({ item }) => (
      <GroupCard 
      text={item}
      />
      )}
      ListEmptyComponent = {() => <ListEmpty text='Cadastre a primeira turma'/>}
      />
      <Button 
      text='criar nova turma' 
      onPress={handleNewGroup}
      />

    </View>
  );
}


