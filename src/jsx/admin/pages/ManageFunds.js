import React, { useState, useMemo, useEffect } from "react";
import { connect, useDispatch } from "react-redux";

//import { Dropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Select from "react-select";

import user from "./../../../images/profile/user.png";

import { useTable, useSortBy } from "react-table";
import { getWithdrawlRequestTransactionsAction } from "../../../store/actions/TransactionsActions";

import MOCK_DATA from "../components/SortingTable/MOCK_DATA_2.json";
import { COLUMNS } from "../components/SortingTable/Columns";

const options3 = [
  { value: "1", label: "Russia" },
  { value: "2", label: "Canada" },
  { value: "3", label: "China" },
  { value: "4", label: "India" },
];

const ManageFunds = (props) => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Component mounted");
    dispatch(getWithdrawlRequestTransactionsAction());
  }, []);
  const tdata = props.transactions.transactions;
  const tableInstance = useTable({ columns, data: tdata }, useSortBy);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    //footerGroups,
    rows,
    prepareRow,
  } = tableInstance;

  // const [selectOption , setSelectOption] = useState('Gender');
  const [dateRange, setDateRange] = useState({ startDate: null, endDate: null });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Access the selected date range
    console.log("Selected date range:", dateRange);
    // Further processing or submission logic
  };

  const handleDateRangeChange = (startDate, endDate) => {
    // Update the selected date range in state
    setDateRange({ startDate, endDate });
  };

  return (
    <>
      {/******************************** Cards to show Totals ***************************/}
      <div className="row">
        <div className="col">
          <div class="container text-center">
            <div class="row">
              <div class="col">
                <div className="widget-stat card bg-secondary ">
                  <div className="card-body p-4">
                    <div className="media">
                      <span className="me-3">
                        <i className="la la-dollar"></i>
                      </span>
                      <div className="media-body text-white">
                        <p className="mb-1">Total Deposit</p>
                        <h3 className="text-white">{user.balance}$</h3>
                        <div className="progress mb-2 bg-secondary">
                          <div className="progress-bar progress-animated bg-white" style={{ width: "30%" }}></div>
                        </div>
                        <small>30% Increase in 30 Days</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div className="widget-stat card bg-secondary ">
                  <div className="card-body p-4">
                    <div className="media">
                      <span className="me-3">
                        <i className="la la-dollar"></i>
                      </span>
                      <div className="media-body text-white">
                        <p className="mb-1">Owe Sum</p>
                        <h3 className="text-white">{user.total_staked}$</h3>
                        <div className="progress mb-2 bg-secondary">
                          <div className="progress-bar progress-animated bg-white" style={{ width: "30%" }}></div>
                        </div>
                        <small>30% Increase in 30 Days</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div className="widget-stat card bg-secondary ">
                  <div className="card-body p-4">
                    <div className="media">
                      <span className="me-3">
                        <i className="la la-dollar"></i>
                      </span>
                      <div className="media-body text-white">
                        <p className="mb-1">Total Withdraws</p>
                        <h3 className="text-white">{user.total_staked}$</h3>
                        <div className="progress mb-2 bg-secondary">
                          <div className="progress-bar progress-animated bg-white" style={{ width: "30%" }}></div>
                        </div>
                        <small>30% Increase in 30 Days</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <div className="widget-stat card bg-secondary ">
                  <div className="card-body p-4">
                    <div className="media">
                      <span className="me-3">
                        <i className="la la-dollar"></i>
                      </span>
                      <div className="media-body text-white">
                        <p className="mb-1">Total Withdraws In-Process </p>
                        <h3 className="text-white">{user.total_staked}$</h3>
                        <div className="progress mb-2 bg-secondary">
                          <div className="progress-bar progress-animated bg-white" style={{ width: "30%" }}></div>
                        </div>
                        <small>30% Increase in 30 Days</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col d-flex  align-items-center">
                <button href="#" class="btn btn-primary shadow">
                  Refresh Totals
                </button>
              </div>
              <div className="col"></div>
            </div>
          </div>
        </div>
      </div>

      {/******************************** Withdraw Requests Table ***************************/}
      <div className="row">
        <div className="col">
          <div className="card profile-card card-bx m-b30">
            <div className="card-header">
              <h6 className="title">Withdraw Requests</h6>
            </div>
            <div className="table-responsive">
              <div className="dataTables_wrapper">
                <table {...getTableProps()} className="table dataTable display">
                  <thead>
                    {headerGroups.map((headerGroup) => (
                      <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                          <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                            {column.render("Header")}
                            <span className="ml-1">
                              {column.isSorted ? (
                                column.isSortedDesc ? (
                                  <i className="fa fa-arrow-down ms-2 fs-14" style={{ opacity: "0.7" }} />
                                ) : (
                                  <i className="fa fa-arrow-up ms-2 fs-14" style={{ opacity: "0.7" }} />
                                )
                              ) : (
                                <i className="fa fa-sort ms-2 fs-14" style={{ opacity: "0.3" }} />
                              )}
                            </span>
                          </th>
                        ))}
                      </tr>
                    ))}
                  </thead>
                  <tbody {...getTableBodyProps()}>
                    {rows.map((row) => {
                      prepareRow(row);
                      return (
                        <tr {...row.getRowProps()}>
                          {row.cells.map((cell) => {
                            return <td {...cell.getCellProps()}> {cell.render("Cell")} </td>;
                          })}
                        </tr>
                      );
                    })}
                  </tbody>
                  {/* This is only for footer if u require */}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const mapStateToProps = (state) => ({
  transactions: state.transactions,
  showLoading: state.showLoading,
  error: state.error,
});
export default connect(mapStateToProps)(ManageFunds);
