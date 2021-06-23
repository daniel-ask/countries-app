import React from "react";
import './App.css';

export default class App extends React.Component {
	constructor(props){
		super(props)
		this.state = {data: []};
	}

	clickButton(){
	}

	async componentDidMount(){
		const res = await fetch('https://restcountries.eu/rest/v2/all');
		const data = await res.json();
		this.setState({ data: data });
	}

  render() {
		const {data} = this.state;
		console.log(this.state)
    return (
      <div className='app'>
        <h1>Country App</h1>
        <input type="text" className='input' style={{color: 'red'}}/>
				<button onClick={() => this.clickButton()}
				>Click Me</button>
				<ol>
					{data.map((country) => {
						return (
							<li key={country.name} >{country.name}</li>
						)
					})}
				</ol>
      </div>
    );
  }
}
