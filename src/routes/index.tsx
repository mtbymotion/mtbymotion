import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Sparkles, Target, TrendingUp, Film, PenTool, Play, Palette } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { VimeoEmbed } from "@/components/site/VimeoEmbed";
import { projects } from "@/data/projects";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MT Design | Vídeos Animados, Motion Graphics e Branding Premium" },
      {
        name: "description",
        content:
          "Vídeos animados premium, motion graphics e branding estratégico para marcas que buscam se destacar.",
      },
    ],
  }),
  component: HomePage,
});

const rotatingWords = ["CONECTAM MARCAS", "CONQUISTAM CLIENTES", "GERAM RESULTADOS"];

function HomePage() {
  const [wordIdx, setWordIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setWordIdx((i) => (i + 1) % rotatingWords.length), 2400);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="relative pt-40 pb-32 overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-surface/50 backdrop-blur text-xs uppercase tracking-widest text-muted-foreground mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" /> Motion Design Studio
          </motion.div>

          <h1 className="font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight max-w-6xl">
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="block"
            >
              VÍDEOS QUE
            </motion.span>
            <span className="block h-[1.1em] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={wordIdx}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="block text-gradient"
                >
                  {rotatingWords[wordIdx]}
                </motion.span>
              </AnimatePresence>
            </span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="block"
            >
              COM PROPÓSITO.
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-8 max-w-2xl text-lg text-muted-foreground"
          >
            Vídeos animados criados com estética premium, narrativa estratégica e execução precisa —
            feitos para marcas que buscam se destacar entre as melhores.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              to="/contato"
              className="group inline-flex items-center gap-2 px-7 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:glow transition-all"
            >
              Solicitar Orçamento
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/projetos"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-border text-foreground font-medium hover:bg-surface transition-all"
            >
              Ver Projetos
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="mt-16 flex items-center gap-5 flex-wrap"
          >
            <div className="flex -space-x-3">
              {[
                { name: "Spotify", bg: "#1DB954", color: "#000" },
                { name: "Airbnb", bg: "#FF5A5F", color: "#fff" },
                { name: "UTMify", bg: "#7C3AED", color: "#fff" },
                { name: "KFC", bg: "#E4002B", color: "#fff" },
              ].map((b) => (
                <div
                  key={b.name}
                  title={b.name}
                  className="w-11 h-11 rounded-full border-2 border-background grid place-items-center text-[10px] font-bold tracking-tight"
                  style={{ backgroundColor: b.bg, color: b.color }}
                >
                  {b.name}
                </div>
              ))}
            </div>
            <div>
              <p className="font-display font-bold text-2xl">+100</p>
              <p className="text-xs text-muted-foreground uppercase tracking-widest">
                Clientes satisfeitos
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SOBRE CURTO */}
      <section className="py-32 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <p className="text-xs uppercase tracking-widest text-primary mb-4">Sobre</p>
            <h2 className="font-display font-bold text-3xl md:text-5xl leading-tight">
              ENTENDA COMO POSSO TRANSFORMAR SUA COMUNICAÇÃO EM MOVIMENTO.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              Da concepção à finalização, crio experiências audiovisuais que elevam o posicionamento
              da sua marca. Cada projeto une direção criativa, técnica e emoção para entregar vídeos
              que comunicam com propósito, estética e estratégia.
            </p>
            <div className="grid gap-6">
              {[
                { icon: Sparkles, title: "Estética Premium", desc: "Acabamento visual de altíssimo padrão." },
                { icon: Target, title: "Narrativa Estratégica", desc: "Storytelling que guia o espectador." },
                { icon: TrendingUp, title: "Resultados Comprovados", desc: "Vídeos que convertem e posicionam." },
              ].map((it) => (
                <div key={it.title} className="flex items-start gap-4 p-5 rounded-xl border border-border hover:border-primary/40 transition-colors">
                  <div className="w-11 h-11 rounded-lg bg-primary/10 text-primary grid place-items-center shrink-0">
                    <it.icon size={20} />
                  </div>
                  <div>
                    <p className="font-display font-semibold">{it.title}</p>
                    <p className="text-sm text-muted-foreground">{it.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section className="py-32 bg-surface border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal>
            <p className="text-xs uppercase tracking-widest text-primary mb-4">O que fazemos</p>
            <h2 className="font-display font-bold text-3xl md:text-5xl max-w-3xl">
              Serviços de Motion Design e Branding.
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Film, title: "Edição", desc: "Cortes precisos, ritmo e narrativa que prendem do início ao fim." },
              { icon: PenTool, title: "Criação", desc: "Conceito, roteiro e direção criativa de ponta a ponta." },
              { icon: Play, title: "Animação 2D", desc: "Motion graphics fluido com identidade visual única." },
              { icon: Palette, title: "Design", desc: "Branding e sistemas visuais que sustentam grandes marcas." },
            ].map((s, i) => (
              <Reveal key={s.title} delay={i * 0.05}>
                <div className="group h-full p-8 rounded-2xl bg-background border border-border hover:border-primary/50 hover:-translate-y-1 transition-all duration-300">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary grid place-items-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <s.icon size={24} />
                  </div>
                  <h3 className="font-display font-bold text-2xl mb-3">{s.title}</h3>
                  <p className="text-muted-foreground mb-8">{s.desc}</p>
                  <Link
                    to="/contato"
                    className="inline-flex items-center gap-2 text-sm text-primary font-medium group/link"
                  >
                    Solicitar Projeto
                    <ArrowRight
                      size={16}
                      className="group-hover/link:translate-x-1 transition-transform"
                    />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROJETOS */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6 mb-16">
              <div>
                <p className="text-xs uppercase tracking-widest text-primary mb-4">Portfólio</p>
                <h2 className="font-display font-bold text-4xl md:text-6xl">PROJETOS</h2>
              </div>
              <Link to="/projetos" className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-2">
                Ver todos <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>

          <div className="grid gap-8 md:grid-cols-2">
            {projects.slice(0, 4).map((p, i) => (
              <Reveal key={p.vimeoId} delay={i * 0.05}>
                <Link
                  to="/projetos"
                  className="group block rounded-2xl overflow-hidden border border-border bg-surface hover:border-primary/50 transition-all"
                >
                  <div className="overflow-hidden">
                    <VimeoEmbed vimeoId={p.vimeoId} title={p.title} />
                  </div>
                  <div className="p-6 flex items-start justify-between gap-4">
                    <div>
                      {p.category && (
                        <p className="text-xs uppercase tracking-widest text-primary mb-2">{p.category}</p>
                      )}
                      <h3 className="font-display font-bold text-xl md:text-2xl">{p.title}</h3>
                    </div>
                    <div className="w-10 h-10 shrink-0 rounded-full bg-background grid place-items-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <ArrowRight size={16} className="-rotate-45" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="py-32 border-y border-border bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <Reveal>
            <p className="text-xs uppercase tracking-widest text-primary mb-4">Depoimentos</p>
            <h2 className="font-display font-bold text-3xl md:text-5xl max-w-3xl mx-auto">
              SATISFAÇÃO DOS NOSSOS CLIENTES
            </h2>
            <p className="text-muted-foreground mt-6 max-w-xl mx-auto">
              Resultados que falam por si. Veja o que nossos clientes dizem.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[
              {
                quote: "Entregaram um motion impecável que elevou nossa apresentação de produto. Processo fluido do briefing à finalização.",
                name: "Rafael Mendes",
                role: "Head of Marketing, NorthPeak",
                avatar: "https://i.pravatar.cc/120?img=12",
              },
              {
                quote: "A direção criativa e o cuidado com cada frame fizeram toda diferença na percepção da nossa marca.",
                name: "Camila Andrade",
                role: "Brand Manager, Vivace Studio",
                avatar: "https://i.pravatar.cc/120?img=47",
              },
              {
                quote: "Profissionalismo, prazo e um resultado visual acima do esperado. Recomendo sem pensar duas vezes.",
                name: "Lucas Ferreira",
                role: "CEO, Orbita Tech",
                avatar: "https://i.pravatar.cc/120?img=33",
              },
            ].map((t, i) => (
              <Reveal key={t.name} delay={i * 0.08}>
                <div className="p-8 rounded-2xl border border-border bg-background text-left h-full flex flex-col">
                  <p className="text-2xl text-primary font-display mb-4">"</p>
                  <p className="text-foreground/90 leading-relaxed flex-1">{t.quote}</p>
                  <div className="mt-6 flex items-center gap-3">
                    <img src={t.avatar} alt={t.name} className="w-11 h-11 rounded-full object-cover border border-border" />
                    <div>
                      <p className="font-semibold text-sm">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section className="py-32">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <Reveal>
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-widest text-primary mb-4">Contato</p>
              <h2 className="font-display font-bold text-4xl md:text-6xl">VAMOS JUNTOS NESSA?</h2>
              <p className="text-muted-foreground mt-6 max-w-xl mx-auto">
                Queremos conhecer o seu projeto. Preencha o formulário e entraremos em contato.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}

function ContactForm() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert("Mensagem enviada! Entraremos em contato em breve.");
      }}
      className="grid gap-5 p-8 md:p-12 rounded-3xl border border-border bg-surface"
    >
      <div className="grid md:grid-cols-2 gap-5">
        <Field label="Nome" name="nome" />
        <Field label="Sobrenome" name="sobrenome" />
        <Field label="Telefone" name="telefone" type="tel" />
        <Field label="E-mail" name="email" type="email" />
      </div>
      <div>
        <label className="text-xs uppercase tracking-widest text-muted-foreground">
          Descrição do projeto
        </label>
        <textarea
          required
          rows={5}
          className="mt-2 w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition-colors resize-none"
        />
      </div>
      <button
        type="submit"
        className="self-start inline-flex items-center gap-2 px-7 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:glow transition-all"
      >
        Enviar <ArrowRight size={18} />
      </button>
    </form>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest text-muted-foreground" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        className="mt-2 w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition-colors"
      />
    </div>
  );
}
