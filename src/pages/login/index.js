import React from "react";
import { Form, Input, Button, notification, Select } from "antd";
import axios from "axios";
import { useHistory } from "react-router";

const { Option } = Select;

function Index() {
  const history = useHistory();

  const openNotificationWithIcon = (type) => {
    notification[type]({
      message: "Logged In.",
    });
  };

  const onFinish = async (values: any) => {
    try {
      await axios.post(
        "https://gold-test-app.herokuapp.com/auth/login",
        values
      );
      openNotificationWithIcon("success");
      history.push("/dashboard");
    } catch (error) {
      console.error(error);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="py-20 mx-4 rounded-2xl">
      <div className="p-4 shadow rounded-2xl">
        <div className="w-full">
          <img src="logo.png" alt="" className="w-64 mx-auto" />
        </div>
        <Form
          layout="vertical"
          name="loginForm"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item label="Username" name="username">
            <Input size="large" className="rounded-2xl" />
          </Form.Item>

          <Form.Item label="Password" name="password">
            <Input.Password size="large" className="rounded-2xl" />
          </Form.Item>

          <Form.Item>
            <Button
              shape="round"
              type="primary"
              htmlType="submit"
              size="large"
              block
            >
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Index;
