import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Rotate from 'react-reveal/Rotate';
import SingleReservation from './SingleReservation';
import { deleteReservation, fetchAllReservations } from '../../redux/Reservations/reservations';
import { getAllCruises } from '../../redux/Cruises/cruises';
import { fetchAllDestinations } from '../../redux/Destinations/destinations';
import img from '../../styles/reserve.png';
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
    <div id="container">
      <div className="text-center">
        <h1 id="log-title">Reservations</h1>
      </div>
      {
      reservationsall.length === 0 ? (
        <div className="reservations-container sec">
          <p className="n-res">You have no reservations</p>
          <h2>Reserve a cruise</h2>
          <Rotate>
            <Link to="/cruises/reservation">
              <img src={img} alt="reserve icon" className="login-icon" />
            </Link>
          </Rotate>
        </div>
      ) : (
        null
      )
      }
      {
        isLoggedIn === 'true' ? (
          <div className="reservations-container">
            {
         reservationsall && reservationsall.map((reservation, index) => (
           reservation.user_id === parseInt(userid, 10)
            && (
              <div id={reservation.id} key={reservation.id} className="reservation">
                <Card>
                  <Card.Header as="h5">
                    Reservation #
                    {index + 1}
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
          <div className="reservations-container sec" />
        )
      }
    </div>
  );
};

export default ReservationDetails;
