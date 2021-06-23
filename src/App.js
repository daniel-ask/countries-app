import React from "react";
import Country from './Country';
import './App.css';

export default class App extends React.Component {
	constructor(props){
		super(props)
		this.state = {data: []};
	}

	async fetchCountries(e){
		try{
		const url = e ? `https://restcountries.eu/rest/v2/name/${e.target.value}`	: 'https://restcountries.eu/rest/v2/all';
		const res = await fetch(url)
		if(res.status >= 400){
			throw new Error('Something went wrong')
		}
		const data = await res.json();
		this.setState({ data: data })
		}catch(err){
			console.log(err)
		}
	}

	 componentDidMount(){
		 this.fetchCountries();
	}

  render() {
		const { data } = this.state;
		console.log(this.state)
    return (
      <div className='app'>
        <h1>Country App</h1>
        <input type="text" className='input' onChange={(event) => this.fetchCountries(event) }/>
				<section className='country-list'>
					{data.map((country) => {
						return <Country key={country.name} countryData={country}/>
					})}
				</section>
      </div>
    );
  }
}
