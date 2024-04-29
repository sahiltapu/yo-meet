import { React } from "react";
import MeetingTypeList from "@/components/MeetingTypeList";
import UpdateDateAndTime from "@/components/UpdateDateAndTime";

const Home = () => {
  return (
    <section className="flex size-full flex-col gap-8 text-white-1">
      <div className="h-[303px] w-full rounded-[20px] bg-hero bg-cover flip">
        <div className="flex h-full max-md:px-5 max-md:p-8 max-lg:p-11 max-sm:p-8 justify-between flex-col p-11 ">
          {/* <h2 className="glassmorphism max-w-[276px]  rounded py-2 text-center text-base font-normal">
            Upcoming Meeting at: 12:30 PM
          </h2> */}
          <UpdateDateAndTime />
        </div>
      </div>

      <MeetingTypeList />
    </section>
  );
};

export default Home;