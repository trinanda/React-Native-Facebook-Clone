import React, { Component } from 'react'
import { Container, Label, Icon } from 'native-base'
import { Image, StyleSheet } from 'react-native'


export default class StatusHeader extends Component{
    render(){
        return(
            <Container style={ StyleSheet.container }>
                <Container style={{ flex: 1, flexDirection: 'row'}}>
                    <Image
                        source={require('../../images/Ali.jpeg')}
                        style={{ width: 50, height: 50, borderRadius: 90}}
                    />
                    <Container style={{ paddingLeft: 10}}>
                        <Label style={{ color: 'black', fontSize: 18, fontWeight: 'bold'}}>User Name</Label>
                        <Container style={{ flex: 1, flexDirection: 'row'}}>
                            <Label>{ this.props.date }</Label>
                            <Icon
                                style={{ color: '#4E5665', fontSize: 18}}
                                type='FontAwesome'
                                name='globe'
                            />
                        </Container>
                    </Container>
                </Container>
                <Icon
                    type='MaterialIcons'
                    name='more-horiz'
                />
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 5,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})