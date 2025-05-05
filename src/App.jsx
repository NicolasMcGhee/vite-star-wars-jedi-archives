import { useEffect, useState } from "react";
import "./App.css";
import Title from "./Components/Title";
import InfoWrapper from "./Components/InfoWrapper";
import InfoCard from "./Components/InfoCard";
import data from "./data.json";
import { Link, Route, Routes } from "react-router";
import Anakin from "/Jedi/Anakin.png";
import Mace from "/Jedi/Windu.png";
import Yoda from "/Jedi/Yoda.png";
import InfoPage from "./Components/InfoPage";
function App() {
  //Set State Functions
  const [filteredData, setFilteredData] = useState(data);
  const [query, setQuery] = useState("");
  const images = [Anakin, Mace, Yoda];

  useEffect(() => {
    // setItems(data)
    // setFilteredItems(data)
    console.log("items");
  }, []);

  //General Functions
  //  console.log(filteredData)
  const filterData = (query) => {
    const filteredData = data.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filteredData);
  };

  useEffect(
    (query) => {
      try {
        filterData(query);
      } catch (error) {
        console.log("Something blew up");
      }
    },
    [query]
  );

  //General Variables
  return (
    <>
      <div>
        <nav className=" border-b-2 flex justify-center navigation gap-10">
          <div>
            <Link to={`/`}>
              <h1>Jedi Archives</h1>
            </Link>
          </div>
          <div className="flex justify-between gap-4 text-blue-400">
            <Title />
            <Title />
            <Title />
          </div>
        </nav>
        {/* Use ternary to check if search is empty: If yes, use first. If no, use second */}
        {/* {data.map(filterQueries(data.name, query).map((data)) (
         <InfoCard
         pic={data.pic}
         altDescription="Mace Windu"
         name={data.name}
         ranking={data.rank}
         description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga sapiente aliquam, consequuntur iusto officiis inventore placeat, ea eaque dolorum quas soluta deleniti voluptas, culpa expedita?"
       />
        ))} */}

        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="Wrapper-Container">
                  <InfoWrapper
                    title="Jedi"
                    subtitle="Servants of the Light Side"
                  >
                    {data.map((data) => (
                      <InfoCard
                        id={data.id}
                        type={data.type}
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
            }
          />
          <Route path="/jedi/:postId" element={<InfoPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
