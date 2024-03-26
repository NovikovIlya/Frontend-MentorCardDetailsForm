import { useState } from "react";
import "./App.css";
import { Button, Form, type FormProps, Input } from "antd";
import styles from "./App.module.css";
import { MaskedInput } from "antd-mask-input";

function App() {
  const [name, setName] = useState<string | null>(null);
  const [num, setNum] = useState<string | null>(null);
  const [date, setDate] = useState({
    month: null,
    year: null,
  });
  const [cvs, setCvs] = useState<string | null>(null);

  const onFinish: FormProps<any>["onFinish"] = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed: FormProps<any>["onFinishFailed"] = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const maskInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNum(e.target.value);
  };

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleCvs = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(Number(e.target.value) <= 999){
      setCvs(e.target.value);
    }else{
      setCvs(prev=>prev)
    }
  };

  const handleDate = (e: any) => {
    if (e.target.value < 1) {
      return;
    }
    if (String(e.target.value).length > 2) {
      return;
    }
    setDate({
      ...date,
      [e.target.name]: e.target.value.padStart(2, 0),
    });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <div className={styles.cardParent}>
          <div className={styles.cardOne}>
            <div className={styles.containerCirlce}>
              <div className={styles.circleOne}></div>
              <div className={styles.circleTwo}></div>
            </div>
            <div className={styles.niz}>
              <div className={styles.number}>{num && num}</div>
              <div className={styles.bot}>
                <div className={styles.cardName}>{name && name}</div>
                {date.month && (
                  <div className={styles.dateNum}>
                    <div>{date.month}/</div>
                    <div>{date.year}</div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className={styles.cardTwo}>
            <div className={styles.grayZone}></div>
            <div className={styles.gg}>
              <div className={styles.grayZoneTwo}>
                <span className={styles.cvs}>{cvs && cvs}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.right}>
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
                { max: 20 },
              ]}
            >
              <Input placeholder="Your name" onChange={handleName} />
            </Form.Item>

            <Form.Item<any>
              labelCol={{ span: 24 }}
              label="Card number"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please, enter credit card",
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
                  { required: true, message: "Please input your exp.date!" },
                ]}
              >
                <div className={styles.childs}>
                  <Input
                  // @ts-ignore
                    value={date.month && date.month }
                    min={1}
                    max={99}
                    name="month"
                    onChange={handleDate}
                    type="number"
                    style={{ width: "50%" }}
                  />
                  <Input
                  // @ts-ignore
                    value={date.year && date.year }
                    min={1}
                    max={99}
                    name="year"
                    onChange={handleDate}
                    type="number"
                    style={{ width: "50%" }}
                  />
                </div>
              </Form.Item>

              <Form.Item<any>
                labelCol={{ span: 24 }}
                label="CVC"
                name="CVC"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input
                  maxLength={3}
                //@ts-ignore
                  value={cvs && cvs}
                  onChange={handleCvs}
                  min={1}
                  max={999}
                  type="number"
                  style={{ width: "100%" }}
                />
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
      </div>
    </div>
  );
}

export default App;
