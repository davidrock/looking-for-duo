// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Backgrounds } from './src/components/Backgrounds';
import { StatusBar } from 'react-native';
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black,
} from '@expo-google-fonts/inter';
import { Home } from './src/screens/Home';
import { Loading } from './src/components/Loading';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black,
  });

  return (
    <Backgrounds>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent></StatusBar>

      {fontsLoaded ? <Home /> : <Loading />}
    </Backgrounds>
  );
}

const styles = StyleSheet.create({});
