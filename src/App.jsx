import {useState} from "react";
import "./App.css";

import AddSection from "./components/AddSection.jsx";
import WorkingSection from "./components/WorkingSection.jsx";
import DoneSection from "./components/DoneSection.jsx";

const App = () => {
  // todo 객체들이 저장되는 배열 todoList 생성
  // 로컬스토리지에서 불러오며, 로컬스토리지가 비어있다면 빈 배열로 생성
  const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem("todos")) || []);

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
