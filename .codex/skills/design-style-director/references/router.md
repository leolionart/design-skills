# Router

## Choose the family by dominant intent

### high-agency
Use for flagship launches, asymmetry, strong hierarchy, anti-generic product marketing, founder confidence, bold but not chaotic pages.

Signals:
- flagship
- anti-generic
- asymmetry
- launch energy
- strong hierarchy

### editorial-typography
Use for manifesto pages, luxury brands, refined portfolios, quiet confidence, typography-led work, reading-first layouts.

Signals:
- editorial
- luxury
- quiet
- refined
- whitespace

### grid-product
Use for SaaS, AI tools, explainers, feature-heavy pages, clear scanning, modular blocks, structured dashboards.

Signals:
- feature-heavy
- SaaS
- dashboard
- modular
- bento
- clarity

### immersive-premium
Use for premium tech, atmosphere, glass, glow, cinematic depth, object-centric heroes, scroll-led reveals, layered experiences.

Signals:
- premium tech
- glass
- aurora
- 3D
- cinematic
- layered
- immersive

### tactile-organic
Use for softer products, rounded systems, playful consumer UI, gentle gradients, warm tactility, approachable interfaces.

Signals:
- soft
- tactile
- rounded
- friendly
- organic
- ambient
- approachable

### experimental-loud
Use for culture-led brands, campaigns, anti-template work, neo-brutalism, Y2K, anti-design, deliberate tension.

Signals:
- bold
- disruptive
- anti-template
- loud
- Y2K
- brutalist
- experimental

## Pick exemplar styles after family
- high-agency -> `default-high-agency`
- editorial-typography -> `editorial-minimalism`, `premium-monochrome`, `academia-classical`, `art-deco-luxe`
- grid-product -> `bento-grid`, `professional-corporate`, `terminal-interface`, `bauhaus-geometric`
- immersive-premium -> `glassmorphism-mature`, `dark-glow-aurora`, `immersive-3d-product`, `motion-led-storytelling`, `iridescent-holographic-chrome`, `cyberpunk-neon`, `web3-orange-ledger`
- tactile-organic -> `claymorphism-soft-3d`, `organic-mesh-gradients`, `botanical-editorial`
- experimental-loud -> `neo-brutalism`, `y2k-retro-futurism`, `anti-design`, `cute-alism-kawaii-brutalism`, `brutalist-editorial-zine`, `maximalism-collage`, `vaporwave-dreamscape`, `sketch-wireframe`

## Exemplar chooser cues
- `default-high-agency` -> flagship, founder-led, asymmetric, anti-generic, strong CTA timing, bold but still strategic
- `editorial-minimalism` -> refined editorial, manifesto, Swiss-inspired structure, quiet but visibly composed
- `premium-monochrome` -> quiet luxury, boutique service, monochrome restraint, expensive neutrality
- `academia-classical` -> scholarly, institutional, archival warmth, brass detail, literary prestige
- `art-deco-luxe` -> geometric luxury, hospitality glamour, black-gold elegance, premium invitation energy
- `bento-grid` -> modular tile storytelling, many benefits visible fast, dense but controlled scanning
- `professional-corporate` -> enterprise trust, executive clarity, structured B2B polish, serious operational tone
- `terminal-interface` -> devtools, infra, console logic, monospace hierarchy, command-line mood
- `bauhaus-geometric` -> modernist geometry, primary-color discipline, graphic modularity, design-led clarity
- `glassmorphism-mature` -> frosted panels, layered translucency, premium system surface, readable glass UI
- `dark-glow-aurora` -> dark premium tech, luminous atmosphere, cinematic hero, aurora fields
- `immersive-3d-product` -> product reveal, rendered object hero, wow-factor staging, object-centric launch
- `motion-led-storytelling` -> scrollytelling, reveal sequence, sticky pacing, narrative launch structure
- `iridescent-holographic-chrome` -> chrome, holographic, reflective, fashion-tech, beauty-tech, music-tech
- `cyberpunk-neon` -> sci-fi contrast, electric accents, glitch energy, speculative tech spectacle
- `web3-orange-ledger` -> crypto trust theater, orange glow, network overlays, ledger-like technical mood
- `claymorphism-soft-3d` -> puffy, tactile, touchable, rounded, toy-like but controlled softness
- `organic-mesh-gradients` -> blobs, mesh gradients, ambient softness, soft-futurist warmth, atmospheric brand mood
- `botanical-editorial` -> earthy calm, wellness luxury, natural materials, grounded lifestyle premium
- `neo-brutalism` -> thick borders, hard shadows, blunt geometry, anti-clean structure
- `y2k-retro-futurism` -> glossy nostalgia, millennium-tech styling, chrome hints, playful sci-fi energy
- `anti-design` -> intentional disorder, deconstructed layout, raw tension, anti-template disruption
- `cute-alism-kawaii-brutalism` -> playful, mascot-led, sticker-like, cheerful, youth-oriented, punchy
- `brutalist-editorial-zine` -> zine, indie editorial, collage, publication-inspired, culture magazine
- `maximalism-collage` -> decorative excess, layered abundance, campaign density, culture-led loudness
- `vaporwave-dreamscape` -> dreamy neon nostalgia, synthetic sunset gradients, soft retro-future mood
- `sketch-wireframe` -> hand-drawn authorship, concept-board roughness, workshop energy, anti-corporate craft

