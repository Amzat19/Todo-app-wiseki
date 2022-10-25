import { useState } from "react";

const AddTodo = ({ otherTodos, pinnedTodos }) => {
    const [newTodos, setNewTodos] = useState({
        title: "",
        body: "",
        color: "green"
    });
console.log(newTodos);
    const onChangeValue = (event) => {
        const { value, name } = event.target;

        setNewTodos({
            ...newTodos,
            [name] : value
        })
    };

    const addToNewTodo = () => {
        otherTodos.push({ title: newTodos.title, body: newTodos.body, color: "green"})
    }

    const addToPinnedTodo = () => {
        pinnedTodos.push({ title:  newTodos.title, body: newTodos.body, color: "green"})
    }
    return (
        <section>
            <header>Add New Note</header>
            <main>
                <form>
                    <label>
                        Title
                        <input 
                            type="text" 
                            className="title" 
                            name="title" 
                            value={newTodos.title} 
                            onChange={onChangeValue}
                        />
                    </label>
                    <label>
                        Body
                        <input 
                            type="text" 
                            className="body" 
                            name="body" 
                            value={newTodos.body} 
                            onChange={onChangeValue}
                        />
                    </label>
                    <button type="button" onClick={() => addToNewTodo()}>Save</button>
                    <button type="button" onClick={() => addToPinnedTodo()}>Pin Note</button>
                </form>
            </main>
        </section>
    )
};

export default AddTodo;