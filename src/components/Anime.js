import React from 'react'
import './Anime.css'

class Anime extends React.Component {
	getAiringTime = (arg) => {
		let airingStart = new Date(Date.parse(arg))
		console.log(airingStart.getDay())
	}

	state = {
		anime: this.props.anime
	}

	shouldComponentUpdate(nextProps) {
		return (nextProps.anime !== undefined)
	}

	render() {
		return(
			<div className="anime">
				<div className="anime-img" style={{backgroundImage: `url(${this.props.anime.coverImage.large})`}}>
					<div className="anime-title-studio">
						<div className="anime-title">
							{this.props.anime.title.native}
						</div>
						<div className="anime-studio">
							{this.props.anime.studios.edges.length === 0 ? "N/A" : this.props.anime.studios.edges[0].node.name}
						</div>
					</div>
				</div>
				<div className="anime-info">
					<div className="anime-info-wrapper">
						<div className="anime-info-top">
							<div className="anime-info-top-left">
								Info Top L
							</div>
							<div className="anime-info-top-right">
								<div>
									<i className="far fa-heart"></i> # 1
								</div>
								<div>
									<i className="fas fa-chart-line"></i> # 3
								</div>
							</div>
						</div>
					<div className="anime-info-bottom">
						Naofumi Iwatani, an uncharismatic Otaku who spends his days on games and manga, suddenly finds himself summoned to a parallel universe! He discovers he is one of four heroes equipped with legendary weapons and tasked with saving the world from its prophesied destruction. As the Shield Hero, the weakest of the heroes, all is not as it seems. Naofumi is soon alone, penniless, and betrayed. With no one to turn to, and nowhere to run, he is left with only his shield. Now, Naofumi must rise to become the legendary Shield Hero and save the world!<br/><br/>(Source: One Peace Books)<br/><br/><i>The first episode was pre-aired on December 27th, 2018. Regular broadcast begins on January 9th, 2019.</i>
					</div>
					</div>
					<div className="anime-footer">
						footer
					</div>
				</div>
			</div>
		)
	}
}

/*
<img src={this.props.anime.coverImage.large} alt={this.props.anime.title.native} classNameName="w-100" id="anime-image"/>
									<div className="overlay">
										{this.props.anime.title.native}
										<br/>
										{this.props.anime.studios.edges.length === 0 ? "N/A" : this.props.anime.studios.edges[0].node.name}
									</div>
*/

export default Anime

//<img src={this.props.anime.image_url} className="w-100 anime-image" alt={this.props.anime.title}/>