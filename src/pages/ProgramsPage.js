import React, { useEffect, useState } from "react";
import Program from "../components/HomePage/Program";
import axios from "axios";

export const ProgramContext = React.createContext();
function ProgramsPage() {
  const [programs, setPrograms] = useState("");

  const addProgram = (prog) => {
    programs.push(prog);
    setPrograms([...programs]);
  };

  const editProgram = (prog) => {
    programs.map((program) => {
      if (program.id == prog.id) {
        program.name_eng = prog.name_eng;
        program.name_arm = prog.name_arm;
        program.person = prog.person;

        setPrograms([...programs]);
      }
    });
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

  //   console.log("object");
  useEffect(() => {
    fetch('/api/programs')
    .then(res => res.json())
    .then(data => {
      console.log(data.data);
      setPrograms(data.data)

    }).catch(err => {
      console.log(err);
    })
  }, []);

  console.log(programs, "prrograms");
  return (
    <div style={{ position: "absolute", width: "100%" }}>
      <ProgramContext.Provider
        value={{
          programs,
          setPrograms,
          addProgram,
          deleteProgram,
          editProgram,
        }}
      >
        <Program programs={programs} />
      </ProgramContext.Provider>
    </div>
  );
}

export default ProgramsPage;
