import React, { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
//import { Dropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Select from "react-select";

import user from "./../../images/profile/user.png";
import { getLoggedInPartnerAction, updateLoggedInPartnerAction } from "../../store/actions/PartnersActions";
import { COUNTRIES } from "../countries";
const inputBlog = [
  { label: "Name", value: "" },
  { label: "Specialty", value: "Developer" },
  { label: "Skills", value: "HTML,  JavaScript,  PHP" },
];

const options2 = [
  { value: "1", label: "Select Gender" },
  { value: "2", label: "Male" },
  { value: "3", label: "Female" },
  { value: "4", label: "Other" },
];
const options3 = [
  { value: "1", label: "Russia" },
  { value: "2", label: "Canada" },
  { value: "3", label: "China" },
  { value: "4", label: "India" },
];
const options4 = [
  { value: "1", label: "Krasnodar" },
  { value: "2", label: "Tyumen" },
  { value: "3", label: "Chelyabinsk" },
  { value: "4", label: "Moscow" },
];

const EditProfile = (props) => {
  //const [selectOption , setSelectOption] = useState('Gender');
  const dispatch = useDispatch();
  const [partner, setPartner] = useState({});
  const [partnerProfileName, setPartnerProfileName] = useState("");
  const [partnerName, setPartnerName] = useState("");
  const [partnerEmail, setPartnerEmail] = useState("");
  const [partnerPhone, setPartnerPhone] = useState("");
  const [partnerGender, setPartnerGende] = useState("");
  const [partnerCountry, setPartnerCountry] = useState("");

  const [defaultValueOption, setDefaultValue] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  //   const partnerObj = {
  //     _id: partner._id,
  //     name: partner.name,
  //     email: partner.email,
  //     role: partner.role,
  //     balance: partner.balance,
  //     total_staked: partner.total_staked,
  //   };
  //   setPartner(partnerObj);
  useEffect(() => {
    dispatch(getLoggedInPartnerAction());
    setPartner(props.partners.partners);
    setPartnerProfileName(props.partners.partners.name);
    setTimeout(() => {
      setIsLoaded(true);
    }, 200);
  }, [isLoaded]);

  const handleSelectGender = (selectedOption) => {
    setPartner((partner) => ({
      ...partner,
      ["gender"]: selectedOption.label,
    }));
  };

  const handleSelectCountry = (selectedOption) => {
    setPartner((partner) => ({
      ...partner,
      ["country"]: selectedOption.label,
    }));
  };
  const handleUpdatePartner = (e) => {
    e.preventDefault();
    dispatch(updateLoggedInPartnerAction(partner));
    setTimeout(() => {
      setIsLoaded(false);
    }, 2000);
  };

  const handleInputChange = (attr, value) => {
    setPartner((partner) => ({
      ...partner,
      [attr]: value,
    }));
  };
  const defaultCountryOption = COUNTRIES.find((country) => country.label === props.partners.partners.country);

  const defaultCountryValue = defaultCountryOption ? defaultCountryOption : null;

  if (isLoaded === false) {
    return <>loading...</>;
  }

  return (
    <>
      <div className="row">
        <div className="col-xl-3 col-lg-4">
          <div className="clearfix">
            <div className="card card-bx profile-card author-profile m-b30">
              <div className="card-body">
                <div className="p-5">
                  <div className="author-profile">
                    <div className="author-media">
                      <img src={user} alt="" />
                      {/* <div className="upload-link" title="" data-toggle="tooltip" data-placement="right" data-original-title="update">
                        <input type="file" className="update-flie" />
                        <i className="fa fa-camera"></i>
                      </div> */}
                    </div>
                    <div className="author-info">
                      <h6 className="title">{partnerProfileName}</h6>
                      <span>Partner</span>
                    </div>
                  </div>
                </div>
                <div className="info-list">
                  <ul>
                    <li>
                      <Link to={"/app-profile"}>Tier</Link>
                      <span>{partner.tier}</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card-footer">
                <div className="input-group mb-3">
                  <div className="form-control rounded text-center bg-white">Portfolio</div>
                </div>
                <div className="input-group">
                  <a href="https://www.dexignzone.com/" target="blank" className="form-control text-primary rounded text-start bg-white">
                    https://www.dexignzone.com/
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-9 col-lg-8">
          <div className="card profile-card card-bx m-b30">
            <div className="card-header">
              <h6 className="title">Edit Profile</h6>
            </div>
            <form className="profile-form" onSubmit={handleUpdatePartner}>
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-6 m-b30">
                    <label className="form-label">Name</label>
                    <input type="text" name="partnerName" className="form-control" onChange={(e) => handleInputChange("name", e.target.value)} defaultValue={partner.name} placeholder="Enter Name" />
                  </div>

                  <div className="col-sm-6 m-b30">
                    <label className="form-label">Email</label>
                    <input type="text" className="form-control" onChange={(e) => handleInputChange("email", e.target.value)} defaultValue={partner.email} placeholder="Your Email" />
                  </div>

                  <div className="col-sm-6 m-b30">
                    <label className="form-label">Gender</label>
                    <Select
                      options={options2}
                      className="custom-react-select"
                      onChange={handleSelectGender}
                      defaultValue={partner.gender === "Male" ? options2[1] : partner.gender === "Female" ? options2[2] : options2[3]}
                      isSearchable={false}
                    />
                  </div>
                  <div className="col-sm-6 m-b30">
                    <label className="form-label">Phone</label>
                    <input type="text" className="form-control" onChange={(e) => handleInputChange("phone", e.target.value)} defaultValue={partner.phone} placeholder="Your Phone Number" />
                  </div>
                  <div className="col-sm-6 m-b30">
                    <label className="form-label">Country</label>
                    <Select options={COUNTRIES} className="custom-react-select" onChange={handleSelectCountry} defaultValue={defaultCountryValue} isSearchable={true} placeholder={"Select Country"} />
                  </div>
                  {/* <div className="col-sm-6 m-b30">
                                        <label className="form-label">City</label> 
                                        <Select options={options4}  className="custom-react-select" 
                                            defaultValue={options4[0]}
                                            isSearchable={false}
                                        />
                                    </div> */}
                </div>
              </div>
              <div className="card-footer">
                <button className="btn btn-primary">UPDATE</button>
                {/* <Link to={"#"} className="btn-link">
                  Forgot your password?
                </Link> */}
              </div>
            </form>
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
export default connect(mapStateToProps)(EditProfile);
