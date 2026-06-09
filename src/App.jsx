import { useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  EnvelopeSimple,
  InstagramLogo,
  List,
  X,
} from "@phosphor-icons/react";
import studioHero from "./assets/studio-hero.webp";
import hongKongNotes from "./assets/hong-kong-notes.webp";
import botanicalStudy from "./assets/botanical-study.webp";
import littleLibrary from "./assets/little-library.webp";
import herbalDays from "./assets/herbal-days.webp";
import paperShapes from "./assets/paper-shapes.webp";
import morningTable from "./assets/morning-table.webp";

const works = [
  {
    id: "hong-kong-notes",
    title: "Hong Kong Notes",
    zh: "香港速写",
    category: "Editorial",
    year: "2024",
    medium: "Watercolor, ink",
    size: "32 x 42 cm",
    image: hongKongNotes,
    ratio: "tall",
    tone: "city",
    summary:
      "Rain-softened streets, overhead cables, and a tram moving through a city remembered in layered washes.",
  },
  {
    id: "botanical-study",
    title: "Botanical Study",
    zh: "山茶标本",
    category: "Personal",
    year: "2024",
    medium: "Watercolor, graphite",
    size: "24 x 36 cm",
    image: botanicalStudy,
    ratio: "tall",
    tone: "botanical",
    summary:
      "A quiet field-note study where petals, stems, and margins are treated with the same patience.",
  },
  {
    id: "little-library",
    title: "The Little Library",
    zh: "小小图书馆",
    category: "Book",
    year: "2023",
    medium: "Gouache, pencil",
    size: "Picture book spread",
    image: littleLibrary,
    ratio: "wide",
    tone: "book",
    summary:
      "A tender picture-book scene about reading corners, lamplight, and the secret scale of childhood.",
  },
  {
    id: "herbal-days",
    title: "Herbal Days",
    zh: "草本日子",
    category: "Packaging",
    year: "2024",
    medium: "Packaging illustration",
    size: "Client concept",
    image: herbalDays,
    ratio: "square",
    tone: "packaging",
    summary:
      "Botanical packaging studies for a calm daily ritual brand, built around small leaves and paper tactility.",
  },
  {
    id: "paper-shapes",
    title: "Paper Shapes",
    zh: "纸片肖像",
    category: "Poster",
    year: "2024",
    medium: "Gouache, colored pencil",
    size: "40 x 50 cm",
    image: paperShapes,
    ratio: "tall",
    tone: "poster",
    summary:
      "A restrained editorial portrait that lets flat paper geometry carry the emotional contrast.",
  },
  {
    id: "morning-table",
    title: "Morning Table",
    zh: "早晨桌面",
    category: "Personal",
    year: "2023",
    medium: "Watercolor, pencil",
    size: "30 x 38 cm",
    image: morningTable,
    ratio: "wide",
    tone: "still",
    summary:
      "A slow tabletop composition of sketchbooks, tea, ceramics, and the first green shadows of the day.",
  },
];

const filters = ["All", "Editorial", "Book", "Poster", "Packaging", "Personal"];

const detailNotes = {
  city: ["雨天街道", "城市节奏", "水彩叠色"],
  botanical: ["植物观察", "纸面留白", "铅笔标注"],
  book: ["绘本叙事", "灯光氛围", "柔和角色"],
  packaging: ["品牌包装", "草本纹样", "触感纸材"],
  poster: ["人物海报", "图形切片", "克制色块"],
  still: ["私人习作", "桌面静物", "晨光影子"],
};

