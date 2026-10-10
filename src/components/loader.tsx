'use client';

import React, { useEffect } from 'react';

export function Loader() {
  useEffect(() => {
    (function () {
      var DEMO = false;
      var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
      var HOLD = reduce ? 1.2 : (DEMO ? 1.15 : 0.75);
      var MORPH = reduce ? 0.001 : (DEMO ? 0.95 : 0.65);

      var SCENES = [
        {
          p: [
            [[12,12],[99.25,55.65],[186.5,99.3],[73.1,99.3],[42.55,55.65]],
            [[73.1,99.3],[129.8,99.3],[186.5,99.3],[12,186.5],[42.55,142.9]],
            [[12,12],[42.55,55.65],[73.1,99.3],[12,99.3],[12,55.65]]
          ],
          x: { wheel: 0, win: 0, tape: 0, speed: 0, ripple: 0, shadow: 0 }
        },
        {
          p: [
            [[48,64],[100,90],[100,152],[48,126],[48,95]],
            [[100,90],[152,64],[152,126],[100,152],[100,121]],
            [[100,38],[152,64],[100,90],[48,64],[74,51]]
          ],
          x: { wheel: 0, win: 0, tape: 1, speed: 0, ripple: 0, shadow: 48 }
        },
        {
          p: [
            [[28,62],[78,62],[128,62],[128,128],[28,128]],
            [[24,128],[107,128],[190,128],[190,138],[24,138]],
            [[134,80],[160,80],[186,106],[186,128],[134,128]]
          ],
          x: { wheel: 1, win: 1, tape: 0, speed: 1, ripple: 0, shadow: 84 }
        },
        {
          p: [
            [[100,158],[78,112],[56,70],[68,38],[100,26]],
            [[100,26],[132,38],[144,70],[122,112],[100,158]],
            [[100,53],[114.3,63.4],[108.8,80.1],[91.2,80.1],[85.7,63.4]]
          ],
          x: { wheel: 0, win: 0, tape: 0, speed: 0, ripple: 1, shadow: 26 }
        }
      ];

      var N = SCENES.length, STEP = HOLD + MORPH, CYCLE = N * STEP;
      var $ = function (id: string) { return document.getElementById(id); };
      var polys = [$('lg-p0'), $('lg-p1'), $('lg-p2')];
      var rig = $('lg-rig'), shadow = $('lg-shadow'), ripple = $('lg-ripple');
      var win = $('lg-win'), tape = $('lg-tape'), speed = $('lg-speed');
      var w1 = $('lg-w1'), w2 = $('lg-w2');
      var spins = document.querySelectorAll('.lg-spin');
      var speedLines = speed?.querySelectorAll('line');
      var fill = $('lg-fill'), pct = $('lg-pct'), loader = $('lg-loader');
      var stepEls = $('lg-steps')?.children;

      if (!polys[0] || !rig || !shadow || !ripple || !win || !tape || !speed || !w1 || !w2 || !fill || !pct || !loader || !stepEls) return;

      var loaded = document.readyState === 'complete';
      var htmlOverflow = document.documentElement.style.overflow;
      if (!DEMO) document.documentElement.style.overflow = 'hidden';
      
      const handleLoad = () => { loaded = true; };
      window.addEventListener('load', handleLoad);

      function ease(t: number) { return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; }
      function mix(a: number, b: number, k: number) { return a + (b - a) * k; }

      var lastActive = -1, finished = false, lastCycle = 0, t0: number | null = null, spinAngle = 0, prev = 0;

      function setSteps(active: number) {
        if (active === lastActive || !stepEls) return;
        lastActive = active;
        for (var i = 0; i < stepEls.length; i++) {
          stepEls[i].className = i < active ? 'done' : (i === active ? 'on' : '');
        }
      }

      function hide() {
        if (finished || !loader || !pct) return;
        finished = true;
        loader.classList.add('is-done');
        pct.textContent = '100 %';
        document.documentElement.style.overflow = htmlOverflow;
        setTimeout(function () { if(loader) loader.style.display = 'none'; }, 700);
      }
      
      (window as any).LogisticaLoader = { hide: hide };
      if (!DEMO) setTimeout(hide, 15000);

      function frame(now: number) {
        if (finished) return;
        if (t0 === null) { t0 = now; prev = now; }
        var t = (now - t0) / 1000;
        var dt = (now - prev) / 1000; prev = now;

        var cycleNo = Math.floor(t / CYCLE);
        if (cycleNo > lastCycle) {
          lastCycle = cycleNo;
          if (!DEMO && loaded) { hide(); return; }
        }
        var tc = t - cycleNo * CYCLE;
        var idx = Math.floor(tc / STEP);
        var local = tc - idx * STEP;
        var raw = local < HOLD ? 0 : (local - HOLD) / MORPH;
        var k = ease(Math.min(1, raw));
        var A = SCENES[idx], B = SCENES[(idx + 1) % N];

        for (var i = 0; i < 3; i++) {
          var pts = [];
          for (var j = 0; j < 5; j++) {
            pts.push(mix(A.p[i][j][0], B.p[i][j][0], k).toFixed(2) + ',' + mix(A.p[i][j][1], B.p[i][j][1], k).toFixed(2));
          }
          polys[i]?.setAttribute('points', pts.join(' '));
        }

        var X: any = {};
        for (var key in A.x) X[key] = mix((A.x as any)[key], (B.x as any)[key], k);

        var s = Math.sin(Math.PI * Math.min(1, raw));
        var float = reduce ? 0 : Math.sin(t * 2.4) * 1.6;
        var hop = -16 * s + float;
        var tilt = (idx % 2 === 0 ? 1 : -1) * 7 * s;
        var sx = 1 + 0.07 * s, sy = 1 - 0.05 * s;
        rig?.setAttribute('transform',
          'translate(0 ' + hop.toFixed(2) + ') translate(100 100) rotate(' + tilt.toFixed(2) + ') scale(' + sx.toFixed(3) + ' ' + sy.toFixed(3) + ') translate(-100 -100)');

        spinAngle += dt * 380;
        w1?.setAttribute('transform', 'translate(62 142) scale(' + X.wheel.toFixed(3) + ')');
        w2?.setAttribute('transform', 'translate(156 142) scale(' + X.wheel.toFixed(3) + ')');
        for (var m = 0; m < spins.length; m++) spins[m].setAttribute('transform', 'rotate(' + spinAngle.toFixed(1) + ')');
        win?.setAttribute('opacity', X.win.toFixed(3));
        tape?.setAttribute('opacity', X.tape.toFixed(3));
        speed?.setAttribute('opacity', X.speed.toFixed(3));
        if (speedLines) {
          for (var n = 0; n < speedLines.length; n++) speedLines[n].setAttribute('stroke-dashoffset', (t * 46).toFixed(1));
        }

        var rx = Math.max(0, X.shadow);
        shadow?.setAttribute('rx', rx.toFixed(2));
        shadow?.setAttribute('ry', (rx * 0.14).toFixed(2));
        var ph = (t * 0.9) % 1;
        ripple?.setAttribute('rx', (8 + ph * 44).toFixed(2));
        ripple?.setAttribute('ry', ((8 + ph * 44) * 0.24).toFixed(2));
        ripple?.setAttribute('opacity', ((1 - ph) * X.ripple).toFixed(3));

        var prog = Math.min(1, tc / (CYCLE - MORPH));
        prog = prog < 1 ? prog : 1;
        if (fill) fill.style.transform = 'scaleX(' + prog.toFixed(4) + ')';
        if (pct) pct.textContent = Math.floor(prog * 100) + ' %';

        setSteps(idx === N - 1 ? idx : (raw > 0.5 ? idx + 1 : idx));

        requestAnimationFrame(frame);
      }

      setSteps(0);
      requestAnimationFrame(frame);

      return () => {
        window.removeEventListener('load', handleLoad);
        finished = true;
      };
    })();
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .lg-loader {
          --bg: #ffffff; --navy: #0b2a6b; --blue: #1f6fdb; --orange: #f7931e;
          --muted: #5a6a8a; --track: #e3ebf8; --dot: #dbe5f5;
          --font-display: "Poppins", "Segoe UI", Helvetica, Arial, sans-serif;
          --font-data: "DM Mono", ui-monospace, "SFMono-Regular", Menlo, Consolas, monospace;
          position: fixed; inset: 0; z-index: 99999; overflow-y: auto; box-sizing: border-box;
          padding-inline: 16px;
          background-color: var(--bg); color: var(--navy); font-family: var(--font-display);
          line-height: 1.4; -webkit-font-smoothing: antialiased;
          display: grid;
          align-content: center;
          justify-items: center;
          gap: 22px;
          padding-block: 32px;
          background-image: radial-gradient(var(--dot) 1.2px, transparent 1.2px);
          background-size: 26px 26px;
          transition: opacity .6s ease, visibility .6s;
        }
        .lg-loader.is-done { opacity: 0; visibility: hidden; pointer-events: none; }

        .lg-stage { position: relative; width: min(62vw, 270px); aspect-ratio: 1; max-width: 100%; }
        .lg-stage svg { display: block; width: 100%; height: 100%; overflow: visible; }

        .lg-wordmark { width: min(82vw, 340px); max-width: 100%; height: auto; display: block; animation: lg-wipe 1.3s cubic-bezier(.65, 0, .2, 1) .3s both; }
        @keyframes lg-wipe { from { clip-path: inset(0 100% 0 0); } to { clip-path: inset(0 0 0 0); } }

        .lg-steps {
          position: relative; z-index: 1;
          list-style: none; margin: 0; padding: 0;
          width: min(100%, 380px);
          display: grid; grid-template-columns: repeat(4, 1fr);
        }
        .lg-steps li {
          position: relative; display: grid; justify-items: center; gap: 8px;
          font-size: 12px; font-weight: 600; color: var(--muted);
          transition: color .3s;
        }
        .lg-steps li::before {
          content: ""; position: absolute; top: 4px; right: calc(50% + 9px); width: calc(100% - 18px); height: 2px; border-radius: 1px; background: var(--track);
        }
        .lg-steps li:first-child::before { display: none; }
        .lg-steps li.done::before, .lg-steps li.on::before { background: var(--blue); }
        .lg-steps li span.lg-pt {
          position: relative; z-index: 1; box-sizing: border-box; width: 10px; height: 10px; border-radius: 50%;
          background: var(--bg); border: 2px solid var(--track);
          transition: border-color .3s, background .3s, transform .3s;
        }
        .lg-steps li.done span.lg-pt { border-color: var(--blue); background: var(--blue); }
        .lg-steps li.on { color: var(--navy); }
        .lg-steps li.on span.lg-pt { border-color: var(--orange); background: var(--orange); transform: scale(1.2); }

        .lg-progress { position: relative; z-index: 1; width: min(100%, 380px); display: grid; gap: 8px; }
        .lg-bar { height: 6px; border-radius: 3px; background: var(--track); overflow: hidden; }
        .lg-bar i { display: block; height: 100%; width: 100%; background: var(--blue); transform-origin: left center; transform: scaleX(0); }
        .lg-meta { display: flex; justify-content: space-between; gap: 12px; font-size: 12px; color: var(--muted); }
        .lg-meta b { font-family: var(--font-data); font-weight: 500; color: var(--navy); font-variant-numeric: tabular-nums; }

        .lg-tag { position: relative; z-index: 1; margin: 0; max-width: 100%; text-align: center; font-size: 14px; font-weight: 500; color: var(--navy); text-wrap: balance; }
        .lg-tag em { font-style: normal; font-weight: 700; color: var(--orange); }

        .lg-wheel .lg-hub { fill: var(--orange); }

        @media (prefers-reduced-motion: reduce) {
          .lg-wordmark { animation: none; }
        }
      ` }} />
      <main className="lg-loader" id="lg-loader" role="status" aria-live="polite" aria-label="Chargement en cours">
        <div className="lg-stage" aria-hidden="true">
          <svg viewBox="0 0 200 200">
            <ellipse id="lg-shadow" cx="100" cy="162" rx="0" ry="0" fill="#0b2a6b" opacity="0.14"/>
            <ellipse id="lg-ripple" cx="100" cy="162" rx="0" ry="0" fill="none" stroke="#f7931e" strokeWidth="2.5" opacity="0"/>
            <g id="lg-rig">
              <polygon id="lg-p0" fill="#0b2a6b" points="12,12 99.25,55.65 186.5,99.3 73.1,99.3 42.55,55.65"/>
              <polygon id="lg-p1" fill="#1f6fdb" points="73.1,99.3 129.8,99.3 186.5,99.3 12,186.5 42.55,142.9"/>
              <polygon id="lg-p2" fill="#f7931e" points="12,12 42.55,55.65 73.1,99.3 12,99.3 12,55.65"/>
              <polygon id="lg-win" fill="#dce9ff" points="141,87 157,87 173,104 141,104" opacity="0"/>
              <polygon id="lg-tape" points="78.16,48.92 130.16,74.92 130.16,136.92 121.84,141.08 121.84,79.08 69.84,53.08" fill="#ffffff" opacity="0"/>
              <g id="lg-speed" opacity="0" stroke="#1f6fdb" strokeWidth="3" strokeLinecap="round" strokeDasharray="7 9">
                <line x1="0" y1="78" x2="22" y2="78"/><line x1="4" y1="96" x2="22" y2="96"/><line x1="0" y1="114" x2="22" y2="114"/>
              </g>
              <g id="lg-w1" className="lg-wheel" transform="translate(62 142) scale(0)">
                <g className="lg-spin"><circle r="13" fill="#0b2a6b" stroke="#ffffff" strokeWidth="3"/><path d="M-9 0H9M0 -9V9" stroke="#ffffff" strokeWidth="2" strokeLinecap="round"/><circle className="lg-hub" r="4"/></g>
              </g>
              <g id="lg-w2" className="lg-wheel" transform="translate(156 142) scale(0)">
                <g className="lg-spin"><circle r="13" fill="#0b2a6b" stroke="#ffffff" strokeWidth="3"/><path d="M-9 0H9M0 -9V9" stroke="#ffffff" strokeWidth="2" strokeLinecap="round"/><circle className="lg-hub" r="4"/></g>
              </g>
            </g>
          </svg>
        </div>

        <svg className="lg-wordmark" viewBox="1036 -246 444 122" role="img" aria-label="Logistica Tunisie">
          <g transform="scale(1 -1)" fillRule="nonzero">
            <path d="M 1050.38,192.402 L 1069.25,192.402 L 1069.25,185.018 L 1041.24,185.018 L 1041.24,240.821 L 1050.38,240.821 Z M 1077.33,213.033 C 1077.33,218.502 1078.6,223.401 1081.14,227.73 C 1083.68,232.07 1087.14,235.456 1091.51,237.888 C 1095.86,240.32 1100.63,241.536 1105.84,241.536 C 1111.07,241.536 1115.87,240.32 1120.24,237.888 C 1124.6,235.456 1128.04,232.07 1130.55,227.73 C 1133.08,223.401 1134.34,218.502 1134.34,213.033 C 1134.34,207.575 1133.08,202.665 1130.55,198.301 C 1128.04,193.938 1124.6,190.54 1120.24,188.108 C 1115.87,185.676 1111.07,184.46 1105.84,184.46 C 1100.63,184.46 1095.86,185.676 1091.51,188.108 C 1087.14,190.54 1083.68,193.938 1081.14,198.301 C 1078.6,202.665 1077.33,207.575 1077.33,213.033 Z M 1124.93,213.033 C 1124.93,217.164 1124.12,220.777 1122.49,223.872 C 1120.86,226.979 1118.59,229.365 1115.7,231.029 C 1112.81,232.681 1109.52,233.507 1105.84,233.507 C 1102.14,233.507 1098.84,232.681 1095.96,231.029 C 1093.06,229.365 1090.8,226.979 1089.17,223.872 C 1087.54,220.777 1086.72,217.164 1086.72,213.033 C 1086.72,208.914 1087.54,205.289 1089.17,202.159 C 1090.8,199.028 1093.06,196.62 1095.96,194.933 C 1098.84,193.245 1102.14,192.402 1105.84,192.402 C 1109.52,192.402 1112.81,193.245 1115.7,194.933 C 1118.59,196.62 1120.86,199.028 1122.49,202.159 C 1124.12,205.289 1124.93,208.914 1124.93,213.033 Z M 1187.21,224.762 C 1185.75,227.543 1183.75,229.644 1181.19,231.063 C 1178.62,232.483 1175.64,233.193 1172.27,233.193 C 1168.58,233.193 1165.29,232.361 1162.39,230.697 C 1159.5,229.045 1157.24,226.694 1155.6,223.645 C 1153.97,220.585 1153.15,217.047 1153.15,213.033 C 1153.15,209.018 1153.97,205.475 1155.6,202.403 C 1157.24,199.319 1159.5,196.951 1162.39,195.299 C 1165.29,193.635 1168.58,192.803 1172.27,192.803 C 1177.25,192.803 1181.29,194.194 1184.4,196.975 C 1187.49,199.767 1189.39,203.543 1190.09,208.303 L 1169.14,208.303 L 1169.14,215.616 L 1199.88,215.616 L 1199.88,208.46 C 1199.3,204.131 1197.76,200.146 1195.27,196.503 C 1192.78,192.861 1189.54,189.958 1185.55,187.794 C 1181.57,185.618 1177.14,184.53 1172.27,184.53 C 1167.02,184.53 1162.23,185.751 1157.9,188.195 C 1153.56,190.627 1150.12,194.013 1147.59,198.354 C 1145.04,202.682 1143.76,207.575 1143.76,213.033 C 1143.76,218.502 1145.04,223.401 1147.59,227.73 C 1150.12,232.07 1153.57,235.456 1157.94,237.888 C 1162.3,240.32 1167.08,241.536 1172.27,241.536 C 1178.21,241.536 1183.5,240.082 1188.13,237.173 C 1192.75,234.252 1196.11,230.115 1198.2,224.762 Z M 1221.52,240.821 L 1221.52,185.018 L 1212.38,185.018 L 1212.38,240.821 Z M 1235.7,200.431 L 1245.49,200.431 C 1245.7,198.022 1246.65,196.044 1248.33,194.496 C 1250.02,192.937 1252.39,192.157 1255.44,192.157 C 1258.6,192.157 1261.07,192.925 1262.84,194.461 C 1264.6,195.986 1265.47,197.952 1265.47,200.361 C 1265.47,202.234 1264.93,203.759 1263.83,204.934 C 1262.74,206.109 1261.37,207.017 1259.73,207.657 C 1258.1,208.297 1255.85,208.995 1252.96,209.751 C 1249.32,210.717 1246.36,211.695 1244.09,212.684 C 1241.81,213.673 1239.87,215.209 1238.26,217.292 C 1236.66,219.386 1235.85,222.173 1235.85,225.653 C 1235.85,228.864 1236.66,231.674 1238.26,234.083 C 1239.87,236.492 1242.11,238.336 1245,239.616 C 1247.9,240.896 1251.24,241.536 1255.04,241.536 C 1260.45,241.536 1264.88,240.186 1268.34,237.487 C 1271.78,234.787 1273.69,231.081 1274.08,226.368 L 1263.96,226.368 C 1263.79,228.405 1262.83,230.144 1261.06,231.587 C 1259.3,233.03 1256.97,233.751 1254.08,233.751 C 1251.46,233.751 1249.32,233.082 1247.65,231.744 C 1246,230.406 1245.18,228.48 1245.18,225.967 C 1245.18,224.256 1245.69,222.854 1246.73,221.76 C 1247.78,220.655 1249.1,219.782 1250.71,219.142 C 1252.31,218.502 1254.51,217.804 1257.29,217.047 C 1260.99,216.035 1264,215.023 1266.33,214.01 C 1268.66,212.986 1270.64,211.415 1272.26,209.298 C 1273.89,207.191 1274.71,204.37 1274.71,200.832 C 1274.71,197.993 1273.94,195.317 1272.42,192.803 C 1270.9,190.29 1268.67,188.271 1265.75,186.746 C 1262.84,185.222 1259.41,184.46 1255.44,184.46 C 1251.69,184.46 1248.32,185.117 1245.33,186.432 C 1242.33,187.735 1239.97,189.591 1238.26,192 C 1236.55,194.409 1235.7,197.219 1235.7,200.431 Z M 1325.1,240.821 L 1325.1,233.35 L 1310.25,233.35 L 1310.25,185.018 L 1301.08,185.018 L 1301.08,233.35 L 1286.16,233.35 L 1286.16,240.821 Z M 1346.97,240.821 L 1346.97,185.018 L 1337.82,185.018 L 1337.82,240.821 Z M 1387.95,241.536 C 1393.9,241.536 1399.19,240.082 1403.82,237.173 C 1408.45,234.252 1411.81,230.115 1413.89,224.762 L 1402.89,224.762 C 1401.45,227.706 1399.44,229.9 1396.87,231.343 C 1394.3,232.786 1391.33,233.507 1387.95,233.507 C 1384.26,233.507 1380.98,232.681 1378.09,231.029 C 1375.19,229.365 1372.93,226.979 1371.3,223.872 C 1369.67,220.777 1368.86,217.164 1368.86,213.033 C 1368.86,208.914 1369.67,205.301 1371.3,202.194 C 1372.93,199.098 1375.19,196.707 1378.09,195.02 C 1380.98,193.333 1384.26,192.489 1387.95,192.489 C 1391.33,192.489 1394.3,193.21 1396.87,194.653 C 1399.44,196.096 1401.45,198.29 1402.89,201.234 L 1413.89,201.234 C 1411.81,195.881 1408.45,191.762 1403.82,188.876 C 1399.19,185.978 1393.9,184.53 1387.95,184.53 C 1382.72,184.53 1377.93,185.751 1373.59,188.195 C 1369.25,190.627 1365.81,194.013 1363.27,198.354 C 1360.72,202.682 1359.45,207.575 1359.45,213.033 C 1359.45,218.502 1360.72,223.401 1363.27,227.73 C 1365.81,232.07 1369.26,235.456 1373.62,237.888 C 1377.99,240.32 1382.76,241.536 1387.95,241.536 Z M 1461.7,196.416 L 1438.34,196.416 L 1434.33,185.018 L 1424.76,185.018 L 1444.77,240.908 L 1455.36,240.908 L 1475.35,185.018 L 1465.71,185.018 Z M 1459.13,203.887 L 1450.06,229.824 L 1440.91,203.887 Z" fill="#0b2a6b" />
          </g>
        </svg>

        <ol className="lg-steps" id="lg-steps">
          <li><span className="lg-pt"></span>Commande</li>
          <li><span className="lg-pt"></span>Préparation</li>
          <li><span className="lg-pt"></span>Expédition</li>
          <li><span className="lg-pt"></span>Livraison</li>
        </ol>

        <div className="lg-progress">
          <div className="lg-bar"><i id="lg-fill"></i></div>
          <div className="lg-meta"><span>Chargement</span><b id="lg-pct">0 %</b></div>
        </div>

        <p className="lg-tag">De la commande à la livraison, <em>tout simplement.</em></p>
      </main>
    </>
  );
}