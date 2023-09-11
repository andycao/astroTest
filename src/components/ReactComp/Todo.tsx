import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import { v4 as uuidv4 } from "uuid";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [form] = Form.useForm();

  function remove(index) {
    setTodos((todos) => todos.filter((e, i) => i !== index));
  }
  return (
    <div className="container">
      <h2>todo list</h2>
      <Form
        form={form}
        onFinish={(values) => {
          setTodos((todos) => [...todos, values.name]);
          form.resetFields();
        }}
      >
        <Form.Item
          label="输入"
          name="name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input></Input>
        </Form.Item>
        <Button htmlType="submit">add</Button>
      </Form>
      <ul>
        {Array.isArray(todos) && todos.length > 0
          ? todos.map((e, i) => (
              <li key={uuidv4()}>
                {e}{" "}
                <Button
                  onClick={() => {
                    remove(i);
                  }}
                >
                  remove
                </Button>
              </li>
            ))
          : ""}
      </ul>
    </div>
  );
};

export default Index;
