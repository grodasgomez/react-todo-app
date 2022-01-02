import './TodoCounter.css';

function TodoCounter(props: any) {
  const { completed, total } = props;
  return (
    <h2 className="TodoCounter">You have completed {completed} of {total} todo's </h2>
  );
}

export default TodoCounter;