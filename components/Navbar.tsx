import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-slate-800 px-8 py-4">
      <Link className="text-white font-bold" href={"/"}>Idea Wall</Link>
      <Link className='bg-white p-2' href={"/addIdea"}>Add Idea</Link>
    </nav>
  );
}
