import { site } from "@/lib/site";

export function YandexMap({ className = "" }: { className?: string }) {
  const src = `https://yandex.ru/map-widget/v1/?mode=search&text=${encodeURIComponent(site.fullAddress)}&z=16&lang=ru_RU`;

  return (
    <div className={`map-embed ${className}`.trim()}>
      <iframe
        title={`Карта: ${site.fullAddress}`}
        src={src}
        loading="lazy"
        allowFullScreen
      />
    </div>
  );
}
