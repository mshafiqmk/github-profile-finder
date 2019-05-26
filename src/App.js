import React from 'react';
import './App.css';
import axios from "axios";

class App extends React.Component {
  state = {
    responseData:{},
    response:{},
    name:"",
    dataLoaded:false
  }
  handleNameChange = (e)=>{
    this.setState({name:e.target.value});
  }
  handleSubmit = (e)=>{
    e.preventDefault();
    axios.get(`https://api.github.com/users/${this.state.name}`)
    .then(res=> {
      this.setState({
        response:res.status,
        responseData:res.data,
        dataLoaded:true
      })
    })
  }
  render(){
    let {dataLoaded,response,responseData} = this.state;
    let resultedProfile = dataLoaded ===true & response ===200 
                          ? <div className="card-deck">
                              <div className="card" style={{width:'400px'}}>
                                <img className="" src={responseData.avatar_url} alt="Github Profile Image" />
                                <div className="card-body">
                                  <h5 className="card-title">{responseData.name}</h5>
                                  <p className="card-text">Bio : {responseData.bio}</p>
                                  <p className="card-text">Location : {responseData.location}</p>
                                  <p className="card-text"><small class="text-muted">Public Repos : {responseData.public_repos}</small></p>
                                  <p className="card-text"><small class="text-muted">Public Gists : {responseData.public_gists}</small></p>
                                  <p className="card-text"><small class="text-muted">Public Gists : {responseData.public_gists}</small></p>
                                  <p className="card-text"><small class="text-muted">Followers : {responseData.followers}</small></p>
                                  <p className="card-text"><small class="text-muted">Following : {responseData.following}</small></p>
                                  <p className="card-text"><small class="text-muted">Following : {responseData.following}</small></p>
                                </div>
                              </div>
                            </div>
                          : <div> Loading .... </div>

    return (
      <div className="App">
        <header className="App-header">
          <p>GitHub Profile Finder</p>
          <form className="form-inline" onSubmit={this.handleSubmit} >
            <div class="form-group mx-sm-3 mb-2">
              <label for="profileId" className="sr-only">Profile Id</label>
              <input type="text" className="form-control" id="profileId" onChange={this.handleNameChange} placeholder="Profile Id"/>
            </div>
            <button type="submit" className="btn btn-primary mb-2">Find</button>
          </form>
        </header>
        <br/>
        <div className="col-md-3 col-in-center">
          <div >
            { resultedProfile }
          </div>
        </div>
        <br/>
      </div>
    );
  }
}

export default App;
