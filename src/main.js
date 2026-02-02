const HOME_DOC = `
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Popper Home</title>
  </head>
  <body>
    <main>
      <h1>Popper Browser</h1>
      <p>This is a pared-down, attribute-styled browser.</p>
      <p>Try these:</p>
      <ul>
        <li>about:home</li>
        <li>about:spec</li>
        <li>about:demo</li>
        <li>pppr:demo</li>
        <li>pppr:spec</li>
        <li>https://example.com</li>
      </ul>
      <p>JavaScript runs inside the view. Example:</p>
      <button id="ping">PING</button>
      <output id="pong">IDLE</output>
      <script>
        const ping = document.getElementById("ping");
        const pong = document.getElementById("pong");
        ping.addEventListener("click", () => {
          pong.textContent = "PONG " + new Date().toLocaleTimeString();
        });
      </script>
    </main>
  </body>
</html>
`;

const SPEC_DOC = `
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Popper Spec</title>
  </head>
  <body>
    <main>
      <h1>Popper Markup v0.1</h1>
      <p>Target popper-browser by using attribute-only styling.</p>
      <h2>Allowed Attributes</h2>
      <ul>
        <li>data-ui: frame, bar, row, screen, btn, field, label, badge, view</li>
        <li>data-tone: dark, light, accent, warn</li>
        <li>data-pad: xs, sm, md, lg</li>
        <li>data-gap: xs, sm, md, lg</li>
        <li>data-size: sm, md, lg</li>
        <li>data-ink: dim, bright</li>
        <li>data-border: thin, thick, heavy</li>
        <li>data-round: none, sm, md, lg</li>
        <li>data-align: start, center, end, stretch</li>
        <li>data-justify: start, center, end, between, around</li>
        <li>data-width: sm, md, lg, full</li>
      </ul>
      <h2>Rules</h2>
      <ol>
        <li>Do not use inline styles or CSS files.</li>
        <li>Use attributes to declare layout and tone.</li>
        <li>Prefer simple, boxy composition.</li>
      </ol>
      <h2>Example</h2>
      <pre>
&lt;main data-ui="frame" data-tone="dark"&gt;
  &lt;div data-ui="bar" data-gap="sm"&gt;
    &lt;div data-ui="badge"&gt;POPPER&lt;/div&gt;
    &lt;div data-ui="label" data-ink="dim"&gt;MENU&lt;/div&gt;
  &lt;/div&gt;
&lt;/main&gt;
      </pre>
    </main>
  </body>
</html>
`;

