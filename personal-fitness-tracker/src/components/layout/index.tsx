import Link from "next/link";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <header className="bg-slate-600 px-4 py-4 text-white">
        <h1 className="text-2xl font-semibold">Personal Fitness Tracker</h1>
        <nav className="mt-4 flex flex-row gap-4">
          <Link href="/" className="text-lg font-semibold">
            Home
          </Link>
          <Link href="/workouts" className="text-lg font-semibold">
            Workouts
          </Link>
          <Link href="/new-workout" className="text-lg font-semibold">
            New Workout
          </Link>
        </nav>
      </header>
      <main className="flex min-h-screen flex-col gap-10 bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        {children}
      </main>
    </div>
  );
};

export default Layout;
