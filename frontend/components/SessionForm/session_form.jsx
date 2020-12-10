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


  signUp(){
      return(
          <form onSubmit={this.handleSubmit}>
                <h1>{this.props.formType} and lets start your adventure!</h1>
                <label> 
                    Username: <input type="text" value={this.state.username} onChange={this.update('username')}/>
                </label>
                <label> 
                    Email: <input type="text" value={this.state.email} onChange={this.update('email')}/>
                </label>
                <label> 
                    Password: <input type="password" onChange={this.update('password')}/>
                </label>
                <button type="submit">{this.props.formType}</button>

          </form>
      )
  }

  logIn(){
        return(
          <form onSubmit={this.handleSubmit}>
                <h1>{this.props.formType} and lets start your adventure!</h1>
                <label> 
                    Email: <input type="text" value={this.state.email} onChange={this.update('email')}/>
                </label>
                <label> 
                    Password: <input type="password" onChange={ this.update('password')}/>
                </label>
                <button type="submit">{this.props.formType}</button>

          </form>
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