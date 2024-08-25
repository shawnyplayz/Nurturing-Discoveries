// baseURLLive and baseURLDev are defined for live and development
const baseURLLive = `http://170.187.250.246:8080`;
const baseURLDev = `http://170.187.250.246:8080`;

const isLive = false;

//isLive is a boolean const that determines the enviroment, if isLive is true the app uses the live api otherwise it uses dev api
const baseUrl = isLive ? baseURLLive : baseURLDev;

const endpoints = {
  fetchBlogs: `${baseUrl}/fetchBlogs`,
  fetchStaffs: `${baseUrl}/fetchStaff`,
  fetchTestimonials: `${baseUrl}/fetchTestimonials`,
  fetchGallery: `${baseUrl}/fetchGallery`,
  sendInquiry: `${baseUrl}/sendInquiry`,
  fetchEvents: `${baseUrl}/fetchEvents`,
};

export default endpoints;
