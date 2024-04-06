import React, { ChangeEvent, MouseEventHandler, useState } from 'react';

type AddMessageType = {
	addMessage: (title: string) => void
}

export const FullInput = (props: AddMessageType) => {
	let [title, setTitle] = useState('')
	console.log(title)

	const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
		setTitle(event.currentTarget.value)

	}

	const onCLickButtonHandler = () => {
		props.addMessage(title)
		setTitle('')


	}

	return (
		<div>
			<input value={title} onChange={onChangeInputHandler} />
			<button onClick={onCLickButtonHandler}>+</button>
		</div>
	)
}