const PPPR_BOOTSTRAP = `
const STYLE_MAP = {
  base: {
    fontFamily: '"Courier New", Courier, monospace',
    fontSize: "14px",
    lineHeight: "1.3",
    boxSizing: "border-box",
  },
  ui: {
    frame: {
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
      width: "100vw",
      background: "#1b1b1b",
      color: "#e6e2d5",
      gap: "8px",
    },
    bar: {
      display: "flex",
      alignItems: "center",
      gap: "6px",
      padding: "6px",
      border: "2px solid #0c0c0c",
      background: "#2b2b2b",
    },
    row: {
      display: "flex",
      alignItems: "center",
      flex: "1 1 auto",
      gap: "6px",
    },
    screen: {
      flex: "1 1 auto",
      border: "3px solid #0c0c0c",
      background: "#d8d2c3",
      boxShadow: "inset 0 0 0 2px #a7a197",
    },
    btn: {
      border: "2px solid #0c0c0c",
      background: "#bdb59f",
      color: "#1b1b1b",
      padding: "4px 8px",
      fontWeight: "700",
      cursor: "pointer",
      minWidth: "34px",
      textTransform: "uppercase",
    },
    field: {
      border: "2px solid #0c0c0c",
      background: "#f2eee3",
      color: "#1b1b1b",
      padding: "4px 6px",
      width: "100%",
    },
    label: {
      border: "2px solid #0c0c0c",
      background: "#1e1e1e",
      color: "#e6e2d5",
      padding: "2px 6px",
      letterSpacing: "0.5px",
      fontSize: "11px",
    },
    badge: {
      border: "2px solid #0c0c0c",
      background: "#f08b3c",
      color: "#1b1b1b",
      padding: "2px 6px",
      fontWeight: "700",
      letterSpacing: "1px",
    },
  },
  tone: {
    dark: { background: "#1b1b1b", color: "#e6e2d5" },
    light: { background: "#d8d2c3", color: "#1b1b1b" },
    accent: { background: "#f08b3c", color: "#1b1b1b" },
    warn: { background: "#d34a4a", color: "#f8f2e7" },
  },
  pad: {
    xs: "4px",
    sm: "8px",
    md: "12px",
    lg: "16px",
  },
  border: {
    thin: "2px",
    thick: "3px",
    heavy: "4px",
  },
  round: {
    none: "0px",
    sm: "2px",
    md: "4px",
    lg: "8px",
  },
  gap: {
    xs: "4px",
    sm: "8px",
    md: "12px",
    lg: "16px",
  },
  size: {
    sm: { fontSize: "12px", padding: "3px 6px" },
    md: { fontSize: "14px", padding: "4px 8px" },
    lg: { fontSize: "16px", padding: "6px 10px" },
  },
  ink: {
    dim: { color: "#b1a99a" },
    bright: { color: "#f8f2e7" },
  },
  align: {
    start: "flex-start",
    center: "center",
    end: "flex-end",
    stretch: "stretch",
  },
  justify: {
    start: "flex-start",
    center: "center",
    end: "flex-end",
    between: "space-between",
    around: "space-around",
  },
  width: {
    sm: "180px",
    md: "320px",
    lg: "520px",
    full: "100%",
  },
};

function applyBaseStyles(root = document) {
  const all = root.querySelectorAll("*");
  all.forEach((el) => {
    Object.assign(el.style, STYLE_MAP.base);
  });
  if (root === document) {
    document.body.style.margin = "0";
  }
}

function applyAttributeStyles(root = document) {
  const styled = root.querySelectorAll("[data-ui]");
  styled.forEach((el) => {
    const ui = el.getAttribute("data-ui");
    if (STYLE_MAP.ui[ui]) Object.assign(el.style, STYLE_MAP.ui[ui]);

    const tone = el.getAttribute("data-tone");
    if (STYLE_MAP.tone[tone]) Object.assign(el.style, STYLE_MAP.tone[tone]);

    const pad = el.getAttribute("data-pad");
    if (STYLE_MAP.pad[pad]) el.style.padding = STYLE_MAP.pad[pad];

    const gap = el.getAttribute("data-gap");
    if (STYLE_MAP.gap[gap]) el.style.gap = STYLE_MAP.gap[gap];

    const border = el.getAttribute("data-border");
    if (STYLE_MAP.border[border]) {
      el.style.borderWidth = STYLE_MAP.border[border];
      el.style.borderStyle = "solid";
      el.style.borderColor = "#0c0c0c";
    }

    const round = el.getAttribute("data-round");
    if (STYLE_MAP.round[round]) el.style.borderRadius = STYLE_MAP.round[round];

    const size = el.getAttribute("data-size");
    if (STYLE_MAP.size[size]) Object.assign(el.style, STYLE_MAP.size[size]);

    const ink = el.getAttribute("data-ink");
    if (STYLE_MAP.ink[ink]) Object.assign(el.style, STYLE_MAP.ink[ink]);

    const align = el.getAttribute("data-align");
    if (STYLE_MAP.align[align]) el.style.alignItems = STYLE_MAP.align[align];

    const justify = el.getAttribute("data-justify");
    if (STYLE_MAP.justify[justify]) {
      el.style.justifyContent = STYLE_MAP.justify[justify];
    }

    const width = el.getAttribute("data-width");
    if (STYLE_MAP.width[width]) el.style.width = STYLE_MAP.width[width];
  });
}

const BAR_TEMPLATE = document.createElement("template");
BAR_TEMPLATE.innerHTML = '<div data-ui="bar"><slot></slot></div>';

const LABEL_TEMPLATE = document.createElement("template");
LABEL_TEMPLATE.innerHTML = '<div data-ui="label"><slot></slot></div>';

class PopperBar extends HTMLElement {
  static observedAttributes = [
    "data-gap",
    "data-tone",
    "data-pad",
    "data-border",
    "data-round",
    "data-justify",
    "data-align",
  ];

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(BAR_TEMPLATE.content.cloneNode(true));
    this.container = this.shadowRoot.querySelector("[data-ui='bar']");
  }

  connectedCallback() {
    this.syncAttributes();
    applyBaseStyles(this.shadowRoot);
    applyAttributeStyles(this.shadowRoot);
  }

  attributeChangedCallback() {
    this.syncAttributes();
    applyAttributeStyles(this.shadowRoot);
  }

  syncAttributes() {
    PopperBar.observedAttributes.forEach((name) => {
      const value = this.getAttribute(name);
      if (value === null) {
        this.container.removeAttribute(name);
      } else {
        this.container.setAttribute(name, value);
      }
    });
  }
}

class PopperLabel extends HTMLElement {
  static observedAttributes = ["data-ink", "data-tone", "data-border", "data-round"];

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(LABEL_TEMPLATE.content.cloneNode(true));
    this.container = this.shadowRoot.querySelector("[data-ui='label']");
  }

  connectedCallback() {
    this.syncAttributes();
    applyBaseStyles(this.shadowRoot);
    applyAttributeStyles(this.shadowRoot);
  }

  attributeChangedCallback() {
    this.syncAttributes();
    applyAttributeStyles(this.shadowRoot);
  }

  syncAttributes() {
    PopperLabel.observedAttributes.forEach((name) => {
      const value = this.getAttribute(name);
      if (value === null) {
        this.container.removeAttribute(name);
      } else {
        this.container.setAttribute(name, value);
      }
    });
  }
}

customElements.define("popper-bar", PopperBar);
customElements.define("popper-label", PopperLabel);

applyBaseStyles();
applyAttributeStyles();
`;

