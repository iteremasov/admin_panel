import React, { Component } from 'react';
import Container from '@material-ui/core/Container'
import {Header} from '../components/Header'

export default class Home extends Component {
	render() {
		return (
			<div className="Home">
                <Header />
				<Container maxWidth="md">
                    Admin Panel
				</Container>
			</div>
		);
	}
}