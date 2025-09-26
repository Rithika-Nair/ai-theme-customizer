import React, { useState } from 'react';
import "./globals.css";

const BusinessIdeaForm = ({ onThemeGenerated }) => {
  const [formData, setFormData] = useState({
    businessName: '',
    businessDescription: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (text) => {
    const { name, value } = text.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Details submitted!");

    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/generateTheme", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          businessName: formData.businessName,
          businessDescription: formData.businessDescription,
        }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Unknown error");

      // Pass the AI JSON and business name to parent for previews
      onThemeGenerated(data.theme, formData.businessName);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
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
          <button type="submit"
            disabled={loading}
            className="cursor-pointer w-full dark rounded-md">
            {loading ? "Generating..." : "Generate Theme!"}
          </button>
        </div>

        {/* Error Message */}
        {error && (
          <div className="col-span-3 mt-2 p-2 border rounded bg-red-100 text-red-800">
            {error}
          </div>
        )}
      </div>
    </form>
  );


}

export default BusinessIdeaForm;