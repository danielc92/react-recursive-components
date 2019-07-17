import React, {Component} from 'react'
import Messages from './Messages';
import faker from 'faker';

const {sentence} = faker.lorem;
const {firstName} = faker.name;
const {avatar} = faker.image;
const {number} = faker.random

export default class App extends Component {

  state = {
    data: {
      children: [
        {
          name: firstName(),
          avatar: avatar(),
          likes: number(),
          votes: number(),
          message: sentence(),
          children: [
            {
              name: firstName(),
              avatar: avatar(),
              likes: number(),
              votes: number(),
              message: sentence(),
              children: [
                {
                  name: firstName(),
                  avatar: avatar(),
                  likes: number(),
                  votes: number(),
                  message: sentence()
                }, {
                  name: firstName(),
                  avatar: avatar(),
                  likes: number(),
                  votes: number(),
                  message: sentence(),
                  children: [
                    {
                      name: firstName(),
                      avatar: avatar(),
                      likes: number(),
                      votes: number(),
                      message: sentence()
                    },
                    {
                      name: firstName(),
                      avatar: avatar(),
                      likes: number(),
                      votes: number(),
                      message: sentence()
                    },{
                      name: firstName(),
                      avatar: avatar(),
                      likes: number(),
                      votes: number(),
                      message: sentence()
                    },{
                      name: firstName(),
                      avatar: avatar(),
                      likes: number(),
                      votes: number(),
                      message: sentence()
                    }
                  ]
                }, {
                  name: firstName(),
                  avatar: avatar(),
                  likes: number(),
                  votes: number(),
                  message: sentence()
                }
              ]
            }, {
              name: firstName(),
              avatar: avatar(),
              likes: number(),
              votes: number(),
              message: sentence()
            }
          ]
        }, {
          name: firstName(),
          avatar: avatar(),
          likes: number(),
          votes: number(),
          message: sentence()
        }, {
          name: firstName(),
          avatar: avatar(),
          likes: number(),
          votes: number(),
          message: sentence()
        }
      ]
    }
  }

  render() {
    const {children} = this.state.data
    return (
      <div style={{fontFamily: 'sans-serif'}}>
        <Messages children={children}/>
      </div>
    )
  }
}
