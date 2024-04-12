import React from 'react';
import { Link } from 'react-router-dom';

const Front = () => {
  return (
    <div>
      <div style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/front.jpg)`,
        backgroundSize: 'cover',
        width: '100vw',
        height: '70vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        position: 'relative',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          <h1 style={{ color: '#fff', margin: '0 200px', fontStyle: 'italic' }}>Num-Num</h1>

          <nav>
            <ul style={{ display: 'flex', listStyleType: 'none', margin: '50px 200px 0px 0px', padding: 0 }}>
              <li style={{ margin: '0 10px', border: '1px solid #fff', padding: '5px 10px' }}>
                <a href="#advertise" style={{ textDecoration: 'none', color: 'white' }}>Advertise</a>
              </li>
              <li style={{ margin: '0 10px', border: '1px solid #fff', padding: '5px 10px' }}>
                <Link to="/Login" style={{ textDecoration: 'none', color: 'white' }}>Login</Link>
              </li>
              <li style={{ margin: '0 10px', border: '1px solid #fff', padding: '5px 10px', backgroundColor: '#87CEEB' }}>
                <Link to="/Register" style={{ textDecoration: 'none', color: 'white' }}>Create Account</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div style={{ margin: '25px 200px 30px', textAlign: 'left', padding: '0' }}>
          <p style={{ color: '#fff' }}>Partner with Num-Num <br></br>
            at 0% commission for the 1st month! <br></br><br></br>
            And get ads worth INR 1500. Valid for new restaurant partners in select cities.</p>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '50px' }}>
              <a href="/Register" style={{ backgroundColor: '#87CEEB', padding: '10px', width: '45%', textAlign: 'center', textDecoration: 'none', color: 'white' }}>Register Your Restaurant</a>
              <a href="/Login" style={{ backgroundColor: '#ffffff', padding: '10px', width: '45%', textAlign: 'center', textDecoration: 'none', color: 'black' }}>Login to View Your Existing Restaurant</a>
            </div>
            <p style={{ color: '#fff' }}>Need help? Contact +91 97-16-16-16-16</p>
          </div>
        </div>


        <div style={{
          margin: '50px auto',
          width: '50%',
          padding: '20px',
          background: '#D3D3D3',
          textAlign: 'center',
        }}>
          <h2 style={{ color: '#000' }}>Get started with online ordering</h2>
          <p style={{ color: '#000' }}>Please keep the documents ready for a smooth signup:</p>
          <ul style={{
            color: '#000',
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gridTemplateRows: 'repeat(3, auto)',
            gap: '10px',
            justifyContent: 'center',
            listStyle: 'none',
            padding: 0,
          }}>
            <li style={{ position: 'relative', paddingLeft: '20px' }}>FSSAI license copy (<a href="#Apply-now" style={{ color: '#000', textDecoration: 'underline', color: 'blue' }}>Apply now</a>)</li>
            <li style={{ position: 'relative', paddingLeft: '20px' }}>PAN card copy</li>
            <li style={{ position: 'relative', paddingLeft: '20px' }}>Regular GSTIN (<a href="#Apply-now" style={{ color: '#000', textDecoration: 'underline', color: 'blue' }}>Apply now</a>)</li>
            <li style={{ position: 'relative', paddingLeft: '20px' }}>Bank account details</li>
            <li style={{ position: 'relative', paddingLeft: '20px' }}>Your restaurant menu</li>
            <li style={{ position: 'relative', paddingLeft: '20px' }}>Dish images for top 5 items</li>
          </ul>
        </div>
      </div>
<div>
      <footer style={{ width: '100%', backgroundColor: 'teal', color: 'white', textAlign: 'center', padding: '10px 0', position: 'absolute', bottom: 0 }}>
        <div>Contact us: +16-16-16-16-16-16</div>
        <div>&copy; Num-Num</div>
        <div style={{ marginBottom: '-10px' }}></div>
      </footer>
</div>
    </div>
  );
};

export default Front;
