import { useState } from "react";
import "./App.css";
import { Button, Form, type FormProps, Input, InputNumber } from "antd";
import styles from "./App.module.css";
import { MaskedInput } from "antd-mask-input";

function App() {
  const onFinish: FormProps<any>["onFinish"] = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed: FormProps<any>["onFinishFailed"] = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const maskInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
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
          
          rules={[
            {
              pattern: /^(?:\d{4}-){3}\d{4}$|^\d{16}$/,
              message:
                "Пожалуйста, введите корректный номер кредитной карты в формате XXXX-XXXX-XXXX-XXXX",
            },
            {
              required: true,
              message: "Пожалуйста, введите номер кредитной карты",
            },
          ]}
        >
          <MaskedInput
            onChange={maskInput}
            style={{ width: "100%" }}
            placeholder="XXXX-XXXX-XXXX-XXXX"
            mask="0000 0000 0000 0000"
          />
        </Form.Item>


        <div className={styles.two}>
          <Form.Item<any>
            style={{ width: "100%" }}
            labelCol={{ span: 24 }}
            label="Exp.date (mm/yy)"
            name="Exp.date"
            rules={[
              { required: true, message: "Please input your password!" },
              {},
            ]}
          >
            <div className={styles.childs}>
              <InputNumber type="number" style={{ width: "50%" }} />
              <InputNumber type="number" style={{ width: "50%" }} />
            </div>
          </Form.Item>

          <Form.Item<any>
            labelCol={{ span: 24 }}
            label="CVC"
            name="CVC"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <InputNumber type="number" style={{ width: "100%" }} />
          </Form.Item>
        </div>

        <Form.Item>
          <Button
            style={{ width: "100%", backgroundColor: "black" }}
            type="primary"
            htmlType="submit"
          >
            Confirm
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default App;
