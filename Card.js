import React from 'react';
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const onClick = () => {
  console.log('clicked');
};

const Card = ({source, text}) => (
  <TouchableOpacity
    style={styles.card}
    onPress={onClick}
  >
    <ImageBackground
      style={styles.cardImage}
      source={source}
    />
    <View style={styles.cardText}>
      <Text style={{textAlign: 'center'}}>{text}</Text>
    </View>
  </TouchableOpacity>
);

export default Card;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#efeff4',
    height: 120,
    width: '40%',
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    shadowColor: 'black',
    shadowOffset: {
      width: 2,
      height: 2
    },
    flexDirection: 'column',
    shadowRadius: 2,
    shadowOpacity: 0.5,
    marginBottom: 25,
  },
  cardImage: {
    flexGrow: 2
  },
  cardText: {
    height: '25%',
    flexDirection: 'column',
    justifyContent: 'center',
  }
});
