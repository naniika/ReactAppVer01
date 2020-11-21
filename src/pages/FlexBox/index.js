import React, {Component, useEffect, useState} from 'react';
import {Text, View} from 'react-native';

// class FlexBox extends Component {
//   constructor(props) {
//     super(props);
//     console.log('==> constructor');
//     this.state = {
//       count: 200,
//     };
//   }

//   componentDidMount() {
//     console.log('====> component did mount');
//     setTimeout(() => {
//       this.setState({
//         count: 500,
//       });
//     }, 2000);
//   }

//   componentDidUpdate() {
//     console.log('==> component did update');
//   }

//   componentWillUnmount() {
//     console.log('====> component will unmount');
//   }

//   render() {
//     console.log('===> rander');
//     return (
//       <View>
//         <View
//           style={{
//             flexDirection: 'row',
//             backgroundColor: '#eeeeee',
//             alignItems: 'center',
//             justifyContent: 'space-between',
//           }}>
//           <View style={{backgroundColor: '#ffaaaa', width: 50, height: 50}} />
//           <View style={{backgroundColor: '#fafaaf', width: 50, height: 50}} />
//           <View style={{backgroundColor: '#aaffaa', width: 50, height: 50}} />
//           <View style={{backgroundColor: '#aafaff', width: 50, height: 50}} />
//         </View>
//         <View
//           style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
//           <View
//             style={{
//               backgroundColor: '#aafaff',
//               width: 100,
//               height: 100,
//               borderRadius: 50,
//             }}
//           />
//           <View style={{marginLeft: 20}}>
//             <Text style={{fontSize: 18, fontWeight: 'bold'}}>
//               Ini Warna Biru
//             </Text>
//             <Text>Sebiru Lautan Sedalam {this.state.count}m</Text>
//           </View>
//         </View>
//       </View>
//     );
//   }
// }

const FlexBox = () => {
  const [deep, setDeep] = useState(200);
  useEffect(() => {
    console.log('did mount');
    setTimeout(() => {
      setDeep(400);
    }, 2000);
    return () => {
      console.log('did update');
    };
  }, [deep]);

  // useEffect(() => {
  //   console.log('did update');
  //
  // }, [deep]);
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#eeeeee',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={{backgroundColor: '#ffaaaa', width: 50, height: 50}} />
        <View style={{backgroundColor: '#fafaaf', width: 50, height: 50}} />
        <View style={{backgroundColor: '#aaffaa', width: 50, height: 50}} />
        <View style={{backgroundColor: '#aafaff', width: 50, height: 50}} />
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
        <View
          style={{
            backgroundColor: '#aafaff',
            width: 100,
            height: 100,
            borderRadius: 50,
          }}
        />
        <View style={{marginLeft: 20}}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>Ini Warna Biru</Text>
          <Text>Sebiru Lautan Sedalam {deep}m</Text>
        </View>
      </View>
    </View>
  );
};

export default FlexBox;
