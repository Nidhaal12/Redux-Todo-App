import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import { connect } from 'react-redux'
import { v4 as uuidv4 } from 'uuid';
import { Delete, Complete, Edit } from '../Actions/actions'
import { AddBtn } from '../Actions/actions'
import uuid from 'react-uuid'


class TodoApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
			edit : false
        }
    }
    handleChange = e => {
        this.setState({
            text: e.target.value
        })
    }
	 saveTodo = todo => {
        this.setState({...todo, edit: true})
    }
    addOrEdit = () => {
        if(this.state.edit){
            this.props.editNewTodo(this.state)  
            this.setState({text: '', edit: false}) 
        }
    
        else{
            this.props.addNewTodo({ text: this.state.text, id: uuid(), complete: false})
            this.setState({text: '', edit: false}) 
        }
    }
	
    render() {
        return (
            <div>
                <div className='todoApp'>
                    <div className='Text'>
                        <h1 className='Title'>
                            Redux To-Do App!
                    </h1>
                        <h5 className='Add'>
                            Add new To-Do
                    </h5>
                        <div className='Input'>
                            <input text='text' name='text' className='txt' value={this.state.text} placeholder='Enter a new task' onChange={ this.handleChange} value={this.state.text} />
                            <Button variant="outline-light addbtn " onClick={this.addOrEdit}>{this.state.edit ? 'Edit' : 'ADD'} ></Button>
                        </div>
                    </div>
                    <div className='NewItems'>
                        <h2 className='lets'>
                            Let's get some work done!
                    </h2>
                        {this.props.allTodos.map(el => <div> <h4  className={el.complete ? 'todoDone txt ' : 'todoNotDone txt '}>{el.text}</h4>
                        <button className="addbtn" onClick={() => this.props.newTodoCompleted(el.id)}>{el.complete ? 'undo' : 'complete'}</button>
                        <button className="addbtn" onClick={() => this.props.deleteNewTodo(el.id)}>delete</button>
                        <button className="addbtn" onClick={() => this.saveTodo(el)}>Edit</button>
                        </div>)}
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        allTodos: state.todo
    }
}
const mapDispatchToProps = dispatch => {
    return {
        addNewTodo: todo => dispatch(AddBtn(todo)),
        deleteNewTodo: id => dispatch(Delete(id)),
        newTodoCompleted: done => dispatch(Complete(done)),
        editNewTodo: edited => dispatch(Edit(edited))

    }
}
	
export default connect(mapStateToProps,mapDispatchToProps)(TodoApp)