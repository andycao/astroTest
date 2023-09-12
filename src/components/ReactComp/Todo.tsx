import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import { v4 as uuidv4 } from "uuid";
import { useStore } from "@nanostores/react";
import { list } from "../../nanoStore";

const Index = () => {
  const [form] = Form.useForm();

  const $nanoList = useStore(list);
  console.log($nanoList);

  function remove(index) {
    list.set($nanoList.filter((e, i) => i !== index));
  }
  return (
    <div className="container">
      <h2>todo list</h2>
      <Form
        form={form}
        onFinish={(values) => {
          list.set([...$nanoList, values.name]);
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
        {Array.isArray($nanoList) && $nanoList.length > 0
          ? $nanoList.map((e, i) => (
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
