# lumin-story

* An account of DeltaLumin year 1
* The Lumin Story site is designed to be a single-page story illustrating the DeltaLumin process and findings. Where possible, it is preferable to utilize imagery and interactive examples to show how we built out the project. 
* Running on Jekyll. Instructions for running locally on Windows [here](http://jekyll-windows.juthilo.com/). 
* Concept derived from [this issue](https://github.com/DeltaInstitute/LuminDashboard/issues/84) on the LuminDashboard repo. 
* The working project is live [here](http://deltainstitute.github.io/lumin-story/).

## Structure

Each section is its own page in the [sections](https://github.com/DeltaInstitute/lumin-story/tree/gh-pages/sections) directory. The frontmatter for each section provides variables that will later be used to build the collection of sections into a single page programmatically: 

```
---
layout: section
title: Introduction
bannerpath: img/intro-banner.jpg
---
```

The `all-sections` include ([here](https://github.com/DeltaInstitute/lumin-story/blob/gh-pages/_includes/all-sections.html)) is where this logic is located. 
