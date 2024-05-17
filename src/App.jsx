import {useState} from "react";
import "./App.css";

import AddSection from "./components/AddSection/AddSection.jsx";
import WorkingSection from "./components/WorkingSection/WorkingSection.jsx";
import DoneSection from "./components/DoneSection/DoneSection.jsx";

const App = () => {
  // todo 객체들이 저장되는 배열 todoList 생성
  // 로컬스토리지에서 불러오며, 로컬스토리지가 비어있다면 빈 배열로 생성
  const [TO_DO_LIST, setTodoList] = useState(JSON.parse(localStorage.getItem("todos")) || []);

  return (
    <>
      <h1>My Todo List</h1>
      <AddSection todoList={TO_DO_LIST} setTodoList={setTodoList}></AddSection>
      <WorkingSection todoList={TO_DO_LIST} setTodoList={setTodoList}></WorkingSection>
      <DoneSection todoList={TO_DO_LIST} setTodoList={setTodoList}></DoneSection>
    </>
  );
};

export default App;
