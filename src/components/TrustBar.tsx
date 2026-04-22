const items = [
  '✦ Since 2000',
  '✦ 10,000+ Customers Served',
  '✦ 3 Branches Across Selangor',
  '✦ Facial · Body · Hair · Skin',
  '✦ Rated 5★ on Google',
  '✦ Certified Therapist',
  '✦ Trusted by Malaysian Women',
]

export default function TrustBar() {
  // Duplicate for seamless loop
  const track = [...items, ...items]

  return (
    <div className="bg-dark overflow-hidden py-4 select-none">
      <div className="marquee-track">
        {track.map((item, i) => (
          <span
            key={i}
            className="font-body text-xs font-medium text-gold tracking-[0.18em] uppercase whitespace-nowrap px-8"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
