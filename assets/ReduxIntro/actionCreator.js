function addTodo(text) {
  const trimmedText = text.trim();
  return {
    type: 'ADD_TODO',
    text: trimmedText,
  }
}

export default () => (
  <button onClick={dispatch(addTodo('Call Mom'))}>
    Add Todo
  </button>
)
