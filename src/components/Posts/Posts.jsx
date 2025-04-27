export const posts = [
  {
    image: "/images/img1.jpg",
    title: "Цацрагийн тухай ойлголт",
    description:
      "Цацраг бол нэг газраас нөгөө газар руу долгион эсвэл бөөм хэлбэрээр дамждаг энерги юм. Бид өдөр тутмын амьдралдаа цацрагийн нөлөөнд автдаг. Цацрагийн хамгийн түгээмэл эх үүсвэрт нар, гал тогооны өрөөн дэх богино долгионы зуух, радио гэх мэт багтана. Ихэнх цацраг нь бидний эрүүл мэндэд ямар нэгэн эрсдэл учруулдаггүй. Гэхдээ зарим нь эрсдэлтэй байж болно. Ерөнхийдөө бага тунтай цацраг бага эрсдэлтэй байдаг бол өндөр тунтай цацраг нь эрүүл мэндэд илүү их эрсдэл учруулж болзошгүй юм. Цацрагийн энэ эрсдэлээс хүний бие махбод, хүрээлэн буй орчныг хамгаалж чадсанаар бид цацрагийг өдөр тутмын амьдралтай өргөн ашиглаж, давуу талыг нь хүртэх боломжтой болдог.",
    tags: ["уран", "цөм", "уран олборлолт"],
    date: "2025-05-02",
    paragraph: [
      {
        image: "",
        description: "",
      },
    ],
  },
  {
    image: "/images/img2.webp",
    title: "Цацрагаас хэрхэн хамгаалах тухай",
    description:
      "Gosh jaguar ostrich quail one excited dear hello and bound and the and bland moral misheard roadrunner flapped lynx far that and jeepers giggled far and far",
    tags: ["уран", "цөм", "уран олборлолт"],
    date: "2025-05-02",
    paragraph: [
      {
        image: "",
        description: "",
      },
    ],
  },
  {
    image: "/images/img3.jpg",
    title: "Цөмийн технологи бидний амьдралд",
    description:
      "Gosh jaguar ostrich quail one excited dear hello and bound and the and bland moral misheard roadrunner flapped lynx far that and jeepers giggled far and far",
    tags: ["уран", "цөм", "уран олборлолт"],
    date: "2025-05-02",
    paragraph: [
      {
        image: "",
        description: "",
      },
    ],
  },
  {
    image: "/images/img4.jpg",
    title: "Атомын станц хэрхэн ажилладаг",
    description:
      "Gosh jaguar ostrich quail one excited dear hello and bound and the and bland moral misheard roadrunner flapped lynx far that and jeepers giggled far and far",
    tags: ["уран", "цөм", "уран олборлолт"],
    date: "2025-05-02",
    paragraph: [
      {
        image: "",
        description: "",
      },
    ],
  },
  {
    image: "/images/img5.jpg",
    title: "Ураны уурхайн тухай",
    description:
      "Gosh jaguar ostrich quail one excited dear hello and bound and the and bland moral misheard roadrunner flapped lynx far that and jeepers giggled far and far",
    tags: ["уран", "цөм", "уран олборлолт"],
    date: "2025-05-02",
    paragraph: [
      {
        image: "",
        description: "",
      },
    ],
  },
];

const PostsSection = () => {
  return (
    <div className="flex justify-center">
      <div className="container flex flex-col items-center justify-center min-h-screen gap-5 p-4 text-center md:gap-10">
        <h1 className="text-2xl font-bold md:text-4xl text-prussian-blue">
          Нийтлэл{" "}
        </h1>
        <p className="text-base text-center md:text-lg text-slate-700">
          Цөмийн салбарын мэдээ мэдээлэл, нийтлэлүүд
        </p>

        <div className="flex flex-col gap-5 md:gap-10">
          {posts.map((post, index) => (
            <div
              key={index}
              className="p-6 transition-transform duration-300 bg-white shadow-sm rounded-xl hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex flex-col gap-6 md:flex-row">
                <div className="flex-shrink-0">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="object-cover w-64 h-60 rounded-xl"
                    width={271}
                    height={258}
                    loading="lazy"
                  />
                </div>

                <div className="flex-1">
                  <h3 className="mt-4 mb-3 text-xl font-semibold hover:text-carolina-blue">
                    <a href="#">{post.title}</a>
                  </h3>
                  <p className="mb-4 text-justify text-slate-500">
                    {post.description}
                  </p>

                  <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
                    <div className="flex gap-3">
                      {post.tags.map((tag, i) => (
                        <a
                          key={i}
                          href="#"
                          className="text-sm text-slate-500 hover:text-carolina-blue"
                        >
                          #{tag}
                        </a>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 text-slate-500">
                      <ion-icon name="time-outline" className="text-lg" />
                      <span className="text-sm">{post.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <nav className="flex gap-2 mt-16">
          <button className="flex items-center justify-center text-white rounded-full w-9 h-9 bg-prussian-blue hover:bg-carolina-blue">
            <ion-icon name="arrow-back" />
          </button>
          {[1, 2, 3].map((num) => (
            <button
              key={num}
              className="text-white rounded-full w-9 h-9 bg-prussian-blue hover:bg-carolina-blue"
            >
              {num}
            </button>
          ))}
          <button className="text-white rounded-full w-9 h-9 bg-prussian-blue hover:bg-carolina-blue">
            ...
          </button>
          <button className="flex items-center justify-center text-white rounded-full w-9 h-9 bg-prussian-blue hover:bg-carolina-blue">
            <ion-icon name="arrow-forward" />
          </button>
        </nav>
      </div>
    </div>
  );
};

export default PostsSection;
