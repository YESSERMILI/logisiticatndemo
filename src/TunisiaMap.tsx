// React / Next.js / Vite. SVG is served untouched from /public and shown with a plain <img>
// so page CSS, RTL direction and optimizers cannot alter the drawing or its animation.
export default function TunisiaMap({ className = "" }: { className?: string }) {
  return (
    <div className="tn-map-slot">
      <div className={`tn-map ${className}`} dir="ltr">
        <img
          src="/images/tunisia-map-animated.svg"
          alt="Map of Tunisia with its 24 governorates"
          width={480}
          height={944}
          decoding="async"
          fetchPriority="high"
          draggable={false}
        />
      </div>
    </div>
  );
}