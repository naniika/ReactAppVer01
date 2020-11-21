import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

//primitive
const nama = 'Muhammad Arya Java';
let usia = '20';
const apakahLakiLaki = true;

// complex
const hewanPeliharaan = {
  nama: 'Puss',
  jenis: 'Kucing',
  usia: 2,
  apakahHewanLokal: true,
  warna: 'orange',
  orangTua: {
    jantan: 'raja',
    betina: 'ratu',
  },
}; //object

const namaOrang = ['Arya', 'Na', 'Budi', 'Ani', 'Susi', 'Mega']; // array

const sapaHewan = (objectHewan) => {
  // let hasilSapa = '';
  // if (objectHewan.nama === 'Puss') {
  //   hasilSapa = 'Halooo Puss, meong';
  // } else {
  //   hasilSapa = 'Ini Puss siapa ya?';
  // }
  // return hasilSapa;
  return objectHewan.nama === 'Puss'
    ? 'Haloooo Puss, Meong'
    : 'Ini Puss siapa ya?';
};

const BasicJavascript = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Materi Basic Javascript</Text>

      <Text>Nama: {nama}</Text>
      <Text>Usia: {usia}</Text>

      <Text>{namaOrang[0]}</Text>
      <Text>{namaOrang[1]}</Text>

      <Text>{sapaHewan(hewanPeliharaan)}</Text>
      {namaOrang.map((orang) => (
        <Text>{orang}</Text>
      ))}
    </View>
  );
};

export default BasicJavascript;

const styles = StyleSheet.create({
  container: {padding: 20},
  textTitle: {textAlign: 'center'},
});
