import React, { useRef, useState, useEffect } from "react";
// import useState from React

export default function Demo() {
  // let [studentsCount, setStudentsCount] = useState(0);
  // let [isRunning, setIsRunning] = useState(false);
  // // let isRunning = false;
  // const intervalRef = useRef(null);
  // const toggleButton = () => {
  //   console.log(isRunning);
  //   if (isRunning) {
  //     clearInterval(intervalRef.current);
  //     setIsRunning(false);
  //     // isRunning = false;
  //     console.log(studentsCount);
  //   } else {
  //     intervalRef.current = setInterval(() => {
  //       setStudentsCount((p) => p + 1);
  //     }, 1000);
  //     setIsRunning(true);
  //     // isRunning = true;
  //   }
  // };
  // return (
  //   <div>
  //     <p>Number of students in class room: {studentsCount}</p>
  //     <button onClick={toggleButton}>{isRunning ? "stop" : "start"}</button>
  //   </div>
  // );

  const [count, setCount] = useState(0);
  useEffect(() => {
    const intervalID = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(intervalID); // Cleanup interval when the component unmounts 
  }, []);

  return <>{count}</>;
}
