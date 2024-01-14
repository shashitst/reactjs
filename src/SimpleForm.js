import React, { useState } from 'react';

const SimpleForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contactNumber: '',
  });
  const [records, setRecords] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecord = { ...formData };
    setRecords((prevRecords) => [...prevRecords, newRecord]);
    setFormData({
      firstName: '',
      lastName: '',
      contactNumber: '',
    
  });

  };
  const handleCancel = () => {

    setFormData({
      firstName: '',
      lastName: '',
      contactNumber: '',
    });
  };

  return (
    <div style={{border: '1px solid#ccc', padding: '20px', borderRadius: '8px', width: '300px' }}>
      <h2>Form Fill-up</h2>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            onBlur={(event) =>{
              if(event.target.value.includes("@"))
              {
                alert("Please enter the correct values in first name")
              }

            }}
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Contact Number:
          <input
            type="text"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="button" onClick={handleCancel} style={{ marginRight: '10px' }}>
          Cancel
        </button>
        <button type="submit">Submit</button>
      </form>
      {records.length > 0 && (
    <div style={{ marginTop: '20px' }}>
    <h3>Saved Records</h3>
    <table style={{ width: '100%' }}>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Contact Number</th>
        </tr>
      </thead>
      <tbody>
        {records.map((record, index) => (
          <tr key={index}>
            <td>{record.firstName}</td>
            <td>{record.lastName}</td>
            <td>{record.contactNumber}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )}
</div>
);
};


export default SimpleForm;
