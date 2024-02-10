import Axios from './AxiosInstance';

export const getProjects = () => Axios.post(`/`, {
    "jql": "project= 'Next Generation Enrollment' and sprint= 'NGE Sprint 2' and created >= -70d order by created DESC"
})