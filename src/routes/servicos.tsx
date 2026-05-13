import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { Film, Music, PenTool, Play, Palette, ArrowRight } from "lucide-react";

const services = [
  { icon: Film, title: "Edição", desc: "Cortes precisos, ritmo e narrativa que prendem do início ao fim." },
  { icon: Music, title: "Sound Design", desc: "Trilhas e efeitos sonoros que ampliam a emoção do vídeo." },
  { icon: PenTool, title: "Criação", desc: "Conceito, roteiro e direção criativa de ponta a ponta." },
  { icon: Play, title: "Animação 2D", desc: "Motion graphics fluido com identidade visual única." },
  { icon: Palette, title: "Design & Branding", desc: "Sistemas visuais que sustentam grandes marcas." },
];

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Serviços | MT Design — Motion, Edição, Branding" },
      { name: "description", content: "Edição, sound design, criação, animação 2D e branding premium." },
    ],
  }),
  component: () => (
    <>
      <section className="pt-40 pb-16" style={{ background: "var(--gradient-hero)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-xs uppercase tracking-widest text-primary mb-4">Serviços</p>
          <h1 className="font-display font-bold text-5xl md:text-7xl">Motion Design e Branding.</h1>
        </div>
      </section>
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <div className="group h-full p-8 rounded-2xl bg-surface border border-border hover:border-primary/50 hover:-translate-y-1 transition-all">
                <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary grid place-items-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <s.icon size={24} />
                </div>
                <h3 className="font-display font-bold text-2xl mb-3">{s.title}</h3>
                <p className="text-muted-foreground mb-8">{s.desc}</p>
                <Link to="/contato" className="inline-flex items-center gap-2 text-sm text-primary font-medium">
                  Solicitar Projeto <ArrowRight size={16} />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  ),
});
