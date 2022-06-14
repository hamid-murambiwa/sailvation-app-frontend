import axios from 'axios';

const FETCH_ALL_DESTINATIONS = 'FETCH_ALL_DESTINATIONS';

const initialDestinationState = [];

const destinationReducer = (state = initialDestinationState, action) => {
  switch (action.type) {
    case FETCH_ALL_DESTINATIONS:
      return action.payload;
    default:
      return state;
  }
};

export const fetchAllDestinations = () => (dispatch) => {
  axios.get('https://sailvation.herokuapp.com/api/v1/destinations')
    .then((response) => {
      dispatch({ type: FETCH_ALL_DESTINATIONS, payload: response });
    });
};

export default destinationReducer;
