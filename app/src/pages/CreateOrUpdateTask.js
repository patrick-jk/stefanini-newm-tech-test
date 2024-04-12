import React, {useState} from "react";
import './css/CreateOrUpdateTask.css';
import '../App.css'
import {useLocation, useNavigate} from "react-router-dom";

const CreateOrUpdateTask = (props) => {
    const location = useLocation();
    const task = location.state ? location.state.task : null;

    const [taskTitle, setTaskTitle] = useState(task ? task.title : "");
    const [taskDescription, setTaskDescription] = useState(task ? task.description : "");
    const [taskStatus, setTaskStatus] = useState(task ? task.taskStatus : "");


    const dbMethod = props.dbMethod;
    const changeText = "Create" === dbMethod ? "Criar Tarefa" : "Editar Tarefa";

    let navigate = useNavigate();
    const returnToHomeRoute = () => {
        let path = "/";
        navigate(path);
    }

    const handleDelete = (event) => {
        event.preventDefault();
        if (!taskTitle || !taskDescription || !taskStatus) {
            alert("Preencha todos os campos");
        } else {
            if (window.confirm("Tem certeza que deseja deletar esta tarefa?")) {
                deleteTask();
            }
        }

        function deleteTask() {
            fetch(`http://localhost:8080/tasks/${task.id}`, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': 'http://localhost:3000',
                },
                body: JSON.stringify({
                    id: task.id,
                })
            }).then(response => {
                console.log(response.statusCode);
                if (response.ok) {
                    alert("Tarefa deletada com sucesso");
                    setTaskTitle("");
                    setTaskDescription("");
                    setTaskStatus("");
                    returnToHomeRoute();
                } else {
                    alert("Erro ao deletar tarefa. Por favor, tente novamente.");
                }
            });
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!taskTitle || !taskDescription || !taskStatus) {
            alert("Preencha todos os campos");
        } else {
            createOrUpdateTaskAndSave();
        }

        function createOrUpdateTaskAndSave() {
            fetch(`http://localhost:8080/tasks/${"Create" === dbMethod ? "create" : "update"}`, {
                method: ("Create" === dbMethod ? 'POST' : 'PUT'),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: task ? task.id : null,
                    title: `${taskTitle}`,
                    description: `${taskDescription}`,
                    taskStatus: `${taskStatus}`
                })
            }).then(response => {
                if (response.ok) {
                    alert("Tarefa criada com sucesso");
                    setTaskTitle("");
                    setTaskDescription("");
                    setTaskStatus("");
                    returnToHomeRoute();
                } else {
                    alert("Erro ao criar tarefa. Por favor, tente novamente.");
                }
            });
        }
    }

    return (
        <div className="RootContainer">
            <h1>{changeText}</h1>

            <form onSubmit={handleSubmit}>
                <input className="input-field" type="text" placeholder="Título da Tarefa" value={taskTitle}
                       onChange={(event) => setTaskTitle(event.target.value)}/>

                <select className="input-field" value={taskStatus}
                        onChange={(event => setTaskStatus(event.target.value))}>
                    <option value="">Selecione uma categoria</option>
                    <option value="NOT_STARTED">Não Iniciado</option>
                    <option value="IN_PROGRESS">Em Desenvolvimento</option>
                    <option value="FINISHED">Finalizado</option>
                </select>

                <input className="input-field input-description" type="text" placeholder="Descrição da Tarefa"
                       value={taskDescription}
                       onChange={(event) => setTaskDescription(event.target.value)}/>

                <button className="btn-action" type="submit">{changeText}</button>
            </form>
            <button className={dbMethod === "Update" ? 'btn-action delete-task' : 'btn-action delete-task hidden'} onClick={handleDelete}>Deletar
            </button>
            <button className="btn-action cancel-task" onClick={returnToHomeRoute}>Cancelar</button>
        </div>
    );
}

export default CreateOrUpdateTask