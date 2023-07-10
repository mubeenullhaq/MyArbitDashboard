import React, { Fragment } from "react";

const Pools = () => {
  return (
    <Fragment>
      <div className="col-xl-12 col-lg-12 col-xxl-12 col-sm-12">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">Recent Payments Queue</h4>
          </div>
          <div className="card-body">
            <div className="table-responsive recentOrderTable">
              <table className="table verticle-middle table-responsive-md">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Min-Stake</th>
                    <th scope="col">Profit</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Pool 1</td>
                    <td>500</td>
                    <td>2.5%</td>
                    <td>
                      <a
                        class="btn btn-primary btn-xxs shadow"
                        href="/react/demo/widget-basic"
                      >
                        Stake
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>Pool 2</td>
                    <td>800</td>
                    <td>9%</td>
                    <td>
                      <a
                        class="btn btn-primary btn-xxs shadow"
                        href="/react/demo/widget-basic"
                      >
                        Stake
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>Pool 3</td>
                    <td>1000</td>
                    <td>20%</td>
                    <td>
                      <a
                        class="btn btn-primary btn-xxs shadow"
                        href="/react/demo/widget-basic"
                      >
                        Stake
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>Pool 4</td>
                    <td>1500</td>
                    <td>33%</td>
                    <td>
                      <a
                        class="btn btn-primary btn-xxs shadow"
                        href="/react/demo/widget-basic"
                      >
                        Stake
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>Pool 5</td>
                    <td>2000</td>
                    <td>70%</td>
                    <td>
                      <a
                        class="btn btn-primary btn-xxs shadow"
                        href="/react/demo/widget-basic"
                      >
                        Stake
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Pools;
