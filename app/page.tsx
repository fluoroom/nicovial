import Home from "./Home"
import { getAlbums } from "../src/utils/contentful";

export const  metadata = {
    title:"Nico Vial | Portfolio",
    description:"Photography portfolio"
}

const Page = async () =>{
    function shuffleArray(array) {
        const newArray = [...array]; // Create a shallow copy of the input array to avoid modifying the original array.
        for (let i = newArray.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
      }
    const albums = shuffleArray(await getAlbums()); 

    return <Home albums={albums}/> 
}

export default Page