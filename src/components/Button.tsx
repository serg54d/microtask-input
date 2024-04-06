import React, { ChangeEvent, MouseEventHandler, useState } from 'react';

type ButtonType = {
	name: string
	callBack: () => void
}

type AddMessageType = {
	
}

export const Button = (props: ButtonType) => {
	const onClickButtonHandler = () => {
		props.callBack()
	}

	return (
		<button onClick={onClickButtonHandler}>{props.name}</button>
	)
}