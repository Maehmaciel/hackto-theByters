/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react'
import { Text, StyleSheet, SafeAreaView, Image, View, TextInput, TouchableOpacity, Picker } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import logo from '../assets/logo.png'
import api from '../services/api'
export default function Register({ navigation }) {
    const [name, setName] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [sex, setSex] = useState('U')
    const [uf, setUf] = useState('N')

    async function signUpUser() {

        if (name != null && email != null && password != null) {
            const response = await api.put('/register', { name, email, password, uf })

            await AsyncStorage.multiSet([
                ['@Capivara:token', response.data.token],
                ['@Capivara:user', JSON.stringify(response.data.user)]
            ])

            navigation.navigate('Home')
        }

    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.logoContainer}>
                <Image source={logo} style={styles.logo}></Image>
                <Text style={styles.title}>eTurista</Text>
            </View>
            <Text style={styles.subtitle}>Crie uma conta agora</Text>
            <TextInput
                autoCorrect={false}
                style={styles.input}
                placeholder="Seu nome"
                placeholderTextColor="#999"
                value={name}
                onChangeText={setName}
            />
            <View
                style={styles.picker}
            >
                <Picker
                    style={styles.itemPicker}
                    selectedValue={sex}
                    onValueChange={(itemValue, itemIndex) =>
                        setSex(itemValue)
                    }>
                    <Picker.Item label="Sexo" value="U" />
                    <Picker.Item label="Feminino" value="F" />
                    <Picker.Item label="Masculino" value="M" />
                    <Picker.Item label="Prefiro não informar" value="O" />
                </Picker>
            </View>

            <View
                style={styles.picker}
            >
                <Picker
                    style={styles.itemPicker}
                    selectedValue={uf}
                    onValueChange={(itemValue, itemIndex) =>
                        setUf(itemValue)
                    }>
                    <Picker.Item label="Estado" value="N" />
                    <Picker.Item label="AC" value="AC" />
                    <Picker.Item label="AL" value="AL" />
                    <Picker.Item label="AM" value="AM" />
                    <Picker.Item label="BA" value="BA" />
                    <Picker.Item label="CE" value="CE" />
                    <Picker.Item label="DF" value="DF" />
                    <Picker.Item label="ES" value="ES" />
                    <Picker.Item label="GO" value="GO" />
                    <Picker.Item label="MA" value="MA" />
                    <Picker.Item label="MT" value="MT" />
                    <Picker.Item label="MS" value="MS" />
                    <Picker.Item label="MG" value="MG" />
                    <Picker.Item label="PA" value="PA" />
                    <Picker.Item label="PB" value="PB" />
                    <Picker.Item label="PR" value="PR" />
                    <Picker.Item label="PE" value="PE" />
                    <Picker.Item label="PI" value="PI" />
                    <Picker.Item label="RR" value="RR" />
                    <Picker.Item label="RO" value="RO" />
                    <Picker.Item label="RJ" value="RJ" />
                    <Picker.Item label="RN" value="RN" />
                    <Picker.Item label="RS" value="RS" />
                    <Picker.Item label="SC" value="SC" />
                    <Picker.Item label="SP" value="SP" />
                    <Picker.Item label="SE" value="SE" />
                    <Picker.Item label="TO" value="TO" />
                </Picker>
            </View>

            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#999"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                secureTextEntry={true}
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.input}
                placeholder="Senha"
                placeholderTextColor="#999"
                value={password}
                onChangeText={setPassword}
            />
            <TouchableOpacity onPress={signUpUser} style={styles.btnLogin}>
                <Text style={styles.txtBtnLogin}>Criar uma conta</Text>
            </TouchableOpacity>

            <Text style={styles.or}>ou</Text>

            <TouchableOpacity onPress={() => { navigation.navigate('Login') }} style={styles.btnRegister}>
                <Text style={styles.txtBtnRegister}>Voltar</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30
    },
    title: {
        color: '#161b3d',
        fontFamily: 'Fredoka One',
        fontSize: 40,
        marginLeft: 10
    },
    subtitle: {
        fontFamily: 'Cabin',
        marginTop: 20,
        color: '#ddd',
        fontSize: 17
    },
    logo: {
        width: 70,
        height: 70
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
        marginTop: 15
    },
    btnLogin: {
        height: 46,
        alignSelf: 'stretch',
        backgroundColor: '#161b3d',
        borderRadius: 3,
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center'
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
        fontSize: 17
    },
    btnRegister: {
        height: 46,
        alignSelf: 'stretch',
        backgroundColor: '#FFF',
        borderRadius: 3,
        marginTop: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    txtBtnRegister: {
        fontFamily: 'Cabin',
        fontWeight: 'bold',
        fontSize: 16,
        color: '#161b3d',
    },
    picker: {
        height: 46,
        width: '100%',
        backgroundColor: '#fff',
        alignSelf: 'stretch',
        marginTop: 15,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 3
    },
    itemPicker: {
        color: '#ddd',
        fontFamily: 'Cabin',
        fontSize: 17
    }


})