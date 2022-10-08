import { FlatList, View } from 'react-native';
import { Header } from '../../Components/Header';
import { styles } from './styles';
import { Highlight } from '../../Components/Highlight';
import { GroupCard } from '../../Components/GroupCard';
import { useState } from 'react';
import { ListEmpty } from '../../Components/ListEmpty';
import { Button } from '../../Components/Button';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootParamList = {
  newgroup: undefined;
 }

 type Props = {
  navigation: NativeStackNavigationProp<RootParamList, 'newgroup'>
 }

export function Groups({ navigation }: Props) {

  const [group, setGroup] = useState<string[]>(['Galera da Rocket', 'Amigos']);

  function handleNewGroup(){
    
    navigation.navigate('newgroup')
  }
  
  return (
    <SafeAreaView style={styles.view}>

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
      onpress={handleNewGroup}
      boolean
      text='criar nova turma'
      />

    </SafeAreaView>
  );
}


