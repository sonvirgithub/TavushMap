import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import { connect } from "react-redux";
import { fetchUser } from "./redux";
import axios from "axios";
import MoreInfo from "./components/HomePage/MoreInfo";
import SuccessPage from "./pages/SuccessPage";
import FailPage from "./pages/FailPage";

function App({ token, ready, fetchUser, loading }) {
  const [showResults, setShowResults] = useState(false);
  const [programsList, setProgramsList] = useState([]);
  const [programId, setProgramId] = useState(null);
  const [successPage, setSuccessPage] = useState(false);
  const [failPage, setFailPage] = useState(false);
  console.log(showResults, "app results");
  console.log(programId, "programId App js");
  useEffect(() => {
    fetchUser();
  }, []);

  // useEffect(() => {
  //   setSuccessPage(true);
  // }, [setSuccessPage]);

  useEffect(() => {
    const fetchData = async () => {
      // console.log("object1");
      const result = await axios("/api/programs");
      // console.log(result, "result");
      setProgramsList(result.data.data);
    };

    fetchData();
  }, []);

  // if (!loading && !ready && !token) {
  //   return <p>Loading...</p>;
  // } else {
  return (
    <div>
      {/* {showResults ? <MoreInfo /> : null} */}
      {successPage ? <SuccessPage setSuccessPage={setSuccessPage} /> : null}
      {failPage ? <FailPage setFailPage={setFailPage} /> : null}
      <Router>
        <Routes
          isLoggedIn={token}
          programsList={programsList}
          programId={programId}
          setProgramId={setProgramId}
          showResults={showResults}
          setShowResults={setShowResults}
          successPage={successPage}
          setSuccessPage={setSuccessPage}
          setFailPage={setFailPage}
        />
      </Router>
    </div>
  );
  // }
}
const mapStateToProps = (state) => {
  return {
    ready: state.ready,
    token: state.token,
    loading: state.loading,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: () => dispatch(fetchUser()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