const DEMO_DOC = `
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Popper Demo</title>
  </head>
  <body>
    <main data-ui="frame" data-tone="dark" data-pad="md" data-gap="sm">
      <popper-bar data-justify="between" data-gap="xs">
        <div data-ui="row" data-gap="xs" data-align="center">
          <div data-ui="badge">POPPER EATS</div>
          <popper-label data-ink="dim">LINE 04</popper-label>
        </div>
        <div data-ui="row" data-gap="xs" data-align="center" data-justify="end">
          <popper-label data-ink="dim">QUEUE</popper-label>
          <popper-label data-ink="bright">12</popper-label>
        </div>
      </popper-bar>

      <div data-ui="screen" data-tone="light" data-pad="sm" data-border="heavy">
        <div data-ui="row" data-gap="sm" data-align="center">
          <popper-label data-ink="dim">ORDER</popper-label>
          <popper-label data-ink="bright">#8824</popper-label>
        </div>
        <h1>BUILD-A-MEAL</h1>
        <p>SELECT SIZE</p>
        <div data-ui="row" data-gap="xs">
          <button data-ui="btn" data-size="sm">SMALL</button>
          <button data-ui="btn" data-size="sm">MED</button>
          <button data-ui="btn" data-size="sm">LARGE</button>
        </div>
        <p>EXTRAS</p>
        <div data-ui="row" data-gap="xs">
          <button data-ui="btn" data-size="sm">PICKLE</button>
          <button data-ui="btn" data-size="sm">ONION</button>
          <button data-ui="btn" data-size="sm">CHEESE</button>
        </div>
      </div>

      <popper-bar data-justify="between" data-gap="xs">
        <popper-label data-ink="dim">STATUS</popper-label>
        <popper-label data-ink="bright">READY FOR PICKUP</popper-label>
      </popper-bar>
    </main>
    <script>${PPPR_BOOTSTRAP}</script>
  </body>
</html>
`;

