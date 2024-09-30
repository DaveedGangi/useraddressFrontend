import {Component} from "react";

import "./App.css"

class App extends Component{

  state={
    name:"",
    street:"",
    city:"",
    state:"",
    zip_code:""
  }

  componentDidMount(){
    this.getAllUsers();
    this.getAllAddress();
  }

  getAllUsers=async()=>{
    const url="https://useraddress-js8h.onrender.com/users";
    const options={
      method:"GET"
    };
    const response = await fetch(url,options);
    if(response.ok){
      const data=await response.json();
      console.log(data);
      this.setState({users:data});
    }
    else{
      console.error("Error");
    }

  }

  getAllAddress=async()=>{
    const url="https://useraddress-js8h.onrender.com/users/1/address";
    const options={
      method:"GET"
    };
    const response = await fetch(url,options);
    if(response.ok){
      const data=await response.json();
      console.log(data);
      this.setState({address:data});
    }
    else{
      console.error("Error");
    }

  }

  user=async(e)=>{
    e.preventDefault();
    const{name}=this.state;

    console.log(name);
    const url="https://useraddress-js8h.onrender.com/users";
    const options={
      method:"POST",
      headers:{
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({name})
    };
    const response = await fetch(url,options);
    if(response.ok){
      
      console.log("Success")
      this.setState({name:""});
    }
    else{
      console.error("Error");
    }
    
  }

  address=async(e)=>{
    e.preventDefault();
    const{street,city,state,zip_code}=this.state;
    console.log(street,city,state,zip_code);
    const url="https://useraddress-js8h.onrender.com/users/1/address";
    const options={
      method:"POST",
      headers:{
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({street,city,state,zip_code})
    };
    const response = await fetch(url,options);
    if(response.ok){
      
      console.log("Success")
      this.setState({street:"",city:"",state:"",zip_code:""});
    }
    else{
      console.error("Error");
    }
    
  }

  handleChange=(e)=>{
    this.setState({name:e.target.value});
  }

  handleStreetChange=(e)=>{
    this.setState({street:e.target.value});
  }

  handleCityChange=(e)=>{
    this.setState({city:e.target.value});
  }

  handleStateChange=(e)=>{
    this.setState({state:e.target.value});
  }

  handleZipCodeChange=(e)=>{
    this.setState({zip_code:e.target.value});
  }



  render(){
    const{name,street,city,state,zip_code}=this.state;
    return(

      <div className="bg">
        Add User
        <form onSubmit={this.user}>
          <div>
          <label>Name</label>
          <input value={name} placeholder="Enter user name..." type="text"  onChange={this.handleChange} required/>
          </div>
          <button type="submit">Add User</button>
        </form>

        Add user Address 

  

        <form onSubmit={this.address}>
           <label>Street</label>
           <input value={street} placeholder="Enter street..." type="text"  onChange={this.handleStreetChange} required/>
           <label>City</label>
           <input value={city} placeholder="Enter city..." type="text" onChange={this.handleCityChange} required/>
           <label>State</label>
           <input value={state} placeholder="Enter state..." type="text"  onChange={this.handleStateChange} required/>
           <label>Zip Code</label>
           <input value={zip_code} placeholder="Enter zip code..." type="text"  onChange={this.handleZipCodeChange} required/>

          
          <button type="submit">Add Address</button>
        </form>


      </div>
    )
  }
}

export default App;
