import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import emilia from '../../assets/icons/emilia.png';

const Cart = (props) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.iconWrapper}>
        <Image source={emilia} style={styles.iconEmilia} />
        <Text style={styles.notif}>{props.qty}</Text>
      </View>
      <Text style={styles.text}>Emilia</Text>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
    alignItems: 'center',
  },
  iconWrapper: {
    borderWidth: 2,
    borderColor: '#aa00ff',
    width: 103,
    height: 103,
    borderRadius: 100 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  iconEmilia: {width: 100, height: 100, borderRadius: 50},
  text: {
    fontSize: 12,
    color: '#777777',
    fontWeight: '700',
    marginTop: 8,
  },
  notif: {
    fontSize: 12,
    color: '#eeeeee',
    backgroundColor: '#0f0f2f',
    padding: 4,
    borderWidth: 2,
    borderColor: '#aa00ff',
    borderRadius: 25 / 2,
    width: 25,
    height: 25,
    position: 'absolute',
    top: 0,
    right: 0,
    textAlign: 'center',
  },
});
