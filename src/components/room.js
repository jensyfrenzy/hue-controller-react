import React, { useEffect, useState } from "react";

import styled from "styled-components";
import { motion } from "framer-motion";
import { Switch, Slider } from "@material-ui/core";
import { ColorPicker, createColor } from "material-ui-color";

import { useDispatch } from "react-redux";

import {
  setRoomOnState,
  setRoomBrightnessState,
  setRoomColorState,
} from "../actions/roomsActions";

import { RGBtoXY, xyBriToRgb } from "../util";

const Room = ({ room, id }) => {
  const dispatch = useDispatch();

  const initRgb = xyBriToRgb(
    room.action.xy[0],
    room.action.xy[1],
    room.action.bri
  );

  const [color, setColor] = useState(createColor(initRgb, "rgb"));

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

  const handleColorChange = (value) => {
    setColor(value);
    room.action.xy = RGBtoXY(value.rgb[0], value.rgb[1], value.rgb[2]);
    dispatch(setRoomColorState(id, room, true));
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
      />
      <ColorPicker value={color} onChange={handleColorChange} />
    </StyledRoom>
  );
};

const StyledRoom = styled(motion.div)``;

export default Room;
