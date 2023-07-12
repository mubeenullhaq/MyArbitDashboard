export const COLUMNS = [
  {
    Header: "Type",
    Footer: "Type",
    accessor: "type",
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
    Header: "Created At",
    Footer: "Created At",
    accessor: "created_at",
  },
  // {
  //   Header: "Country",
  //   Footer: "Country",
  //   accessor: "country",
  // },
  // {
  //   Header: "Phone",
  //   Footer: "Phone",
  //   accessor: "phone",
  // },
  // {
  //   Header: "Age",
  //   Footer: "Phone",
  //   accessor: "age",
  // },
];

export const GROUPED_COLUMNS = [
  {
    Header: "Id",
    Footer: "Id",
    accessor: "id",
  },
  {
    Header: "Name",
    Footer: "Name",
    columns: [
      {
        Header: "First Name",
        Footer: "First Name",
        accessor: "first_name",
      },
      {
        Header: "Last Name",
        Footer: "Last Name",
        accessor: "last_name",
      },
    ],
  },
  {
    Header: "Info",
    Footer: "Info",
    columns: [
      {
        Header: "Date of  Birth",
        Footer: "Date of  Birth",
        accessor: "date_of_birth",
      },
      {
        Header: "Country",
        Footer: "Country",
        accessor: "country",
      },
      {
        Header: "Phone",
        Footer: "Phone",
        accessor: "phone",
      },
    ],
  },
];
