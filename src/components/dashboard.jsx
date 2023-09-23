"use client";

import { Timer } from "./Time";

export const Dashboard = ({ events }) => {
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
        <div className="flex justify-between uppercase">
          <div>
            <Timer />
          </div>
          <div className="flex gap-8 bg-wrn px-5 rounded-2xl">
            <div className=" hover:change">Event</div>
            <div className=" hover:change">about</div>
            <div className=" hover:change">profile</div>
          </div>
          <div className="hover:scale-105 hover:font-bold">logout</div>
        </div>

        {/* content dashboard */}
        <div className="pt-8">
          <div className="uppercase ml-4 pb-6 text-lg font-bold underline underline-offset-8 ">
            Dashbord
          </div>
          <div className="flex justify-center">
            <div className="space-y-3">
              <div className="flex gap-4 justify-center">
                <div className="card">
                  {events.length}
                  <p>Event</p>
                </div>
                <div className="card">
                  {TambahArray()}
                  <p>jumlah partisipasi</p>
                </div>
              </div>
              <div className="py-6">
                <div className="pb-6 text-center underline underline-offset-8">
                  Event yang berjalan
                </div>
                <div className="flex gap-3">
                  {events.map((event, index) => {
                    if (
                      index === events.length - 3 ||
                      index === events.length - 1 ||
                      index === events.length - 2
                    ) {
                      return (
                        <div className="space-y-3" key={index}>
                          <div className="card">
                            <div>{event.name}</div>
                            <div>{event.date}</div>
                            <div>{event.location}</div>
                          </div>
                          <div className="card">
                            {event.participants.length}
                            <p>participants</p>
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
