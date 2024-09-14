import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import { Calendar } from "lucide-react";

function App() {
  const [gregorianDate, setGregorianDate] = useState("");
  const [hijriDate, setHijriDate] = useState("");
  const [formattedGregorian, setFormattedGregorian] = useState("");
  const [formattedHijri, setFormattedHijri] = useState("");

  const hijriMonths = [
    "Muharram",
    "Safar",
    "Rabi al-Awwal",
    "Rabi al-Thani",
    "Jumada al-Awwal",
    "Jumada al-Thani",
    "Rajab",
    "Sha'ban",
    "Ramadan",
    "Shawwal",
    "Dhu al-Qi'dah",
    "Dhu al-Hijjah",
  ];

  const gregorianMonths = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const convertToHijri = (date) => {
    // Placeholder function (same as before)
    const parts = date.split("-");
    if (parts.length === 3) {
      const year = parseInt(parts[0]);
      const month = parseInt(parts[1]);
      const day = parseInt(parts[2]);

      const hijriYear = Math.floor((year - 622) * (33 / 32));
      const hijriMonth = ((month + 1) % 12) + 1;
      const hijriDay = ((day + 15) % 30) + 1;

      const result = `${hijriYear}-${hijriMonth
        .toString()
        .padStart(2, "0")}-${hijriDay.toString().padStart(2, "0")}`;
      setFormattedHijri(
        `${hijriDay} ${hijriMonths[hijriMonth - 1]}, ${hijriYear}`
      );
      return result;
    }
    return "";
  };

  const convertToGregorian = (date) => {
    // Placeholder function (same as before)
    const parts = date.split("-");
    if (parts.length === 3) {
      const year = parseInt(parts[0]);
      const month = parseInt(parts[1]);
      const day = parseInt(parts[2]);

      const gregorianYear = Math.floor(year * (32 / 33) + 622);
      const gregorianMonth = ((month - 1) % 12) + 1;
      const gregorianDay = ((day + 15) % 31) + 1;

      const result = `${gregorianYear}-${gregorianMonth
        .toString()
        .padStart(2, "0")}-${gregorianDay.toString().padStart(2, "0")}`;
      setFormattedGregorian(
        `${gregorianDay} ${
          gregorianMonths[gregorianMonth - 1]
        }, ${gregorianYear}`
      );
      return result;
    }
    return "";
  };

  const handleGregorianChange = (e) => {
    const date = e.target.value;
    setGregorianDate(date);
    setHijriDate(convertToHijri(date));
    setFormattedGregorian(
      `${new Date(date).getDate()} ${
        gregorianMonths[new Date(date).getMonth()]
      }, ${new Date(date).getFullYear()}`
    );
  };

  const handleHijriChange = (e) => {
    const date = e.target.value;
    setHijriDate(date);
    setGregorianDate(convertToGregorian(date));
  };

  return (
    <div className="min-h-screen bg-amber-100 flex items-center justify-center p-4">
      <div className="w-full max-w-lg bg-amber-200 p-8 rounded-lg shadow-lg border-4 border-amber-600">
        <h1 className="text-4xl font-extrabold text-amber-800 mb-8 text-center font-serif">
          - FIND YOUR HIJRI -
        </h1>

        <div className="mb-6">
          <label
            className="block text-amber-700 text-xl font-bold mb-3"
            htmlFor="gregorian"
          >
            Gregorian Date
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-3 px-4 text-xl text-amber-700 leading-tight focus:outline-none focus:shadow-outline"
            id="gregorian"
            type="date"
            value={gregorianDate}
            onChange={handleGregorianChange}
          />
        </div>
        <div className="mb-8">
          <label
            className="block text-amber-700 text-xl font-bold mb-3"
            htmlFor="hijri"
          >
            Hijri Date
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-3 px-4 text-xl text-amber-700 leading-tight focus:outline-none focus:shadow-outline"
            id="hijri"
            type="date"
            value={hijriDate}
            onChange={handleHijriChange}
          />
        </div>
        <div className="mt-8 p-6 bg-amber-300 rounded-lg">
          <h2 className="text-2xl font-bold text-amber-800 mb-4 text-center font-serif">
            Conversion Result
          </h2>
          <p className="text-amber-700 text-xl text-center mb-3">
            <span className="font-bold">Gregorian:</span> {formattedGregorian}
          </p>
          <p className="text-amber-700 text-xl text-center">
            <span className="font-bold">Hijri:</span> {formattedHijri}
          </p>
        </div>
        <div className="flex items-center justify-center mt-6">
          <Calendar className="text-amber-700 mr-3" size={36} />
          <p className="text-amber-800 font-serif text-2xl">Find more!</p>
        </div>
        <p className="mt-3 text-md font-extrabold text-amber-800 mb-8 text-center font-serif">
          <a href="https://www.fauzanlubis.com">www.fauzanlubis.com</a>
        </p>
      </div>
    </div>
  );
}

export default App;
