import img1 from "../../../assets/images/about_us/person.jpg";
import img2 from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row">
        <div className=" lg:w-1/2 relative">
          <img src={img1} className="w-full rounded-lg " />
          <img
            src={img2}
            className="w-3/4 border-8 border-white absolute left-56 top-1/2 rounded-lg "
          />
        </div>
        <div className=" lg:w-1/2 space-y-5 pl-20">
          <h3 className="text-3xl text-[#FF3811] font-bold">About Us</h3>
          <h1 className="text-5xl font-bold">
            We are qualified & of experience in this field
          </h1>
          <p className="py-6">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which look even slightly believable.
          </p>
          <p className="py-6">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which look even slightly believable.
          </p>
          <button className="btn border-0 bg-[#FF3811]">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
