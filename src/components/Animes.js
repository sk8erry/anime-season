import React from 'react'
import Anime from './Anime'

class Animes extends React.Component {

	render() {
		console.log("Test anime component", this.props.animes)
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