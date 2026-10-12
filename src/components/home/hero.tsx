"use client";

import { useEffect, useRef } from "react";
import { useTranslation } from "@/hooks/use-translation";
import { useLanguage } from "@/contexts/language-context";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

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

    const STOP_BEFORE = 88; // Slightly more distance for better stopping
    for (let q = 1; q < stationLen.length; q++) {
      stationLen[q] = Math.max(0, stationLen[q] - STOP_BEFORE);
    }
    
    prog.style.strokeDasharray = total.toString();

    function ease(x: number) { 
      return 0.5 - 0.5 * Math.cos(Math.PI * Math.min(1, Math.max(0, x))); 
    }

    const LOOP = 14;
    const ARRIVE = [0.7, 4.0, 7.3, 10.6];
    const DEPART = [1.8, 5.1, 8.4];
    const RESET = 13.5;

    function render(time: number, final: boolean) {
      const st = (function(t) {
        for (let i = 0; i < DEPART.length; i++) {
          if (t >= DEPART[i] && t < ARRIVE[i + 1]) {
            return { 
              len: stationLen[i] + (stationLen[i + 1] - stationLen[i]) * ease((t - DEPART[i]) / (ARRIVE[i + 1] - DEPART[i])), 
              moving: true 
            };
          }
        }
        let at = 0;
        for (let j = 0; j < ARRIVE.length; j++) if (time >= ARRIVE[j]) at = j;
        return { len: stationLen[at], moving: false };
      })(time);

      const len = st.len;
      const fade = final ? 1 : Math.min(1, time / 0.5, Math.max(0, (LOOP - time) / 0.8));
      const HALF_WHEELBASE = 36;
      const rp = route.getPointAtLength(Math.max(0, len - HALF_WHEELBASE));
      const fp = route.getPointAtLength(Math.min(total, len + HALF_WHEELBASE));
      const ang = Math.atan2(fp.y - rp.y, fp.x - rp.x) * 180 / Math.PI;
      const bob = st.moving ? Math.sin(time * 18) * 1.5 : 0;
      
      truck.setAttribute('transform', `translate(${((rp.x + fp.x) / 2).toFixed(1)} ${((rp.y + fp.y) / 2 + bob).toFixed(1)}) rotate(${ang.toFixed(1)}) scale(1.2) translate(-50 -65)`);
      truck.setAttribute('opacity', fade.toFixed(2));
      
      spins.forEach(spin => {
        spin.setAttribute('transform', `rotate(${(len * 5.5).toFixed(0)})`);
      });
      
      prog.style.strokeDashoffset = (total - len).toFixed(1);
      prog.style.opacity = fade.toFixed(2);

      let current = -1;
      nodes.forEach((node, i) => {
        const reached = final || (time >= ARRIVE[i] && time < RESET);
        node.classList.toggle('is-done', reached);
        if (cards[i]) cards[i].classList.toggle('is-on', reached);
        if (reached) current = i;
        
        const dt = time - ARRIVE[i];
        if (!final && reached && dt < 1 && rings[i]) {
          rings[i].setAttribute('r', (30 + dt * 45).toFixed(1));
          rings[i].setAttribute('opacity', (0.8 * (1 - dt)).toFixed(2));
        } else if (rings[i]) {
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
          position: relative; width: 100%;
          padding: clamp(60px, 8vw, 120px) 20px;
          background: radial-gradient(circle at 100% 0%, #f4f8ff 0%, #ffffff 100%);
          color: var(--navy);
          overflow: hidden;
        }
        .lgs-grid {
          max-width: 1280px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr 1.1fr;
          gap: 60px; align-items: center;
        }
        .lgs-copy { display: grid; gap: 28px; justify-items: start; }
        .lgs-pill {
          display: inline-flex; align-items: center; gap: 10px;
          padding: 10px 18px; border-radius: 999px;
          background: white; border: 1px solid var(--blue-100);
          font-size: 13px; font-weight: 800; letter-spacing: .1em; text-transform: uppercase;
          box-shadow: 0 4px 12px rgba(11,42,107,0.04);
        }
        .lgs-pill i { width: 10px; height: 10px; border-radius: 50%; background: var(--orange); position: relative; }
        .lgs-pill i::after { content: ''; position: absolute; inset: -4px; border-radius: 50%; background: var(--orange); opacity: 0.3; animation: ping 2s infinite; }
        
        .lgs-title {
          margin: 0; font-size: clamp(34px, 4.5vw, 56px); font-weight: 800; line-height: 1.05;
          letter-spacing: -0.02em; text-transform: uppercase;
        }
        .lgs-title em { font-style: normal; color: var(--orange); text-shadow: 0 0 40px rgba(247,147,30,0.15); }
        .lgs-sub { margin: 0; font-size: 20px; line-height: 1.6; color: var(--slate); font-weight: 500; }
        
        .lgs-cta { display: flex; flex-wrap: wrap; gap: 16px; }
        .lgs-btn {
          display: inline-flex; align-items: center; justify-content: center; gap: 12px;
          min-height: 64px; padding: 0 40px; border-radius: 999px;
          font-size: 17px; font-weight: 800; text-decoration: none; cursor: pointer;
          transition: all 0.4s cubic-bezier(0.2, 1, 0.3, 1);
          text-transform: uppercase;
        }
        .lgs-btn-p { background: var(--orange); color: white; box-shadow: 0 20px 40px rgba(247,147,30,0.25); }
        .lgs-btn-p:hover { transform: translateY(-4px) scale(1.02); box-shadow: 0 25px 50px rgba(247,147,30,0.35); }
        .lgs-btn-s { background: white; color: var(--navy); border: 2px solid var(--blue-100); }
        .lgs-btn-s:hover { border-color: var(--blue); transform: translateY(-4px); background: var(--blue-50); }
        
        .lgs-visual { position: relative; animation: lgs-float 6s ease-in-out infinite; }
        @keyframes lgs-float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }

        .lgs-stage { position: relative; border-radius: 40px; background: white; padding: 12px; box-shadow: 0 40px 100px rgba(11,42,107,0.12); }
        .lgs-svg { display: block; width: 100%; height: auto; border-radius: 32px; overflow: hidden; background: #f8fbff; }
        
        .lgs-cloud { animation: lgs-drift 30s linear infinite; opacity: 0.6; }
        @keyframes lgs-drift { from { transform: translateX(0); } to { transform: translateX(640px); } }

        .lgs-node .bg { fill: #fff; stroke: var(--navy); stroke-width: 4; transition: all .4s cubic-bezier(0.2, 1, 0.3, 1); }
        .lgs-node .ic { fill: none; stroke: var(--navy); stroke-width: 2.8; transition: stroke .4s; }
        .lgs-node.is-done .bg { fill: var(--blue); stroke: var(--blue); transform: scale(1.1); }
        .lgs-node.is-done .ic { stroke: #fff; }
        .lgs-node[data-i="3"].is-done .bg { fill: var(--orange); stroke: var(--orange); }
        
        .lgs-chk { transform-origin: center; transform: scale(0); transition: transform .5s cubic-bezier(.2,.9,.3,1.5); }
        .lgs-node.is-done .lgs-chk { transform: scale(1); }
        .lgs-ring { fill: none; stroke: var(--orange); stroke-width: 4; pointer-events: none; }
        
        .lgs-cards {
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px;
          margin-top: -40px; position: relative; z-index: 10; padding: 0 20px;
        }
        .lgs-card {
          background: white; border: 2px solid var(--blue-100); border-radius: 28px;
          padding: 24px 20px; box-shadow: 0 10px 30px rgba(11,42,107,0.06);
          transition: all 0.4s cubic-bezier(0.2, 1, 0.3, 1);
        }
        .lgs-card .n {
          width: 32px; height: 32px; border-radius: 10px; background: var(--blue-50);
          display: flex; align-items: center; justify-content: center;
          font-weight: 800; font-size: 14px; margin-bottom: 12px;
        }
        .lgs-card .t { font-weight: 800; font-size: 16px; margin-bottom: 6px; text-transform: uppercase; color: var(--navy); }
        .lgs-card .d { font-size: 14px; color: var(--slate); font-weight: 500; margin: 0; }
        .lgs-card.is-on { border-color: var(--blue); }
        .lgs-card.is-now { border-color: var(--orange); transform: translateY(-12px); box-shadow: 0 25px 60px rgba(247,147,30,0.25); }

        @media (max-width: 1024px) {
          .lgs-grid { grid-template-columns: 1fr; text-align: center; gap: 40px; }
          .lgs-copy { justify-items: center; }
          .lgs-visual { max-width: 640px; margin: 0 auto; }
          .lgs-cards { grid-template-columns: repeat(2, 1fr); margin-top: 20px; }
        }
        @media (max-width: 640px) {
          .lgs-cards { grid-template-columns: 1fr; }
          .lgs-card.is-now { transform: none; }
        }
      ` }} />
      
      <section className="lgs-hero">
        <div className={cn("lgs-grid", isRTL && "rtl")}>
          
          <motion.div 
            initial={{ opacity: 0, x: isRTL ? 40 : -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className={cn("lgs-copy", isRTL && "text-right justify-items-end")}
          >
            <span className="lgs-pill"><i></i>{t("hero_pill")}</span>
            <h1 
              className="lgs-title"
              dangerouslySetInnerHTML={{ __html: t("hero_title_html").toUpperCase() }}
            />
            <p className="lgs-sub">{t("hero_subtitle")}</p>
            <div className="lgs-cta">
              <a className="lgs-btn lgs-btn-p" href="#contact">
                {t("hero_cta_primary")}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={cn(isRTL && "rotate-180")}>
                  <path d="M5 12h14M13 6l6 6-6 6"/>
                </svg>
              </a>
              <a className="lgs-btn lgs-btn-s" href="#etapes">{t("hero_cta_secondary")}</a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lgs-visual" 
            ref={visualRef}
          >
            <div className="lgs-stage">
              <svg className="lgs-svg" viewBox="0 0 640 400">
                <defs>
                  <linearGradient id="lgs-sky" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#eaf3ff"/><stop offset="1" stopColor="#ffffff"/>
                  </linearGradient>
                  <clipPath id="lgs-round"><rect width="640" height="400" rx="32"/></clipPath>
                </defs>

                <g clipPath="url(#lgs-round)">
                  <rect width="640" height="400" fill="url(#lgs-sky)"/>
                  
                  {/* Background Décor */}
                  <g className="lgs-sky-decor" opacity="0.6">
                    <circle className="lgs-cloud" cx="-100" cy="60" r="40" fill="white" style={{ animationDelay: '0s' }} />
                    <circle className="lgs-cloud" cx="-400" cy="110" r="60" fill="white" style={{ animationDelay: '-15s' }} />
                    <circle className="lgs-cloud" cx="-250" cy="40" r="30" fill="white" style={{ animationDelay: '-8s' }} />
                  </g>

                  {/* Skyline */}
                  <path d="M0,320 L80,320 L80,270 L140,270 L140,300 L200,300 L200,280 L260,280 L260,320 L420,320 L420,260 L490,260 L490,300 L560,300 L560,320 L640,320 L640,400 L0,400 Z" fill="#dce9ff" opacity="0.8" />
                  
                  {/* Route Paths */}
                  <path className="lgs-route" d="M80,295 C150,295 170,215 240,215 C310,215 330,280 400,280 C470,280 490,200 560,200" fill="none" stroke="#dbe7fb" strokeWidth="26" strokeLinecap="round"/>
                  <path d="M80,295 C150,295 170,215 240,215 C310,215 330,280 400,280 C470,280 490,200 560,200" fill="none" stroke="white" strokeWidth="4" strokeDasharray="12 16" strokeLinecap="round" opacity="0.9"/>
                  <path className="lgs-prog" d="M80,295 C150,295 170,215 240,215 C310,215 330,280 400,280 C470,280 490,200 560,200" fill="none" stroke="#1f6fdb" strokeWidth="10" strokeLinecap="round"/>

                  {/* Interactive Elements */}
                  <circle className="lgs-ring" cx="80" cy="295" r="30" opacity="0"/>
                  <circle className="lgs-ring" cx="240" cy="215" r="30" opacity="0"/>
                  <circle className="lgs-ring" cx="400" cy="280" r="30" opacity="0"/>
                  <circle className="lgs-ring" cx="560" cy="200" r="30" opacity="0"/>

                  {/* Detailed Truck SVG */}
                  <g className="lgs-truck" opacity="0">
                    {/* Cabin */}
                    <path d="M65,15 Q65,10 70,10 H85 Q90,10 95,25 L100,45 V55 H65 Z" fill="#f7931e" />
                    {/* Cargo Body */}
                    <rect x="0" y="5" width="70" height="50" rx="4" fill="#0b2a6b"/>
                    {/* Window */}
                    <path d="M78,16 H86 L92,34 H72 Z" fill="#dce9ff" opacity="0.6" />
                    {/* Chassis */}
                    <rect x="5" y="52" width="90" height="6" rx="3" fill="#1f6fdb"/>
                    {/* Wheels with Spin animation */}
                    <g transform="translate(20 62)">
                      <g className="lgs-spin"><circle r="10" fill="#0b2a6b" stroke="white" strokeWidth="3"/><path d="M-6 0H6M0 -6V6" stroke="white" strokeWidth="2" strokeLinecap="round"/></g>
                    </g>
                    <g transform="translate(80 62)">
                      <g className="lgs-spin"><circle r="10" fill="#0b2a6b" stroke="white" strokeWidth="3"/><path d="M-6 0H6M0 -6V6" stroke="white" strokeWidth="2" strokeLinecap="round"/></g>
                    </g>
                  </g>

                  {/* Stations */}
                  <g className="lgs-node" data-i="0" data-x="80" data-y="295" transform="translate(80 295)">
                    <circle className="bg" r="34"/>
                    <g className="ic" transform="scale(1.3)"><path d="M-9,-5H9L7.5,10H-7.5Z"/><path d="M-4.5,-5V-8a4.5,4.5 0 0 1 9,0V-5"/></g>
                    <g className="lgs-chk" transform="translate(24 -24)"><circle r="11" fill="#0b2a6b" stroke="white" strokeWidth="3"/><path d="M-4.5,0L-1,3.5L5,-4" fill="none" stroke="white" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"/></g>
                  </g>
                  
                  <g className="lgs-node" data-i="1" data-x="240" data-y="215" transform="translate(240 215)">
                    <circle className="bg" r="34"/>
                    <g className="ic" transform="scale(1.3)"><path d="M0,-11L10,-5.5V5.5L0,11L-10,5.5V-5.5Z"/></g>
                    <g className="lgs-chk" transform="translate(24 -24)"><circle r="11" fill="#0b2a6b" stroke="white" strokeWidth="3"/><path d="M-4.5,0L-1,3.5L5,-4" fill="none" stroke="white" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"/></g>
                  </g>
                  
                  <g className="lgs-node" data-i="2" data-x="400" data-y="280" transform="translate(400 280)">
                    <circle className="bg" r="34"/>
                    <g className="ic" transform="scale(1.3)"><path d="M-12,-7H3V5H-12Z"/><path d="M-12,5 L-4.5,-2 L3,5" /></g>
                    <g className="lgs-chk" transform="translate(24 -24)"><circle r="11" fill="#0b2a6b" stroke="white" strokeWidth="3"/><path d="M-4.5,0L-1,3.5L5,-4" fill="none" stroke="white" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"/></g>
                  </g>
                  
                  <g className="lgs-node" data-i="3" data-x="560" data-y="200" transform="translate(560 200)">
                    <circle className="bg" r="34"/>
                    <g className="ic" transform="scale(1.3)"><path d="M0,12C-7,3-10,-1-10,-5a10,10 0 0 1 20,0C10,-1 7,3 0,12Z"/></g>
                    <g className="lgs-chk" transform="translate(24 -24)"><circle r="11" fill="#f7931e" stroke="white" strokeWidth="3"/><path d="M-4.5,0L-1,3.5L5,-4" fill="none" stroke="white" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"/></g>
                  </g>
                </g>
              </svg>
            </div>

            <ol className="lgs-cards">
              <li className="lgs-card">
                <span className="n">01</span>
                <span className="t">{t("hero_station_1_t")}</span>
                <p className="d">{t("hero_station_1_d")}</p>
              </li>
              <li className="lgs-card">
                <span className="n">02</span>
                <span className="t">{t("hero_station_2_t")}</span>
                <p className="d">{t("hero_station_2_d")}</p>
              </li>
              <li className="lgs-card">
                <span className="n">03</span>
                <span className="t">{t("hero_station_3_t")}</span>
                <p className="d">{t("hero_station_3_d")}</p>
              </li>
              <li className="lgs-card">
                <span className="n">04</span>
                <span className="t">{t("hero_station_4_t")}</span>
                <p className="d">{t("hero_station_4_d")}</p>
              </li>
            </ol>
          </motion.div>
        </div>
      </section>
    </>
  );
}