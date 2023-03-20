import React from "react";
import Edittask from "./Edittask";
import { useSelector, useDispatch } from "react-redux";
import { Done } from "../Redux/Actions/actions";
import Isdone from "./Isdone";
const Listtask = ({ task }) => {
    // const dispatch = useDispatch();

    // const handledone = (id, done) => {
    //     dispatch(Done({ id, done }));
    // };

    return (
        <div>
            {task.map((x) => {
                return (
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <p style={{ marginTop: "15px", marginRight: "15px" }}>
                            {x.description}
                        </p>
                        <Edittask x={x} task={task} />
                        {/* <button onClick={() => handledone(x.id, x.done)}>
                            {x.done ? "Not Done" : "Done" }
                        </button> */}
                        <Isdone x={x} />
                    </div>
                );
            })}
        </div>
    );
};

export default Listtask;
