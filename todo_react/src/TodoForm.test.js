import { screen, render } from '@testing-library/react';
import React from 'react';
import TodoForm from './components/TodoForm';
import App from './App';

window.matchMedia = window.matchMedia || function () {
  return {
    matches: false,
    addListener() {},
    removeListener() {},
  };
};

describe('App', () => {
  test('renders App component', () => {
    // eslint-disable-next-line react/jsx-filename-extension
    render(<App />);
    screen.debug();
  });
});

describe(TodoForm, () => {
  it('should render', () => {
    // eslint-disable-next-line react/jsx-filename-extension
    render(<TodoForm />);
    expect(screen.getByText('Todo List')).toBeInTheDocument();
  });
});
