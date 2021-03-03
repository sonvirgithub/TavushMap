import React, {useEffect} from "react"
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes'
import { connect } from "react-redux";
import { fetchUser } from "./redux";

function App({ token, ready, fetchUser, loading }) {
  useEffect(() => {
    fetchUser();
  }, []);

  // if (!loading && !ready && !token) {
  //   return <p>Loading...</p>;
  // } else {
    return (
      <div >
        <Router>
        <Routes isLoggedIn={token} />
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


