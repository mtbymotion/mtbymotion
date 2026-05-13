import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Instagram, Linkedin, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

export function Footer() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () => {
      setTime(
        new Date().toLocaleTimeString("pt-BR", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const marqueeText = "VAMOS CONVERSAR ✦ VAMOS CONVERSAR ✦ VAMOS CONVERSAR ✦ ";

  return (
    <footer className="relative bg-surface border-t border-border overflow-hidden">
      {/* Big CTA */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 border-b border-border">
        <p className="text-muted-foreground max-w-xl mb-6 text-lg">
          Se você busca vídeos que conectam, este é o ponto de virada.
        </p>
        <Link
          to="/contato"
          className="group inline-flex items-center gap-4 text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight hover:text-primary transition-colors"
        >
          SOLICITAR ORÇAMENTO
          <ArrowUpRight
            size={64}
            className="group-hover:rotate-45 transition-transform duration-500"
          />
        </Link>
      </div>

      {/* Marquee */}
      <div className="border-b border-border py-6 overflow-hidden">
        <div className="flex whitespace-nowrap marquee">
          <span className="font-display font-bold text-5xl md:text-7xl text-primary px-4">
            {marqueeText.repeat(2)}
          </span>
          <span className="font-display font-bold text-5xl md:text-7xl text-primary px-4">
            {marqueeText.repeat(2)}
          </span>
        </div>
      </div>

      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-md bg-primary text-primary-foreground grid place-items-center font-display font-bold">
              MT
            </div>
            <span className="font-display font-semibold">MT Design</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Sistema de Criação de Vídeos Animados e Branding.
          </p>
          <div className="mt-6 text-xs text-muted-foreground">
            <p className="uppercase tracking-widest">Local Time</p>
            <p className="font-mono text-foreground text-lg mt-1">{time}</p>
          </div>
        </div>

        <div>
          <p className="uppercase tracking-widest text-xs text-muted-foreground mb-4">
            Navegação
          </p>
          <ul className="space-y-2">
            {[
              { to: "/", label: "Home" },
              { to: "/projetos", label: "Projetos" },
              { to: "/sobre", label: "Sobre" },
              { to: "/servicos", label: "Serviços" },
              { to: "/contato", label: "Contato" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-primary transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="uppercase tracking-widest text-xs text-muted-foreground mb-4">
            Contato
          </p>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Mail size={14} className="text-primary" /> contato@mtdesign.com
            </li>
            <li className="flex items-center gap-2">
              <Phone size={14} className="text-primary" /> +55 (00) 00000-0000
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={14} className="text-primary" /> Brasil
            </li>
          </ul>
        </div>

        <div>
          <p className="uppercase tracking-widest text-xs text-muted-foreground mb-4">
            Social
          </p>
          <div className="flex gap-3">
            {[
              { icon: Instagram, href: "#" },
              { icon: Linkedin, href: "#" },
            ].map((s, i) => (
              <a
                key={i}
                href={s.href}
                className="w-10 h-10 rounded-full border border-border grid place-items-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
              >
                <s.icon size={16} />
              </a>
            ))}
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-border grid place-items-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all text-xs font-bold"
            >
              Be
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-border py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row justify-between gap-4 text-xs text-muted-foreground">
          <p>© 2024 MT DESIGN. — DESIGNED BY MT DESIGN.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-foreground">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
