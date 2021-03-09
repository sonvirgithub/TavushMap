import React from "react";
import CloseMoreInfoProgram from "./CloseMoreInfoProgram";
import MoreInfo from "./MoreInfo";

function MoreInfoProgram({
  setProgramId,
  prog,
  programs,
  showResults,
  setShowResults,
}) {
  console.log(showResults);

  const onClick = () => {
    // setShowResults(!showResults);
    setShowResults(true);
    setProgramId(prog.id);
  };

  return (
    <>
      <div>
        <div style={{ marginLeft: "5px" }}>
          {/* {showResults ? (
            <div>              
              <CloseMoreInfoProgram setShowResults={setShowResults} />
            </div>
          ) : ( */}
          <div>
            <img
              onClick={onClick}
              className="org_icon"
              src={require("../../img/eye.svg").default}
            />
          </div>
          {/* )} */}
        </div>

        {/* <div>
          <input type="submit" value="Search" onClick={onClick} />
          {showResults ? <MoreInfo /> : null}
        </div> */}
      </div>
      {/* {showResults ? <MoreInfo /> : null} */}
    </>
  );
}

export default MoreInfoProgram;
