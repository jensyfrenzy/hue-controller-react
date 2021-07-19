import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadRooms } from "../actions/roomsActions";
import styled from "styled-components";
import { motion } from "framer-motion";

import Room from "../components/room";

const Rooms = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadRooms());
  }, [dispatch]);

  const { rooms } = useSelector((state) => state.hue);

  return (
    <StyledRooms>
      <h1>Rooms</h1>
      {rooms.length ? (
        <div>
          {rooms.map((room) => (
            <Room
              key={room.key}
              id={room.key}
              name={room.name}
              state={room.action}
            />
          ))}
        </div>
      ) : (
        "No rooms found"
      )}
    </StyledRooms>
  );
};

const StyledRooms = styled(motion.div)``;

export default Rooms;
