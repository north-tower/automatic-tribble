"use client"

import DatePicker from "react-datepicker";
import  { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";


function Appointment() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div>
      <div classNameName="w-screen">
        <div className="relative mx-auto mt-5 mb-20 max-w-screen-lg overflow-hidden rounded-t-xl bg-emerald-400/60 py-32 text-center shadow-xl shadow-gray-300">
          <h1 className="mt-2 px-8 text-3xl font-bold text-white md:text-5xl">
            Indulge Today, Pay Tomorrow
          </h1>
          <p className="mt-6 text-lg text-white">
            Your Go-To Destination for Credit-based Dining!
          </p>
          <img
            className="absolute top-0 left-0 -z-10 h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1504672281656-e4981d70414b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
        </div>

        <div className="mx-auto grid max-w-screen-lg px-6 pb-20">
          <div className="">
            <p className="font-serif text-xl font-bold text-blue-900">Select Meal</p>
            <div className="mt-4 grid max-w-3xl gap-x-4 gap-y-3 sm:grid-cols-2 md:grid-cols-3">
              <div className="relative">
                <input
                  className="peer hidden"
                  id="radio_1"
                  type="radio"
                  name="radio"
                  checked
                />
                <span className="absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white peer-checked:border-emerald-400"></span>
                <label
                  className="flex h-full cursor-pointer flex-col rounded-lg p-4 shadow-lg shadow-slate-100 peer-checked:bg-emerald-600 peer-checked:text-white"
                  for="radio_1"
                >
                  <span className="mt-2- font-medium">Breakfast</span>
                  <span className="text-xs uppercase">Start Your Day Right: Breakfast Bliss Awaits with Mongina's Meals App! Enjoy the Most Important Meal on Credit!</span>
                </label>
              </div>
              <div className="relative">
                <input
                  className="peer hidden"
                  id="radio_2"
                  type="radio"
                  name="radio"
                />
                <span className="absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white peer-checked:border-emerald-400"></span>

                <label
                  className="flex h-full cursor-pointer flex-col rounded-lg p-4 shadow-lg shadow-slate-100 peer-checked:bg-emerald-600 peer-checked:text-white"
                  for="radio_2"
                >
                  <span className="mt-2 font-medium">Lunch</span>
                  <span className="text-xs uppercase">Elevate Your Lunch Hour: Dive into Deliciousness with Mongina's Meals App! Savor Every Bite, Pay with Ease on Credit!</span>
                </label>
              </div>
              <div className="relative">
                <input
                  className="peer hidden"
                  id="radio_3"
                  type="radio"
                  name="radio"
                />
                <span className="absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white peer-checked:border-emerald-400"></span>

                <label
                  className="flex h-full cursor-pointer flex-col rounded-lg p-4 shadow-lg shadow-slate-100 peer-checked:bg-emerald-600 peer-checked:text-white"
                  for="radio_3"
                >
                  <span className="mt-2 font-medium">Dinner</span>
                  <span className="text-xs uppercase">Wrap Up Your Day Deliciously: Unwind with Mongina's Meals App for Dinner! From Comfort Classics to Gourmet Delights, Dine Now, Pay Later on Credit!</span>
                </label>
              </div>
            </div>
          </div>

          <div className="">
            <p className="mt-8 font-serif text-xl font-bold text-blue-900">
              Select a date
            </p>
            <div className="relative mt-4 w-56">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  aria-hidden="true"
                  className="h-5 w-5 text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
            </div>
          </div>

          <div className="">
            <p className="mt-8 font-serif text-xl font-bold text-blue-900">
              Select Amount
            </p>
            <div className="mt-4 grid grid-cols-4 gap-2 lg:max-w-xl">
              <button className="rounded-lg bg-emerald-100 px-4 py-2 font-medium text-emerald-900 active:scale-95">
               50
              </button>
              <button className="rounded-lg bg-emerald-100 px-4 py-2 font-medium text-emerald-900 active:scale-95">
              70
              </button>
              <button className="rounded-lg bg-emerald-700 px-4 py-2 font-medium text-white active:scale-95">
            90
              </button>
              <button className="rounded-lg bg-emerald-100 px-4 py-2 font-medium text-emerald-900 active:scale-95">
               100
              </button>
              <button className="rounded-lg bg-emerald-100 px-4 py-2 font-medium text-emerald-900 active:scale-95">
             120
              </button>
              <button className="rounded-lg bg-emerald-100 px-4 py-2 font-medium text-emerald-900 active:scale-95">
             150
              </button>
              <button className="rounded-lg bg-emerald-100 px-4 py-2 font-medium text-emerald-900 active:scale-95">
              160
              </button>
              <button className="rounded-lg bg-emerald-100 px-4 py-2 font-medium text-emerald-900 active:scale-95">
               180
              </button>
            </div>
          </div>

          <button className="mt-8 w-56 rounded-full border-8 border-emerald-500 bg-emerald-600 px-10 py-4 text-lg font-bold text-white transition hover:translate-y-1">
            Proceed
          </button>
        </div>
      </div>
   
    </div>
  );
}

export default Appointment;
