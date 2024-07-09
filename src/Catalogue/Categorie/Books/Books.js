import React, { useState } from 'react';
import Style from './Books.module.css';
import { Card as BootstrapCard } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom'; 
import booksData from '../../../Books.json'; 

const Books = () => {
    let { category } = useParams(); 
    const books = booksData[category] || [];
    
    const [selectedBook, setSelectedBook] = useState(null);

    const handleShowInfo = (book) => {
        setSelectedBook(book);
    };

    const handleCloseInfo = () => {
        setSelectedBook(null);
    };

    return (
        <>
            <h1 className={Style.title}>Books in {category} Category</h1>

            <div className={Style.gridContainer}>

                {/* when i select a book */}
                {selectedBook && (
                    <div className={Style.infoRow}>
                        <div className={Style.selectedCategory} onClick={handleCloseInfo}>
                            <BootstrapCard>
                                <BootstrapCard.Img variant="top" src={selectedBook.cover} style={{ height: '15rem' }} />
                                <BootstrapCard.Body>
                                    <BootstrapCard.Title>{selectedBook.title}</BootstrapCard.Title>
                                    <BootstrapCard.Text>
                                        <span style={{fontWeight:"bold"}}>Author :</span> {selectedBook.author}
                                    </BootstrapCard.Text>
                                </BootstrapCard.Body>
                            </BootstrapCard>
                        </div>
                        
                        {/* info */}
                        <div className={Style.info}>
                            <div className={Style.header_info}>
                                <h2>{selectedBook.title}</h2>
                                <a onClick={handleCloseInfo}><i className="bi bi-x-lg"></i></a>
                            </div>
                            <img src={selectedBook.cover} alt={selectedBook.title} className={Style.info_image} />
                            <p> {selectedBook.description}</p>
                        </div>
                    </div>
                )}

                {/* all books */}
                <div className={Style.booksContainer}>
                    {books.map(book => (
                        <div key={book.id} className={`${Style.bookContainer} ${selectedBook && selectedBook.id === book.id ? Style.hidden : ''}`}>
                            <div onClick={() => handleShowInfo(book)} className={`${Style.category} ${Style.clickable}`}>
                                <BootstrapCard>
                                    <BootstrapCard.Img variant="top" src={book.cover} style={{ height: '15rem' }} />
                                    <BootstrapCard.Body>
                                        <BootstrapCard.Title>{book.title}</BootstrapCard.Title>
                                        <BootstrapCard.Text>
                                            <span style={{fontWeight:"bold"}}>Author :</span> {book.author}
                                        </BootstrapCard.Text>
                                    </BootstrapCard.Body>
                                </BootstrapCard>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Books;
