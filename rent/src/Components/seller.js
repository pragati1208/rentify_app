import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./seller.css";

const Seller = () => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    propertyImage: "",
    description: "",
    amount: "",
  });
  const [imagePreview, setImagePreview] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, propertyImage: file });
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        alert("File uploaded successfully");
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Process the form data
    console.log(formData);
    // Navigate to another page if needed
    // navigate("/thank-you");
    setFormData({
      name: "",
      number: "",
      propertyImage: "",
      description: "",
      amount: "",
    });
    setImagePreview(null);
  };

  return (
    <div className={`seller-form-container ${isSubmitted ? "blur" : ""}`}>
      {isSubmitted ? (
        <h2>Form Submitted!</h2>
      ) : (
        <>
          <h2>Upload Property Details</h2>
          <form onSubmit={handleSubmit} className="seller-form">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="number">Phone Number:</label>
              <input
                type="text"
                id="number"
                name="number"
                value={formData.number}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="propertyImage">Property Image:</label>
              <input
                type="file"
                id="propertyImage"
                name="propertyImage"
                accept="image/*"
                onChange={handleImageChange}
                required
              />
              {imagePreview && (
                <div className="image-preview">
                  <img src={imagePreview} alt="Property Preview" />
                </div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="description">Description:</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                placeholder="Enter description here..."
              />
            </div>
            <div className="form-group">
              <label htmlFor="amount">Amount:</label>
              <input
                type="number"
                id="amount"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </>
      )}
    </div>
  );
};

export default Seller;
