import React, { useState, useMemo } from "react";
//import { Dropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Select from "react-select";

import user from "./../../../images/profile/user.png";
import DateRangePicker from "react-bootstrap-daterangepicker";

import { useTable, useSortBy } from "react-table";
import PageTitle from "../../layouts/PageTitle";
import MOCK_DATA from "../components/SortingTable/MOCK_DATA_2.json";
import { COLUMNS } from "../components/SortingTable/Columns";

const options3 = [
  { value: "1", label: "Russia" },
  { value: "2", label: "Canada" },
  { value: "3", label: "China" },
  { value: "4", label: "India" },
];

const EditProfile = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  const tableInstance = useTable({ columns, data }, useSortBy);

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
      <div className="row">
        <div className="card">
          <div className="card-body">
            <h1>Filter By</h1>
            <form onSubmit={handleFormSubmit}>
              <div className="row">
                <div className="col">
                  <p className="mb-1">Date Range</p>
                  <DateRangePicker
                    initialSettings={{
                      startDate: "10/5/2022",
                      endDate: "3/6/2022",
                      showDropdowns: true,
                      showYearDropdown: true,
                    }}
                    onApply={(event, picker) => handleDateRangeChange(picker.startDate, picker.endDate)}
                  >
                    <input type="text" className="form-control input-daterange-timepicker" />
                  </DateRangePicker>
                </div>
                <div className="col">
                  <label className="form-label">Country</label>
                  <Select options={options3} className="custom-react-select" defaultValue={""} isSearchable={true} placeholder={"Select Country"} />
                </div>
                <div className="col">
                  <div className="row">
                    <div className="col">
                      <label className="form-label">Balance From</label>
                      <input type="number" className="form-control" defaultValue={""} placeholder="" />
                    </div>

                    <div className="col">
                      <label className="form-label">Balance to</label>
                      <input type="number" className="form-control" defaultValue="" placeholder="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="row">
                    <div className="col">
                      <label className="form-label">Stake From</label>
                      <input type="number" className="form-control" defaultValue={""} placeholder="" />
                    </div>

                    <div className="col">
                      <label className="form-label">Stake to</label>
                      <input type="number" className="form-control" defaultValue="" placeholder="" />
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="form-check form-check-inline"></div>
                  <div className="form-check mb-2">
                    <input type="checkbox" className="form-check-input" id="check1" value="" defaultChecked />
                    <label className="form-check-label" htmlFor="check1">
                      User Signed Up Using Referal Code
                    </label>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Table to show Partners */}
      <div className="row">
        <div className="col">
          <div className="card profile-card card-bx m-b30">
            <div className="card-header">
              <h6 className="title">Partners</h6>
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
export default EditProfile;
