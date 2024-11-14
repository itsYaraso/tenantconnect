import Header from "../components/Header";
import NavMenu from "../components/NavMenu";
import { Calendar } from "@nextui-org/calendar";

export default function calendarSchedule() {
  return (
    <div className="">
      <Header />
      <div className="flex gap-24">
        <NavMenu />
        <Calendar className="w-full" 
              aria-label="Date (Show Month and Year Picker)" 
              showMonthAndYearPickers />
      </div>
    </div>
  );
}
