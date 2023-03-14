import React, { useState, useEffect, useRef } from "react";
import style from './ButtonMenu.module.css'


function DropdownMenu() {
const [isActive, setIsActive] = useState(false);
const dropdownRef = useRef(null);

useEffect(() => {
    document.addEventListener("click", handleOutsideClick, false);

    return () => {
    document.removeEventListener("click", handleOutsideClick, false);
    };
}, []);

const handleDropdownToggle = () => {
    setIsActive(!isActive);
};

const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
    setIsActive(false);
    }
};
console.log(isActive)

return (
    <div className="dropdownRef"  ref={dropdownRef}>
    <button className={style.Button}  onClick={handleDropdownToggle}>
        <img src="https://cdn-icons-png.flaticon.com/512/1828/1828859.png" className={style.imgButton}/>
    </button>
    <ul className={isActive ? style.list : style.listNone}>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ul>
    </div>
);
}

export default DropdownMenu;