import React, { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const TasksContext = createContext();

export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [goals, setGoals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_BASE_URL = 'https://snapgoal.org';

  // Fetch all tasks
  const fetchTasks = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${API_BASE_URL}/tasks/`);
      setTasks(response.data.results);
    } catch (err) {
      console.error('Ошибка при получении задач:', err);
      setError('Failed to fetch tasks.');
    } finally {
      setLoading(false);
    }
  };

  // Fetch task by UUID
  const fetchTaskById = async (taskUuid) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${API_BASE_URL}/task/${taskUuid}/`);
      return response.data;
    } catch (err) {
      console.error('Ошибка при получении задачи:', err);
      setError('Failed to fetch the task.');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Create a new task
  const createTask = async (taskData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post(`${API_BASE_URL}/task/`, taskData);
      setTasks((prevTasks) => [...prevTasks, response.data]);
      return response.data;
    } catch (err) {
      console.error('Ошибка при создании задачи:', err);
      setError('Failed to create task.');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Update an existing task
  const updateTask = async (taskUuid, updatedData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.put(`${API_BASE_URL}/task-update/${taskUuid}/`, updatedData);
      setTasks((prevTasks) =>
        prevTasks.map((task) => (task.uuid === taskUuid ? response.data : task))
      );
      return response.data;
    } catch (err) {
      console.error('Ошибка при обновлении задачи:', err);
      setError('Failed to update task.');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Delete a task
  const deleteTask = async (taskUuid) => {
    setLoading(true);
    setError(null);
    try {
      await axios.delete(`${API_BASE_URL}/task/${taskUuid}/`);
      setTasks((prevTasks) => prevTasks.filter((task) => task.uuid !== taskUuid));
    } catch (err) {
      console.error('Ошибка при удалении задачи:', err);
      setError('Failed to delete task.');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Fetch all goals
  const fetchGoals = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${API_BASE_URL}/projects/`);
      setGoals(response.data.results);
    } catch (err) {
      console.error('Ошибка при получении целей:', err);
      setError('Failed to fetch goals.');
    } finally {
      setLoading(false);
    }
  };

  // Fetch a specific goal by UUID
  const fetchGoalById = async (goalUuid) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${API_BASE_URL}/project/${goalUuid}/`);
      return response.data;
    } catch (err) {
      console.error('Ошибка при получении цели:', err);
      setError('Failed to fetch the goal.');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
    fetchGoals();
  }, []);

  return (
    <TasksContext.Provider
      value={{
        tasks,
        goals,
        loading,
        error,
        fetchTasks,
        fetchTaskById,
        createTask,
        updateTask,
        deleteTask,
        fetchGoals,
        fetchGoalById,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

TasksProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useTasks = () => useContext(TasksContext);
