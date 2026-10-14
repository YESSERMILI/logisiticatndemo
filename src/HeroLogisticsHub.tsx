export default function HeroLogisticsHub({ className = "" }: { className?: string }) {
  return (
    <div className={`hero-hub ${className}`} dir="ltr">
      {/* Plain <img>: CSS + SMIL animations inside the SVG run natively.
          Do NOT use next/image and do NOT inline it as JSX. */}
      <img
        src="/images/hero-logistics-hub.svg"
        alt="Logistica logistics hub: truck loading parcels at the warehouse"
        width={560}
        height={340}
        decoding="async"
        fetchPriority="high"
      />
    </div>
  );
}
