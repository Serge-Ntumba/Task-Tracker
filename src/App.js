import { useState } from "react";

import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctor Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at school",
      day: "Feb 5th at 1:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Food shooping",
      day: "Feb 5th at 3:30pm",
      reminder: false,
    },
  ]);

  return (
    <div style={{}} className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
