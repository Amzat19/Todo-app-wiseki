import {ReactComponent as Red} from "./assets/red.svg";
import {ReactComponent as Yellow} from "./assets/yellow.svg";
import {ReactComponent as Green} from "./assets/green.svg";
import {ReactComponent as AddIcon} from "./assets/Add.svg";
import {ReactComponent as AllNote} from "./assets/AllNote.svg";
import {ReactComponent as NoteBook} from "./assets/Notebook.svg";
import {ReactComponent as Favorite} from "./assets/Favorite.svg";
import {ReactComponent as Deleted} from "./assets/Deleted.svg";
import {ReactComponent as Settings} from "./assets/Settings.svg";
import "./SideBar.css";

const SideBar = ({ changeNotePage }) => {
    return (
        <section className="SideBar">
            <header>
                <Red/>
                <Yellow/>
                <Green/>
            </header>
            <div className="list">
                <ul>
                    <li> <AllNote height="20px" width="20px"/> All Note</li>
                    <li> <NoteBook height="20px" width="20px"/> NoteBook</li>
                    <li> <Favorite height="20px" width="20px"/> Favorite</li>
                    <li> <Deleted height="20px" width="20px"/> Deleted</li>
                    <li> <Settings height="20px" width="20px"/> Settings</li>
                </ul>
            </div>
            <footer>
                <div className="AddElement" onClick={() => changeNotePage()}>
                    <AddIcon height="20px" width="20px"/>
                </div>
            </footer>
        </section>
    )
}

export default SideBar;
