import React, { useEffect, useState } from "react";
import Program from "../components/HomePage/Program";
import axios from "axios";

export const ProgramContext = React.createContext();
function ProgramsPage({ showResults, setShowResults, setProgramId }) {
  const [programs, setPrograms] = useState([]);
  const [suppPrograms, setSuppPrograms] = useState([])
  const [suppProg, setSuppProg] = useState([])

  const addProgram = (prog) => {
    programs.push(prog);
    setPrograms([...programs]);
  };


  const deleteProgram = (id) => {
    programs.map((program) => {
      if (program.id == id) {
        const index = programs.indexOf(program);
        programs.splice(index, 1);
        setPrograms([...programs]);

      }
    });
  };

  useEffect(() => {
    fetch("/api/programsForAdmin")
      .then((res) => res.json())
      .then((res) => {
        console.log(res.data);
        setPrograms(res.data);
        
      })
      .catch((err) => {
        console.log(err);
      });

     


  }, []);

  return (
    <div
      style={{
        //  position: "absolute",
        width: "100%",
      }}
    >
      <ProgramContext.Provider
        value={{
          programs,
          setPrograms,
          addProgram,
          deleteProgram,
        }}
      >
        <Program
          setProgramId={setProgramId}
          showResults={showResults}
          programs={programs}
          setPrograms={setPrograms}
          setShowResults={setShowResults}
        />
      </ProgramContext.Provider>
    </div>
  );
}

export default ProgramsPage;
