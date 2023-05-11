import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, title, img, price } = service;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p className="font-bold text-[#FF3811]">Price: ${price}</p>
        <div className="card-actions">
          <Link to={`/book/${_id}`}>
            <button className="btn border-0 bg-[#FF3811] hover:bg-orange-800">
              Book Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
