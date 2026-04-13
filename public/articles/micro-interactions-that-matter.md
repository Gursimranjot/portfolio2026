# Micro-Interactions That Actually Matter

Animation in UI is easy to get wrong in two opposite directions: too much, and it's exhausting. Too little, and the interface feels lifeless.

## The three purposes of animation

Every animation should serve at least one of these:

1. **Orientation** — helping the user understand where they are and what changed
2. **Feedback** — confirming an action was received
3. **Delight** — making the experience feel crafted and alive

If an animation doesn't serve at least one of these, cut it.

## Orientation animations

When content changes, users need to understand *how* it changed. A modal appearing from nowhere is disorienting. A modal scaling up from the button that triggered it? The user's eye follows the connection.

```css
@keyframes modal-enter {
  from { opacity: 0; transform: scale(0.95) translateY(8px); }
  to   { opacity: 1; transform: scale(1) translateY(0); }
}
```

## Feedback animations

The rule: **feedback should be immediate and brief**. A button that takes 300ms to respond feels broken. The animation should start *on* the interaction, not after it.

## The animation budget

Each screen has an "animation budget." Spend it wisely.

> Rule of thumb: if you have to scroll to see an animation, ask yourself if it's worth it.

## What to cut ruthlessly

- Animations on every hover state
- Long durations on functional elements (>300ms)
- Animations that delay the user from their goal
- Decorative looping animations

## What to keep always

- Page transitions
- Loading states
- Success/error confirmations
- Tooltip and popover entrances

The best animation is the one the user doesn't consciously notice — but would notice if it were gone.
