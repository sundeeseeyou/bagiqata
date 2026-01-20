# DaisyUI Theme Setup - Bagiqata

## ✅ Configured & Ready to Use!

Your app is now set up with **DaisyUI** and **automatic theme switching** based on your device settings (light/dark mode).

## 🎨 How It Works

### 1. **Automatic Theme Detection**

The `ThemeProvider` component automatically detects your system's theme preference:

- **Light mode** during the day
- **Dark mode** at night (or if you have dark mode enabled in your system)

### 2. **Available DaisyUI Classes**

Instead of using Tailwind's color classes like `text-gray-900` or `bg-white`, use DaisyUI's semantic classes:

#### **Background Colors:**

- `bg-base-100` - Main background (white in light, dark in dark mode)
- `bg-base-200` - Secondary background
- `bg-base-300` - Tertiary background

#### **Text Colors:**

- `text-base-content` - Main text color (automatically adjusts)
- `text-base-content/70` - 70% opacity text
- `text-base-content/60` - 60% opacity text (for secondary text)

#### **Semantic Colors:**

- `text-primary` / `bg-primary` - Primary brand color
- `text-secondary` / `bg-secondary` - Secondary brand color
- `text-error` - Error/Love button color
- `text-info` - Info/Quote button color
- `text-success` - Success/Share button color

#### **Components:**

- `card` + `card-body` - Card container
- `btn` + `btn-ghost` + `btn-sm` - Button styles
- `avatar` + `placeholder` - Avatar container

## 🎯 Benefits

1. **Automatic theme switching** - No manual toggle needed
2. **Consistent design** - Colors always match the selected theme
3. **Less code** - Use semantic class names instead of specific colors
4. **Better UX** - Respects user's system preferences

## 📚 Resources

- [DaisyUI Documentation](https://daisyui.com/)
- [DaisyUI Themes](https://daisyui.com/docs/themes/)
- [DaisyUI Components](https://daisyui.com/components/)

## 🔧 Customization

To add more themes or customize colors, edit `app/globals.css`:

```css
@plugin "daisyui" {
  themes:
    [ "light",
    "dark",
    "cupcake",
    "corporate"];
}
```

Available themes: `light`, `dark`, `cupcake`, `bumblebee`, `emerald`, `corporate`, `synthwave`, `retro`, `cyberpunk`, `valentine`, `halloween`, `garden`, `forest`, `aqua`, `lofi`, `pastel`, `fantasy`, `wireframe`, `black`, `luxury`, `dracula`, `cmyk`, `autumn`, `business`, `acid`, `lemonade`, `night`, `coffee`, `winter`, `dim`, `nord`, `sunset`

## 📝 Note on Lint Warnings

The CSS lint warnings about `@plugin` and `@theme` are expected with Tailwind CSS v4. They don't affect functionality - they're just the linter not recognizing the newer Tailwind v4 syntax.
