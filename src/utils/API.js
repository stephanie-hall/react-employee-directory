import axios from "axios";

export default {
    getEmployees: () => {
        return axios.get("https://dummy.restapiexample.com/api/v1/employees")
    }
}