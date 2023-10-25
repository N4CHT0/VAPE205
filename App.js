import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import SearchBar from './components/SearchBar';
import Slider from './components/Slider';
import Category from './components/Category';

import Slider1 from './src/assets/images/SLIDER1.jpeg';
import Slider2 from './src/assets/images/SLIDER2.jpeg';
import Slider4 from './src/assets/images/SLIDER4.jpeg';

export default function App() {
  const [searchText, setSearchText] = useState('');
  const sliderImages = [Slider1, Slider2, Slider4];
  const categories = [
    { iconName: 'bars', title: 'Menu' },
    { iconName: 'joint', title: 'Cigarete' },
    { iconName: 'tint', title: 'Liquid' },
    { iconName: 'user', title: 'User' },
  ];

  return (
    <ScrollView style={styles.container}>
      <SearchBar
        style={styles.searchBar}
        searchText={searchText}
        onSearchChange={(text) => setSearchText(text)}
      />
      <Slider style={styles.slider} images={sliderImages} />
      <View style={styles.categoryContainer}>
        {categories.map((category, index) => (
          <Category
            key={index}
            iconName={category.iconName}
            title={category.title}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F0F0F0',
  },
  searchBar: {
    backgroundColor: '#333',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  slider: {
    marginTop: 20,
  },
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 10,
  },
});
