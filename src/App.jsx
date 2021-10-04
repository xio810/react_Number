import { useState } from "react";

const App = () => {
  const [num, setNum] = useState(0);

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
  const addRecordList = () => {};
  //
  return (
    <div className="App">
      <div>현재 숫자 : {num}</div>
      <div>
        <button onClick={increaseNum}>증가</button>
        <button onClick={decreaseNum}>감소</button>
        <button onClick={cancelNum}>취소</button>
        <hr />
        <button onClick={addRecordList}>기록</button>
        <button>초기화</button>
      </div>
    </div>
  );
};

export default App;
