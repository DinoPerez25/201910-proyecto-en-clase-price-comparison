import React, { Component } from 'react'
import {validateAuth,where} from './../Services/firebase'
const AuthContext = React.createContext()

class AuthProvider extends Component {
 
  constructor() {
    super()
    this.state = {  isAuth: false, email: '', user: []}
    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
  }

  login() {
    validateAuth
    .then((user)=>{
      if(user!=null){
        where("Usuarios","email",user.email)
        .on('value',snapshot=>{
          const usuario = snapshot.val();
          let user
          for(user in usuario){
            this.state.user = []
            this.state.user.push({
              id: user,
              name: usuario[user].name,
              email: usuario[user].email,
              address: usuario[user].address,
              profileImage: usuario[user].profileImage
            })
          }
      })
      this.setState({ isAuth: true, email: user.email})
      console.log(this.state)
      }
    })
  }

  logout() {
    this.setState({ isAuth: false })
  }

  componentwillMount(){
    validateAuth
    .then((user)=>{
        if(user!=null){
          this.setState({
            isAuth:true,
            email: user.email
          })
        }
    })
  }

  render() {
    return (
      <AuthContext.Provider
        value={{
          isAuth: this.state.isAuth,
          login: this.login,
          logout: this.logout,
          email: this.state.email,
          user: this.state.user
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    )
  }
}

const AuthConsumer = AuthContext.Consumer

export { AuthProvider, AuthConsumer }
