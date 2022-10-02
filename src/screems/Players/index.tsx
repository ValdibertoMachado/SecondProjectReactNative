import { FlatList, View, Text } from 'react-native';
import { Header } from '../../Components/Header';
import { styles } from './styles';
import { Highlight } from '../../Components/Highlight';
import { ButtonIcon } from '../../Components/ButtonIcon';
import { Input } from '../../Components/Input';
import { Filter } from '../../Components/Filter';
import { useState } from 'react';





export function Players() {

  const [team, setTeam] = useState('Time A')
  const [players, setPlayers] = useState(['1', '2'])

  return (
    <View style={styles.view}>
      
      <Header ShowBackButton/>
      <Highlight text='Nome da turma' subtext='Adicione a galera e separe os times'/>
      
      <View style={styles.viewtwo}>
      <Input valueplaceholder = 'Nome da Pessoa'/>
      <ButtonIcon icon = 'home' typecolor = 'green'/>  
      </View>
      <View style={styles.viewthree}>
      <FlatList
      style={styles.flatlist}
      data={[ 'Time A', 'Time B' ]}
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
      
      
    </View>
  );
}


