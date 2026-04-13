# My Figma-to-Code Workflow in 2024

The gap between a design in Figma and a working implementation in React has always been frustrating. Here's the workflow that's clicked for me.

## Design in the language of code

The biggest shift was starting to design in a way that maps naturally to how components are built:

- Think in **component boundaries** — if something repeats, it's a component
- Use **auto-layout religiously** — it maps directly to flexbox
- Name layers like CSS classes — not "Rectangle 42"

## Variables as design tokens

Figma's variable system maps 1:1 with CSS custom properties:

```
Figma variable          →    CSS custom property
colors/text/primary     →    --color-text-primary
spacing/4               →    --space-4
```

When I update a variable in Figma, I update the corresponding CSS variable in code. Single source of truth.

## The component audit step

Before writing a single line of code, I list every distinct UI pattern across all screens. This prevents the "oh I forgot about mobile states" discovery at 11pm before launch.

## Dev Mode is actually good now

Figma's Dev Mode has become genuinely useful. The inspect panel for spacing, typography, and color is fast and accurate.

My flow: design in design mode → review values in Dev Mode → write the component by hand using those values. I never copy-paste Figma's CSS output directly.

## The handoff that isn't a handoff

The best version of this workflow: the designer and developer are the same person, or at least work in constant conversation. Design isn't thrown over a wall — it evolves as implementation reveals constraints.
