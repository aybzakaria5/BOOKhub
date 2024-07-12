import React from 'react';
import Style from './Add.module.css';
import { FileInput, Select } from "flowbite-react";

const Add = () => {
  return (
    <div className={Style.container}>
      <div className={Style.formContainer}>
        <div className={Style.Content}>
            <h1>Add your book</h1>
            <p>Get started by adding your book to our library. You can add as many books as you'd like.</p>
        </div>
        <form className={Style.contactForm}>
          <label className={Style.fileLabel}>
            Cover image
            <FileInput id="file-upload-helper-text" accept="image/png, image/jpeg" helperText="File accepted: PNG, JPG." />
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
