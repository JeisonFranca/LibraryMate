import React, {useState, useContext, useEffect} from 'react';
import {AuthContext} from '../../VariaveisGlobais/VariaveisGlobais';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function CadastroDeLivros() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [isbn, setISBN] = useState('');
  const [qtdPag, setQtdPag] = useState('');

  const {livros, setLivros} = useContext(AuthContext);

  async function CadastrarLivros() {
    if (title == '' || author == '') {
      Alert.alert('Atenção!', 'Título e Autor são obrigatórios.', [
        {
          text: 'Cancela',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    } else {
      livros.push({
        id: livros.length + 1,
        titulo: title,
        autor: author,
        genero: genre,
        isbn: isbn,
        qtdPag: qtdPag,
      });

      console.log(livros);

      Alert.alert('Oba!', 'Livro cadastrado com sucesso.', [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);

      await AsyncStorage.setItem('minhaListaDeLivros', JSON.stringify(livros));

      setTitle('');
      setAuthor('');
      setGenre('');
      setISBN('');
      setQtdPag('');
    }
  }

  return (
    <ScrollView
      contentContainerStyle={{flexGrow: 1}}
      keyboardShouldPersistTaps="handled">
      {/* <KeyboardAvoidingView keyboardVerticalOffset={100} behavior="padding"> */}
      <View style={style.viewStyle}>
        <TextInput
          placeholderTextColor={'gray'}
          placeholder="Título"
          value={title}
          onChangeText={txt => {
            setTitle(txt);
          }}
          style={style.estiloInput}
        />

        <TextInput
          placeholderTextColor={'gray'}
          placeholder="Autor"
          value={author}
          onChangeText={setAuthor}
          style={style.estiloInput}
        />

        <TextInput
          placeholderTextColor={'gray'}
          placeholder="Gênero"
          value={genre}
          onChangeText={setGenre}
          style={style.estiloInput}
        />

        <TextInput
          placeholderTextColor={'gray'}
          placeholder="ISBN"
          value={isbn}
          onChangeText={setISBN}
          style={style.estiloInput}
        />

        <TextInput
          placeholderTextColor={'gray'}
          placeholder="Quantidade de Páginas"
          value={qtdPag}
          onChangeText={setQtdPag}
          keyboardType="numeric"
          style={style.estiloInput}
        />

        <TouchableOpacity
          style={{width: '70%'}}
          onPress={() => {
            CadastrarLivros();
          }}>
          <View style={style.botao}>
            <Text style={style.btnTexto}>Cadastrar</Text>
          </View>
        </TouchableOpacity>
      </View>
      {/* </KeyboardAvoidingView> */}
    </ScrollView>
  );
}

const style = StyleSheet.create({
  viewStyle: {flex: 1, padding: 20, alignItems: 'center', marginBottom: 50},
  estiloInput: {marginBottom: 10, borderWidth: 1, padding: 15, width: '100%'},
  botao: {
    borderWidth: 1,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  btnTexto: {color: 'white'},
});
