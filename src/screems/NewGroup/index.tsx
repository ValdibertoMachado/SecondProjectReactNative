import { View } from 'react-native';
import { Header } from '../../Components/Header';
import { styles } from './styles';
import { UsersThree } from 'phosphor-react-native'
import { Highlight } from '../../Components/Highlight';
import { Button } from '../../Components/Button';
import { Input } from '../../Components/Input';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootParamList = {
  players: {
    onChangeText: string,
    setonChangeText: any,

  },
 }

 type Props = {
  navigation: NativeStackNavigationProp<RootParamList, 'players'>
 }

export function NewGroup({ navigation }: Props) {

  const [onChangeText, setonChangeText] = useState<string>('')

  function handleNewGroup(){
    
    navigation.navigate('players', {onChangeText, setonChangeText})
  }

  return (
    <SafeAreaView style={styles.view}>
      <Header ShowBackButton/>
      <View style={styles.viewtwo}>
      <UsersThree size={56} color='green' weight='fill'/>
      <Highlight text='Nova turma' subtext='Crie a turma para adicionar as pessoas'/>
      <Input onchangetext={setonChangeText} valueplaceholder='Nome do Grupo'/>
      <Button
      boolean
      onpress={handleNewGroup}
      text='Criar'/>
      </View>
    </SafeAreaView>
  );
}


