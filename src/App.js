import NavList from "./components/NavList";
import Blog from "./components/Blog";
import BlogData from "./components/BlogData";

function App() {
  return (
    <div className="App">
      <main className="w-full min-h-screen flex justify-center items-center text-left font-semibold font-nunito">
        {/* Main Block */}
        <section className="max-w-6xl w-full flex-shrink-0 px-4 sm:px-8 py-12 grid sm:grid-cols-2 lg:grid-cols-7 gap-6">
          {/* Nav Lists */}
          <NavList />

          {/* Blogs Section */}
          <article className="w-full sm:col-span-2 lg:col-span-3">
            <h6 className="label">From the Blog</h6>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 md:pl-4">
              {/* Blog */}
              {BlogData.map((data) => (
                <Blog
                  title={data.title}
                  author={data.author}
                  imageSrc={data.imageSrc}
                  alt={data.alt}
                />
              ))}
            </div>
          </article>
        </section>
      </main>
    </div>
  );
}

export default App;
