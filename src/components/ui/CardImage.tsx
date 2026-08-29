import Image from "next/image";
import { withBase } from "@/lib/asset";

export function CardImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="card-media">
      <Image src={withBase(src)} alt={alt} fill sizes="(max-width: 720px) 100vw, 33vw" />
    </div>
  );
}
