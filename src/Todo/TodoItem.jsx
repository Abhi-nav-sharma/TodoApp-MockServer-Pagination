const TodoItem = (props) => {
  const { Title, Status } = props;
  return (
    <div>
      <h2>
        {Title} - {Status ? "Done" : "Not Done"}
      </h2>
    </div>
  );
};
export default TodoItem;
