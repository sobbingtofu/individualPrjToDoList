import { useState } from 'react'
import './App.css'

 
// id: 0, title: "가제", content: "내용", isDone: false


const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [doneList, setDoneList] = useState([]);
  
  const [inputTitle, setInputTitle] = useState("");
  const [inputContent, setInputContent] = useState("");


  const addTodo = () => {
    const newTodo = {
      id: toString(new Date()),
      title: inputTitle,
      content: inputContent,
    };

    setTodoList([...todoList, newTodo])

  }

  const deleteTodo = (e) => {
    
    todoList.forEach((todo, index) => {
      if(todo.id === toString(e.target.id)) {
        todoList.splice(index,1);
      }
    })
    setTodoList([...todoList]);
  }

  const moveToDoneList = (e) => {
    console.log(e.target.id);
    todoList.forEach((todo, index) => {
      if(todo.id === toString(e.target.id)) {
        doneList.push(todo);
        todoList.splice(index,1);
      }
    })
    setDoneList([...doneList]);
    setTodoList([...todoList]);
  }

  const deleteDone = (e) => {
    doneList.forEach((done, index) => {
      if(done.id === toString(e.target.id)) {
        doneList.splice(index,1);
      }
    })
    setTodoList([...doneList]);
  }

  const moveToTodoList = (e) => {
    console.log(e.target.id);
    doneList.forEach((done, index) => {
      if(done.id === toString(e.target.id)) {
        todoList.push(done);
        doneList.splice(index,1);
      }
    })
    setDoneList([...doneList]);
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
          return (
          // eslint-disable-next-line react/jsx-key
          <section className='todo-section' id={todo.id}>
            <section className='todo-text-section'>
              <p className='todo-title'>{todo.title}</p>
              <p className='todo-content'>{todo.content}</p>
            </section>
            <section className='todo-btn-section'>
              <button className='delete-btn' id={todo.id} onClick={deleteTodo}>삭제하기</button>
              <button className='complete-btn' id={todo.id} onClick={moveToDoneList}>완료</button>
            </section>
          </section>
          
          );
        })}
      </section>
      <h3>Done</h3>
      <section className='done-list-section'>
        {doneList.map((doneItem) => {
          
          return (
          // eslint-disable-next-line react/jsx-key
          <section className='todo-section'>

            <section className='todo-text-section'>
              <p className='done-title'>{doneItem.title}</p>
              <p className='done-content'>{doneItem.content}</p>
            </section>
            <section className='todo-btn-section'>
              <button className='delete-btn' id={doneItem.id} onClick={deleteDone}>삭제하기</button>
              <button className='complete-btn'id={doneItem.id} onClick={moveToTodoList}>취소</button>
            </section>
          </section>
          
          );
        })}
      </section>
    </>
  )
}

export default App
