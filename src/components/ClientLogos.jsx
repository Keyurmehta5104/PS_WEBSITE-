/* Real clients from professionalsofttech.com */
const logos = [
  'Volkswagen', 'eBay', 'Rakuten', 'Toyota', 'TrendMicro',
  'Qantas', 'Best Buy', 'University of Sydney', 'Netwave Solutions',
  'VisualFizz', 'Socialfix', 'Vefgerðin',
];

export default function ClientLogos() {
  const list = [...logos, ...logos, ...logos];

  return (
    <section className="py-14 bg-white border-b border-[#e5e5e5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-9 text-center">
        <p className="text-[10px] font-bold tracking-[0.15em] text-[#a3a3a3] uppercase">
          TRUSTED BY THE WORLD'S BOLDEST BRANDS &nbsp;·&nbsp; 14+ YEARS &nbsp;·&nbsp; 500+ CLIENTS
        </p>
      </div>

      <div className="flex w-full overflow-hidden select-none">
        <div className="flex gap-4 items-center whitespace-nowrap animate-marquee-left hover:[animation-play-state:paused]">
          {list.map((name, i) => (
            <div
              key={`l-${i}`}
              className="inline-flex flex-shrink-0 items-center px-7 py-3.5 border border-[#e5e5e5] rounded-xl bg-[#fafafa] text-[#a3a3a3] font-semibold text-sm hover:text-[#0a0a0a] hover:border-[#d4d4d4] hover:bg-white transition-all duration-300 cursor-default"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
