import React from 'react'


class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    if(this.props.formType === 'Sign up'){
      this.state = {
        username: "",
        password: "",
        email: ""
      }

    }
    else{
      this.state= {
        email: "",
        password: ""
      }
    }
    this.demoLogin = this.demoLogin.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  update(field){
      return e => this.setState({[field]: e.currentTarget.value})
  }

   handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

   renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  
  demoLogin(e) {
    e.preventDefault();
    const user = { email: "teddyroosevelt@test.com", password: "password" };
    this.props.processForm(user)
  }


  signUp(){
      return(
        <div>
        <img src={window.authBackGroundURL} className="authBackground" width="600" height="600"/>

        <form onSubmit={this.handleSubmit} className="authForm">
                <h1>{this.props.formType} and lets start your adventure!</h1>
            <div>{this.renderErrors()}</div>
                <label> 
                   <input type="text" value={this.state.username} onChange={this.update('username')} placeholder="Username"/>
                    <div className="formInput"></div>
                </label>
                <label> 
                  <input type="text" value={this.state.email} onChange={this.update('email')} placeholder="Email"/>
            <div className="formInput"></div>
                </label>
                <label> 
                    <input type="password" onChange={this.update('password')} placeholder="Password"/>
            <div className="formInput"></div>
                </label>
                <button type="submit">{this.props.formType}</button>

          </form>
        </div>
      )
  }

  logIn(){
        return(
          <div>
          <img src={window.authBackGroundURL} className="authBackground" />

          <form onSubmit={this.handleSubmit} className="authForm">

                <h1>{this.props.formType} and lets continue your adventure!</h1>
              <div>{this.renderErrors()}</div>
                <label> 
                    <input type="text" value={this.state.email} onChange={this.update('email')} placeholder="Email" />
              <div className="formInput"></div>
                </label>
                <label> 
                    <input type="password" onChange={ this.update('password')} placeholder="Password"/>
              <div className="formInput"></div>
                </label>
                <button type="submit">{this.props.formType}</button>
              <button onClick={this.demoLogin}>Demo Login</button>

          </form>
          </div>
      )
  }

    render(){
      
        if(this.props.formType === "Log in"){
            return this.logIn()
        }else{
            return this.signUp()
        }

    }
}


export default SessionForm