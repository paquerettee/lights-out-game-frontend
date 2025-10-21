export function HeaderH1({ children }) {
  return <h1 className="text-5xl text-blue-300 pb-5">{children}</h1>;
}

export function HeaderH2({ children }) {
  return <h2 className="text-4xl text-blue-300 pb-4">{children}</h2>;
}

export function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="px-10 py-2 mt-6 mb-2 bg-blue-500 hover:bg-blue-600 text-white uppercase rounded shadow transition"
    >
      {children}
    </button>
  );
}
