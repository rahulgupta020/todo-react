import React, {Component} from "react"
import TodoList from "./components/TodoList"
import $ from 'jquery';
import Popper from 'popper.js';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import GoogleLogin from "react-google-login";

const clientIdValue=process.env.REACT_APP_GOOGLE_CLIENT_ID

export class App extends Component {
  responseGoogle=(response)=>{
    const firstFiveChars = clientIdValue.substring(0, 5);
    console.log("firstFiveChars = ", firstFiveChars)
    console.log(response.spl)
  }
  render(){
  return (
    <>
     <GoogleLogin
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
