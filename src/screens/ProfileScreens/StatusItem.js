import React, { Component } from 'react'
import { Container } from 'native-base'

import StatusHeader from './StatusHeader.js'
import StatusContent from './StatusContent.js'
import StatusTotalReact from './StatusTotalReact.js'
import StatusReactButton from './StatusReactButton.js'


export default class StatusItem extends Component{
    render(){
        return(
            <Container style={{ backgroundColor: 'white', marginTop: 10 }}>
                <StatusHeader date={ this.props.date} />
                <StatusContent text={ this.props.text } />
                <StatusTotalReact total={ this.props.total } />
                <StatusReactButton />
            </Container>
        )
    }
}