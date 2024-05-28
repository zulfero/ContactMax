import logo from "../assets/images/project.png"

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
              <img src="src/assets/images/facebook.png" alt="" width={50} />
              <img src="src/assets/images/twitter.png" alt="" width={50} />
              <img src="src/assets/images/instagram.png" alt="" width={50} />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
