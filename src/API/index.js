import axios from "axios";
import { config } from "../Constant";

export default axios.create({
    baseURL: config.API_URL,
});