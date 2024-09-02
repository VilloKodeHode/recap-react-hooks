import { useEffect, useState } from "react";
import { Button } from "./Button";

export const ButtonGallery = () => {

  const [active, setActive] = useState("Warning");
  const [someData, setSomeData] = useState()

  const handleButtonClick = (buttonName) => {
    setActive(buttonName);
    // console.log(active)
  };

  useEffect(()=> {
    async function fetchData() {
        const data = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const response = await data.json()
        setSomeData(response)
        console.log(response)
      }
      fetchData()
  }, [])

  return (
    <section className="flex flex-col gap-8 p-8 bg-gradient-to-br from-blue-800 to-blue-400">
      <button
      onClick={() => handleButtonClick("Primary")}
        className={`p-4 ${
          active === "Primary"
            ? "bg-yellow-500 hover:bg-yellow-600"
            : "bg-blue-500 hover:bg-blue-900"
        }`}
      >
        Primary Button
      </button>
      <Button buttonText="Warning" handleButtonClick={handleButtonClick} color="stone" active={active} />
      <Button buttonText="Danger" handleButtonClick={handleButtonClick} color="red" active={active} />
      <Button buttonText="New" handleButtonClick={handleButtonClick} color="purple" active={active} />

<p>current button pressed is: {active}</p>


<p>{someData?.title}</p>
<p>id: {someData?.id}</p>
<p>bruker id: {someData?.userId}</p>
<p>{someData?.completed === "true" ? "completed" : "not completed"}</p>


//! Koden under gjør det samme som over
{/* {someData && 
<>
<p>{someData.title}</p>
<p>id: {someData.id}</p>
<p>bruker id: {someData.userId}</p>
<p>{someData.completed === "true" ? "completed" : "not completed"}</p>
</>
} */}

    </section>
  );
};
