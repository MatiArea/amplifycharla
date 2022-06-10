// import sections

import './styles.css'

import React from 'react'

const SignUp = () => {
	return (
		<>
			<div className="container-singup">
				<h1>Registrarse</h1>
				<input
					type={'text'}
					className="input"
					placeholder={'Nombre de Usuario'}
				></input>
				<input
					type={'password'}
					className="input-singup"
					placeholder={'Contraseña'}
				></input>
				<input
					type={'password'}
					className="input"
					placeholder={'Repita su contraseña'}
				></input>
				<button className="button">Registrarse</button>
			</div>
		</>
	)
}

export default SignUp
