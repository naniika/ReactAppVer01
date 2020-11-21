import React from 'react';
import {Image, Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import emilia from '../../assets/icons/emilia.png';

const Product = (props) => {
  return (
    <View style={styles.wrapper}>
      <Image source={emilia} style={styles.image} />
      <Text style={styles.name}>Emilia-Tan</Text>
      <Text style={styles.note1}>Subaru-Kun</Text>
      <Text style={styles.note2}>DAISUKI!</Text>
      <TouchableOpacity onPress={props.onButtonPress}>
        <View style={styles.buttonWrapper}>
          <Text style={styles.buttonText}>HEHEHE</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  wrapper: {
    padding: 12,
    backgroundColor: '#F2F2F2',
    width: 212,
    borderRadius: 8,
  },
  image: {width: 188, height: 107, borderRadius: 8},
  name: {fontSize: 14, fontWeight: 'bold', marginTop: 16},
  note1: {fontSize: 12, fontWeight: 'bold', marginTop: 12, color: '#4a1aaa'},
  note2: {fontSize: 12, fontWeight: '300', marginTop: 12},
  buttonWrapper: {
    backgroundColor: '#4a11cc',
    paddingVertical: 6,
    borderRadius: 25,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#eeeeee',
    textAlign: 'center',
  },
});
