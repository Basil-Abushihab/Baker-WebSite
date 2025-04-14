import React, { useState } from 'react';
import { Save, Mail, Phone, User, Info } from 'lucide-react';

const Chef_profile = () => {
    const [chefInfo, setChefInfo] = useState({
        name: "Sofia Bianchi",
        email: "sofia.bianchi@example.com",
        phone: "+1 (555) 123-4567",
        bio: "Passionate baker specializing in artisanal breads and pastries."
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setChefInfo(prevInfo => ({
            ...prevInfo,
            [name]: value
        }));
    };

    const handleUpdate = () => {
        console.log("Updating chef information:", chefInfo);
        // Implement the update logic here
    };

    return (
        <div className="h-full overflow-auto bg-[#f8e5e1] rounded-lg p-6">
            <h2 className="text-3xl font-bold mb-6 text-center text-[#c98d83]">Chef Information</h2>
            <div className="max-w-2xl mx-auto space-y-6">
                {/* Name Input */}
                <div className="relative mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <div className="flex items-center border-2 border-[#c98d83] rounded-md shadow-sm px-3 py-2">
                        <User className="text-[#c98d83] mr-2" size={20} />
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={chefInfo.name}
                            onChange={handleInputChange}
                            className="w-full focus:outline-none border-none focus:ring-0 bg-transparent"
                            placeholder="Enter chef name"
                        />
                    </div>
                </div>
                {/* Email Input */}
                <div className="relative mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <div className="flex items-center border-2 border-[#c98d83] rounded-md shadow-sm px-3 py-2">
                        <Mail className="text-[#c98d83] mr-2" size={20} />
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={chefInfo.email}
                            onChange={handleInputChange}
                            className="w-full focus:outline-none border-none focus:ring-0 bg-transparent"
                            placeholder="Enter email address"
                        />
                    </div>
                </div>
                {/* Phone Input */}
                <div className="relative mb-4">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <div className="flex items-center border-2 border-[#c98d83] rounded-md shadow-sm px-3 py-2">
                        <Phone className="text-[#c98d83] mr-2" size={20} />
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={chefInfo.phone}
                            onChange={handleInputChange}
                            className="w-full focus:outline-none border-none focus:ring-0 bg-transparent"
                            placeholder="Enter phone number"
                        />
                    </div>
                </div>
                {/* Bio Input */}
                <div className="relative mb-4">
                    <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
                    <div className="flex items-start border-2 border-[#c98d83] rounded-md shadow-sm px-3 py-2">
                        <Info className="text-[#c98d83] mr-2 mt-1" size={20} />
                        <textarea
                            id="bio"
                            name="bio"
                            rows="4"
                            value={chefInfo.bio}
                            onChange={handleInputChange}
                            className="w-full focus:outline-none border-none focus:ring-0 bg-transparent"
                            placeholder="Enter chef bio"
                        ></textarea>
                    </div>
                </div>
                {/* Update Button */}
                <div className="mt-6">
                    <button
                        onClick={handleUpdate}
                        className="w-full bg-[#c98d83] text-white px-6 py-3 rounded-full hover:bg-[#b67c73] transition-colors duration-300 flex items-center justify-center"
                    >
                        <Save className="mr-2" size={20} />
                        Update Profile
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Chef_profile;