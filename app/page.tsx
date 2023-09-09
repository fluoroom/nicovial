import Home from "./Home"
import { getAlbums } from "../src/utils/contentful";

export const  metadata = {
    title:"Nico Vial | Portfolio",
    description:"Photography portfolio"
}

const Page = async () =>{
    const albums = await getAlbums(); 

    return <Home albums={albums}/>
}

export default Page