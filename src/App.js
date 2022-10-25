import { useState } from "react"
import './App.css';
import SideBar from './components/SideBar';
import NoteBook from './components/NoteBook';
import AddTodo from "./components/AddTodo";

function App() {
  const [ notePage, setNotePage] = useState(false)
  const [pinnedTodos, setPinnedTodos] = useState([
    {
        title: "Timeline Amazing Task",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor ut arcu eu nisl condimentum sit. Amet et purus pellentesque non auctor enim facilisi. Suspendisse arcu nunc semper quam blandit lectus. Scelerisque metus euismod sed lacus.",
        color: "#FD99FF"
    },
    {
        title: "Social Movement",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor ut arcu eu nisl condimentum sit. Amet et purus pellentesque non auctor enim facilisi. Suspendisse arcu nunc semper quam blandit lectus. Scelerisque metus euismod sed lacus.",
        color: "#FF9E9E"
    },
    {
        title: "Budget Plan",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor ut arcu eu nisl condimentum sit. Amet et purus pellentesque non auctor enim facilisi. Suspendisse arcu nunc semper quam blandit lectus. Scelerisque metus euismod sed lacus.", 
        color: "#91F48F"
    }
  ]);
  const [otherTodos, setOtherTodos] = useState([
    {
      title: "Timeline Amazing Task",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor ut arcu eu nisl condimentum sit. Amet et purus pellentesque non auctor enim facilisi. Suspendisse arcu nunc semper quam blandit lectus. Scelerisque metus euismod sed lacus.",
      color: "#262730"
    },
    {
      title: "Social Movement",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor ut arcu eu nisl condimentum sit. Amet et purus pellentesque non auctor enim facilisi. Suspendisse arcu nunc semper quam blandit lectus. Scelerisque metus euismod sed lacus.",
      color: "#FFF599"
    },
    {
      title: "Budget Plan",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor ut arcu eu nisl condimentum sit. Amet et purus pellentesque non auctor enim facilisi. Suspendisse arcu nunc semper quam blandit lectus. Scelerisque metus euismod sed lacus.",
      color: "#9EFFFF"
    }
  ]);
  console.log(pinnedTodos);
  console.log(otherTodos);

  const changeNotePage = () => {
    setNotePage(!notePage)
  };

  return (
    <div className="App">
      <SideBar notePage={notePage} changeNotePage={changeNotePage}/>
      { notePage ? <AddTodo pinnedTodos={pinnedTodos} otherTodos={otherTodos}/> : <NoteBook otherTodos={otherTodos} pinnedTodos={pinnedTodos}/> }
    </div>
  );
}

export default App;
