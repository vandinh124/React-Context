import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

//The first outcome by "this.context"
// class Button extends Component {
// 	static contextType = LanguageContext;

// 	render() {
// 		// console.log(this.context); --> 'english'
// 		const text = this.context === 'english' ? 'Submit' : 'Voorleggen';
// 		return <button className='ui button primary'>{text}</button>;
// 	}
// }

//Same as line 5
//Button.contextType = LanguageContext;

//The second outcome by "Consumer"
class Button extends Component {
	renderSubmit(value) {
		return value === 'english' ? 'Submit' : 'Voorleggen';
	}

	renderButton(color) {
		return (
			<button className={`ui button ${color}`}>
				<LanguageContext.Consumer>{(value) => this.renderSubmit(value)}</LanguageContext.Consumer>
			</button>
		);
	}
	render() {
		return <ColorContext.Consumer>{(color) => this.renderButton(color)}</ColorContext.Consumer>;
	}
}

export default Button;
