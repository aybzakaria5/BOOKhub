import React from 'react';
import Style from './Add.module.css';
import { FileInput, Select} from "flowbite-react";

const Add = () => {
  return (
    <>
        <div className={Style.background}>
            <div className={Style.content}>
            <h1>Add book </h1>
            {/* <p>Questions, bug reports, feedback, feature requests — we're here for it all.</p> */}
            </div>
        </div>

        <div className={Style.divForm}>
            <form className={Style.contactForm} >

            <label className={Style.filee}>
                Cover image
                <FileInput id="file-upload-helper-text"  accept="image/png, image/jpeg"  helperText="File accepted :PNG, JPG." />
            </label>

            <label>
                Title 
                <input type="text" required />
            </label>

            <label>
                Categorie 
                <Select id={Style.category_select} required >
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
                author
                <input type="text" required />
            </label>

            <label>
                Description
                <textarea required></textarea>
            </label>
            <button type="submit">Add</button>
            </form>
        </div>
    
    
    </>
  )
}

export default Add