import React, { Component } from 'react'
import { Icon, Container, Label } from 'native-base'
import { Image, StyleSheet } from 'react-native'


export default class FriendHeader extends Component{
    render(){
        return(
            <Container style={ styles.container }>
                <Container style={ styles.leftHeader }>
                    <Image
                        source={ require('../../images/Ali.jpeg')}
                        style={{ width: 25, height: 25}}
                    />
                    <Label style={ styles.rightHeader }Friends ></Label>
                    <Icon
                        style={{ fontSize: 20, color: '#4E5665'}}
                        type='Entypo'
                        name='dot-single'
                    />
                    <Label>{this.props.total}</Label>
                </Container>
                <Label style={{ color: '#3578E5'}}>FIND FRIENDS</Label>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 7,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    leftHeader: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
    },
    rightHeader: {
        color: 'black',
        fontSize: 17,
        paddingLeft: 7,
        fontWeight: 'bold'
    }
})