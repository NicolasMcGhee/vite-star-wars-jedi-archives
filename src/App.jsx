import { useState } from "react";
import "./App.css";
import Kenobi from "/Kenobi.png";
import Title from "./Components/Title";
import SearchBar from "./Components/SearchBar";
import InfoWrapper from "./Components/InfoWrapper";
import InfoCard from "./Components/InfoCard";
function App() {
  return (
    <>
      <div className="Home-Container">
        <Title />
        <SearchBar />
        <InfoWrapper title="Jedi" subtitle="Servants of the Light Side">
          <InfoCard
            pic={Kenobi}
            altDescription="Mace Windu"
            name="Mace Windu"
            ranking="Jedi Master/Council Master"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga sapiente aliquam, consequuntur iusto officiis inventore placeat, ea eaque dolorum quas soluta deleniti voluptas, culpa expedita?"
          />
          <InfoCard
            pic={Kenobi}
            altDescription="Mace Windu"
            name="Mace Windu"
            ranking="Jedi Master/Council Master"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga sapiente aliquam, consequuntur iusto officiis inventore placeat, ea eaque dolorum quas soluta deleniti voluptas, culpa expedita?"
          />
          <InfoCard
            pic={Kenobi}
            altDescription="Mace Windu"
            name="Mace Windu"
            ranking="Jedi Master/Council Master"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga sapiente aliquam, consequuntur iusto officiis inventore placeat, ea eaque dolorum quas soluta deleniti voluptas, culpa expedita?"
          />
          <InfoCard
            pic={Kenobi}
            altDescription="Mace Windu"
            name="Mace Windu"
            ranking="Jedi Master/Council Master"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga sapiente aliquam, consequuntur iusto officiis inventore placeat, ea eaque dolorum quas soluta deleniti voluptas, culpa expedita?"
          />
          <InfoCard
            pic={Kenobi}
            altDescription="Mace Windu"
            name="Mace Windu"
            ranking="Jedi Master/Council Master"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga sapiente aliquam, consequuntur iusto officiis inventore placeat, ea eaque dolorum quas soluta deleniti voluptas, culpa expedita?"
          />
        </InfoWrapper>
      </div>
    </>
  );
}

export default App;
