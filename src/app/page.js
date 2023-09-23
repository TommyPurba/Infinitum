import React from "react";
import { CardDisplay } from "@/components/Homepage/CardDisplay";
import { Header } from "@/components/Homepage/Header";
import { Headline } from "@/components/Homepage/Headline";
import { Footer } from "@/components/Homepage/Footer";
async function getEvents() {
  const res = await fetch("https://eventmakers-api.vercel.app/api/event", {
    cache: "no-cache",
  });
  const data = await res.json();
  return data;
}

export default async function Page() {
  const { data } = await getEvents();

  return (
    <div>
      <Header />
      <Headline />
      <CardDisplay eventsData={data} />
      <Footer />
    </div>
  );
}
