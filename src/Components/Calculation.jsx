import React, { useState } from "react";
import RunImg from "../assets/TreadMill.png";

const Calculation = () => {
  const [Age, setAge] = useState("");
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [Bmi, setBmi] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const calcBmi = () => {
    if (weight === 0 || height === 0) {
      alert("Error! Enter the numbers correctly.");
    } else {
      const bmi = weight / ((height * 0.3084) * (height * 0.3084));
      setBmi(bmi);
      setShowResult(true);
    }
  };

  return (
    <div className="bg-[#373737] text-white py-10 flex justify-center flex-col items-center">
      <h1 className="font-Averia text-4xl">Calculate Your BMI</h1>
      <div className="w-40 h-1 bg-[rgb(255,215,0)] mt-2"></div>
      <div>
        <div className="flex flex-col md:flex-row mt-10 items-center gap-5 md:gap-32">
          <div className="left">
            <img
              className="w-60 h-60 object-cover rounded-2xl"
              src={RunImg}
              alt="TreadMill-Running"
            />
          </div>
          <div className="right w-80 ">
            <h2 className="font-Averia text-3xl mb-5">Advanced Calculator</h2>
            <label className="flex flex-col font-Poppins text-lg" htmlFor="Gender">
              Gender
              <select
                className="outline-none mr-3 rounded-lg text-black px-2 py-1 w-1/2 text-center"
                name="Gender"
                id="Gendr"
              >
                <option value="Male">Male</option>
                <option selected value="Female">
                  Female
                </option>
                <option value="Other">Other</option>
              </select>
            </label>
            <div className="flex w-full">
              <label className="flex flex-col font-Poppins text-lg" htmlFor="">
                Age
                <input
                  className="outline-none mr-3 rounded-lg text-black px-2 py-1 w-1/2 text-center"
                  type=""
                  value={Age}
                  onChange={(e) => setAge(e.target.value)}
                  placeholder="18 Yrs"
                />
              </label>
              <label className="flex flex-col font-Poppins text-lg" htmlFor="">
                Weight
                <input
                  className="outline-none mr-3 rounded-lg text-black px-2 py-1 w-1/2 text-center"
                  type=""
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder="20 Kg"
                />
              </label>
            </div>
            <div className="flex mt-5">
              <label className="flex flex-col font-Poppins text-lg" htmlFor="">
                Height
                <input
                  className="outline-none rounded-lg text-black px-2 py-1 w-1/2 text-center"
                  type=""
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  placeholder="5.5ft"
                />
              </label>
              <button
                className="px-4 mt-7 py-1 -ml-10 bg-[rgb(255,215,0)] rounded-xl font-Poppins text-white hover:text-black hover:bg-white"
                onClick={calcBmi}
              >
                Submit
              </button>
            </div>
            {showResult && (
              <div className="mt-6">
                <h3 className="font-Poppins text-xl">
                  The Result is: {Bmi.toFixed(2)} 
                </h3>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculation;
