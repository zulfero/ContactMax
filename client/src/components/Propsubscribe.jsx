function Propsubscribe({
  heading1,
  heading2,
  paragraph1,
  paragraph2,
  paragraph3,
  paragraph4,
  note,
}) {
  return (
    <div className="shadow-2xl p-14 border  rounded-lg">
      <div className="mb-8">
        <h1 className="text-xl font-bold">{heading1}</h1>
        <div className="flex text-center items-center">
          <h2 className="font-semibold text-4xl">{heading2}</h2>
          <h3 className="font-semibold">{note}</h3>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-1">
          <img src="src/images/check-mark.png" alt="" width={20} />
          <p>{paragraph1}</p>
        </div>
        <div className="flex items-center gap-1">
          <img src="src/images/check-mark.png" alt="" width={20} />
          <p>{paragraph2}</p>
        </div>
        <div className="flex items-center gap-1">
          <img src="src/images/check-mark.png" alt="" width={20} />
          <p>{paragraph3}</p>
        </div>
        <div className="flex items-center gap-1">
          <img src="src/images/check-mark.png" alt="" width={20} />
          <p>{paragraph4}</p>
        </div>
      </div>
    </div>
  );
}
export default Propsubscribe;
