export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-[#1e1e2e]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-zinc-500 text-sm">
          &copy; {new Date().getFullYear()} Carlos Martinez. All rights reserved.
        </p>
        <p className="text-zinc-600 text-xs font-mono">
          <span className="text-zinc-700">$</span>{" "}
          <span className="text-[#00d9ff]">carlos</span>{" "}
          <span className="text-zinc-500">--build</span>{" "}
          <span className="text-zinc-400">portfolio</span>
        </p>
      </div>
    </footer>
  );
}
