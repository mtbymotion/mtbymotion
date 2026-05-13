import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/projetos")({
  head: () => ({
    meta: [
      { title: "Projetos | MT Design" },
      { name: "description", content: "Portfólio de motion design, branding e produção audiovisual da MT Design." },
    ],
  }),
  component: () => (
    <>
      <section className="pt-40 pb-16" style={{ background: "var(--gradient-hero)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-xs uppercase tracking-widest text-primary mb-4">Portfólio</p>
          <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl">PROJETOS</h1>
          <p className="mt-6 max-w-xl text-muted-foreground text-lg">
            Uma seleção de trabalhos onde estratégia, estética e movimento se encontram.
          </p>
        </div>
      </section>
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 9 }).map((_, i) => (
            <Reveal key={i} delay={(i % 3) * 0.05}>
              <div className="group relative aspect-[4/5] rounded-2xl overflow-hidden border border-border bg-surface">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-surface to-background group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <p className="text-xs uppercase tracking-widest text-primary mb-2">Motion · Branding</p>
                  <h3 className="font-display font-bold text-2xl">Projeto {String(i + 1).padStart(2, "0")}</h3>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="text-center mt-16">
          <Link to="/contato" className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:glow transition-all">
            Iniciar seu projeto <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  ),
});
