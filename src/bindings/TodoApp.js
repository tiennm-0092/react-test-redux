import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import TodoApp from '../components/TodoApp';

import { addTodo, checkNote } from '../redux/todo';

const mapStateToProps = (state) => {
    return {
        todos: state.todo.items
    }
};

const mapActionsToProps = {
    addTodo,
    checkNote
};

export default connect(mapStateToProps,mapActionsToProps)(TodoApp);