import { useState } from 'react'
import './App.css'

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [inputTitle, setInputTitle] = useState("");
  const [inputContent, setInputContent] = useState("");

  const addTodo = () => {
    const newTodo = {
      id: todoList.length+1,
      title: inputTitle,
      content: inputContent,
      isDone: false
    };
    setTodoList([...todoList, newTodo])
  }

  const deleteTodo = (e) => {
    todoList.forEach((todo, index) => {
      if(todo.id === parseInt(e.target.id)) {
        todoList.splice(index,1);
      }
    })
    setTodoList([...todoList]);
  }

  const setToDone = (e) => {
    console.log(e.target.id);
    todoList.forEach((todo) => {
      if(todo.id === parseInt(e.target.id)) {
        todo.isDone = true;
      }
    })
    setTodoList([...todoList]);
  }

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
