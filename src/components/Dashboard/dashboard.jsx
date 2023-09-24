"use client";

import { Timer } from "./Time";
import { CalendarCheck2, Users } from "lucide-react";
import dashboardBack from "@/assets/dashboard-back.jpg";
import Image from "next/image";
import { CardDashboard } from "./CardDashboard";
import { useRouter } from "next/navigation";


export const Dashboard = ({ events }) => {

  const router = useRouter();

  const handleclickProfile = ()=>{
    router.push("../../../userpage")
  }

  const handleclicklogout = ()=>{
    router.push("../login")
  }

  const TambahArray = () => {
    let total = 0;

    events.forEach((item) => {
      total += item.participants.length;
    });
    return total;
  };
  return (
    <div>
      <div className="p-4">
        <div className="flex justify-between items-center uppercase mx-8">
          <div>
            <Timer />
          </div>

          <div className="flex items-center justify-center text-sm font-semibold py-3 px-6 gap-4 bg-wrn rounded-full">
            <div className="linkStyle">Event</div>
            <div className="linkStyle">about</div>
            <div onClick={handleclickProfile} className="linkStyle">profile</div>
          </div>

          <div onClick={handleclicklogout} className="logoutButton">logout</div>
        </div>

        {/* content dashboard */}
        <div className="pt-8">
          <div className=" text-paraghraph-text flex justify-center uppercase pb-10 text-4xl font-extrabold">
            Dashbord
          </div>

          <div className="flex justify-center">
            <div className="space-y-3">
              <div className="gap-8 justify-center flex max-w-[1200px]">
                <div className=" relative flex justify-center items-center h-56 w-fit px-6 bg-gradient-to-tr from-purple-300 to-fuchsia-200 card">
                  <CalendarCheck2
                    size={50}
                    color="white"
                    className=" absolute top-3 right-0 mx-4"
                  />
                  <div className=" flex items-center justify-center gap-2">
                    <div className="text-paraghraph-text text-[10rem] font-extrabold">
                      {events.length}
                    </div>
                    <div className="flex flex-col items-start">
                      <p className=" text-paraghraph-text text-3xl font-extrabold">
                        On
                      </p>
                      <p className=" text-paraghraph-text text-3xl font-extrabold">
                        Going
                      </p>
                      <p className=" text-paraghraph-text text-3xl font-extrabold">
                        Event
                      </p>
                    </div>
                  </div>
                </div>

                <div className=" relative flex justify-center items-center h-56 w-fit px-6 bg-gradient-to-tr from-blue-400  to-cyan-300 card">
                  <Users
                    size={50}
                    color="white"
                    className=" absolute top-3 right-0 mx-4"
                  />
                  <div className=" flex items-center justify-center gap-2">
                    <div className="text-paraghraph-text text-[10rem] font-extrabold">
                      {TambahArray()}
                    </div>
                    <div className="flex flex-col items-start">
                      <p className=" text-paraghraph-text text-3xl font-extrabold">
                        total
                      </p>
                      <p className=" text-paraghraph-text text-3xl font-extrabold">
                        users
                      </p>
                      <p className=" text-paraghraph-text text-3xl font-extrabold">
                        register
                      </p>
                    </div>
                  </div>
                </div>

                <Image
                  className=" rounded-xl"
                  src={dashboardBack}
                  width={220}
                />
              </div>

              <div className="py-16">
                <div className="flex bg-button-main rounded-full w-fit m-auto px-8 py-2 text-white items-center justify-center uppercase text-2xl font-semibold">
                  Ongoing Event
                </div>
                <div className="grid grid-cols-3 gap-16 max-h-[680px] pt-4">
                  {events.map((event, index) => {
                    if (
                      index === events.length - 3 ||
                      index === events.length - 1 ||
                      index === events.length - 2
                    ) {
                      return (
                        <div
                          className=" flex justify-center items-center gap-8 pt-8"
                          key={index}
                        >
                          <div>
                            <CardDashboard
                              name={event.name}
                              location={event.location}
                              date={event.date}
                              description={event.description}
                              participants={event.participants.length}
                            />
                          </div>
                        </div>
                      );
                    }
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
