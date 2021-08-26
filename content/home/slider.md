---
widget: slider
headless: true  # This file represents a page section.
weight: 1

# ... Put Your Section Options Here (section position etc.) ...

# Slide interval.
# Use `false` to disable animation or enter a time in ms, e.g. `5000` (5s).
interval: 12000

# Minimum slide height.
# Specify a height to ensure a consistent height for each slide.
height: 400px


item:
  - overlay_img: BangladeshMonsoon3.jpg  # Image path relative to your `assets/media/` folder
    # title: Hello
    content: 'Bangladesh in the summer monsoon.  International Space Station Expedition 4, NASA, 2002-06-03'
    # Choose `center`, `left`, or `right` alignment.
    align: right
    overlay_color: white
    # Overlay a color or image (optional).
    #   Deactivate an option by commenting out the line, prefixing it with `#`.
    # overlay_color: '#666'  # An HTML color value.
    # overlay_filter: 1  # Darken the image. Value in range 0-1.
    # Call to action button (optional).
    #   Activate the button by specifying a URL and button label below.
    #   Deactivate by commenting out parameters, prefixing lines with `#`.
    # cta_label: Download my app
    # cta_url: 'https://example.org'
    # cta_icon_pack: fas
    # cta_icon: graduation-cap
  - overlay_img: 'NorthAmericanMonsoon3.jpg'
    # title: Left
    content: 'Shallow stratocumulus and deep convective clouds in the North American monsoon. VIIRS NASA Worldview, 2021-07-02'
    align: right
    overlay_color: white
    #overlay_color: 'gray'
    # overlay_filter: 1
  - overlay_img: 'Sahara3.jpg'
    # title: Right
    content: 'Dust moving out of the North African heat low in winter. Image: NASA MODIS 2003-02-01'
    align: right
    overlay_color: white
    # overlay_color: '#333'
    # overlay_filter: 1
  - overlay_img: 'SomaliJet3.jpg'
    content: 'Arabian Sea, where the Somali jet drives ocean upwelling. NASA MODIS 2018-11-23, color enhancements by Norman Kuring, NASA Ocean Biology'
    align: right
    # overlay_filter: 1
---

