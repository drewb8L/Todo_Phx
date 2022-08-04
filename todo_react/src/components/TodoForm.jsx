import React, {useEffect, useState} from 'react';
import {
  Form, Button, Input,
} from 'antd';
import {createTodo, getTodos} from '../jobs';
import {Context} from "../App";

// eslint-disable-next-line react/prop-types
function TodoForm({ listId }) {
  let {setState, state} = React.useContext(Context)
  const [todo, setTodo] = useState({ title: '', completed: false, list_id: null });
  const [form] = Form.useForm();

  useEffect(() =>{
    getTodos().then(() => setState('new state'))

  },[state])

  const handleSubmit = async (newTodo) => {
    setTodo({ ...todo, title: newTodo.task, list_id: listId});
    await createTodo(todo).then(() => setState(['update state']))
    setTodo({ ...todo, title: '', list_id: null });
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
        onValuesChange={(e) => setTodo({ ...todo, title: e.task, list_id: listId })}
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
