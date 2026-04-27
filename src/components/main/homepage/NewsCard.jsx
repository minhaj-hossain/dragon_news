import Image from "next/image";
import Link from "next/link";
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from "react-icons/fa";



function NewsCard({ news }) {

    const { rating, author, total_view, title, image_url, published_date, details, _id } = news;

    console.log(news)

    return (
        <div className=" mx-auto bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200">
            {/* Header */}
            <div className="flex items-center justify-between p-5">
                <div className="flex items-center gap-3">
                    <Image
                        src={author?.img}
                        alt={author?.name}
                        width={40}
                        height={40}
                        className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                        <h3 className="font-semibold text-gray-800">{author?.name}</h3>
                        <p className="text-sm text-gray-500">{published_date}</p>
                    </div>
                </div>

                <div className="flex gap-4 text-gray-500 text-lg">
                    <FaRegBookmark className="cursor-pointer hover:text-gray-800" />
                    <FaShareAlt className="cursor-pointer hover:text-gray-800" />
                </div>
            </div>

            {/* Title */}
            <div className="px-5">
                <h2 className="text-2xl font-bold text-gray-900 leading-snug">
                    {title}
                </h2>
            </div>

            {/* Image */}
            <div className="mt-4 px-5">
                <Image
                    src={image_url}
                    width={300}
                    height={500}
                    alt="news"
                    className="w-full h-64 object-cover rounded-xl"

                />
            </div>

            {/* Description */}
            <div>
                <div className="px-5 py-4 text-gray-600 text-sm  line-clamp-2">
                    {details}

                </div>
                <Link href={`/news/${_id}`} className="px-4 py-2 text-orange-500 font-semibold cursor-pointer ml-1">
                    Read More
                </Link>

            </div>

            {/* Footer */}
            <div className="flex items-center justify-between px-5 py-4 border-t border-gray-200">
                <div className="flex items-center gap-2 text-orange-500">
                    {[...Array(1)].map((_, i) => (
                        <FaStar key={i} />
                    ))}
                    <span className="text-gray-700 font-medium ml-2">{rating.number}</span>
                </div>

                <div className="flex items-center gap-2 text-gray-500">
                    <FaEye />
                    <span>{total_view}</span>
                </div>
            </div>
        </div>
    );
}

export default NewsCard;