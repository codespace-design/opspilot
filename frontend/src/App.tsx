import { Activity, Server, Cpu, Cloud, ShieldCheck, Database } from "lucide-react";
const cards = [
 {label:"Total Servers",value:"—",icon:Server,note:"Awaiting infrastructure connection"},
 {label:"CPU Usage",value:"—",icon:Cpu,note:"Metrics not connected yet"},
 {label:"Active Alerts",value:"0",icon:Activity,note:"Alert integration pending"},
 {label:"Cloud Resources",value:"—",icon:Cloud,note:"AWS integration pending"}
];
export default function App() {
 return <main className="shell">
  <header className="topbar"><div className="brand"><Activity/><span>OpsPilot</span></div><span className="status">● Development environment</span></header>
  <section className="hero"><p className="eyebrow">INFRASTRUCTURE CONTROL PLANE</p><h1>Infrastructure, <span>in focus.</span></h1><p className="sub">Monitor, analyse and manage your hybrid infrastructure from one place.</p></section>
  <section className="grid">{cards.map(({label,value,icon:Icon,note})=><article className="card" key={label}><div className="card-head"><span>{label}</span><Icon size={19}/></div><strong>{value}</strong><small>{note}</small></article>)}</section>
  <section className="panel"><div className="panel-title"><div><h2>Getting started</h2><p>Your OpsPilot development environment is ready for development.</p></div><ShieldCheck/></div>
   <div className="steps"><div><b>01</b><span><strong>Backend API</strong><small>Django service foundation.</small></span></div><div><b>02</b><span><strong>Database</strong><small>PostgreSQL container configured.</small></span></div><div><b>03</b><span><strong>Monitoring</strong><small>Prometheus ready for exporters.</small></span></div></div>
  </section><footer><Database size={15}/> OpsPilot · Initial development scaffold</footer>
 </main>;
}
