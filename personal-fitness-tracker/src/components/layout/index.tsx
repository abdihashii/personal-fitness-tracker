import Link from "next/link";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <header className="bg-slate-600 px-4 py-4 text-white">
        <Link href="/" className="text-2xl font-semibold">
          Personal Fitness Tracker
        </Link>
        <nav className="mt-4 flex flex-row gap-4">
          <Link href="/list" className="text-lg font-semibold">
            List
          </Link>
          <Link href="/add" className="text-lg font-semibold">
            Add
          </Link>
        </nav>
      </header>
      <main className="flex min-h-screen flex-col gap-10 bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
        {children}
      </main>
    </div>
  );
};

export default Layout;
