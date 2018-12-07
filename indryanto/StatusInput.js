import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, TextInput } from 'react-native';
import { Item } from 'native-base';

export default class StatusInput extends Component {
	render(){
		return(
			<View style={ styles.container }>
				<View style={{ backgroundColor: 'white' }}>
					<Item>
						<Image
						 source={require('../src/images/pp3.jpeg')}
						 style={{ margin: 10, width: 50, height: 50, borderRadius: 90 }}
						/>
						<TextInput placeholder="What's on your mind?"/>
					</Item>
					<View style={ styles.statusButton }>
						<View style={ styles.statusButtonItem }>
							<Image
							 style={{ width: 20, height: 20 }}
							 source={require('../src/images/pp3.jpeg')}
							/>
							<Text> Status</Text>
						</View>
						<View style={ styles.statusButtonItem }>
							<Image
							 style={{ width: 20, height: 20 }}
							 source={require('../src/images/pp3.jpeg')}
							/>
							<Text> Photo</Text>
						</View>
						<View style={ styles.statusButtonItem }>
							<Image
							 style={{ width: 20, height: 20 }}
							 source={require('../src/images/pp3.jpeg')}
							/>
							<Text> Life Event</Text>
						</View>
					</View>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		 backgroundColor: '#DCDEE3',
		 paddingTop: 10,
		 paddingBottom: 10,
		 flex: 1
	},
	statusButton: {
		paddingTop: 10,
		paddingBottom: 10,
		paddingRight: 30,
		paddingLeft: 30,
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	statusButtonItem: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center'
	}
})
