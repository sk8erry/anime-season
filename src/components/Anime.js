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
		let anime = this.props.anime
		return(
			<div className="anime">
				<div className="anime-img" style={{backgroundImage: `url(${anime.coverImage.large})`}}>
					<div className="anime-title-studio">
						<div className="anime-title">
							{anime.title.native}
						</div>
						<div className="anime-studio">
							{anime.studios.edges.length === 0 ? "N/A" : anime.studios.edges[0].node.name}
						</div>
					</div>
				</div>
				<div className="anime-info">
					<div className="anime-info-wrapper">
						<div className="anime-info-top">
							<div className="anime-info-top-left">
								{anime.source}
							</div>
							<div className="anime-info-top-right">
								<div>
									<i className="far fa-heart"></i> {anime.popularity}
								</div>
							</div>
						</div>
					<div className="anime-info-bottom" dangerouslySetInnerHTML={{__html: anime.description}}>
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