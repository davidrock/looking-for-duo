import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Backgrounds } from '../../components/Backgrounds';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';

import { styles } from './styles';
import { GameParams } from '../../@types/navigation';
import { THEME } from '../../theme';
import logoImg from '../../assets/logo-nlw-esports.png';
import { Header } from '../../components/Header';

export function Game() {
  const route = useRoute();
  const navigation = useNavigation();
  const game = route.params as GameParams;
  console.log(game);

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <Backgrounds>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack}>
            <Entypo
              name='chevron-thin-left'
              color={THEME.COLORS.CAPTION_300}
              size={20}
            />
          </TouchableOpacity>

          <Image source={logoImg} style={styles.logo} />

          <View style={styles.right} />
        </View>

        <Image
          source={{ uri: game.bannerUrl }}
          style={styles.cover}
          resizeMode='cover'
        />

        <Header
          title={game.title}
          subtitle='Conecte-se e comece a jogar!'></Header>
      </SafeAreaView>
    </Backgrounds>
  );
}
