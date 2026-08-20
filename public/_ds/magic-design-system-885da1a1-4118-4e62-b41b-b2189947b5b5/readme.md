# Magic Design System

## What this is

Magic pairs clients with dedicated human executive assistants and managed AI agents. The brand voice is calm, premium, and human — described in its own design language as "Apple meets a frontier AI lab": generous whitespace, big confident type, soft pillow cards, and a signature rainbow aurora glow.

This project is a transcription of Magic's own bundled design-language skill (**magic-design-v4**) into a browsable design system: working token CSS, a matching React component library, foundation specimens, a sample marketing-page recreation, and sample slides.

## Sources

- `uploads/magic-design-v4.skill` — the original Magic design-language skill bundle (SKILL.md + reference docs + `magic.css` + a shadcn/Tailwind theme bridge + a scroll-world motion bridge + a runnable `starter.html`). Extracted into `uploads/skill_extracted/` and used as the ground truth for every token, class, and rule in this project.
- `uploads/Gemini_Generated_Image_bvyyq7bvyyq7bvyy.png` — a supplied brand banner showing the Magic "M" mark and wordmark. Copied into `assets/` (see Iconography below); no other logo files were provided.
- `uploads/claude-contest-teaser-16x9.png` and `uploads/claude-contest-teaser-1x1.png` — a shipped announcement banner (Magic × Claude co-brand teaser) at two fixed aspect ratios. This is a finished, polished deliverable rather than a source doc, so it was mined for reusable patterns (ambient wash background, partner lockup, centered teaser composition, phrase-level gradient clip) rather than transcribed verbatim. A crop of its partner-lockup row is saved as `assets/partner-lockup-example.png` for reference.

No Figma file, codebase, or product screens were attached, so there is no external "product" to recreate pixel-for-pixel. The UI kit and slide samples in this project are original compositions built strictly from the skill's own documented tokens, components, and page scaffolds (`references/templates.md`) — not invented layouts.

## Content fundamentals

- **Tone**: calm, direct, optimistic. Headlines are short and end with a period ("Design that feels considered.").
- **Copy is compressed, not vague.** On dense layouts (slides, infographics, 4+ visible blocks) body copy is roughly one line, 8–14 words. Cut qualifiers and hedges before shrinking type.
- **Structural copy patterns**: CTAs lead with a verb and name the outcome ("Start free trial", not "Submit"). Card/stat labels are noun phrases, not sentences ("24/7 human backup"). Errors state what happened, why, and how to fix, in that order.
- **No emoji** unless a user explicitly asks. No em-dashes in written copy.
- Persuasive copy picks a structure before writing: PAS (problem → agitate → solve), AIDA, or FAB (feature → advantage → benefit).

## Visual foundations

