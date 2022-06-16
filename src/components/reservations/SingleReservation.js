import React from 'react';
import Card from 'react-bootstrap/Card';
import { v1 as uuidv1 } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/destinations.scss';

const SingleReservation = ({ reservation, cruises, destinations }) => {
  let destination = {};

  if (destinations) {
    destinations.map((destin) => {
      if (destin.id === reservation.destination_id) {
        destination = destin;
      }
    });
  }

  const v1options = {
    node: [0x01, 0x23, 0x45, 0x67, 0x89, 0xab],
    clockseq: 0x1234,
    msecs: new Date('2011-11-01').getTime(),
    nsecs: 5678,
  };

  const formatDate = (date) => {
    const d = new Date(date);
    let month = (d.getMonth() + 1).toString();
    let day = d.getDate().toString();
    const year = d.getFullYear();
    if (month.length < 2) {
      month = `0${month}`;
    }
    if (day.length < 2) {
      day = `0${day}`;
    }
    return [year, month, day].join('-');
  };

  return (
    <div className="reservation-container">
      {
        cruises.map((cruise) => (
          cruise.id === reservation.cruise_id
          && (
          <div className="d-flex" key={reservation.id}>
            <div className="card-desc">
              <section id="res">
                <div>
                  <div>
                    <img alt="cruise" src={`${cruise.image}`} style={{ width: '200px', margin: '1rem 0' }} />
                  </div>
                  <Card.Text>
                    <strong>Cruise name</strong>
                    :
                    {' '}
                    {cruise.name}
                  </Card.Text>
                  <Card.Text>
                    <strong>Departure city</strong>
                    :
                    {' '}
                    {destination.departure_city}
                  </Card.Text>
                  <Card.Text>
                    <strong>Departure date</strong>
                    :
                    {' '}
                    {reservation.start_date}
                  </Card.Text>
                  <Card.Text>
                    <strong>Created at</strong>
                    :
                    {' '}
                    {formatDate(reservation.created_at)}
                  </Card.Text>
                  <Card.Text>
                    <strong>Reservation id</strong>
                    :
                    {' '}
                    {uuidv1(v1options)}
                  </Card.Text>
                </div>
              </section>
              <section id="des">
                <div>
                  <Card.Title>Destination:</Card.Title>
                  <div>
                    <img src={`${destination.image}`} alt="destination" style={{ width: '200px', margin: '1rem 0' }} />
                  </div>
                  <Card.Text>
                    <strong>Country</strong>
                    :
                    {' '}
                    {destination.country}
                  </Card.Text>
                  <Card.Text>
                    <strong>City</strong>
                    :
                    {' '}
                    {destination.city}
                  </Card.Text>
                </div>
              </section>
            </div>
          </div>

          )
        ))
      }
    </div>
  );
};
export default SingleReservation;
