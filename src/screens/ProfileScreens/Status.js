import React, { Component } from 'react'
import { Container } from 'native-base'

import StatusItem from './StatusItem.js'


export default class Status extends Component{
    render(){
        return(
            <Container style={{ backgroundColor: '#DCDEE3'}}>
                <StatusItem
                    date='Oct 10 at 10:17am'
                    total='55'
                    image='https://cdn.pixabay.com/photo/2018/09/14/22/51/cobblestones-3678292_960_720.jpg'
                    text='Nambah Portofolio'
                />
                <StatusItem
                    date='Oct 5 at 08:17am'
                    total='55'
                    image='https://cdn.pixabay.com/photo/2018/10/03/21/13/mushroom-3722395_960_720.jpg'
                    text='Nambah Portofolio'
                />
                <StatusItem
                    date='Oct 22 at 08:17pm'
                    total='55'
                    image='https://cdn.pixabay.com/photo/2018/09/25/21/54/hedgehog-3703244_960_720.jpg'
                    text='Nambah Portofolio'
                />
            </Container>
        )
    }
}