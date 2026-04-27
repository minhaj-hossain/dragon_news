import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const Category = ({ category, activeId }) => {
    return (
        <>
            {
                <Link href={`/category/${category.category_id}`} className='block ' >
                    <li >
                        <Button className={` ${activeId === category.category_id ? 'bg-[#e7e7e7] text-[#403f3f] font-semibold text-[16px] border border-[#e7e7e7]' : 'bg-transparent'} rounded-sm hover:bg-[#e7e7e7] justify-start w-full  text-[#9f9f9f] `}>{category.category_name}</Button>
                    </li>
                </Link >
            }
        </>
    );
};

export default Category;