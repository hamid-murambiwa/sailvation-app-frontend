import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { postNewUser } from '../../redux/Users/users';
import '../../styles/sign.css';

function SignupForm() {
  const dispatch = useDispatch();
  const [details, setDetails] = useState(
    { name: '', email: '' },
  );
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const submitHandler = () => {
    if (details.name !== '' && details.email !== '') {
      dispatch(postNewUser(details));
      setIsLoggedIn(true);
    }
  };

  return (
    <div className="container mt-5">
      <div className="form-container doc-flex">
        <form
          className="m-4"
          onSubmit={(e) => {
            e.preventDefault();
            submitHandler();
            isLoggedIn(true);
          }}
        >
          <div className="form-inner">
            <h2 id="log-title">Signup</h2>
            {/* ERROR! */}
            <div className="form-group">
              <label htmlFor="name">
                Name:
                <input type="text" name="name" id="name" onChange={(e) => setDetails({ ...details, name: e.target.value })} value={details.name} />
              </label>
            </div>

            <div className="form-group mt-3">
              <label htmlFor="email">
                Email:
                <input type="email" name="email" id="email" onChange={(e) => setDetails({ ...details, email: e.target.value })} value={details.email} />
              </label>
            </div>

            <input type="submit" className="btn btn-success mt-3" value="Signup" disabled={isLoggedIn} />
          </div>
        </form>
        {isLoggedIn
        && (
        <div>
          <p>Registarion was successful</p>
          <Link to="/login">
            You can login from here
          </Link>
        </div>
        )}
        {!isLoggedIn
      && (
      <div className="m-4 mBox">
        <h2>Already Have an Account?</h2>
        <Link to="/login" className="sign-u">
          You can login from here
        </Link>
      </div>
      )}
      </div>
    </div>
  );
}

export default SignupForm;
