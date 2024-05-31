import logo from "../assets/images/project.png"
import foot1 from "../assets/images/facebook.png"
import foot2 from "../assets/images/twitter.png"
import foot3 from "../assets/images/instagram.png"

function Footer() {
  return (
    <>
      <footer className="bg-[#4870FC] h-60 flex flex-col sm:flex-row mt-16">
        <div className="container mx-auto flex justify-between">
          <div className="flex gap-7 mt-9">
            <img src={logo} alt="" width={200} />
            <div className="flex flex-col text-xl text-white gap-9">
              <p>Contact</p>
              <p>Managing</p>
              <p>System</p>
            </div>
          </div>
          <div className="text-center mt-9">
            <p className="font-bold text-xl text-white">Follow Us At</p>
            <div className="flex gap-6 mt-5">
              <img src={foot1} alt="" width={50} />
              <img src={foot2} alt="" width={50} />
              <img src={foot3} alt="" width={50} />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
