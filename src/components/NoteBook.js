import "./NoteBook.css";
import { ReactComponent as Search } from "./assets/Search.svg";
import { ReactComponent as Grid } from "./assets/edit.svg";
import { ReactComponent as Edit } from "./assets/layer.svg";
import { ReactComponent as Layer } from "./assets/grid.svg";
import { ReactComponent as Delete } from "./assets/Deleted.svg";


const NoteBook = ({ pinnedTodos, otherTodos}) => {
 
    return (
        <main className="NoteBook">
            <header className="Notebook-header">
                <h2>AllNotes</h2>
                <div>
                    <Search/>
                    <input type="search" name="search" id="search"/>
                </div>
            </header>
            <section className="Pinned-todos">
                <div>
                    <p>Pinned note</p>
                    <div className="icons">
                        <div>
                            <Grid/>
                            <Layer/>
                            <Edit/>
                        </div>
                        <hr/>
                    </div>
                    {
                        pinnedTodos.map((todo, index) => {
                            const deleteTodo = (index) => {
                                pinnedTodos.slice(index, 1);
                            }
                            return (
                                <div key={index} style={{backgroundColor: todo.color}} className="todo-items">
                                    <h2>{todo.title}</h2>
                                    <p>{todo.body}</p>
                                    <Delete onClick={() => deleteTodo()}/>
                                </div>
                            )
                        })
                    }
                </div>
                <div>
                    <p>Other notes</p>
                    {
                        otherTodos.map((todo, index) => {
                            return (
                                <div key={index} style={{backgroundColor: todo.color}} className="todo-items">
                                    <h2>{todo.title}</h2>
                                    <p>{todo.body}</p>
                                    <Delete/>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </main>
    )
}

export default NoteBook;