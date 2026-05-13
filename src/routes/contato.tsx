import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato | MT Design" },
      { name: "description", content: "Vamos conversar sobre seu próximo projeto de motion design e branding." },
    ],
  }),
  component: ContatoPage,
});

function ContatoPage() {
  return (
    <section className="pt-40 pb-32" style={{ background: "var(--gradient-hero)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16">
        <Reveal>
          <p className="text-xs uppercase tracking-widest text-primary mb-4">Contato</p>
          <h1 className="font-display font-bold text-5xl md:text-7xl leading-[0.95]">
            VAMOS JUNTOS NESSA?
          </h1>
          <p className="mt-6 text-muted-foreground text-lg max-w-md">
            Conte sobre seu projeto. Respondemos em até 24h úteis.
          </p>
          <ul className="mt-12 space-y-5 text-foreground/90">
            <li className="flex items-center gap-3"><Mail className="text-primary" size={18}/> contato@mtdesign.com</li>
            <li className="flex items-center gap-3"><Phone className="text-primary" size={18}/> +55 (00) 00000-0000</li>
            <li className="flex items-center gap-3"><MapPin className="text-primary" size={18}/> Brasil</li>
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            onSubmit={(e) => { e.preventDefault(); alert("Mensagem enviada!"); }}
            className="grid gap-5 p-8 md:p-10 rounded-3xl border border-border bg-surface"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              {[["Nome","nome"],["Sobrenome","sobrenome"],["Telefone","telefone"],["E-mail","email"]].map(([l,n]) => (
                <div key={n}>
                  <label className="text-xs uppercase tracking-widest text-muted-foreground">{l}</label>
                  <input required name={n} className="mt-2 w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none" />
                </div>
              ))}
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground">Descrição do projeto</label>
              <textarea required rows={5} className="mt-2 w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none resize-none" />
            </div>
            <button className="self-start inline-flex items-center gap-2 px-7 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:glow transition-all">
              Enviar <ArrowRight size={18}/>
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
