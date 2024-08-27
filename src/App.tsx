import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { Todo } from "./components/Todo";
import { ChangeEventHandler, useState } from "react";

type Todo = {
  title: string;
  done: boolean;
};

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState<Array<Todo>>([]);

  const updateInputValue: ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputValue(e.target.value);
  };

  const addNewTodo = () => {
    const newTodosValue = [
      ...todos,
      {
        title: inputValue,
        done: false,
      },
    ];

    setTodos(newTodosValue);
    setInputValue("");

    console.log("todos", newTodosValue);
  };

  const getTodoDoneToggler = (
    changedTodoIdx: number,
  ): ChangeEventHandler<HTMLInputElement> => {
    return () => {
      const newTodosValue = todos.map((todo, idx) => ({
        ...todo,
        done: idx === changedTodoIdx ? !todo.done : todo.done,
      }));

      setTodos(newTodosValue);

      console.log("todos", newTodosValue);
    };
  };

  return (
    <main className="mx-auto flex max-w-screen-sm flex-col gap-5 p-5">
      <h1 className="text-2xl font-medium">Todo List</h1>
      <div className="flex flex-col gap-3">
        {todos.map((todo, index) => (
          <Todo
            onCheckboxChange={getTodoDoneToggler(index)}
            title={todo.title}
            done={todo.done}
            key={`${todo.title}-${index}`}
          />
        ))}
      </div>
      <div className="flex items-center gap-3">
        <Input onChange={updateInputValue} value={inputValue} />
        <Button onClick={addNewTodo}>Add a todo</Button>
      </div>
    </main>
  );
};

export default App;
