import React from "react";
import CountUp from "react-countup";

export default function Counter({ number, title, CountIcon }) {
    return (

        <div className="number text-white">
            <div className="w-full flex flex-col items-center">
                <img className="w-20 h-20 mb-4" src={CountIcon} alt="" />
                <h2><CountUp duration={10} className="counter" end={number} /><span>{title}</span></h2>
                </div> 
            </div>
            );
}
