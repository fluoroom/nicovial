import Home from "./Home";
import { getAlbums } from "../src/utils/contentful";
import { headers } from "next/headers";

export const metadata = {
  title: "Nico Vial | Portfolio",
  description: "Photography portfolio",
};

const Page = async ({ searchParams }) => {
  const shuffle = (array) => array.sort(() => Math.random() - 0.5);
  const albums = shuffle(await getAlbums());
  headers();
  return <Home albums={albums} />;
};

export default Page;
