import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Groups } from "../screems/Groups";
import { Players } from "../screems/Players";
import { NewGroup } from "../screems/NewGroup";

const Stack = createNativeStackNavigator();

export function AppRoutes() {
    return (
      <Stack.Navigator initialRouteName="Groups" screenOptions={{headerShown:false}}>
        <Stack.Screen name="Groups" component={Groups} />
        <Stack.Screen name="Players" component={Players} />
        <Stack.Screen name="NewGroup" component={NewGroup} />
      </Stack.Navigator>
    );
  }