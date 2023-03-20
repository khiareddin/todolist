import React from "react";
import { useDispatch } from "react-redux";
import { Done } from "../Redux/Actions/actions";

const Isdone = ({ x }) => {
    const dispatch = useDispatch();

    const handledone = (id, done) => {
        dispatch(Done({ id, done }));
    };
    return (
        <div>
            <button
                onClick={() => handledone(x.id, x.done)}
                style={{
                    color: "#fff",
                    backgroundColor: "#4A8DC7",
                    borderColor: "#4A8DC7",
                    marginTop: "5px",
                    marginRight: "15px",
                }}
            >
                {x.done ? "Not Done" : "Done"}
            </button>
        </div>
    );
};

export default Isdone;
