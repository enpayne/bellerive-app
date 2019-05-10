import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import Card from './Card';

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground source={require('./assets/bellerive-banner.jpg')} style={styles.header}>
          <Text style={styles.headerText}>The Belle Rive</Text>
        </ImageBackground>

        <View style={styles.content}>
          <Text style={{ fontSize: 18 }}>Thank you for installing the Belle Rive App! Please accept a free drink as a sign of our gratitude.</Text>

          <View style={styles.cards}>
            <Card source={require('./assets/mojito.jpg')} text={'Mojito'}/>
            <Card source={require('./assets/laolao.jpeg')} text={'Lao Lao'}/>
            <Card source={require('./assets/fruitshake.jpeg')} text={'Fruit Shake'}/>
            <Card source={require('./assets/beerlao.png')} text={'Beerlao'}/>
          </View>

        </View>
      </View>
    );
  }
}

const margin = 15;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center',
    marginLeft: margin,
    marginRight: margin,
    marginTop: margin,
  },
  cards: {
    marginTop: margin,
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  card: {
    backgroundColor: '#efeff4',
    padding: 10,
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
    shadowRadius: 2,
    shadowOpacity: 0.5,
    marginBottom: 25,
  },
  header: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 180,
    opacity: 0.7
  },
  headerText: {
    fontSize: 30,
    color: 'white',
    textTransform: 'uppercase',
    letterSpacing: 2
  }
});
