/**
 * ===================================================================
 *  90s RETRO PORTFOLIO — MAIN SCRIPT
 * ===================================================================
 */


document.addEventListener('DOMContentLoaded', () => {


  // ── Social icon map ─────────────────────────────────────────────
  const SOCIAL_ICONS = {
    github:   '🐙',
    linkedin: '💼',
    twitter:  '🐦',
    email:    '📧'
  };


  // ── Init ────────────────────────────────────────────────────────
  function init() {
    populateHero();
    populateAbout();
    populateProjects();
    populateSkills();
    populateExperience();
    populateContact();
    initNav();
    initScrollReveal();
    initSkillBarAnimation();
    document.getElementById('footer-year').textContent = `© ${new Date().getFullYear()}`;
  }


  // ── Hero ────────────────────────────────────────────────────────
  function populateHero() {
    const p = USER_CONFIG.profile;
    setText('hero-name',          p.name);
    setText('hero-eyebrow',       `Hey there, I'm`);
    setText('hero-title-pill',    p.title);
    setText('hero-tagline',       p.tagline);
    setText('hero-badge-location',`📍 ${p.location}`);
    setAttr('hero-avatar', 'src', p.avatarUrl);
    setAttr('hero-avatar', 'alt', `${p.name}'s profile picture`);
  }


  // ── About ───────────────────────────────────────────────────────
  function populateAbout() {
    const p = USER_CONFIG.profile;


    const bioEl = document.getElementById('about-bio');
    if (bioEl) {
      bioEl.innerHTML = `
        ${p.bioLong.map(para => `<p class="bio-paragraph">${para}</p>`).join('')}
        <div class="resume-btn-wrap">
          <a href="${p.resumeUrl}" target="_blank" class="btn btn-primary" id="btn-download-resume">
            📄 Download Resume
          </a>
        </div>
      `;
    }


    const chipsEl = document.getElementById('about-chips');
    if (chipsEl) {
      const chips = [
        { label: 'Location',    value: p.location },
        { label: 'Occupation',  value: p.experienceYears },
        { label: 'Status',      value: p.status },
      ];
      chipsEl.innerHTML = chips.map(c => `
        <div class="info-chip">
          <span class="info-chip-label">${c.label}</span>
          <span class="info-chip-value">${c.value}</span>
        </div>
      `).join('');
    }
  }


  // ── Projects ────────────────────────────────────────────────────
  function populateProjects() {
    const grid = document.getElementById('projects-grid');
    if (!grid) return;


    grid.innerHTML = USER_CONFIG.projects.map(proj => `
      <div class="project-card reveal">
        <div class="proj-header">
          <div class="proj-emoji">${proj.emoji}</div>
          <div>
            <div class="proj-title">${proj.title}</div>
            <div class="proj-meta">${proj.category} · ${proj.year}</div>
          </div>
        </div>
        <p class="proj-desc">${proj.description}</p>
        <div class="proj-tags">
          ${proj.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
        </div>
        <div class="proj-actions">
          <a href="${proj.demoUrl}" target="_blank" rel="noopener" class="proj-btn">🔗 Live Demo</a>
          <a href="${proj.githubUrl}" target="_blank" rel="noopener" class="proj-btn proj-btn-gh">📦 GitHub</a>
        </div>
      </div>
    `).join('');
  }


  // ── Skills ──────────────────────────────────────────────────────
  function populateSkills() {
    const wrap = document.getElementById('skills-wrapper');
    if (!wrap) return;


    wrap.innerHTML = USER_CONFIG.skills.map(cat => `
      <div class="skills-category reveal">
        <div class="skills-cat-title">
          <div class="skills-cat-dot" style="background:${cat.color};"></div>
          ${cat.category}
        </div>
        <div class="skill-list">
          ${cat.items.map(item => `
            <div class="skill-item">
              <div class="skill-info">
                <span>${item.icon} ${item.name}</span>
                <span class="skill-pct">${item.level}%</span>
              </div>
              <div class="skill-bar-track">
                <div class="skill-bar-fill"
                     data-level="${item.level}"
                     style="background:${cat.color}; width:0%;"></div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `).join('');
  }


  // ── Experience ──────────────────────────────────────────────────
  function populateExperience() {
    const list = document.getElementById('experience-list');
    if (!list) return;


    list.innerHTML = USER_CONFIG.experience.map(exp => `
      <div class="exp-card reveal">
        <div class="exp-dot-wrap">
          <div class="exp-dot" style="background:${exp.color};"></div>
        </div>
        <div class="exp-content">
          <div class="exp-role">${exp.role}</div>
          <div class="exp-company">@ ${exp.company}</div>
          <div class="exp-period">📅 ${exp.period}</div>
          <p class="exp-desc">${exp.description}</p>
        </div>
      </div>
    `).join('');
  }


  // ── Contact & Socials ───────────────────────────────────────────
  function populateContact() {
    const socialsList = document.getElementById('socials-list');
    if (socialsList) {
      socialsList.innerHTML = USER_CONFIG.socials.map(soc => `
        <a href="${soc.url}" target="_blank" rel="noopener" class="social-card">
          <div class="social-icon">${SOCIAL_ICONS[soc.svg] || '🔗'}</div>
          <div class="social-info">
            <span class="social-platform">${soc.platform}</span>
            <span class="social-handle">${soc.handle}</span>
          </div>
        </a>
      `).join('');
    }


    const form = document.getElementById('contact-form');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        showToast('✅ Message sent! I\'ll get back to you soon. 🎉');
        form.reset();
      });
    }
  }


  // ── Nav: scroll highlight + scrolled state + mobile toggle ──────
  function initNav() {
    const nav    = document.getElementById('site-nav');
    const toggle = document.getElementById('nav-toggle');
    const links  = document.querySelectorAll('.nav-link');
    const navLinks = document.getElementById('nav-links');


    // Scrolled style
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 20);
      updateActiveNavLink(links);
    }, { passive: true });


    // Mobile toggle
    if (toggle && navLinks) {
      toggle.addEventListener('click', () => {
        navLinks.classList.toggle('open');
      });
      // Close on link click
      links.forEach(l => l.addEventListener('click', () => {
        navLinks.classList.remove('open');
      }));
    }


    updateActiveNavLink(links);
  }


  function updateActiveNavLink(links) {
    const sections = ['hero','about','projects','skills','experience','contact'];
    let current = 'hero';
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el && window.scrollY >= el.offsetTop - 120) current = id;
    });
    links.forEach(l => {
      l.classList.toggle('active', l.dataset.section === current);
    });
  }


  // ── Scroll Reveal ───────────────────────────────────────────────
  function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });


    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }


  // ── Skill bar animation on scroll ───────────────────────────────
  function initSkillBarAnimation() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.skill-bar-fill').forEach(bar => {
            bar.style.width = bar.dataset.level + '%';
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });


    document.querySelectorAll('.skills-category').forEach(el => observer.observe(el));
  }


  // ── Toast ────────────────────────────────────────────────────────
  function showToast(message) {
    const toast = document.getElementById('toast-notification');
    const textEl = document.getElementById('toast-text');
    if (!toast) return;
    textEl.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 4000);
  }


  // ── Custom Pixel-Art Cursor ──────────────────────────────────────
  // Draws the cursor pixel-by-pixel on a hidden canvas, exports PNG,
  // then injects a <style> tag. PNG is the only format all browsers
  // reliably accept for custom cursor images.
  //
  // Color: dark navy #2D3561 fill + #111827 outline — matches reference.
  // Shape: standard Windows-style top-left arrow (pixel-art, 16×16 grid).
  // Each logical pixel = 2×2 canvas pixels → final size = 32×32 px.
  // Hotspot at (0,0) = arrow tip (top-left corner).
  //
  // No click-state cursor — user requested single cursor only.
  function initCustomCursor() {
    const SCALE = 2;
    const canvas = document.createElement('canvas');
    canvas.width  = 16 * SCALE; // 32px
    canvas.height = 16 * SCALE; // 32px
    const ctx = canvas.getContext('2d');


    const O = '#eb4203';
    const F = '#23ced9';
    const _ = null;      // transparent — canvas default, skip drawing


    // Pixel map — standard Windows arrow cursor shape.
    // Rows 0-9:  expanding triangular arrowhead (tip → widest).
    // Row  10:   notch (arrowhead closes, tail outline begins).
    // Rows 11-14: diagonal tail going down-right.
    // null entries are transparent gaps inside the cursor.
    const map = [
      [O],
      [O,O],
      [O,F,O],
      [O,F,F,O],
      [O,F,F,F,O],
      [O,F,F,F,F,O],
      [O,F,F,F,F,F,O],
      [O,F,F,F,F,F,F,O],
      [O,F,F,F,F,F,F,F,O],
      [O,F,F,F,F,F,F,F,F,O],  // widest — 10 logical px
      [O,F,F,F,O,O,O,O,O,O,O],           // notch: right side cuts inward
      [O,F,F,O,_,_,_,_],       // notch gap (col 4 transparent) + tail
      [O,F,O,_,_,_,_,_,_],
      [O,O,_,_,_,_,_,_,_],
      [O,_,_,_,_,_,_,_,_]    
    ];


    map.forEach((row, y) => {
      row.forEach((color, x) => {
        if (color) {
          ctx.fillStyle = color;
          ctx.fillRect(x * SCALE, y * SCALE, SCALE, SCALE);
        }
      });
    });


    const url = canvas.toDataURL('image/png');
    const style = document.createElement('style');
    style.id = 'custom-cursor-style';
    // !important overrides any cursor:pointer on links/buttons etc.
    style.textContent = `
      *, *::before, *::after {
        cursor: url("${url}") 0 0, auto !important;
      }
    `;
    document.head.appendChild(style);
  }


  // ── Helpers ─────────────────────────────────────────────────────
  function setText(id, text) {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  }
  function setAttr(id, attr, val) {
    const el = document.getElementById(id);
    if (el) el.setAttribute(attr, val);
  }


  // ── Run ─────────────────────────────────────────────────────────
  initCustomCursor();
  init();
});