import React from "react";
import { CardDisplay } from "@/components/CardDisplay";
import { Header } from "@/components/Header";
import { Headline } from "@/components/Headline";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <div>
      <Header />
      <Headline />
      <div>
        <CardDisplay />
      </div>
      <Footer />
    </div>
  );
}
