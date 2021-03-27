import React from "react";
import { Form, Input, Button, notification, Select } from "antd";
import axios from "axios";

const { Option } = Select;

function Index() {
  const openNotificationWithIcon = (type) => {
    notification[type]({
      message: "User Created",
    });
  };

  const onFinish = async (values: any) => {
    try {
      await axios.post("http://localhost:5000/auth/register", values);
      openNotificationWithIcon("success");
    } catch (error) {
      console.error(error);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const [form] = Form.useForm();

  const onRoleChange = (value: string) => {
    switch (value) {
      case "admin":
        form.setFieldsValue({ role: "admin" });
        return;
      case "client":
        form.setFieldsValue({ role: "client" });
        return;
      case "student":
        form.setFieldsValue({ role: "student" });
      default:
        break;
    }
  };

  return (
    <div className="rounded-2xl">
      <div className="p-4 shadow rounded-2xl">
        <Form
          layout="vertical"
          name="registerForm"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item label="Fullname" name="fullName">
            <Input size="large" className="rounded-2xl" />
          </Form.Item>

          <Form.Item label="Username" name="username">
            <Input size="large" className="rounded-2xl" />
          </Form.Item>

          <Form.Item label="Password" name="password">
            <Input.Password size="large" className="rounded-2xl" />
          </Form.Item>

          <Form.Item label="Confirm Password" name="passwordVerify">
            <Input.Password size="large" className="rounded-2xl" />
          </Form.Item>

          <Form.Item
            label="Role"
            name="role"
            fieldKey="role"
            rules={[{ required: true, message: "User role is important." }]}
          >
            <Select size="large" shape="round">
              <Option key="admin" value="admin">
                Admin
              </Option>
              <Option key="client" value="client">
                Client
              </Option>
              <Option key="student" value="student">
                Student
              </Option>
            </Select>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              block
              shape="round"
            >
              Create user
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Index;
