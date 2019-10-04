/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react'
import { Text, StyleSheet, SafeAreaView, Image } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'

import logo from '../assets/logo.png'

export default function Initial({ navigation }) {

    useEffect(() => {
        AsyncStorage.getItem('@Capivara:token').then(token => {
          if (token) {
            navigation.navigate('Home', { token })
          } else {
            navigation.navigate('Login')
          }
        });
      }, [navigation]);

    return (
        <SafeAreaView style={styles.container}>
            <Image source={logo} style={styles.logo}></Image>
            <Text style={styles.title}>eTurista</Text>

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
        width: 90,
        height: 90,
        marginBottom: 10
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
        backgroundColor: '#0E65E5',
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
        justifyContent: 'center',
        alignItems: 'center'
    },
    txtBtnRegister: {
        fontFamily: 'Cabin',
        fontWeight: 'bold',
        fontSize: 16,
        color: '#161b3d',
    }
})