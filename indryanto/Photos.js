import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';

import PhotosHeader from './PhotosHeader';
import SeeAllText from './SeeAllText';

export default class Photos extends Component {
	render(){
		return(
			<View style={{ backgroundColor: '#DCDEE3' }}>
				<View style={ styles.container }>
					<PhotosHeader />
					<View style={ styles.viewGallery }>
						<View style={{ flex: 1 }}>
							<Image
							 source={require('../src/images/pp2.jpg')}
							 style={{ width: 190, height: 190, marginBottom: 3}}
							/>
							<Image
							 source={require('../src/images/pp2.jpg')}
							 style={{ width: 190, height: 190}}
							/>
						</View>
						<View style={{ flex: 1, alignItems: 'flex-end' }}>
							<Image
							 source={require('../src/images/pp2.jpg')}
							 style={{ width: 190, height: 126, marginBottom: 3}}
							/>
							<Image
							 source={require('../src/images/pp2.jpg')}
							 style={{ width: 190, height: 126, marginBottom: 3}}
							/>
							<Image
							 source={require('../src/images/pp2.jpg')}
							 style={{ width: 190, height: 125}}
							/>
						</View>
					</View>
					<SeeAllText text='Photos' />
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		marginBottom: 10
	},
	viewGallery: {
		justifyContent: 'space-between',
		flex: 1,
		flexDirection: 'row'
	}
})
