import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Category = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon style={styles.icon} name={props.iconName} size={32} color="#333" />
      </View>
      <Text style={styles.categoryTitle}>{props.title}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Icon name="heart" size={18} color="#CCD005" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Icon name="shopping-cart" size={18} color="#CCD005" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Icon name="share" size={18} color="#CCD005" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Icon name="info" size={18} color="#CCD005" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 16,
    alignItems: 'center',
    marginBottom: 16,
  },
  iconContainer: {
    backgroundColor: '#CCD005',
    borderRadius: 50,
    padding: 16,
  },
  icon: {
    color: '#333',
  },
  categoryTitle: {
    marginTop: 12,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  button: {
    width: 40,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#CCD005',
  },
});

export default Category;
