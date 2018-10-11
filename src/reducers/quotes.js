const quoteReducer =  (state = [], action) => {
	console.log(action)
	let idx 
	let quote
	let newState 
	switch(action.type){
		case "ADD_QUOTE":
			return [ 
				...state,
				{...action.quote, votes: 0}
			]
		case "REMOVE_QUOTE":
			return state.filter(q => q.id !== action.quoteId)
		
		case "UPVOTE_QUOTE":
			quote = state.find(q => q.id === action.quoteId)
			if (quote){
				return [
					...state.filter(q => q !== quote),
					{...quote, votes: quote.votes + 1}
				]
			} else {
				return state 
			}
		
		case "DOWNVOTE_QUOTE":
			quote = state.find(q => q.id === action.quoteId)
			if (quote){
				return [
					...state.filter(q => q !== quote),
					{...quote, votes: quote.votes === 0 ? 0 : quote.votes - 1}
				]
			} else {
				return state 
			}

		default:
			return state
	}
}

export default quoteReducer