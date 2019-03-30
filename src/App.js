import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';


export function queryBehance(query) {
 var term = query.replace(/\s/, "+");
 var url = "https://api.behance.net/v2/projects?q=motorcycle&client_id=dSoSYYcQQTsMHJ9O5hWkN6gns4aV5gOM" + term;

class App extends Component {
  render() {

    return $.ajax({
    url: url,
    type: "get",
    data: {projects: {}},
    dataType: "jsonp",
  }).done((response) => {
    return <div className="App">response["projects"]
    </div>
  }).fail(() => {
    console.log("Ajax request fails")
  })
}

  }
}
export default App;
