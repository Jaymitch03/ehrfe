export function Header() {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div>
          <h1 className="text-2xl font-bold">Kampus Land EHR</h1>
          <p className="text-sm text-slate-500">Behavioral health web platform</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="badge">Azure Hosted</span>
          <span className="badge">PostgreSQL</span>
        </div>
      </div>
    </header>
  );
}
