import React, { useState } from "react";
import Layout from "../../components/layout/Layout";
import { useSelector, useDispatch } from "react-redux";
import {
  hookDecrementAction,
  hookIncrementAction,
  hookResetAction,
} from "../../redux/actions/hookCounterAction";
const HookCounter = () => {
  const [value, setValue] = useState(0);
  const { count } = useSelector((state) => state.hookCounterReducer);
  const dispatch = useDispatch();

  const decrement = (value) => {
    dispatch(hookDecrementAction(value));
  };

  const increment = (value) => {
    dispatch(hookIncrementAction(value));
  };

  const reset = () => {
    dispatch(hookResetAction());
    setValue(0);
  };
  return (
    <Layout>
      <div className="row">
        <div className="col-xl-4 offset-4">
          <div className="card mt-5 text-center">
            <div className="card-header bg-dark text-white text-center">
              <h4>Hook-Counter</h4>
            </div>
            <div className="card-body">
              <h2 className="my-2">{count}</h2>
              <div className="d-flex align-items-center">
                <h5>Step: </h5>
                <input
                    value={value}
                  onChange={(e) => setValue(parseInt(e.target.value))}
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

export default HookCounter;
