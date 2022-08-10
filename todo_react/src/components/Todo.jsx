/* eslint-disable react/prop-types */
// noinspection JSIgnoredPromiseFromCall

import React, { useEffect, useState } from "react";
import { EditFilled, CheckCircleFilled } from "@ant-design/icons";
import { Button, message, Modal, Popconfirm } from "antd";
import { deleteTodo, updateTodo } from "../jobs";
import "./todo.css";
import "antd/dist/antd.css";

function Todo({
  // eslint-disable-next-line react/prop-types
  todo,
  changeState,
}) {
  // eslint-disable-next-line no-unused-vars
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [popconfirmVisible, setConfirmVisible] = useState(false);
  const [edit, setEdit] = useState({ ...todo, title: "", id: "" });
  const [state, setState] = useState([""]);

  useEffect(() => {
    todo === undefined ? console.log('no todo') :
    changeState(["new todo"]);
  }, [state]);

  const handleComplete = () => {
    // eslint-disable-next-line no-shadow
    todo.complete = !todo.complete;
    updateTodo(todo).then(() => setState(["new data"]));
    message.info(
      todo.complete === false
        ? `${todo.title} Reset`
        : `${todo.title} Completed`
    );
    setState(["new state"]);
  };
  const handelDelete = async (todoId) => {
    await deleteTodo(todoId).then(() => setState(["deleted todo"]));
    message.info("Task deleted");
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleEdit = (e) => {
    e.preventDefault();
    showModal();
    updateTodo({ ...edit, title: edit.title, id: todo.id }).then(() =>
      setState(["new data from todo"])
    );
    message.info("Task updated");

    setIsModalVisible(false);
    changeState(["new state from todo"]);
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
      <h4>{todo.title}</h4>
      <p>
        Complete:
        {todo.complete ? "Yes" : "No"}
      </p>
      <section className="update">
        <Button icon={<EditFilled />} onClick={showModal}>
          Edit
        </Button>

        <Button
          icon={<CheckCircleFilled />}
          value={todo}
          type={todo.complete ? "ghost" : "primary"}
          onClick={handleComplete}
        >
          {todo.complete ? "Done" : "Complete Task"}
        </Button>
        <Popconfirm
          title="delete"
          visible={popconfirmVisible}
          onConfirm={() => handelDelete(todo.id)}
          okButtonProps={todo.id}
          onCancel={handleCancel}
        >
          <Button type="danger" value={todo.id} onClick={showPopconfirm}>
            Delete
          </Button>
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
              {" "}
              Cancel
            </Button>
          </form>
        </Modal>
      </section>
    </div>
  );
}

export default Todo;
