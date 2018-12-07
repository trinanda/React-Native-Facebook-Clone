import React, { Component } from 'react'
import { Container, Label, Icon } from 'native-base'
import { StyleSheet } from 'react-native'


export default class StatusReactButton extends Component{
    render(){
        return(
            <Container style={ styles.container }>
                <Container style={ styles.reactButton }>
                    <Icon
                        style={{ fontSize: 23, color: '#3568E5'}}
                        type='FontAwesome'
                        name='thumbs=up'
                    />
                    <Label style={{ fontWeight: 'bold', color: '#3568E5'}}>Like</Label>
                </Container>
                <Container style={ styles.reactButton }>
                    <Icon
                        style={{ fontSize: 23, color: '#4E5665'}}
                        type='Octicons'
                        name='comment'
                    />
                    <Label style={{ fontWeight: 'bold'}}>Comment</Label>
                </Container>
                <Container styles={ styles.reactButton }>
                    <Icon
                        style={{ fontSize: 23, color: '#4E5665'}}
                        type='MaterialCommunityIcons'
                        name='share'
                    />
                    <Label style={{ fontWeight: 'bold'}}>Share</Label>
                </Container>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        marginRight: 10,
        marginLeft: 10,
        justifyContent: 'space-between',
        borderTopWidth: 1,
        borderTopColor: '#4E5665',
        paddingLeft: 30,
        paddingRight: 30
    },
    reactButton: {
        alignItems: 'center',
        flexDirection: 'row',
        height: 40
    }
})