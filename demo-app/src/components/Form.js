import React, { useState } from 'react';

function Form() {
  const [formData1, setFormData1] = useState({
    name: '',
    address: '',
    age: '',
    gender: ''
  });

  const [formData2, setFormData2] = useState({
    name: '',
    address: '',
    age: '',
    gender: ''
  });

  const [copyData, setCopyData] = useState(false);

  const handleChange1 = (e) => {
    const { name, value } = e.target;
    setFormData1({
      ...formData1,
      [name]: value
    });
  };

  const handleChange2 = (e) => {
    const { name, value } = e.target;
    setFormData2({
      ...formData2,
      [name]: value
    });
  };

  const handleCheckboxChange = () => {
    setCopyData(!copyData);

    if (copyData) {
      setFormData2({ ...formData1 });
    }
  };

  // const copyFormData = () => {
  //   if (copyData) {
  //     setFormData2({ ...formData1 });
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData2.name &&
      formData2.address &&
      formData2.age &&
      formData2.gender
    ) {
      alert('Form submitted successfully');
    } else {
      alert('Please fill all fields');
    }
  };

  return (
    <div>
      <h2>Form 1</h2>
      <form onSubmit={e => e.preventDefault()}>
        <div>
          <label htmlFor="name1">Name:</label>
          <input
            type="text"
            id="name1"
            name="name"
            value={formData1.name}
            onChange={handleChange1}
            required
          />
        </div>
        <div>
          <label htmlFor="address1">Address:</label>
          <input
            type="text"
            id="address1"
            name="address"
            value={formData1.address}
            onChange={handleChange1}
            required
          />
        </div>
        <div>
          <label htmlFor="age1">Age:</label>
          <input
            type="number"
            id="age1"
            name="age"
            value={formData1.age}
            onChange={handleChange1}
            required
          />
        </div>
        <div>
          <label htmlFor="gender1">Gender:</label>
          <select
            id="gender1"
            name="gender"
            value={formData1.gender}
            onChange={handleChange1}
            required
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
      </form>

      <div>
            <label>
              <input
                type="checkbox"
                checked={copyData}
                onChange={handleCheckboxChange}
              />
              Copy Form Data
            </label>
      </div>

      <div>
        <h2>Form 2</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name2">Name:</label>
            <input
              type="text"
              id="name2"
              name="name"
              value={formData2.name}
              onChange={handleChange2}
              required
            />
          </div>
          <div>
            <label htmlFor="address2">Address:</label>
            <input
              type="text"
              id="address2"
              name="address"
              value={formData2.address}
              onChange={handleChange2}
              required
            />
          </div>
          <div>
            <label htmlFor="age2">Age:</label>
            <input
              type="number"
              id="age2"
              name="age"
              value={formData2.age}
              onChange={handleChange2}
              required
            />
          </div>
          <div>
            <label htmlFor="gender2">Gender:</label>
            <select
              id="gender2"
              name="gender"
              value={formData2.gender}
              onChange={handleChange2}
              required
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
      {/* <div>
        <button onClick={copyFormData}>Copy Data</button>
      </div> */}
    </div>
  );
}

export default Form;
