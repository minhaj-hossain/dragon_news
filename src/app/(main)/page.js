import Category from "@/components/main/homepage/Category.";
import RightSideBar from "@/components/main/homepage/RightSideBar";
import MarqueePage from "@/components/main/Marquee";
import Navbar from "@/components/shared/Navbar";
import { getCategories } from "@/lib/data";

export default async function Home() {

  const categories = await getCategories()

  return (
    <div>
      <MarqueePage />
      <Navbar />
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-3 mt-10">
        <div className="col-span-3  hidden lg:block">

          <h3 className="font-semibold text-xl text-[#403f3f] mb-5">All Category</h3>

          <ul className="text-left">
            {
              categories.news_category.map(category => <Category key={category.category_id} category={category} activeId={'01'} />)
            }
          </ul>

        </div>

        <div className="col-span-6 bg-pink-300">dragon news home</div>
        <div className="col-span-3  hidden lg:block">
          <RightSideBar />
        </div>
      </div>
    </div >
  );
}
