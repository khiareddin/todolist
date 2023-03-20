import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import Listtask from "./components/Listtask";
import Addtask from "./components/Addtask";

function App() {
    const task = useSelector((state) => state.Todolistreducer.task);

    return (
        <div className="App">
            <div
                style={{
                    display: "flex",
                    width: "100%",
                    alignItems: "center",
                    justifyContent: "space-around",
                    position: "fixed",
                    top: "0",
                    backgroundImage:
                        "url('http://mdbootstrap.com/img/Photos/Others/images/91.webp')",
                }}
            >
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1OEPsTPcxAr5lxT4S78NlD-gW9HWfx0rs3A&usqp=CAU"
                    height="50px"
                    width="50px"
                />
                <h1>ToDo List</h1>

                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThLP6xJXBY_W2tT5waakogfnpHk4uhpVTy7A&usqp=CAU"
                    height="50px"
                    width="50px"
                />
            </div>

            <Addtask />
            <Listtask task={task} />
        </div>
    );
}

export default App;
