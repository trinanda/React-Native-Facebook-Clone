import React, { Component } from 'react'
import { Icon, Container, Text } from 'native-base'
import { TouchableOpacity, StyleSheet } from 'react-native'


export default class MoreInfo extends Component{
    render(){
        return(
            <Container StyleSheet={ styles.container }>
                <TouchableOpacity style= { styles.touchable }>
                    <Icon
                        type={ this.props.iconType }
                        name={ this.props.iconName }
                        style={{ color: '#4E5665', fontSize: 18 }}
                    />
                    <Text>{ this.props.text }</Text>
                </TouchableOpacity>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        paddingBottom: 10,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    touchable: {
        borderWidth: 1,
        flexDirection: 'row',
        borderRadius: 5,
        padding: 5,
    }
})