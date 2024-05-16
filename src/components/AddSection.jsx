/* eslint-disable react/prop-types */
import {useState} from "react";
import "../App.css";

const AddSection = ({todoList, setTodoList}) => {
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
      isDone: false,
    };
    setTodoList([...todoList, newTodo]);

    // 버튼 클릭 시 input 초기화되도록 설정
    setInputTitle("");
    setInputContent("");
  };

  return (
    <>
      <h3>추가하기</h3>
      <section className="add-section">
        <section className="inputs">
          <p className="input-label-title">제목</p>
          <input
            className="input-title"
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
