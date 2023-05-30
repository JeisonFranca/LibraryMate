// import React, {useState, useContext, useEffect} from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   FlatList,
//   TouchableOpacity,
//   Image,
// } from 'react-native';
// import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
// import {AuthContext} from '../../VariaveisGlobais/VariaveisGlobais';

// export default function ListaDeLivros() {
//   function deleteCliente(id) {
//     let list = livros.filter(item => item.id !== id);
//     setLivros(list);
//     console.log(list);
//   }

//   const {livros, setLivros} = useContext(AuthContext);

//   const Tab = createMaterialTopTabNavigator();

//   function Tela1(params) {
//     return (
//       <View style={style.viewStyle}>
//         <FlatList
//           data={livros}
//           renderItem={({item}) => (
//             <View style={style.container}>
//               <View>
//                 <Text style={style.titulo}>
//                   {'\n'}
//                   Título: {item.titulo}
//                   {'\n'}
//                 </Text>
//                 <Text style={style.corLetra}>Autor: {item.autor}</Text>
//                 <Text style={style.corLetra}>Gênero: {item.genero}</Text>
//                 <Text style={style.corLetra}>ISBN: {item.isbn}</Text>
//                 <Text style={style.corLetra}>
//                   Quantidade de páginas: {item.qtdPag}
//                   {'\n'}
//                 </Text>
//               </View>

//               <View>
//                 <TouchableOpacity
//                   onPress={() => {
//                     deleteCliente(item.id);
//                   }}>
//                   <View>
//                     <Image
//                       style={style.tinyLogo}
//                       source={require('./lixeira-de-reciclagem.png')}
//                     />
//                   </View>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           )}
//         />
//       </View>
//     );
//   }

//   return Tela1();
// }

// const style = StyleSheet.create({
//   viewStyle: {flex: 1, padding: 20},
//   estiloInput: {marginBottom: 10, borderWidth: 1, padding: 10},
//   titulo: {fontFamily: 'arial', fontSize: 20, fontWeight: 'bold'},
//   corLetra: {color: 'black'},
//   tinyLogo: {
//     width: 30,
//     height: 30,
//   },
//   container: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     borderBottomWidth: 1,
//   },
// });
