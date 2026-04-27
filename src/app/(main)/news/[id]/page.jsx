import RightSideBar from '@/components/main/homepage/RightSideBar';
import NewsDetails from '@/components/main/newsDetailsPage/NewsDetails';
import { getCategoryNewsByID } from '@/lib/data';
import React from 'react';

const NewsDetailsPase = async ({ params }) => {

    const { id } = await params;

    const news = await getCategoryNewsByID(id)
    console.log(news.data[0])


    return (
        <div className='container mx-auto grid grid-cols-12 gap-4 mt-10'>

            <div className='col-span-9'><NewsDetails news={news.data[0]} /></div>
            <div className='col-span-3 '><RightSideBar /></div>

        </div>
    );
};

export default NewsDetailsPase;