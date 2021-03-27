import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Input, Empty } from "antd";

import Event from "./Event";

const Events = () => {
  const events = useSelector((state) => state.events);

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <div className="py-20">
        <div className="sticky top-16 bg-white w-full p-5">
          <Input
            size="large"
            placeholder="Search events"
            className="w-full rounded-2xl"
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
        </div>

        {!events.length ? (
          <div className="py-10">
            <Empty />
          </div>
        ) : (
          events
            .filter((val) => {
              if (searchTerm === "") {
                return val;
              } else if (
                val.student.toLowerCase().includes(searchTerm.toLowerCase()) ||
                val.contractNo.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return val;
              }
            })
            .map((event) => {
              return (
                <div key={event._id}>
                  <Event event={event} />
                </div>
              );
            })
        )}
      </div>
    </div>
  );
};

export default Events;
