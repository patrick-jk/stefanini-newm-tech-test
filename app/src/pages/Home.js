import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import Task from "../components/Task";
import '../App.css';
import './css/Home.css';
import Search from "../components/Search";

const Home = () => {
    const [taskItems, setTaskItems] = useState(null);
    const [page, setPage] = useState(0);
    const pageSize = 100;

    useEffect(() => {
        fetch(`http://localhost:8080/tasks?page=${page}&size=${pageSize}&sort=title`)
            .then(response => response.json())
            .then(data => setTaskItems(data));
    }, [page]);

    const [search, setSearch] = useState("");
    let navigate = useNavigate();

    const createTaskRoute = () => {
        let path = "/createtask";
        navigate(path);
    }

    return (
        <div className="RootContainer">
            <h1>Lista de Tarefas</h1>
            <Search search={search} setSearch={setSearch}/>

            <button onClick={createTaskRoute} className="btn-action">Criar Tarefa</button>

            <div className="todo-list">
                {taskItems && taskItems.content.filter((task) => task.title.toLowerCase().includes(search.toLowerCase()))
                    .map((task) => (
                        <Task key={task.id} task={task}/>
                    ))}
            </div>
        </div>
    );
}

export default Home