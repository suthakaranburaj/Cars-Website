// // BuyForm.js
// import React from 'react';

// const BuyForm = () => {
//   // Implement your form fields here (e.g., input fields, quantity selection, etc.)
//   return (
//     <form>
//       {/* Your form fields go here */}
//       <input type="text" placeholder="Name" />
//       <input type="email" placeholder="Email" />
//       {/* ... other fields ... */}
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default BuyForm;


// BuyForm.jsx
import React from 'react';
import './BuyForm.css';
import Breakcrum from '../Breadcrums/Breakcrum';
const BuyForm = () => {
  // Implement your form fields here (e.g., input fields, quantity selection, etc.)
  return (
    <form>
      {/* Your form fields go here */}
      <input type="PhoneNo" placeholder="PhoneNo" />
      <input type="AadharNo" placeholder="AadharNo" />
      <input type="Address" placeholder="Address" />
      {/* ... other fields ... */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default BuyForm;
// import { useState } from 'react';
// import './BurForm.css';
// import { connectToDatabase } from '../../db';// Assuming db.js is in the same directory

// const BuyForm = () => {
//   const [formData, setFormData] = useState({
//     PhoneNo: '',
//     AadharNo: '',
//     Address: '',
//     // Other form fields
//   });

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const client = await connectToDatabase();
//       const database = client.db('<dbname>'); // Replace <dbname> with your actual database name
//       const collection = database.collection('formData'); // Choose a collection name

//       // Insert the form data into the collection
//       const result = await collection.insertOne(formData);
//       console.log('Form data inserted:', result);

//       // Clear the form after submission
//       setFormData({
//         PhoneNo: '',
//         AadharNo: '',
//         Address: '',
//         // Other form fields
//       });
//     } catch (error) {
//       console.error('Error inserting form data:', error);
//     } finally {
//       client.close(); // Close the MongoDB connection
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" name="PhoneNo" placeholder="PhoneNo" value={formData.PhoneNo} onChange={handleInputChange} />
//       <input type="text" name="AadharNo" placeholder="AadharNo" value={formData.AadharNo} onChange={handleInputChange} />
//       <input type="text" name="Address" placeholder="Address" value={formData.Address} onChange={handleInputChange} />
//       {/* Other form fields */}
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default BuyForm;

