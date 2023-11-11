import React, { useState } from 'react'


export const CheckAdd = ({addTask}) => {
     const [message, setMessage] = useState('')
    const myFn = (e)=> {
		setMessage(e.currentTarget.value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(message)
		}

    const handleKeyPress = (e) => {
        if (e.key ==='enter') {
            handleSubmit(e)
        }
    }
  return (
    <form className='form-todo' onSubmit={handleSubmit}>
			<input
                value={message}
				type='text'
				onChange={myFn}
				placeholder='Напишите название цели'
                onKeyDown={handleKeyPress}
			/>
			<button type='submit'>
				Сохрани
			</button>
    </form>
	)
  }


