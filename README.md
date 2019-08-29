# Notes / Process

## Scoping
During the scoping/estimation phase, I eye the design from top to bottom, creating a "class tree" for the page. Here I'm also noting any tools or approaches that come to mind. This also helps me name classes consistenly down the line.

For this design my class tree looks like this:

```
page
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
```

## Building out the data
Next, I like to generate some data. For now, I'll use [Shopify's Developer Tools](https://help.shopify.com/en/api/tools/developer-tools) to quickly generate some placeholder products. 

After that, I'll build out the `{% schema %}` for the merchant's view and begin scaffolding the HTML/Liquid for my sections. The goal here is to simply get all of our content on the page, un-styled, using merchant input from the theme customizer. 

## Scaffolding the DOM, styling the data
When I've got the basic HTML/liquid displaying on the frontend, I'll start writing `scss` and styling things. Personally I like to create stylesheets for each section (when using Slate or Slater). 
 
I primarily work with `Flexbox`, and sometimes I'll write some utility classes for that, but for this short assignment, I'll just write them out and clean them up later if there's time. 

## Mobile or Desktop First?

In this case I opted for Desktop/Widescreen first. I go back and forth, depending on the project scope. 

---

# This project was scaffolded with [Slate](https://shopify.github.io/slate/docs/about)
