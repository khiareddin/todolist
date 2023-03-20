import React from "react";
import { useState } from "react";
import { Add } from "../Redux/Actions/actions";
import { useDispatch } from "react-redux";

const Addtask = () => {
    const dispatch = useDispatch();
    const [input, setInput] = useState();
    const handlechange = (e) => {
        // setTask(e.target.value);
        setInput(e.target.value);
    };

    const handleclick = () => {
        dispatch(Add(input));
        //to add element in tab
    };
    return (
        <div>
            <div>
                <input
                    type="text"
                    onChange={handlechange}
                    style={{ marginTop: "100px" }}
                />
                <button
                    onClick={handleclick}
                    style={{
                        color: "#fff",
                        backgroundColor: "#007bff",
                        borderColor: "#007bff",
                    }}
                >
                    ADD
                </button>
            </div>
        </div>
    );
};

export default Addtask;
