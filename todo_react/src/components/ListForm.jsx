import React from "react";
import { useState } from "react";
import { Form, Button, Input } from "antd";
import { createList, getLists } from "../jobs";

import "./list-form.css";
// eslint-disable-next-line react/prop-types
function ListForm({ changeState, children }) {
  const [list, setList] = useState([{ name: "" }]);
  const [form] = Form.useForm();

  const handleSubmit = async (newList) => {
    await setList([{ ...list, name: newList.name }]);
    createList(list).then(() => getLists().then((lists) => setList(lists)));
    changeState("update");
    setList([{ ...list, name: "" }]);
    form.resetFields();
  };

  return (
    <div className="header">
      <Form
        className="list-form"
        form={form}
        name="list-form"
        // initialValues={{ task: '' }}
        preserve={false}
        onValuesChange={(e) => setList({ ...list, name: e.name })}
        onFinish={handleSubmit}
      >
        <Form.Item
          label="New List"
          name="name"
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
          <Button type="primary" htmlType="submit" className="list-form-button">
            Submit
          </Button>
        </Form.Item>
      </Form>
      {children}
    </div>
  );
}

export default ListForm;
