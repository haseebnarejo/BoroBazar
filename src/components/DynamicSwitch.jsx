import React, { useState } from 'react'

function DynamicSwitch() {
    // State to track the switch status
    const [isChecked, setIsChecked] = useState(true);

    // Handle switch toggle
    const handleToggle = () => {
        setIsChecked((prev) => !prev);
        console.log(`Switch is now ${!isChecked ? "ON" : "OFF"}`);
    };

    return (
        <label className="inline-flex items-center cursor-pointer">
            {/* Checkbox Input */}
            <input
                type="checkbox"
                className="sr-only peer"
                checked={isChecked}
                onChange={handleToggle}
            />
            {/* Switch Visual */}
            <div
                className={`relative w-11 h-6 rounded-full transition-all ${isChecked ? "bg-[#02b290]" : "bg-gray-200"
                    } peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700`}
            >
                <div
                    className={`absolute top-0.5 start-[2px] h-5 w-5 rounded-full bg-white border border-gray-300 transition-all dark:border-gray-600 ${isChecked ? "translate-x-full rtl:-translate-x-full" : ""
                        }`}
                ></div>
            </div>
        </label>
    );  
}

export default DynamicSwitch