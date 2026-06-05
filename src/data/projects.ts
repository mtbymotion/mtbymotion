export type Project = {
  // ID do vídeo no Vimeo (apenas o número da URL, ex: https://vimeo.com/123456789 -> "123456789")
  // Para vídeos privados com hash, use o formato "123456789/abcdef1234"
  vimeoId: string;
  title: string;
  description: string;
  category?: string;
};

// 👉 Para adicionar um projeto novo, basta duplicar um bloco abaixo
// e trocar vimeoId, title, description e category.
export const projects: Project[] = [
  {
    vimeoId: "76979871",
    title: "Projeto Exemplo 01",
    description:
      "Substitua este texto pela descrição real do projeto. Conte a história, o desafio e o resultado.",
    category: "Motion · Branding",
  },
  {
    vimeoId: "76979871",
    title: "Projeto Exemplo 02",
    description:
      "Cole aqui o ID do seu vídeo no Vimeo e descreva o trabalho realizado.",
    category: "Audiovisual",
  },
];
