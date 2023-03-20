import { ADD, EDIT, DONE } from "../Constants/actions-types";
const initialState = {
    task: [
        { id: 1, description: "Task1", done: false },
        { id: 2, description: "Task2", done: false },
        { id: 3, description: "Task3", done: false },
    ],
};
export const Todolistreducer = (state = initialState, actions) => {
    const { type, payload } = actions;
    switch (type) {
        case ADD:
            return {
                task: [
                    ...state.task,
                    { id: Math.random(), description: payload, done: false },
                ],
            };
        case EDIT:
            return {
                //parcour le tab with map, check if the id of x element of tab === of the id payloaded
                //edit the description
                task: state.task.map((x) =>
                    x.id === payload.id
                        ? { ...x, description: payload.newdescription }
                        : x
                ),
            };

        case DONE:
            return {
                task: state.task.map((x) =>
                    x.id === payload.id ? { ...x, done: !payload.done } : x
                ),
            };

        default:
            return state;
    }
};
