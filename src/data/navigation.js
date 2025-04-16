const navigations = [
  {
    key: "0",
    label: "Нүүр",
    href: "/",
  },
  {
    key: "1",
    label: "Бидний тухай",
    href: "/about",
    children: [
      { key: "11", label: "Зорилго", href: "/about#goal" },
      { key: "12", label: "Холбооны танилцуулга", href: "/about#intro" },
      { key: "13", label: "Салбар холбоод", href: "/about#association" },
      { key: "14", label: "Харилцагч байгууллага", href: "/about#partner" },
    ],
  },
  {
    key: "2",
    label: "Үйл ажиллагаа",
    href: "/business",
    children: [
      { key: "21", label: "Мэргэжлийн зөвлөгөө" },
      { key: "22", label: "Мэргэжлийн үйлчилгээ" },
    ],
  },
  {
    key: "3",
    label: "Гишүүний булан",
    href: "/member",
    children: [
      { key: "41", label: "Гишүүн болох" },
      { key: "42", label: "Гишүүн байхын давуу тал" },
      { key: "43", label: "Арга хэмжээнүүд" },
    ],
  },
  {
    key: "4",
    label: "Эрх зүйн орчин",
    href: "/moral",

    children: [
      { key: "61", label: "Олон улсын гэрээ конвенци" },
      { key: "62", label: "Монгол Улсын хууль," },
      { key: "62", label: "Монгол Улсын хууль" },
      { key: "62", label: "Үндэсний стандартууд" },
    ],
  },
  {
    key: "5",
    label: "Мэдээ мэдээлэл",
    href: "/news",
  },

  {
    key: "6",
    label: "Танин мэдэхүй",
    href: "/cognitian",
    children: [
      { key: "51", label: "Цацрагийн тухай ойлголт" },
      { key: "52", label: "Цацрагаас хэрхэн хамгаалах тухай" },
      { key: "53", label: "Цөмийн технологи бидний амьдралд" },
      { key: "54", label: "Атомын станц хэрхэн ажилладаг" },
      { key: "5:", label: "Ураны уурхайн тухай" },
    ],
  },

  {
    key: "7",
    label: "Медиа",
    href: "media",
  },
];
export default navigations;
