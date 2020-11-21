import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
// import emilia from '../../assets/icons/emilia.png';

const Story = (props) => {
  return (
    <View style={{alignItems: 'center', marginRight: 20}}>
      <Image
        source={{
          uri: props.gambar,
        }}
        style={{width: 70, height: 70, borderRadius: 70 / 2}}
      />
      <Text style={{maxWidth: 50, textAlign: 'center'}}>{props.judul}</Text>
    </View>
  );
};

const PropsDinamis = () => {
  return (
    <View>
      <Text>Materi Component Dinamis dengan Props</Text>
      <ScrollView horizontal>
        <View style={{flexDirection: 'row'}}>
          <Story
            judul="Gambar 1"
            gambar="https://scontent-xsp1-2.cdninstagram.com/v/t51.2885-19/s320x320/92760091_747998675604558_3529397273932857344_n.jpg?_nc_ht=scontent-xsp1-2.cdninstagram.com&_nc_cat=106&_nc_ohc=eATPVYkAqlwAX9Z8lVq&oh=becbe8520524ed0cc8e3d799330fe569&oe=5FCD3287"
          />
          <Story
            judul="Gambar 2"
            gambar="https://scontent-xsp1-1.xx.fbcdn.net/v/t1.0-1/p320x320/121713309_3594680787266281_7538341318005541704_n.jpg?_nc_cat=110&ccb=2&_nc_sid=7206a8&_nc_ohc=aI1moVWZLcsAX9b4_bM&_nc_ht=scontent-xsp1-1.xx&tp=6&oh=b648ce335dea393842337bd4dbc65ba7&oe=5FCA427E"
          />
          <Story
            judul="Gambar 3"
            gambar="https://scontent-xsp1-2.cdninstagram.com/v/t51.2885-19/s320x320/92760091_747998675604558_3529397273932857344_n.jpg?_nc_ht=scontent-xsp1-2.cdninstagram.com&_nc_cat=106&_nc_ohc=eATPVYkAqlwAX9Z8lVq&oh=becbe8520524ed0cc8e3d799330fe569&oe=5FCD3287"
          />
          <Story
            judul="Gambar 4"
            gambar="https://scontent-xsp1-1.xx.fbcdn.net/v/t1.0-1/p320x320/121713309_3594680787266281_7538341318005541704_n.jpg?_nc_cat=110&ccb=2&_nc_sid=7206a8&_nc_ohc=aI1moVWZLcsAX9b4_bM&_nc_ht=scontent-xsp1-1.xx&tp=6&oh=b648ce335dea393842337bd4dbc65ba7&oe=5FCA427E"
          />
          <Story
            judul="Gambar 5"
            gambar="https://scontent-xsp1-2.cdninstagram.com/v/t51.2885-19/s320x320/92760091_747998675604558_3529397273932857344_n.jpg?_nc_ht=scontent-xsp1-2.cdninstagram.com&_nc_cat=106&_nc_ohc=eATPVYkAqlwAX9Z8lVq&oh=becbe8520524ed0cc8e3d799330fe569&oe=5FCD3287"
          />
          <Story
            judul="Gambar 6"
            gambar="https://scontent-xsp1-1.xx.fbcdn.net/v/t1.0-1/p320x320/121713309_3594680787266281_7538341318005541704_n.jpg?_nc_cat=110&ccb=2&_nc_sid=7206a8&_nc_ohc=aI1moVWZLcsAX9b4_bM&_nc_ht=scontent-xsp1-1.xx&tp=6&oh=b648ce335dea393842337bd4dbc65ba7&oe=5FCA427E"
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default PropsDinamis;

const styles = StyleSheet.create({});
