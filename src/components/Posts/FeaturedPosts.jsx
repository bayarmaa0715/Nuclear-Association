import Image from "next/image";
import Link from "next/link";
const FeaturedPosts = () => {
  const posts = [
    {
      id: 1,
      category: ["Travel", "Lifestyle"],
      readTime: "3 mins",
      author: "Joseph",
      date: "25 Nov 2022",
    },
    {
      id: 2,
      category: ["Design", "Movie"],
      readTime: "6 mins",
      author: "Michael",
      date: "28 Nov 2022",
    },
    {
      id: 3,
      category: ["Technology", "Business"],
      readTime: "5 mins",
      author: "Sarah",
      date: "30 Nov 2022",
    },
  ];

  return (
    <section className="relative py-20 bg-oxford-blue">
      <div className="container px-4 mx-auto">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-columbia-blue">
            <span className="  bg-clip-text">Мэдээ мэдээлэл</span>
          </h2>
          <p className="text-lg text-wild-blue-yonder">
            Цөмийн салбарын мэдээлэл, нийтлэлүүд
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="overflow-hidden transition-all  border-2  border-[#dae3ff]  p-5 duration-300 bg-prussian-blue rounded-2xl hover:transform hover:-translate-y-2"
            >
              <div className="relative h-80">
                <Image
                  src={`/assets/images/featured-${post.id}.png`}
                  fill
                  alt="Featured post"
                  className="object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-oxford-blue/90 via-transparent to-transparent" />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-2">
                    {post.category.map((cat) => (
                      <span
                        key={cat}
                        className="px-3 py-1 text-sm rounded-full bg-oxford-blue-2 text-carolina-blue"
                      >
                        #{cat}
                      </span>
                    ))}
                  </div>
                  <span className="flex items-center gap-1 text-slate-gray">
                    ⏳ {post.readTime}
                  </span>
                </div>

                <h3 className="mb-4 text-xl font-bold text-alice-blue">
                  Self-observation is the first step of inner unfolding
                </h3>

                <div className="flex items-center gap-4">
                  <Image
                    src="/assets/images/author-1.png"
                    width={40}
                    height={40}
                    alt="Author"
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-medium text-alice-blue">{post.author}</p>
                    <p className="text-sm text-slate-gray">{post.date}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <Link href="/news" className="pt-12 text-center cursor-pointer">
          <div className="pt-12 ">
            <button className="flex items-center gap-2 px-8 py-3 mx-auto cursor-pointer  transition-all duration-300 rounded-full bg-[#dae3ff] hover:to-cyan-400">
              Нийтлэлүүдийг харах
              <span className="text-xl">→</span>
            </button>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default FeaturedPosts;
