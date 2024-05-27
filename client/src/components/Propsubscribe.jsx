function Propsubscribe({
  heading1,
  heading2,
  paragraph1,
  paragraph2,
  paragraph3,
  paragraph4,
}) {
  return (
    <div>
      <h1 className="text-xl font-bold">{heading1}</h1>
      <h2 className="font-semibold text-xl">{heading2}</h2>
      <div className="flex flex-col items-center">
        <p>{paragraph1}</p>
        <p>{paragraph2}</p>
        <p>{paragraph3}</p>
        <p>{paragraph4}</p>
      </div>
    </div>
  );
}
export default Propsubscribe;
