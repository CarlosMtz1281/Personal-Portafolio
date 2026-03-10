export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-zinc-200">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-zinc-500 text-sm">
          &copy; {new Date().getFullYear()} Carlos Martinez. All rights
          reserved.
        </p>
        <p className="text-zinc-400 text-xs">Built with Next.js & Tailwind CSS</p>
      </div>
    </footer>
  );
}
