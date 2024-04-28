import React, { useState, useEffect } from 'react';
import doctorsData from '../constants/drdata.json';
import { MdLocationOn } from "react-icons/md"
import { FaStar } from "react-icons/fa6"
import { FaPhoneAlt } from "react-icons/fa"
import { GiPathDistance } from "react-icons/gi"
import Navbar from './Ui/Navbar';

const MusicCard = ({ doctor }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`w-72 flex-auto ${isHovered ? 'bg-white/50' : 'bg-white'} p-2 mx-4 my-2 relative flex flex-col justify-around rounded-md transition-all duration-300`}
        >
            <img src={doctor.image} alt="doctor's image" className="w-full mb-4 rounded-md" />
            <p className="text-black mb-1">{doctor.name}</p>
            <a target='_blank' href={`http://www.google.com/maps/place/${doctor.latitude},${doctor.longitude}`} className="text-black hover:text-black hover:underline mb-1"><MdLocationOn className='inline-block'/> {doctor.address}</a>
            <p className="text-black mb-1"><FaPhoneAlt className='inline-block'/> {doctor.phone}</p>
            <div className='flex gap-4'>
                <p className="text-black mb-1"><FaStar className='inline-block'/> {doctor.stars}</p>
                <p className="text-black mb-1"><GiPathDistance className='inline-block' /> {doctor.distance.toFixed(2)} km</p>
            </div>
            <a className='text-black' href={doctor.appointment}>Book an appointment</a>
        </div>
    )
}

// Function to calculate distance between two coordinates using Haversine formula
function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the earth in km
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in km
    return distance;
}

function deg2rad(deg) {
    return deg * (Math.PI / 180);
}

const NearestDoctors = () => {
    const [userLocation, setUserLocation] = useState(null);
    const [sortedDoctors, setSortedDoctors] = useState([]);

    useEffect(() => {
        // Fetch user's location using Geolocation API
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setUserLocation({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude
                    });
                },
                (error) => {
                    console.error('Error getting user location:', error);
                }
            );
        }
    }, []);

    useEffect(() => {
        // Once user's location is fetched, calculate distances and sort doctors
        if (userLocation) {
            const sortedDoctors = doctorsData.map(doctor => {
                const distance = calculateDistance(
                    userLocation.latitude,
                    userLocation.longitude,
                    doctor.latitude,
                    doctor.longitude
                );
                return { ...doctor, distance };
            }).sort((a, b) => {
                if (a.distance === b.distance) {
                    return b.stars - a.stars; // Sort by stars if distance is same
                }
                return a.distance - b.distance;
            }); // Remove slicing to show all doctors
            setSortedDoctors(sortedDoctors);
        }
    }, [userLocation]);

    return (
        <div className="p-4 min-h-screen bg-[#E0E9F5]">
            <Navbar />
            <h1 className="text-6xl font-semibold ml-6 font-Grotesk mb-4 text-center">Nearest Doctors</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {sortedDoctors.map((doctor, index) => (
                    <MusicCard key={index} doctor={doctor} />
                ))}
            </div>
        </div>
    );
};

export default NearestDoctors;
