function Nav() {
  return (
    <div className="container mx-auto">
      <nav className="flex justify-between">
        <div>
          <img src="src/images/project.png" alt="" width={50} />
        </div>
        <div className="flex gap-4">
          <button className="border rounded-xl bg-[#4870FC] text-white p-2 px-12">
            Login
          </button>
          <button className="border rounded-xl bg-[#4870FC] text-white p-2 px-12">
            Sign Up
          </button>
        </div>
      </nav>
    </div>
  );
}
export default Nav;
