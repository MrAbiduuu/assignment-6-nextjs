import Link from "next/link";
import logo from "@/assets/logo.png";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="border-b border-zinc-800">
      <div className="container mx-auto flex h-20 items-center justify-between px-5">
        <Link href="/" className="text-2xl font-black flex gap-0">
          <Image src={logo} alt="Logo" className="h-10 w-10" />
          FITLOG
        </Link>

        <div className="hidden gap-8 md:flex">
          <Link href="/Workouts" className="text-zinc-400 hover:text-white">
            Workouts
          </Link>

          <Link href="/My-plan" className="text-zinc-400 hover:text-white">
            My Plan
          </Link>
        </div>
        <div className="flex gap-4">
          <Link href="/workouts">Plan</Link>
          <Link href="/workouts">Saved</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
