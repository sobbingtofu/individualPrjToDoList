import { useState } from 'react'
import './App.css'

const App = () => {
  // todo 객체들이 저장되는 배열 todoList 생성
  const [todoList, setTodoList] = useState([]);

  // 사용자가 input하는 정보가 담기는 state들 생성
  const [inputTitle, setInputTitle] = useState("");
  const [inputContent, setInputContent] = useState("");

  // 추가하기 버튼 누르면 실행될 함수
  // 사용자가 input한 정보를 새로운 todo 객체로 만들고, 이를 todoList 배열에 저장
  const addTodo = () => {
    const newTodo = {
      // id: todoList.length+1, 중복 이슈 발생
      id: Date.now(),
      title: inputTitle,
      content: inputContent,
      isDone: false
    };
    setTodoList([...todoList, newTodo])
  }
  // 삭제하기 버튼 누르면 실행될 함수
  // 버튼 눌린 대상과 id가 같은 todo를 todoList에서 삭제한 deletedTodoList를 TodoList로 재설정해줌
  const deleteTodo = (e) => {
    const deletedTodoList = todoList.filter((todo) => {
      return (parseInt(todo.id) !== parseInt(e.target.id));
    })
    setTodoList(deletedTodoList);
  }
  // 완료 버튼 누르면 실행될 함수
  // 버튼 눌린 대상과 id가 같은 todo 객체의 isDone 속성을 true로 바꿔 Done 섹션에 표기되도록 함
  const setToDone = (e) => {
    console.log(e.target.id);
    todoList.forEach((todo) => {
      if(todo.id === parseInt(e.target.id)) {
        todo.isDone = true;
      }
    })
    setTodoList([...todoList]);
  }

  // 취소 버튼 누르면 실행될 함수
  // 버튼 눌린 대상과 id가 같은 todo 객체의 isDone 속성을 false 바꿔 Working 섹션에 표기되도록 함
  const setToUndone = (e) => {
    console.log(e.target.id);
    todoList.forEach((todo) => {
      if(todo.id === parseInt(e.target.id)) {
        todo.isDone = false;
      }
    })
    setTodoList([...todoList]);
  }

  return (
    <>
    <h1>My Todo List</h1>
    <h3>추가하기</h3>
      <section className='add-section'>
        <section className='inputs'>        
          <p className='input-label-title'>제목</p>
          <input className='input-title' id='input-title' value = {inputTitle}
            onChange={(e) => {setInputTitle(e.target.value);}}/>
          <p className='input-label-content'>내용</p>
          <input className='input-content' id='input-content' value = {inputContent}
            onChange={(e) => {setInputContent(e.target.value)}}/>
        </section>
        <button className='add-button' id='add-button' onClick={addTodo}>추가하기</button>
      </section>
      <h3>Working</h3>
      <section className='todo-list-section'>
        {todoList.map((todo) => {
          if(todo.isDone === false) {
            return (
              // eslint-disable-next-line react/jsx-key
              <section className='todo-section' id={todo.id}>
                <section className='todo-text-section'>
                  <p className='todo-title'>{todo.title}</p>
                  <p className='todo-content'>{todo.content}</p>
                </section>
                <section className='todo-btn-section'>
                  <button className='delete-btn' id={todo.id} onClick={deleteTodo}>삭제하기</button>
                  <button className='complete-btn' id={todo.id} onClick={setToDone}>완료</button>
                </section>
              </section>
              );
          }})}
      </section>
      <h3>Done</h3>
      <section className='done-list-section'>
        {todoList.map((todo) => {
           if(todo.isDone === true) {
            return (
            // eslint-disable-next-line react/jsx-key
            <section className='todo-section'>
              <section className='todo-text-section'>
                <p className='done-title'>{todo.title}</p>
                <p className='done-content'>{todo.content}</p>
              </section>
              <section className='todo-btn-section'>
                <button className='delete-btn' id={todo.id} onClick={deleteTodo}>삭제하기</button>
                <button className='complete-btn'id={todo.id} onClick={setToUndone}>취소</button>
              </section>
            </section>
            );}
        })}
      </section>
    </>
  )
}

export default App
