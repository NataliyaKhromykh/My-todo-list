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
        crossedWord(event){
            const li = event.target;
            li.classList.toggle('crossed');
        }
     render() {
        return(
        <div className='together'>
            <div className='input'>
                <input className='inputfield' type="text"
                placeholder="What are your going to do today?"
                onChange={(event) => {this.onCahngeEvent(event.target.value)}}
                value={this.state.userInput}/>
                <div>
                    <button onClick={() => this.addItem(this.state.userInput)}></button>
                </div>
            </div>
            <div className='tylingstyle'>
            <ul>
                    {this.state.todolist.map((item, index) => (
                        <li onClick={this.crossedWord} key={index}>{item}</li>
                    ))}
                </ul>
                </div>
        </div>


        )
     }
}