import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/Home';
import { Game } from '../screens/Game';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator>
      <Screen
        name='home'
        component={Home}
        options={{ headerShown: false }}></Screen>
      <Screen
        name='game'
        component={Game}
        options={{ headerShown: false }}></Screen>
    </Navigator>
  );
}
