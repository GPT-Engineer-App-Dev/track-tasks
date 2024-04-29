import React, { useState } from "react";
import {
  Box,
  Heading,
  Input,
  Button,
  Text,
  VStack,
  HStack,
  StackDivider,
  Spacer,
  Flex
} from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";

const TodoItem = ({ todo, onComplete, onDelete }) => (
  <HStack spacing={3}>
    <Text textDecoration={todo.completed ? "line-through" : "none"}>
      {todo.text}
    </Text>
    <Spacer />
    <Button size="xs" onClick={() => onComplete(todo.id)}>
      {todo.completed ? "Undo" : "Complete"}
    </Button>
    <Button size="xs" colorScheme="red" onClick={() => onDelete(todo.id)}>
      <FaTrash />
    </Button>
  </HStack>
);

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
      setNewTodo("");
    }
  };

  const completeTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <Box maxWidth="500px" mx="auto" mt={8}>
      <Heading mb={8}>Todo App</Heading>
      <Flex mb={8}>
        <Input
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter a new todo"
          mr={4}
        />
        <Button onClick={addTodo} colorScheme="blue">
          <FaPlus />
        </Button>
      </Flex>
      <VStack
        divider={<StackDivider borderColor="gray.200" />}
        spacing={4}
        align="stretch"
      >
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onComplete={completeTodo}
            onDelete={deleteTodo}
          />
        ))}
      </VStack>
    </Box>
  );
};

export default Index;