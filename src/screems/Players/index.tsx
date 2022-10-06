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


export function Players() {

  const [team, setTeam] = useState('Time A')
  const [players, setPlayers] = useState([])

  return (
    <View style={styles.view}>
      
      <Header ShowBackButton/>
      <Highlight text='Nome da turma' subtext='Adicione a galera e separe os times'/>
      
      <View style={styles.viewtwo}>

      <Input valueplaceholder = 'Nome da Pessoa'/>
      <ButtonIcon icon = 'add' typecolor = 'green'/>  
      
      </View>

      <View style={styles.viewthree}>

      <FlatList
      style={styles.flatlist}
      data={[ 'Time A', 'Time B' , 'Time C']}
      keyExtractor={ (item) => item }
      renderItem={({ item }) => (
      <Filter  
      text={item} 
      isActive={item === team} 
      onPress={() => setTeam(item)}
      />
      )}
      horizontal
      />
      <Text style={styles.text}>{players.length}</Text>
      
      </View>
      
      <View style={styles.viewfour}>
      
      <FlatList
      data={players}
      keyExtractor={ (item) => item }
      renderItem={({ item }) => (
        <PlayerCard text={item} icon='account-circle' typecolor='green' onRemove={() => {}}/>
      )}
      ListEmptyComponent = {() => (
      <ListEmpty text='Não existe pessoa neste time'/>
      )}
      contentContainerStyle={[
        players.length === 0 && {flex: 1, paddingVertical: '50%'}
      ]}
      />
      <Button
      text='Remover turma'/>
      </View>
    </View>
  );
}