const STYLE_MAP = {
  base: {
    fontFamily: '"Courier New", Courier, monospace',
    fontSize: "14px",
    lineHeight: "1.3",
    boxSizing: "border-box",
  },
  ui: {
    frame: {
      display: "flex",
      flexDirection: "column",
      height: "100vh",
      width: "100vw",
      background: "#1b1b1b",
      color: "#e6e2d5",
      gap: "8px",
    },
    bar: {
      display: "flex",
      alignItems: "center",
      gap: "6px",
      padding: "6px",
      border: "2px solid #0c0c0c",
      background: "#2b2b2b",
    },
    row: {
      display: "flex",
      alignItems: "center",
      flex: "1 1 auto",
      gap: "6px",
    },
    screen: {
      flex: "1 1 auto",
      border: "3px solid #0c0c0c",
      background: "#d8d2c3",
      boxShadow: "inset 0 0 0 2px #a7a197",
    },
    view: {
      width: "100%",
      height: "100%",
      border: "0",
      background: "#d8d2c3",
    },
    btn: {
      border: "2px solid #0c0c0c",
      background: "#bdb59f",
      color: "#1b1b1b",
      padding: "4px 8px",
      fontWeight: "700",
      cursor: "pointer",
      minWidth: "34px",
      textTransform: "uppercase",
    },
    field: {
      border: "2px solid #0c0c0c",
      background: "#f2eee3",
      color: "#1b1b1b",
      padding: "4px 6px",
      width: "100%",
    },
    label: {
      border: "2px solid #0c0c0c",
      background: "#1e1e1e",
      color: "#e6e2d5",
      padding: "2px 6px",
      letterSpacing: "0.5px",
      fontSize: "11px",
    },
    badge: {
      border: "2px solid #0c0c0c",
      background: "#f08b3c",
      color: "#1b1b1b",
      padding: "2px 6px",
      fontWeight: "700",
      letterSpacing: "1px",
    },
  },
  tone: {
    dark: { background: "#1b1b1b", color: "#e6e2d5" },
    light: { background: "#d8d2c3", color: "#1b1b1b" },
    accent: { background: "#f08b3c", color: "#1b1b1b" },
    warn: { background: "#d34a4a", color: "#f8f2e7" },
  },
  pad: {
    xs: "4px",
    sm: "8px",
    md: "12px",
    lg: "16px",
  },
  border: {
    thin: "2px",
    thick: "3px",
    heavy: "4px",
  },
  round: {
    none: "0px",
    sm: "2px",
    md: "4px",
    lg: "8px",
  },
  gap: {
    xs: "4px",
    sm: "8px",
    md: "12px",
    lg: "16px",
  },
  size: {
    sm: { fontSize: "12px", padding: "3px 6px" },
    md: { fontSize: "14px", padding: "4px 8px" },
    lg: { fontSize: "16px", padding: "6px 10px" },
  },
  ink: {
    dim: { color: "#b1a99a" },
    bright: { color: "#f8f2e7" },
  },
  align: {
    start: "flex-start",
    center: "center",
    end: "flex-end",
    stretch: "stretch",
  },
  justify: {
    start: "flex-start",
    center: "center",
    end: "flex-end",
    between: "space-between",
    around: "space-around",
  },
  width: {
    sm: "180px",
    md: "320px",
    lg: "520px",
    full: "100%",
  },
};

const historyStack = [];
let historyIndex = -1;

function applyBaseStyles(root = document) {
  const all = root.querySelectorAll("*");
  all.forEach((el) => {
    Object.assign(el.style, STYLE_MAP.base);
  });
  if (root === document) {
    document.body.style.margin = "0";
  }
}

function applyAttributeStyles(root = document) {
  const styled = root.querySelectorAll("[data-ui]");
  styled.forEach((el) => {
    const ui = el.getAttribute("data-ui");
    if (STYLE_MAP.ui[ui]) Object.assign(el.style, STYLE_MAP.ui[ui]);

    const tone = el.getAttribute("data-tone");
    if (STYLE_MAP.tone[tone]) Object.assign(el.style, STYLE_MAP.tone[tone]);

    const pad = el.getAttribute("data-pad");
    if (STYLE_MAP.pad[pad]) el.style.padding = STYLE_MAP.pad[pad];

    const gap = el.getAttribute("data-gap");
    if (STYLE_MAP.gap[gap]) el.style.gap = STYLE_MAP.gap[gap];

    const border = el.getAttribute("data-border");
    if (STYLE_MAP.border[border]) {
      el.style.borderWidth = STYLE_MAP.border[border];
      el.style.borderStyle = "solid";
      el.style.borderColor = "#0c0c0c";
    }

    const round = el.getAttribute("data-round");
    if (STYLE_MAP.round[round]) el.style.borderRadius = STYLE_MAP.round[round];

    const size = el.getAttribute("data-size");
    if (STYLE_MAP.size[size]) Object.assign(el.style, STYLE_MAP.size[size]);

    const ink = el.getAttribute("data-ink");
    if (STYLE_MAP.ink[ink]) Object.assign(el.style, STYLE_MAP.ink[ink]);

    const align = el.getAttribute("data-align");
    if (STYLE_MAP.align[align]) el.style.alignItems = STYLE_MAP.align[align];

    const justify = el.getAttribute("data-justify");
    if (STYLE_MAP.justify[justify]) {
      el.style.justifyContent = STYLE_MAP.justify[justify];
    }

    const width = el.getAttribute("data-width");
    if (STYLE_MAP.width[width]) el.style.width = STYLE_MAP.width[width];
  });
}

