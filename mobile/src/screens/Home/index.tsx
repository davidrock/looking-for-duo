import React from 'react';
import { View, Image, FlatList } from 'react-native';

import { styles } from './styles';
import logoImg from '../../assets/logo-nlw-esports.png';
import { Header } from '../../components/Header';
import { GameCard } from '../../components/GameCard';
import { GAMES } from '../../utils/games';

export function Home() {
  return (
    <View style={styles.container}>
      <Image source={logoImg} style={styles.logo}></Image>
      <Header
        title='Encontreu seu duo'
        subtitle='Selecione o game que deseja jogar...'></Header>

      <FlatList
        data={GAMES}
        contentContainerStyle={styles.contentList}
        horizontal
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <GameCard data={item}></GameCard>}></FlatList>
    </View>
  );
}
