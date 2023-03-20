import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Edit } from "../Redux/Actions/actions";

const Edittask = ({ x }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    //creation de variable hooks
    const [newdescription, setNewdescription] = useState("");
    const handleDescr = (e) => {
        setNewdescription(e.target.value);
    };
    let { id } = x;
    const dispatch = useDispatch();
    const handleEdit = () => {
        dispatch(Edit({ newdescription, id }));
        handleClose();
    };

    return (
        <div>
            <>
                <button
                    onClick={handleShow}
                    style={{
                        color: "#fff",
                        backgroundColor: "#A3C1CC",
                        borderColor: "#A3C1CC",
                        marginTop: "5px",
                        marginRight: "15px",
                    }}
                >
                    EDIT
                </button>
                {console.log(x.description)}

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Task description</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Control
                            type="text"
                            defaultValue={x.description}
                            onChange={handleDescr}
                        />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleEdit}>
                            Edit
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        </div>
    );
};

export default Edittask;
