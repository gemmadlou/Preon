# Preon

<img src="./static/preon.jpg" width="100%" />

After stimbuling across functional css and the wonderful [Tachyons](https://tachyons.io/)
I immediately ran ahead to start using it. But, I wanted some extra styles and to change some things, so I created Preon for a little extra flexibility and customisation.

## Get started

```
<!DOCTYPE html>
<html lang="en">
  <title>Hello there!</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="./preons.scss">
  <body>

  </body>
</html>
```

## The ready made classes:

I'll be adding a link here hopefully soon with the default classes.

#### Height

| | |
|-|-|
| h | Height |
| w | Width |
| t | Top |
| l | Left |
| b | Bottom |
| r | Right |
| bg-`<color>` | Background |
| `<color>` | Color |
| pa | Padding all |
| pt | Padding top |
| pb | Padding bottom |
| pl | Padding left |
| pr | Padding right |
| ma | Margin all |
| mt | Margin top |
| mb | Margin bottom |
| ml | Margin left |
| mr | Margin right |
| d`<type>` | Display |
| <position> | Position |


> More to be added here soon

## The Preonize function

You can take this library or simply create your own functional css library using this Preon function. Dig into the code.

```scss
@include preonize("h", height, $scaled, $breakpoints);
```

#### How does it work?

So basically, you have a SASS map configured, and for each configuration, you apply that rules to a class. So the rule above says, I want a `.h` class defined by my the `$scaled` configuration at each defined `$breakpoints`.

So what does a configuration look like?

```scss
$scaled: (
    0:      0,
    1:      1.25rem,
    2:      2rem,
    3:      3rem,
    4:      4rem,
    5:      5rem,
    6:      6rem,
    7:      7rem,
    8:      8rem,
    9:      9rem,
   10:      10rem
);
```

And that's it. I can either have stock scales, or customised ones for my projects.

## What is Functional CSS

It's a very module approach to css. The main benefit for me, is that at some point, I don't have to write any more css. All the rules I need are completely defined. As more and more modules and styles are created by the designer, I simply need to code it in the HTML. That leads to the second benefit, it's easy to reuse styles and tweak them on a case-by-case basis, lending itself to more interesting looking sites that don't have to fit stock components out of fear of BEM-bloat.

Actually, that last point isn't trivial. Designers are fantastic. They know how to make things look good. However, things aren't always by the rules. Sometimes they have text in a 4/12 width block. A very similar looking module on the same page has 5/12 block. Writing reusable components with modifiers becomes painful. So functional css helps to alleviate this issue so we can be more flexible.

## Clap backs

Okay, these are not real clap backs but here are some objections to functional css and my responses:

### Is this production ready?

Ish...

There are a few things that would make this library better. Docs are one. Standardising the naming conventions is another. So it's not 100% there yet, but I'm currently, working on two sites and I'm happy with it. Once they're live, they'll go here somewhere.

### Isn't it Bootstrap?

No.

As in; no. Functional css isn't a set of defined modules. Functional css is like
a subatomic part rather than the atom. So you should be able to say, this component, at this break point, has 'abc' font, but at the next break point, has another font? 

```html
<button class="br-50 pa1 pa2-m fs1 fs3-l bg-green">
    Click me
</button>
```

Bootstrap, as fantastic as it is, encompasses all the rules for a particular module so you cannot piecemeal custom styles together.

```html
<button class="btn btn--primary">
    Click me
</button>
```

So technically, if I needed to tweak the button, in, the first case, I don't have to write custom css if the functional css class exists. In Bootstrap's case, I would have to do so.

### Do I hate Bootstrap?

No. Hate is a strong word. Use it for things like marmite or something.

### Isn't it difficult to read

I think it is, until you learn it. Tachyon's has a great [cheat sheet](https://roperzh.github.io/tachyons-cheatsheet/). I highly recommend having a cheatsheet to assist with functional libraries.

### So functional css is trying to make BEM irrelevant?

IMHO, functional css isn't diametrically opposed to BEM. In fact, there's nothing wrong with defining the rules of a styleguide with functional css, but for a cleaner HTML syntax (if it makes one feel better and less hacky), you can combine functional styles into defined components.

> Here's a SCSS example

```scss
.button {
    @extend .fs1;
    @extend .fs2-m;
    @extend .bg-grey;
    @extend .white;
    @extend .pa1;
    @extend .pa2-m;

    &--primary {
        @extend .bg-blue;
    }
}
```

```html
<button class="button button--primary">
    Click me
</button>
```

## Contributing

This was created with Nuxt. I'm a Gatsby girl but Nuxt and Vue are wonderful too. Submit a PR.

### Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn run dev

# build for production and launch server
$ yarn run build
$ yarn start

# generate static project
$ yarn run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).
