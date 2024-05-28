import Nav from "../components/Nav";
import Footer from "../components/Footer";

function Layout({ children, isopen, setIsopen }) {
  return (
    <div>
      <Nav isopen={isopen} setIsopen={setIsopen}/>

      <main className="min-h-screen">{children}</main>
      <Footer />
    </div>
  );
}
export default Layout;