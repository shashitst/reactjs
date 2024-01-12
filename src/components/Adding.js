import { useState } from 'react';


export default  function Adding(props) {
  const [age, setAge] = useState(props.age);

  function increment() {
    setAge(age + 1);
  }

  return (
    
    <div>
      <h1>Your age: {age}</h1>
      <button onClick={() => {
        increment();
        increment();
        increment();
      }}>+3</button>
      <button onClick={() => {
        increment();
      }}>+1</button>
    </div>
  );
}