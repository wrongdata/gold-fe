import React from "react";
import { Tabs, Card, Descriptions } from "antd";
import { useSelector } from "react-redux";

import RegisterUser from "./RegisterUser";
const { TabPane } = Tabs;

function Index() {
  const user = useSelector((state) => state.user);
  console.log(user);
  return (
    <div className="py-20 mx-5">
      <Tabs defaultActiveKey="1">
        <TabPane tab="Profile" key="1">
          <Card title="Your info" className="rounded-2xl">
            <Descriptions>
              <Descriptions.Item label="Username">
                {user.username}
              </Descriptions.Item>
              <Descriptions.Item label="Fullname">
                {user.fullname}
              </Descriptions.Item>
              <Descriptions.Item label="Role">{user.role}</Descriptions.Item>
            </Descriptions>
          </Card>
        </TabPane>

        <TabPane tab="Add User" key="3">
          <RegisterUser />
        </TabPane>
      </Tabs>
    </div>
  );
}

export default Index;
