import React from 'react'
import './Anime.css'

class Anime extends React.Component {
	getNextAiringTime = (args) => {
		for(let i = 0; i < args.length; i++) {
			if (args[i].node.timeUntilAiring > 0) {
				let airingDays = Math.floor(args[i].node.timeUntilAiring / 3600 / 24)
				let airingHours = Math.floor((args[i].node.timeUntilAiring / 3600) - airingDays * 24)
				let airingMinutes = Math.floor((args[i].node.timeUntilAiring - (airingDays * 3600 * 24) - (airingHours * 3600)) / 60)
				console.log(args[i].node.timeUntilAiring)
				console.log(airingMinutes)
				return [airingDays, airingHours, airingMinutes]
			}
		}
		return false
	} //Get next airing time in days, hours and minutes

	state = {
		anime: this.props.anime
	}

	shouldComponentUpdate(nextProps) {
		return (nextProps.anime !== undefined)
	}

	render() {
		let anime = this.props.anime
		let nextAiringTime = this.getNextAiringTime(anime.airingSchedule.edges)
		console.log(anime.title)
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
					<div className="anime-info-bottom">
						<div>Next episode airing in</div>
						<span>
							{nextAiringTime[2] > 0 ? 
								<span className="countdown">
									<span className="number">{nextAiringTime[2]}</span><span className="days"> minutes </span>
								</span>:null}
						</span>
						<span>
							{nextAiringTime[1] > 0 ? 
								<span className="countdown">
									<span className="number">{nextAiringTime[1]}</span><span className="days"> Hours </span>
								</span>:null}
						</span>
						<span>
							{nextAiringTime[0] > 0 ? 
								<span className="countdown">
									<span className="number">{nextAiringTime[0]}</span><span className="days"> Days </span>
								</span>:null}
						</span>
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