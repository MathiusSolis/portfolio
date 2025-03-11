import { MainBanner } from "./MainBanner";
import { MainBg } from "./MainBg";
import { HeaderNav } from "../Header/HeaderNav";

export const Main = () => {
    return (
        <div className="bg-[#2a2a2f] min-h-screen flex flex-col relative gap-y-16">
            <MainBg />
            <HeaderNav className="max-[700px]:hidden" />
            <MainBanner />
        </div>
    );
};