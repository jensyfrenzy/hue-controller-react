import axios from "axios";
import { roomsUrl, roomActionUrl } from "../api";
const getRoomsWithKeys = (data) => {
  const rooms = [];
  Object.keys(data).forEach((key) => {
    let room = data[key];
    room.key = key;

    if (room.type === "Room") {
      rooms.push(room);
    }
  });
  return rooms;
};

// action creator
export const loadRooms = () => async (dispatch) => {
  const roomsResponse = await axios.get(roomsUrl());

  dispatch({
    type: "GET_ROOMS",
    payload: {
      rooms: getRoomsWithKeys(roomsResponse.data),
    },
  });
};

export const setRoomState = (key, state) => async (dispatch) => {
  const setState = await axios.put(roomActionUrl(key), state);
  //   const roomsResponse = await axios.get(roomsUrl());

  dispatch({
    type: "SET_ROOM_STATE",
  });
};
