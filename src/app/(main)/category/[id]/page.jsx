import Category from "@/components/main/homepage/Category.";
import NewsCard from "@/components/main/homepage/NewsCard";
import EmptyState from "@/components/main/homepage/NothingCard";
import RightSideBar from "@/components/main/homepage/RightSideBar";
import MarqueePage from "@/components/main/Marquee";
import Navbar from "@/components/shared/Navbar";
import { getCategories, getCategoryNews } from "@/lib/data";

const NewsCategoryPage = async ({ params }) => {

    const { id } = await params;

    const categories = await getCategories()
    const categoryNews = await getCategoryNews(id)

    console.log(categoryNews.length)

    return (
        <div>
            <MarqueePage />
            <Navbar />
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-3 mt-10">
                <div className="col-span-3  hidden lg:block">

                    <h3 className="font-semibold text-xl text-[#403f3f] mb-5">All Category</h3>

                    <ul className="text-left">
                        {
                            categories.news_category.map(category => <Category key={category.category_id} category={category} activeId={id} />)
                        }
                    </ul>

                </div>

                <div className="col-span-6 space-y-3">
                    {/* {
                        categoryNews.map(news => (<div key={news.id} className="border space-y-3 p-3 rounded-md">
                            <h3 className="font-medium text-xl text-[#403f3f]">{news.author?.name}</h3>

                            <p className="text-[#706f6f]">{news.title}</p>

                        </div>))
                    } */}
                    {
                        categoryNews.length > 0 ? categoryNews.map(news => <NewsCard key={news._id} news={news} />) : <EmptyState />
                    }
                </div>

                <div className="col-span-3  hidden lg:block">
                    <RightSideBar />
                </div>
            </div>
        </div >
    );
};

export default NewsCategoryPage;