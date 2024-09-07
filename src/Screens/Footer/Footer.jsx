import React from 'react'
import { CiLocationOn } from 'react-icons/ci';
import { FaPhone } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const icons = [
    {
        picture: FaLinkedin,
        url: 'https://www.linkedin.com/in/bilal-mustafa-b1752023b/',
    },
    {
        picture: FaGithub,
        url: 'https://github.com/BilalMustafa123',
    },
    {
        picture: SiLeetcode,
        url: 'https://leetcode.com/u/noumanarshad15926/',
    },
];

const contactInfo = [
    {
        icon: CiLocationOn,
        label: 'Address',
        value: 'Lahore Cantt, Pakistan.',
    },
    {
        icon: FaPhone,
        label: 'Phone No',
        value: '+92 321 7652542',
    },
    {
        icon: MdEmail,
        label: 'Email',
        value: 'mbm15486@gmail.com',
    },
];

const Footer = () => {
    return (
        <div id='contact' className="bg-[#690000] text-white px-12 py-16">
            <div className="max-w-7xl mx-auto px-6 font-playfair">
                <h1 className="text-4xl text-center md:text-left mb-12 font-roboto">Contact Info</h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto">
                    {contactInfo.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center md:items-start"
                        >
                            <div className="flex items-center">
                                <item.icon className="text-2xl mr-2" />
                                <span className="text-xl">{item.label}</span>
                            </div>
                            <p className="mt-2 text-center md:text-left">
                                {item.value}
                            </p>
                        </div>
                    ))}
                </div>

                {/* <div className="flex  space-x-6 mt-16">
                    {icons.map((icon, index) => (
                        <a
                            key={index}
                            href={icon.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group hover:text-[#0074D9]"
                        >
                            <div className="flex      w-12 h-12 border border-white rounded-full hover:bg-white transition-colors duration-300">
                                <icon.picture className="text-white text-2xl group-hover:text-[#0074D9] transition-colors duration-300" />
                            </div>
                        </a>
                    ))}
                </div> */}
            </div>
        </div>
    );
}

export default Footer