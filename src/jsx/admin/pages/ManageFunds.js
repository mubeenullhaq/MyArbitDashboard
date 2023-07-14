import React, { useState, useMemo, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { Dropdown, Button, Modal } from "react-bootstrap";

//import { Dropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Select from "react-select";

import user from "./../../../images/profile/user.png";

import { useTable, useSortBy } from "react-table";
import { getWithdrawlRequestTransactionsAction, updateWithdrawRequestAction } from "../../../store/actions/TransactionsActions";

import MOCK_DATA from "../components/SortingTable/MOCK_DATA_2.json";
//import { COLUMNS } from "../components/SortingTable/Columns"

const options3 = [
  { value: "1", label: "Russia" },
  { value: "2", label: "Canada" },
  { value: "3", label: "China" },
  { value: "4", label: "India" },
];

const ManageFunds = (props) => {
  const COLUMNS = [
    {
      Header: "Type",
      Footer: "Type",
      accessor: "type",
    },
    {
      Header: "Name",
      Footer: "Name",
      accessor: "partner_id.name",
    },
    {
      Header: "Email",
      Footer: "Email",
      accessor: "partner_id.email",
    },
    {
      Header: "Wallet",
      Footer: "Wallet",
      accessor: "partner_id.wallet_address",
    },

    {
      Header: "Status",
      Footer: "Status",
      accessor: "status",
    },
    {
      Header: "Amount",
      Footer: "Amount",
      accessor: "amount",
    },
    {
      Header: "Balance",
      Footer: "Balance",
      accessor: "partner_id.balance",
    },
    {
      Header: "Created At",
      Footer: "Created At",
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
        </>
      ),
    },
  ];
  const [editModal, setEditModal] = useState(false);
  const [transactionType, setTransactionType] = useState("");
  const [partnerId, setPartnerId] = useState("");
  const [partnerName, setPartnerName] = useState("");
  const [partnerEmail, setPartnerEmail] = useState("");
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [partnerBalance, setPartnerBalance] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);
  const dispatch = useDispatch();

  const openEditModal = (transaction) => {
    setEditModal(true);
    setTransactionId(transaction._id);
    setTransactionType(transaction.type);
    setPartnerId(transaction.partner_id._id);
    setPartnerName(transaction.partner_id.name);
    setPartnerEmail(transaction.partner_id.email);
    setWithdrawAmount(transaction.amount);
    setPartnerBalance(transaction.partner_id.balance);
  };

  const closeEditModal = () => {
    setEditModal(false);
  };

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

  const handleUpdateTransaction = (e) => {
    e.preventDefault();
    dispatch(updateWithdrawRequestAction(transactionId, partnerId));
    setTimeout(() => {
      dispatch(getWithdrawlRequestTransactionsAction());
    }, 2000);
    closeEditModal();
  };

  const handleDateRangeChange = (startDate, endDate) => {
    // Update the selected date range in state
    setDateRange({ startDate, endDate });
  };

  return (
    <>
      {/******************************** Update Transaction Status Modal ***************************/}
      <div className="row">
        <Modal className="modal fade" show={editModal} onHide={() => closeEditModal()}>
          <div className="modal-content" style={{ overflow: "hidden" }}>
            <div className="modal-header">
              <h5 className="modal-title">Create New Pool</h5>
              <Button variant="" type="button" className="close" x data-dismiss="modal" onClick={() => closeEditModal()}>
                <span>×</span>
              </Button>
            </div>
            <div className="modal-body">
              {/* Form for Pool Creation */}
              <form className="comment-form" onSubmit={(e) => handleUpdateTransaction(e)}>
                {/* <div className="row"> */}
                <div className="row">
                  <div className="col">
                    <div className="form-group mb-3">
                      <h3 htmlFor="author" className="text-black font-w600">
                        {" "}
                        Are you sure you want to approve the following transaction?
                        {""}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <table className="table verticle-middle table-responsive-md">
                      <thead>
                        <tr>
                          <th scope="col">Type</th>
                          <th scope="col">Name</th>
                          {/* <th scope="col">Email</th> */}
                          <th scope="col">Amount</th>
                          <th scope="col">Balance</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{transactionType}</td>
                          <td>{partnerName}</td>
                          {/* <td>{partnerEmail}</td> */}
                          <td>{withdrawAmount}</td>
                          <td> {partnerBalance}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="col-lg-12 text-center">
                  <div class="row justify-content-center">
                    <div class="col">
                      <div className="form-group mb-3">
                        <input type="submit" value="Approve" className="submit btn btn-success" name="submit" />
                      </div>
                    </div>
                    <div className="col">
                      <div className="form-group mb-3">
                        <input type="button" value="Don't Approve" className="submit btn btn-danger" onClick={() => closeEditModal()} />
                      </div>
                    </div>
                  </div>
                </div>
                {/* </div> */}
              </form>
            </div>
          </div>
        </Modal>
      </div>

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
