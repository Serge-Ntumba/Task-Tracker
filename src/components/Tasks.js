import Task from "./Task";

const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <>
      {tasks.map((task) => (
        // <Task key={task.id}>{task.text}</Task>
        <Task
          onDelete={onDelete}
          onToggle={onToggle}
          key={task.id}
          task={task}
        />
      ))}
    </>
  );
};

export default Tasks;
