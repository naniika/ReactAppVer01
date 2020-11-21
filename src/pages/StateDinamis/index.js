import React, {Component, useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const Hitung = () => {
  const [nomor, setNomor] = useState(0);
  return (
    <View>
      <Text>{nomor}</Text>
      <Button title="Tambah" onPress={() => setNomor(nomor + 1)} />
    </View>
  );
};

class HitungClass extends Component {
  state = {
    nomor: 0,
  };
  render() {
    return (
      <View>
        <Text>{this.state.nomor}</Text>
        <Button
          title="Tambah"
          onPress={() => this.setState({nomor: this.state.nomor + 1})}
        />
      </View>
    );
  }
}

const StateDinamis = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.textTitle}>
        Materi Component Dinamis dengan State
      </Text>
      <Text style={styles.textSection}>Function Component</Text>
      <Hitung />
      <Hitung />
      <Text style={styles.textSection}>Class Component</Text>
      <HitungClass />
      <HitungClass />
    </View>
  );
};

export default StateDinamis;

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
  },
  textTitle: {
    textAlign: 'center',
  },
  textSection: {
    marginTop: 20,
  },
});
