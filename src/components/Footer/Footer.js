import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-neutral text-neutral-content">
                <div>
                    <span className="footer-title">Touch With Us</span>
                    <span>
                        <FontAwesomeIcon
                            className="mr-2"
                            icon={faLocationDot}
                        ></FontAwesomeIcon>
                        Dhaka,Bangladesh.
                    </span>
                    <span>
                        <FontAwesomeIcon
                            className="mr-2"
                            icon={faPhone}
                        ></FontAwesomeIcon>
                        017000000000
                    </span>
                    <span>
                        <FontAwesomeIcon
                            className="mr-2"
                            icon={faEnvelope}
                        ></FontAwesomeIcon>
                        info@agence.com
                    </span>

                </div>

                {/* <div className='w-96'> */}
                <div
                    className="fb-page"
                    data-href="https://www.facebook.com/bangladesh"
                    data-tabs="timeline"
                    data-width=""
                    data-height="100"
                    data-small-header="false"
                    data-adapt-container-width="true"
                    data-hide-cover="false"
                    data-show-facepile="false"
                >
                    <blockquote
                        cite="https://www.facebook.com/bangladesh"
                        className="fb-xfbml-parse-ignore"
                    >
                        <a href="https://www.facebook.com/projmantech">Facebook</a>
                    </blockquote>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                </div>

                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>
            <footer className="footer px-10 py-4 bg-neutral text-neutral-content footer-center border-t border-base-300">
                <div>
                    <span>
                        &copy; {new Date().getFullYear()} All right reserved by
                        <a href="#" className='ml-1'>MOSTOFA</a>
                    </span>
                </div>
            </footer>
        </div>
    );
};

export default Footer;