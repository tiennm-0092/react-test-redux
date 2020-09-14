const todoInitState = {
    items: [
        { title: 'Mua bim bim', isComplete: false },
        { title: 'Di da bong', isComplete: false },
        { title: 'Di do xang', isComplete: false }
    ]
};

const ADD_TODO = 'ADD_TODO';
const CHECK_NOTE = 'CHECK_NOTE';

export const addTodo = (text) => ({
    type: ADD_TODO,
    payload: text
});

export const checkNote = (id) => ({
    type: CHECK_NOTE,
    payload: id
});

const todoReducer = (state = todoInitState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                items: [...state.items, {
                    title: action.payload,
                    isComplete: false
                }]
            };
        case CHECK_NOTE:
            return {
                ...state,
                items: [
                    ...state.items.slice(0,action.payload),
                    {
                        ...state.items[action.payload],
                        isComplete: !state.items[action.payload].isComplete
                    },
                    ...state.items.slice(action.payload+1)
                ]
            }

        default:
            return state;
    };
};

export default todoReducer;