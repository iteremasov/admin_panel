import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import LoginPage from './Login';
import Main from './Main'

export default class Home extends Component {

  checkToken() {
    const token = localStorage.getItem('token')
    if (!token) return false
    return true
  }
  render() {
    return (

      <div className="Home">
        <Container maxWidth="lg">
          {
            this.checkToken() ? (
              <Main />
            ) : (
                <LoginPage />
              )
          }
        </Container>
      </div>
    );
  }
}
