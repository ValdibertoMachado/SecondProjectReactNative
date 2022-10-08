import { FlatList, View, Text, } from 'react-native';
import { Header } from '../../Components/Header';
import { styles } from './styles';
import { Highlight } from '../../Components/Highlight';
import { ButtonIcon } from '../../Components/ButtonIcon';
import { Input } from '../../Components/Input';
import { Filter } from '../../Components/Filter';
import { useState } from 'react';
import { PlayerCard } from '../../Components/PlayerCard';
import { ListEmpty } from '../../Components/ListEmpty';
import { Button } from '../../Components/Button';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootParamList = {
  players: undefined,
 }

 type Props = {
  navigation: NativeStackNavigationProp<RootParamList, 'players'>
 }

export function Players({ navigation }: Props) {

  const [team, setTeam] = useState('Time A')
  const [player, setPlayer] = useState<string[]>(['casa', 'ila'])
  
  
  function handleNewGroup(){
    
    navigation.navigate('players')
  }

  return (
    <SafeAreaView style={styles.view}>
      
      <Header ShowBackButton/>
      <Highlight text={'Nome da turma'} subtext='Adicione a galera e separe os times'/>
      
      <View style={styles.viewtwo}>

      <Input onchangetext='' valueplaceholder = 'Nome da Pessoa'/>
      <ButtonIcon icon = 'add' typecolor = 'green'/>  
      
      </View>

      <View style={styles.viewthree}>

      <FlatList
      style={styles.flatlist}
      data={[ 'Time A', 'Time B' , 'Time C']}
      keyExtractor={ (item) => item }
      renderItem={({ item }) => (
      <Filter
      onpress={() => setTeam(item)}
      text={item} 
      isActive={item === team} 
      />
      )}
      horizontal
      />
      <Text style={styles.text}>{player.length}</Text>
      
      </View>
      
      <View style={styles.viewfour}>
      
      <FlatList
      data={player}
      keyExtractor={ (item) => item }
      renderItem={({ item }) => (
        <PlayerCard text={item} icon='account-circle' typecolor='green' onRemove={() => {}}/>
      )}
      ListEmptyComponent = {() => (
      <ListEmpty text='Não existe pessoa neste time'/>
      )}
      contentContainerStyle={[
        player.length === 0 && {flex: 1, paddingVertical: '50%'}
      ]}
      />
      <Button
      onpress={handleNewGroup}
      boolean={false}
      text='Remover turma'/>
      </View>

    </SafeAreaView>
  );
}


