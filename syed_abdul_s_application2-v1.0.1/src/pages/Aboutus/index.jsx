import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import AboutUsStackloremipsum from "components/AboutUsStackloremipsum";
import Footer from "components/Footer";
import { Link } from "react-router-dom";

const AboutusPage = () => {
  return (
    
      <div className="bg-white-A700 flex flex-col font-agrandir items-center justify-start  w-full">
         <div className="h-[618px] md:px-5 relative w-full"> 
        
          <div className="font-poppins sm:h-[319px] h-[350px] md:h-[621px] mb-[-31.02px]  w-[96%] md:w-full z-[1]">
            
            <div className="absolute flex flex-col items-center justify-start left-[0] top-[5%] w-[100%] ">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col gap-[30px] items-center justify-start w-full">
                  <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                    <Img
                      className=" ml-16 h-[45px] md:h-[40px] object-cover sm: items-center text-center justify-center"
                      src="images/img_speedomassfinal.png"
                      alt="speedomassfinal"
                    />
                    <div className="flex md:flex-1 md:flex-col flex-row gap-[51px] items-start justify-start md:mt-0 mt-[5px] w-auto md:w-full sm:items-center text-center">
                      <Text
                        className="capitalize text-[15px] text-black-900 w-auto"
                        size="txtPoppinsRegular19"
                      >
                       <Link to="/">Home</Link> 
                      </Text>
                      <Text
                        className="capitalize text-[15px] text-black-900 w-auto"
                        size="txtPoppinsSemiBold19"
                      >
                        <Link to="/aboutus">About Us</Link>
                      </Text>
                      <Text
                        className="capitalize text-[15px] text-black-900 w-auto"
                        size="txtPoppinsRegular19"
                      >
                        <Link to="/ourservices">Services</Link>
                      </Text>
                      <Text
                        className="capitalize text-[15px] text-black-900 w-auto"
                        size="txtPoppinsRegular19"
                      >
                        Case studies
                      </Text>
                      <Text
                        className="capitalize text-[15px] text-black-900 w-auto"
                        size="txtPoppinsRegular19"
                      >
                         Portfolio
                      </Text>
                      <a
                        href="javascript:"
                        className="capitalize text-[15px] text-black-900 w-auto"
                      >
                        <Text size="txtPoppinsRegular19"><Link to="/contactus">Contact Us</Link></Text>
                      </a>
                      
                    </div>
                    <Button
                      className=" mr-28 capitalize cursor-pointer min-w-[120px] rounded-[21px] text-center text-lg"
                      size="sm"
                      variant="gradient"
                      color="indigo_900_indigo_A700"
                    >
                      <Link to="/joinus">Join Us</Link>
                    </Button>
                  </div>
                  <Line className="bg-blue_gray-100 h-[3px] w-full" />
                </div>
              </div>
            </div>




          </div>
          
          <div className="flex flex-col items-center  w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start w-full">
              <div className="h-72 md:h-[229px] md:mt-0 mt-[11px] relative w-[37%] md:w-full">
                
              <Text
                className="absolute capitalize left-[80%] w-full md:text-5xl text-[85px] text-center text-indigo-900 top-[0]"
                size="txtAgrandirTextBold85"
              >
                About Us
              </Text>
               <div className="h-[139px] md:ml-[0] ml-[545px] md:mt-0 mt-40 relative w-[8%] md:w-full">
                
                <div className="absolute bottom-[0] h-[123px] right-[0] w-[89%]">
                   
                  <div className="absolute bottom-[0] h-[108px] right-[0] w-[88%]">
                     
                  </div> 
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start max-w-[1400px] mt-[109px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full sm:mt-24\\\\">
            <div className="flex flex-col items-start justify-start">
              <Text
                className="capitalize sm:text-[39px] md:text-[45px] text-[53px] text-indigo-900 "
                size="txtAgrandirTextBold53"
              >
                Our Client say about us
              </Text>
              <Text
                className="capitalize leading-[189.50%] mt-[38px] text-gray-500 text-justify text-lg w-full"
                size="txtPoppinsRegular18"
              >
                <>
                Explore the experiences shared by our clients as they offer insights into their journey 
                with us. Uncover the stories of satisfaction, partnership, and success that define our 
                collaborative efforts. Our client testimonials speak louder than words, providing a
                 glimpse into the genuine trust and satisfaction that define our relationships
                </>
              </Text>
              <Text
                className="capitalize leading-[189.50%] mt-7 text-gray-500 text-justify text-lg w-full"
                size="txtPoppinsRegular18"
              >
                <>
                Discover the genuine experiences of our valued clients as they share their thoughts
                 on partnering with us. These testimonials reflect the trust, satisfaction, and success
                 
               that define our relationships. Join us in celebrating the voices of those who have
                experienced the difference with us.
                </>
              </Text>
            </div>
            <div className="md:h-[379px] h-[453px] relative w-2/5 md:w-full">
              
            </div>
          </div>
        </div>
        <div className="h-[572px] md:h-[702px] max-w-[1400px] mt-[130px] mx-auto md:px-5 relative w-full">
          <Img
            className="h-[572px] m-auto object-cover rounded-[87px] w-full"
            src="images/img_rectangle23.png"
            alt="rectangleTwentyThree"
          />
          <div className="absolute flex flex-col gap-9 h-max inset-[0] items-center justify-center m-auto w-[89%]">
            <Text
              className="capitalize sm:text-[39px] md:text-[45px] text-[53px] text-center text-white-A700"
              size="txtAgrandirTextBold53WhiteA700"
            >
              Relating To Us{" "}
            </Text>
            <div className="flex flex-col font-poppins gap-[42px] items-center justify-start w-full">
              <Text
                className="capitalize leading-[189.50%] text-justify text-white-A700 text-xl w-full"
                size="txtPoppinsRegular20"
              >
                <>
                As you navigate through the fabric of SpeedoMass, envision a journey that transcends the ordinary. Uncover the core values that guide our endeavors, the significant milestones that shape our narrative, and the unwavering commitment to excellence propelling us forward. Relating to SpeedoMass isn't a mere alignment with a company; it's an immersive experience into a shared narrative
where your aspirations intertwine with our collective vision.{" "}
                </>
              </Text>
              <Text
                className="capitalize leading-[189.50%] text-justify text-white-A700 text-xl w-full"
                size="txtPoppinsRegular20"
              >
                <>
                Join us in unraveling this story, forging connections that transform your journey into a meaningful part of ours within the expansive landscape of innovation and creativity.
                </>
              </Text>
            </div>
          </div>
        </div>
        <div className="flex md:flex-col flex-row gap-[37px] items-center justify-start max-w-[1400px] mt-[130px] mx-auto md:px-5 w-full">
          <Img
            className="md:flex-1 h-[609px] sm:h-auto object-cover rounded-[53px] w-[57%] md:w-full"
            src="images/img_image4.png"
            alt="imageFour"
          />
          <div className="flex md:flex-1 flex-col items-center justify-start w-[41%] md:w-full">
            <Text
              className="capitalize sm:text-[39px] md:text-[45px] text-[53px] text-indigo-900 w-full"
              size="txtAgrandirTextBold53"
            >
              Mission & Values Of Your Law Consult Firm
            </Text>
            <Text
              className="capitalize leading-[189.50%] mt-[23px] text-gray-500 text-justify text-lg w-full"
              size="txtPoppinsRegular18"
            >
              <>
              At the very core of SpeedoMass, our mission and values serve as the guiding compass, shaping our identity and directing our every endeavor. Our mission is crystal clear: to take the lead in innovation within the realms of IT Development and Event Management. We are dedicated to delivering nothing short of cutting-edge solutions and curating events that leave lasting impressions.
              </>
            </Text>
            <Text
              className="capitalize leading-[189.50%] mt-[22px] text-gray-500 text-justify text-lg w-full"
              size="txtPoppinsRegular18"
            >
              
            </Text>
            <div className="flex sm:flex-col flex-row font-agrandir gap-8 items-center justify-between mt-[52px] w-full">
              <div className="bg-gradient1  flex flex-col items-center justify-start p-3 rounded-[31px]">
                <Text
                  className="capitalize sm:text-[39px] md:text-[45px] text-[53px] text-center text-white-A700"
                  size="txtAgrandirTextBold53WhiteA700"
                >
                  25+
                </Text>
                <Text
                  className="capitalize mb-[7px] mt-1 text-[22px] text-center sm:text-lg text-white-A700 md:text-xl"
                  size="txtAgrandirTextBold22"
                >
                  Apps Complete
                </Text>
              </div>
              <div className="bg-gray-50_01 flex flex-col gap-[19px] items-center justify-start p-[17px] rounded-[31px]">
                <Text
                  className="capitalize sm:text-[39px] md:text-[45px] text-[53px] text-center text-indigo-900 text-shadow-ts"
                  size="txtAgrandirTextBold53"
                >
                  50+
                </Text>
                <Text
                  className="capitalize mb-1 text-[22px] text-center text-gray-900 sm:text-lg md:text-xl"
                  size="txtAgrandirRegular22"
                >
                  Website Live
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[46px] items-start justify-start max-w-[1400px] mt-[124px] mx-auto md:px-5 w-full">
          <Text
            className="capitalize sm:text-[39px] md:text-[45px] text-[53px] text-indigo-900"
            size="txtAgrandirTextBold53"
          >
            Our team members
          </Text>
          <List
            className="sm:flex-col flex-row gap-[42px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center ml-0.5 md:ml-[0] w-full"
            orientation="horizontal"
          >
            {new Array(3).fill({}).map((props, index) => (
              <React.Fragment key={`AboutUsStackloremipsum${index}`}>
                <AboutUsStackloremipsum
                  className="md:h-[599px] h-[668px] relative w-full"
                  {...props}
                />
              </React.Fragment>
            ))}
          </List>
        </div>
        <div className="h-[391px] sm:h-[521px] md:h-[625px] max-w-[1400px] mt-[130px] mx-auto md:px-5 relative w-full">
          <Img
            className="h-[391px] m-auto object-cover rounded-[87px] w-full"
            src="images/img_rectangle24.png"
            alt="rectangleTwentyFour"
          />
          <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[15%] w-[76%]">
            <Text
              className="capitalize sm:text-[39px] md:text-[45px] text-[53px] text-center text-white-A700"
              size="txtAgrandirTextBold53WhiteA700"
            >
              join our newsletter
            </Text>
            <Text
              className="capitalize mt-[22px] text-center text-white-A700 text-xl"
              size="txtPoppinsRegular20"
            >
              Stay Informed and Inspired: Join Our Newsletter Today!
            </Text>
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[47px] w-full">
              <Text
                className="bg-white-A700_38 capitalize h-[82px] justify-center sm:px-5 px-[35px] py-[27px] rounded-[41px] text-lg text-white-A700 w-[295px]"
                size="txtPoppinsRegular18WhiteA700"
              >
                Full Name
              </Text>
              <Input
                name="groupForty"
                placeholder="Enter Your Email address ..."
                className="capitalize font-poppins p-0 placeholder:text-white-A700 text-left text-lg w-[295px]"
                wrapClassName="md:flex-1 md:w-full"
                type="email"
                shape="round"
                color="white_A700_38"
                size="sm"
                variant="fill"
              ></Input>
              <Button
                className="!text-indigo-900 capitalize cursor-pointer font-agrandir font-bold leading-[normal] min-w-[295px] rounded-[41px] sm:text-[17px] md:text-[19px] text-[21px] text-center"
                color="white_A700"
                size="xl"
                variant="fill"
              >
                SUBSCRIBE
              </Button>
            </div>
          </div>
        </div>
        
       
        <Footer className="bg-gray-50 flex font-poppins items-center justify-center mt-[130px] md:px-5 w-full" />
      </div>
      
    </div>
  );
};

export default AboutusPage;
 