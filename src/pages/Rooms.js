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
      <RoomsList>
        {Object.keys(rooms).map((roomId) => (
          <Room key={roomId} id={roomId} room={rooms[roomId]} />
        ))}
      </RoomsList>
    </StyledRooms>
  );
};

const StyledRooms = styled(motion.div)`
  padding: 0rem 5rem;
  margin-bottom: 5rem;
  h1 {
    padding: 5rem 0rem;
  }
`;

const RoomsList = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export default Rooms;
