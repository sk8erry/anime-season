import React from 'react'
import Anime from './Anime'

class Animes extends React.Component {
	state = {
		animes: []
	}

	shouldComponentUpdate (nextProps) {
		return (nextProps.animes[0] !== undefined)
	}

	render() {
		return(
			<div className="container">
				<div className="row justify-content-center">
					{this.props.animes.map(anime => <Anime anime={anime} key={anime.id}/>)}
				</div>
			</div>
		)
	}
}

export default Animes