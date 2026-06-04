/* Real clients from professionalsofttech.com */
const logos = [
  'volkswagen', 'ebay', 'rakuten', 'toyota', 'trendmicro', 'qantas',
  'bestBuy', 'saksfifthavenue', 'motul', 'scootAirlines', 'madbid', 'socialfix',
];

export default function ClientLogos() {
  const list = [...logos, ...logos, ...logos];

  return (
    <section className="py-14 bg-white border-b border-[#ececec] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-10 text-center">
        <p className="text-[10px] font-semibold tracking-[0.15em] text-[#a3a3a3] uppercase">
          Trusted by the world's boldest brands &nbsp;·&nbsp; 14+ Years &nbsp;·&nbsp; 500+ Clients
        </p>
      </div>

      <div className="flex w-full overflow-hidden select-none">
        <div className="flex gap-14 items-center whitespace-nowrap animate-marquee-left hover:[animation-play-state:paused]">
          {list.map((name, i) => (
            <img
              key={`${name}-${i}`}
              src={`/clients/${name}.png`}
              alt={name}
              className="flex-shrink-0 h-7 md:h-8 w-auto object-contain opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
