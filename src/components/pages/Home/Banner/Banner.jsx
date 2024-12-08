import bgImage from "../../../../assets/partyPeople1.webp";
const Banner = () => {
  return (
    <div className="md:max-h-screen  mx-auto  lg:h-[800px] ">
      <img
        className="object-cover h-[400px] md:h-fit w-screen lg:h-screen  relative -z-1 top-0  "
        src={bgImage}
      ></img>

      <div
        data-aos="fade-up"
        className="absolute max-w-screen-xl mx-auto top-10 mt-12 md:mt-20 flex items-center my-auto justify-between text-white "
      >
        <div className="text-center">
          <p className=" text-2xl lg:text-6xl md:mb-5 font-bold">
            Your Event our priority
          </p>
          <h2 className="md:text-xl">
            We help you to make your day memorable.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Banner;
