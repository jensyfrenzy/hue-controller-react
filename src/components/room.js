import React, { useEffect } from "react";

import styled from "styled-components";
import { motion } from "framer-motion";
import Switch from "react-switch";

import { useDispatch } from "react-redux";

import { setRoomOnState } from "../actions/roomsActions";

const Room = ({ room, id }) => {
  const dispatch = useDispatch();

  const handleLightSwitch = () => {
    room.action.on = !room.action.on;
    dispatch(setRoomOnState(id, room));
  };

  return (
    <StyledRoom>
      <h2>{room.name}</h2>
      <Switch onChange={handleLightSwitch} checked={room.action.on} />
    </StyledRoom>
  );
};

const StyledRoom = styled(motion.div)``;

export default Room;
