import React from 'react'

class Anime extends React.Component {
	render() {
		return(
			<div className="col-md-6">
				<div className="container py-3 anime-container">
				<div className="card">
					<div className="row ">
						<div className="col-sm-5 col-6 anime-col">
								<img src={this.props.anime.image_url} alt={this.props.anime.title} class="w-100" />
						</div>
						<div className="col-sm-7 col-6">
							<div className="card-title anime-title">{this.props.anime.title}</div>
							<div className="source-wrapper"><p className="source">{this.props.anime.source}</p></div>
							<p className="card-text anime-synopsis">{this.props.anime.synopsis}</p>	
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