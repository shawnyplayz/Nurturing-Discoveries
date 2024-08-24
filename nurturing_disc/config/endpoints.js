// baseURLLive and baseURLDev are defined for live and development
const baseURLLive = `https://api.nurturingdiscoveries.in`;
const baseURLDev = `https://api.nurturingdiscoveries.in`;

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
