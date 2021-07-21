import React, { useEffect } from "react";

import styled from "styled-components";
import { motion } from "framer-motion";
import { Switch, Slider } from "@material-ui/core";

import { useDispatch } from "react-redux";

import {
  setRoomOnState,
  setRoomBrightnessState,
} from "../actions/roomsActions";

const Room = ({ room, id }) => {
  const dispatch = useDispatch();

  const handleLightSwitch = () => {
    room.action.on = !room.action.on;
    dispatch(setRoomOnState(id, room));
  };

  const commitBrightnessChange = (e, newValue) => {
    room.action.bri = parseInt(newValue);
    dispatch(setRoomBrightnessState(id, room, true));
  };

  const handleBrightnessChange = (e, newValue) => {
    room.action.bri = parseInt(newValue);
    dispatch(setRoomBrightnessState(id, room));
  };

  return (
    <StyledRoom>
      <h2>{room.name}</h2>
      <Switch onChange={handleLightSwitch} checked={room.action.on} />
      <Slider
        min={0}
        max={255}
        value={room.action.bri}
        onChangeCommitted={commitBrightnessChange}
        onChange={handleBrightnessChange}
      ></Slider>
    </StyledRoom>
  );
};

const StyledRoom = styled(motion.div)``;

export default Room;
