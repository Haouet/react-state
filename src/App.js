import React from 'react';
import Picture from './Picture';
import imgSrc from "./assets/taherhaouet.jpg"

import './App.css';
export default class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {fullName:"taher haouet",bio: "bonjour" ,
    profession: "dev",imgSrc : true, timer: null};
    }
    componentDidMount(){
      console.log('Component à été monté');
    }
    componentDidUpdate(){
      console.log('component  mis à jour');
    }
    handleClick(){
    this.setState(e => (
      {
        fullName: !e.fullName,
        bio: !e.bio ,
        profession: !e.profession,
        imgSrc: !e.imgSrc
        
      })      
    );}        
    
  render() {   
  return (  
 <>
      <ul>
      {this.state.imgSrc ? <Picture imgSrc= {imgSrc}/>: null }
      <li>Bonjour: {this.state.fullName}</li>
      <li>Bio: {this.state.bio}</li>
      <li>profession :{this.state.profession}</li>
      </ul>

      <button onClick={()=>this.handleClick()}> 
      Click on 
      </button>
 </>

  );
}}
