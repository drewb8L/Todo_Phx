// noinspection JSIgnoredPromiseFromCall

import React, { useEffect, useState } from 'react';
import {
  Button, message, Modal, Popconfirm,
} from 'antd';
import { deleteTodo, getTodos, updateTodo } from '../jobs';
import './todo.css';
import 'antd/dist/antd.css';

function Todo({
  // eslint-disable-next-line react/prop-types
  changeState,
  complete,
  id,
  title,
  todo,
}) {
  // eslint-disable-next-line no-unused-vars
  const [completed, setCompleted] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [popconfirmVisible, setConfirmVisible] = useState(false);
  const [edit, setEdit] = useState({ title: '', id: '' });
  useEffect(() => {
    getTodos();
  }, [setCompleted]);

  const handleComplete = (e) => {
    // eslint-disable-next-line no-shadow
    let todo = e.target.value;
    todo = JSON.parse(todo);
    todo.complete = !todo.complete;
    updateTodo(todo).then(() => changeState(['new data']));
    message.info(
      todo.complete === false
        ? `${todo.title} Reset`
        : `${todo.title} Completed`,
    );
  };
  const handelDelete = (todoId) => {
    deleteTodo(todoId).then(() => changeState(['deleted todo']));
    message.info('Task deleted');
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleEdit = (e) => {
    e.preventDefault();
    showModal();
    updateTodo({ ...edit, title: edit.title, id }).then(() => changeState(['new data']));
    message.info('Task updated');
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
    setConfirmVisible(false);
  };
  const showPopconfirm = () => {
    setConfirmVisible(true);
  };

  return (
    <div className="todo">
      <h4>{title}</h4>
      <p>
        Complete:
        {complete ? 'Yes' : 'No'}
      </p>
      <section className="update">
        <button
          type="button"
          className="edit"
          style={{ backgroundColor: '#33bfff' }}
          onClick={showModal}
        >
          edit
        </button>
        <button
          type="button"
          className="complete-toggle"
          style={
            // eslint-disable-next-line react/prop-types
            complete ? { backgroundColor: 'green' } : { backgroundColor: 'red' }
          }
          value={todo}
          onClick={handleComplete}
        >
          {complete ? 'Done' : 'complete task'}
        </button>
        <Popconfirm
          title="delete"
          visible={popconfirmVisible}
          onConfirm={() => handelDelete(id)}
          okButtonProps={id}
          onCancel={handleCancel}
        >
          <button
            type="button"
            className="delete"
            value={id}
            onClick={showPopconfirm}
          >
            delete
          </button>
        </Popconfirm>

        <Modal
          visible={isModalVisible}
          onOk={handleEdit}
          title="Edit"
          footer={null}
        >
          <form onSubmit={handleEdit}>
            <input
              type="text"
              placeholder="New Title"
              value={edit.title}
              onChange={(e) => setEdit({ ...edit, title: e.target.value })}
            />
            <Button
              className="submit"
              key="submit"
              type="primary"
              onClick={handleEdit}
            >
              Submit
            </Button>
            <Button className="cancel" key="back" onClick={handleCancel}>
              {' '}
              Cancel
            </Button>
          </form>
        </Modal>
      </section>
    </div>
  );
}

export default Todo;
