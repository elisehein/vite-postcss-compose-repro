This reproduces a behaviour in Vite where PostCSS isn't applied to styles included via `composes`.

### Steps to reproduce

1. Install dependencies & run app

```
npm install
npm run dev
```

2. Open app in browser and inspect dynamically added `<style>` tags

![Screenshot of broken styles](./screenshot.png)

#### Expected result

I exect to see the styles I include with `.foo` via `composes: component from "./component.module.css" to be valid (with PostCSS plugins applied). Expected result:

```css
 ._component_xs2hm_5 {
  color: red;
  color: var(--color-red);
 }

 ._component_xs2hm_5 ._nested-component-class_xs2hm_13 {
  width: 100%;
}

._foo_1mrk0_1 {
  color: blue;
  color: var(--color-blue);
}

._foo_1mrk0_1 ._nested-bar_1mrk0_7 {
  width: 100%;
}
```

Note that the styles in `main.module.css` are valid in that nesting has been deconstructed (by `postcss-nested`) and property fallbacks have been added (via `postcss-preset-env` + `importFrom`).

##### Actual result

The styles included via `composes` are not processed by PostCSS. They are included in the `<style>` tag as-is, resulting in invalid CSS.

```css
 ._component_xs2hm_5 {
  color: var(--color-red);

  ._nested-component-class_xs2hm_13 {
    width: 100%;
  }
}

._foo_1mrk0_1 {
  color: blue;
  color: var(--color-blue);
}

._foo_1mrk0_1 ._nested-bar_1mrk0_7 {
  width: 100%;
}
```

(I believe the class names of the composed class *are* transformed because in this reproduction I also import `component.module.css` separately in `index.jsx`).

The same bug can be observed in the production build.
