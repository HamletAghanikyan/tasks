import React from "react";
import Header from "./copmonents/task1";
import Task2 from "./copmonents/task2";
import Task3 from "./copmonents/task3";
import Task4 from "./copmonents/task4";

class App extends React.Component{

  render(){
    return <div>
      <Header text={'Random text'} />
      <Task2 title={'task2'} description={'erkrord varjutyun'} />
      <Task3 title={'task3'} description={'errord varjutyun'}/>
      <Task4 title={'task4'} />
    </div>
  }
  
  
  }
  
  export default App
