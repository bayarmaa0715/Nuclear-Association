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
      { key: "11", label: "ТББ-ын танилцуулга" },
      { key: "12", label: "Гишүүд" },
    ],
  },
  {
    key: "2",
    label: "Үйл ажиллагаа",
    href: "/business",
    children: [
      { key: "21", label: "Мэргэжлийн зөвлөгөө" },
      { key: "22", label: "Мэргэжлийн үйлчилгээ" },
      { key: "23", label: "Сургалтууд" },
    ],
  },
  {
    key: "3",
    label: "Гишүүний булан",
    href: "/member",
    children: [
      { key: "41", label: "Гишүүн болох" },
      { key: "42", label: "Гишүүн байхын давуу тал" },
      { key: "43", label: "Сургалтууд" },
    ],
  },
  {
    key: "4",
    label: "Эрх зүйн орчин",
    href: "/moral",

    children: [
      { key: "61", label: "Монгол Улсын цөмийн салбарын эрх зүйн тухай" },
      { key: "62", label: "Олон улсын гэрээ, конвенц" },
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
