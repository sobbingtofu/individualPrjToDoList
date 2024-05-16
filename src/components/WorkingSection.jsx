/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "../App.css";
import "./style/WorkingSection.css";

const WorkingSection = ({todoList, setTodoList}) => {
  // 삭제하기 버튼 누르면 실행될 함수
  // 버튼 눌린 대상과 id가 같은 todo를 todoList에서 삭제한 deletedTodoList를 TodoList로 재설정해줌
  const deleteTodo = (e) => {
    const deletedTodoList = todoList.filter((todo) => {
      return parseInt(todo.id) !== parseInt(e.target.id);
    });
    setTodoList(deletedTodoList);
  };
  // 완료 버튼 누르면 실행될 함수
  // 버튼 눌린 대상과 id가 같은 todo 객체의 isDone 속성을 true로 바꿔 Done 섹션에 표기되도록 함
  const shiftToDone = (e) => {
    todoList.forEach((todo) => {
      if (todo.id === parseInt(e.target.id)) {
        todo.isDone = true;
      }
    });
    setTodoList([...todoList]);
  };

  return (
    <>
      <h3>Working</h3>
      <section className="working-list-section">
        {todoList.map((todo) => {
          if (todo.isDone === false) {
            return (
              // eslint-disable-next-line react/jsx-key
              <section className="todo-section" id={todo.id}>
                <section className="todo-text-section">
                  <p className="todo-title">{todo.title}</p>
                  <p className="todo-content">{todo.content}</p>
                </section>
                <section className="todo-btn-section">
                  <button className="delete-btn" id={todo.id} onClick={deleteTodo}>
                    삭제하기
                  </button>
                  <button className="complete-btn" id={todo.id} onClick={shiftToDone}>
                    완료
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

export default WorkingSection;
