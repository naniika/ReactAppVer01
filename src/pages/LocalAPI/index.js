import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
  Alert,
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const Item = ({ name, email, bidang, onPress, onDelete }) => {
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={onPress}>
        <Image
          style={styles.avatar}
          source={{ uri: `https://i.pravatar.cc/150?u=${email}` }}
        />
      </TouchableOpacity>
      <View style={styles.desc}>
        <Text style={styles.descName}>{name}</Text>
        <Text style={styles.descEmail}>{email}</Text>
        <Text style={styles.descBidang}>{bidang}</Text>
      </View>
      <TouchableOpacity onPress={onDelete}>
        <Text style={styles.delete}>X</Text>
      </TouchableOpacity>
    </View>
  );
};

const LocalAPI = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bidang, setBidang] = useState('');
  const [users, setUsers] = useState([]);
  const [button, setButton] = useState('Simpan');
  const [selectedUser, setSelectedUser] = useState({});

  useEffect(() => {
    getData();
  }, []);

  const submit = () => {
    const data = {
      name,
      email,
      bidang,
    };
    if (button === 'Simpan') {
      Axios.post('http://10.0.2.2:3004/users', data).then((res) => {
        // console.log('res post: ', res);
        setName('');
        setEmail('');
        setBidang('');
        getData();
      });
    } else if (button === 'Update') {
      Axios.put(`http://10.0.2.2:3004/users/${selectedUser.id}`, data).then(
        (res) => {
          //   console.log('res update: ', res);
          setName('');
          setEmail('');
          setBidang('');
          getData();
          setButton('Simpan');
        }
      );
    }
  };

  const getData = () => {
    Axios.get('http://10.0.2.2:3004/users').then((res) => {
      //   console.log('res get: ', res);
      setUsers(res.data);
    });
  };

  const selectItem = (item) => {
    // console.log(('select item: ', item));
    setSelectedUser(item);
    setName(item.name);
    setEmail(item.email);
    setBidang(item.bidang);
    setButton('Update');
  };

  const deleteItem = (item) => {
    console.log(item);
    Axios.delete(`http://10.0.2.2:3004/users/${item.id}`).then((res) => {
      //   console.log('res delete: ', res);
      getData();
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Local API (JSON Server)</Text>
      <Text style={styles.text}>Masukan Data Anggota:</Text>
      <TextInput
        style={styles.input}
        placeholder="Nama Lengkap"
        value={name}
        onChangeText={(value) => setName(value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(value) => setEmail(value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Bidang"
        value={bidang}
        onChangeText={(value) => setBidang(value)}
      />
      <Button title={button} onPress={submit} />
      <View style={styles.line} />
      {users.map((user) => {
        return (
          <Item
            key={user.id}
            name={user.name}
            email={user.email}
            bidang={user.bidang}
            onPress={() => selectItem(user)}
            onDelete={() =>
              Alert.alert(
                'Peringatan!',
                'Anda yakin akan menghapus user ini?',
                [
                  { text: 'Tidak', onPress: () => getData() },
                  { text: 'Ya', onPress: () => deleteItem(user) },
                ]
              )
            }
          />
        );
      })}
    </View>
  );
};

export default LocalAPI;

const styles = StyleSheet.create({
  container: { padding: 20 },
  textTitle: { textAlign: 'center', marginBottom: 20 },
  text: { fontSize: 20, fontWeight: 'bold', marginBottom: 8 },
  line: { height: 2, backgroundColor: 'black', marginVertical: 20 },
  avatar: { width: 80, height: 80, borderRadius: 80 / 2 },
  input: {
    borderWidth: 1,
    marginBottom: 12,
    borderRadius: 25,
    paddingHorizontal: 18,
  },
  itemContainer: { flexDirection: 'row', marginBottom: 20 },
  desc: { marginLeft: 18, flex: 1 },
  descName: { fontSize: 20, fontWeight: 'bold' },
  descEmail: { fontSize: 16 },
  descBidang: { fontSize: 12, marginTop: 8 },
  delete: { fontSize: 20, fontWeight: 'bold', color: 'red' },
});
