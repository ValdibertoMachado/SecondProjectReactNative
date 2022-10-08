import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppRoutes } from './app.routes';
import {View} from 'react-native';

const Stack = createNativeStackNavigator();

export function Routes() {
  return (
    <View style={{flex:1, backgroundColor: 'gray'}}>
    <NavigationContainer>
        <AppRoutes/>
    </NavigationContainer>
    </View>
  );
}