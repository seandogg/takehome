# Notes / Process

## Scoping
During the scoping/estimation phase, I eye the design from top to bottom, creating a "class tree" for the page. Here I'm also noting any tools or approaches that come to mind. This also helps me name classes consistenly down the line.

For this design my class tree looks like this:

.announcement-bar

.main-nav
  .main-nav__burger
  .main-nav__logo
  .main-nav__menu
  .main-nav__search
  .main-nav__account
  .main-nav__cart

.hero
  .hero__slide
  .hero__slide-content
  
.image-with-text
  .image-with-text__content


.collection-list
  .collection-list__content

.icon-section
  .icon-section__icon 

## Building out the data
Next, I like to generate some data. For now, I'll use [Shopify's Developer Tools](https://help.shopify.com/en/api/tools/developer-tools) to quickly generate some placeholder products. 

After that, I'll build out the {% schema %} for the merchant view and begin scaffolding the HTML/Liquid for my sections. The goal here is to simply get all of our content on the page, unstyled, from the theme customizer. 

## Scaffolding the DOM, styling the data
Now that I've got some HTML/liquid on the frontend, I'll start writing styles. Personally I like to create stylesheets for each section, but only when using Slate. Otherwise I just use whatever is available with Themekit (style.scss.liquid). I primarily work with Flexbox, and sometimes I'll write some utility classes, but for this short assignment, I'll just write them out and clean them up later if there's time. 



---

# Slate repo info:

[![Build Status](https://travis-ci.org/Shopify/starter-theme.svg?branch=master)](https://travis-ci.org/Shopify/starter-theme)

# Starter Theme

> **Starter Theme and [Slate v1](https://github.com/Shopify/slate) are currently in beta!** You should expect potentially breaking changes between updates and more bugs than a finalized release. Slate v1.0 has not yet been tested on Windows.

Starter Theme represents the Shopify Themes Team's opinionated starting point for new Slate theme projects. It strives to include up-to-date best practices and solutions that we have deemed needed for the majority of themes we build. It is a reflection of what’s possible when building a theme!

## Intentional lack of styles

When launching Starter Theme for the first time, you may notice a lack of CSS styles. Is Starter Theme broken? Definitely not! Keep in mind this was done intentionally. Starter Theme is not a framework but rather a starting point for your project. It contains all the files the Shopify Themes team considers to be the bare essentials to building a Shopify theme.

For templates and snippets, standard Liquid tags and logic have been included with little to no markup, classes, or other code that you will need to remove. The [`src/styles/theme.scss`](https://github.com/Shopify/starter-theme/blob/master/src/assets/styles/theme.scss) file contains extremely limited styling to not get in the way of developers' CSS preferences. The JavaScript files contain most of our [helper scripts](https://github.com/Shopify/theme-scripts/tree/master/packages) and [lazysizes](https://github.com/aFarkas/lazysizes) for responsive image lazy loading.

## System requirements

You'll want to ensure you have the following already installed on your local machine before getting started with Starter theme:

- **Node:** The current LTS (long-term support) release. We like to use a Node Version Manager like [NVM](https://github.com/creationix/nvm).

- **NPM 5+ or Yarn:** Both of these package managers have [ups and downs](https://blog.risingstack.com/yarn-vs-npm-node-js-package-managers/), choose whichever you prefer. Follow the installation instructions [for Yarn](https://yarnpkg.com/en/docs/install) or [NPM](https://www.npmjs.com/get-npm) to make sure you're using the latest version.

## Getting started

To get started with Starter Theme, run the following command in your terminal:

```
$ yarn create slate-theme my-new-theme
```

For more information on connecting your new project with a Shopify store, see the [Slate docs](https://github.com/Shopify/slate/wiki/3.-Connect-to-your-store).

## Contributing

For help on setting up the repository locally, building, testing, and contributing
please see [CONTRIBUTING.md](https://github.com/Shopify/starter-theme/blob/master/CONTRIBUTING.md).

## Code of Conduct

All developers who wish to contribute through code or issues, take a look at the
[Code of Conduct](https://github.com/Shopify/starter-theme/blob/master/CODE_OF_CONDUCT.md).

## License

Copyright © 2018 Shopify. See [LICENSE](https://github.com/Shopify/starter-theme/blob/master/LICENSE) for further details.
