# Omnifood

## 🌐 Live Demo

- **Live Demo**: [Omnifood](https://val-priad.github.io/Omnifood/)

## ⚙️ Technologies

[![Technologies](https://skillicons.dev/icons?i=html,css,sass,js&perline=4)](https://skillicons.dev)

- HTML
- CSS
- Sass
- JS

## 🧠 What I Learned

### 🎯 Core CSS Concepts

- Strengthened skills in **Flexbox** and **CSS Grid** for layout design.
- Gained practical experience with **pseudo-classes** (`:hover`, `:focus`) and **pseudo-elements** (`::before`, `::after`).
- Improved understanding of **visual hierarchy** using:

  - _Typography_
  - _Colors_
  - _Shadows_
  - _Spacing_

### 🎨 Website Aesthetics & Personality

- Learned how to define and apply a website’s **personality**, making layouts more intuitive and engaging.
- Developed an eye for _design consistency_ across pages.

### 🧩 Advanced CSS Techniques

- Applied advanced properties like:

  - `transition`
  - `transform`

- Used these for creating **simple animations** and **precise alignment** where traditional methods failed.

### 📱 Responsive Design

- Practiced **desktop-first** approach.
- Mastered using **media queries** to adapt layouts for various screen sizes.

### 🛠 Sass & Custom Utilities

- Worked with Sass for writing scalable, maintainable styles.
- Built a custom `rem()` function to align with the teacher’s `62.5%` font-size method, while keeping code modern and readable:

```scss
@function rem($old_rem) {
  @if math.is-unitless($old_rem) {
    @return ($old_rem * 0.625) + rem;
  } @else {
    @error 'Don\'t use units when using the rem() function; only numbers.';
  }
}
```

### 🚀 Performance & Optimization

- Learned how to use **Google Lighthouse** for performance auditing.
- Optimized images and other assets for faster load times.
- Changed my perspective on the **WebP format** — now I appreciate its advantages for web performance.

## ✅ Features

- Fully responsive layout
- Mobile navigation menu
- Sticky navigation on scroll
- Reusable Sass utilities
- Image optimization using WebP (where it was needed)
- Animated scroll and button effects

## Project structure

```zsh
.
├── README.md
├── content.md
├── img
├── index.html
├── js
├── manifest.webmanifest
└── styles
```

## 🙋‍♂️ Acknowledgments

Thanks to [Jonas Schmedtmann](https://github.com/jonasschmedtmann)
for the course.

Link to course: [Learn modern HTML5, CSS3 and web design...](https://www.udemy.com/course/design-and-develop-a-killer-website-with-html5-and-css3/?utm_source=adwords&utm_medium=udemyads&utm_campaign=Search_DSA_Beta_Prof_la.EN_cc.ROW-English&campaigntype=Search&portfolio=ROW-English&language=EN&product=Course&test=&audience=DSA&topic=&priority=Beta&utm_content=deal4584&utm_term=_._ag_162511579404_._ad_696197165421_._kw__._de_c_._dm__._pl__._ti_dsa-1677053911088_._li_9193772_._pd__._&matchtype=&gad_source=1&gad_campaignid=21168154305&gbraid=0AAAAADROdO2Zj_llVDcud0cTBtRTLNG0h&gclid=Cj0KCQjwgvnCBhCqARIsADBLZoJqCZumJUa4-dCcJQYKcdCFJ0UOz00o8_qYISnzreZp7Ve_QQ0iACsaAn2sEALw_wcB&couponCode=PMNVD3025)
