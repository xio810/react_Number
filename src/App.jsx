import { useState } from "react";

const App = () => {
  const [num, setNum] = useState(0);
  const [recordedNums, setRecordedNums] = useState([3, 6, 8]);

  const increaseNum = () => {
    setNum(num + 1);
  };
  const decreaseNum = () => {
    setNum(num - 1 > 0 ? num - 1 : 0);
  };
  const cancelNum = () => {
    setNum(0);
  };
  //
  const saveRecord = () => {
    if (num == 0) return;
    setNum(0);
    setRecordedNums([...recordedNums, num]);
  };

  const recordList =
    recordedNums.length > 0 ? (
      <div>
        <h1>RECORD</h1>
        <ul>
          {recordedNums.map((num, index) => (
            <li key={index}>
              {num}
              <button onClick={() => delRecordedNum(index)}>삭제</button>
              <button>수정</button>
            </li>
          ))}
        </ul>
      </div>
    ) : (
      <div>없음</div>
    );
  //
  const resetRecord = () => {
    setRecordedNums([]);
  };
  const delRecordedNum = (delIndex) => {
    setRecordedNums(recordedNums.filter((el, index) => index != delIndex));
  };
  //
  return (
    <div
      style={{
        display: "inline-block",
        border: "2px solid black",
        borderRadius: "10px",
        padding: "10px",
      }}
    >
      <div className="App">
        <div>현재 숫자 : {num}</div>
        <div>
          <button onClick={increaseNum}>증가</button>
          <button onClick={decreaseNum}>감소</button>
          <button onClick={cancelNum}>취소</button>
          <hr />
          <button onClick={saveRecord}>기록</button>
          <button onClick={resetRecord}>초기화</button>
        </div>
        {recordList}
      </div>
    </div>
  );
};

export default App;
