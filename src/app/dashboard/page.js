import { Dashboard } from "@/components/dashboard";

async function getEvent() {
  const res = await fetch("https://eventmakers-api.vercel.app/api/event", {
    cache: "no-cache",
  });

  const data = await res.json();
  return data;
}

export default async function Page() {
  const { data } = await getEvent();
  console.log(data);

  return <Dashboard events={data} />;
}
