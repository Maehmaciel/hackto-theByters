/* eslint-disable prettier/prettier */
import React, { Component } from 'react';

import { SafeAreaView, Text, View, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';

// import { Container } from './styles';
import capybara from '../assets/capybara.png';

export default class Initial extends Component {
	state = {
		capiMessages: [],
		userOptions: [],
	};

	getInformationFromBot(button, text, index) {
		let userOptions = this.state.userOptions;
		let capiMessages = this.state.capiMessages;

		if (this.state.userOptions.length == 0 && button) {
			userOptions.push(button);
			capiMessages.unshift({ msg: true, text: 'Qual o motivo que te traz a Palmas?' });
			capiMessages.unshift({ msg: false, button1: {active: true, txt: "Turismo"}, button2: {active: true, txt: "Trabalho e afins"} });
			this.setState({ capiMessages })
		} else if (this.state.userOptions.length == 0 && !button) {
			userOptions.push(button);
			capiMessages.unshift({ msg: true, text: 'Vamos conhecer mais sobre a nossa cidade querida?' });
			capiMessages.unshift({ msg: false, button1: {active: true, txt: "Simbora"}, button2:{active: false, txt: ''}});
			this.setState({ capiMessages })
		} else if (this.state.userOptions.length > 0 && button) {
			userOptions.push(button);
			capiMessages.unshift({ msg: true, text: 'Que bom que escolheu Palmas como o seu destino, tenho certeza que essa cidade será encantadora, e eu, vou te ajudar a descobrir todos os encantos.' });
			this.setState({ capiMessages })
		}
	}
	componentDidMount() {
		let initialCapiMessages = [
			{ msg: true, text: 'Oi, Bem vindo(a) à Palmas!' },
			{ msg: true, text: 'Eu sou a CAPI, capivara, animal emblemático da cidade e sua nova amiga de viagem.' },
			{ msg: true, text: 'Pra te ajudar, eu preciso saber se você é um turista ou sempre tira fotinhas minhas no Parque Cesamar.' },
			{ msg: false, button1: {active: true, txt: "Estou visitando a cidade"}, button2: {active: true, txt: "Moro em Palmas"} },
		];

		let i = 0;
		var refreshMsg = setInterval(() => {
			let messages = this.state.capiMessages;

			messages.unshift(initialCapiMessages[i]);

			if (i < 4) {
				this.setState({
					capiMessages: messages,
				});
				i++;
			} else {
				clearInterval(refreshMsg);
			}


		}, 1500);
	}

	render() {
		return (
			<SafeAreaView style={styles.container}>
				<View style={{ flexDirection: 'row' }}>
					<Image source={capybara} style={styles.capybara} />
					<FlatList
						inverted
						data={this.state.capiMessages}
						extraData={this.state}
						keyExtractor={(item, index) => index.toString()}
						renderItem={({ item, index }) => {
							return (

								<View>
									{item.msg && (
										<View>
											<View style={styles.badgeReceived}>
												<Text style={{ color: '#000' }}>{item.text}</Text>
											</View>
										</View>
									)}

									{!item.msg && (
										<View>
											{item.button1.active && (
												<TouchableOpacity onPress={() => { this.getInformationFromBot(true, item.button1, index) }} style={styles.button}>
													<Text style={styles.textButton}>{item.button1.txt}</Text>
												</TouchableOpacity>
											)}

											{item.button2.active && (
												<TouchableOpacity onPress={() => { this.getInformationFromBot(false, item.button2) }} style={styles.button}>
													<Text style={styles.textButton}>{item.button2.txt}</Text>
												</TouchableOpacity>
											)}


										</View>
									)}

								</View>

							);
						}}
					/>
				</View>
			</SafeAreaView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 25,
		backgroundColor: '#f5f5f5',
		justifyContent: 'center',
		alignItems: 'center',
	},
	capybara: {
		width: 60,
		height: 60,
	},
	badgeReceived: {
		maxWidth: 300,
		marginLeft: 10,
		marginTop: 5,
		marginBottom: 5,
		padding: 10,
		borderRadius: 10,
		backgroundColor: '#dbdbdb',
	},
	button: {
		marginLeft: 10,
		marginTop: 5,
		marginBottom: 5,
		padding: 10,
		borderRadius: 10,
		borderColor: '#0E65E5',
		borderWidth: 3,
		justifyContent: 'center',
		alignItems: 'center',
	},
	textButton: {
		color: '#0E65E5',
		fontFamily: 'Raleway',
		fontSize: 15,
	},
});
