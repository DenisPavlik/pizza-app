export default function SectionHeaders({ subHeader, mainHeader }) {
  return (
    <>
      <h3 className="uppercase text-gray-500 font-josefin leading-4">
        {subHeader}
      </h3>
      <h2 className="text-primary font-lilita text-4xl italic">{mainHeader}</h2>
    </>
  );
}
