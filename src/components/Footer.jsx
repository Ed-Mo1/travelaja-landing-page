import { Link } from "react-router-dom";
import logo from "../assets/images/Brand.svg";
import { footerLinks, contact } from "../constants";
const Footer = () => {
  const { title, info } = contact;
  return (
    <footer className="bg-secondary py-12 px-5">
      <div className="container flex gap-10 max-lg:flex-col">
        <div className="flex-1 text-white">
          <img src={logo} alt="logo" className="h-12" />
          <p className="mt-5 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit purus luctus
            venenatis, lectus magna fringilla urna, porttitor rhoncus dolor
          </p>
          <h4 className="mt-5">Ikuti Kami</h4>
          <div className="flex gap-2 items-center mt-3" />
        </div>
        <div className="text-white flex-grow-[1] flex flex-wrap justify-between gap-10">
          {footerLinks.map(({ title, links }) => (
            <div key={title}>
              <h5 className="font-bold mb-3">{title}</h5>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <Link key={link} to='/travelaja-landing-page/'>
                    {link}
                  </Link>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h5 className="font-bold mb-3">{title}</h5>
            <ul className="flex flex-col gap-3">
              <li>Address: {info.address}</li>
              <li>Phone: {info.phone}</li>
              <li>Email: {info.email}</li>
              <li>Maps: {info.maps}</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
