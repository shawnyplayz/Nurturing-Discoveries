// baseURLLive and baseURLDev are defined for live and development
const baseURLLive = ``;
const baseURLDev = ``;

const isLive = false;

//isLive is a boolean const that determines the enviroment, if isLive is true the app uses the live api otherwise it uses dev api
const baseUrl = isLive ? baseURLLive : baseURLDev;

const endpoints = {
  register: `${baseUrl}/register`,
};

export default endpoints;
