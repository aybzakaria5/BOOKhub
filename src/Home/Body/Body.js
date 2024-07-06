import React from 'react';
import Style from './Body.module.css';
import Testimonial from './Testimonial';

const Body = () => {
    const testimonials = [
        {
            image: 'https://mir-s3-cdn-cf.behance.net/project_modules/hd/d65ee7111000421.5ff9a76af0694.jpg',
            name: 'Alex Calf',
            opinion: 'BookBub has revolutionized my reading experience! The personalized deals are amazing.'
        },
        {
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcxIzrvthxm_hLa9H0MbSXM126gu_X-JNaXw&s',
            name: 'Adrian Joes',
            opinion: 'I love finding hidden gems through BookBub. It’s my go-to for eBook deals.'
        },
        {
            image: 'https://us-tuna-sounds-images.voicemod.net/a7b4c243-8cf7-4471-b1d3-e72479fd6a13-1642928283616.png',
            name: 'David Johnson',
            opinion: 'BookBub makes it easy to discover new books tailored to my interests.'
        },
        {
            image: 'https://i.pinimg.com/474x/e8/86/a0/e886a0275586dbde0ea74e5c8325b6f9.jpg',
            name: 'Smith Xavi',
            opinion: 'BookBub makes it easy to discover new books tailored to my interests.'
        },
        {
            image: 'https://i.pinimg.com/474x/87/1d/f6/871df6406df3fdb4aaffe940627c1ecf.jpg',
            name: 'Gavi swoot',
            opinion: 'BookBub makes it easy to discover new books tailored to my interests.'
        },
        {
            image: 'https://animatedkid.wordpress.com/wp-content/uploads/2017/01/p-analysis-incredible-elastigirl.png',
            name: 'Emma Brown',
            opinion: 'BookBub helps me explore new genres and authors I wouldn\'t have found otherwise.'
        }
    ];

    

    return (
        <>
            {/* <marquee behavior="scroll" direction="right" scrollamount="12">Little Fast Scrolling</marquee> */}

            <div className={Style.fist_div}>
                <div className={Style.textBox}>
                    <h1>Amazing deals on bestselling ebooks</h1>
                </div>
                <img
                    src="https://res.cloudinary.com/bookbub/image/upload/f_auto,q_auto,w_3350/welcome/international-desktop-book-shelves-0124-3x"
                    alt="Book shelves"
                    className={Style.image}
                />
            </div>
            <div>
                <div className={Style.Container}>
                    <div className={Style.ImageWrapper}>
                        <img src="https://res.cloudinary.com/bookbub/image/upload/f_auto,q_auto/welcome/coffee-phone_2x" alt="" />
                    </div>
                    <div className={Style.Content}>
                        <h1>Read the Biggest eBooks for Free</h1>
                        <br />
                        <p>Receive a daily selection of titles, ranging from bestsellers to hidden gems, all at no cost.</p>
                    </div>
                </div>
                <div className={Style.arrow}>
                    <img src="https://res.cloudinary.com/bookbub/image/upload/f_auto,q_auto/welcome/down-arrow" alt="" />
                </div>
                <div className={Style.Container}>
                    <div className={Style.Content}>
                        <h1>Discover Personalized eBook Deals</h1>
                        <br />
                        <p>Tell BookBub what you like to read and receive handpicked deals that match your reading preferences.</p>
                    </div>
                    <div className={Style.ImageWrapper}>
                        <img src="https://res.cloudinary.com/bookbub/image/upload/f_auto,q_auto/welcome/kindle-ice-tea_2x" alt="" />
                    </div>
                </div>
            </div>

            {/* Testimonials Slider */}
            <Testimonial testimonials ={testimonials}/>
            
            {/* After Testimonials  */}
        </>
    );
};

export default Body;
