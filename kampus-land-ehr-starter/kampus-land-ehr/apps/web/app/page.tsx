import { Header } from '@/components/header';
import { Nav } from '@/components/nav';

const visits = [
  ['08:00 AM', "Hannah O'Neal", 'Checked In', 'SOAP Note'],
  ['09:00 AM', 'Alex Sandkuhl', 'Pending', 'MH Assessment'],
  ['10:00 AM', 'Jack Day', 'Pending', 'Case Management'],
  ['11:00 AM', 'Roland Therriault', 'Pending', 'Case Management']
];

const tasks = [
  ['System Alert', 'Visit status changed to No Show', 'Dave Bell', 'High'],
  ['Rachel Clemens', '90-day treatment plan review due', 'Sally Gordon', 'Medium'],
  ['Jenny Blake', 'Authorization due', 'Dave Bell', 'High']
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="mx-auto grid max-w-7xl grid-cols-12 gap-6 px-6 py-6">
        <div className="col-span-12 lg:col-span-2">
          <Nav />
        </div>
        <main className="col-span-12 space-y-6 lg:col-span-10">
          <section className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
            {[
              ['Open Encounters', '30', 'Need documentation'],
              ['High Priority Tasks', '12', 'Require follow-up'],
              ['Signed Today', '18', 'Clinical documents'],
              ['Pending Auths', '7', 'Expiring soon']
            ].map(([title, value, sub]) => (
              <div className="card p-5" key={title}>
                <div className="text-sm text-slate-500">{title}</div>
                <div className="mt-2 text-3xl font-semibold">{value}</div>
                <div className="mt-1 text-xs text-slate-500">{sub}</div>
              </div>
            ))}
          </section>

          <section className="grid grid-cols-1 gap-6 xl:grid-cols-2">
            <div className="card p-6">
              <h2 className="mb-4 text-xl font-semibold">Today&apos;s Visits</h2>
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b text-slate-500">
                    <th className="pb-3">Time</th>
                    <th className="pb-3">Patient</th>
                    <th className="pb-3">Status</th>
                    <th className="pb-3">Visit Type</th>
                  </tr>
                </thead>
                <tbody>
                  {visits.map(([time, patient, status, type]) => (
                    <tr key={`${time}-${patient}`} className="border-b last:border-0">
                      <td className="py-3">{time}</td>
                      <td className="py-3 font-medium">{patient}</td>
                      <td className="py-3">{status}</td>
                      <td className="py-3">{type}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="card p-6">
              <h2 className="mb-4 text-xl font-semibold">To-Do Queue</h2>
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b text-slate-500">
                    <th className="pb-3">From</th>
                    <th className="pb-3">Subject</th>
                    <th className="pb-3">Patient</th>
                    <th className="pb-3">Priority</th>
                  </tr>
                </thead>
                <tbody>
                  {tasks.map(([from, subject, patient, priority]) => (
                    <tr key={`${from}-${subject}`} className="border-b last:border-0">
                      <td className="py-3">{from}</td>
                      <td className="py-3 font-medium">{subject}</td>
                      <td className="py-3">{patient}</td>
                      <td className="py-3">{priority}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
