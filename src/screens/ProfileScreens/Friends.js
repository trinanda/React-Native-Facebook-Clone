import React, { Component } from 'react'
import { Container } from 'native-base'
import { Image } from 'react-native'

import FriendsHeader from './FriendsHeader.js'
import FriendList from './FriendList.js'
import SeeAllText from './SeeAllText.js'


export default class Friends extends Component{
    render(){
        return(
            <Container style={{ backgroundColor: '#DCDEE3'}}>
                <Container style={{ flex: 1, backgroundColor: 'white', marginBottom: 10}}>
                    <FriendsHeader total='4999' />
                    <Container style={{ marginBottom: 5, flexDirection: 'row', flex: 1, justifyContent: 'space-between'}}>
                        <FriendList
                            name='Tyson'
                            post='7'
                            image='https://cdn.pixabay.com/photo/2012/06/19/10/32/owl-50267_960_720.jpg'
                        />
                         <FriendList
                            name='Nurmagomedov'
                            post='5'
                            image='https://cdn.pixabay.com/photo/2018/09/14/22/51/cobblestones-3678292_960_720.jpg'
                            />
                         <FriendList
                            name='Pacquiao'
                            post='7'
                            image='https://cdn.pixabay.com/photo/2018/09/07/14/11/city-3660779_960_720.jpg'
                            />
                    </Container>
                    <Container style={{ marginBottom: 5, flexDirection: 'row', flex: 1, justifyContent: 'space-between'}}>
                        <FriendList
                            name='Modric'
                            post='23'
                            image='https://cdn.pixabay.com/photo/2018/10/03/21/13/mushroom-3722395_960_720.jpg'
                        />
                        <FriendList
                            name='Modric'
                            post='23'
                            image='https://cdn.pixabay.com/photo/2018/10/05/21/04/dahlia-3726844_960_720.jpg'
                            />
                        <FriendList
                            name='Modric'
                            post='23'
                            image='https://cdn.pixabay.com/photo/2018/09/25/21/54/hedgehog-3703244_960_720.jpg'
                            />
                    </Container>
                </Container>
                <SeeAllText text='Friends' />
            </Container>
        )
    }
}