import { useState } from "react";

const RecordForm = ({ recordedNums, setRecordedNums }) => {
  const [num, setNum] = useState(0);

  const increaseNum = () => setNum(num + 1);

  const decreaseNum = () => {
    if (num - 1 < 0) return;

    setNum(num - 1);
  };

  const cancelModifyNum = () => setNum(0);

  const saveRecord = () => {
    if (num == 0) return;

    setRecordedNums([...recordedNums, num]);
    setNum(0);
  };

  const clearRecords = () => {
    setNum(0);

    if (recordedNums.length == 0) return;

    setRecordedNums([]);
  };

  return (
    <div
      style={{
        border: "2px solid black",
        borderRadius: "10px",
        padding: "10px",
      }}
    >
      <div>
        <span>숫자 : {num}</span>
        <button onClick={increaseNum}>증가</button>{" "}
        <button onClick={decreaseNum}>감소</button>{" "}
        <button onClick={cancelModifyNum}>취소</button>
      </div>
      <hr />
      <div>
        <button onClick={saveRecord}>기록</button>{" "}
        <button onClick={clearRecords}>초기화</button>
      </div>
    </div>
  );
};

const RecordList = ({ recordedNums, setRecordedNums }) => {
  let List = <span>기록없음</span>;

  const delRecordedNum = (delIndex) => {
    setRecordedNums(recordedNums.filter((el, index) => index != delIndex));
  };

  if (recordedNums.length > 0) {
    List = (
      <ul>
        {recordedNums.map((recordedNum, index) => (
          <li key={index}>
            <span>{recordedNum}</span>
            &nbsp;
            <button onClick={() => delRecordedNum(index)}>삭제</button>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div
      style={{
        border: "2px solid black",
        borderRadius: "10px",
        padding: "10px",
        marginTop: "10px",
      }}
    >
      {List}
    </div>
  );
};

const RecordApp = () => {
  const [recordedNums, setRecordedNums] = useState([3, 2, 1]);

  return (
    <div style={{ display: "inline-block", padding: "10px" }}>
      <RecordForm
        recordedNums={recordedNums}
        setRecordedNums={setRecordedNums}
      />
      <RecordList
        recordedNums={recordedNums}
        setRecordedNums={setRecordedNums}
      />
    </div>
  );
};

const App = () => {
  return <RecordApp />;
};

export default App;
