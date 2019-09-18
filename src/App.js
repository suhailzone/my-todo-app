import React from 'react';
import './App.css';

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      taskName : "",
      list : []
    };
  }

  addItem(taskValue){
    if(taskValue !== ""){
      const newItem = {
        id: Date.now(),
        value: taskValue,
        isDone:false
      };
      const list = [...this.state.list];
      list.push(newItem);

      this.setState({
        list,
        taskName: ""
      });
    }
  }

  removeItem(id){
    const list = [...this.state.list];
    const updatedList = list.filter(item => item.id !== id);
    this.setState({ list: updatedList });
  }

  updateInput(input){
    this.setState({ newItem:input });
  }

  render(){
    return(
      <div className="App-container">
        <h1 className="App-header">Todo App</h1>
        <br />
        <input 
          onChange={e => this.updateInput(e.target.value)}  
          value={this.state.newItem} 
          type="text" 
          placeholder="Enter Task Name" 
          required />
        <button
          onClick={() => this.addItem(this.state.newItem)} 
          className="btn-add"
        >Add</button><br />
        <h3>Task List:</h3>
        <div className="list">
          <ul>
            {
              this.state.list.map(item => {
                return(
                    <li key={item.id}>
                      <input
                        onChange={() => {}} 
                        type="checkbox"
                        checked={item.isDone} />
    
                        {item.value}
    
                      <button
                      className="btn-delete"
                        onClick={() => this.removeItem(item.id)}
                      >Delete</button>
                    </li>
                );
            })}
          </ul>
        </div>
      </div>
    );
  }
}
export default App;