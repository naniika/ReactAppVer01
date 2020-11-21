import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
import emilia from '../../assets/icons/emilia.png';

const StylingComponent = () => {
  return (
    <View style={{paddingVertical: 20}}>
      <Text style={styles.text}>Styleing Component</Text>
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: '#0abde3',
          borderWidth: 2,
          borderColor: '#000000',
          marginVertical: 20,
          marginLeft: 20,
        }}
      />
      <View
        style={{
          padding: 12,
          backgroundColor: '#F2F2F2',
          width: 212,
          borderRadius: 8,
        }}>
        <Image
          source={emilia}
          style={{width: 188, height: 107, borderRadius: 8}}
        />
        <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 16}}>
          Emilia-Tan
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: 'bold',
            marginTop: 12,
            color: '#4a1aaa',
          }}>
          Subaru-Kun
        </Text>
        <Text style={{fontSize: 12, fontWeight: '300', marginTop: 12}}>
          DAISUKI!
        </Text>
        <View
          style={{
            backgroundColor: '#4a11cc',
            paddingVertical: 6,
            borderRadius: 25,
            marginTop: 20,
          }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '600',
              color: '#eeeeee',
              textAlign: 'center',
            }}>
            HEHEHE
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#00ac0b',
  },
});

export default StylingComponent;
