import React,{useState} from 'react';
//import { Dropdown } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Select from 'react-select';

import user from './../../images/profile/user.png';

const inputBlog = [
    { label:'Name', value:'' },
    { label:'Specialty', value:'Developer' },
    { label:'Skills', value:'HTML,  JavaScript,  PHP' },
];

const options2 = [
    { value: '1', label: 'Select' },
    { value: '2', label: 'Male' },
    { value: '3', label: 'Female' },
    { value: '4', label: 'Other' }
]
const options3 = [
    { value: '1', label: 'Russia' },
    { value: '2', label: 'Canada' },
    { value: '3', label: 'China' },
    { value: '4', label: 'India' }
]
const options4 = [
    { value: '1', label: 'Krasnodar' },
    { value: '2', label: 'Tyumen' },
    { value: '3', label: 'Chelyabinsk' },
    { value: '4', label: 'Moscow' }
]

const EditProfile = () => {
   // const [selectOption , setSelectOption] = useState('Gender');
    return(
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
                                            <div className="upload-link" title="" data-toggle="tooltip" data-placement="right" data-original-title="update">
                                                <input type="file" className="update-flie" />
                                                <i className="fa fa-camera"></i>
                                            </div>
                                        </div>
                                        <div className="author-info">
                                            <h6 className="title">Nella Vita</h6>
                                            <span>Developer</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="info-list">
                                    <ul>
                                        <li><Link to={"/app-profile"}>Tier</Link><span>3</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card-footer">
                                <div className="input-group mb-3">
                                    <div className="form-control rounded text-center bg-white">Portfolio</div>
                                </div>
                                <div className="input-group">
                                    <a href="https://www.dexignzone.com/" target="blank" className="form-control text-primary rounded text-start bg-white">https://www.dexignzone.com/</a>
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
                        <form className="profile-form">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-6 m-b30" >
                                        <label className="form-label">Name</label>
                                        <input type="text" className="form-control" defaultValue={''} placeholder='Enter Name' />
                                    </div>   
                                   
                                    <div className="col-sm-6 m-b30">
                                        <label className="form-label">Email</label>
                                        <input type="text" className="form-control" defaultValue="" placeholder='Your Email'/>
                                    </div>

                                    <div className="col-sm-6 m-b30">
                                        <label className="form-label">Phone</label>
                                        <input type="text" className="form-control" defaultValue="" placeholder='Your Phone Number' />
                                    </div>

                                    <div className="col-sm-6 m-b30">                                        
                                        <label className="form-label">Gender</label>
                                        <Select options={options2}  className="custom-react-select" 
                                            defaultValue={options2[0]}
                                            isSearchable={false}
                                        />
                                          
                                    </div>
                                    <div className="col-sm-6 m-b30">
                                        <label className="form-label">Birth</label>
                                        <input type="text" className="form-control" placeholder="dd. mm .yyyy" />
                                    </div>
                                    <div className="col-sm-6 m-b30">
                                        <label className="form-label">Country</label>
                                        <Select options={options3}  className="custom-react-select" 
                                            defaultValue={''}
                                            isSearchable={true}
                                            placeholder={"Select Country"}
                                        />
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
                                <Link to={"#"} className="btn-link">Forgot your password?</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default EditProfile;