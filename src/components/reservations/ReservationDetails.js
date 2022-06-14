import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from 'react-bootstrap/Card';
import SingleReservation from './SingleReservation';
import { deleteReservation, fetchAllReservations } from '../../redux/Reservations/reservations';
import { getAllCruises } from '../../redux/Cruises/cruises';
import { fetchAllDestinations } from '../../redux/Destinations/destinations';
import '../../styles/destinations.scss';

const ReservationDetails = () => {
  const [num, setNum] = useState(0);

  const dispatch = useDispatch();
  let userid = localStorage.getItem('userId');
  userid = parseInt(userid, 10);

  const handleDelete = (e, id, userid) => {
    e.preventDefault();
    dispatch(deleteReservation(userid, id));
    dispatch(fetchAllReservations(userid));
    dispatch(fetchAllDestinations());
    setNum(num + 1);
    document.getElementById(`${id}`).removeChild();
  };

  useEffect(() => {
    dispatch(getAllCruises(userid));
    dispatch(fetchAllReservations(userid));
    dispatch(fetchAllDestinations());
  }, []);

  useEffect(() => {
    dispatch(getAllCruises(userid));
    dispatch(fetchAllReservations(userid));
  }, [num]);

  const cruises = useSelector((state) => state.cruisesReducer);
  const reservationsall = useSelector((state) => state.reservationReducer);
  const destinations = useSelector((state) => state.destinationReducer.data);
  const isLoggedIn = localStorage.getItem('isLoggedIn');

  return (
    <>
      <h1 className="text-center">Reservations</h1>
      {
      reservationsall.length === 0 ? (
        <p className="n-res"><i>You have no reservations</i></p>
      ) : (
        null
      )
      }
      {
        isLoggedIn === 'true' ? (
          <div className="reservations-container">
            {
         reservationsall && reservationsall.map((reservation) => (
           reservation.user_id === parseInt(userid, 10)
            && (
              <div id={reservation.id} key={reservation.id} className="reservation">
                <Card>
                  <Card.Header as="h5">
                    Reservation #
                    {reservation.id}
                  </Card.Header>
                  <Card.Body>
                    <SingleReservation
                      cruises={cruises}
                      reservation={reservation}
                      key={reservation.id}
                      destinations={destinations}
                    />
                    <div className="justify-content-end">

                      <button type="submit" variant="primary" onClick={(e) => handleDelete(e, reservation.id, userid)} className="btn btn-danger">Cancel the reservation</button>

                    </div>
                  </Card.Body>
                </Card>
              </div>
            )
         ))
        }
          </div>
        ) : (
          <h1 className="text-center"> You have to Log in</h1>
        )
      }
    </>
  );
};

export default ReservationDetails;
