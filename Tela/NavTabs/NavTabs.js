import React, {useState, useContext, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import CadastroDeLivros from '../CadastroDeLivros.js/CadastroDeLivros';
import ListaDeLivros from '../ListaDeLivros/ListaDeLivros';
import {AuthContext} from '../../VariaveisGlobais/VariaveisGlobais';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function NavTabs() {
  useEffect(() => {
    const retornaLista = async () => {
      const minhaLista = await AsyncStorage.getItem('minhaListaDeLivros');
      if (minhaLista) {
        let lista = JSON.parse(minhaLista);
        setLivros(lista);
      } else {
        setLivros([]);
      }
    };
    retornaLista();
  }, []);

  function deleteCliente(id, titulo) {
    Alert.alert('Atenção!', `Deseja deletar ${titulo} ?`, [
      {
        text: 'Cancelar',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: async () => {
          let list = livros.filter(item => item.id !== id);
          setLivros(list);
          console.log(list);
          await AsyncStorage.setItem(
            'minhaListaDeLivros',
            JSON.stringify(list),
          );
        },
      },
    ]);
  }

  const {livros, setLivros} = useContext(AuthContext);

  const Tab = createMaterialTopTabNavigator();

  function Tela1(params) {
    return (
      <View style={style.viewStyle}>
        <FlatList
          data={livros}
          renderItem={({item}) => (
            <View style={style.container}>
              <View>
                <Text style={style.titulo}>
                  {'\n'}
                  Título: {item.titulo}
                  {'\n'}
                </Text>
                <Text style={style.corLetra}>Autor: {item.autor}</Text>
                <Text style={style.corLetra}>Gênero: {item.genero}</Text>
                <Text style={style.corLetra}>ISBN: {item.isbn}</Text>
                <Text style={style.corLetra}>
                  Quantidade de páginas: {item.qtdPag}
                  {'\n'}
                </Text>
              </View>

              <View>
                <TouchableOpacity
                  onPress={() => {
                    deleteCliente(item.id, item.titulo);
                  }}>
                  <View
                    style={{
                      //   backgroundColor: 'pink',
                      height: 50,
                      width: 50,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Image
                      style={style.tinyLogo}
                      source={require('../ListaDeLivros/lixeira-de-reciclagem.png')}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      </View>
    );
  }

  return (
    <Tab.Navigator>
      <Tab.Screen name="Lista de Livros" component={Tela1} />
      <Tab.Screen name="Cadastro De Livros" component={CadastroDeLivros} />
    </Tab.Navigator>
  );
}

const style = StyleSheet.create({
  viewStyle: {flex: 1, padding: 20},
  estiloInput: {marginBottom: 10, borderWidth: 1, padding: 10},
  titulo: {fontFamily: 'arial', fontSize: 20, fontWeight: 'bold'},
  corLetra: {color: 'black'},
  tinyLogo: {
    width: 30,
    height: 30,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderBottomWidth: 1,
  },
});
