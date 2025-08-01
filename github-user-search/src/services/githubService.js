import axios from axios;

export async function fetchUserData({username}) {
    try {
        const response = await axios.get(`https://api.github.com/users/${username}`)
        return response.data;
    } catch (error) {
        if (error.response && error.response.status === 404) {
            throw new Error('Looks like we cant find the user');
        } else {
            throw new Error('Something went wrong. Please try again later!')
        }
    }
}

