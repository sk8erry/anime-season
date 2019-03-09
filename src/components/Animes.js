import React from 'react'
import Anime from './Anime'
import './Animes.css'

class Animes extends React.Component {
	state = {
		animes: []
	}

	shouldComponentUpdate (nextProps) {
		return (nextProps.animes[0] !== undefined)
	}

	render() {
		return(
			<div className="animes-wrapper">			
				{this.props.animes.map(anime => <Anime anime={anime} key={anime.id}/>)}	
			</div>
		)
	}
}

export default Animes