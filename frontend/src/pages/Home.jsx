import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import {Header} from '../components/Header';
import LoginPage from './Login';

export default class Home extends Component {

  checkToken() {
    const token = localStorage.getItem('token')
    if(!token) return false
    return true
  }
	render() {
		return (

			<div className="Home">
                <Header />
				<Container maxWidth="md">
          {
            this.checkToken()? (
              <div>sfsd</div>
            ):(
              <LoginPage />
            )
          }
				</Container>
			</div>
		);
	}
}
