import { getCategoryNews } from '@/lib/data';
import { Button } from '@heroui/react';
import React from 'react';
import Marquee from 'react-fast-marquee';

const MarqueePage = async () => {
    const breakingNews = await getCategoryNews('01')

    return (
        <div className='container mx-auto flex gap-3 items-center bg-[#f3f3f3] py-3 px-3 my-5'>

            <Button className={'bg-red-600 font-medium text-xl rounded-none'}>Latest</Button>

            <Marquee pauseOnHover={true}>
                {
                    breakingNews.map(news => (<p key={news._id} className='mr-50'>{news.title}</p>))
                }
            </Marquee>
        </div>
    );
};

export default MarqueePage;