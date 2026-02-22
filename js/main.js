// ── Navigation Scroll Behavior ────────────────────────────────────
document.addEventListener('DOMContentLoaded', function() {
  const nav = document.querySelector('.site-nav');
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');

  if (nav) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 80) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    });
  }

  if (toggle && links) {
    toggle.addEventListener('click', function() {
      links.classList.toggle('open');
      toggle.textContent = links.classList.contains('open') ? '✕' : '☰';
    });

    links.querySelectorAll('a').forEach(function(a) {
      a.addEventListener('click', function() {
        links.classList.remove('open');
        toggle.textContent = '☰';
      });
    });
  }
});

// ── Hero Canvas Animation ─────────────────────────────────────────
function initHeroCanvas() {
  var canvas = document.getElementById('hero-canvas');
  if (!canvas) return;

  var ctx = canvas.getContext('2d');
  var nodes = [];
  var frame = 0;
  var w, h;

  function resize() {
    w = canvas.width = canvas.offsetWidth * 2;
    h = canvas.height = canvas.offsetHeight * 2;
  }

  function initNodes() {
    nodes = [];
    for (var i = 0; i < 30; i++) {
      nodes.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 3 + 1.5,
        pulse: Math.random() * Math.PI * 2
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);
    frame++;

    for (var i = 0; i < nodes.length; i++) {
      var n = nodes[i];
      n.x += n.vx;
      n.y += n.vy;
      if (n.x < 0 || n.x > w) n.vx *= -1;
      if (n.y < 0 || n.y > h) n.vy *= -1;
      n.pulse += 0.015;
    }

    for (var i = 0; i < nodes.length; i++) {
      for (var j = i + 1; j < nodes.length; j++) {
        var dx = nodes[i].x - nodes[j].x;
        var dy = nodes[i].y - nodes[j].y;
        var dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 260) {
          var alpha = (1 - dist / 260) * 0.16;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.strokeStyle = 'rgba(196,145,58,' + alpha + ')';
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }

    for (var i = 0; i < nodes.length; i++) {
      var n = nodes[i];
      var glow = Math.sin(n.pulse) * 0.3 + 0.7;
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r * 2, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(196,145,58,' + (0.05 * glow) + ')';
      ctx.fill();
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(196,145,58,' + (0.45 * glow) + ')';
      ctx.fill();
    }

    requestAnimationFrame(draw);
  }

  resize();
  initNodes();
  draw();
  window.addEventListener('resize', function() { resize(); initNodes(); });
}

document.addEventListener('DOMContentLoaded', initHeroCanvas);

// ── Scroll Reveal Animation ───────────────────────────────────────
document.addEventListener('DOMContentLoaded', function() {
  var reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  reveals.forEach(function(el) { observer.observe(el); });
});
