import React, { Component } from 'react';
import { connect } from 'react-redux'
import QuoteForm from './containers/QuoteForm'
import Quotes from './containers/Quotes'

class App extends Component {
	render() {
		return (
		<div className="container-fluid">
			<div className="row title justify-content-center" style={{ paddingTop: '12px' }}>
			<h1>Quote Maker</h1>
			</div>
			<hr />
			<QuoteForm />
			<Quotes />
			<button onClick={() => console.log(this.props)}>Click for props</button>
		</div>
		);
	}
}

export default connect(null,null)(App);
