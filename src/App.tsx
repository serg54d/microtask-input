import React, { MouseEventHandler, useState } from 'react';

import './App.css';
import { FullInput } from './components/FullInput';
import { Input } from './components/Input'
import { Button } from './components/Button'

function App() {
	let [message, setMessage] = useState([
		{ message: 'message1' },
		{ message: 'message2' },
		{ message: 'message3' },
		{ message: 'message4' },
		{ message: 'message5' },
	])

	let [title, setTitle] = useState('')
	console.log(title);


	const addMessage = (title: string) => {
		let newMessage = { message: title }
		setMessage([newMessage, ...message])

	}

	const callBackButtonHandler = () => {
		addMessage(title)
		setTitle('')
	}

	return (
		<div className="App">
			{/* <FullInput addMessage={addMessage} /> */}
			<Input title={title} setTitle={setTitle} />
			<Button name={'+'} callBack={callBackButtonHandler} />
			{message.map((el, index) => {
				return (
					<div key={index}>{el.message}</div>
				)
			})}
		</div>
	);
}

export default App;
