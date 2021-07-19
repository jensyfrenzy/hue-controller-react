const initialState = {
  rooms: [],
};

const hueReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ROOMS":
      return { ...state, rooms: action.payload.rooms };
    case "SET_ROOM_STATE":
      return { ...state };
    default:
      return { ...state };
  }
};

export default hueReducer;
