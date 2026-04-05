const items = ['Dashboard', 'Patients', 'Scheduling', 'Clinical Notes', 'Treatment Plans', 'Billing Queue', 'Documents', 'Compliance'];

export function Nav() {
  return (
    <aside className="card p-4">
      <div className="mb-4 text-sm font-semibold text-slate-500">Navigation</div>
      <nav className="space-y-2">
        {items.map((item) => (
          <div key={item} className="rounded-2xl px-3 py-2 text-sm hover:bg-slate-100">
            {item}
          </div>
        ))}
      </nav>
    </aside>
  );
}
