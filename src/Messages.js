import React, { Component } from 'react'

export default class Messages extends Component {
    render() {
        
        const { children } = this.props
        const imageStyle = {height: '60px', width: '60px', borderRadius: '5px'}
        const commentStyle = { marginTop: '1.2rem', marginLeft: '4rem', padding: '.4rem'}
        return (
            <React.Fragment>
                {
                children.map((item, index) => (
                    <article key={index} style={commentStyle}>
                        <div>
                            <div style={{float:'left', marginRight: '1rem'}}>
                                <img style={imageStyle} src={item.avatar}></img>
                            </div>
                            <div>
                                <p><strong>{item.name}</strong></p>
                                <p>{item.message}</p>
                                <small>likes: {item.likes} votes: {item.votes}</small>
                            </div>
                        </div>
                        { item.children ? <Messages children={item.children}/> : null}
                    </article>))
                }
            </React.Fragment>
        )
    }
}