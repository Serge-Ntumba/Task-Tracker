const tasks = [
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
];

const Tasks = () => {
  return (
    <>
      {tasks.map((task) => (
        <h3 key={task.id}>{task.text}</h3>
      ))}
    </>
  );
};

export default Tasks;
