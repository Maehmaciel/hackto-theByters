import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';
import logo from '../assets/logo.png';

//import logo from '../assets/shopping-bag.png';
import api from '../services/api';

export default function Login({navigation}) {
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  async function signInUser() {
    const response = await api.post('/auth', {email: username, password});

    await AsyncStorage.multiSet([
      ['@Capivara:token', response.data.token],
      ['@Capivara:user', JSON.stringify(response.data.user)],
    ]);

    navigation.navigate('Initial');
  }

  function redirectToRegister() {
    navigation.navigate('Register');
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.title}>eTurista</Text>
      </View>
      <Text style={styles.subtitle}>Faça login ou crie uma conta</Text>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
        placeholder="Digite o seu email"
        placeholderTextColor="#999"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        secureTextEntry={true}
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
        placeholder="Digite a sua senha"
        placeholderTextColor="#999"
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity onPress={signInUser} style={styles.btnLogin}>
        <Text style={styles.txtBtnLogin}>Fazer login</Text>
      </TouchableOpacity>

      <Text style={styles.or}>ou</Text>

      <TouchableOpacity onPress={redirectToRegister} style={styles.btnRegister}>
        <Text style={styles.txtBtnRegister}>Criar uma conta</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  title: {
    color: '#161b3d',
    fontFamily: 'Fredoka One',
    fontSize: 40,
    marginLeft: 10,
  },
  subtitle: {
    fontFamily: 'Cabin',
    marginTop: 20,
    color: '#ddd',
    fontSize: 17,
  },
  logo: {
    width: 70,
    height: 70,
  },
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 46,
    alignSelf: 'stretch',
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 3,
    paddingHorizontal: 15,
    marginTop: 15,
  },
  btnLogin: {
    height: 46,
    alignSelf: 'stretch',
    backgroundColor: '#161b3d',
    borderRadius: 3,
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtBtnLogin: {
    fontFamily: 'Cabin',
    fontWeight: 'bold',
    fontSize: 16,
    color: '#FFF',
  },
  or: {
    fontFamily: 'Cabin',
    marginTop: 5,
    color: '#ddd',
    fontSize: 17,
  },
  btnRegister: {
    height: 46,
    alignSelf: 'stretch',
    backgroundColor: '#FFF',
    borderRadius: 3,
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtBtnRegister: {
    fontFamily: 'Cabin',
    fontWeight: 'bold',
    fontSize: 16,
    color: '#161b3d',
  },
});