## Tie-break rules
- If the brief says premium + readable + product clarity, prefer grid-product over immersive-premium.
- If the brief says premium + cinematic + atmosphere, prefer immersive-premium.
- If the brief says luxury + quiet + text-led, prefer editorial-typography.
- If the brief says institutional, literary, or archival prestige, stay in editorial-typography and prefer `academia-classical`.
- If the brief says glamorous hospitality or geometric luxury, stay in editorial-typography and prefer `art-deco-luxe`.
- If the brief says bold + still structured, prefer high-agency before experimental-loud.
- If the brief says playful + friendly + soft, prefer tactile-organic.
- If the brief says earthy, restorative, or nature-led premium, prefer `botanical-editorial` over other tactile directions.
- If the brief says launch energy with hierarchy rather than graphic disruption, prefer `default-high-agency` over `neo-brutalism`.
- If the brief says neutral expensive restraint rather than editorial warmth, prefer `premium-monochrome` over `editorial-minimalism`.
- If the brief says executive trust and business clarity, prefer `professional-corporate` over `bento-grid`.
- If the brief says many benefits must scan at once, prefer `bento-grid` over `professional-corporate`.
- If the brief says strict geometric modularity, prefer `bauhaus-geometric` over `bento-grid`.
- If the brief says technical operator mood, prefer `terminal-interface` over `professional-corporate`.
- If the brief says layered readable glass UI, prefer `glassmorphism-mature` over `dark-glow-aurora`.
- If the brief says reflective novelty rather than dark atmosphere, prefer `iridescent-holographic-chrome` over `dark-glow-aurora`.
- If the brief says one hero object should dominate, prefer `immersive-3d-product` over `motion-led-storytelling`.
- If the brief says reveal sequence matters more than one hero object, prefer `motion-led-storytelling` over `immersive-3d-product`.
- If the brief says neon sci-fi rather than premium calm, prefer `cyberpunk-neon` over `dark-glow-aurora`.
- If the brief says crypto-specific trust theater and finance heat, prefer `web3-orange-ledger` over `cyberpunk-neon`.
- If the brief says touchable softness, prefer `claymorphism-soft-3d` over `organic-mesh-gradients`.
- If the brief says ambient color field rather than cushioned surfaces, prefer `organic-mesh-gradients` over `claymorphism-soft-3d`.
- If the brief says cute punchiness rather than soft tactility, prefer `cute-alism-kawaii-brutalism` over tactile-organic directions.
- If the brief says publication tension rather than generic disruption, prefer `brutalist-editorial-zine` over `anti-design`.
- If the brief says glossy nostalgia rather than hard borders, prefer `y2k-retro-futurism` over `neo-brutalism`.
- If the brief says dreamy retro mood rather than sharp Y2K gloss, prefer `vaporwave-dreamscape` over `y2k-retro-futurism`.
- If the brief says hand-authored roughness rather than polished disruption, prefer `sketch-wireframe` over `anti-design`.
- If the brief says decorative abundance rather than one thesis move, prefer `maximalism-collage` over `neo-brutalism`.
- If the brief says raw disorder is the thesis, prefer `anti-design` over other loud directions.

## Safe blends
- editorial-typography + high-agency
- grid-product + immersive-premium
- tactile-organic + grid-product
- high-agency + immersive-premium

## Risky blends
- editorial-typography + experimental-loud
- tactile-organic + experimental-loud
- grid-product + anti-design-heavy experimental
