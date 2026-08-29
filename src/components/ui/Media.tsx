import Image from "next/image";

export function Cover({
  src,
  alt,
  kicker,
  title,
  text,
  children,
}: {
  src: string;
  alt: string;
  kicker: string;
  title: string;
  text?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="cover">
      <Image src={src} alt={alt} fill priority sizes="100vw" className="cover__img" />
      <div className="cover__shade" />
      <div className="container cover__content">
        <p className="kicker">{kicker}</p>
        <h1 className="display">{title}</h1>
        {text ? <p className="lead cover__lead">{text}</p> : null}
        {children}
      </div>
    </section>
  );
}

export function Photo({
  src,
  alt,
  caption,
  className = "",
}: {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
}) {
  return (
    <figure className={`photo ${className}`.trim()}>
      <Image src={src} alt={alt} width={1600} height={1000} sizes="(max-width: 900px) 100vw, 50vw" />
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}

export function Split({
  image,
  alt,
  caption,
  reverse = false,
  children,
}: {
  image: string;
  alt: string;
  caption?: string;
  reverse?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section className={`section${reverse ? " section--panel" : ""}`}>
      <div className={`container--wide split${reverse ? " split--reverse" : ""}`}>
        <Photo src={image} alt={alt} caption={caption} />
        <div className="split__text">{children}</div>
      </div>
    </section>
  );
}
