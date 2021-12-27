# SkimpleComponents

SkimpleComponents is my personal components library built on [Bootstrap](https://getbootstrap.com/) and designed to
be used with [Nuxt](https://nuxtjs.org/).

## Why this library ?

[BootstrapVue](https://bootstrap-vue.org/) has been abandoned
(well, [_was_ abandoned](https://github.com/bootstrap-vue/bootstrap-vue/issues/6872)) and I needed a <q>drop-in</q>
replacement. So here is it !

Keep in mind that it's just a _personal_ library : it is not meant to be complete nor a full replacement.

## How to use ?

First, install this library.

```shell
npm install skimple-components
```

In your `nuxt.config.js`, add the `skimple-components/nuxt` module :

```js
modules: [
  // Your modules here.
  // ...
  'skimple-components/nuxt'
]
```

And that's it.
Feel free to browse available components [here](https://github.com/Skyost/SkimpleComponents/tree/master/src/components).

## Customizing Bootstrap

You're free to customize Bootstrap styles ! First, create your an `app.scss` file (in your `assets` folder)
containing these lines :

```scss
// YOUR STYLES HERE.
// For example :
// $primary: #212529;

@import '~bootstrap/scss/bootstrap';
```

The disable the automatic Bootstrap CSS import via the `nuxt.config.js` :

```js
skimpleComponents: {
  bootstrapCss: false
}
```

Et voilà ! You can also disable the automatic Bootstrap JS import as well as Bootstrap icons if you don't use them :

```js
skimpleComponents: {
  bootstrapCss: false,
  bootstrapJs: false,
  icons: false // `SkiIcon` component will stop working.
}
```
