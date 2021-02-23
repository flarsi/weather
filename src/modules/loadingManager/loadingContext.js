import React, { createContext } from 'react';
import { connect } from 'react-redux';
import { setLoading } from './actions';
import LoadingScreen from "../../components/LoadingScreen";

const LoadingContext = createContext({});

const Provider = ({ children, loading, setLoading }) => {

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <LoadingContext.Provider
      value={{
        loading,
        setLoading
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
};

const mapStateToProps = state => ({
  loading: state.loadingManager.loading
});

const mapDispatchToProps = dispatch => ({
  setLoading: status => dispatch(setLoading(status))
});

const LoadingProvider = connect(mapStateToProps, mapDispatchToProps)(Provider);


export {
  LoadingContext,
  LoadingProvider
};
