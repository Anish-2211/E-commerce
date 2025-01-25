import React, { useState } from 'react';

const AddressDetails = () => {
  // Form fields state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    roomNo: '',
    pincode: '',
    city: '',
    state: ''
  });

  // State to store the list of all submissions
  const [submissions, setSubmissions] = useState([]);

  // Handle input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Add the current form data to the submissions list
    setSubmissions([...submissions, formData]);

    // Clear the form after submission
    setFormData({
      name: '',
      phone: '',
      roomNo: '',
      pincode: '',
      city: '',
      state: ''
    });
  };

  return (
    <div className='flex w-screen max-h-[calc(100vh-200px)] border border-red-500  bg-purple-500 '>
      <div className='flex flex-col w-[40%] items-start p-5'>
      <h2>Add Address</h2>
      <form onSubmit={handleSubmit}>
        <div className='m-2 flex flex-col items-start'>
          <label htmlFor="name" >Name:</label>
          <input 
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>

        <div className='m-2 flex flex-col items-start' >
          <label htmlFor="phone">Phone:</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </div>

        <div className='m-2 flex flex-col items-start'>
          <label htmlFor="roomNo">Room No.:</label>
          <input
            type="text"
            id="roomNo"
            name="roomNo"
            value={formData.roomNo}
            onChange={handleInputChange}
          />
        </div>

        <div className='m-2 flex flex-col items-start'>
          <label htmlFor="pincode">Pincode:</label>
          <input
            type="text"
            id="pincode"
            name="pincode"
            value={formData.pincode}
            onChange={handleInputChange}
          />
        </div>

        <div className='m-2 flex flex-col items-start'>
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
          />
        </div>

        <div className='m-2 flex flex-col items-start'>
          <label htmlFor="state">State:</label>
          <input
            type="text"
            id="state"
            name="state"
            value={formData.state}
            onChange={handleInputChange}
          />
        </div>

        <button className='w-[90%] mt-5 bg-blue-500 hover:bg-blue-600' 
        type="submit">Save Address</button>
      </form>
      </div>




      

      <div className='flex flex-col max-h-full w-[60%] overflow-y-scroll'>
      <h1>Saved Address</h1>
      <div>
      <ul>
        {submissions.map((submission, index) => (
          <li key={index}>
            <strong>Adress: </strong>{index+1} <br />
            <strong>Name:</strong> {submission.name} <br />
            <strong>Phone:</strong> {submission.phone} <br />
            <strong>Room No.:</strong> {submission.roomNo} <br />
            <strong>Pincode:</strong> {submission.pincode} <br />
            <strong>City:</strong> {submission.city} <br />
            <strong>State:</strong> {submission.state} <br />
            <hr />
          </li>
        ))}
      </ul>
      </div>
      </div>
    </div>
  );
};

export default AddressDetails;

