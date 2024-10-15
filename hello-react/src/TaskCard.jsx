const TaskCard = ({ title, completedAtDate, dueDate, assigneeName }) => {
  return (
    <div className='TaskItem border border-black p-9 text-left m-2'>
      <h2 className="text-xl font-bold">{title}</h2>
      <p>
        {completedAtDate 
          ? `Completed on: ${completedAtDate}` 
          : `Due on: ${dueDate}`}
      </p>
      <p>Assignee: {assigneeName}</p>
    </div>
  );
}

export default TaskCard;
