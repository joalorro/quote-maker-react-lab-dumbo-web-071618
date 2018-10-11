import React from 'react';
import { connect } from 'react-redux'
import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes'

const QuoteCard = (props) =>{
	// debugger
	const handleClick = (e) => {
		props[e.target.name](props.quote.id)
	}
	const handleDelete = () => {
		props['removeQuote'](props.quote.id)
	}
	return (
		<div>
			<div className="card card-inverse card-success card-primary mb-3 text-center">
			<div className="card-block">
				<blockquote className="card-blockquote">
				<p>{props.quote.content}</p>
				<footer>- <cite title="Source Title">{props.quote.author}</cite></footer>
				</blockquote>
			</div>
			<div className="float-right">
				<div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
				<button
					type="button"
					className="btn btn-primary"
					name="upvoteQuote"
					onClick={handleClick}
				>
					Upvote
				</button>
				<button
					type="button"
					className="btn btn-secondary"
					name="downvoteQuote"
					onClick={handleClick}
				>
					Downvote
				</button>
				<button
					type="button"
					className="btn btn-danger"
					onClick={handleDelete}
				>
					<span aria-hidden="true">&times;</span>
				</button>
				</div>
				{/* <div>Votes: {Render Quote Votes}</div> */}
			</div>
			</div>
		</div>
	)
}
const mapDispatchToProps = dispatch => {
	return {
		upvoteQuote: (quoteId) => dispatch(upvoteQuote(quoteId)),
		downvoteQuote: (quoteId) => dispatch(downvoteQuote(quoteId)),
		removeQuote: (quoteId) => dispatch(removeQuote(quoteId))
	}
}

export default connect(null,mapDispatchToProps)(QuoteCard);
