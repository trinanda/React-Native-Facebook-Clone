import React, { Component } from 'react'
import { Image, StyleSheet } from 'react-native'
import { Item, Container, Label, Input } from 'native-base'

export default class StatusInput extends Component{
    render(){
        return(
            <Container style={ StyleSheet.container }>
                <Container style={{ backgroundColor: 'white'}}>
                    <Item>
                        <Image
                            source={require('../../images/Ali.jpeg')}
                            style={{ margin: 10, width: 50, height: 50, borderRadius: 90 }}
                        />
                        <Input placeholder='Apa yang sedang Anda pikirkan?' />
                    </Item>
                    <Container style={ StyleSheet.statusButton }>
                        <Container style={ StyleSheet.statusButtonItem }>
                            <Image
                                style={{ width: 20, height: 20 }}
                                source={require('../../images/Ali.jpeg')}
                            />
                            <Label>Life Event</Label>
                        </Container>
                    </Container>
                </Container>
            </Container>
        )
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