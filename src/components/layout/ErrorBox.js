export default function ErrorBox({children}) {
  return (
    <div className="text-center bg-red-100 p-4 rounded-lg border border-red-300">
      {children}
    </div>
  );
}