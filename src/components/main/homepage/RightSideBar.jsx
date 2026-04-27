import React from 'react';
import { FaFacebookF, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';

const RightSideBar = () => {
    return (
        <div className='space-y-10'>
            <div>
                <h3 className='font-semibold text-xl '>Login With</h3>

                <div>
                    <div className='text-blue-300 border flex items-center gap-3 justify-center py-2 rounded-lg mt-6 border-blue-300 '>
                        <FaGoogle className='text-xl' />
                        <span className='font-medium'>Login with Google</span>
                    </div>

                    <div className='text-black border flex items-center gap-3 justify-center py-2 rounded-lg mt-3 border-black  '>
                        <FaGithub className='text-xl' />
                        <span className='font-medium'>Login with Github</span>
                    </div>
                </div>
            </div>

            <div>
                <h3 className='font-semibold text-xl mb-6'>Find Us On</h3>

                <div className='border rounded-md'>

                    <div className='border-b flex gap-3 items-center py-5 pl-3'>
                        <div className='p-3 w-fit flex items-center rounded-full bg-[#f3f3f3]'><FaFacebookF color='blue' /></div>

                        <h3 className='text-[#706f6f] font-medium'>Facebook</h3>

                    </div>

                    <div className='border-b flex gap-3 items-center py-5 pl-3'>
                        <div className='p-3 w-fit flex items-center rounded-full bg-[#f3f3f3]'><FaTwitter color='blue' /></div>

                        <h3 className='text-[#706f6f] font-medium'>Twitter</h3>

                    </div>
                    <div className='border-b flex gap-3 items-center py-5 pl-3'>
                        <div className='p-3 w-fit flex items-center rounded-full bg-[#f3f3f3]'><FaInstagram color='blue' /></div>

                        <h3 className='text-[#706f6f] font-medium'>Instagram</h3>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default RightSideBar;