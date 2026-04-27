import Image from "next/image";
import logo from "@/assets/logo.png"
import { format } from "date-fns";

const Header = () => {
    return (
        <div className="space-y-5 mx-auto text-center mt-10 flex flex-col items-center justify-center">
            <Image src={logo} alt="logo" width={330} height={200} />
            <div className="space-y-3">
                <p className="text-[#706f6f]">Journalism Without Fear or Favour</p>
                <p className="text-xl font-medium">{format(new Date(), "EEEE")} <span className="text-[#706f6f]">{format(new Date(), "LLLL MM, yyyy")}</span></p>
            </div>
        </div>
    );
};

export default Header;