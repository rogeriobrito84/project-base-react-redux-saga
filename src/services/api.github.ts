import axios from "axios";
import { UrlsEnum } from "../enums/urls.enum";

const apiGitHub = axios.create({
    baseURL: UrlsEnum.API_GITHUB
});

export default apiGitHub;
