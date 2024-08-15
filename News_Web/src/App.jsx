import { useState } from "react";
import Navbar from "./components/Navbar";
import Newsboard from "./components/NewsBoard";
// import Login from "../components/Login";
// import NewsItem from "./components/NewsItem";

const App =()=>{
  const [category,setCategory] = useState("general");

  return(
    <div>
      
      {/* <Login/> */}
      <Navbar setCategory={setCategory}/>
      <Newsboard category={category}/>
       {/* <NewsItem />  */}
    </div>
  
  );
}
export default App