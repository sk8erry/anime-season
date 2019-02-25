import React from 'react'

class Anime extends React.Component {
	getAiringTime = (arg) => {
		let airingStart = new Date(Date.parse(arg))
		console.log(airingStart.getDay())
	}

	render() {
		return(
			<div className="col-md-6">
				<div className="container py-3 anime-container">
					<div className="card">
						<div className="row">
							<div className="col-sm-4 col-6 anime-col">
									<img src={this.props.anime.coverImage.large} alt={this.props.anime.title.native} className="w-100" />
									<div class="tag">{this.props.anime.title.native}</div>
							</div>
								<div className="col-sm-8 col-6">
									<div className="anime-title">{this.props.anime.title.native}</div>
									<div className="source-wrapper"><p className="source">{this.props.anime.source}</p></div>
								</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Anime

//<img src={this.props.anime.image_url} className="w-100 anime-image" alt={this.props.anime.title}/>