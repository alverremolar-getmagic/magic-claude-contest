/* @ds-bundle: {"format":4,"namespace":"MagicDesignSystem_885da1","components":[{"name":"Lockup","sourcePath":"components/brand/Lockup.jsx"},{"name":"Callout","sourcePath":"components/content/Callout.jsx"},{"name":"Flow","sourcePath":"components/content/Flow.jsx"},{"name":"ListBlock","sourcePath":"components/content/ListBlock.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Aurora","sourcePath":"components/layout/Aurora.jsx"},{"name":"CTABar","sourcePath":"components/layout/CTABar.jsx"},{"name":"MediaFrame","sourcePath":"components/layout/MediaFrame.jsx"},{"name":"Split","sourcePath":"components/layout/Split.jsx"},{"name":"StatBand","sourcePath":"components/layout/StatBand.jsx"},{"name":"Teaser","sourcePath":"components/layout/Teaser.jsx"},{"name":"Heading","sourcePath":"components/typography/Heading.jsx"},{"name":"Kicker","sourcePath":"components/typography/Kicker.jsx"},{"name":"Text","sourcePath":"components/typography/Text.jsx"}],"sourceHashes":{"components/brand/Lockup.jsx":"ecb1ec6b277c","components/content/Callout.jsx":"89ae194f1e59","components/content/Flow.jsx":"4cba59c707cd","components/content/ListBlock.jsx":"c7733edf47dc","components/core/Badge.jsx":"a3d94fef8f73","components/core/Button.jsx":"1ee6e576faaf","components/core/Card.jsx":"ac7d9658dfc6","components/forms/Field.jsx":"0c45fbb5202b","components/layout/Aurora.jsx":"522523cdb1f2","components/layout/CTABar.jsx":"d8b6769830f6","components/layout/MediaFrame.jsx":"29b3a59edb06","components/layout/Split.jsx":"6fb94816a907","components/layout/StatBand.jsx":"c4d05195fd84","components/layout/Teaser.jsx":"7888b5c590a3","components/typography/Heading.jsx":"8ecfcbc59db1","components/typography/Kicker.jsx":"16554c67ba0d","components/typography/Text.jsx":"bad9734d9225"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MagicDesignSystem_885da1 = window.MagicDesignSystem_885da1 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Lockup.jsx
try { (() => {
function Lockup({
  marks = [],
  separator = '×'
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "m-lockup"
  }, marks.map((m, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 ? /*#__PURE__*/React.createElement("span", {
    className: "m-lockup-sep"
  }, separator) : null, /*#__PURE__*/React.createElement("span", {
    className: "m-lockup-mark"
  }, /*#__PURE__*/React.createElement("img", {
    src: m.src,
    alt: m.alt || ''
  })))));
}
Object.assign(__ds_scope, { Lockup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Lockup.jsx", error: String((e && e.message) || e) }); }

// components/content/Callout.jsx
try { (() => {
function Callout({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "m-callout"
  }, children);
}
Object.assign(__ds_scope, { Callout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Callout.jsx", error: String((e && e.message) || e) }); }

// components/content/Flow.jsx
try { (() => {
function Flow({
  steps = [],
  horizontal = false,
  accent = false,
  stagger = true
}) {
  const rootCls = ['m-flow', horizontal ? 'm-flow-h' : '', stagger ? 'm-stagger' : ''].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", {
    className: rootCls
  }, steps.map((s, i) => /*#__PURE__*/React.createElement("div", {
    className: "m-flow-step",
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: 'm-badge-num' + (accent ? ' m-badge-num-accent' : '')
  }, i + 1), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "m-h4"
  }, s.title), s.body ? /*#__PURE__*/React.createElement("p", {
    className: "m-body"
  }, s.body) : null))));
}
Object.assign(__ds_scope, { Flow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Flow.jsx", error: String((e && e.message) || e) }); }

// components/content/ListBlock.jsx
try { (() => {
function ListBlock({
  rows = []
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "m-list"
  }, rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
    className: "m-list-row",
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "m-badge-num"
  }, r.number ?? i + 1), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "m-h4"
  }, r.title), r.body ? /*#__PURE__*/React.createElement("p", {
    className: "m-body"
  }, r.body) : null))));
}
Object.assign(__ds_scope, { ListBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ListBlock.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function Badge({
  solid = false,
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: 'm-badge' + (solid ? ' m-badge-solid' : '')
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Button({
  variant = 'primary',
  as = 'button',
  children,
  disabled,
  loading,
  href,
  style,
  onClick
}) {
  const Tag = as;
  const extra = Tag === 'a' ? {
    href,
    'aria-disabled': disabled || undefined
  } : {
    disabled,
    onClick
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: 'm-btn m-btn-' + variant,
    style: style
  }, extra), loading ? /*#__PURE__*/React.createElement("span", {
    className: "m-spinner",
    role: "status",
    "aria-label": "Loading"
  }) : null, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function Card({
  size = 'default',
  interactive = false,
  children,
  style
}) {
  const sizeCls = size === 'large' ? ' m-card-lg' : size === 'pillow' ? ' m-card-pillow' : '';
  return /*#__PURE__*/React.createElement("div", {
    className: 'm-card' + sizeCls + (interactive ? ' m-card-interactive' : ''),
    style: style
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function Field({
  label,
  id,
  type = 'text',
  hint,
  error,
  placeholder,
  defaultValue,
  disabled
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "m-field"
  }, /*#__PURE__*/React.createElement("label", {
    className: "m-label",
    htmlFor: id
  }, label), /*#__PURE__*/React.createElement("input", {
    className: "m-input",
    id: id,
    type: type,
    placeholder: placeholder,
    defaultValue: defaultValue,
    disabled: disabled,
    "aria-invalid": !!error,
    "aria-describedby": error ? id + '-err' : hint ? id + '-hint' : undefined
  }), error ? /*#__PURE__*/React.createElement("p", {
    className: "m-error",
    id: id + '-err'
  }, error) : hint ? /*#__PURE__*/React.createElement("p", {
    className: "m-hint",
    id: id + '-hint'
  }, hint) : null);
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/layout/Aurora.jsx
try { (() => {
function Aurora({
  variant,
  still = false,
  as = 'div',
  className = '',
  style,
  children
}) {
  const Tag = as;
  const cls = ['m-aurora', variant === 'top' ? 'm-aurora-top' : '', variant === 'soft' ? 'm-aurora-soft' : '', still ? 'm-aurora-still' : '', className].filter(Boolean).join(' ');
  return React.createElement(Tag, {
    className: cls,
    style
  }, children);
}
Object.assign(__ds_scope, { Aurora });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Aurora.jsx", error: String((e && e.message) || e) }); }

// components/layout/CTABar.jsx
try { (() => {
function CTABar({
  kicker,
  headline,
  gradientWord,
  body,
  ctaLabel = 'Get started',
  ctaHref = '#',
  aurora = true
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: 'm-cta on-dark' + (aurora ? ' m-aurora m-aurora-top' : '')
  }, kicker ? /*#__PURE__*/React.createElement("p", {
    className: "m-kicker",
    style: {
      justifyContent: 'center'
    }
  }, kicker) : null, /*#__PURE__*/React.createElement("h2", {
    className: "m-h2"
  }, headline, gradientWord ? /*#__PURE__*/React.createElement(React.Fragment, null, " ", /*#__PURE__*/React.createElement("span", {
    className: "m-grad"
  }, gradientWord)) : null, "."), body ? /*#__PURE__*/React.createElement("p", {
    className: "m-body",
    style: {
      margin: '16px auto 0',
      maxWidth: '48ch'
    }
  }, body) : null, /*#__PURE__*/React.createElement("a", {
    href: ctaHref,
    className: "m-btn m-btn-light",
    style: {
      marginTop: 30
    }
  }, ctaLabel));
}
Object.assign(__ds_scope, { CTABar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/CTABar.jsx", error: String((e && e.message) || e) }); }

// components/layout/MediaFrame.jsx
try { (() => {
function MediaFrame({
  src,
  alt = '',
  children
}) {
  return /*#__PURE__*/React.createElement("figure", {
    className: "m-media",
    style: {
      margin: 0
    }
  }, children ? children : /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt
  }));
}
Object.assign(__ds_scope, { MediaFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/MediaFrame.jsx", error: String((e && e.message) || e) }); }

// components/layout/Split.jsx
try { (() => {
function Split({
  mediaFirst = false,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: 'm-split' + (mediaFirst ? ' m-split-media' : '')
  }, children);
}
Object.assign(__ds_scope, { Split });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Split.jsx", error: String((e && e.message) || e) }); }

// components/layout/StatBand.jsx
try { (() => {
function StatBand({
  kicker,
  stats = []
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "m-dark on-dark m-aurora m-aurora-top"
  }, kicker ? /*#__PURE__*/React.createElement("p", {
    className: "m-kicker",
    style: {
      marginBottom: 28
    }
  }, kicker) : null, /*#__PURE__*/React.createElement("div", {
    className: "m-stats"
  }, stats.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "m-stat-value"
  }, s.value), /*#__PURE__*/React.createElement("div", {
    className: "m-stat-label"
  }, s.label)))));
}
Object.assign(__ds_scope, { StatBand });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/StatBand.jsx", error: String((e && e.message) || e) }); }

// components/layout/Teaser.jsx
try { (() => {
function Teaser({
  ambient = true,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: 'm-teaser' + (ambient ? ' m-wash-ambient' : '')
  }, children);
}
Object.assign(__ds_scope, { Teaser });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Teaser.jsx", error: String((e && e.message) || e) }); }

// components/typography/Heading.jsx
try { (() => {
function Heading({
  level = 1,
  children,
  gradientWord,
  className = '',
  style
}) {
  const Tag = 'h' + Math.min(level, 4);
  const cls = level <= 2 ? 'm-h' + level : level === 3 ? 'm-h3' : 'm-h4';
  return React.createElement(Tag, {
    className: (cls + ' ' + className).trim(),
    style
  }, children, gradientWord ? React.createElement('span', {
    className: 'm-grad'
  }, ' ' + gradientWord) : null, level <= 2 ? '.' : null);
}
Object.assign(__ds_scope, { Heading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/typography/Heading.jsx", error: String((e && e.message) || e) }); }

// components/typography/Kicker.jsx
try { (() => {
function Kicker({
  children,
  second,
  style
}) {
  return /*#__PURE__*/React.createElement("p", {
    className: "m-kicker",
    style: style
  }, children, second ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), second) : null);
}
Object.assign(__ds_scope, { Kicker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/typography/Kicker.jsx", error: String((e && e.message) || e) }); }

// components/typography/Text.jsx
try { (() => {
function Text({
  variant = 'body',
  as = 'p',
  children,
  className = '',
  style
}) {
  const cls = variant === 'meta' ? 'm-meta' : 'm-body';
  return React.createElement(as, {
    className: (cls + ' ' + className).trim(),
    style
  }, children);
}
Object.assign(__ds_scope, { Text });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/typography/Text.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Lockup = __ds_scope.Lockup;

__ds_ns.Callout = __ds_scope.Callout;

__ds_ns.Flow = __ds_scope.Flow;

__ds_ns.ListBlock = __ds_scope.ListBlock;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Aurora = __ds_scope.Aurora;

__ds_ns.CTABar = __ds_scope.CTABar;

__ds_ns.MediaFrame = __ds_scope.MediaFrame;

__ds_ns.Split = __ds_scope.Split;

__ds_ns.StatBand = __ds_scope.StatBand;

__ds_ns.Teaser = __ds_scope.Teaser;

__ds_ns.Heading = __ds_scope.Heading;

__ds_ns.Kicker = __ds_scope.Kicker;

__ds_ns.Text = __ds_scope.Text;

})();
