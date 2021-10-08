import { useState } from "react";
const RecordForm = ({ recordedNums, setRecordedNums }) => {
  const [num, setNum] = useState(0);

  const increaseNum = () => {
    setNum(num + 1);
  };

  const decreaseNum = () => {
    setNum(num - 1 > 0 ? num - 1 : 0);
  };

  const cancelModifyNum = () => {
    setNum(0);
  };

  const saveRecord = () => {
    if (num == 0) return;
    setRecordedNums([...recordedNums, num]);
    setNum(0);
  };

  const clearRecord = () => {
    setNum(0);
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
        <button onClick={increaseNum}>증가</button>
        <button onClick={decreaseNum}>감소</button>
        <button onClick={cancelModifyNum}>취소</button>
      </div>
      <hr />
      <div>
        <button onClick={saveRecord}>기록</button>
        <button onClick={clearRecord}>초기화</button>
      </div>
    </div>
  );
};

const RecordList = ({ recordedNums, setRecordedNums }) => {
  let List = <span>기록없음</span>;

  const delRecordedNum = (delIndex) => {
    setRecordedNums(recordedNums.filter((el, index) => index != delIndex));
  };

  // 자주 틀리는 구간
  if (recordedNums.length > 0) {
    List = (
      <ul>
        {recordedNums.map((recordedNum, index) => (
          <RecordListItem
            key={index}
            index={index}
            recordedNum={recordedNum}
            delRecordedNum={delRecordedNum}
          />
        ))}
      </ul>
    );
  }

  // if (recordedNums.length > 0) {
  //   List = (
  //     <ul>
  //       {recordedNums.map((recordedNum, index) => (
  //         <li key={index}>
  //           <span>{recordedNum}</span>
  //           &nbsp;
  //           <button onClick={() => delRecordedNum(index)}>삭제</button>
  //         </li>
  //       ))}
  //     </ul>
  //   );
  // }

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

const RecordListItem = ({ recordedNum, delRecordedNum, index }) => {
  const [editMode, setEditMode] = useState(false);
  const [newRecordedNum, setNewRecordedNum] = useState(recordedNum);

  const editRecordedNum = () => {
    setEditMode(false);
  };
  return (
    <li key={index}>
      {editMode ? (
        <>
          <span>
            <input
              style={{ width: "50px" }}
              type="number"
              value={newRecordedNum}
              onChange={(e) => setNewRecordedNum(e.target.value)}
            />
          </span>
          &nbsp;
          <button onClick={editRecordedNum}>수정완료</button>
          <button onClick={() => setEditMode(false)}>수정취소</button>
        </>
      ) : (
        <>
          <span>{recordedNum}</span>
          &nbsp;
          <button onClick={() => setEditMode(true)}>수정</button>
        </>
      )}
      &nbsp;
      <button onClick={() => delRecordedNum(index)}>삭제</button>
    </li>
  );
};

const RecordApp = () => {
  const [recordedNums, setRecordedNums] = useState([2, 4, 6]);
  return (
    <div
      style={{
        display: "inline-block",
        padding: "10px",
      }}
    >
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
