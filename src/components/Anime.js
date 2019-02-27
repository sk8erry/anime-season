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
							<div className="col-sm-5 col-6 anime-col">
								<div style={{position: "relative", height: "inherit"}}> {/*A hack to stop overlay from overflowing*/}
								<img src={this.props.anime.coverImage.large} alt={this.props.anime.title.native} className="w-100" id="anime-image"/>
									<div className="overlay">
										{this.props.anime.title.native}
										<br/>
										{this.props.anime.studios.edges[0].node.name}
									</div>
								</div>								
								</div>
								<div className="col-sm-7 col-6 anime-description">
									
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