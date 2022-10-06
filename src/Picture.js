import React, { Component } from 'react'

export default class Picture extends Component {
    constructor(props) {
        super(props);
        this.state = {timer : null   }
    }
        componentDidMount(){
            this.setState({timer : setInterval(() => {
              console.log("timer appelé");
            },1000)})
            
          }
          componentWillUnmount(){
            console.log("component Picture à éte démonté");
            clearInterval(this.state.timer);
          }
  render() {
    return (
        <>
        <img src={this.props.imgSrc}  alt="imgSrc" /> 
        </>
    )
  }
}


