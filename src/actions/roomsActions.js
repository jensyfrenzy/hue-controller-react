import axios from "axios";
import { roomsUrl, roomActionUrl } from "../api";

// action creator
export const loadRooms = () => async (dispatch) => {
  const roomsResponse = await axios.get(roomsUrl());

  dispatch({
    type: "GET_ROOMS",
    payload: {
      rooms: roomsResponse.data,
    },
  });
};

export const setRoomOnState = (key, room) => async (dispatch) => {
  const setState = await axios.put(roomActionUrl(key), { on: room.action.on });
  dispatch({
    type: "SET_ROOM_STATE",
    payload: {
      roomId: key,
      room: room,
    },
  });
};

export const setRoomBrightnessState =
  (key, room, commit) => async (dispatch) => {
    if (commit) {
      const setState = await axios.put(roomActionUrl(key), {
        bri: room.action.bri,
      });
    }

    dispatch({
      type: "SET_ROOM_STATE",
      payload: {
        roomId: key,
        room: room,
      },
    });
  };
