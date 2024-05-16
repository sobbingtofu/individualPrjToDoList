import {useState} from "react";
import "./App.css";

import AddSection from "./AddSection";
import WorkingSection from "./WorkingSection";
import DoneSection from "./DoneSection";

const App = () => {
  // todo 객체들이 저장되는 배열 todoList 생성
  const [todoList, setTodoList] = useState([]);

  return (
    <>
      <h1>My Todo List</h1>
      <AddSection todoList={todoList} setTodoList={setTodoList}></AddSection>
      <WorkingSection todoList={todoList} setTodoList={setTodoList}></WorkingSection>
      <DoneSection todoList={todoList} setTodoList={setTodoList}></DoneSection>
    </>
  );
};

export default App;
