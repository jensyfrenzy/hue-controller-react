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
  const rooms = useSelector((state) => state.rooms);

  return (
    <StyledRooms>
      <h1>Rooms</h1>
      {rooms ? (
        <div>
          {Object.keys(rooms).map((roomId) => (
            <Room key={roomId} id={roomId} room={rooms[roomId]} />
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
