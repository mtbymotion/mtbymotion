type Props = {
  vimeoId: string;
  title?: string;
};

export function VimeoEmbed({ vimeoId, title }: Props) {
  // Suporta IDs no formato "123456789" ou "123456789/hash" (vídeos privados)
  const [id, hash] = vimeoId.split("/");
  const src = `https://player.vimeo.com/video/${id}?title=0&byline=0&portrait=0&dnt=1${
    hash ? `&h=${hash}` : ""
  }`;

  return (
    <div className="relative w-full overflow-hidden rounded-2xl bg-black" style={{ paddingTop: "56.25%" }}>
      <iframe
        src={src}
        title={title ?? "Vimeo video"}
        className="absolute inset-0 h-full w-full"
        frameBorder={0}
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
}
