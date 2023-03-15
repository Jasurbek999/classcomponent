import {Component} from 'react';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      count:0,
      key:true,
    }
       this.handleClick=this.handleClick.bind(this)
   
  }

  handleClick () {
     this.setState((prevState)=>({count: prevState.count + 1 }), ()=>{
      console.log('setState complated')
     })
     console.log("From handleClick")
    // this.setState((prevState)=>({count: prevState.count + 1 }))
    // this.setState((prevState)=>({count: prevState.count + 1 }))
    
  }
  


  render(){
    return (
      <div>
          <h1>Assalomu alaykum</h1>
          <button onClick={this.handleClick} >{this.state.count}</button>
   
      </div>
      
       )
  }
}

export default App