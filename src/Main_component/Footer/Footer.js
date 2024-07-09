import React from 'react'
import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import "flowbite/dist/flowbite.css";
import Style from './Footer.module.css'
import logo from "./logo.jpg"


const Foooter = () => {
  return (
    <>
        <div className={Style.footer}>
            <Footer container>
                <div className={`w-full ${Style.footer_content}`}>
                    <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                    <div>
                        {/* <Footer.Brand
                        href="#"
                        src={logo}
                        alt="Flowbite Logo"
                        // name="Ebook"
                        
                        /> */}
                        <img src={logo} alt=""  className={Style.logo_footer}/>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                        <div>
                        <Footer.Title title="Quick Liens" />
                        <Footer.LinkGroup col>
                            <Footer.Link href="#">Home</Footer.Link>
                            <Footer.Link href="#">About</Footer.Link>
                            <Footer.Link href="#">Books</Footer.Link>
                            <Footer.Link href="#">Contact Us</Footer.Link>
                        </Footer.LinkGroup>
                        </div>
                        <div>
                        <Footer.Title title="Follow us" />
                        <Footer.LinkGroup col>
                            <Footer.Link href="#">Instagram</Footer.Link>
                            <Footer.Link href="#">Facebook</Footer.Link>
                            <Footer.Link href="#">Twitter</Footer.Link>
                        </Footer.LinkGroup>
                        </div>
                        <div>
                        <Footer.Title title="Legal" />
                        <Footer.LinkGroup col>
                            <Footer.Link href="#">Privacy Policy</Footer.Link>
                            <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
                        </Footer.LinkGroup>
                        </div>
                    </div>
                    </div>
                    <Footer.Divider />
                    <div className="w-full sm:flex sm:items-center sm:justify-between">
                    <Footer.Copyright href="#" by="Us™" year={2024} />
                    <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                        <Footer.Icon href="#" icon={BsFacebook} />
                        <Footer.Icon href="#" icon={BsInstagram} />
                        <Footer.Icon href="#" icon={BsTwitter} />
                        {/* <Footer.Icon href="#" icon={BsGithub} />
                        <Footer.Icon href="#" icon={BsDribbble} /> */}
                    </div>
                    </div>
                </div>
            </Footer>
        </div>
        
    
    </>
  )
}

export default Foooter