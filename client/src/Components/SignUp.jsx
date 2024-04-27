import { IoIosArrowBack } from 'react-icons/io';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

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
  return (
    <div className="h-screen w-full grid grid-cols-2 max-md:grid-cols-1 items-center">
      <div className="bg-red-500 h-full max-md:hidden"></div> 
      <div className=" px-10">
        <div className="flex gap-3 items-center">
          <IoIosArrowBack className="inline-block" /> 
          <span>Back to website</span>
        </div>
        <div className="text-3xl font-semibold mt-10">Sign Up!</div>
        <form className="flex flex-col gap-2 mt-8">
          <label htmlFor="name" className="ml-3">Name</label> 
          <input 
            autoComplete="off" 
            style={{ border: '1px solid #b3b3b3' }} 
            id="name" 
            type="text" 
            className="w-[80%] max-sm:w-[90%] rounded-full p-3 focus:outline-black" 
          />
          <label htmlFor="email" className="ml-3">Email</label>
          <input 
            autoComplete="off" 
            style={{ border: '1px solid #b3b3b3' }} 
            id="email" 
            type="email" 
            className="w-[80%] max-sm:w-[90%] rounded-full p-3 focus:outline-black" 
          />
          <label htmlFor="password" className="mt-4 ml-3">Password</label>
          <input
            style={{ border: '1px solid #b3b3b3' }}
            id="password"
            type="password"
            className="w-[80%] max-sm:w-[90%] rounded-full p-3 focus:outline-black"
          />

          <CustomButton
            component="label"
            variant="contained"
            startIcon={<CloudUploadIcon />}
          >
            Upload avatar
            <VisuallyHiddenInput type="file" />
          </CustomButton>
          <button className="w-[80%] max-sm:w-[90%] mt-4 rounded-full p-3 bg-black text-white">
            SignUp
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
