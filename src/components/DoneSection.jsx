/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import "./style/DoneSection.css";
import "../App.css";

const DoneSection = ({todoList, setTodoList}) => {
  const deleteTodo = (e) => {
    const deletedTodoList = todoList.filter((todo) => {
      return parseInt(todo.id) !== parseInt(e.target.parentElement.parentElement.id);
    });
    setTodoList(deletedTodoList);

    // 로컬스토리지에도 삭제 적용된 deletedTodoList를 반영시킴
    localStorage.setItem("todos", JSON.stringify(deletedTodoList));
  };

  // 취소 버튼 누르면 실행될 함수
  // 버튼 눌린 대상과 id가 같은 todo 객체의 isDone 속성을 false 바꿔 Working 섹션에 표기되도록 함
  const shiftToTodo = (e) => {
    todoList.forEach((todo) => {
      if (todo.id === parseInt(e.target.parentElement.parentElement.id)) {
        todo.isDone = false;
      }
    });
    setTodoList([...todoList]);

    // 로컬스토리지에도 todo의 이동 적용된 deletedTodoList를 반영시킴
    localStorage.setItem("todos", JSON.stringify([...todoList]));
  };

  return (
    <>
      <h3>Done</h3>
      <section className="done-list-section">
        {todoList.map((todo) => {
          if (todo.isDone === true) {
            return (
              <section className="todo-section" id={todo.id}>
                <section className="todo-text-section">
                  <p className="done-title">{todo.title}</p>
                  <p className="done-content">{todo.content}</p>
                </section>
                <section className="todo-btn-section">
                  <button className="delete-btn" onClick={deleteTodo}>
                    삭제하기
                  </button>
                  <button className="cancel-btn" onClick={shiftToTodo}>
                    취소
                  </button>
                </section>
              </section>
            );
          }
        })}
      </section>
    </>
  );
};

export default DoneSection;
