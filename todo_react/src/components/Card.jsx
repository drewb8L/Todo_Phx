import React, { useState } from "react";
import "./card.css";
import { Button, Popconfirm, message } from "antd";
import { deleteList } from "../jobs";
// eslint-disable-next-line react/prop-types
const Card = ({ children, list, changeState }) => {
  const [popconfirmVisible, setConfirmVisible] = useState(false);

  const handleDelete = () => {
    // eslint-disable-next-line react/prop-types
    // eslint-disable-next-line react/prop-types
    deleteList(list.id).then(() => changeState("deleted todo"));
    //this code below 'then()' is just to make eslint happy and for curiosity
    message.info("list deleted").then((r) => {
      console.log("R: " + r);
    });
  };
  const showPopconfirm = () => {
    setConfirmVisible(true);
  };
  const handleCancel = () => {
    setConfirmVisible(false);
  };

  return (
    <div className="card">
      {/* eslint-disable-next-line react/prop-types */}
      <h1>{list.name}</h1>
      <Popconfirm
        title="delete"
        visible={popconfirmVisible}
        onConfirm={handleDelete}
        // eslint-disable-next-line react/prop-types
        okButtonProps={list.id}
        onCancel={handleCancel}
      >
        <Button type={"primary"} danger={true} onClick={showPopconfirm}>
          Delete
        </Button>
      </Popconfirm>
      {children}
    </div>
  );
};

export default Card;
