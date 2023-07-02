import React, { useState,useEffect, Fragment, Suspense } from "react";
import { connect, useDispatch } from 'react-redux';
import { getStakingsHistoryAction, loadingToggleAction} from '../../store/actions/ManageStakingsAction';

const StakeHistory = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
  dispatch(loadingToggleAction(true));
  dispatch(getStakingsHistoryAction());
  },[]);
return (
  <Fragment>
    <Suspense fallback={
            <div id="preloader">
                <div className="sk-three-bounce">
                    <div className="sk-child sk-bounce1"></div>
                    <div className="sk-child sk-bounce2"></div>
                    <div className="sk-child sk-bounce3"></div>
                </div>
            </div>  
            }
        >
    <div className="col-xl-12 col-lg-12 col-xxl-12 col-sm-12">
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">Stakings History</h4>
        </div>
        <div className="card-body">
          <div className="table-responsive recentOrderTable">
            <table className="table verticle-middle table-responsive-md">
              <thead>
                <tr>
                  <th scope="col">Pool Name</th>
                  <th scope="col">Duration</th>
                  <th scope="col">Profit</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
              {props.stakings.stakings && props.stakings.stakings.map((staking) => (
                 <tr key={staking.id}>
                   <td>{staking.pool_info.name}</td>
                   <td>{staking.pool_info.duration}</td>
                   <td>{staking.pool_info.profit}</td>
                   <td><a class="btn btn-primary btn-xxs shadow" href="/react/demo/widget-basic">Stake</a></td>
                 
                 </tr>
               ))
              }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </Suspense>  
  </Fragment>
);
};

const mapStateToProps = (state) => ({
  stakings: state.stakings,
  isLoading: state.isLoading,
  error: state.error,
});


export default connect(mapStateToProps)(StakeHistory);