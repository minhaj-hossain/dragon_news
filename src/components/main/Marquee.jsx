import { Button } from '@heroui/react';
import React from 'react';
import Marquee from 'react-fast-marquee';

const MarqueePage = () => {
    return (
        <div className='container mx-auto flex gap-3 items-center bg-[#f3f3f3] py-3 px-3 my-5'>

            <Button className={'bg-red-600 font-medium text-xl rounded-none'}>Latest</Button>

            <Marquee pauseOnHover={true}>
                I can be a React component, multiple React components, or just some text.
            </Marquee>
        </div>
    );
};

export default MarqueePage;