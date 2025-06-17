# aftereffects-code

## Squishy Bounce Preset

This repository contains an ExtendScript file that adds a smooth squishy bounce effect to any layer in After Effects. The script creates custom slider controls so you can tweak the amplitude, speed, timing offset, and damping of the effect.

### Using the Script
1. Open your project in After Effects.
2. Select one or more layers in the active composition.
3. Run `presets/SquishyBounce.jsx` via **File → Scripts → Run Script File...**.
4. Each selected layer gets four slider controls:
   - **Amplitude** – controls how far the scale stretches.
   - **Speed** – how quickly the layer oscillates.
   - **Timing Offset** – delays the start of the bounce.
   - **Damping** – how quickly the bounce settles down.

The script attaches an expression to the layer's **Scale** property that squashes and stretches the layer over time, creating a soft bounce with physics-like decay.
