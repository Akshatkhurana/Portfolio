export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#pro" },
  { name: "Contact", link: "#contact" },
];

export const projects = [
    {
      id: 1,
      title: "TOPSIS- Python package",
      des: "Published my own python package on PyPi.org . This Python project implements the TOPSIS algorithm. The algorithm ranks alternatives based on multiple criteria, considering their relative importance (weights) and impacts (benefit or cost).",
      img: "/p1.png",
      iconLists: ["/py.png"],
      link: "https://github.com/Akshatkhurana/TOPSIS-package?tab=readme-ov-file",
    },
    {
      id: 2,
      title: "Image-Mailer service",
      des: "Allows users to request a specific number of images based on a keyword and receive them in a ZIP file via email. The application uses Goggle API to fetches images, compresses them, and emails them to the user..",
      img: "/p2.png",
      iconLists: ["/py.png", "/re.svg", "/express.png", "/nodejs.png"],
      link: "https://github.com/Akshatkhurana/Image-Mailer",
    },
    {
      id: 3,
      title: "Mashup Generator",
      des: "Mashup Generator is a web application that allows users to create mashups of songs from a specific singer. Users can specify the singer's name, the number of songs, and the duration of the mashup.",
      img: "/p3.png",
      iconLists: ["/py.png", "/vite.png", "/nodejs.png", "/express.png"],
      link: "https://github.com/Akshatkhurana/Mashup",
    },
  ];