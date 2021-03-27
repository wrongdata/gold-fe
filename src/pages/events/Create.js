import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import { createEvent, updateEvent } from "../../store/actions/events";
import {
  Form,
  Input,
  Button,
  DatePicker,
  notification,
  Select,
  Row,
  Col,
} from "antd";
import { CloseCircleOutlined, PlusOutlined } from "@ant-design/icons";

import moment from "moment";
import { convertLegacyProps } from "antd/lib/button/button";

const { Option } = Select;

function Index() {
  const [currentDate, setCurrentDate] = useState({
    student: "",
    contractNo: "",
    course: "",
    level: "",
    books: "",
    address: "",
    prevDone: "",
    plans: "",
    startDate: "",
    excludedDates: "",
    totalSessions: "",
    allowedCancelation: "",
  });
  const events = useSelector((state) => state.events);
  const dispatch = useDispatch();

  const openNotificationWithIcon = (type, message) => {
    notification[type]({
      message: message,
    });
  };

  console.log(currentDate);

  const onFinish = async (values: any) => {
    try {
      setCurrentDate(values);
      await dispatch(createEvent(currentDate));

      console.log(events);

      await openNotificationWithIcon("success", "Updated.");
    } catch (error) {
      await openNotificationWithIcon("error", "Failed.");
    }
  };

  const onFinishFailed = async (errorInfo: any) => {
    const message = events.map((event) => {
      return event.data;
    });
    await openNotificationWithIcon("error", message);
  };

  return (
    <div className="py-20 mx-4 rounded-2xl">
      <div className="p-4 shadow rounded-2xl">
        <Form
          name="addEvent"
          onFinishFailed={onFinishFailed}
          onFinish={onFinish}
        >
          <Form.Item
            label="Student"
            name="student"
            rules={[{ required: true, message: "Please input student name." }]}
          >
            <Input size="large" className="rounded-2xl" />
          </Form.Item>
          <Form.Item
            label="Contract No."
            name="contractNo"
            rules={[
              { required: true, message: "Please input contract number." },
            ]}
          >
            <Input size="large" className="rounded-2xl" />
          </Form.Item>

          <Form.Item
            label="Course"
            name="course"
            rules={[{ required: true, message: "Please input course name." }]}
          >
            <Input size="large" className="rounded-2xl" />
          </Form.Item>

          <Form.Item
            label="Level"
            name="level"
            rules={[{ required: true, message: "Please input level." }]}
          >
            <Input size="large" className="rounded-2xl" />
          </Form.Item>

          <Form.Item
            label="Address"
            name="address"
            rules={[{ required: true, message: "Please input address." }]}
          >
            <Input size="large" className="rounded-2xl" />
          </Form.Item>

          <Form.Item
            label="Previusly done (hrs.)"
            name="prevDone"
            rules={[
              { required: true, message: "Please input previulsy done hours." },
            ]}
          >
            <Input size="large" className="rounded-2xl" type="number" />
          </Form.Item>

          <Form.Item
            label="Start date"
            name="startDate"
            fieldKey="startDate"
            rules={[
              { required: true, message: "Please select an start date." },
            ]}
          >
            <DatePicker
              size="large"
              className="rounded-2xl w-full"
              format="YYYY-MM-DD"
            />
          </Form.Item>

          <Form.Item label="Total sessions" name="totalSessions">
            <Input size="large" className="rounded-2xl" type="number" />
          </Form.Item>
          <Form.Item label="Allowed canceletion" name="allowedCancelation">
            <Input size="large" className="rounded-2xl" type="number" />
          </Form.Item>

          <Form.List name="books">
            {(fields, { add, remove }) => (
              <>
                {fields.map((field) => (
                  <Form.Item
                    label="Book"
                    name={[field.name, "book"]}
                    fieldKey={[field.fieldKey, "book"]}
                    rules={[{ required: true, message: "Please add a book." }]}
                    labelAlign="right"
                  >
                    <Row>
                      <Col flex="auto">
                        <Input size="large" className="rounded-2xl w-full" />
                      </Col>
                      <Col flex="40px" className="self-center px-3 pb-2">
                        <CloseCircleOutlined
                          className="text-xl text-red-400"
                          onClick={() => remove(field.name)}
                        />
                      </Col>
                    </Row>
                  </Form.Item>
                ))}
                <Form.Item>
                  <Button
                    type="dashed"
                    onClick={() => add()}
                    block
                    size="large"
                    className="rounded-2xl"
                    shape="round"
                  >
                    Add book
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>

          <Form.List name="plans">
            {(fields, { add, remove }) => (
              <>
                {fields.map((field) => (
                  <div>
                    <Form.Item
                      label="Plan"
                      name={[field.name, "plan"]}
                      fieldKey={[field.fieldKey, "plan"]}
                      labelAlign="right"
                      key="plan-item"
                    >
                      <DatePicker
                        size="large"
                        className="rounded-2xl w-full"
                        showTime
                      />
                    </Form.Item>
                    <CloseCircleOutlined
                      className="text-xl text-red-400"
                      onClick={() => remove(field.name)}
                    />
                  </div>
                ))}
                <Form.Item>
                  <Button
                    type="dashed"
                    onClick={() => add()}
                    block
                    size="large"
                    className="rounded-2xl"
                    shape="round"
                  >
                    Add plan
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>

          <Form.List name="excludedDates">
            {(fields, { add, remove }) => (
              <>
                {fields.map((field) => (
                  <div>
                    <Form.Item
                      label="Exlude"
                      name={[field.name, "exclude"]}
                      fieldKey={[field.fieldKey, "exclude"]}
                      labelAlign="right"
                      key="exclude-item"
                    >
                      <DatePicker
                        name="exclude"
                        size="large"
                        className="rounded-2xl w-full"
                      />
                    </Form.Item>
                    <CloseCircleOutlined
                      className="text-xl text-red-400"
                      onClick={() => remove(field.name)}
                    />
                  </div>
                ))}
                <Form.Item>
                  <Button
                    type="dashed"
                    onClick={() => add()}
                    block
                    size="large"
                    className="rounded-2xl"
                    shape="round"
                  >
                    Exclude a date
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              block
              size="large"
              shape="round"
            >
              Create Event
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Index;
