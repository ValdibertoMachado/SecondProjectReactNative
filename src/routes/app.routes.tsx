import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Groups } from "../screems/Groups";
import { Players } from "../screems/Players";
import { NewGroup } from "../screems/NewGroup";

const Stack = createNativeStackNavigator();

export function AppRoutes() {
    return (
      <Stack.Navigator initialRouteName="groups" screenOptions={{headerShown:false}}>
        <Stack.Screen name="groups" component={Groups} />
        <Stack.Screen name="players" component={Players} />
        <Stack.Screen name="newgroup" component={NewGroup} />
      </Stack.Navigator>
    );
  }