import { useState } from "react";
import "./App.css";
import { Button, Form, type FormProps, Input, InputNumber } from "antd";
import styles from './App.module.css'

function App() {
  const onFinish: FormProps<any>["onFinish"] = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed: FormProps<any>["onFinishFailed"] = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className={styles.container}>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
      
        className={styles.foorms}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<any>
          labelCol={{ span: 24 }}
          label="Cardholder name"
          name="username"
          rules={[
            { required: true, message: "Please input your username!" },
            { max: 10 },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item<any>
          labelCol={{ span: 24 }}
          label="Card number"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>

        <div className={styles.two}>
          <Form.Item<any>
            style={{width:'100%'}}
            labelCol={{ span: 24 }}
            label="Exp.date (mm/yy)"
            name="Exp.date"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <div className={styles.childs}><InputNumber style={{ width: "50%" }} />
            <InputNumber style={{ width: "50%" }} /></div>
          </Form.Item>

          <Form.Item<any>
            labelCol={{ span: 24 }}
            label="CVC"
            name="CVC"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <InputNumber style={{ width: "100%" }} />
          </Form.Item>
        </div>

        <Form.Item >
          <Button style={{ width: "100%",backgroundColor:'black' }} type="primary" htmlType="submit">
            Confirm
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default App;
