import React, { useState,useEffect, Fragment, Suspense } from "react";
import { connect, useDispatch } from 'react-redux';
import { getPoolsAction} from '../../store/actions/PoolsActions';

const Pools = (props) => {
  const [pools, setPools] = useState([]);
  const [email, setEmail] = useState('mubeenullhaq@gmail.com');
    let errorsObj = { email: '', password: '' };
    const [errors, setErrors] = useState(errorsObj);
    const [password, setPassword] = useState('12345');
    const dispatch = useDispatch();
    useEffect(() => {
      let error = false;
        const errorObj = { ...errorsObj };
        setErrors(errorObj);
          if (error) {
			    return ;
		    }
		
		//dispatch(loadingToggleAction(true));
		const myPools =  dispatch(getPoolsAction());
    setPools(myPools);
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
            <h4 className="card-title">Investment Pools List</h4>
          </div>
          <div className="card-body">
            <div className="table-responsive recentOrderTable">
              <table className="table verticle-middle table-responsive-md">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Duration</th>
                    <th scope="col">Min-Stake</th>
                    <th scope="col">Profit</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                {props.pools.pools.map((pool) => (
                   <tr key={pool.id}>
                     <td>{pool.name}</td>
                     <td>{pool.duration}</td>
                     <td>{pool.min_stake}</td>
                     <td>{pool.profit}</td>
                     <td><a class="btn btn-primary btn-xxs shadow" href="/react/demo/widget-basic">Stake</a></td>
                     {/* Render other table cells */}
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
  pools: state.pools,
  isLoading: state.isLoading,
  error: state.error,
});



export default connect(mapStateToProps)(Pools);
