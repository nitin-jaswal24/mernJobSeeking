import React from 'react'
import { useContext } from 'react';
import { FaBuilding, FaSuitcase, FaUsers, FaUserPlus } from "react-icons/fa";
import { Context } from '../../main';
import JobDetails from '../Job/JobDetails';

const HeroSection = () => {
    const {jobCount}=useContext(Context);
    const details = [
        {
          id: 1,
          title: jobCount,
          subTitle: "Live Job",
          icon: <FaSuitcase />,
        },
      
        {
          id: 3,
          title: "2,34,200",
          subTitle: "Job Seekers",
          icon: <FaUsers />,
        },
        {
          id: 4,
          title: "1,03,761",
          subTitle: "Employers",
          icon: <FaUserPlus />,
        },
      ];
    return (
        <div className='heroSection'>
            <div className="container">
                <div className="title">
                    <h1 className='text-4xl text-bold text-green-900 font-serif'>Find a Job that Suits</h1>
                    <h1 className='text-3xl font-serif'>your interets and skills</h1>
                    <p className='font-serif'>Are you ready to take the next step in your career journey? Look no further! carrerNest is your ultimate destination for finding the job of your dreams.</p>
                </div>
                <div className="image">
                    <img src="/images/hiring.jpg" alt="" />
                </div>
            </div>
            <div className="details">
                {
                    details.map(element=>{
                        return <div className="card" key={element.id}>
                            <div className="icon">
                                {element.icon}
                            </div>
                            <div className="content font-serif">
                                <p>{element.title}</p>
                                <p>{element.subTitle}</p>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default HeroSection
