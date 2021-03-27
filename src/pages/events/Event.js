import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import moment from "moment";
import { deleteEvent, getEvent } from "../../store/actions/events";
import { Button, Typography, List, Row, Col } from "antd";

const Event = ({ event }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <div className="py-30 mx-4">
      <div key={event._id} className="shadow my-4 rounded-2xl leading-6">
        <ul className="p-4">
          <li>Contract No: {event.contractNo}</li>
          <li>Student: {event.student}</li>
          <li>Course: {event.course}</li>
          <li>Level: {event.level}</li>
          <li>Address: {event.address}</li>
          <li>Previously done(hrs): {event.prevDone}</li>
          <li>Start date: {event.startDate}</li>
          <li>Total sessions: {event.totalSessions}</li>
          <li>Allowed Cancelation: {event.allowedCancelation}</li>
        </ul>

        <div className="p-3">
          <List
            header={
              <Typography.Text className="font-bold">Books:</Typography.Text>
            }
            dataSource={event.books}
            renderItem={(event) => (
              <List.Item>{Object.values(event).toString()}</List.Item>
            )}
          />
          <List
            header={
              <Typography.Text mark className="font-bold">
                Excluded dates:
              </Typography.Text>
            }
            dataSource={event.excludedDates}
            renderItem={(event) => (
              <List.Item>
                {moment(Object.values(event).toString()).format(
                  "dddd, MMMM Do YYYY, h:mm:ss A"
                )}
              </List.Item>
            )}
          />

          <List
            header={
              <Typography.Text mark className="font-bold">
                Plans:
              </Typography.Text>
            }
            dataSource={event.plans}
            renderItem={(event) => (
              <List.Item>
                {moment(Object.values(event).toString()).format(
                  "dddd, MMMM Do YYYY, h:mm:ss A"
                )}
              </List.Item>
            )}
          />
        </div>

        <div className="p-3">
          <Row justify="space-between">
            <Col>
              <Button
                className="text-red-500"
                type="link"
                block
                onClick={() => dispatch(deleteEvent(event._id))}
              >
                Delete
              </Button>
            </Col>
            <Col>
              {console.log(event._id)}
              <Button
                type="primary"
                shape="round"
                block
                onClick={function openDetails() {
                  dispatch(getEvent(event._id));
                  history.push(`/events/${event._id}`);
                }}
              >
                More
              </Button>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Event;
