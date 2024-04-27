import { useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import api from '../utils/axios';

const CustomButton = styled(Button)`
  && {
    background-color: black;
    color: white;
    border-radius: 30px;
    width: 200px;
    padding: 10px 0;
    margin-top: 10px;
  }
`;

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    avatar: null,
  });

  const [avatar, setAvatar] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      data.append('name', formData.name);
      data.append('email', formData.email);
      data.append('password', formData.password);
      data.append('avatar', formData.avatar);

      const res = await api.post("/user/register", data)
      console.log(formData);
      setFormData({
        name: '',
        email: '',
        password: '',
        avatar: null,
      });
      toast.success(res.data.message)
      window.location.href = '/login';
    } catch (error) {
      console.log(error)
      toast.error(error.response.data.error)
    }
  };

  return (
    <div className="h-screen w-full grid grid-cols-2 max-md:grid-cols-1 items-center">
      <div className="h-full overflow-hidden flex items-center justify-center p-10 max-md:hidden">
        <img className="h-full object-contain" src="./login.jpg" alt="Login" />
      </div>
      <div className="px-10">
        <Link to="/" className="flex gap-3 items-center">
          <IoIosArrowBack className="inline-block" /> 
          <span>Back to website</span>
        </Link>
        <div className="text-3xl font-semibold mt-10">Sign Up!</div>
        <form className="flex flex-col gap-2 mt-8" onSubmit={handleSubmit}>
          <label htmlFor="name" className="ml-3">Name</label> 
          <input 
            autoComplete="off" 
            style={{ border: '1px solid #b3b3b3' }} 
            id="name" 
            name="name"
            type="text" 
            value={formData.name}
            onChange={handleChange}
            className="w-[80%] max-sm:w-[90%] rounded-full p-3 focus:outline-black" 
          />
          <label htmlFor="email" className="ml-3">Email</label>
          <input 
            autoComplete="off" 
            style={{ border: '1px solid #b3b3b3' }} 
            id="email" 
            name="email"
            type="email" 
            value={formData.email}
            onChange={handleChange}
            className="w-[80%] max-sm:w-[90%] rounded-full p-3 focus:outline-black" 
          />
          <label htmlFor="password" className="mt-4 ml-3">Password</label>
          <input
            style={{ border: '1px solid #b3b3b3' }}
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            className="w-[80%] max-sm:w-[90%] rounded-full p-3 focus:outline-black"
          />
          <label className="text-white my-5" >
            <input type="file" className="hidden" onChange={(e) => setFormData({ ...formData, avatar: e.target.files[0] })} />
            {avatar ? (
              <>
                <span className="bg-[#2A282A] rounded-full py-3 px-8 w-max">Select avatar </span>
                <span>{avatar.name}</span> 
              </>
            ) : (
              <span className="bg-[#2A282A] rounded-full py-3 px-8 w-max">Select avatar</span>
            )}
          </label>
          <button type="submit" className="w-[80%] max-sm:w-[90%] mt-4 rounded-full p-3 bg-black text-white">
            SignUp
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
