import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      projects:[]
    }
  }

getprojects(){
  const url = "https://api.behance.net/v2/projects?q=motorcycle&client_id=dSoSYYcQQTsMHJ9O5hWkN6gns4aV5gOM"

  $.ajax({
    url: url,
    type: "get",
    data: {projects: {}},
    dataType: "jsonp"
  }).done((response) => {
    this.setState({
      portfolioData: response['projects']
    });
  }).fail((error) => {
    console.log("Ajax request fails")
    console.log(error);
  });
}


 render() {
     return (
       <div className="App">
         <div className="row">
           <div>
             {this.projects}
           </div>
         </div>

       </div>
     );
   }
 }





export default App;
