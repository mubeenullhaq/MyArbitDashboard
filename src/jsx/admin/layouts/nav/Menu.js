export const MenuList = [
  {
    title: "Manage Pools",
    //classsChange: 'mm-collapse',
    iconStyle: <i className="material-icons">trending_up</i>,
    to: "pools",
  },
  {
    title: " Manage Partners",
    //classsChange: 'mm-collapse',

    iconStyle: (
      <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-person-vcard-fill" viewBox="0 0 16 16">
        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm9 1.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0-.5.5ZM9 8a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4A.5.5 0 0 0 9 8Zm1 2.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.5.5Zm-1 2C9 10.567 7.21 9 5 9c-2.086 0-3.8 1.398-3.984 3.181A1 1 0 0 0 2 13h6.96c.026-.163.04-.33.04-.5ZM7 6a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z" />
      </svg>
    ), //<i class="bi bi-person-vcard-fill"></i>,//<i className="bi bi-clock-history"></i>,
    to: "manage-partners",
  },
  // {
  //   title: "Manage Stakings",
  //   //classsChange: 'mm-collapse',
  //   iconStyle: <i className="bi bi-stack"></i>,
  //   to: "manage-stakings",
  // },
  // {
  //   title: "Profit Calculator",
  //   //classsChange: 'mm-collapse',
  //   iconStyle: <i className="bi bi-calculator-fill"></i>,
  //   to: "calculator",
  // },
  // {
  //   title: "Stake History",
  //   //classsChange: 'mm-collapse',
  //   iconStyle: <i className="bi bi-clock-history"></i>,
  //   to: "stake-history",
  // },
  // {
  //   title: " Transactions",
  //   //classsChange: 'mm-collapse',
  //   iconStyle: (
  //     <svg
  //       xmlns="http://www.w3.org/2000/svg"
  //       width="16"
  //       height="16"
  //       fill="currentColor"
  //       class="bi bi-bank"
  //       viewBox="0 0 16 16"
  //     >
  //       <path d="m8 0 6.61 3h.89a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v7a.5.5 0 0 1 .485.38l.5 2a.498.498 0 0 1-.485.62H.5a.498.498 0 0 1-.485-.62l.5-2A.501.501 0 0 1 1 13V6H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 3h.89L8 0ZM3.777 3h8.447L8 1 3.777 3ZM2 6v7h1V6H2Zm2 0v7h2.5V6H4Zm3.5 0v7h1V6h-1Zm2 0v7H12V6H9.5ZM13 6v7h1V6h-1Zm2-1V4H1v1h14Zm-.39 9H1.39l-.25 1h13.72l-.25-1Z" />
  //     </svg>
  //   ), //<i className="bi bi-bank"></i>,
  //   to: "transactions",
  // },

  // //Dashboard
  // {
  //     title: 'Dashboard',
  //     classsChange: 'mm-collapse',
  //     iconStyle: <i className="material-icons">grid_view</i>,
  //     content: [

  //         {
  //             title: 'Dashboard Light',
  //             to: 'dashboard',
  //         },
  //         {
  //             title: 'Dashboard Dark',
  //             to: 'dashboard-dark',

  //         },
  //         {
  //             title: 'Dashboard-2',
  //             to: 'index-1',

  //         },
  //         {
  //             title: 'Dashboard-3',
  //             to: 'index-3',

  //         },
  //         {
  //             title: 'Dashboard-4',
  //             to: 'index-4',

  //         },
  // 		{
  //             title: 'Dashboard-5',
  //             to: 'index-5',

  //         },

  //     ],
  // },
  // //Trading
  // {
  //     title: 'Trading',
  //     classsChange: 'mm-collapse',
  //     iconStyle: <i className="material-icons">trending_up</i>,
  //     content: [
  //         {
  //             title: 'Market',
  //             to: 'market',
  //         },
  //         {
  //             title: 'ICO Listing',
  //             to: 'ico-listing',
  //         },
  //         {
  //             title: 'P2P',
  //             to: 'p2p',
  //         },
  //         {
  //             title: 'Future',
  //             to: 'future',
  //         },
  // 		{
  //             title: 'Intraday Trading',
  //             to: 'intraday-trading',
  //         },
  //     ]
  // },
  // //Crypto
  // {
  //     title: 'Crypto',
  //     classsChange: 'mm-collapse',
  //     iconStyle: <i className="material-icons">currency_bitcoin</i>,
  //     content: [
  //         {
  //             title: 'Market Watch',
  //             to: 'crypto',
  //         },
  //         {
  //             title: 'ICO Listing Filter',
  //             to: 'ico-listing-filter',
  //         },
  //         {
  //             title: 'Coin Details',
  //             to: 'coin-details',
  //         },
  //         {
  //             title: 'Exchange',
  //             to: 'exchange',
  //         },
  // 		{
  //             title: 'Banking',
  //             to: 'banking',
  //         },
  //     ]
  // },
  // //Reports
  // {
  //     title: 'Reports',
  //     classsChange: 'mm-collapse',
  //     iconStyle: <i className="material-icons">description</i>,
  //     content: [
  //         {
  //             title:'History',
  //             to: 'history'
  //         },
  //         {
  //             title:'Orders',
  //             to: 'orders'
  //         },
  //         {
  //             title:'Report',
  //             to: 'reports'
  //         },
  // 		{
  //             title:'User',
  //             to: 'user'
  //         },
  // 		{
  //             title:'Contacts',
  //             to: 'contact'
  //         },
  // 		{
  //             title:'Activity',
  //             to: 'activity'
  //         },
  //     ],
  // },

  // //Apps
  // {
  //     title: 'Apps',
  //     classsChange: 'mm-collapse',
  //     iconStyle: <i className="material-icons"> app_registration </i>,
  //     content: [
  //         {
  //             title: 'Profile',
  //             to: 'app-profile'
  //         },
  //         {
  //             title: 'Edit Profile',
  //             to: 'edit-profile'
  //         },
  //         {
  //             title: 'Post Details',
  //             to: 'post-details'
  //         },
  //         {
  //             title: 'Email',
  //             //to: './',
  //             hasMenu : true,
  //             content: [
  //                 {
  //                     title: 'Compose',
  //                     to: 'email-compose',
  //                 },
  //                 {
  //                     title: 'Index',
  //                     to: 'email-inbox',
  //                 },
  //                 {
  //                     title: 'Read',
  //                     to: 'email-read',
  //                 }
  //             ],
  //         },
  //         {
  //             title:'Calendar',
  //             to: 'app-calender'
  //         },
  //         {
  //             title: 'Shop',
  //             //to: './',
  //             hasMenu : true,
  //             content: [
  //                 {
  //                     title: 'Product Grid',
  //                     to: 'ecom-product-grid',
  //                 },
  //                 {
  //                     title: 'Product List',
  //                     to: 'ecom-product-list',
  //                 },
  //                 {
  //                     title: 'Product Details',
  //                     to: 'ecom-product-detail',
  //                 },
  //                 {
  //                     title: 'Order',
  //                     to: 'ecom-product-order',
  //                 },
  //                 {
  //                     title: 'Checkout',
  //                     to: 'ecom-checkout',
  //                 },
  //                 {
  //                     title: 'Invoice',
  //                     to: 'ecom-invoice',
  //                 },
  //                 {
  //                     title: 'Customers',
  //                     to: 'ecom-customers',
  //                 },
  //             ],
  //         },
  //     ],
  // },
  // //Charts
  // {
  //     title: 'Charts',
  //     classsChange: 'mm-collapse',
  //     iconStyle: <i className="material-icons"> assessment </i>,
  //     content: [

  //         {
  //             title: 'RechartJs',
  //             to: 'chart-rechart',
  //         },
  //         {
  //             title: 'Chartjs',
  //             to: 'chart-chartjs',
  //         },
  //         {
  //             title: 'Sparkline',
  //             to: 'chart-sparkline',
  //         },
  //         {
  //             title: 'Apexchart',
  //             to: 'chart-apexchart',
  //         },
  //     ]
  // },
  // //Boosttrap
  // {
  //     title: 'Bootstrap',
  //     classsChange: 'mm-collapse',
  //     iconStyle: <i className="material-icons"> favorite </i>,
  //     content: [
  //         {
  //             title: 'Accordion',
  //             to: 'ui-accordion',
  //         },
  //         {
  //             title: 'Alert',
  //             to: 'ui-alert',
  //         },
  //         {
  //             title: 'Badge',
  //             to: 'ui-badge',
  //         },
  //         {
  //             title: 'Button',
  //             to: 'ui-button',
  //         },
  //         {
  //             title: 'Modal',
  //             to: 'ui-modal',
  //         },
  //         {
  //             title: 'Button Group',
  //             to: 'ui-button-group',
  //         },
  //         {
  //             title: 'List Group',
  //             to: 'ui-list-group',
  //         },
  //         {
  //             title: 'Cards',
  //             to: 'ui-card',
  //         },
  //         {
  //             title: 'Carousel',
  //             to: 'ui-carousel',
  //         },
  //         {
  //             title: 'Dropdown',
  //             to: 'ui-dropdown',
  //         },
  //         {
  //             title: 'Popover',
  //             to: 'ui-popover',
  //         },
  //         {
  //             title: 'Progressbar',
  //             to: 'ui-progressbar',
  //         },
  //         {
  //             title: 'Tab',
  //             to: 'ui-tab',
  //         },
  //         {
  //             title: 'Typography',
  //             to: 'ui-typography',
  //         },
  //         {
  //             title: 'Pagination',
  //             to: 'ui-pagination',
  //         },
  //         {
  //             title: 'Grid',
  //             to: 'ui-grid',
  //         },
  //     ]
  // },
  // //plugins
  // {
  //     title:'Plugins',
  //     classsChange: 'mm-collapse',
  //     iconStyle : <i className="material-icons"> extension </i>,
  //     content : [
  //         {
  //             title:'Select 2',
  //             to: 'uc-select2',
  //         },
  //         // {
  //         //     title:'Noui Slider',
  //         //     to: 'uc-noui-slider',
  //         // },
  //         {
  //             title:'Sweet Alert',
  //             to: 'uc-sweetalert',
  //         },
  //         {
  //             title:'Toastr',
  //             to: 'uc-toastr',
  //         },
  //         {
  //             title:'Jqv Map',
  //             to: 'map-jqvmap',
  //         },
  //         {
  //             title:'Light Gallery',
  //             to: 'uc-lightgallery',
  //         },
  //     ]
  // },
  // //Widget
  // {
  //     title:'Widget',
  //     //classsChange: 'mm-collapse',
  //     iconStyle: <i className="bi bi-gear-wide"></i>,
  //     to: 'widget-basic',
  // },
  // //Forms
  // {
  //     title:'Forms',
  //     classsChange: 'mm-collapse',
  //     iconStyle: <i className="material-icons"> insert_drive_file </i>,
  //     content : [
  //         {
  //             title:'Form Elements',
  //             to: 'form-element',
  //         },
  //         {
  //             title:'Wizard',
  //             to: 'form-wizard',
  //         },
  //         {
  //             title:'CkEditor',
  //             to: 'form-ckeditor',
  //         },
  //         {
  //             title:'Pickers',
  //             to: 'form-pickers',
  //         },
  //         {
  //             title:'Form Validate',
  //             to: 'form-validation',
  //         },

  //     ]
  // },
  // //Table
  // {
  //     title:'Table',
  //     classsChange: 'mm-collapse',
  //     iconStyle: <i className="material-icons"> table_chart </i>,
  //     content : [
  //         {
  //             title:'Table Filtering',
  //             to: 'table-filtering',
  //         },
  //         {
  //             title:'Table Sorting',
  //             to: 'table-sorting',
  //         },
  //         {
  //             title:'Bootstrap',
  //             to: 'table-bootstrap-basic',
  //         },

  //     ]
  // },
  // //Pages
  // {
  //     title:'Pages',
  //     classsChange: 'mm-collapse',
  //     iconStyle: <i className="material-icons">article</i>,
  //     content : [
  //         {
  //             title:'Error',
  //             hasMenu : true,
  //             content : [
  //                 {
  //                     title: 'Error 400',
  //                     to : 'page-error-400',
  //                 },
  //                 {
  //                     title: 'Error 403',
  //                     to : 'page-error-403',
  //                 },
  //                 {
  //                     title: 'Error 404',
  //                     to : 'page-error-404',
  //                 },
  //                 {
  //                     title: 'Error 500',
  //                     to : 'page-error-500',
  //                 },
  //                 {
  //                     title: 'Error 503',
  //                     to : 'page-error-503',
  //                 },
  //             ],
  //         },
  //         {
  //             title:'Lock Screen',
  //             to: 'page-lock-screen',
  //         },

  //     ]
  // },
];
