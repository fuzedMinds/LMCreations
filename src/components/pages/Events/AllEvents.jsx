import { useLoaderData } from "react-router-dom";

import EventsPage from "./EventsPage";

const AllEvents = () => {
  const eventsData = useLoaderData();

  const data = eventsData.events;

  return (
    <div>
      <div className="hero min-h-[25vh] bg-[#053B50]">
        <div className="hero-overlay  bg-opacity-60"></div>
        <div
          className="hero relative min-h-[30vh] bg-[#053B50] flex items-center justify-center pt-24"
          style={{
            backgroundImage:
              "url(https://i.ibb.co/CHCh7fv/cool-background.png)",
          }}
        >
          <div className="relative z-10 text-center text-neutral-content">
            <h1 className="text-5xl font-extrabold text-white mb-4">
              Our Services
            </h1>
            <p className="text-lg text-gray-200">Explore our service.</p>
          </div>
        </div>
      </div>
      <div>
        <EventsPage eData={data} />
      </div>
    </div>
  );
};

export default AllEvents;
