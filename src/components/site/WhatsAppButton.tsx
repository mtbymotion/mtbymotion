import { MessageCircle } from "lucide-react";

export const WHATSAPP_URL =
  "https://wa.me/5531996357835?text=" +
  encodeURIComponent(
    "Olá vim do seu site e gostaria de fazer um orçamento para o meu projeto!"
  );

export function openWhatsApp(e?: { preventDefault?: () => void }) {
  e?.preventDefault?.();
  try {
    const w = (typeof window !== "undefined" && (window.top || window)) as Window | null;
    w?.open(WHATSAPP_URL, "_blank", "noopener,noreferrer");
  } catch {
    if (typeof window !== "undefined") {
      window.open(WHATSAPP_URL, "_blank", "noopener,noreferrer");
    }
  }
}

export function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer external"
      onClick={openWhatsApp}
      aria-label="Conversar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 transition-transform"
    >
      <MessageCircle size={26} fill="currentColor" />
      <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-40 animate-ping" />
    </a>
  );
}
