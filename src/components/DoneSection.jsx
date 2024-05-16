/* eslint-disable react/prop-types */
import "./style/DoneSection.css";
import "../App.css";

const DoneSection = ({todoList, setTodoList}) => {
  const deleteTodo = (e) => {
    const deletedTodoList = todoList.filter((todo) => {
      return parseInt(todo.id) !== parseInt(e.target.id);
    });
    setTodoList(deletedTodoList);
  };

  // 취소 버튼 누르면 실행될 함수
  // 버튼 눌린 대상과 id가 같은 todo 객체의 isDone 속성을 false 바꿔 Working 섹션에 표기되도록 함
  const shiftToTodo = (e) => {
    todoList.forEach((todo) => {
      if (todo.id === parseInt(e.target.id)) {
        todo.isDone = false;
      }
    });
    setTodoList([...todoList]);
  };

  return (
    <>
      <h3>Done</h3>
      <section className="done-list-section">
        {todoList.map((todo) => {
          if (todo.isDone === true) {
            return (
              // eslint-disable-next-line react/jsx-key
              <section className="todo-section">
                <section className="todo-text-section">
                  <p className="done-title">{todo.title}</p>
                  <p className="done-content">{todo.content}</p>
                </section>
                <section className="todo-btn-section">
                  <button className="delete-btn" id={todo.id} onClick={deleteTodo}>
                    삭제하기
                  </button>
                  <button className="cancel-btn" id={todo.id} onClick={shiftToTodo}>
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
