import { useEffect, useState } from "react";
import api from "../../utils/axios";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [userData, setUserData] = useState("");

    const getData = async () => {
        try {
            const res = await api.get("/user/user");
            console.log(res.data);
            setUserData(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            <style>
                {`
                    .hover-2 {
                        position: relative;
                    }
                    
                    .hover-2:after {
                        content: '';
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        right: 0;
                        width: 100%;
                        height: 3px;
                        transform: scaleX(0);
                        background-color: #1D2D44;
                        transition: transform 0.3s;
                    }

                    .hover-2:hover:after {
                        transform: scaleX(1);    
                    }
                `}
            </style>
            <div className="w-full flex gap-8 items-center py-2 px-4">
                <img src="./logo.svg" className="h-10" />
                <Link to="/near-me" className="hover-2 text-lg">Therapist</Link>
                <Link to="/education" className="hover-2 text-lg">Education</Link>
                <Link to="/community" className="hover-2 text-lg">Community</Link>
                <Link to="/user" className="hover-2 text-lg mr-auto">User</Link>
                {/* <div className="hover-2 text-lg">{userData.name}</div> */}
                {/* <img src={userData.avatar} className="w-12 h-12 rounded-full hover-2" /> */}
                <div className="bg-[#6366F1] rounded-full py-3 px-8 text-[white] font-semibold">Logout</div>
            </div>
        </div>
    );
};

export default Navbar;
