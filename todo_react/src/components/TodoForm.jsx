import React, { useState } from 'react';
import {
  Form, Button, Input,
} from 'antd';
import { createTodo } from '../jobs';

function TodoForm({ changeState }) {
  const [todo, setTodo] = useState({ title: '', completed: false });
  const [form] = Form.useForm();

  const handleSubmit = async (newTodo) => {
    await setTodo({ ...todo, title: newTodo.task });
    createTodo(todo).then(() => changeState(['deleted todo']));
    setTodo({ ...todo, title: '' });
    form.resetFields();
  };

  return (
    <div>
      <h1>Todo List</h1>

      <Form
        form={form}
        name="Todo-form"
        // initialValues={{ task: '' }}
        preserve={false}
        onValuesChange={(e) => setTodo({ ...todo, title: e.task })}
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
          rules={[{ required: true, message: 'Field cannot be blank!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default TodoForm;
