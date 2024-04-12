import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const MenuItem = ({ onAdd }) => {
  const [menuItems, setMenuItems] = useState([
    { id: 1, name: '', price: '', image: null },
    { id: 2, name: '', price: '', image: null },
    { id: 3, name: '', price: '', image: null }
  ]);

  const handleChange = (index, field, value) => {
    const newMenuItems = [...menuItems];
    newMenuItems[index][field] = value;
    setMenuItems(newMenuItems);
  };

  const handleDelete = (id) => {
    setMenuItems(menuItems.filter(item => item.id !== id));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await Promise.all(menuItems.map(async (item) => {
        if (item.name && item.price && item.image) {
          await axios.post('http://localhost:5001/api/menu-items', { name: item.name, price: item.price, image: item.image });
        }
      }));
      setMenuItems([
        { id: 1, name: '', price: '', image: null },
        { id: 2, name: '', price: '', image: null },
        { id: 3, name: '', price: '', image: null }
      ]);
      onAdd(); // Refresh the menu items list
    } catch (error) {
      console.error('Error adding menu items:', error);
    }
  };

  const addMoreItems = () => {
    const newId = Math.max(...menuItems.map(item => item.id)) + 1;
    setMenuItems([...menuItems, { id: newId, name: '', price: '', image: null }]);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <nav style={{ backgroundColor: 'teal', padding: '10px 10% 10px 0', textAlign: 'right', position: 'fixed', width: '100%', zIndex: '1000', top: '0' }}>
        <ul style={{ listStyleType: 'none', margin: '0', padding: '0' }}>
          <li style={{ display: 'inline', margin: '0 10px' }}><Link to="/menuu" style={{ textDecoration: 'none', color: 'white' }}>Menu</Link></li>
          <li style={{ display: 'inline', margin: '0 10px' }}><Link to="/orders" style={{ textDecoration: 'none', color: 'white' }}>Orders</Link></li>
          <li style={{ display: 'inline', margin: '0 10px' }}><Link to="/tracking-sales" style={{ textDecoration: 'none', color: 'white' }}>Tracking Sales</Link></li>
        </ul>
      </nav>

      <div style={{ backgroundColor: "#f5f5f5", backgroundSize: 'cover', flex: '1', marginTop: '50px', marginBottom: '50px', padding: '20px', display: 'flex', justifyContent: 'center' }}>
        <div style={{ border: '2px solid black', padding: '20px', maxWidth: '800px', width: '100%', maxHeight: '70vh', overflowY: 'auto' }}>
          <form onSubmit={handleSubmit}>
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
              <h2>Add New Menu Items</h2>
            </div>
            {menuItems.map((item, index) => (
              <div key={item.id} style={{ display: 'flex', marginBottom: '20px', alignItems: 'center', flexWrap: 'wrap' }}>
                <div style={{ flex: '1', minWidth: '200px', margin: '0 10px' }}>
                  <label htmlFor={`name-${item.id}`}>Name:</label>
                  <input type="text" id={`name-${item.id}`} value={item.name} onChange={(e) => handleChange(index, 'name', e.target.value)} required />
                </div>
                <div style={{ flex: '1', minWidth: '200px', margin: '0 10px' }}>
                  <label htmlFor={`price-${item.id}`}>Price:</label>
                  <input type="number" id={`price-${item.id}`} value={item.price} onChange={(e) => handleChange(index, 'price', e.target.value)} required />
                </div>
                <div style={{ flex: '1', minWidth: '200px', margin: '0 10px' }}>
                  <label htmlFor={`image-${item.id}`}>Image:</label>
                  <input type="file" id={`image-${item.id}`} onChange={(e) => handleChange(index, 'image', e.target.files[0])} required />
                </div>
                <button type="button" onClick={() => handleDelete(item.id)}>Delete</button>
              </div>
            ))}
            <div style={{ textAlign: 'center', marginTop: '20px', backgroundColor: 'teal', padding: '10px' }}>
              <button type="button" onClick={addMoreItems}>Add More Items</button><br />
              <button type="submit">Add</button>
            </div>
          </form>
        </div>
      </div>
      <footer style={{ backgroundColor: 'teal', color: 'white', textAlign: 'center', padding: '10px 0', position: 'fixed', bottom: '0', width: '100%', zIndex: '1000' }}>
        <div>Contact us: +16-16-16-16-16-16</div>
        <div>&copy; Num-Num</div>
      </footer>
    </div>
  );
};

export default MenuItem;