- **Color**: light page background (`#F3F5FA`) is the default surface; near-black/black is reserved for stat bands, CTA bars, and closers — one to two dark blocks per page, maximum. Brand purple (`#5200E3`) carries kickers, links, and focus rings.
- **The aurora is the brand.** A blurred rainbow gradient (`--rainbow`) sits behind heroes, CTAs, and dark blocks — always a soft backdrop at 120–140px blur, never a sharp fill, never on top of content. It breathes on a slow 28-second drift.
- **The sphere gradient** (`--sphere`, pink → magenta → cyan) text-clips exactly **one word** per page, on the top-level headline only.
- **Type**: League Spartan (display/UI, 300–700) with Hind as a body alternate. A deliberate 6-step scale (kicker → H1 → H2 → H3 → H4 → body → meta) so hierarchy never jumps straight from a huge headline to a caption.
- **Cards**: 24px radius, `2px solid #fff` border (the signature — never a gray hairline), violet-tinted shadow, `rgba(255,255,255,.92)` fill. Cards are reserved for 2–4 parallel, equal-weight facts — not a default container. See `references/components.md`'s container-picking table for the full decision rule.
- **Radii**: inputs 16px, cards 24px, large cards/CTA bars 32px, hero pillow 50px, buttons/pills 9999px.
- **Shadows**: soft, wide, and violet-tinted (`rgba(7,0,200,…)`) — never gray.
- **Spacing is density-aware**: sparse/high-impact sections (hero, single stat) get 80px gutters and 120–140px section padding; dense/informational sections (checklists, dashboards, slides) drop to 24–32px block padding via `.magic-dense`.
- **Motion**: 150–300ms, a single settle easing (`cubic-bezier(.22,.61,.36,1)`, never a bounce), and exits faster than entrances. Only `transform`/`opacity`/`filter`/`clip-path` are animated. Every animation has a stated meaning (a lifting card means clickable; a stagger means "read in this order"); `prefers-reduced-motion` collapses everything to a static end state.
- **Hover/press**: buttons scale to `.97` on press; interactive cards lift `-5px` with a bigger shadow on hover and return flat on press. Static content cards never get hover motion — it promises interactivity that isn't there.
- **Backgrounds**: no photography, no hand-drawn illustration, no repeating pattern/texture in the supplied material — the aurora gradient and the lavender hero-wash are the only background treatments for content pages. Full-bleed treatment is reserved for the CTA/stat dark bands. A third pattern, surfaced by a shipped teaser banner: an **ambient wash** — a soft, multi-hue radial blend (peach top-left, lavender center, pale blue edges, sampled directly from the banner into `--wash-ambient`) that fills an entire fixed-canvas announcement with no dark block at all. Reserve it for hold/reveal teasers, not regular pages.
- **Announcement/teaser canvases** (the banner's own format) break several content-page rules deliberately: content sits centered in the middle third of the frame with 60%+ empty space above and below, there's no card, no button, no CTA — just a partner lockup, a kicker, a headline, and one line of subcopy. Use `Teaser` for this; don't reuse `CTABar` or a hero pattern built for a scrolling page.
- **Co-brand lockup**: when Magic appears alongside a partner mark, the two marks sit side by side at equal size (~56px), separated by a plain `×`, with a centered kicker naming the pairing underneath (e.g. "MAGIC'S CLAUDE ASSISTANTS"). See `Lockup`.
- **Gradient clip exception**: the teaser's headline clips a short 2–3 word *phrase* ("Claude Contest") rather than the usual single word — acceptable specifically on a minimal teaser canvas where nothing else competes for the effect; multi-page content still gets one gradient *word*.
- **Transparency/blur**: `filter: blur(120–140px)` is used exclusively for the aurora glow; no other blur or backdrop-filter usage is defined.
- **Imagery color vibe**: not established by the source material beyond the aurora's warm/cool spectrum (orange–violet–blue glow tones, pink–magenta–cyan sphere tones) — no photographic direction (warm/cool/grain/b&w) was supplied. Ask before introducing photography.
- **Accessibility floor**: every text/surface pair in `magic.css` is a measured WCAG 2.1 ratio, not an estimate — re-measure any new pair before shipping it. 44×44px minimum interactive targets; visible focus rings everywhere (violet on light, cyan on dark).

## Iconography

**No icon font, SVG sprite, or icon set was included in the provided skill bundle or brand banner.** `magic.css` and the reference docs define zero icon classes or glyphs. Nothing was fabricated here to fill the gap.

- No emoji usage is documented (the skill explicitly lists emoji under "what to avoid" unless a user asks).
- No unicode-glyph icon usage is documented.
- **Recommendation, flagged as a substitution**: if a build needs icons, Lucide (stroke-based, geometric, calm) is the closest CDN-available match to Magic's overall geometric-sans, no-clutter aesthetic. This is a suggestion only — nothing in this project depends on it, and the user should confirm before it's adopted as the system default.
- The only real visual brand assets available are in `assets/`: the supplied banner and a cropped copy of its "M" mark. Treat both as reference material, not a production-ready transparent logo lockup — the source image has no transparent background, so the mark can't be isolated from its wash without redrawing it, which this project deliberately does not do.

## Index

```
styles.css                      Root stylesheet — @imports only, link this one file
tokens/
  colors.css                    Surfaces, ink, brand purples, aurora stops, chart/accent ramp, gradients
  typography.css                Google-Fonts import (League Spartan, Hind) + type scale classes
  spacing.css                   Gutter/section/block/stack tokens + .magic-dense override
  effects.css                   Radii, shadows, motion durations/easings
foundations/
  base.css                      Reset, body defaults, focus rings, selection color
  aurora.css                    .m-aurora / .m-wash / .m-grad + their keyframes
  layout.css                    .m-page/.m-section/.m-stack/.m-grid/.m-split/.m-dark
  components.css                .m-card/.m-btn/.m-badge/.m-list/.m-flow/.m-field/.m-callout/.m-cta/.m-stats/.m-media
  motion.css                    Entrance/stagger/overlay/spinner/shimmer keyframes + reduced-motion + print guards
components/
  typography/  Kicker, Heading, Text
  core/        Button, Badge, Card
  content/     Flow, ListBlock, Callout
  layout/      Aurora, Split, CTABar, StatBand, MediaFrame, Teaser
  forms/       Field
  brand/       Lockup
guidelines/                     Foundation specimen cards (Colors, Type, Spacing, Foundations, Brand groups)
ui_kits/marketing-site/         Full landing-page recreation composed from the components above
slides/                         Four sample slide types (title, content split, dark stat, closing/quote)
assets/                         brand-banner.png (full supplied banner), logo-mark.png (cropped M mark)
thumbnail.html                  Project homepage tile
SKILL.md                        Portable Claude Code / Agent Skills version of this design system
```

## Intentional additions

The original 15 components are a direct 1:1 mapping of the skill's own recipe list (kicker, headings/body/meta, card, flow, list, buttons, badge, field, callout, CTA bar, stat band, media frame, aurora, split) — nothing invented there.

Two components were added afterward, both traced to patterns in the shipped Claude-contest teaser banner rather than invented from scratch:
- **`Lockup`** — the partner co-brand mark row ("[mark] × [mark]") seen in the banner. Generic: it renders whatever marks you pass it, it does not draw or assume any specific partner's logo.
- **`Teaser`** — the centered, mostly-empty announcement-canvas composition the banner uses (ambient wash, no card, no CTA).

## Caveats — please help me iterate

- **No icon system was supplied.** If Magic has a real icon library (font, sprite, or SVG set), attach it and I'll wire it in instead of the Lucide placeholder note above.
- **No product screens, Figma file, or codebase were attached**, so the "UI kit" here is a demonstration composition, not a recreation of a real Magic surface (app, dashboard, marketing site). If there's a real product to match pixel-for-pixel, share it and I'll rebuild the UI kit against it.
- **Fonts are loaded from Google Fonts** (`@import` in `tokens/typography.css`) rather than shipped as local files — both League Spartan and Hind are stock Google Fonts, so no substitution was needed, but say the word if you'd rather self-host.
- **The only logo asset is a raster banner** with a baked-in background (no transparent PNG/SVG was provided) — if you have a proper transparent logo lockup, send it over and I'll replace `assets/logo-mark.png`.
- The `magic-shadcn-theme.css` and `magic-scroll-world.css` bridges from the original skill were not transcribed into this project's token files (they're shadcn/Tailwind- and scroll-engine-specific bridges, not core tokens) — copies remain in `uploads/skill_extracted/` if a consuming project needs them.
- **The teaser banner's headline font is not League Spartan** — it reads as a rounder, friendlier geometric sans (bouncier terminals, softer joins) than League Spartan's straighter cut. Nothing in the provided skill bundle documents a second display face, so I can't confirm what it actually is. I loaded **Baloo 2** from Google Fonts as the closest free match, exposed as `--font-display-round` / `.m-h1-round` / `.m-h2-round` for announcement moments only — the core type scale still defaults to League Spartan everywhere else. If you have the real font file, send it and I'll swap the substitution out.
