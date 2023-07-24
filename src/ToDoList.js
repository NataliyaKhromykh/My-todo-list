import { Component } from 'react';


export class ToDoList extends Component{
     state = {
        userInput: "",
        todolist: []
     }
     onCahngeEvent(event){
        this.setState({userInput: event})
     }
     addItem(input) {
        let listArray = this.state.todolist;
        listArray.push(input);
        this.setState({todolist: listArray, userInput: ''}) 
     }
     deleteItem() {
        let listArray = this.state.todolist;
        listArray = [];
        this.setState({todolist: listArray})
    }
        crossedWord(event){
            const li = event.target;
            li.classList.toggle('crossed');
        }
onFormSubmit(e) {
e.preventDefault();
}


     render() {
        return(
            <div>
        <div className='together'>
            <form onSubmit={this.onFormSubmit}>
            <div className='input'>
                <input className='inputfield' type="text"
                placeholder="What are your going to do today?"
                onChange={(event) => {this.onCahngeEvent(event.target.value)}}
                value={this.state.userInput}/>
                <div>
                    <button className='button' onClick={() => this.addItem(this.state.userInput)}></button>
                </div>
            </div>
            <div className='tylingstyle'>
            <ul>
                    {this.state.todolist.map((item, index) => (
                        <li onClick={this.crossedWord} key={index}>{item}</li>
                    ))}
                </ul>
                </div>
                </form>
        </div>
                        <div className='buttonClose'>
                        <button className='buttonTwo' onClick={() => this.deleteItem()}></button>
                    </div>
                    </div>


        )
     }
}