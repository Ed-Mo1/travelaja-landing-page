const TestimonialCard = ({ img, name, desc }) => {
  return (
    <div className="shadow-lg p-5 rounded">
      <div className="flex items-center gap-5">
        <img src={img} alt="profile" className="w-20 h-20 rounded-full" />
        <h5 className="text-title font-bold">{name}</h5>
      </div>
      <p className="text-title mt-12 leading-8">{desc}</p>
    </div>
  );
};

export default TestimonialCard;
