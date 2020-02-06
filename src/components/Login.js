
import React from 'react';
import auth from '../utils/auth';
import { AppContext } from './../context/ContextProvider.js';




 
 
class Login extends React.Component {

    static contextType = AppContext;
 
    constructor(props){
        super(props);
        this.handleUserName = this.handleUserName.bind(this);
        this.handleUserPass = this.handleUserPass.bind(this);
        this.processLogin = this.processLogin.bind(this);
        this.state = {show : !auth.checkLocalAuth()};
        
    }
    
    processLogin(event) {
        event.preventDefault();
        if (this.state.userName === "Marcos" && this.state.userPass === "123") {
            auth.storeAuth(this.state.userName, this.state.userPass);
            alert("Welcome " + this.state.userName);
            
            //this.setState({show:false});
            //this.context.login(this.state.userName);
            this.redirect();
        } else {
            alert("Wrong user");
        }
        
    }

    componentDidMount() {
        //llamada cuando se carga por primera vez
        auth.checkLocalAuth() && this.redirect();
    }

    componentDidUpdate() {
        auth.checkLocalAuth() && this.redirect();
    }

    redirect() {
            this.context.setUserLogged(true);
            this.context.setUserName(auth.getUserName());
            this.props.history.push("/dashboard");
    }

    handleUserName(event){
        this.setState({userName: event.target.value});
    }

    handleUserPass(event){
        this.setState({userPass: event.target.value});
    }

    render() {
        
        return  (
            <div className="container">
    <div className="row">
      <div className="col-lg-10 col-xl-9 mx-auto">
        <div className="card card-signin flex-row my-5">
          <div className="card-img-left d-none d-md-flex">
          </div>
          <div className="card-body">
            <h5 className="card-title text-center">Register</h5>
            <form className="form-signin">
              <div className="form-label-group">
                <input type="text" id="inputUserame" className="form-control" placeholder="Username" required autofocus onChange = {this.handleUserName}/>
                <label for="inputUserame">Username</label>
              </div>

              <div className="form-label-group">
                <input type="password" id="inputPassword" className="form-control" placeholder="Password" required onChange = {this.handleUserPass}/>
                <label for="inputPassword">Password</label>
              </div>

              <button className="btn btn-lg btn-primary btn-block text-uppercase" type="button" onClick = {this.processLogin}>Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>

            
        );

       } 
    }
 



export default Login;