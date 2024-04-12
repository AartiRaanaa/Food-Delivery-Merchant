import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Menuu = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/menu-items');
        setMenuItems(response.data);
      } catch (error) {
        console.error('Error fetching menu items:', error);
      }
    };
    fetchMenuItems();
  }, []);

  return (
    <div>
      <h2 style={{textAlign:"center"}}>Menu page</h2>
      {menuItems.map(item => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>Price: {item.price}</p>
          <img src={item.image} alt={item.name} style={{ maxWidth: '200px' }} />
        </div>
      ))}
    </div>
  );
};

export default Menuu;
