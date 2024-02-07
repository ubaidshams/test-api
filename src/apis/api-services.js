import Axios from './AxiosInstance';

const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const jiraApiUrl = 'https://connecture.atlassian.net/rest/internal/2/productsearch/search?counts=projects%3D5&type=projects';
const username = 'mkunda@connecture.com';
const password = 'ATATT3xFfGF0xhPFBgqUSxoy1DQ3bkswNkzNzmIY9YhQSyRjOfl3s0hiAI0NA5n8MZdp9fGvQfTltm6nO2hgmfPa5drBj7BcUpinSyK_XhFs5viMzou6q9OyFpgo9UI3NqTqxcues0sWthFqE_tDQhyFFdHpyK9qfnA-6VpKqxsELeb6V9EM1EM=63BE5AE4';

const basicAuthString = btoa(`${username}:${password}`);

export const getProjects = () => Axios.get(proxyUrl + jiraApiUrl, {
    headers: {
        "Content-Type": "application/json",
        'Sec-Fetch-Mode': 'cors',
        'sec-Fetch-Site': 'same-origin',
        Authorization: `Basic ${basicAuthString}`,
        'referer': 'https://connecture.atlassian.net/jira/projects?page=1&sortKey=name&sortOrder=ASC'
    },
})