const BAR_TEMPLATE = document.createElement("template");
BAR_TEMPLATE.innerHTML = `
  <div data-ui="bar">
    <slot></slot>
  </div>
`;

const LABEL_TEMPLATE = document.createElement("template");
LABEL_TEMPLATE.innerHTML = `
  <div data-ui="label">
    <slot></slot>
  </div>
`;

class PopperBar extends HTMLElement {
  static observedAttributes = [
    "data-gap",
    "data-tone",
    "data-pad",
    "data-border",
    "data-round",
    "data-justify",
    "data-align",
  ];

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(BAR_TEMPLATE.content.cloneNode(true));
    this.container = this.shadowRoot.querySelector("[data-ui='bar']");
  }

  connectedCallback() {
    this.syncAttributes();
    applyBaseStyles(this.shadowRoot);
    applyAttributeStyles(this.shadowRoot);
  }

  attributeChangedCallback() {
    this.syncAttributes();
    applyAttributeStyles(this.shadowRoot);
  }

  syncAttributes() {
    PopperBar.observedAttributes.forEach((name) => {
      const value = this.getAttribute(name);
      if (value === null) {
        this.container.removeAttribute(name);
      } else {
        this.container.setAttribute(name, value);
      }
    });
  }
}

class PopperLabel extends HTMLElement {
  static observedAttributes = ["data-ink", "data-tone", "data-border", "data-round"];

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(LABEL_TEMPLATE.content.cloneNode(true));
    this.container = this.shadowRoot.querySelector("[data-ui='label']");
  }

  connectedCallback() {
    this.syncAttributes();
    applyBaseStyles(this.shadowRoot);
    applyAttributeStyles(this.shadowRoot);
  }

  attributeChangedCallback() {
    this.syncAttributes();
    applyAttributeStyles(this.shadowRoot);
  }

  syncAttributes() {
    PopperLabel.observedAttributes.forEach((name) => {
      const value = this.getAttribute(name);
      if (value === null) {
        this.container.removeAttribute(name);
      } else {
        this.container.setAttribute(name, value);
      }
    });
  }
}

customElements.define("popper-bar", PopperBar);
customElements.define("popper-label", PopperLabel);

function setStatus(message) {
  const status = document.getElementById("status");
  status.textContent = message;
}

function normalizeUrl(input) {
  const trimmed = input.trim();
  if (!trimmed || trimmed === "about:home" || trimmed === "home") {
    return "about:home";
  }
  if (trimmed === "about:spec" || trimmed === "spec") {
    return "about:spec";
  }
  if (trimmed === "about:demo" || trimmed === "demo") {
    return "about:demo";
  }
  if (trimmed.startsWith("pppr:")) {
    return trimmed;
  }
  if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) {
    return trimmed;
  }
  return `https://${trimmed}`;
}

function loadHome(view) {
  view.src = "about:blank";
  view.srcdoc = HOME_DOC;
  setStatus("HOME");
}

function loadSpec(view) {
  view.src = "about:blank";
  view.srcdoc = SPEC_DOC;
  setStatus("SPEC");
}

function loadDemo(view) {
  view.src = "about:blank";
  view.srcdoc = DEMO_DOC;
  setStatus("DEMO");
}

function stripDisallowedStyles(doc) {
  doc.querySelectorAll("style").forEach((node) => node.remove());
  doc.querySelectorAll("[style]").forEach((node) => {
    node.removeAttribute("style");
  });
}

