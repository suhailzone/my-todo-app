import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.addItem = this.addItem.bind(this);
    this.state = {
      sty: "none",
      taskName: "",
      list: [],
    };
  }

  addItem = (e) => {
    if (this.state.taskName !== "") {
      const newItem = {
        id: Date.now(),
        value: this.state.taskName,
        isDone: false,
      };
      const list = [...this.state.list];
      list.push(newItem);
      console.log(this.state);
      this.setState({
        taskName: "",
        list,
      });
      console.log(this.state);
    }
  };

  removeItem(id) {
    const list = [...this.state.list];
    const updatedList = list.filter((item) => item.id !== id);
    this.setState({ list: updatedList });
  }

  updateInput(input) {
    this.setState({ taskName: input });
  }

  handleChange = (myid) => {
    const list2 = [...this.state.list];
    let foundIndex = list2.findIndex((x) => x.id === myid);
    list2[foundIndex].isDone = !list2[foundIndex].isDone;
    this.setState({
      list: list2,
    });
  };

  handleVisibility = (item) => {
    this.setState({
      sty: item.isDone ? "line-thr" : "none",
    });
  };

  render() {
    return (
      <div className="App-container container">
        <h1 className="text-center p-5">Todo App</h1>
        <br />
        <div className="row">
          <div className="col-2"></div>
          <div className="col-5">
            <input
              className="form-control"
              onChange={(e) => this.updateInput(e.target.value)}
              value={this.state.taskName}
              type="text"
              placeholder="Enter Task Name"
              required
            />
          </div>
          <div className="col-3">
            <button onClick={this.addItem} className="btn btn-success">
              Add
            </button>
          </div>
          <div className="col-2"></div>
        </div>
        <br />
        <h3 className="text-center p-3">Task List:</h3>
        <div className="container">
          {this.state.list.map((item) => {
            return (
              <div className="row alert alert-info" key={item.id}>
                {
                  //this.handleVisibility(item)
                }
                <div className="col-2">
                  <input
                    className="p-0"
                    onChange={() => this.handleChange(item.id)}
                    type="checkbox"
                  />
                </div>
                <div className="col-5">
                  <h3
                    className={item.isDone ? "line-thr" : "none"}
                    style={{ float: "left" }}
                  >
                    {item.value}
                  </h3>
                </div>
                <div className="col-5">
                  <button
                    className="btn btn-danger"
                    style={{ float: "right" }}
                    onClick={() => this.removeItem(item.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default App;
