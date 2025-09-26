import React, { useState, useEffect } from 'react';
import "./globals.css";

const BusinessIdeaForm = () => {
  const [formData, setFormData] = useState({
    businessName: '',
    businessDescription: '',
  });

  const [aiRecommendation, setRecommendation] = useState("");

  const handleChange = (text) => {
    const { name, value } = text.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic, e.g., API call or sending the message
  };


  return (
      <form onSubmit={handleSubmit} className="w-full">
        <div className="grid grid-cols-3 mr-10">

          {/* Business Name */}
          <div className="col-span-2">
            <label htmlFor="name" className="text-[1.25rem]">Business Name</label>
            <input
              type="name"
              id="name"
              name="businessName"
              value={formData.businessName}
              onChange={handleChange}
              className="mt-1 p-2 w-full rounded-md shadow-[0_0_4px_2px_#BB86FC]"
              required
              placeholder="Click to start typing..."
            />
          </div>

          {/* Business Description */}
          <div className="col-span-3 mt-10 mr-10"> 
            <label htmlFor="description" className="text-[1.25rem]">Describe Your Business</label>
            <textarea
              id="description"
              name="businessDescription"
              value={formData.businessDescription}
              onChange={handleChange}
              rows="7"
              className="mt-1 p-2 w-full rounded-md shadow-[0_0_4px_2px_#BB86FC]"
              required
              placeholder="Click to start typing..."
            />
          </div>

          {/* Submit Button */}
          <div className="col-span-1 col-start-2 mt-10">
            <button type="submit" onClick={handleSubmit} className="cursor-pointer w-full dark rounded-md">Generate Theme!</button>
          </div>

          {/* AI Response */}
          {aiRecommendation && (
            <div className="mt-2 p-2 border rounded bg-gray-100">
              <strong>AI Recommendation:</strong>
              <p>{aiRecommendation}</p>
            </div>
          )}
        </div>
      </form>
  );


}

export default BusinessIdeaForm;