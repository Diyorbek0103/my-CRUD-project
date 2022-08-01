import React, { useState } from "react";
import Layout from "../../components/layout/Layout";
import { connect } from "react-redux";
import {
  decrementAction,
  incrementAction,
  resetAction,
} from "../../redux/actions/projectAction";

const ConnectCounter = (props) => {
  const { count, incrementFunction, decrementFunction, resetFunction } = props;

  const [value, setValue] = useState(0);

  const increment = (value) => {
    incrementFunction(value);
  };

  const decrement = (value) => {
    decrementFunction(value);
  };

  const reset = () => {
    resetFunction();
    setValue(0);
  };

  return (
    <Layout>
      <div className="row">
        <div className="col-xl-4 offset-4">
          <div className="card mt-5 text-center">
            <div className="card-header bg-dark text-white text-center">
              <h4>Connect-Counter</h4>
            </div>
            <div className="card-body">
              <h2 className="my-2">{count}</h2>
              <div className="d-flex align-items-center">
                <h5>Step: </h5>
                <input
                  value={value}
                  onChange={(e) => setValue(Number(e.target.value))}
                  type="number"
                  placeholder="enter number"
                  className="ms-2 form-control"
                />
              </div>
            </div>
            <div className="card-footer">
              <div className="d-flex justify-content-between">
                <button
                  onClick={() => decrement(value)}
                  className="btn btn-danger"
                >
                  -
                </button>
                <button onClick={() => reset()} className="btn btn-info">
                  Reset
                </button>
                <button
                  onClick={() => increment(value)}
                  className="btn btn-success"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state.counterReducer.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    incrementFunction: (value) => {
      dispatch(incrementAction(value));
    },
    decrementFunction: (value) => {
      dispatch(decrementAction(value));
    },
    resetFunction: () => {
      dispatch(resetAction());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ConnectCounter);
