import axiosInstance from "../services/AxiosInstance";

//Read all partners from Server
export function getPartners() {
  const url = process.env.REACT_APP_MYARBIT_HostUrl + "user";
  let token = JSON.parse(localStorage.jwt);
  const config = {
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": token,
    },
  };
  return axiosInstance.get(url, config);
}

//Update a partner on Server
export function updatePartner(_partnerObj) {
  const url = process.env.REACT_APP_MYARBIT_HostUrl + "user/update/admin";
  let token = JSON.parse(localStorage.jwt);
  const headers = {
    "Content-Type": "application/json",
    "x-auth-token": token,
  };
  return axiosInstance.put(url, _partnerObj, { headers });
}

//Block partner
export function blockPartner(_partnerId, _status) {
  const url = process.env.REACT_APP_MYARBIT_HostUrl + "user/block";
  let token = JSON.parse(localStorage.jwt);
  const data = {
    partnerId: _partnerId,
    status: !_status,
  };
  const headers = {
    "Content-Type": "application/json",
    "x-auth-token": token,
  };
  return axiosInstance.put(url, data, { headers });
}

// export function createPool(_poolName, _duration, _profit) {
//   const url = process.env.REACT_APP_MYARBIT_HostUrl + "pools";
//   let token = JSON.parse(localStorage.jwt);
//   const data = {
//     name: _poolName,
//     duration: _duration,
//     profit: _profit,
//   };
//   const headers = {
//     "Content-Type": "application/json",
//     "x-auth-token": token,
//   };
//   return axiosInstance.post(url, data, { headers });
// }

// export function hidePool(_id) {
//   F;
//   const url = process.env.REACT_APP_MYARBIT_HostUrl + "pools";
//   let token = JSON.parse(localStorage.jwt);
//   const data = {
//     poolId: _id,
//   };
//   const headers = {
//     "Content-Type": "application/json",
//     "x-auth-token": token,
//   };
//   return axiosInstance.put(url, data, { headers });
// }

// export function updatePool(post, postId) {
//   return axiosInstance.put(`posts/${postId}.json`, post);
// }

// export function deletePool(postId) {
//   return axiosInstance.delete(`posts/${postId}.json`);
// }

// export function formatPools(poolsData) {
//   let pools = [];
//   for (let key in poolsData) {
//     pools.push({ ...poolsData[key], id: key });
//   }

//   return pools;
// }
