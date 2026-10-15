type SectionTitleProps = {
  eyebrow: string
  title: string
  detail?: string
}

export default function SectionTitle({
  eyebrow,
  title,
  detail,
}: SectionTitleProps) {
  return (
    <div className="grid grid-cols-1 gap-5 border-t border-border pt-5 md:grid-cols-12 md:gap-8">
      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted md:col-span-3">
        {eyebrow}
      </p>
      <div className="md:col-span-9">
        <h2 className="font-serif text-4xl leading-[1.04] tracking-[-0.025em] md:text-6xl">
          {title}
        </h2>
        {detail && (
          <p className="mt-5 max-w-xl text-sm leading-7 text-muted">{detail}</p>
        )}
      </div>
    </div>
  )
}
