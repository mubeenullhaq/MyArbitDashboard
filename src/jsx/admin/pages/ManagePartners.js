import React, { useState, useMemo, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import Select from "react-select";

import { Dropdown, Button, Modal } from "react-bootstrap";
import DateRangePicker from "react-bootstrap-daterangepicker";

import { useTable, useSortBy } from "react-table";
import { getPartnersAction, updatePartnerAction, blockPartnerAction, partnerSearchAction } from "../../../store/actions/PartnersActions";

import PageTitle from "../../layouts/PageTitle";
import MOCK_DATA from "../components/SortingTable/MOCK_DATA_2.json";

const options3 = [
  { value: "", label: "No Country Selected" },
  { value: "1", label: "Russia" },
  { value: "2", label: "Canada" },
  { value: "3", label: "China" },
  { value: "4", label: "India" },
];

const ManagePartners = (props) => {
  const [editModal, setEditModal] = useState(false);
  const [partner, setPartner] = useState({});
  const [partnerId, setPartnerId] = useState("");

  const dispatch = useDispatch();

  function handleUpdatePartner(e) {
    e.preventDefault();
    dispatch(updatePartnerAction(partner));
    setTimeout(() => {
      dispatch(getPartnersAction());
    }, 2000);
    closeEditModal();
  }
  function handleAction(partner) {
    const status = partner.isBlocked; //console.log(partner.isBlocked);
    const partnerId = partner._id; //console.log(partner._id);
    dispatch(blockPartnerAction(partnerId, status));
    setTimeout(() => {
      dispatch(getPartnersAction());
    }, 2000);
    closeEditModal();
  }

  const openEditModal = (partner) => {
    setEditModal(true);
    const partnerObj = {
      _id: partner._id,
      name: partner.name,
      email: partner.email,
      role: partner.role,
      balance: partner.balance,
      total_staked: partner.total_staked,
    };
    setPartner(partnerObj);
  };

  const handleInputChange = (attr, value) => {
    setPartner((partner) => ({
      ...partner,
      [attr]: value,
    }));
  };
  const handleSelectChange = (selectedOption) => {
    setPartner((partner) => ({
      ...partner,
      ["role"]: selectedOption.label,
    }));
    //console.log(partner.role);
  };

  const closeEditModal = () => {
    setEditModal(false);
  };

  const COLUMNS = [
    {
      Header: "Name",
      Footer: "Name",
      accessor: "name",
    },
    {
      Header: "Email",
      Footer: "Email",
      accessor: "email",
    },
    {
      Header: "Role",
      Footer: "Role",
      accessor: "role",
    },
    {
      Header: "Status",
      Footer: "Status",
      accessor: "isBlocked",
    },
    {
      Header: "Balance",
      Footer: "Balance",
      accessor: "balance",
    },
    {
      Header: "Staked",
      Footer: "Staked",
      accessor: "total_staked",
    },
    {
      Header: "IsReferred",
      Footer: "IsReferred",
      accessor: "is_referred",
    },
    {
      Header: "Joined",
      Footer: "Joined",
      accessor: "created_at",
    },
    {
      Header: "Action",
      Footer: "Action",
      accessor: "action",
      Cell: ({ row }) => (
        <>
          {/* <button class="btn btn-primary shadow btn-xs sharp me-1" onClick={openEditModal}>
            <i class="fas fa-pencil-alt"></i>
          </button> */}
          <a href="#" class="btn btn-primary shadow btn-xs sharp me-3" onClick={() => openEditModal(row.original)}>
            <i class="fas fa-pencil-alt"></i>
          </a>

          <button class="btn btn-danger shadow btn-xs sharp me-1" onClick={() => handleAction(row.original)}>
            <i class="fa fa-trash"></i>
          </button>
        </>
      ),
    },
  ];
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  useEffect(() => {
    dispatch(getPartnersAction());
    console.log(partner.role);
  }, []);

  const tdata = props.partners.partners;
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
  const [country, setCountry] = useState();
  const [isReferred, setIsReferred] = useState(true);
  const [balanceFrom, setBalanceFrom] = useState();
  const [balanceTo, setBalanceTo] = useState();
  const [stakeFrom, setStakeFrom] = useState();
  const [stakeTo, setStakeTo] = useState();
  const handleSelectCountry = (selectedOption) => {
    setCountry(selectedOption.label);
  };

  const handleSearchPartner = (e) => {
    e.preventDefault();
    // Access the selected date range
    console.log("Selected date range:", dateRange);
    dispatch(partnerSearchAction(dateRange, country, balanceFrom, balanceTo, stakeFrom, stakeTo, isReferred));
    // Further processing or submission logic
  };

  const handleDateRangeChange = (startDate, endDate) => {
    // Update the selected date range in state
    setDateRange({ startDate, endDate });
    console.log(dateRange);
  };

  const HandleClearFilters = () => {
    dispatch(getPartnersAction());
  };

  const formatDate = (dateTimeString) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZone: "UTC",
    };
    const formattedDate = new Date(dateTimeString).toLocaleString("en-US", options);
    return formattedDate;
  };

  return (
    <>
      {/******************************* Modal to update Partner Data *****************************************/}
      <Modal className="modal fade" show={editModal} onHide={() => closeEditModal()}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Create New Pool</h5>
            <Button variant="" type="button" className="close" x data-dismiss="modal" onClick={() => closeEditModal()}>
              <span>×</span>
            </Button>
          </div>
          <div className="modal-body">
            {/* Form for Pool Creation */}
            <form className="comment-form" onSubmit={(e) => handleUpdatePartner(e)}>
              <div className="row">
                <div className="col-lg-8">
                  <div className="form-group mb-3">
                    <label htmlFor="author" className="text-black font-w600">
                      {" "}
                      Name <span className="required">*</span>
                      {""}
                    </label>
                    <input type="text" value={partner.name} className="form-control" onChange={(e) => handleInputChange("name", e.target.value)} name="partnerName" placeholder="Enter Pool Name" />
                    {/* <input type="text" value={pool._id} style={{ visibility: "hidden" }} name="poolId" placeholder="POOL_ID" /> */}

                    {/* {errors.poolName && <div className="text-danger fs-12">{errors.poolName}</div>} */}
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="form-group mb-3">
                    <label htmlFor="author" className="text-black font-w600">
                      {" "}
                      Email <span className="required">*</span>
                      {""}
                    </label>
                    <input type="text" value={partner.email} className="form-control" onChange={(e) => handleInputChange("email", e.target.value)} name="poolName" placeholder="Enter Pool Name" />
                    {/* {errors.poolName && <div className="text-danger fs-12">{errors.poolName}</div>} */}
                  </div>
                </div>

                <div className="col-lg-8">
                  <div className="form-group mb-3">
                    <label htmlFor="author" className="text-black font-w600">
                      Role
                    </label>
                    <Select
                      options={[
                        { value: "1", label: "admin" },
                        { value: "2", label: "partner" },
                      ]}
                      className="custom-react-select"
                      defaultValue={partner.role}
                      onChange={handleSelectChange}
                      isSearchable={true}
                      placeholder={"Select Role"}
                    />
                    {/* {errors.poolName && <div className="text-danger fs-12">{errors.poolName}</div>} */}
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="form-group mb-3">
                    <label htmlFor="author" className="text-black font-w600">
                      {" "}
                      Balance <span className="required">*</span>
                      {""}
                    </label>
                    <input
                      type="number"
                      value={partner.balance}
                      className="form-control"
                      onChange={(e) => handleInputChange("balance", e.target.value)}
                      name="poolName"
                      placeholder="Enter Pool Name"
                    />
                    {/* {errors.poolName && <div className="text-danger fs-12">{errors.poolName}</div>} */}
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="form-group mb-3">
                    <label htmlFor="author" className="text-black font-w600">
                      {" "}
                      Staked <span className="required">*</span>
                      {""}
                    </label>
                    <input
                      type="number"
                      value={partner.total_staked}
                      className="form-control"
                      onChange={(e) => handleInputChange("total_staked", e.target.value)}
                      name="poolName"
                      placeholder="Enter Pool Name"
                    />
                    {/* {errors.poolName && <div className="text-danger fs-12">{errors.poolName}</div>} */}
                  </div>
                </div>
                <input
                  type="text"
                  value={partner.role}
                  style={{ visibility: "hidden" }}
                  className="form-control"
                  onChange={(e) => handleInputChange("role", e.target.value)}
                  name="poolName"
                  placeholder="Enter Pool Name"
                />
                <div className="col-lg-12">
                  <div className="form-group mb-3">
                    <input type="submit" value="Update" className="submit btn btn-primary" name="submit" />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Modal>
      {/******************************* Filters *****************************************/}
      <div className="row">
        <div className="card">
          <div className="card-body">
            <h1>Filter By</h1>
            <form onSubmit={handleSearchPartner}>
              <div className="row">
                <div className="col">
                  <p className="mb-1">Date Range</p>
                  <DateRangePicker
                    initialSettings={{
                      showDropdowns: true,
                      showYearDropdown: true,
                    }}
                    onApply={(event, picker) => {
                      console.log("aaa");
                      handleDateRangeChange(picker.startDate, picker.endDate);
                    }}
                  >
                    <input type="text" className="form-control input-daterange-timepicker" />
                  </DateRangePicker>
                </div>
                <div className="col">
                  <label className="form-label">Country</label>
                  <Select options={options3} onChange={handleSelectCountry} className="custom-react-select" defaultValue={""} isSearchable={true} placeholder={"Select Country"} />
                </div>
                <div className="col">
                  <div className="row">
                    <div className="col">
                      <label className="form-label">Balance From</label>
                      <input type="number" value={balanceFrom} className="form-control" onChange={(e) => setBalanceFrom(e.target.value)} defaultValue={""} placeholder="" />
                    </div>

                    <div className="col">
                      <label className="form-label">Balance to</label>
                      <input value={balanceTo} className="form-control" onChange={(e) => setBalanceTo(e.target.value)} defaultValue={""} placeholder="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="row">
                    <div className="col">
                      <label className="form-label">Stake From</label>
                      <input value={stakeFrom} className="form-control" onChange={(e) => setStakeFrom(e.target.value)} defaultValue={""} placeholder="" />
                    </div>

                    <div className="col">
                      <label className="form-label">Stake to</label>
                      <input value={stakeTo} className="form-control" onChange={(e) => setStakeTo(e.target.value)} defaultValue={""} placeholder="" />
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="form-check form-check-inline"></div>
                  <div className="form-check mb-2">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      onChange={(e) => {
                        setIsReferred(e.target.checked);
                        console.log(isReferred);
                      }}
                      id="check1"
                      defaultChecked={isReferred}
                    />
                    <label className="form-check-label" htmlFor="check1">
                      Partners Signed Up Using Referal Code
                    </label>
                  </div>
                </div>
                <div className="col">
                  <div className="form-check form-check-inline"></div>
                  <div className="form-check mb-2">
                    <button href="#" type="submit" class="btn btn-primary shadow " onClick={() => console.log("clicked")}>
                      Search
                    </button>
                  </div>
                </div>
                <div className="col">
                  <div className="form-check form-check-inline"></div>
                  <div className="form-check mb-2">
                    <button type="button" href="#" class="btn btn-primary shadow " onClick={HandleClearFilters}>
                      Clear Filters
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/******************************* Table to show Partners *****************************************/}
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
                            if (cell.render("Cell").props.column.Header == "Status" && cell.render("Cell").props.value === true) {
                              return (
                                <td class="text-danger" {...cell.getCellProps()}>
                                  {" "}
                                  Blocked{" "}
                                </td>
                              );
                            } else if (cell.render("Cell").props.column.Header == "Status" && cell.render("Cell").props.value === false) {
                              return (
                                <td class="text-success" {...cell.getCellProps()}>
                                  {" "}
                                  Not Blocked{" "}
                                </td>
                              );
                            } else if (cell.render("Cell").props.column.Header == "IsReferred" && cell.render("Cell").props.value === true) {
                              return (
                                <td class="text-success" {...cell.getCellProps()}>
                                  {" "}
                                  Reffered{" "}
                                </td>
                              );
                            } else if (cell.render("Cell").props.column.Header == "IsReferred" && cell.render("Cell").props.value === false) {
                              return (
                                <td class="text-danger" {...cell.getCellProps()}>
                                  {" "}
                                  Not Reffered{" "}
                                </td>
                              );
                            } else if (cell.render("Cell").props.cell.column.Header === "Joined") {
                              // if (cell.render("Cell").props.value === "Created At") {
                              return <td {...cell.getCellProps()}>{formatDate(cell.render("Cell").props.value)}</td>;
                            }
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
  partners: state.partners,
  showLoading: state.showLoading,
  error: state.error,
});
export default connect(mapStateToProps)(ManagePartners);
