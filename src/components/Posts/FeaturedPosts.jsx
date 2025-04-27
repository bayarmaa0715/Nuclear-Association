import Image from "next/image";
import Link from "next/link";
import { posts } from "./Posts";

const FeaturedPosts = () => {
  return (
    <section className="relative">
      <div className="container px-4 mx-auto">
        <div className="mb-10 text-center sm:mb-14 md:mb-16">
          <h2 className="mb-3 text-2xl font-bold sm:text-3xl md:text-4xl">
            <span className="bg-clip-text">Мэдээ мэдээлэл</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-wild-blue-yonder">
            Цөмийн салбарын мэдээлэл, нийтлэлүүд
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 md:gap-8 lg:grid-cols-3">
          {posts.slice(0, 3).map((post, i) => (
            <article
              key={`post ${i}`}
              className="overflow-hidden transition-all border-2 border-[#dae3ff] p-4 sm:p-5 duration-300 bg-prussian-blue rounded-2xl hover:transform hover:-translate-y-2"
            >
              <div className="relative h-60 sm:h-72 md:h-80">
                <Image
                  src={post.image}
                  fill
                  alt="Featured post"
                  className="object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-oxford-blue/90 via-transparent to-transparent" />
              </div>

              <div className="p-4 sm:p-6">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((cat) => (
                      <span
                        key={cat}
                        className="px-2 py-1 text-xs rounded-full sm:text-sm bg-oxford-blue-2 text-carolina-blue"
                      >
                        #{cat}
                      </span>
                    ))}
                  </div>
                  <span className="flex items-center gap-1 text-xs sm:text-sm text-slate-gray">
                    ⏳ {post.date}
                  </span>
                </div>

                <h3 className="mb-3 text-base font-bold sm:text-lg md:text-xl text-alice-blue">
                  {post.title}{" "}
                </h3>

                {/* <div className="flex items-center gap-4">
                  <Image
                    src="/assets/images/author-1.png"
                    width={36}
                    height={36}
                    alt="Author"
                    className="rounded-full"
                  />
                  <div>
                    <p className="text-sm font-medium sm:text-base text-alice-blue">
                      {post.author}
                    </p>
                    <p className="text-xs text-slate-gray">{post.date}</p>
                  </div>
                </div> */}
              </div>
            </article>
          ))}
        </div>

        <Link href="/news" className="block pt-10 text-center sm:pt-12">
          <button className="flex items-center gap-2 px-6 py-2 sm:px-8 sm:py-3 mx-auto text-sm sm:text-base transition-all duration-300 rounded-full bg-[#dae3ff] hover:to-cyan-400">
            Нийтлэлүүдийг харах
            <span className="text-base sm:text-xl">→</span>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default FeaturedPosts;
