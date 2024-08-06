import React, { useState } from "react";
import { Link } from '@inertiajs/react';

import styles from "./style.module.css";

import arrowDownIcon from "@/Assets/SelectBox/arrowDown.svg";

import avatar1 from "@/Assets/SelectBox/Avatar.png";
import avatar2 from "@/Assets/SelectBox/Avatar-1.png";
import avatar3 from "@/Assets/SelectBox/Avatar-2.png";
import avatar4 from "@/Assets/SelectBox/Avatar-3.png";
import avatar5 from "@/Assets/SelectBox/Avatar-4.png";
import avatar6 from "@/Assets/SelectBox/Avatar-5.png";
import avatar7 from "@/Assets/SelectBox/Avatar-6.png";
import avatar8 from "@/Assets/SelectBox/Avatar-7.png";
import logo from "@/Assets/Logo.png"

import { router } from '@inertiajs/core';

import { TbBuildingBank } from "react-icons/tb";
import { IoVideocamOutline } from "react-icons/io5";

const doctors = [
  {
    id: Math.random(),
    doctorName: "Spezialist,Wade Warren",
    profession: "Krankenpfleger",
    img: avatar1,
  },
  {
    id: Math.random(),
    doctorName: "Spezialist, Ronald Richards",
    profession: "Krankenpfleger",
    img: avatar2,
  },
  {
    id: Math.random(),
    doctorName: "Spezialist, Guy Hawkins",
    profession: "Krankenpfleger",
    img: avatar3,
  },
  {
    id: Math.random(),
    doctorName: "Spezialist, Leslie Alexander",
    profession: "Krankenpfleger",
    img: avatar4,
  },
  {
    id: Math.random(),
    doctorName: "Spezialist, Jacob Jones",
    profession: "Krankenpfleger",
    img: avatar5,
  },
  {
    id: Math.random(),
    doctorName: "Spezialist, Kristin Watson",
    profession: "Krankenpfleger",
    img: avatar6,
  },
  {
    id: Math.random(),
    doctorName: "Spezialist, Cody Fisher",
    profession: "Krankenpfleger",
    img: avatar7,
  },
  {
    id: Math.random(),
    doctorName: "Spezialist, Marvin McKinney",
    profession: "Krankenpfleger",
    img: avatar8,
  },
];

const SelectBox = (employees) => {
  const [isOptionsOpen, setOptionsOpen] = useState(false);
  const [selectedDoctor, setSelcetedDoctor] = useState(null);

  const toggleOpenOptions = () => {
    setOptionsOpen(!isOptionsOpen);
  };

  const [selectedType , setSelectedType] = useState('online');
  console.log(selectedType);

  const handleChangeSelcetedDoctor = (employee_uid) => {
    const appointmentType = document.querySelector('input[name="appointmentType"]:checked').value;
    const url = route('employee.show', employee_uid) + `?type=${appointmentType}`;
    router.get(url);
  };

  return (
    <>
      <div className="mt-10 flex flex-col md:flex-row gap-4">
        
      <Link
  href={route("reservierung")}
  className="flex items-center gap-2 bg-[#ca9b31] hover:bg-[#f9f8f2] hover:border hover:border-[#ca9b31] hover:text-[#ca9b31]  text-white font-medium text-lg px-4 py-3 rounded-xl shadow-md   transition duration-150 ease-in-out"
>
  <IoVideocamOutline />
  Videosprechstunde
</Link>
<Link
  href={route("reservierung")}
  className="flex items-center gap-2 bg-[#ca9b31] hover:bg-[#f9f8f2] hover:border hover:border-[#ca9b31] hover:text-[#ca9b31]  text-white font-medium text-lg px-4 py-3 rounded-xl shadow-md   transition duration-150 ease-in-out"
>
  <IoVideocamOutline />
  Vor-Ort-Termin
</Link>
      </div>

      <div className={styles.container}>
        {/* slectBox selected start */}
        {/* <div className={styles.selectBoxContainer}>
            <div
            className={styles.selectBoxSelectedItemContainer}
            onClick={toggleOpenOptions}
            >
            <div className={styles.selectBoxSelectedItem}>
                {selectedDoctor
                ? selectedDoctor.doctorName
                : "z.ß.Fachgebeit, Erkrankung, Name"}
            </div>
            <img
                src={arrowDownIcon}
                alt=""
                style={
                isOptionsOpen
                    ? { transform: "rotate(180deg)", transition: ".3s" }
                    : { transition: ".3s" }
                }
            />
            </div>
            <button className={styles.selectBoxBtn}>Suche</button>
        </div> */}
        {/* slectBox selected end */}
        {/* {isOptionsOpen && (
            <div className={styles.optionsContainer}>
            {employees.employees.employees.map((employee) => (
                <Link
                className={styles.option}
                    href={route('employee.show', employee.uid)+`?type=${selectedType}`}
                >
                <div>
                    <h5 className={styles.doctorName}>{employee.username} {employee.name}</h5>
                    <p className={styles.doctorProfession}>{employee.profession}</p>
                </div>
                <img src={employee.profile_image?'/images/'+employee.profile_image:logo} alt="" className={styles.doctorImg} />
                </Link>
            ))}
            </div>
        )} */}
      </div>
    </>
  );
};

export default SelectBox;
