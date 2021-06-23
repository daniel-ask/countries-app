import React, { Component } from 'react'

export default class Example extends Component {
	constructor(props){
		super(props)
		console.log('constructor')
		this.state = {name: 'Daniel'}
		this.updateState = this.updateState.bind(this);
	}

	updateState(){
		this.setState({name: 'Jurek'})
	}

	static getDerivedStateFromProps(){
		console.log('Derived state from props');
		return {lastName: 'Ask'}
	}

	render() {
		console.log('render')
		return (
			<div>
				<button onClick={this.updateState}>Change State</button>
			</div>
		)
	}

	componentDidMount(){
		console.log('Component did mount');
	}


	// exclusive functions that run on updateState

	// getDerivedStateFromProps
	
	shouldComponentUpdate(){
		console.log('Should component update')
		return true;
	}

	//render

	getSnapshotBeforeUpdate(){
		console.log('Get snapshot before update');
		return null
	}

	componentDidUpdate(){
		console.log('Component did update');
	}

	// Unmount

	componentWillUnmount(){
		console.log('Component will unmount');
	}
}
