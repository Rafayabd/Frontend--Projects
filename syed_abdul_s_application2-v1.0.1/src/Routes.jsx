import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import CustomSpinner from "CustomSpinner/CustomSpinner";
const Jobapplicationform = React.lazy(() => import("pages/Jobapplicationform"));
const JobapplicationformOne = React.lazy(
  () => import("pages/JobapplicationformOne"),
);
const WordPressDeveloper = React.lazy(() => import("pages/WordPressDeveloper"));
const Joinus = React.lazy(() => import("pages/Joinus"));
const ContactUs = React.lazy(() => import("pages/ContactUs"));
const WebDevelopment = React.lazy(() => import("pages/WebDevelopment"));
const AppDevelopment = React.lazy(() => import("pages/AppDevelopment"));
const OurServices = React.lazy(() => import("pages/OurServices"));
const Aboutus = React.lazy(() => import("pages/Aboutus"));
const Termscondition = React.lazy(() => import("../src/pages/Termscondition/Termscondition"));
const Privacypolicy = React.lazy(() => import("../src/pages/Privacypolicy/Privacypolicy"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>{<CustomSpinner/>}</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/ourservices" element={<OurServices />} />
          <Route path="/appdevelopment" element={<AppDevelopment />} />
          <Route path="/webdevelopment" element={<WebDevelopment />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/joinus" element={<Joinus />} />
          <Route path="/wordpressdeveloper" element={<WordPressDeveloper />} />
          <Route
            path="/jobapplicationformone"
            element={<JobapplicationformOne />}
          />
          <Route path="/jobapplicationform" element={<Jobapplicationform />} />
          <Route path="/Termscondition" element={<Termscondition />} />
          <Route path="/Privacypolicy" element={<Privacypolicy />} />

        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
