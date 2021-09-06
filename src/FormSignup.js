import React from 'react';
import validate from './components/validateInfo';
import useForm from './components/useForm';
import './Form.css';
import 'react-dropdown/style.css';

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );
  const onSubmit = () =>{
    alert ("Registered");
  }
  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
          Book a flight
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Username</label>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Enter your name'
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>

        <select
            name="type"
            id="type"
            className="form-control"
            
          >
            <option>Delhi To New York</option>
            <option>Mumbai To London</option>
            <option>Kolkata To Stockholm</option>
            <option>Chennai To Dhaka</option>
          </select>
        
        <button className='form-input-btn' type='submit' onClick={onSubmit}>
          Confirm
        </button>
       
      </form>
    </div>
  );
};

export default FormSignup;
