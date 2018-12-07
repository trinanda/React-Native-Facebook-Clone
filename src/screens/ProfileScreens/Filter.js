import React, { Component } from 'react'
import { StyleSheet, Image } from 'react-native'
import { Icon, Container, Item, Label } from 'native-base'


export default class Filter extends Component{
    render(){
        return(
            <Container style={{ backgroundColor: '#DCDEE3'}}>
                <Container style = { styles.viewAddAnswer }>
                    <Container style={{ alignItems: 'center', flex: 1, flexDirection: 'row'}}>
                        <Image
                            source={require('../../images/Ali.jpeg')}
                            style={{ width: 25, height: 25 }}
                        />
                        <Label style={ styles.didYouKnow }>Did You Know</Label>
                    </Container>
                    <Label style={{ color: '#3578E5'}}ADD viewAddAnswer></Label>
                </Container>
                <Container style={ styles.viewFilterButton }>
                    <Item style={ styles.filterButton }>
                        <Icon
                            type='FontAwesome'
                            name='sliders'
                            style={{ fontSize: 20, color: '#4E5665'}}
                        />
                        <Label>FILTERS</Label>
                    </Item>
                    <Label style={{ color: '#3568E5' }}>MANAGE POSTS</Label>
                </Container>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    viewAddAnswer: {
        backgroundColor: 'white',
        marginBottom: 10,
        padding: 7,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    didYouKnow: {
        color: 'black',
        fontSize: 17,
        paddingLeft: 7,
        fontWeight: 'bold'
    },
    viewFilterButton:{
        backgroundColor: 'white',
        padding: 7,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    filterButton: {
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        padding: 5
    }
})