function buildPpprDocument(rawHtml, title = "Popper Doc") {
  const parser = new DOMParser();
  const parsed = parser.parseFromString(rawHtml, "text/html");
  stripDisallowedStyles(parsed);
  const bodyHtml = parsed.body ? parsed.body.innerHTML : rawHtml;
  return `
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>${title}</title>
  </head>
  <body>
    ${bodyHtml || "<main><h1>Empty PPPR document</h1></main>"}
    <script>${PPPR_BOOTSTRAP}</script>
  </body>
</html>
`;
}

function loadPppr(view, url) {
  const payload = url.slice(5);
  let raw = "";
  let title = "Popper Doc";

  if (!payload || payload === "home") {
    raw = `
      <main data-ui="frame" data-tone="dark" data-pad="md" data-gap="sm">
        <div data-ui="bar" data-gap="xs" data-justify="between">
          <div data-ui="badge">PPPR</div>
          <div data-ui="label" data-ink="dim">DOC MODE</div>
        </div>
        <div data-ui="screen" data-tone="light" data-pad="sm" data-border="heavy">
          <h1>Popper Document</h1>
          <p>Use pppr:demo or pppr:spec, or embed HTML after the scheme.</p>
        </div>
      </main>
    `;
    title = "PPPR Home";
  } else if (payload === "demo") {
    raw = DEMO_DOC;
    title = "PPPR Demo";
  } else if (payload === "spec") {
    raw = SPEC_DOC;
    title = "PPPR Spec";
  } else {
    try {
      raw = decodeURIComponent(payload);
      title = "PPPR Document";
    } catch (err) {
      raw = `<main><h1>Invalid PPPR payload</h1><p>${String(err)}</p></main>`;
      title = "PPPR Error";
    }
  }

  view.src = "about:blank";
  view.srcdoc = buildPpprDocument(raw, title);
  setStatus(`PPPR ${title.toUpperCase()}`);
}

function loadUrl(view, url) {
  if (url === "about:home") {
    loadHome(view);
    return;
  }
  if (url === "about:spec") {
    loadSpec(view);
    return;
  }
  if (url === "about:demo") {
    loadDemo(view);
    return;
  }
  if (url.startsWith("pppr:")) {
    loadPppr(view, url);
    return;
  }
  view.removeAttribute("srcdoc");
  view.src = url;
  setStatus(`LOADING ${url}`);
}

function navigate(url, push = true) {
  const view = document.getElementById("view");
  const normalized = normalizeUrl(url);
  if (push) {
    historyStack.splice(historyIndex + 1);
    historyStack.push(normalized);
    historyIndex = historyStack.length - 1;
  }
  loadUrl(view, normalized);
}

function updateNavState() {
  const back = document.getElementById("nav-back");
  const forward = document.getElementById("nav-forward");
  back.disabled = historyIndex <= 0;
  forward.disabled = historyIndex >= historyStack.length - 1;
  back.style.opacity = back.disabled ? "0.5" : "1";
  forward.style.opacity = forward.disabled ? "0.5" : "1";
  back.style.cursor = back.disabled ? "not-allowed" : "pointer";
  forward.style.cursor = forward.disabled ? "not-allowed" : "pointer";
}

window.addEventListener("DOMContentLoaded", () => {
  applyBaseStyles();
  applyAttributeStyles();

  const navForm = document.getElementById("nav-form");
  const navInput = document.getElementById("nav-input");
  const view = document.getElementById("view");

  navForm.addEventListener("submit", (event) => {
    event.preventDefault();
    navigate(navInput.value);
    updateNavState();
  });

  document.getElementById("nav-back").addEventListener("click", () => {
    if (historyIndex > 0) {
      historyIndex -= 1;
      navInput.value = historyStack[historyIndex];
      loadUrl(view, historyStack[historyIndex]);
      updateNavState();
    }
  });

  document.getElementById("nav-forward").addEventListener("click", () => {
    if (historyIndex < historyStack.length - 1) {
      historyIndex += 1;
      navInput.value = historyStack[historyIndex];
      loadUrl(view, historyStack[historyIndex]);
      updateNavState();
    }
  });

  document.getElementById("nav-reload").addEventListener("click", () => {
    const current = historyStack[historyIndex] || "about:home";
    navInput.value = current;
    loadUrl(view, current);
  });

  view.addEventListener("load", () => {
    const current = historyStack[historyIndex] || "about:home";
    navInput.value = current;
    setStatus(`READY ${current}`);
  });

  navigate(navInput.value);
  updateNavState();
});
