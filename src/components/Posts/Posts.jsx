const PostsSection = () => {
  // Data variables
  const recentPosts = Array(5).fill({
    image: "/assets/images/recent-post-1.jpg",
    category: "Working Tips",
    title: "Helpful Tips for Working from Home as a Freelancer",
    excerpt:
      "Gosh jaguar ostrich quail one excited dear hello and bound and the and bland moral misheard roadrunner flapped lynx far that and jeepers giggled far and far",
    tags: ["Travel", "Lifestyle"],
    readTime: "3 mins read",
  });

  const popularPosts = Array(5).fill({
    image: "/assets/images/popular-post-1.jpg",
    title: "Creating is a privilege but it's also a gift",
    readTime: "15 mins read",
    date: "15 April 2022",
  });

  const comments = Array(3).fill({
    text: "“ Gosh jaguar ostrich quail one excited dear hello and bound and the and bland moral misheard roadrunner “",
    author: "Jane Cooper",
    authorImage: "/assets/images/author-6.png",
    date: "15 April 2022",
  });

  return (
    <section className="py-16" aria-labelledby="recent-label">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-12">
          {/* Main Posts */}
          <div>
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-2">
                <span className="text-carolina-blue">Нийтлэл</span>
              </h2>
              <p className="text-slate-600">
                Цөмийн салбарын мэдээлэл, нийтлэлүүд
              </p>
            </div>

            <div className="grid gap-8">
              {recentPosts.map((post, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-64 h-60 rounded-xl object-cover"
                        width={271}
                        height={258}
                        loading="lazy"
                      />
                    </div>

                    <div className="flex-1">
                      <span className="bg-prussian-blue text-white px-4 py-1 rounded-full text-sm font-bold hover:bg-carolina-blue transition-colors">
                        {post.category}
                      </span>
                      <h3 className="text-xl font-semibold mt-4 mb-3 hover:text-carolina-blue">
                        <a href="#">{post.title}</a>
                      </h3>
                      <p className="text-slate-500 text-sm mb-4">
                        {post.excerpt}
                      </p>

                      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                        <div className="flex gap-3">
                          {post.tags.map((tag, i) => (
                            <a
                              key={i}
                              href="#"
                              className="text-slate-500 hover:text-carolina-blue text-sm"
                            >
                              #{tag}
                            </a>
                          ))}
                        </div>
                        <div className="flex items-center gap-2 text-slate-500">
                          <ion-icon name="time-outline" className="text-lg" />
                          <span className="text-sm">{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <nav className="mt-16 flex gap-2">
              <button className="w-9 h-9 rounded-full bg-prussian-blue text-white flex items-center justify-center hover:bg-carolina-blue">
                <ion-icon name="arrow-back" />
              </button>
              {[1, 2, 3].map((num) => (
                <button
                  key={num}
                  className="w-9 h-9 rounded-full bg-prussian-blue text-white hover:bg-carolina-blue"
                >
                  {num}
                </button>
              ))}
              <button className="w-9 h-9 rounded-full bg-prussian-blue text-white hover:bg-carolina-blue">
                ...
              </button>
              <button className="w-9 h-9 rounded-full bg-prussian-blue text-white flex items-center justify-center hover:bg-carolina-blue">
                <ion-icon name="arrow-forward" />
              </button>
            </nav>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Popular Posts */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold mb-8 relative">
                <span className="text-carolina-blue after:block after:w-24 after:h-1 after:bg-carolina-blue after:mt-2">
                  Popular Posts
                </span>
              </h3>

              <ul className="space-y-6">
                {popularPosts.map((post, index) => (
                  <li key={index}>
                    <div className="flex gap-4">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                        width={64}
                        height={64}
                      />
                      <div className="border-b border-slate-200 pb-6 flex-1">
                        <h4 className="font-semibold hover:text-carolina-blue">
                          <a href="#">{post.title}</a>
                        </h4>
                        <div className="flex flex-wrap gap-2 text-sm text-slate-500 mt-2">
                          <span>{post.readTime}</span>
                          <time>{post.date}</time>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Last Comments */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold mb-8 relative">
                <span className="text-carolina-blue after:block after:w-24 after:h-1 after:bg-carolina-blue after:mt-2">
                  Last Comment
                </span>
              </h3>

              <ul className="space-y-8">
                {comments.map((comment, index) => (
                  <li key={index}>
                    <div className="pb-6 border-b border-slate-200">
                      <blockquote className="text-slate-500 text-sm italic mb-4">
                        {comment.text}
                      </blockquote>
                      <div className="flex items-center gap-3">
                        <img
                          src={comment.authorImage}
                          alt={comment.author}
                          className="w-8 h-8 rounded-full"
                          width={32}
                          height={32}
                        />
                        <div>
                          <p className="font-medium">{comment.author}</p>
                          <time className="text-slate-500 text-sm">
                            {comment.date}
                          </time>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostsSection;
