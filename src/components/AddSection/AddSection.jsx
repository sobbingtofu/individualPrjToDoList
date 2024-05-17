/* eslint-disable react/prop-types */
import {useState, useRef} from "react";
import "../../App";

const AddSection = ({todoList, setTodoList}) => {
  // 사용자가 input하는 정보가 담기는 state들 생성
  const [inputTitle, setInputTitle] = useState("");
  const [inputContent, setInputContent] = useState("");

  const inputTitleRef = useRef(null);

  // 추가하기 버튼 누르면 실행될 함수
  // 사용자가 input한 정보를 새로운 todo 객체로 만들고, 이를 todoList 배열에 저장
  const addTodo = () => {
    const newTodo = {
      // id: todoList.length+1, 중복 이슈 발생하므로 시간으로 대체함
      id: Date.now(),
      title: inputTitle,
      content: inputContent,
      isDone: false,
    };
    setTodoList([...todoList, newTodo]);

    // 버튼 클릭 시 input 초기화되도록 설정
    setInputTitle("");
    setInputContent("");

    // 로컬 스토리지에도 현재 newTodo 객체 추가함
    localStorage.setItem("todos", JSON.stringify([...todoList, newTodo]));

    // 포커스가 다시 title input으로 가도록 설정
    inputTitleRef.current.focus();
  };

  return (
    <>
      <h3>추가하기</h3>
      <section className="add-section">
        <section className="inputs">
          <p className="input-label-title">제목</p>
          <input
            autoFocus
            className="input-title"
            ref={inputTitleRef}
            id="input-title"
            value={inputTitle}
            onChange={(e) => {
              setInputTitle(e.target.value);
            }}
          />
          <p className="input-label-content">내용</p>
          <input
            className="input-content"
            id="input-content"
            value={inputContent}
            onChange={(e) => {
              setInputContent(e.target.value);
            }}
          />
        </section>
        <button className="add-button" id="add-button" onClick={addTodo}>
          추가하기
        </button>
      </section>
    </>
  );
};

export default AddSection;
