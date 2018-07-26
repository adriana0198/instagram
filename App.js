import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RutasNoAutenticadas } from './Componentes/NoAutenticados/RutasNoAutenticadas';
import { RutasAutenticadas } from './Componentes/Autenticados/RutasAutenticadas';

console.disableYellowBox = ['Remote debugger']; 

export default class App extends React.Component {
  constructor(){
    super();
    this.state = { nombre: 'instagram' };
  }
  render() {
    return (
      <View style={styles.container}>
        <RutasAutenticadas/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});
