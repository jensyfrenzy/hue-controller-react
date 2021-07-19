import React, { useEffect } from "react";

import styled from "styled-components";
import { motion } from "framer-motion";
import Switch from "react-switch";

import { useDispatch } from "react-redux";

import { setRoomState } from "../actions/roomsActions";

const Room = ({ name, state, id }) => {
  const dispatch = useDispatch();

  const handleStateChange = () => {
    state.on = !state.on;
    dispatch(setRoomState(id, { on: state.on }));
  };

  return (
    <StyledRoom>
      <h2>{name}</h2>
      <Switch onChange={handleStateChange} checked={state.on} />
    </StyledRoom>
  );
};

const StyledRoom = styled(motion.div)``;

export default Room;
