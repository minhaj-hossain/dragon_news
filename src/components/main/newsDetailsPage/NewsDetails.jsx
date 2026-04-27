import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { BiLeftArrow } from "react-icons/bi";
import { FaEye, FaStar } from "react-icons/fa";

export default function NewsDetails({ news }) {
    const {
        title,
        image_url,
        details,
        total_view,
        rating,
        author,
        others_info,
        category_id
    } = news;

    return (
        <div className="max-w-4xl mx-auto px-6 py-10">
            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
                {title}
            </h1>

            {/* Badges */}
            <div className="flex gap-3 mt-4">
                {others_info?.is_trending && (
                    <span className="px-3 py-1 text-xs rounded-full bg-red-100 text-red-600 font-medium">
                        Trending
                    </span>
                )}
                {others_info?.is_todays_pick && (
                    <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-600 font-medium">
                        Today’s Pick
                    </span>
                )}
            </div>

            {/* Author */}
            <div className="flex items-center gap-4 mt-6 border-b pb-6">
                <Image
                    src={author?.img}
                    alt={author?.name}
                    width={50}
                    height={50}
                    className="rounded-full object-cover"
                />
                <div>
                    <p className="font-semibold text-gray-800">{author?.name}</p>
                    <p className="text-sm text-gray-500">{author?.published_date}</p>
                </div>
            </div>

            {/* Cover Image */}
            <div className="mt-8">
                <Image
                    src={image_url}
                    alt={title}
                    width={1200}
                    height={600}
                    className="w-full h-105 object-cover rounded-xl"
                />
            </div>

            {/* Details */}
            <div className="mt-8 text-gray-700 leading-relaxed text-lg whitespace-pre-line">
                {details}
            </div>

            {/* Footer stats */}
            <div className="flex items-center justify-between my-10 pt-6 border-t">
                <div className="flex items-center gap-2 text-orange-500">
                    <FaStar />
                    <span className="font-semibold text-gray-800">
                        {rating?.number} ({rating?.badge})
                    </span>
                </div>

                <div className="flex items-center gap-2 text-gray-500">
                    <FaEye />
                    <span>{total_view} views</span>
                </div>
            </div>

            <Link className="" href={`/category/${category_id}`}><Button className={'bg-red-500 rounded-md '}> <BiLeftArrow /> All news in this category</Button></Link>
        </div>
    );
}