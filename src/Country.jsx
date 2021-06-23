import React from 'react'
import './Country.css'

export default function Country(props) {
	const {name, flag} = props.countryData;
	return (
		<div className='country-card'>
			<h3>{name}</h3>
			<img src={flag} alt={name} className='flag-img'/>
		</div>
	)
}
