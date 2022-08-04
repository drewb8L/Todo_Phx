import React, { useEffect, useState } from "react";
import { Form, Button, Input } from "antd";
import { createTodo, getTodos } from "../jobs";

// eslint-disable-next-line react/prop-types

function TodoForm(props) {
  const [todo, setTodo] = useState({
    title: "",
    completed: false,
    list_id: null,
  });
  const [form] = Form.useForm();

  useEffect(() => {
    // eslint-disable-next-line react/prop-types
    getTodos().then(() => props.changeState(["new state"]));
  }, [todo]);

  const handleSubmit = async (newTodo) => {
    // eslint-disable-next-line react/prop-types
    setTodo({ ...todo, title: newTodo.task, list_id: props.list.id });
    await createTodo(todo).then(() => setTodo(todo));
    setTodo({ ...todo, title: "", list_id: null });
    form.resetFields();
  };

  return (
    <div>
      <h4 className={"todo-head"} style={{ marginTop: 20 }}>
        Create a Todo
      </h4>
      <Form
        form={form}
        name="Todo-form"
        // initialValues={{ task: '' }}
        preserve={false}
        onValuesChange={(e) =>
          // eslint-disable-next-line react/prop-types
          setTodo({ ...todo, title: e.task, list_id: props.list.id })
        }
        onFinish={handleSubmit}
      >
        <Form.Item
          label="New Task"
          name="task"
          shouldUpdate
          preserve={false}
          initialValue=""
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 8 }}
          rules={[{ required: true, message: "Field cannot be blank!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      {/* eslint-disable-next-line react/prop-types */}
      {props.todo}
    </div>
  );
}

export default TodoForm;
