import React, { useState } from 'react';
import Style from './Add.module.css';
import { FileInput, Select } from "flowbite-react";


const Add = () => {
  const [coverImage, setCoverImage] = useState('');
  const [uploadError, setUploadError] = useState('');
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (!file) {
      setUploadError('Please select an image to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'Ebookodc');

    try {
      const response = await fetch('https://api.cloudinary.com/v1_1/dkwd4hr1p/image/upload', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      console.log('Upload response:', data);
      setCoverImage(data.secure_url);
      console.log(data.secure_url)
      setUploadError('');
    } catch (error) {
      console.error('Error uploading image:', error);
      setUploadError('Failed to upload image');
      alert("Image upload failed");
    }
  };

  return (
    <div className={Style.container}>
      <div className={Style.formContainer}>
        <div className={Style.Content}>
          <h1>Add your book</h1>
          <p>Get started by adding your book to our library. You can add as many books as you'd like.</p>
        </div>
        <form className={Style.contactForm} onSubmit={handleFormSubmit}>
          <label className={Style.fileLabel}>
            Cover image
            <FileInput
              id="file-upload-helper-text"
              accept="image/png, image/jpeg"
              onChange={handleFileChange}
              helperText="File accepted: PNG, JPG."
            />
            {uploadError && <p className={Style.error}>{uploadError}</p>}
          </label>

          <label>
            Title
            <input type="text" required />
          </label>

          <label>
            Category
            <Select id={Style.category_select} required>
              <option value="" disabled selected>Select a category</option>
              <option>Adventure</option>
              <option>Romance</option>
              <option>Thriller</option>
              <option>Memoir</option>
              <option>Travel</option>
              <option>Health</option>
              <option>Poetry</option>
              <option>Cooking</option>
            </Select>
          </label>

          <label>
            Author
            <input type="text" required />
          </label>

          <label>
            Description
            <textarea required></textarea>
          </label>

          <button type="submit">Add Book</button>
        </form>
      </div>
      <div className={Style.imageContainer}>
        <img src="https://d2616tuem1neks.cloudfront.net/misc_assets/press/Photography/Ereader.jpg" alt="E-reader" />
      </div>
    </div>
  );
}

export default Add;
