import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    password:'',
    phoneNo: '',
    fssaiLicenseCopy: '',
    panCardCopy: '',
    regularGstin: '',
    bankAccountDetails: '',
    restaurantMenu: '',
    dishImages: ['', '', '', '', ''], // For top 5 items
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleChangeImage = (index, e) => {
    const { files } = e.target;
    if (files.length > 0) {
      const reader = new FileReader();
      reader.onload = () => {
        const newDishImages = [...formData.dishImages];
        newDishImages[index] = reader.result;
        setFormData({
          ...formData,
          dishImages: newDishImages,
        });
      };
      reader.readAsDataURL(files[0]);
    }
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5001/api/register', formData);
      console.log(response.data);
      // Redirect to home page or show success message
    } catch (error) {
      console.error(error);
      // Handle error
    }
    navigate("/menu");
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundImage: `url(${process.env.PUBLIC_URL}/registerr.jpg)`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
      <div style={{ flex: '1', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ width: '800px', border: '2px solid black', padding: '20px', backgroundColor: '#f5f5f5' }}>
          <h1 style={{ textAlign: 'center' }}>Register</h1>
          <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '10px', gridTemplateColumns: '1fr 1fr', gridTemplateRows: 'auto auto' }}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
            <label htmlFor="address">Address:</label>
            <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} required />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
            <label htmlFor="phoneNo">Phone Number:</label>
            <input type="tel" id="phoneNo" name="phoneNo" value={formData.phoneNo} onChange={handleChange} required />
            <label htmlFor="fssaiLicenseCopy">FSSAI License Copy:</label>
            <input type="file" id="fssaiLicenseCopy" name="fssaiLicenseCopy" accept="image/*" onChange={handleChange} required />
            <label htmlFor="panCardCopy">PAN Card Copy:</label>
            <input type="file" id="panCardCopy" name="panCardCopy" accept="image/*" onChange={handleChange} required />
            <label htmlFor="regularGstin">Regular GSTIN:</label>
            <input type="file" id="regularGstin" name="regularGstin" accept="image/*" onChange={handleChange} required />
            <label htmlFor="bankAccountDetails">Bank Account Details:</label>
            <textarea id="bankAccountDetails" name="bankAccountDetails" value={formData.bankAccountDetails} onChange={handleChange} required />
            <label htmlFor="restaurantMenu">Restaurant Menu:</label>
            <textarea id="restaurantMenu" name="restaurantMenu" value={formData.restaurantMenu} onChange={handleChange} required />
            <label htmlFor="dish1">Dish Image 1:</label>
            <input type="file" id="dish1" name="dish1" accept="image/*" onChange={(e) => handleChangeImage(0, e)} required />
            <label htmlFor="dish2">Dish Image 2:</label>
            <input type="file" id="dish2" name="dish2" accept="image/*" onChange={(e) => handleChangeImage(1, e)} required />
            <label htmlFor="dish3">Dish Image 3:</label>
            <input type="file" id="dish3" name="dish3" accept="image/*" onChange={(e) => handleChangeImage(2, e)} required />
            <label htmlFor="dish4">Dish Image 4:</label>
            <input type="file" id="dish4" name="dish4" accept="image/*" onChange={(e) => handleChangeImage(3, e)} required />
            <label htmlFor="dish5">Dish Image 5:</label>
            <input type="file" id="dish5" name="dish5" accept="image/*" onChange={(e) => handleChangeImage(4, e)} required />
            <div style={{ gridColumn: '1 / 3', textAlign: 'center' }}>
              <button type="submit" style={{ padding: '10px 20px', fontSize: '1.2em' }}>Submit</button>
            </div>
          </form>
        </div>
      </div>
      <footer style={{ backgroundColor: 'teal', color: 'white', textAlign: 'center', padding: '10px 0' }}>
        <div>Contact us: +16-16-16-16-16-16</div>
        <div>&copy; Num-Num</div>
      </footer>
    </div>
  );
};

export default Register;
