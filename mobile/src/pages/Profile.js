/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { Text, StyleSheet, SafeAreaView, Image, View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import travaler from '../assets/travaler.png';
import capybara from '../assets/capybara.png';
import hotel from '../assets/hotel.png';
import placeholder from '../assets/placeholder.png';
import beach from '../assets/sun-umbrella.png';
import waterfalls from '../assets/waterfalls.png';




export default function Profile({ navigation }) {

    async function getProfile() {

    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.usernameBox}>
                <Image
                    source={travaler}
                    style={styles.travalerIcon}
                />
                <View>
                    <Text style={styles.username}>Francisco Vargas</Text>
                    <Text style={styles.subtitle}>Viajando de Mato Grosso</Text>

                </View>
            </View>

            <View style={styles.coinsBox}>
                <Image source={capybara} style={styles.travalerIcon}></Image>
                <View>
                    <Text style={styles.coinsSubtitle}>Você coletou</Text>
                    <Text style={styles.coinsTitle}>10 Capivaras</Text>
                </View>
            </View>


            <Text style={styles.divisorText}>Sua Atividade</Text>

            <View style={{flexDirection: 'column-reverse'}}>
                <View style={styles.commonBox}>
                    <Image source={hotel} style={styles.travalerIcon}></Image>
                    <View>
                        <Text style={styles.commonSubtitle}>Você se hospedou em</Text>
                        <Text style={styles.commonTitle}>Hotel 10</Text>
                    </View>
                </View>
                <View style={styles.commonBox2}>
                    <Image source={beach} style={styles.travalerIcon}></Image>
                    <View>
                        <Text style={styles.commonSubtitle2}>Foi à</Text>
                        <Text style={styles.commonTitle2}>Praia do Cajú</Text>
                    </View>
                </View>
                <View style={styles.commonBox}>
                    <Image source={waterfalls} style={styles.travalerIcon}></Image>
                    <View>
                        <Text style={styles.commonSubtitle3}>Você conheceu</Text>
                        <Text style={styles.commonTitle3}>Taquaruçu</Text>
                    </View>
                </View>
            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    usernameBox: {
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center'
    },
    travalerIcon: {
        width: 50,
        height: 50,
    },
    username: {
        color: '#262425',
        marginLeft: 15,
        fontFamily: 'Raleway',
        fontSize: 24,
    },
    subtitle: {
        marginLeft: 17,
    },
    coinsBox: {
        borderRadius: 10,
        elevation: 2,
        marginHorizontal: 20,
        backgroundColor: '#161b3d',
        padding: 10,
        flexDirection: 'row'
    },
    coinsSubtitle: {
        color: '#fff',
        marginLeft: 10,
        fontSize: 12
    },
    coinsTitle: {
        color: '#fff',
        marginLeft: 10,
        fontSize: 25,
        fontFamily: 'Fredoka One'
    },
    commonBox: {
        borderRadius: 10,
        marginHorizontal: 20,
        padding: 10,
        flexDirection: 'row'
    },
    commonBox2: {
        borderRadius: 10,
        marginHorizontal: 20,
        padding: 10,
        flexDirection: 'row-reverse'
    },
    commonSubtitle: {
        color: '#FF7058',
        marginLeft: 15,
        fontSize: 12
    },
    commonTitle: {
        color: '#FF7058',
        marginLeft: 15,
        fontSize: 25,
        fontFamily: 'Fredoka One'
    },
    commonSubtitle2: {
        color: '#1EB8E8',
        marginRight: 15,
        marginLeft: 15,
        fontSize: 12
    },
    commonTitle2: {
        color: '#1EB8E8',
        marginLeft: 15,
        marginRight: 15,
        fontSize: 25,
        fontFamily: 'Fredoka One'
    },
    commonSubtitle3: {
        color: '#8ADBA1',
        marginRight: 15,
        marginLeft: 15,
        fontSize: 12
    },
    commonTitle3: {
        color: '#8ADBA1',
        marginLeft: 15,
        marginRight: 15,
        fontSize: 25,
        fontFamily: 'Fredoka One'
    },
    divisorText: {
        color: 'rgba(193, 190, 190, 1)',
        fontFamily: 'Raleway',
        fontSize: 17,
        margin: 15
    }

})