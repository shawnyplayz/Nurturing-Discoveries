// baseURLLive and baseURLDev are defined for live and development
const baseURLLive = `http://192.46.210.31:8080`;
const baseURLDev = `http://192.46.210.31:8080`;

const isLive = false;

//isLive is a boolean const that determines the enviroment, if isLive is true the app uses the live api otherwise it uses dev api
const baseUrl = isLive ? baseURLLive : baseURLDev;

const endpoints = {
  fetchBlogs: `${baseUrl}/fetchBlogs`,
};

export default endpoints;
