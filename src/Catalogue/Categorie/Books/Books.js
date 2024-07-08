import React from 'react';
import Style from './Books.module.css';
import { Card as BootstrapCard} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom'; 
import booksData from '../../../Books.json'; 

const Books = () => {
    let { category } = useParams(); 
    const books = booksData[category] || [];

    return (
        <>
            <h1 className={Style.title}>Books in {category} Category</h1>
            <div className={Style.container}>
                {books.map(book => (
                    <>
                        <BootstrapCard  key={book.id}  className={`${Style.category}`} >
                            <BootstrapCard.Img variant="top" src={book.cover} style={{ height: '15rem' }} />
                            <BootstrapCard.Body>
                                <BootstrapCard.Title>{category.name}</BootstrapCard.Title>
                                <BootstrapCard.Text>
                                    <span style={{fontWeight:"bold"}}>Title :</span> {book.title}
                                </BootstrapCard.Text>
                                <BootstrapCard.Text>
                                    <span style={{fontWeight:"bold"}} >Author :</span> {book.author}
                                </BootstrapCard.Text>
                            </BootstrapCard.Body>
                        </BootstrapCard>
                    </>
                ))}
            </div>
        </>
    );
};

export default Books;
