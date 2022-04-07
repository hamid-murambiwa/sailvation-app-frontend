import axios from 'axios';

// const BACK_END_URL = 'http://127.0.0.1:3000/api/v1';
// const BACK_END_URL = 'https://boiling-harbor-88832.herokuapp.com/api/v1';
const BACK_END_URL = 'https://pacific-lake-89990.herokuapp.com/api/v1';

// GET ALL USERS
export const fetchAllUsers = async () => {
  const usersData = await axios.get(`${BACK_END_URL}/users`);
  return usersData;
};

// POST NEW USER
export const postNewUser = async (newUserData) => {
  const newUser = await axios.post(`${BACK_END_URL}/users`, newUserData);
  return newUser;
};

// GET ALL CRUISES
export const fetchAllCruises = async (userId) => {
  const cruiseData = await axios.get(`${BACK_END_URL}/users/${userId}/cruises`);
  return cruiseData;
};

// POST NEW CRUISE
export const postNewCruise = async (newCruiseData) => {
  const newCruise = await axios.post(`${BACK_END_URL}/users/${newCruiseData.user_id}/cruises`);
  return newCruise;
};

// DELETE A CRUSE
export const deleteCruise = async (userId, cruiseId) => {
  const deletedCruise = await axios.post(`${BACK_END_URL}/users/${userId}/cruises/${cruiseId}`);
  return deletedCruise;
};

// GET ALL RESERVATION
export const fetchAllReservations = async (userId) => {
  const reservationData = await axios.get(`${BACK_END_URL}/users/${userId}/reservations`).then((res) => res.data);
  console.log(reservationData);
  return reservationData;
};

// POST NEW RESERVATION
export const postNewReservation = async (newReservationData) => {
  const newReservation = await axios.post(`${BACK_END_URL}/users/${newReservationData.user_id}/reservations`);
  return newReservation;
};

// DELETE A RESERVATION
export const deleteReservation = async (userId, reservationId) => {
  const deletedReservation = await axios.post(`${BACK_END_URL}/users/${userId}/reservations/${reservationId}`);
  return deletedReservation;
};

// GET ALL DESTINATIONS
export const fetchAllDestinations = async () => {
  const destinationData = await axios.get(`${BACK_END_URL}/destinations`);
  return destinationData;
};

export default {
  fetchAllUsers,
  postNewUser,
  fetchAllCruises,
  postNewCruise,
  deleteCruise,
  fetchAllReservations,
  postNewReservation,
  deleteReservation,
  fetchAllDestinations,
};
