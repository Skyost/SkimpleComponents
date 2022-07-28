# SkimpleComponents

SkimpleComponents is my personal components library built on [Bootstrap](https://getbootstrap.com/) and designed to
be used with [Nuxt 3](https://v3.nuxtjs.org/).

## Why this library ?

[BootstrapVue](https://bootstrap-vue.org/) has been abandoned
(well, [_was_ abandoned](https://github.com/bootstrap-vue/bootstrap-vue/issues/6872)) and I needed a <q>drop-in</q>
replacement. So here is it !

Keep in mind that it's just a _personal_ library : it is not meant to be complete nor a full replacement.

## How to use ?

First, install this library.

```shell
npm i skimple-components
```

In your `nuxt.config.ts`, add the `skimple-components/nuxt` module :

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

By default, SkimpleComponents includes Bootstrap with [these options](https://github.com/Skyost/SkimpleComponents/blob/master/src/style.scss).
But you're free to customize it ! First, create your an `app.scss` file (in your `assets` folder)
containing these lines :

```scss
// Include all of Bootstrap

// Include any default variable overrides here (though functions won't be available)
// For example :
// $primary: #212529;

@import '~bootstrap/scss/bootstrap';

// Then add additional custom code here
// For example :
// @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
// ...
```

_Feel free to not import all Bootstrap files (see instructions [here](https://getbootstrap.com/docs/5.2/customize/sass/#importing))._

Then add the `app.scss` to the `nuxt.config.ts` :

```typescript
css: [
  '~/assets/app.scss'
]
```

And disable the automatic Bootstrap CSS import via the `nuxt.config.ts` :

```typescript
skimpleComponents: {
  bootstrapCss: false
}
```

Et voilà !

You can disable the automatic Bootstrap JS import as well as Bootstrap icons if you don't use them :

```typescript
skimpleComponents: {
  bootstrapCss: false,
  bootstrapJs: false,
  icons: false // `SkiIcon` component will stop working.
}
```
