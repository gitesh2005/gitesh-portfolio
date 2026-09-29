import { useEffect, useMemo, useState, type FormEvent, type ReactNode } from 'react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import {
  ArrowDownRight,
  ArrowUpRight,
  Award,
  BookOpen,
  Braces,
  Check,
  ChevronRight,
  CircleDot,
  Code2,
  Copy,
  Database,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  Layers3,
  Linkedin,
  Loader2,
  Mail,
  MapPin,
  Menu,
  Moon,
  Send,
  Sparkles,
  Sun,
  Terminal,
  X,
} from 'lucide-react';
import { portfolio, type PortfolioProject } from '@/data/portfolio';

const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

const navItems = [
  { label: 'Home', href: '#top' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#work' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

const reveal: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

function SectionLabel({ index, eyebrow, title }: { index: string; eyebrow: string; title: string }) {
  return (
    <div className="mb-12 grid gap-5 md:grid-cols-[150px_1fr] md:gap-10">
      <div className="font-mono-custom text-xs uppercase tracking-[0.18em] text-muted-foreground">
        <span className="text-primary">{index}</span> / {eyebrow}
      </div>
      <h2 className="max-w-3xl font-display text-4xl leading-[1.08] tracking-[-0.03em] md:text-6xl">{title}</h2>
    </div>
  );
}

function IconLink({ href, label, children }: { href: string; label: string; children: ReactNode }) {
  if (!href) return null;
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noreferrer' : undefined}
      aria-label={label}
      data-testid={`link-${label.toLowerCase()}`}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
    >
      {children}
    </a>
  );
}

type TerminalLine = { text: string; output: string };
type TerminalScene = { label: string; lines: TerminalLine[] };

function TerminalCard() {
  const prefersReducedMotion = useReducedMotion();

  const scenes = useMemo<TerminalScene[]>(() => [
    {
      label: 'engineer',
      lines: [
        { text: 'whoami', output: portfolio.identity.email },
        { text: 'cat focus.txt', output: 'useful software, always learning' },
        { text: 'git status', output: 'learning in progress' },
      ],
    },
    {
      label: 'stack',
      lines: [
        { text: 'cat stack.txt', output: 'java · spring boot · react · python' },
        { text: 'ls projects/', output: 'expense-tracker  calories  payroll' },
        { text: 'git log -1', output: 'shipped: AI expense tracker' },
      ],
    },
    {
      label: 'status',
      lines: [
        { text: 'cat status.txt', output: 'open to junior SWE roles & internships' },
        { text: 'npm run learn', output: 'still running, no exit code' },
        { text: 'echo $NEXT', output: 'the next useful thing' },
      ],
    },
  ], []);

  // Start on a random scene every page load, then keep rotating.
  const [sceneIndex, setSceneIndex] = useState(() => Math.floor(Math.random() * 3));
  const [lineIndex, setLineIndex] = useState(0);
  const [chars, setChars] = useState(0);
  const [showOutput, setShowOutput] = useState(false);

  const scene = scenes[sceneIndex % scenes.length];

  useEffect(() => {
    if (prefersReducedMotion) return;
    const current = scene.lines[lineIndex];
    let timer: number;
    if (!current) {
      // Scene finished: pause, then move to the next one.
      timer = window.setTimeout(() => {
        setSceneIndex((value) => (value + 1) % scenes.length);
        setLineIndex(0);
        setChars(0);
        setShowOutput(false);
      }, 3200);
    } else if (chars < current.text.length) {
      timer = window.setTimeout(() => setChars((value) => value + 1), 45);
    } else if (!showOutput) {
      timer = window.setTimeout(() => setShowOutput(true), 350);
    } else {
      timer = window.setTimeout(() => {
        setLineIndex((value) => value + 1);
        setChars(0);
        setShowOutput(false);
      }, 550);
    }
    return () => window.clearTimeout(timer);
  }, [scene, scenes.length, lineIndex, chars, showOutput, prefersReducedMotion]);

  const visibleLines = prefersReducedMotion ? scene.lines : scene.lines.slice(0, lineIndex + 1);

  return (
    <motion.div
      initial={{ opacity: 0, rotate: 2, y: 15 }}
      animate={{ opacity: 1, rotate: -1.5, y: 0 }}
      transition={{ delay: 0.35, duration: 0.8 }}
      className="relative mx-auto w-full max-w-[470px]"
    >
      <div className="absolute -inset-5 rounded-[2rem] border border-primary/15" />
      <div className="absolute -right-4 -top-7 hidden font-mono-custom text-[10px] uppercase tracking-[0.2em] text-primary md:block">build / learn / repeat</div>
      <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-soft)]">
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-primary/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-accent/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/35" />
          </div>
          <span className="font-mono-custom text-[10px] text-muted-foreground">~/portfolio</span>
          <Terminal className="h-4 w-4 text-muted-foreground" />
        </div>
        <div className="px-6 py-8 font-mono-custom text-xs leading-relaxed sm:px-8 sm:py-10 sm:text-sm">
          <div className="mb-7 text-muted-foreground">
            <span className="text-accent">const</span> {scene.label} = {'{'}
          </div>
          <div className="min-h-[14.5rem] space-y-5">
            {visibleLines.map((line, index) => {
              const isDone = prefersReducedMotion || index < lineIndex;
              const typed = isDone ? line.text : line.text.slice(0, chars);
              const outputShown = isDone || (index === lineIndex && showOutput);
              return (
                <div key={`${scene.label}-${line.text}`}>
                  <div className="text-foreground">
                    <span className="mr-2 text-primary">$</span>{typed}
                  </div>
                  {outputShown && (
                    <div className="pl-4 text-muted-foreground">
                      <span className="mr-2 text-accent">→</span>{line.output}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <div className="mt-7 text-muted-foreground">
            {'}'} <span className="terminal-cursor ml-1 inline-block h-4 w-2 translate-y-1 bg-primary" />
          </div>
        </div>
        <div className="absolute bottom-4 right-5 font-mono-custom text-[9px] uppercase tracking-[0.2em] text-muted-foreground">v1.0.0 / online</div>
      </div>
    </motion.div>
  );
}

function ProjectCard({ project }: { project: PortfolioProject }) {
  const accent = project.accent === 'teal' ? 'text-accent border-accent/30' : project.accent === 'ink' ? 'text-foreground border-foreground/20' : 'text-primary border-primary/30';
  return (
    <motion.article
      variants={reveal}
      whileHover={{ y: -5 }}
      className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-[var(--shadow-soft)] md:p-8"
      data-testid={`card-project-${project.number}`}
    >
      <div className="mb-8 flex items-start justify-between">
        <span className={`rounded-full border px-3 py-1 font-mono-custom text-[10px] uppercase tracking-[0.13em] ${accent}`}>{project.category}</span>
        <span className="font-mono-custom text-xs text-muted-foreground">{project.number}</span>
      </div>
      <div className="mb-8 flex min-h-28 items-center justify-between overflow-hidden rounded-xl border border-border bg-muted/50">
        {project.image ? (
          <img src={project.image} alt={`${project.title} preview`} className="h-48 w-full object-cover" />
        ) : (
          <>
            <div className="px-5 py-4 font-mono-custom text-[10px] uppercase tracking-[0.13em] text-muted-foreground">view</div>
            <div className="flex gap-1.5 pr-5" aria-hidden="true">
              <span className="h-2.5 w-2.5 rounded-full bg-primary/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-accent/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/35" />
            </div>
          </>
        )}
      </div>
      <h3 className="font-display text-4xl tracking-[-0.03em]">{project.title}</h3>
      <p className="mt-4 max-w-md text-sm leading-7 text-muted-foreground">{project.description}</p>
      <div className="mt-6 border-l-2 border-primary/45 pl-4 text-xs leading-5 text-foreground">{project.impact}</div>
      <div className="mt-8 flex flex-wrap gap-2">
        {project.stack.map((item) => <span key={item} className="rounded-md bg-muted px-2.5 py-1 font-mono-custom text-[10px] text-muted-foreground">{item}</span>)}
      </div>
      <div className="mt-9 flex items-center gap-5 border-t border-border pt-5">
        {project.live ? <a href={project.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-xs font-bold text-foreground transition-colors hover:text-primary" data-testid={`link-live-${project.number}`}>
          View project <ExternalLink className="h-3.5 w-3.5" />
        </a> : <span className="text-xs text-muted-foreground">Add live demo URL</span>}
        {project.source ? <a href={project.source} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-xs font-bold text-muted-foreground transition-colors hover:text-primary" data-testid={`link-source-${project.number}`}>
          Source <Github className="h-3.5 w-3.5" />
        </a> : <span className="text-xs text-muted-foreground">Add GitHub URL</span>}
      </div>
      <div className={`pointer-events-none absolute -bottom-20 -right-16 h-44 w-44 rounded-full border opacity-20 transition-transform duration-500 group-hover:scale-125 ${accent}`} />
    </motion.article>
  );
}

function App() {
  const prefersReducedMotion = useReducedMotion();
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState('');
  const [sending, setSending] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    const saved = localStorage.getItem('portfolio-theme');
    const shouldDark = saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDark(shouldDark);
    document.documentElement.classList.toggle('dark', shouldDark);
    document.title = `${portfolio.identity.name} — ${portfolio.identity.role}`;
    const description = document.querySelector('meta[name="description"]');
    if (description) {
      description.setAttribute('content', portfolio.identity.statement);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = portfolio.identity.statement;
      document.head.appendChild(meta);
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    localStorage.setItem('portfolio-theme', dark ? 'dark' : 'light');
  }, [dark]);

  useEffect(() => {
    const ids = ['about', 'skills', 'work', 'education', 'experience', 'contact'];
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActiveSection(visible.target.id);
    }, { rootMargin: '-30% 0px -55% 0px', threshold: [0, .3, .7] });
    ids.forEach((id) => { const section = document.getElementById(id); if (section) observer.observe(section); });
    return () => observer.disconnect();
  }, []);

  const motionProps = useMemo(() => prefersReducedMotion ? {} : { initial: 'hidden', whileInView: 'visible', viewport: { once: true, margin: '-80px' }, variants: reveal }, [prefersReducedMotion]);

  const toggleTheme = () => setDark((value) => !value);
  const copyEmail = async () => {
    await navigator.clipboard?.writeText(portfolio.identity.email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (sending) return;
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setFormError('Please complete your name, email, and message before submitting.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setFormError('Please enter a valid email address.');
      return;
    }
    if (WEB3FORMS_ACCESS_KEY === 'PASTE_YOUR_ACCESS_KEY_HERE') {
      setFormError('Contact form is not configured yet. Please email me directly.');
      return;
    }
    const botcheck = new FormData(event.currentTarget).get('botcheck');
    if (botcheck) return; // spam bot filled the hidden field
    setFormError('');
    setSending(true);
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New portfolio message from ${form.name.trim()}`,
          from_name: 'Portfolio Contact Form',
          name: form.name.trim(),
          email: form.email.trim(),
          message: form.message.trim(),
        }),
      });
      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
      } else {
        setFormError('Something went wrong while sending. Please try again or email me directly.');
      }
    } catch {
      setFormError('Network error. Please check your connection and try again, or email me directly.');
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="min-h-[100dvh] overflow-hidden">
      <div className="grain fixed inset-0 z-50" aria-hidden="true" />
      <header className="fixed left-0 right-0 top-0 z-40 border-b border-border/80 bg-background/85 backdrop-blur-md">
        <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12" aria-label="Main navigation">
          <a href="#top" className="group flex items-center gap-3" data-testid="link-logo">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-foreground font-mono-custom text-xs font-medium text-background transition-transform group-hover:-rotate-6">{portfolio.identity.shortName}</span>
            <span className="hidden text-sm font-bold tracking-tight sm:block">{portfolio.identity.name}</span>
          </a>
          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} data-testid={`link-nav-${item.label.toLowerCase()}`} className={`relative py-2 text-xs font-bold transition-colors hover:text-primary ${activeSection === item.href.slice(1) ? 'text-foreground' : 'text-muted-foreground'}`}>
                {item.label}
                {activeSection === item.href.slice(1) && <span className="absolute -bottom-[1px] left-0 right-0 h-px bg-primary" />}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button type="button" onClick={toggleTheme} className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary" aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'} data-testid="button-theme-toggle">
              {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <a href={portfolio.identity.resumeUrl} className="hidden items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-xs font-bold text-primary-foreground transition-transform hover:-translate-y-0.5 sm:inline-flex" data-testid="link-header-resume">
              Download resume <Download className="h-3.5 w-3.5" />
            </a>
            <button type="button" onClick={() => setMenuOpen((value) => !value)} className="flex h-9 w-9 items-center justify-center rounded-full border border-border md:hidden" aria-expanded={menuOpen} aria-label={menuOpen ? 'Close menu' : 'Open menu'} data-testid="button-mobile-menu">
              {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>
        {menuOpen && <div className="border-t border-border bg-background px-5 py-4 md:hidden">
          {navItems.map((item) => <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className="block border-b border-border py-3 text-sm font-bold last:border-0" data-testid={`link-mobile-${item.label.toLowerCase()}`}>{item.label}</a>)}
        </div>}
      </header>

      <main id="top">
        <section className="site-grid relative mx-auto max-w-7xl px-5 pb-28 pt-36 sm:px-8 sm:pt-44 lg:px-12 lg:pb-40" aria-labelledby="hero-heading">
          <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_.95fr] lg:gap-20">
            <div>
              <motion.div {...(prefersReducedMotion ? {} : { initial: { opacity: 0, x: -12 }, animate: { opacity: 1, x: 0 }, transition: { duration: .6 } })} className="mb-8 flex items-center gap-3 font-mono-custom text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                <span className="h-2 w-2 rounded-full bg-accent" /> {portfolio.identity.availability}
              </motion.div>
              <motion.h1 {...(prefersReducedMotion ? {} : { initial: { opacity: 0, y: 18 }, animate: { opacity: 1, y: 0 }, transition: { delay: .1, duration: .7 } })} id="hero-heading" className="max-w-3xl font-display text-[clamp(3.5rem,8vw,7.4rem)] leading-[.91] tracking-[-0.065em]">
                Building the <em className="text-primary">next</em> useful thing.
              </motion.h1>
              <motion.p {...(prefersReducedMotion ? {} : { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: .3, duration: .7 } })} className="mt-9 max-w-xl text-base leading-8 text-muted-foreground md:text-lg">
                {portfolio.identity.intro}
              </motion.p>
              <div className="mt-10 flex flex-wrap items-center gap-5">
                <a href="#work" className="group inline-flex items-center gap-3 rounded-full bg-foreground px-5 py-3.5 text-sm font-bold text-background transition-transform hover:-translate-y-1" data-testid="link-hero-work">
                  See my work <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-y-0.5 group-hover:rotate-[-12deg]" />
                </a>
                <a href={portfolio.identity.resumeUrl} className="inline-flex items-center gap-2 text-sm font-bold text-foreground hover:text-primary" data-testid="link-resume">
                  <Download className="h-4 w-4" /> Download résumé
                </a>
              </div>
              <div className="mt-16 flex items-center gap-3">
                <IconLink href={portfolio.social.github} label="GitHub"><Github className="h-4 w-4" /></IconLink>
                <IconLink href={portfolio.social.linkedin} label="LinkedIn"><Linkedin className="h-4 w-4" /></IconLink>
                <IconLink href={portfolio.social.email} label="Email"><Mail className="h-4 w-4" /></IconLink>
                <span className="ml-2 h-px w-10 bg-border" />
                <span className="font-mono-custom text-[10px] uppercase tracking-[0.15em] text-muted-foreground">{portfolio.identity.location}</span>
              </div>
            </div>
            <TerminalCard />
          </div>
          <div className="mt-20 hidden items-center justify-between border-t border-border pt-4 font-mono-custom text-[10px] uppercase tracking-[0.2em] text-muted-foreground sm:flex">
            <span>Scroll to explore</span><span>01 — 05</span>
          </div>
        </section>

        <motion.section {...motionProps} id="about" className="section-rule mx-auto max-w-7xl scroll-mt-24 px-5 py-24 sm:px-8 md:py-32 lg:px-12" aria-label={`About ${portfolio.identity.name}`}>
          <SectionLabel index="01" eyebrow="the person" title="A solid foundation, with plenty left to learn." />
          <div className="grid gap-12 md:grid-cols-[1fr_1.15fr] md:gap-20">
              <div className="flex items-start gap-4">
              <div className="mt-1 rounded-full bg-primary/10 p-3 text-primary"><Sparkles className="h-5 w-5" /></div>
              <div><p className="font-display text-2xl leading-snug md:text-3xl">“{portfolio.identity.statement}”</p><p className="mt-4 font-mono-custom text-[10px] uppercase tracking-[.16em] text-muted-foreground">A note from the desk of {portfolio.identity.name}</p></div>
            </div>
            <div className="space-y-5 text-sm leading-8 text-muted-foreground md:text-base">
              {portfolio.about.map((paragraph) => <p key={paragraph} data-testid="text-about">{paragraph}</p>)}
            </div>
          </div>
          <div className="mt-20 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3">
            {portfolio.focus.map((item, index) => <div key={item.label} className="bg-card p-6 md:p-8" data-testid={`text-focus-${index}`}><div className="font-mono-custom text-[10px] uppercase tracking-[.16em] text-primary">{item.label}</div><div className="mt-4 text-sm font-bold leading-6">{item.value}</div></div>)}
          </div>
        </motion.section>

        <motion.section {...motionProps} id="skills" className="scroll-mt-24 border-y border-border bg-muted/35 px-5 py-24 sm:px-8 md:py-32 lg:px-12" aria-label="Technical toolkit">
          <div className="mx-auto max-w-7xl">
            <SectionLabel index="02" eyebrow="the toolkit" title="Tools are only useful when you know why to reach for them." />
            <div className="grid gap-x-12 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
              {portfolio.skills.map((group, index) => {
                const icons = [Code2, Layers3, Database, Braces];
                const SkillIcon = icons[index];
                return <div key={group.group} className="border-t border-border pt-5" data-testid={`card-skill-${index}`}><SkillIcon className="mb-5 h-5 w-5 text-primary" /><h3 className="font-bold">{group.group}</h3><ul className="mt-4 space-y-2 text-sm text-muted-foreground">{group.items.map((item) => <li key={item} className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-accent" />{item}</li>)}</ul></div>;
              })}
            </div>
          </div>
        </motion.section>

        <motion.section {...motionProps} id="work" className="section-rule mx-auto max-w-7xl scroll-mt-24 px-5 py-24 sm:px-8 md:py-32 lg:px-12" aria-label="Selected work">
          <SectionLabel index="03" eyebrow="selected work" title="A few things I have made to understand the problem better." />
          <div className="grid gap-6 lg:grid-cols-3">
            {portfolio.projects.map((project) => <ProjectCard key={project.number} project={project} />)}
          </div>
          <div className="mt-10 flex items-center justify-between border-t border-border pt-5">
            <p className="text-sm text-muted-foreground">More experiments live in the lab.</p>
            {portfolio.social.github ? <a href={portfolio.social.github} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 text-sm font-bold hover:text-primary" data-testid="link-all-projects">View all projects <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></a> : <span className="text-sm text-muted-foreground">Add your GitHub URL in the config</span>}
          </div>
        </motion.section>

        <motion.section {...motionProps} id="journey" className="scroll-mt-24 border-y border-border bg-muted/35 px-5 py-24 sm:px-8 md:py-32 lg:px-12" aria-label="Education experience certifications and achievements">
          <div className="mx-auto max-w-7xl">
            <SectionLabel index="04" eyebrow="the journey" title="Early career. High ownership. No shortcuts." />
            <div className="grid gap-16 lg:grid-cols-[1.1fr_.9fr] lg:gap-24">
               <div className="space-y-12">
                 <div id="education" className="scroll-mt-24">
                  <div className="mb-7 flex items-center gap-3"><GraduationCap className="h-5 w-5 text-primary" /><h3 className="font-mono-custom text-xs uppercase tracking-[.17em] text-primary">Education</h3></div>
                  {portfolio.education.map((item) => <div key={item.degree} className="grid gap-2 border-l border-border pl-6 md:grid-cols-[130px_1fr] md:gap-8"><span className="font-mono-custom text-xs text-muted-foreground">{item.period}</span><div><h4 className="text-lg font-bold">{item.degree}</h4><p className="mt-1 text-sm text-accent">{item.school}</p><p className="mt-4 max-w-lg text-sm leading-7 text-muted-foreground">{item.detail}</p></div></div>)}
                </div>
                 <div id="experience" className="scroll-mt-24">
                  <div className="mb-7 flex items-center gap-3"><BriefcaseBusinessIcon /><h3 className="font-mono-custom text-xs uppercase tracking-[.17em] text-primary">Experience</h3></div>
                  <div className="space-y-9">{portfolio.experience.map((item) => <div key={item.role} className="grid gap-2 border-l border-border pl-6 md:grid-cols-[130px_1fr] md:gap-8"><span className="font-mono-custom text-xs text-muted-foreground">{item.period}</span><div><h4 className="text-lg font-bold">{item.role}</h4><p className="mt-1 text-sm text-accent">{item.company}</p><p className="mt-4 max-w-lg text-sm leading-7 text-muted-foreground">{item.detail}</p></div></div>)}</div>
                </div>
              </div>
              <div className="space-y-12">
                <div>
                  <div className="mb-7 flex items-center gap-3"><Award className="h-5 w-5 text-primary" /><h3 className="font-mono-custom text-xs uppercase tracking-[.17em] text-primary">Certifications</h3></div>
                  <div className="space-y-4">
                    {portfolio.certifications.map((item) => (
                      <div key={item.title} className="flex items-start justify-between gap-5 border-b border-border pb-4">
                        <div>
                          <h4 className="text-sm font-bold">
                            {item.link && (
                              <a
                                href={item.link}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-1.5 transition-colors hover:text-primary"
                                data-testid={`link-certificate-${item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                              >
                                {item.title} <ExternalLink className="h-3 w-3" />
                              </a>
                            )}
                          </h4>
                          <p className="mt-1 text-xs text-muted-foreground">{item.issuer}</p>
                        </div>
                        <span className="font-mono-custom text-[10px] text-muted-foreground">{item.year}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div><div className="mb-7 flex items-center gap-3"><CircleDot className="h-5 w-5 text-primary" /><h3 className="font-mono-custom text-xs uppercase tracking-[.17em] text-primary">A few wins</h3></div><ul className="space-y-4">{portfolio.achievements.map((item) => <li key={item} className="flex gap-3 text-sm leading-6 text-muted-foreground"><ChevronRight className="mt-1 h-4 w-4 shrink-0 text-accent" />{item}</li>)}</ul></div>
                <div className="rounded-xl border border-primary/25 bg-primary/5 p-6"><p className="font-display text-2xl leading-snug">The through-line is simple: stay curious, then make the learning useful.</p></div>
              </div>
            </div>
          </div>
        </motion.section>

         <motion.section {...motionProps} id="profiles" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-24 sm:px-8 md:py-32 lg:px-12" aria-labelledby="profiles-heading">
          <div className="grid gap-12 md:grid-cols-[.8fr_1.2fr] md:gap-20">
            <div><div className="mb-6 font-mono-custom text-xs uppercase tracking-[.18em] text-primary">Beyond the résumé</div><h2 id="profiles-heading" className="font-display text-4xl tracking-[-.03em] md:text-5xl">Find me where the work is.</h2><p className="mt-5 text-sm leading-7 text-muted-foreground">I like sharing the process as much as the polished result. These are the places I show up consistently.</p></div>
             <div className="divide-y divide-border border-y border-border">
               {portfolio.profiles.filter((profile) => profile.href).map((profile) => <a key={profile.label} href={profile.href} target="_blank" rel="noreferrer" className="group flex items-center justify-between gap-5 py-5 transition-colors hover:text-primary" data-testid={`link-profile-${profile.label.toLowerCase()}`}><div><div className="font-bold">{profile.label}</div><div className="mt-1 text-sm text-muted-foreground group-hover:text-muted-foreground">{profile.value}</div></div><div className="flex items-center gap-5"><span className="hidden font-mono-custom text-[10px] uppercase tracking-[.12em] text-muted-foreground sm:block">{profile.stat}</span><ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></div></a>)}
               {!portfolio.profiles.some((profile) => profile.href) && <p className="py-5 text-sm text-muted-foreground">Add coding profile URLs in the config to show them here.</p>}
             </div>
          </div>
        </motion.section>

        <section id="contact" className="scroll-mt-24 bg-foreground px-5 py-24 text-background sm:px-8 md:py-32 lg:px-12" aria-labelledby="contact-heading">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-16 lg:grid-cols-[.85fr_1.15fr] lg:gap-24">
              <div>
                <div className="mb-6 font-mono-custom text-xs uppercase tracking-[.18em] text-primary">05 / open channel</div>
                <h2 id="contact-heading" className="max-w-lg font-display text-5xl leading-[1] tracking-[-.04em] md:text-7xl">Have a good problem?</h2>
                <p className="mt-7 max-w-md text-sm leading-7 text-background/65">I am open to conversations about junior software engineering roles, internships, and interesting problems worth solving together.</p>
                 <div className="mt-10 flex flex-wrap items-center gap-3">
                   <span className="inline-flex items-center gap-2 text-sm font-bold text-background" data-testid="text-contact-email"><Mail className="h-4 w-4" /> {portfolio.identity.email}</span>
                   <span className="inline-flex items-center gap-2 text-sm font-bold text-background" data-testid="text-contact-phone">{portfolio.identity.phone}</span>
                   <button type="button" onClick={copyEmail} className="inline-flex items-center gap-2 rounded-full border border-background/20 px-3 py-1.5 text-[10px] uppercase tracking-[.12em] text-background/70 transition-colors hover:border-primary hover:text-primary" data-testid="button-copy-email">{copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}{copied ? 'Copied' : 'Copy email'}</button>
                </div>
                 <div className="mt-14 flex items-center gap-3 text-xs text-background/55"><MapPin className="h-4 w-4 text-primary" /> Based in {portfolio.identity.location} · available remotely</div>
              </div>
              <div>
                <div className="mb-6 flex items-center justify-between border-b border-background/20 pb-4"><span className="font-mono-custom text-[10px] uppercase tracking-[.16em] text-background/50">Contact form</span><span className="flex items-center gap-2 font-mono-custom text-[10px] text-accent"><span className="h-1.5 w-1.5 rounded-full bg-accent" /> replies within 48 hours</span></div>
                {submitted ? <div className="flex min-h-[335px] flex-col items-start justify-center"><div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-accent/20 text-accent"><Check className="h-6 w-6" /></div><h3 className="font-display text-4xl">Message sent.</h3><p className="mt-3 max-w-sm text-sm leading-7 text-background/60">Thanks for reaching out. I will get back to you soon at the email you provided.</p><button type="button" onClick={() => { setSubmitted(false); setForm({ name: '', email: '', message: '' }); }} className="mt-7 text-sm font-bold text-primary hover:underline" data-testid="button-reset-contact">Send another</button></div> :
                  <form onSubmit={handleSubmit} className="space-y-7" noValidate>
                    <div className="grid gap-7 sm:grid-cols-2">
                      <label className="block"><span className="mb-2 block text-xs font-bold text-background/70">Your name</span><input required value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} className="w-full border-b border-background/25 bg-transparent py-3 text-sm outline-none transition-colors placeholder:text-background/35 focus:border-primary" placeholder="Jane Smith" data-testid="input-contact-name" /></label>
                      <label className="block"><span className="mb-2 block text-xs font-bold text-background/70">Email address</span><input required type="email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} className="w-full border-b border-background/25 bg-transparent py-3 text-sm outline-none transition-colors placeholder:text-background/35 focus:border-primary" placeholder="jane@company.com" data-testid="input-contact-email" /></label>
                    </div>
                    <label className="block"><span className="mb-2 block text-xs font-bold text-background/70">What are you working on?</span><textarea required rows={4} value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} className="w-full resize-none border-b border-background/25 bg-transparent py-3 text-sm outline-none transition-colors placeholder:text-background/35 focus:border-primary" placeholder="Tell me a little about the role or problem..." data-testid="input-contact-message" /></label>
                    <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
                    {formError && <p role="alert" className="text-xs text-primary" data-testid="status-contact-error">{formError}</p>}
                    <button type="submit" disabled={sending} className="group inline-flex items-center gap-3 rounded-full bg-primary px-5 py-3.5 text-sm font-bold text-primary-foreground transition-transform hover:-translate-y-1 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0" data-testid="button-submit-contact">{sending ? 'Sending...' : 'Send message'} {sending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />}</button>
                    <p className="text-[11px] leading-5 text-background/40">Your message goes straight to my inbox. Your email is used only to reply.</p>
                  </form>}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-foreground px-5 pb-8 text-background sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 border-t border-background/15 pt-7 text-xs text-background/45 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} {portfolio.identity.name}. Built with care.</span>
          <div className="flex items-center gap-5"><a href="#top" className="hover:text-primary" data-testid="link-back-to-top">Back to top ↑</a><span className="font-mono-custom text-[10px]">designed / developed / learning</span></div>
        </div>
      </footer>
    </div>
  );
}

function BriefcaseBusinessIcon() {
  return <span className="flex h-5 w-5 items-center justify-center text-primary" aria-hidden="true"><BookOpen className="h-5 w-5" /></span>;
}

export default App;