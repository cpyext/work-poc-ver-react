/**
 * This is an example of how to create a static template that uses getStaticProps to retrieve data.
 */
import "../index.css";
import {
  Template,
  GetPath,
  GetHeadConfig,
  HeadConfig,
  TransformProps,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
} from "@yext/pages";
// import Banner from "../components/banner";
// import PageLayout from "../components/page-layout";
// import { ExternalImage } from "../types/ExternalImage";
/**
 * Not required depending on your use case.
 */
export const config: TemplateConfig = {
  // The name of the feature. If not set the name of this file will be used (without extension).
  // Use this when you need to override the feature name.
  name: "turtlehead-tacos",
};

/**
 * A local type for transformProps. This could live in src/types but it's generally
 * best practice to keep unshared types local to their usage.
 */
type ExternalImageData = TemplateProps & {  };

/**
 * Used to either alter or augment the props passed into the template at render time.
 * This function will be run during generation and pass in directly as props to the default
 * exported function.
 *
 * This can be used when data needs to be retrieved from an external (non-Knowledge Graph)
 * source. This example calls a public API and returns the data.
 *
 * If the page is truly static this function is not necessary.
 */

/**
 * Defines the path that the generated file will live at for production.
 *
 * NOTE: This currently has no impact on the local dev path. Local dev urls currently
 * take on the form: featureName/entityId
 */
export const getPath: GetPath<ExternalImageData> = () => {
  return `index.html`;
};

/**
 * This allows the user to define a function which will take in their template
 * data and produce a HeadConfig object. When the site is generated, the HeadConfig
 * will be used to generate the inner contents of the HTML document's <head> tag.
 * This can include the title, meta tags, script tags, etc.
 */
export const getHeadConfig: GetHeadConfig<
  TemplateRenderProps
> = (): HeadConfig => {
  return {
    title: "Veridian Helthcare | Home",
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
    tags: [
      {
        type: "meta",
        attributes: {
          name: "description",
          content: "Static page example meta description.",
        },
      },
    ],
  };
};

/**
 * This is the main template. It can have any name as long as it's the default export.
 * The props passed in here are the direct result from `transformProps`.
 */
