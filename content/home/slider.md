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
  - overlay_img: BangladeshMonsoon.jpg  # Image path relative to your `assets/media/` folder
    # title: Hello
    content: 'Precipitating convection over Bangladesh during the summer monsoon. <br> image: International Space Station Expedition 4, NASA, 2002-06-03'
    # Choose `center`, `left`, or `right` alignment.
    align: right
    overlay_color: 'white'
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
  - overlay_img: 'NorthAmericanMonsoon20210702.jpg'
    # title: Left
    content: 'Low stratocumulus deck in a region of subsidence west of Mexico, and deep convective clouds over the Sierra Madre range, where the jet stream is deflected into the North American monsoon region.  image: VIIRS NASA Worldview, 2021-07-02'
    align: right
    # overlay_color: '#555'
    overlay_color: 'gray'
    # overlay_filter: 1
  - overlay_img: 'Sahara.A2003032.1215.1km.jpg'
    # title: Right
    # content: 'I am right aligned 😄'
    # align: right
    # overlay_color: '#333'
    # overlay_filter: 1
  - overlay_img: 'IndianOceanEddies2.jpg'
    # overlay_filter: 1
---

