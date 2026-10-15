type ImageProps = {
  src: string
  alt: string
  className?: string
}

export default function Image({ src, alt, className = "" }: ImageProps) {
  return (
    <div className={`overflow-hidden bg-stone-200 ${className}`}>
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover grayscale transition duration-700 hover:scale-[1.035] hover:grayscale-0 motion-reduce:transition-none"
      />
    </div>
  )
}