const Static: Template<TemplateRenderProps> = ({ document }) => {
  return (
    <>

{/* Toplevel Color bars */}
<div className="flex h-2 w-full">
  <div className="w-1/3 f-full bg-[#00A86B]"></div>
  <div className="w-1/3 f-full bg-[#FFFF00]"></div>
  <div className="w-1/3 f-full bg-[#0000FF]"></div>
</div>
























{/* Menu Section Main which includes Logo, Search Bar and SignIn tab */}

<div className="flex items-center justify-between px-4 py-2 bg-white border-b border-gray-300">
      
      {/* Menu Section */}
      <div className="flex items-center">
        <span className="text-2xl cursor-pointer">☰ Menu</span> {/* Hamburger Menu Icon */}
        <span className="mx-4 text-gray-400">|</span>
      </div>

     
      {/* Logo Section */}
      <div className="flex items-center">
        <img
          src="https://a.mktgcdn.com/p/jU4pRun_1fPOYlRO3E-du8KGahPZZgwyNYl7dDT3lKM/538x194.png"
          alt="Veridian Health Logo"
          className="h-14 mr-4"
        />
        <span className="text-lg font-bold text-gray-800"></span>
      </div>

     
      {/* Search Section */}
      <div className="flex items-center flex-1 mx-4">
        <input
          type="text"
          placeholder="Veridian AI Search"
          className="flex-auto px-4 py-2 text-sm border border-gray-300 rounded-full focus:outline-none focus:ring focus:ring-blue-300"
        />
        
      </div>

     
      {/* Sign-In Section */}
      <div className="flex items-center">
        <span className="text-xl">📂</span> {/* Folder Icon */}
        <span className="ml-2 text-gray-800">MyRecords SignIn</span>
      </div>
    </div>
     
     
     
     
     {/* Help Section - Top level  */}
    <div className="text-center py-10 bg-white">
      <h2 className="text-4xl font-bold text-green-600 mb-8">
        How May We Help You?
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
       
        <div className="flex flex-col items-center">
          <img
            src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRFD3VZiMtXMZxDQmxaZngfjRxk78u6X3PfUnEpJ10Sxc7YUrwD" 
            alt="Find a Doctor"
            className="rounded-full w-24 h-24 mb-4 object-cover"/>
          <p className="text-lg font-medium text-gray-700">Find a Doctor</p>
        </div>
       
        <div className="flex flex-col items-center">
          <img
            src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTZ-7HcpvbrpW0mz1WkmjWdKDHFx1F5Zaf4jZlhbZ1xzArZ80s-"
            className="rounded-full w-24 h-24 mb-4 object-cover"/>
          <p className="text-lg font-medium text-gray-700">Urgent Care</p>
        </div>
       
        <div className="flex flex-col items-center">
          <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQYjefMIXo3fJJG8eIWMFfLj0E5VMIgGVQtzaC8i5cfVLBkqmy1"
            className="rounded-full w-24 h-24 mb-4 object-cover"/>
          <p className="text-lg font-medium text-gray-700">Location</p>
        </div>
       
        <div className="flex flex-col items-center">
          <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQDhzOKGWJGyVqUscHRcsrFeJDKQI9f0u4fBy-yJFYjK2OgCohQ"
            className="rounded-full w-24 h-24 mb-4 object-cover"/>
          <p className="text-lg font-medium text-gray-700">Billing & Costing</p>
        </div>
        
        <div className="flex flex-col items-center">
          <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRgbZCuWxhhvDcW7BmUglPv6AmxSMga0e1rMlM-YvK4lLjRDwev" 
            className="rounded-full w-24 h-24 mb-4 object-cover" />
          <p className="text-lg font-medium text-gray-700">Contact Us</p>
        </div>
       
        <div className="flex flex-col items-center">
          <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ5xGGGw5UKPM5RS_BW9CrCt_n8LcI-K7UW8akvfAEcgi2KFFK_" 
            className="rounded-full w-24 h-24 mb-4 object-cover"/>
          <p className="text-lg font-medium text-gray-700">Career</p>
        </div>
      </div>
    </div>
  );
     
     
     
    <div className="flex flex-col items-center px-4 py-8 bg-white">
      {/* Title Section */}
      <h1 className="text-2xl font-bold text-yellow-600 mb-4">
        Find care at Veridian Health
      </h1>
      <p className="text-center text-gray-600 mb-4">
        Veridian Health Hospital boasts the most experienced doctors and
        state-of-the-art technology, ensuring top-notch medical care and
        advanced treatments for all patients.
      </p>
      <p className="text-center text-gray-600 mb-6">
        Please fill in at least two of the fields below and hit ''.
      </p>

      {/* Input Fields Section */}
      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
        <input
          type="text"
          placeholder="Speciality, Doctor..."
          className="w-full md:w-1/3 px-4 py-2 border rounded-full border-gray-300 text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <input
          type="text"
          placeholder="City, State or Zip Code..."
          className="w-full md:w-1/3 px-4 py-2 border rounded-full border-gray-300 text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <input
          type="text"
          placeholder="Speciality, Doctor..."
          className="w-full md:w-1/3 px-4 py-2 border rounded-full border-gray-300 text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        {/* Search Button */}
        <button className="p-2 bg-transparent text-yellow-600 text-2xl rounded-full focus:outline-none hover:text-yellow-800">
          &gt;
        </button>
      </div>
    </div>
     
     
     
     
     
     
      
      
      
      
      
      
      
    <div className="flex flex-col md:flex-row items-center px-4 py-8 bg-white space-y-6 md:space-y-0 md:space-x-6">
      {/* Left Section: Image */}
      <div className="w-full md:w-1/2">
        <img
          src="https://ied.eu/wp-content/uploads/2023/11/youth-workers-youth-empowerment.jpg"
          alt=""
          className="rounded-lg shadow-md"
        />
      </div>

      {/* Right Section: Health Services */}
      <div className="w-full md:w-1/2">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">Health Services</h2>
        <div className="grid grid-cols-2 gap-y-4 gap-x-8">
          {/* Service List */}
          {[
            "Cardiac Care",
            "Renal Care",
            "Cancer Care",
            "Pediatric Care",
            "Neurosciences",
            "Mental Health",
            "GastroSciences",
            "Sports Medicine",
            "Orthopedics",
            "Primary care",
            "OB/GYN",
            "Bariatrics",
          ].map((service, index) => (
            <div key={index} className="flex items-center">
              <span className="text-blue-600 font-bold mr-2">|</span>
              <span className="text-gray-800 flex-1">{service}</span>
              <span className="text-blue-600 text-lg font-bold">&gt;</span>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-6 flex justify-center">
          <button className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-full shadow-md hover:bg-yellow-600">
            See all Health Services
          </button>
        </div>
      </div>
    </div>
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
    <div className="bg-gray-100 px-6 py-12">
      {/* Title */}
      <h2 className="text-3xl font-bold text-green-600 text-center mb-6">
        Featured Stories & Topics
      </h2>

      {/* Topics */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {[
          "Arrhythmias",
          "Autism",
          "Breast Cancer",
          "Gynecology",
          "Primary Care",
          "Pediatric Cancer",
        ].map((topic, index) => (
          <button
            key={index}
            className="px-4 py-2 border rounded-full text-gray-700 border-gray-300 hover:bg-green-100"
          >
            {topic}
          </button>
        ))}
      </div>

      {/* Stories Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {/* Story 1 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="https://www.saudiarabiavisa.net/images/Saudi_Arabia_Visa_Services_Walk_Run_Event.jpg"
            alt=""
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800">
              New Research: Benefits of Exercise for Health
            </h3>
            <a
              href="#"
              className="text-sm font-semibold text-green-600 mt-2 inline-block"
            >
              See More
            </a>
          </div>
        </div>

        {/* Story 2 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="https://www.maersk.com/~/media_sc9/maersk/insights/resilience/2023/01/resilient-supply-1024x576.jpg?w=877&hash=EBCFD96D04B3A53944C8448AEF697FFA"
            alt=""
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800">
              Uncovering the Latest Advances in Medical Care
            </h3>
            <a
              href="#"
              className="text-sm font-semibold text-green-600 mt-2 inline-block"
            >
              See More
            </a>
          </div>
        </div>

        {/* Story 3 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="https://img.freepik.com/premium-photo/young-slim-woman-brunette-sport-clothes-running-drinking-water-forest-golden-hour-sunrise-time-health-wellness-fitness-lifestyle_72389-3684.jpg?w=2000"
            alt=""
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800">
              How to Improve Your Wellbeing with Diet and Exercise
            </h3>
            <a
              href="#"
              className="text-sm font-semibold text-green-600 mt-2 inline-block"
            >
              See More
            </a>
          </div>
        </div>
      </div>

      {/* Explore Button */}
      <div className="text-center">
        <button className="px-6 py-3 bg-green-600 text-white font-semibold rounded-full shadow-md hover:bg-green-700">
          Explore More
        </button>
      </div>
    </div>









     
      
      {/* Awards & Recognition Section  */}
      <div className="p-8 bg-white">
      <h2 className="text-3xl font-bold text-green-600 mb-6">Awards & Recognitions</h2>
      <div className="border border-green-600 rounded-md p-6 bg-yellow-50 flex justify-between">
        <div className="grid grid-cols-2 gap-6 w-full">
          
          <div className="flex items-center space-x-4">
            <img
              src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQK50YZ0mVG6qNRQre4dV6NU9rwMRUHYtCQkwpH097bvX6xqK6Q"
              alt="Award Icon"
              className="w-12 h-12"
            />
            <p className="text-blue-700 text-sm font-medium text-center">
              2024 <br></br>Heathgrades America’s 100 <br></br>Best Hospitals
            </p>
            <img
              src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQK50YZ0mVG6qNRQre4dV6NU9rwMRUHYtCQkwpH097bvX6xqK6Q"
              alt="Award Icon"
              className="w-12 h-12"
            />
          </div>
          <div className="flex items-center space-x-4">
            <img
              src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQK50YZ0mVG6qNRQre4dV6NU9rwMRUHYtCQkwpH097bvX6xqK6Q"
              alt="Award Icon"
              className="w-12 h-12"
            />
            <p className="text-blue-700 text-sm font-medium text-center">
            2024 <br></br>Heathgrades America’s 100 <br></br>Best Hospitals
            </p>
            <img
              src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQK50YZ0mVG6qNRQre4dV6NU9rwMRUHYtCQkwpH097bvX6xqK6Q"
              alt="Award Icon"
              className="w-12 h-12"
            />
          </div>
          <div className="flex items-center space-x-4">
            <img
              src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQK50YZ0mVG6qNRQre4dV6NU9rwMRUHYtCQkwpH097bvX6xqK6Q"
              alt="Award Icon"
              className="w-12 h-12"
            />
            <p className="text-blue-700 text-sm font-medium text-center">
            2024 <br></br>Heathgrades America’s 100 <br></br>Best Hospitals
            </p>
            <img
              src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQK50YZ0mVG6qNRQre4dV6NU9rwMRUHYtCQkwpH097bvX6xqK6Q"
              alt="Award Icon"
              className="w-12 h-12"
            />
          </div>
          <div className="flex items-center space-x-4">
            <img
              src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQK50YZ0mVG6qNRQre4dV6NU9rwMRUHYtCQkwpH097bvX6xqK6Q"
              alt="Award Icon"
              className="w-12 h-12"
            />
            <p className="text-blue-700 text-sm font-medium text-center">
            2024 <br></br>Heathgrades America’s 100 <br></br>Best Hospitals
            </p>
            <img
              src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQK50YZ0mVG6qNRQre4dV6NU9rwMRUHYtCQkwpH097bvX6xqK6Q"
              alt="Award Icon"
              className="w-12 h-12"
            />
          </div>
          <div className="flex items-center space-x-4">
            <img
              src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQK50YZ0mVG6qNRQre4dV6NU9rwMRUHYtCQkwpH097bvX6xqK6Q"
              alt="Award Icon"
              className="w-12 h-12"
            />
            <p className="text-blue-700 text-sm font-medium text-center">
            2024 <br></br>Heathgrades America’s 100 <br></br>Best Hospitals
            </p>
            <img
              src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQK50YZ0mVG6qNRQre4dV6NU9rwMRUHYtCQkwpH097bvX6xqK6Q"
              alt="Award Icon"
              className="w-12 h-12"
            />
          </div>
          <div className="flex items-center space-x-4">
            <img
              src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQK50YZ0mVG6qNRQre4dV6NU9rwMRUHYtCQkwpH097bvX6xqK6Q"
              alt="Award Icon"
              className="w-12 h-12"
            />
            <p className="text-blue-700 text-sm font-medium text-center">
            2024 <br></br>Heathgrades America’s 100 <br></br>Best Hospitals
            </p>
            <img
              src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQK50YZ0mVG6qNRQre4dV6NU9rwMRUHYtCQkwpH097bvX6xqK6Q"
              alt="Award Icon"
              className="w-12 h-12"
            />
          </div>
        </div>
      </div>
    </div>
  );
      
      
      
      
      
      
      
      
      
      
      
      
      
    <div className="bg-white px-6 py-12">
      {/* Title */}
      <h2 className="text-3xl font-bold text-blue-600 text-center mb-8">
        Nearby Locations
      </h2>

      {/* Location Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* First Card */}
        <div className="border border-green-400 rounded-lg overflow-hidden shadow-md">
          <img
            src="https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=B_77s3FpmfdagGPNw_bcKw&cb_client=search.gws-prod.gps&w=408&h=240&yaw=213.52942&pitch=0&thumbfov=100"
            alt="Kansas City"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-bold text-green-600 flex items-center mb-2">
              {/* <span className="material-icons text-green-600 mr-2"></span> */}
              Kansas City, Kansas
            </h3>
            <p className="text-gray-600 mb-4">
              1821 Shawnee Mission Parkway, Overland Park, KS 66208
            </p>
            <div className="flex justify-center">
              <button className="text-green-600 text-lg font-bold">&gt;</button>
            </div>
          </div>
        </div>

        {/* Second Card */}
        <div className="border border-green-400 rounded-lg overflow-hidden shadow-md">
          <img
            src="https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=B_77s3FpmfdagGPNw_bcKw&cb_client=search.gws-prod.gps&w=408&h=240&yaw=213.52942&pitch=0&thumbfov=100"
            alt=""
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-bold text-green-600 flex items-center mb-2">
              {/* <span className="material-icons text-green-600 mr-2"></span> */}
              Kansas City, Kansas
            </h3>
            <p className="text-gray-600 mb-4">
              1821 Shawnee Mission Parkway, Overland Park, KS 66208
            </p>
            <div className="flex justify-center">
              <button className="text-green-600 text-lg font-bold">&gt;</button>
            </div>
          </div>
        </div>

        {/* Third Card */}
        <div className="border border-green-400 rounded-lg overflow-hidden shadow-md">
          <img
            src="https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=B_77s3FpmfdagGPNw_bcKw&cb_client=search.gws-prod.gps&w=408&h=240&yaw=213.52942&pitch=0&thumbfov=100"
            alt=""
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-bold text-green-600 flex items-center mb-2">
              {/* <span className="material-icons text-green-600 mr-2"></span> */}
              Kansas City, Kansas
            </h3>
            <p className="text-gray-600 mb-4">
              1821 Shawnee Mission Parkway, Overland Park, KS 66208
            </p>
            <div className="flex justify-center">
              <button className="text-green-600 text-lg font-bold">&gt;</button>
            </div>
          </div>
        </div>
      </div>

      {/* All Locations Link */}
      <div className="text-center mt-8">
        <a
          href="#"
          className="text-blue-600 font-semibold text-lg flex items-center justify-center"
        >
          All Locations <span className="ml-2 text-lg">&gt;</span>
        </a>
      </div>
    </div>
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
    <footer className="bg-gray-100 px-8 py-12">
      {/* Footer Columns */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1: For Patients */}
        <div>
          <h3 className="text-lg font-bold mb-4">For Patients</h3>
          <ul className="space-y-2">
            <li>Find A Doctor</li>
            <li>Book An Appointment</li>
            <li>Treatments</li>
            <li>Emergency 24×7</li>
            <li>Technology</li>
            <li>Patient Testimonials</li>
            <li>CPR</li>
          </ul>
        </div>

        {/* Column 2: Corporate */}
        <div>
          <h3 className="text-lg font-bold mb-4">Corporate</h3>
          <ul className="space-y-2">
            <li>Help Desk</li>
            <li>About Us</li>
            <li>Blogs</li>
            <li>Careers</li>
            <li>Feedback</li>
            <li>Contact Us</li>
            <li>News & Events</li>
            <li>Investor Relations</li>
            <li>Policies & Forms</li>
            <li>Coronary Stent Prices</li>
            <li>Orthopaedic Knee Implant Prices</li>
            <li>Biomedical Waste Report</li>
            <li>Sitemap</li>
          </ul>
        </div>

        {/* Column 3: Specialities */}
        <div>
          <h3 className="text-lg font-bold mb-4">Specialities</h3>
          <ul className="space-y-2">
            <li>Cardiac Care</li>
            <li>Cancer Care</li>
            <li>Neurosciences</li>
            <li>GastroSciences</li>
            <li>Orthopaedics</li>
            <li>Renal Care</li>
            <li>Liver Transplant</li>
            <li>Bone Marrow Transplant</li>
            <li>Lung Transplant</li>
            <li>Chest Surgery</li>
          </ul>
        </div>

        {/* Column 4: Download App */}
        <div>
        <div className="border border-yellow-400 rounded-md p-6 shadow-sm">
          <h3 className="text-lg font-bold mb-4 text-black-600 flex justify-center">Download Our App</h3>
          <p className="mb-4 text-sm text-gray-700">
            Download Our ECLINIC App To Book Your Appointments At Your Finger Tips
          </p>
          <div className="space-y-4">
            <button className="space-x-2 px-4 py-2 rounded-md hover:bg-white-100 flex justify-center border-yellow-400" >
            
              <img
                src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRl3QI4ohD8sJVAf4JZDPH2uAGy-ckbgUis7hYAVBrBKd-ElrVF"
                alt=""
                className="h-6"
              />
              <span>Get It On Android Play</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 border-green-400 rounded-md hover:bg-white-100">
              <img
                src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRso2wT_uzcdMkmOOUmGrW5Q1OZ0FBVx_N7tT1vY4MmvNE_GJhB"
                alt=""
                className="h-6"
              />
              <span>Get It On App Store</span>
            </button>
          </div>
          </div>
          <button className="mt-6 w-full bg-blue-600 text-white font-bold py-2 rounded-md hover:bg-blue-700 flex justify-center">
            Emergency 911
          </button>
        </div>
      </div>











      {/* Footer Bottom */}

      <div className="mt-8 border-t border-gray-300 pt-4 flex flex-col md:flex-row justify-between items-center">
        
        {/* 1. Social Icons */}
        <div className="flex space-x-4 justify-center">
  <img
    src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRKSpxGPQRXBlJKuB6eUAiUIdUfYn0-0qpC3YViSLodrOEqu7jm"
    alt="Twitter"
    className="h-8 w-8"
  />
  <img
    src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQIj_C3NVrXShqe_1tJ9sjeMh0WKivncC--GVIIfmsuj5om7rkp"
    alt="Facebook"
    className="h-8 w-8"
  />
  <img
    src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTp2_Tg4O7AgTu-h5snEiLNWC_x4NKu3rpnN5B56qR-IDqyq4or"
    alt="Instagram"
    className="h-8 w-8"
  />
  <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQMDIIbF7CTcviGN_hikNJXt2hmExeC6ZMMwGZJWvOPB4dRHSy"
    alt="YouTube"
    className="h-8 w-8"
  />
</div>
       
        {/* 2. Copyright */}
        <p className="text-sm text-green-600 text-center mt-4 md:mt-0">
          Copyright © 2024 VeridianInfotech. All Rights Reserved.
        </p>



      </div>
    </footer>
      


    </>
  );
};

export default Static;