"use client";

import { useEffect, useRef } from "react";
import { useTranslation } from "@/hooks/use-translation";
import { useLanguage } from "@/contexts/language-context";
import { cn } from "@/lib/utils";

export function Hero() {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const visualRef = useRef<HTMLDivElement>(null);
  const isRTL = language === "ar";

  useEffect(() => {
    const root = visualRef.current;
    if (!root) return;

    const route = root.querySelector('.lgs-route') as SVGPathElement;
    const prog = root.querySelector('.lgs-prog') as SVGPathElement;
    const truck = root.querySelector('.lgs-truck') as SVGGElement;
    const speed = root.querySelector('.lgs-speed') as SVGGElement;
    const spins = root.querySelectorAll('.lgs-spin');
    const nodes = root.querySelectorAll('.lgs-node');
    const rings = root.querySelectorAll('.lgs-ring');
    const cards = root.querySelectorAll('.lgs-card');
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!route || !prog || !truck) return;

    const total = route.getTotalLength();
    const stationLen: number[] = [];
    
    nodes.forEach((node) => {
      const sx = +(node.getAttribute('data-x') || 0);
      const sy = +(node.getAttribute('data-y') || 0);
      let best = 1e9, bl = 0;
      for (let l = 0; l <= total; l += 1) {
        const p = route.getPointAtLength(l);
        const d = (p.x - sx) * (p.x - sx) + (p.y - sy) * (p.y - sy);
        if (d < best) { best = d; bl = l; }
      }
      stationLen.push(bl);
    });

    const STOP_BEFORE = 84;
    for (let q = 1; q < stationLen.length; q++) {
      stationLen[q] = Math.max(0, stationLen[q] - STOP_BEFORE);
    }
    
    prog.style.strokeDasharray = total.toString();

    function ease(x: number) { 
      return 0.5 - 0.5 * Math.cos(Math.PI * Math.min(1, Math.max(0, x))); 
    }

    const LOOP = 11;
    const ARRIVE = [0.7, 3.2, 5.7, 8.2];
    const DEPART = [1.3, 3.8, 6.3];
    const RESET = 10.3;

    function render(t: number, final: boolean) {
      const st = (function(time) {
        for (let i = 0; i < DEPART.length; i++) {
          if (time >= DEPART[i] && time < ARRIVE[i + 1]) {
            return { 
              len: stationLen[i] + (stationLen[i + 1] - stationLen[i]) * ease((time - DEPART[i]) / (ARRIVE[i + 1] - DEPART[i])), 
              moving: true 
            };
          }
        }
        let at = 0;
        for (let j = 0; j < ARRIVE.length; j++) if (time >= ARRIVE[j]) at = j;
        return { len: stationLen[at], moving: false };
      })(t);

      const len = st.len;
      const fade = final ? 1 : Math.min(1, t / 0.4, Math.max(0, (LOOP - t) / 0.7));
      const HALF_WHEELBASE = 32;
      const rp = route.getPointAtLength(Math.max(0, len - HALF_WHEELBASE));
      const fp = route.getPointAtLength(Math.min(total, len + HALF_WHEELBASE));
      const ang = Math.atan2(fp.y - rp.y, fp.x - rp.x) * 180 / Math.PI;
      const bob = st.moving ? Math.sin(t * 16) * 1.1 : 0;
      
      truck.setAttribute('transform', `translate(${((rp.x + fp.x) / 2).toFixed(1)} ${((rp.y + fp.y) / 2 + bob).toFixed(1)}) rotate(${ang.toFixed(1)}) scale(1.15) translate(-50 -63)`);
      truck.setAttribute('opacity', fade.toFixed(2));
      if (speed) speed.setAttribute('opacity', st.moving ? '0.7' : '0');
      
      spins.forEach(spin => {
        spin.setAttribute('transform', `rotate(${(len * 5).toFixed(0)})`);
      });
      
      prog.style.strokeDashoffset = (total - len).toFixed(1);
      prog.style.opacity = fade.toFixed(2);

      let current = -1;
      nodes.forEach((node, i) => {
        const reached = final || (t >= ARRIVE[i] && t < RESET);
        node.classList.toggle('is-done', reached);
        cards[i].classList.toggle('is-on', reached);
        if (reached) current = i;
        const dt = t - ARRIVE[i];
        if (!final && reached && dt < 1) {
          rings[i].setAttribute('r', (30 + dt * 34).toFixed(1));
          rings[i].setAttribute('opacity', (0.7 * (1 - dt)).toFixed(2));
        } else {
          rings[i].setAttribute('opacity', '0');
        }
      });
      cards.forEach((card, c) => {
        card.classList.toggle('is-now', c === current && !final);
      });
    }

    if (reduce) { 
      render(ARRIVE[3], true); 
      return; 
    }

    let t0: number | null = null;
    let raf: number = 0;

    function frame(now: number) {
      if (t0 === null) t0 = now;
      render(((now - t0) / 1000) % LOOP, false);
      raf = requestAnimationFrame(frame);
    }

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        if (!raf) raf = requestAnimationFrame(frame);
      } else {
        if (raf) {
          cancelAnimationFrame(raf);
          raf = 0;
        }
      }
    });
    observer.observe(root);

    return () => {
      observer.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .lgs-hero {
          --navy: #0b2a6b; --blue: #1f6fdb; --orange: #f7931e;
          --blue-50: #eef4fd; --blue-100: #dbe7fb; --slate: #44577c;
          position: relative; box-sizing: border-box; width: 100%;
          padding: clamp(32px, 6vw, 80px) 16px;
          background: linear-gradient(180deg, #ffffff 0%, #f4f8ff 100%);
          font-family: var(--font-inter), sans-serif;
          color: var(--navy);
          overflow: hidden;
        }
        .lgs-hero *, .lgs-hero *::before, .lgs-hero *::after { box-sizing: border-box; }
        .lgs-grid {
          max-width: 1200px; margin: 0 auto;
          display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1.05fr);
          gap: clamp(28px, 4vw, 64px); align-items: center;
        }

        .lgs-copy { display: grid; gap: 22px; justify-items: start; min-width: 0; }
        .lgs-copy > * { animation: lgs-rise .8s cubic-bezier(.2,.8,.2,1) both; }
        .lgs-copy > :nth-child(2) { animation-delay: .08s; }
        .lgs-copy > :nth-child(3) { animation-delay: .16s; }
        .lgs-copy > :nth-child(4) { animation-delay: .24s; }
        .lgs-copy > :nth-child(5) { animation-delay: .32s; }

        .lgs-pill {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 8px 14px; border-radius: 999px;
          background: var(--blue-50); border: 1px solid var(--blue-100);
          font-size: 12px; font-weight: 600; letter-spacing: .08em; text-transform: uppercase; color: var(--navy);
        }
        .lgs-pill i { width: 8px; height: 8px; border-radius: 50%; background: var(--orange); }

        .lgs-title {
          margin: 0; max-width: 100%;
          font-size: clamp(34px, 4.7vw, 60px); font-weight: 700; line-height: 1.12;
          letter-spacing: -0.01em; color: var(--navy); text-wrap: balance;
        }
        .lgs-title em { font-style: normal; color: var(--orange); }
        .lgs-nb { white-space: nowrap; }
        .lgs-sub { margin: 0; max-width: 54ch; font-size: clamp(16px, 1.5vw, 19px); line-height: 1.65; color: var(--slate); }
        .lgs-cta { display: flex; flex-wrap: wrap; gap: 14px; }

        .lgs-btn {
          display: inline-flex; align-items: center; justify-content: center; gap: 10px;
          min-height: 52px; padding: 0 28px; border-radius: 999px;
          font-size: 16px; font-weight: 600; text-decoration: none; cursor: pointer;
          transition: transform .2s ease, box-shadow .2s ease, background .2s ease;
        }
        .lgs-btn:focus-visible { outline: 3px solid var(--orange); outline-offset: 3px; }
        .lgs-btn-p { background: var(--orange); color: var(--navy); box-shadow: 0 10px 24px rgba(247,147,30,.32); }
        .lgs-btn-p:hover { transform: translateY(-2px); box-shadow: 0 14px 30px rgba(247,147,30,.4); }
        .lgs-btn-s { background: #fff; color: var(--navy); border: 2px solid var(--blue-100); }
        .lgs-btn-s:hover { border-color: var(--blue); transform: translateY(-2px); }

        .lgs-trust { list-style: none; margin: 0; padding: 0; display: flex; flex-wrap: wrap; gap: 10px 22px; }
        .lgs-trust li { display: inline-flex; align-items: center; gap: 8px; font-size: 14px; font-weight: 500; color: var(--slate); }
        .lgs-trust svg { width: 18px; height: 18px; flex: none; }

        .lgs-visual { min-width: 0; animation: lgs-fade 1s ease-out .15s both; }
        .lgs-stage { direction: ltr; position: relative; border-radius: 32px; box-shadow: 0 30px 70px rgba(11,42,107,.16), 0 4px 14px rgba(11,42,107,.06); }
        .lgs-svg { display: block; width: 100%; height: auto; border-radius: 32px; overflow: hidden; }
        .lgs-cloud { animation: lgs-cloud 26s ease-in-out infinite alternate; }
        .lgs-cloud.c2 { animation-duration: 34s; animation-delay: -9s; }
        .lgs-cloud.c3 { animation-duration: 30s; animation-delay: -16s; }
        .lgs-conn { stroke: #9db8e6; stroke-width: 2; stroke-dasharray: 3 7; stroke-linecap: round; }

        .lgs-node .bg { fill: #fff; stroke: var(--navy); stroke-width: 4; transition: fill .35s, stroke .35s; }
        .lgs-node .ic { fill: none; stroke: var(--navy); stroke-width: 2.4; stroke-linecap: round; stroke-linejoin: round; transition: stroke .35s; }
        .lgs-node.is-done .bg { fill: var(--blue); stroke: var(--blue); }
        .lgs-node.is-done .ic { stroke: #fff; }
        .lgs-node[data-i="3"].is-done .bg { fill: var(--orange); stroke: var(--orange); }
        .lgs-chk { transform-box: fill-box; transform-origin: center; transform: scale(0); transition: transform .4s cubic-bezier(.2,.9,.3,1.4); }
        .lgs-node.is-done .lgs-chk { transform: scale(1); }

        .lgs-cards {
          direction: ltr; list-style: none; margin: -30px 0 0; padding: 0 14px;
          position: relative; z-index: 1;
          display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 12px;
        }
        .lgs-card {
          display: grid; gap: 6px; align-content: start; min-width: 0;
          padding: 14px 12px 16px; border-radius: 20px;
          background: #fff; border: 2px solid var(--blue-100);
          box-shadow: 0 10px 26px rgba(11,42,107,.10);
          transition: border-color .3s, transform .3s, box-shadow .3s;
        }
        .lgs-card .n {
          display: inline-grid; place-items: center; width: 26px; height: 26px; border-radius: 50%;
          font-size: 13px; font-weight: 700; background: var(--blue-50); color: var(--navy);
          transition: background .3s, color .3s;
        }
        .lgs-card .t { font-size: 16px; font-weight: 600; line-height: 1.2; color: var(--navy); overflow-wrap: break-word; }
        .lgs-card .d { margin: 0; font-size: 13.5px; line-height: 1.45; color: var(--slate); }
        .lgs-card.is-on { border-color: var(--blue); }
        .lgs-card.is-on .n { background: var(--blue); color: #fff; }
        .lgs-card.is-now { border-color: var(--orange); transform: translateY(-6px); box-shadow: 0 16px 34px rgba(247,147,30,.25); }
        .lgs-card.is-now .n { background: var(--orange); color: var(--navy); }

        @keyframes lgs-rise { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: none; } }
        @keyframes lgs-fade { from { opacity: 0; transform: scale(.97); } to { opacity: 1; transform: none; } }
        @keyframes lgs-cloud { from { transform: translateX(-14px); } to { transform: translateX(34px); } }

        @media (max-width: 1240px) {
          .lgs-conn { display: none; }
          .lgs-cards { margin-top: 14px; padding: 0; grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .lgs-card.is-now { transform: none; }
        }
        @media (max-width: 960px) {
          .lgs-grid { grid-template-columns: minmax(0, 1fr); }
          .lgs-visual { max-width: 680px; width: 100%; margin: 0 auto; }
        }
        @media (max-width: 640px) {
          .lgs-hero { padding-block: 28px 40px; }
          .lgs-cta .lgs-btn { flex: 1 1 100%; }
        }
        @media (prefers-reduced-motion: reduce) {
          .lgs-hero *, .lgs-hero *::before, .lgs-hero *::after { animation: none !important; transition: none !important; }
        }
      ` }} />
      <section className="lgs-hero" aria-labelledby="lgs-title">
        <div className={cn("lgs-grid", isRTL && "rtl")}>

          <div className={cn("lgs-copy", isRTL && "text-right justify-items-end")}>
            <span className="lgs-pill"><i></i>{t("hero_pill")}</span>
            <h1 
              className="lgs-title" 
              id="lgs-title"
              dangerouslySetInnerHTML={{ __html: t("hero_title_html") }}
            />
            <p className="lgs-sub">{t("hero_subtitle")}</p>
            <div className="lgs-cta">
              <a className="lgs-btn lgs-btn-p" href="#contact">
                {t("hero_cta_primary")}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={cn(isRTL && "rotate-180")}>
                  <path d="M5 12h14M13 6l6 6-6 6"/>
                </svg>
              </a>
              <a className="lgs-btn lgs-btn-s" href="#etapes">{t("hero_cta_secondary")}</a>
            </div>
            <ul className={cn("lgs-trust", isRTL && "flex-row-reverse")}>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="#1f6fdb" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10"/><path d="M7.5 12.5l3 3 6-6.5"/>
                </svg>
                {t("hero_trust_cod")}
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="#1f6fdb" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10"/><path d="M7.5 12.5l3 3 6-6.5"/>
                </svg>
                {t("hero_trust_returns")}
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="#1f6fdb" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10"/><path d="M7.5 12.5l3 3 6-6.5"/>
                </svg>
                {t("hero_trust_support")}
              </li>
            </ul>
          </div>

          <div className="lgs-visual" id="lgs-visual" ref={visualRef}>
            <div className="lgs-stage">
              <svg className="lgs-svg" viewBox="0 0 640 400" role="img" aria-label="Un camion Logistica Tunisie parcourt les quatre étapes">
                <defs>
                  <linearGradient id="lgs-bg" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#f6f9ff"/><stop offset="1" stopColor="#e3edfc"/>
                  </linearGradient>
                  <pattern id="lgs-dots" width="24" height="24" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="1.3" fill="#c3d6f4"/>
                  </pattern>
                  <clipPath id="lgs-clip"><rect width="640" height="400" rx="32"/></clipPath>
                </defs>

                <g clipPath="url(#lgs-clip)">
                  <rect width="640" height="400" fill="url(#lgs-bg)"/>
                  <rect width="640" height="400" fill="url(#lgs-dots)" opacity=".7"/>

                  <g className="lgs-cloud"><rect x="36" y="40" width="96" height="26" rx="13" fill="#fff" opacity=".95"/><rect x="60" y="26" width="52" height="26" rx="13" fill="#fff" opacity=".95"/></g>
                  <g className="lgs-cloud c2"><rect x="300" y="26" width="84" height="22" rx="11" fill="#fff" opacity=".9"/><rect x="322" y="14" width="44" height="22" rx="11" fill="#fff" opacity=".9"/></g>
                  <g className="lgs-cloud c3"><rect x="470" y="70" width="80" height="22" rx="11" fill="#fff" opacity=".85"/><rect x="490" y="58" width="42" height="22" rx="11" fill="#fff" opacity=".85"/></g>

                  <g fill="#d5e3fa">
                    <rect x="14" y="322" width="40" height="90"/><rect x="60" y="340" width="30" height="70"/>
                    <rect x="96" y="326" width="36" height="86"/>
                    <path d="M170 360 L170 330 L230 306 L290 330 L290 360 Z"/><rect x="170" y="358" width="120" height="60"/>
                    <rect x="300" y="334" width="34" height="80"/><rect x="340" y="318" width="42" height="96"/>
                    <rect x="388" y="344" width="30" height="70"/><rect x="424" y="330" width="38" height="84"/>
                    <rect x="468" y="348" width="30" height="70"/><rect x="504" y="324" width="40" height="90"/>
                    <rect x="550" y="340" width="34" height="74"/><rect x="590" y="326" width="40" height="90"/>
                  </g>
                  <g fill="#c4d8f6">
                    <rect x="188" y="372" width="30" height="40" rx="3"/><rect x="226" y="372" width="30" height="40" rx="3"/>
                  </g>
                </g>

                <g>
                  <line className="lgs-conn" x1="80"  y1="333" x2="80"  y2="376"/>
                  <line className="lgs-conn" x1="240" y1="253" x2="240" y2="376"/>
                  <line className="lgs-conn" x1="400" y1="318" x2="400" y2="376"/>
                  <line className="lgs-conn" x1="560" y1="238" x2="560" y2="376"/>
                </g>

                <path className="lgs-route" d="M80,295 C150,295 170,215 240,215 C310,215 330,280 400,280 C470,280 490,200 560,200" fill="none" stroke="#c9dcf8" strokeWidth="22" strokeLinecap="round"/>
                <path d="M80,295 C150,295 170,215 240,215 C310,215 330,280 400,280 C470,280 490,200 560,200" fill="none" stroke="#ffffff" strokeWidth="3" strokeDasharray="10 12" strokeLinecap="round" opacity=".95"/>
                <path className="lgs-prog" d="M80,295 C150,295 170,215 240,215 C310,215 330,280 400,280 C470,280 490,200 560,200" fill="none" stroke="#1f6fdb" strokeWidth="8" strokeLinecap="round"/>

                <circle className="lgs-ring" cx="80"  cy="295" r="30" fill="none" stroke="#f7931e" strokeWidth="3" opacity="0"/>
                <circle className="lgs-ring" cx="240" cy="215" r="30" fill="none" stroke="#f7931e" strokeWidth="3" opacity="0"/>
                <circle className="lgs-ring" cx="400" cy="280" r="30" fill="none" stroke="#f7931e" strokeWidth="3" opacity="0"/>
                <circle className="lgs-ring" cx="560" cy="200" r="30" fill="none" stroke="#f7931e" strokeWidth="3" opacity="0"/>

                <g className="lgs-truck" opacity="0">
                  <g className="lgs-speed" opacity="0" stroke="#1f6fdb" strokeWidth="3" strokeLinecap="round">
                    <line x1="-34" y1="22" x2="-10" y2="22"/><line x1="-26" y1="34" x2="-10" y2="34"/><line x1="-38" y1="46" x2="-10" y2="46"/>
                  </g>
                  <rect x="0" y="4" width="64" height="44" rx="5" fill="#0b2a6b"/>
                  <g transform="translate(16 11) scale(.18)">
                    <path d="M0,0 L174.5,87.3 L61.1,87.3 Z" fill="#ffffff"/>
                    <path d="M61.1,87.3 L174.5,87.3 L0,174.5 Z" fill="#1f6fdb"/>
                    <path d="M0,0 L61.1,87.3 L0,87.3 Z" fill="#f7931e"/>
                  </g>
                  <rect x="0" y="48" width="96" height="7" rx="3" fill="#1f6fdb"/>
                  <path d="M68,18 H84 L96,34 V48 H68 Z" fill="#f7931e"/>
                  <path d="M74,23 H83 L90,33 H74 Z" fill="#dce9ff"/>
                  <g transform="translate(22 57)"><g className="lgs-spin"><circle r="9" fill="#0b2a6b" stroke="#ffffff" strokeWidth="2.5"/><path d="M-5.5 0H5.5M0 -5.5V5.5" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round"/><circle r="2.6" fill="#f7931e"/></g></g>
                  <g transform="translate(78 57)"><g className="lgs-spin"><circle r="9" fill="#0b2a6b" stroke="#ffffff" strokeWidth="2.5"/><path d="M-5.5 0H5.5M0 -5.5V5.5" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round"/><circle r="2.6" fill="#f7931e"/></g></g>
                </g>

                <g className="lgs-node" data-i="0" data-x="80" data-y="295" transform="translate(80 295)">
                  <circle className="bg" r="30"/>
                  <g className="ic" transform="scale(1.25)"><path d="M-9,-5H9L7.5,10H-7.5Z"/><path d="M-4.5,-5V-8a4.5,4.5 0 0 1 9,0V-5"/></g>
                  <g transform="translate(22 -22)"><g className="lgs-chk"><circle r="10" fill="#0b2a6b" stroke="#fff" strokeWidth="2.5"/><path d="M-4,0L-1,3L4.5,-3.5" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></g></g>
                </g>
                <g className="lgs-node" data-i="1" data-x="240" data-y="215" transform="translate(240 215)">
                  <circle className="bg" r="30"/>
                  <g className="ic" transform="scale(1.25)"><path d="M0,-11L10,-5.5V5.5L0,11L-10,5.5V-5.5Z"/><path d="M-10,-5.5L0,0L10,-5.5M0,0V11"/></g>
                  <g transform="translate(22 -22)"><g className="lgs-chk"><circle r="10" fill="#0b2a6b" stroke="#fff" strokeWidth="2.5"/><path d="M-4,0L-1,3L4.5,-3.5" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></g></g>
                </g>
                <g className="lgs-node" data-i="2" data-x="400" data-y="280" transform="translate(400 280)">
                  <circle className="bg" r="30"/>
                  <g className="ic" transform="scale(1.25)"><path d="M-12,-7H3V5H-12Z"/><path d="M3,-3H8L12,1V5H3Z"/><circle cx="-6" cy="7" r="2.2"/><circle cx="7" cy="7" r="2.2"/></g>
                  <g transform="translate(22 -22)"><g className="lgs-chk"><circle r="10" fill="#0b2a6b" stroke="#fff" strokeWidth="2.5"/><path d="M-4,0L-1,3L4.5,-3.5" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></g></g>
                </g>
                <g className="lgs-node" data-i="3" data-x="560" data-y="200" transform="translate(560 200)">
                  <circle className="bg" r="30"/>
                  <g className="ic" transform="scale(1.25)"><path d="M0,12C-7,3-10,-1-10,-5a10,10 0 0 1 20,0C10,-1 7,3 0,12Z"/><circle cx="0" cy="-5" r="3.2"/></g>
                  <g transform="translate(22 -22)"><g className="lgs-chk"><circle r="10" fill="#0b2a6b" stroke="#fff" strokeWidth="2.5"/><path d="M-4,0L-1,3L4.5,-3.5" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></g></g>
                </g>

              </svg>
            </div>

            <ol className="lgs-cards">
              <li className="lgs-card">
                <span className="n">1</span>
                <span className="t">{t("hero_station_1_t")}</span>
                <p className="d">{t("hero_station_1_d")}</p>
              </li>
              <li className="lgs-card">
                <span className="n">2</span>
                <span className="t">{t("hero_station_2_t")}</span>
                <p className="d">{t("hero_station_2_d")}</p>
              </li>
              <li className="lgs-card">
                <span className="n">3</span>
                <span className="t">{t("hero_station_3_t")}</span>
                <p className="d">{t("hero_station_3_d")}</p>
              </li>
              <li className="lgs-card">
                <span className="n">4</span>
                <span className="t">{t("hero_station_4_t")}</span>
                <p className="d">{t("hero_station_4_d")}</p>
              </li>
            </ol>
          </div>

        </div>
      </section>
    </>
  );
}