export function App() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const [selectedWork, setSelectedWork] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const featuredWork = works[featuredIndex];

  const visibleWorks = useMemo(() => {
    if (activeFilter === "All") {
      return works;
    }

    return works.filter((work) => work.category === activeFilter);
  }, [activeFilter]);

  useEffect(() => {
    document.body.classList.toggle("modal-open", Boolean(selectedWork));
    return () => document.body.classList.remove("modal-open");
  }, [selectedWork]);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedWork(null);
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const showPrevious = () => {
    setFeaturedIndex((index) => (index === 0 ? works.length - 1 : index - 1));
  };

  const showNext = () => {
    setFeaturedIndex((index) => (index + 1) % works.length);
  };

  return (
    <main className="site-shell">
      <header className="topbar" aria-label="Site header">
        <a className="brand" href="#top" aria-label="Lin Youhe home">
          <span>LIN YOUHE</span>
          <span>林有禾</span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <a className="is-active" href="#work">
            Work
          </a>
          <a href="#about">About</a>
          <a href="#commission">Commission</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="utility">
          <button className="language" type="button" aria-label="Toggle language">
            中 / EN
          </button>
          <button
            className="icon-button mobile-menu-button"
            type="button"
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
          >
            <List size={20} weight="light" />
          </button>
        </div>
      </header>

      <section className="mobile-menu" data-open={menuOpen} aria-hidden={!menuOpen}>
        <button
          className="icon-button mobile-close"
          type="button"
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
        >
          <X size={19} weight="light" />
        </button>
        {["Work", "About", "Commission", "Contact"].map((item) => (
          <a
            href={`#${item.toLowerCase()}`}
            key={item}
            onClick={() => setMenuOpen(false)}
          >
            {item}
          </a>
        ))}
      </section>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Illustrator based in Hangzhou</p>
          <h1>Lin Youhe</h1>
          <p className="intro">
            用细腻的观察与想象，把日常中的微光，画成被记得的故事。
          </p>
          <a className="line-link" href="#work">
            <span>View selected work</span>
            <ArrowRight size={22} weight="light" />
          </a>
        </div>
        <div className="hero-image-frame">
          <img src={studioHero} alt="Lin Youhe drawing in a sunlit studio" />
        </div>
      </section>

      <section className="featured" aria-labelledby="featured-heading">
        <div className="section-heading">
          <p id="featured-heading">Featured work</p>
          <span />
          <div className="featured-controls" aria-label="Featured work controls">
            <span>
              {String(featuredIndex + 1).padStart(2, "0")} /{" "}
              {String(works.length).padStart(2, "0")}
            </span>
            <button
              className="icon-button"
              type="button"
              aria-label="Previous featured work"
              onClick={showPrevious}
            >
              <ArrowLeft size={17} weight="light" />
            </button>
            <button
              className="icon-button"
              type="button"
              aria-label="Next featured work"
              onClick={showNext}
            >
              <ArrowRight size={17} weight="light" />
            </button>
          </div>
        </div>

        <div className="featured-strip">
          <article className="featured-card">
            <p>{featuredWork.category}</p>
            <h2>{featuredWork.title}</h2>
            <dl>
              <div>
                <dt>Medium</dt>
                <dd>{featuredWork.medium}</dd>
              </div>
              <div>
                <dt>Year</dt>
                <dd>{featuredWork.year}</dd>
              </div>
              <div>
                <dt>Scale</dt>
                <dd>{featuredWork.size}</dd>
              </div>
            </dl>
            <button className="line-link as-button" type="button" onClick={() => setSelectedWork(featuredWork)}>
              <span>View project</span>
              <ArrowRight size={22} weight="light" />
            </button>
          </article>

          {works.slice(0, 4).map((work) => (
            <button
              className={`featured-thumb ${work.id === featuredWork.id ? "is-selected" : ""}`}
              key={work.id}
              type="button"
              aria-label={`Feature ${work.title}`}
              onClick={() => setFeaturedIndex(works.findIndex((item) => item.id === work.id))}
            >
              <img src={work.image} alt={`${work.title} illustration`} />
            </button>
          ))}
        </div>
      </section>

      <section className="works-section" id="work" aria-labelledby="works-heading">
        <div className="works-header">
          <div className="section-heading compact">
            <p id="works-heading">Works</p>
            <span />
          </div>
          <div className="filters" aria-label="Work filters">
            {filters.map((filter) => (
              <button
                className={filter === activeFilter ? "is-active" : ""}
                type="button"
                key={filter}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="masonry" aria-live="polite">
          {visibleWorks.map((work) => (
            <article className={`work-card ${work.ratio}`} key={work.id}>
              <button type="button" onClick={() => setSelectedWork(work)}>
                <img src={work.image} alt={`${work.title} illustration`} />
              </button>
              <div className="work-meta">
                <h3>{work.title}</h3>
                <p>
                  {work.category}
                  <span>{work.year}</span>
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about" id="about">
        <div>
          <p className="eyebrow">About</p>
          <h2>Stories gathered from quiet places.</h2>
        </div>
        <div className="about-copy">
          <p>
            林有禾是一位居住在杭州的自由插画师，作品横跨出版、编辑、品牌包装与私人创作。她偏爱纸张的呼吸感、生活物件的细节，以及城市中容易被忽略的光线。
          </p>
          <p>
            主页保持像白墙一样安静，让不同风格作品可以被统一地浏览；每个项目页再根据内容展开更鲜明的情绪、配色与叙事。
          </p>
        </div>
      </section>

      <section className="commission" id="commission">
        <div className="commission-list">
          <p>Available for illustration projects, collaborations, and commissions.</p>
          <a className="line-link" href="mailto:hello@linyouhe.com">
            <span>Let’s work together</span>
            <ArrowRight size={22} weight="light" />
          </a>
        </div>
        <div className="commission-items">
          <span>Editorial illustration</span>
          <span>Picture books</span>
          <span>Brand packaging</span>
          <span>Exhibition prints</span>
        </div>
      </section>

      <footer className="footer" id="contact">
        <div className="vase-mark" aria-hidden="true">
          <img src={botanicalStudy} alt="" />
        </div>
        <div>
          <p>hello@linyouhe.com</p>
          <div className="footer-links">
            <a href="mailto:hello@linyouhe.com">
              <EnvelopeSimple size={17} weight="light" />
              Email
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
              <InstagramLogo size={17} weight="light" />
              Instagram
            </a>
            <a href="#top">Back to top</a>
          </div>
        </div>
        <p className="copyright">© 2026 Lin Youhe. All rights reserved.</p>
      </footer>

      {selectedWork ? (
        <section
          className={`project-modal ${selectedWork.tone}`}
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-title"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedWork(null);
            }
          }}
        >
          <div className="project-panel">
            <button
              className="icon-button modal-close"
              type="button"
              aria-label="Close project"
              onClick={() => setSelectedWork(null)}
            >
              <X size={19} weight="light" />
            </button>
            <div className="project-art">
              <img src={selectedWork.image} alt={`${selectedWork.title} project artwork`} />
            </div>
            <div className="project-info">
              <p className="eyebrow">{selectedWork.category} / {selectedWork.year}</p>
              <h2 id="project-title">{selectedWork.title}</h2>
              <p className="project-zh">{selectedWork.zh}</p>
              <p>{selectedWork.summary}</p>
              <dl>
                <div>
                  <dt>Medium</dt>
                  <dd>{selectedWork.medium}</dd>
                </div>
                <div>
                  <dt>Scale</dt>
                  <dd>{selectedWork.size}</dd>
                </div>
              </dl>
              <div className="project-tags">
                {detailNotes[selectedWork.tone].map((note) => (
                  <span key={note}>{note}</span>
                ))}
              </div>
            </div>
          </div>
        </section>
      ) : null}
    </main>
  );
}
