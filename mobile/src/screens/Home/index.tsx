import React, { useEffect, useState } from 'react';
import { Image, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';
import logoImg from '../../assets/logo-nlw-esports.png';
import { Header } from '../../components/Header';
import { GameCard, GameCardProps } from '../../components/GameCard';
import { Backgrounds } from '../../components/Backgrounds';

export function Home() {
  const [games, setGames] = useState<GameCardProps[]>([]);

  useEffect(() => {
    fetch('http://192.168.1.66:3333/games')
      .then((response) => response.json())
      .then((data) => setGames(data));
  }, []);

  const navigation = useNavigation();

  function handleOpenGame({ id, title, bannerUrl }: GameCardProps) {
    navigation.navigate('game', { id, title, bannerUrl });
  }

  return (
    <Backgrounds>
      <SafeAreaView style={styles.container}>
        <Image source={logoImg} style={styles.logo}></Image>
        <Header
          title='Encontreu seu duo'
          subtitle='Selecione o game que deseja jogar...'></Header>

        <FlatList
          data={games}
          contentContainerStyle={styles.contentList}
          horizontal
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <GameCard
              data={item}
              onPress={() => handleOpenGame(item)}></GameCard>
          )}></FlatList>
      </SafeAreaView>
    </Backgrounds>
  );
}
