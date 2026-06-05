import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { VimeoEmbed } from "@/components/site/VimeoEmbed";
import { projects } from "@/data/projects";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/projetos")({
  head: () => ({
    meta: [
      { title: "Projetos | MT Design" },
      {
        name: "description",
        content:
          "Portfólio de motion design, branding e produção audiovisual da MT Design.",
      },
    ],
  }),
  component: ProjetosPage,
});

function ProjetosPage() {
  return (
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
        <div className="max-w-6xl mx-auto px-6 lg:px-10 grid gap-12 md:gap-16">
          {projects.map((p, i) => (
            <Reveal key={`${p.vimeoId}-${i}`} delay={(i % 3) * 0.05}>
              <article className="grid gap-6 md:grid-cols-5 md:gap-10 items-start">
                <div className="md:col-span-3">
                  <VimeoEmbed vimeoId={p.vimeoId} title={p.title} />
                </div>
                <div className="md:col-span-2">
                  {p.category && (
                    <p className="text-xs uppercase tracking-widest text-primary mb-3">
                      {p.category}
                    </p>
                  )}
                  <h2 className="font-display font-bold text-3xl md:text-4xl leading-tight">
                    {p.title}
                  </h2>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="text-center mt-20">
          <Link
            to="/contato"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:glow transition-all"
          >
            Iniciar seu projeto <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
