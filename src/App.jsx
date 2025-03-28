import { useState } from "react";
import "./App.css";
import Title from "./Components/Title";
import SearchBar from "./Components/SearchBar";
import InfoWrapper from "./Components/InfoWrapper";
import InfoCard from "./Components/InfoCard";
import data from './data.json'
function App() {
  return (
    <>
      <div className="Home-Container">
        <Title />
        <SearchBar />
        <InfoWrapper title="Jedi" subtitle="Servants of the Light Side"> 
          {data.map((data) => (
         <InfoCard
         pic={data.pic}
         altDescription="Mace Windu"
         name={data.name}
         ranking={data.rank}
         description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga sapiente aliquam, consequuntur iusto officiis inventore placeat, ea eaque dolorum quas soluta deleniti voluptas, culpa expedita?"
       />
        ))}
        </InfoWrapper>
      </div>
    </>
  );
}

export default App;
