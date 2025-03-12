import { StickyHeaderNav } from "./Header/StickyHeaderNav";
import { Main } from "./Main/Main";
import { MyKnowledge } from "./Section/MyKnowledge/MyKnowledge";
import { ContactMe } from "./Section/ContactMe/ContactMe";
import { MyExperiencesInCompanies } from "./Section/MyExperiencesInCompanies/MyExperiencesInCompanies";
import { MyFreelanceExperience } from "./Section/MyFreelanceExperience/MyFreelanceExperience";

export default function Home() {
  return (
    <div className="bg-[#181A1B] relative w-full">
      <StickyHeaderNav />
      <Main />
      <MyKnowledge />
      <MyFreelanceExperience />
      <MyExperiencesInCompanies />
      <ContactMe />
    </div>
  );
}
