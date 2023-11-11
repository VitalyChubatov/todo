import React from 'react'
import { HiBadgeCheck, HiOutlineTrash } from 'react-icons/hi'

export const Check = ({todo , removeTask ,toggleTask}) => {

  return (
            <div key={todo.id} className='todo-item'>
                <div className='todo'>
                    <HiBadgeCheck className={todo.isComplete ? 'grenchekbox' : 'checkbox'} onClick={() => toggleTask(todo.id)} />
                    <p className='todo-task'>{todo.task}</p>
                    <HiOutlineTrash className='delete' onClick={() => removeTask(todo.id)}/>
                </div>
            </div>
		
	)
}
