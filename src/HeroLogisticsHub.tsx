export default function HeroLogisticsHub({ className = "" }: { className?: string }) {
  return (
    <div className={`hero-hub ${className}`} dir="ltr">
      <img
        src="/images/hero-logistics-hub.svg"
        alt="Logistica logistics hub: truck loading parcels at the warehouse"
        width={600}
        height={504}
        decoding="async"
        fetchPriority="high"
      />
    </div>
  );
}