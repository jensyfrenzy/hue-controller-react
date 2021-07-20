const initialState = {};

const roomsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ROOMS":
      return action.payload.rooms;
    case "SET_ROOM_STATE":
      return {
        ...state,
        [action.payload.roomId]: action.payload.room,
      };
    default:
      return { ...state };
  }
};

export default roomsReducer;
