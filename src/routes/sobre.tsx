import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre | MT Design — Arquitetos de Marcas em Movimento" },
      {
        name: "description",
        content:
          "Conheça a MT Design: motion design, branding e produção audiovisual com foco em posicionamento e resultado.",
      },
    ],
  }),
  component: SobrePage,
});

function SobrePage() {
  return (
    <>
      {/* HERO */}
      <section className="pt-40 pb-24" style={{ background: "var(--gradient-hero)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs uppercase tracking-widest text-primary mb-6"
          >
            Sobre a MT Design
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight"
          >
            NÃO SOMOS APENAS CRIADORES.
            <br />
            <span className="text-gradient">SOMOS ARQUITETOS</span>
            <br />
            DE MARCAS EM MOVIMENTO.
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-12 grid lg:grid-cols-2 gap-12"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              Há mais de 8 anos atuando em motion design, branding e produção audiovisual, a MT
              Design nasceu para uma única missão: reprogramar a percepção de marcas que querem
              crescer com vídeos que impactam.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Sem barulho. Sem modismo. Sem promessa vazia. Apenas estratégia, estética e execução
              que resistem ao tempo.
            </p>
          </motion.div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-32 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal>
            <p className="text-xs uppercase tracking-widest text-primary mb-4">Trajetória</p>
            <h2 className="font-display font-bold text-3xl md:text-5xl max-w-3xl">
              Experiência Não Se Improvisa.
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {[
              { year: "2016", title: "Início da atuação", desc: "Primeiros projetos em edição e motion." },
              { year: "2018", title: "Especialização em Motion Graphics", desc: "Foco em animação 2D e branding visual." },
              { year: "2021", title: "Consolidação do estúdio", desc: "Equipe enxuta, processos e direção criativa próprios." },
              { year: "2024", title: "Vídeos com performance", desc: "Métrica como bússola. Estratégia como base." },
            ].map((t, i) => (
              <Reveal key={t.year} delay={i * 0.05}>
                <div className="p-8 rounded-2xl border border-border bg-surface hover:border-primary/40 transition-colors">
                  <p className="font-display font-bold text-5xl text-primary">{t.year}</p>
                  <p className="font-display font-semibold text-xl mt-4">{t.title}</p>
                  <p className="text-muted-foreground mt-2">{t.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <p className="mt-16 font-display font-bold text-2xl md:text-4xl text-center max-w-3xl mx-auto">
              Não é sobre vídeo. <span className="text-gradient">É sobre impacto.</span>
            </p>
          </Reveal>
        </div>
      </section>

      {/* PRINCÍPIOS */}
      <section className="py-32 bg-surface border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal>
            <p className="text-xs uppercase tracking-widest text-primary mb-4">Princípios</p>
            <h2 className="font-display font-bold text-3xl md:text-5xl max-w-3xl">
              Princípios Que Sustentam Cada Projeto.
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { n: "01", title: "Estratégia Antes de Estética", desc: "Vídeo sem direção é apenas movimento." },
              { n: "02", title: "Percepção Define Valor", desc: "Se o mercado te vê como comum, ele ignora." },
              { n: "03", title: "Clareza Gera Conexão", desc: "Comunicação confusa nunca engaja." },
              { n: "04", title: "Performance, Não Opinião", desc: "Resultado se mede. Não se imagina." },
            ].map((p, i) => (
              <Reveal key={p.n} delay={i * 0.05}>
                <div className="h-full p-8 rounded-2xl bg-background border border-border hover:border-primary/50 transition-colors">
                  <p className="font-display font-bold text-3xl text-primary">{p.n}</p>
                  <p className="font-display font-semibold text-lg mt-6">{p.title}</p>
                  <p className="text-sm text-muted-foreground mt-3">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ESTRUTURA */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16">
          <Reveal>
            <p className="text-xs uppercase tracking-widest text-primary mb-4">Estrutura</p>
            <h2 className="font-display font-bold text-3xl md:text-5xl">
              Estrutura Enxuta. Foco Total.
            </h2>
            <p className="text-muted-foreground text-lg mt-6 leading-relaxed">
              A MT Design funciona com estrutura enxuta e execução direta. Sem camadas
              desnecessárias. Sem ruído interno. Sem promessas que dependem de terceiros. Cada
              projeto recebe atenção estratégica e execução precisa.
            </p>
          </Reveal>

          <div className="grid grid-cols-2 gap-6">
            {[
              { v: "8+", l: "Anos de experiência" },
              { v: "100+", l: "Marcas atendidas" },
              { v: "20+", l: "Nichos atendidos" },
              { v: "100%", l: "Foco em resultados estratégicos" },
            ].map((s, i) => (
              <Reveal key={s.l} delay={i * 0.05}>
                <div className="p-8 rounded-2xl border border-border bg-surface h-full">
                  <p className="font-display font-bold text-5xl md:text-6xl text-gradient">{s.v}</p>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mt-4">
                    {s.l}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 border-t border-border bg-surface">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <Reveal>
            <h2 className="font-display font-bold text-3xl md:text-5xl leading-tight">
              Se Você Quer Crescer Com Vídeos Que Impactam,{" "}
              <span className="text-gradient">Começa Aqui.</span>
            </h2>
            <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
              Trabalhamos com empresas que entendem que vídeos e conversão andam juntos. Se sua
              marca já está pronta para sair do comum, o próximo passo é estratégico.
            </p>
            <Link
              to="/contato"
              className="mt-10 inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:glow transition-all"
            >
              Solicitar Orçamento <ArrowRight size={18} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
