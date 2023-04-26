import { authState } from "../states/authState";
import { LOGOUT, SIGN_IN } from "../type";

const authReducer = (state = authState, action) => {
  switch (action?.type) {
    case SIGN_IN:
      return action.payload;
    case LOGOUT:
      return {
        id: null,
        documentType: null,
        dni: null,
        firstname: null,
        middlename: null,
        lastname: null,
        email: null,
        company: {
          id: null,
          dni: null,
          name: null,
          country: null,
        },
        profile: {
          id: null,
          name: null,
        },
      };
    default:
      return state;
  }
};
export default authReducer;
