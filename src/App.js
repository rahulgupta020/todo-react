import React, {Component} from "react"
import TodoList from "./components/TodoList"
import $ from 'jquery';
import Popper from 'popper.js';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import GoogleLogin from "react-google-login";

const clientIdValue="464757477820-5b27p86hca5mevgubbsvrf3e8bf8on9q.apps.googleusercontent.com"

export class App extends Component {
  responseGoogle=(response)=>{
    console.log(response)
  }
  render(){
  return (
    <>
     <GoogleLogin
      // clientId="268887589904-9p434qrn1sn22idp7hlrjfnbd4opj88s.apps.googleusercontent.com"
      clientId={clientIdValue}
      buttonText="Login"
      onSuccess={this.responseGoogle}
      onFailure={this.responseGoogle}
      cookiePolicy={'single_host_origin'}
     />
      <TodoList/>
    </>
  )
}
}

export default App;
