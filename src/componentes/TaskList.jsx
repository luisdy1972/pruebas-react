import React, { useState } from "react"
import { v4 as uuidv4 } from "uuid"

function TaskList() {
	const [tasks, setTasks] = useState([])
	const [taskInput, setTaskInput] = useState("")

	const handleSubmit = (event) => {
		event.preventDefault()
		setTasks([...tasks, { id: uuidv4(), name: taskInput }])
		setTaskInput("")
	}

	const handleDelete = (taskId) => {
		setTasks(tasks.filter((task) => task.id !== taskId))
	}

	const handleEdit = (taskId) => {
		const editedTask = tasks.find((task) => task.id === taskId)
		editedTask.isEditing = true
		setTasks([...tasks])
	}

	const handleCancel = (taskId) => {
		const editedTask = tasks.find((task) => task.id === taskId)
		editedTask.isEditing = false
		setTasks([...tasks])
	}

	const handleSave = (taskId, taskName) => {
		const editedTask = tasks.find((task) => task.id === taskId)
		editedTask.name = taskName
		editedTask.isEditing = false
		setTasks([...tasks])
	}

	return (
		<div>
			<h2 className="card-title">Chek list GPT</h2>
			<form className="contenedorForm" onSubmit={handleSubmit}>
				<input
					className="agregarTarea"
					type="text"
					value={taskInput}
					onChange={(event) => setTaskInput(event.target.value)}
				/>
				<button className="botonAgregarTareas" type="submit">
					OK
				</button>
			</form>
			<ul className="feedTareas">
				{tasks.map((task) => (
					<Task
						key={task.id}
						task={task}
						onDelete={handleDelete}
						onEdit={handleEdit}
						onCancel={handleCancel}
						onSave={handleSave}
					/>
				))}
			</ul>
		</div>
	)
}

function Task({ task, onDelete, onEdit, onCancel, onSave }) {
	const [taskInput, setTaskInput] = useState(task.name)

	if (task.isEditing) {
		return (
			<li>
				<form className="contenedorForm">
					<input
						className="agregarTarea"
						type="text"
						value={taskInput}
						onChange={(event) => setTaskInput(event.target.value)}
					/>
					<button
						className="botonAgregarTareas"
						type="button"
						onClick={() => onSave(task.id, taskInput)}
					>
						OK
					</button>
					<button
						className="botonAgregarTareas"
						type="button"
						onClick={() => onCancel(task.id)}
					>
						X
					</button>
				</form>
			</li>
		)
	}

	return (
		<li className="contenedorForm">
			{task.name}
			<div>
				<button
					className="botonAgregarTareas"
					type="button"
					onClick={() => onDelete(task.id)}
				>
					x
				</button>
				<button
					className="botonAgregarTareas"
					type="button"
					onClick={() => onEdit(task.id)}
				>
					Edit
				</button>
			</div>
		</li>
	)
}

export default TaskList
