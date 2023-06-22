import axiosInstance from '../services/AxiosInstance';

export function getPools() {
    const url = process.env.REACT_APP_MYARBIT_HostUrl+ "pools";
    return axiosInstance.get(process.env.REACT_APP_MYARBIT_HostUrl+ "pools");
}

export function createPool(postData) {
    return axiosInstance.post(`posts.json`, postData);
}

export function updatePool(post, postId) {
    return axiosInstance.put(`posts/${postId}.json`, post);
}

export function deletePool(postId) {
    return axiosInstance.delete(`posts/${postId}.json`);
}

export function formatPools(poolsData) {
    let pools = [];
    for (let key in poolsData) {
        pools.push({ ...poolsData[key], id: key });
    }

    return pools;
}
