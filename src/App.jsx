import { useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  GlobeHemisphereEast,
  Images,
  LinkSimple,
  List,
  Palette,
  Sparkle,
  X,
} from "@phosphor-icons/react";
import moonAutumnDragon from "./assets/konger/moon-autumn-dragon.webp";
import midAutumnBridge from "./assets/konger/mid-autumn-bridge.webp";
import jianlaiBattle from "./assets/konger/jianlai-battle.webp";
import boboGirl01 from "./assets/konger/bobo-girl-01.webp";
import boboGirl02 from "./assets/konger/bobo-girl-02.webp";
import youMeHer from "./assets/konger/you-me-her.webp";
import witchBanquet from "./assets/konger/witch-banquet.webp";
import floatingLight from "./assets/konger/floating-light.webp";
import quantumChoice from "./assets/konger/quantum-choice.webp";
import cloudFeatherScroll from "./assets/konger/cloud-feather-scroll.webp";
import newYear from "./assets/konger/new-year.webp";
import merryChristmas from "./assets/konger/merry-christmas.webp";
import windAnimation from "./assets/konger/wind-animation.webp";
import flowerDay from "./assets/konger/flower-day.webp";
import flowerFu from "./assets/konger/flower-fu.webp";

const works = [
  {
    id: "moon-autumn-dragon",
    title: "月秋游龙",
    category: "Narrative",
    categoryZh: "文学幻想",
    type: "2D原画 / 文创插画",
    year: "2024",
    source: "GGAC",
    image: moonAutumnDragon,
    ratio: "poster",
    tone: "vermilion",
    summary:
      "红色夜幕、密林、月亮与游龙形成纵向叙事，是当前作品集中最适合建立首页记忆点的作品。",
    notes: ["月色", "东方装饰", "纵向叙事"],
  },
  {
    id: "mid-autumn-bridge",
    title: "中秋贺图",
    category: "Character",
    categoryZh: "角色与美宣",
    type: "2D原画 / 游戏美宣",
    year: "2021",
    source: "GGAC",
    image: midAutumnBridge,
    ratio: "wide",
    tone: "teal",
    summary:
      "超宽幅水乡夜景带有完整空间层次，桥、人群、水面与月亮让画面天然适合作为桌面端横向主视觉。",
    notes: ["节日", "场景", "宽幅构图"],
  },
  {
    id: "jianlai-battle",
    title: "剑来书简湖之战",
    category: "Narrative",
    categoryZh: "文学幻想",
    type: "2D原画 / 文学作品",
    year: "2025",
    source: "GGAC",
    image: jianlaiBattle,
    ratio: "tall",
    tone: "sky",
    summary:
      "人物、龙与高空翻转构图构成强叙事张力，适合放在文学幻想精选位。",
    notes: ["文学作品", "动作张力", "幻想场景"],
  },
  {
    id: "floating-light",
    title: "浮光",
    category: "Character",
    categoryZh: "角色与美宣",
    type: "2D原画 / 游戏美宣",
    year: "2020",
    source: "GGAC",
    image: floatingLight,
    ratio: "wide",
    tone: "night",
    summary:
      "早期游戏美宣向作品，横向场景与光影组织适合放入角色与场景板块。",
    notes: ["游戏美宣", "光影", "场景"],
  },
  {
    id: "quantum-choice",
    title: "遇事不决，量子力学",
    category: "Character",
    categoryZh: "角色与美宣",
    type: "2D原画 / 游戏美宣",
    year: "2022",
    source: "GGAC",
    image: quantumChoice,
    ratio: "wide",
    tone: "gold",
    summary:
      "宽幅角色作品，画面留白与叙事标题形成轻松的个人表达。",
    notes: ["角色", "横幅", "个人题名"],
  },
  {
    id: "cloud-feather-scroll",
    title: "云羽之卷",
    category: "Character",
    categoryZh: "角色与美宣",
    type: "2D原画 / 游戏角色",
    year: "2024",
    source: "GGAC",
    image: cloudFeatherScroll,
    ratio: "tall",
    tone: "jade",
    summary:
      "竖版角色图，适合在作品墙中作为角色设计方向的清晰入口。",
    notes: ["游戏角色", "竖版", "角色气质"],
  },
  {
    id: "bobo-girl",
    title: "啵啵girl",
    category: "Illustration",
    categoryZh: "个人插画",
    type: "插画 / 商业插画",
    year: "2022",
    source: "ZCOOL",
    image: boboGirl01,
    ratio: "portrait",
    tone: "soft",
    summary:
      "带有署名感的人像近景，适合关于页、联系区或个人风格补充。",
    notes: ["人像", "商业插画", "个人气质"],
  },
  {
    id: "bobo-girl-variant",
    title: "啵啵girl 色彩稿",
    category: "Illustration",
    categoryZh: "个人插画",
    type: "插画 / 商业插画",
    year: "2022",
    source: "ZCOOL",
    image: boboGirl02,
    ratio: "portrait",
    tone: "soft",
    summary:
      "同系列人物稿，适合形成个人插画板块中的节奏变化。",
    notes: ["系列", "少女", "色彩"],
  },
  {
    id: "you-me-her",
    title: "你我她",
    category: "Illustration",
    categoryZh: "个人插画",
    type: "插画 / 商业插画",
    year: "2022",
    source: "ZCOOL",
    image: youMeHer,
    ratio: "tall",
    tone: "cream",
    summary:
      "竖版人物插画，保留更轻、更近的个人观察感。",
    notes: ["人物", "商业插画", "轻叙事"],
  },
  {
    id: "witch-banquet",
    title: "魔女嘚盛宴",
    category: "Motion",
    categoryZh: "动画漫画",
    type: "2D原画 / 漫画",
    year: "2021",
    source: "GGAC",
    image: witchBanquet,
    ratio: "tall",
    tone: "violet",
    summary:
      "漫画感更强的竖版作品，适合承接动画与漫画方向。",
    notes: ["漫画", "角色群像", "戏剧性"],
  },
  {
    id: "wind-animation",
    title: "刮风",
    category: "Motion",
    categoryZh: "动画漫画",
    type: "动漫 / 动画片",
    year: "2022",
    source: "ZCOOL",
    image: windAnimation,
    ratio: "wide",
    tone: "paper",
    summary:
      "小动画练习的封面帧，适合提示作品不止静态插画，也包含动态练习。",
    notes: ["动画练习", "风", "短片"],
  },
  {
    id: "new-year",
    title: "新年快乐呀",
    category: "Character",
    categoryZh: "角色与美宣",
    type: "2D原画 / 游戏美宣",
    year: "2022",
    source: "GGAC",
    image: newYear,
    ratio: "wide",
    tone: "festival",
    summary:
      "节庆气质明确的横向作品，可用于美宣与节日主题集合。",
    notes: ["节庆", "横幅", "美宣"],
  },
  {
    id: "merry-christmas",
    title: "Merry Christmas",
    category: "Character",
    categoryZh: "角色与美宣",
    type: "2D原画 / 游戏美宣",
    year: "2021",
    source: "GGAC",
    image: merryChristmas,
    ratio: "wide",
    tone: "winter",
    summary:
      "节日主题横幅，适合与新年作品一起展现不同节令下的角色表达。",
    notes: ["节日", "角色", "横幅"],
  },
  {
    id: "flower-day",
    title: "花开盛日，摸鱼之时",
    category: "Illustration",
    categoryZh: "个人插画",
    type: "2D原画 / 游戏美宣",
    year: "2023",
    source: "GGAC",
    image: flowerDay,
    ratio: "tall",
    tone: "garden",
    summary:
      "花与角色组成的竖幅作品，让个人练习与游戏美宣之间的边界更松弛。",
    notes: ["花", "角色", "摸鱼"],
  },
  {
    id: "flower-fu",
    title: "花下嘚小福同学",
    category: "Illustration",
    categoryZh: "个人插画",
    type: "2D原画 / 游戏美宣",
    year: "2023",
    source: "GGAC",
    image: flowerFu,
    ratio: "square",
    tone: "garden",
    summary:
      "更轻巧的角色小品，适合在作品墙中打破大幅叙事图的密度。",
    notes: ["角色小品", "花下", "练习"],
  },
];

const filters = [
  { id: "All", label: "All", zh: "全部" },
  { id: "Narrative", label: "Narrative", zh: "文学幻想" },
  { id: "Character", label: "Character", zh: "角色与美宣" },
  { id: "Illustration", label: "Illustration", zh: "个人插画" },
  { id: "Motion", label: "Motion", zh: "动画漫画" },
];

const socials = [
  {
    label: "ZCOOL",
    href: "https://www.zcool.com.cn/u/13169595",
    icon: GlobeHemisphereEast,
  },
  {
    label: "GGAC",
    href: "https://www.ggac.com/user/83988/works",
    icon: Images,
  },
  {
    label: "Weibo",
    href: "https://weibo.com/2612004213/profile?rightmod=1&wvr=6&mod=personinfo",
    icon: LinkSimple,
  },
  {
    label: "ArtStation",
    href: "https://www.artstation.com/konger",
    icon: Palette,
  },
];

export function App() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const [selectedWork, setSelectedWork] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const featuredWork = works[featuredIndex];

  const visibleWorks = useMemo(() => {
    if (activeFilter === "All") return works;
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
        <a className="brand" href="#top" aria-label="KONGER home">
          <span>KONGER</span>
          <span>空二</span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <a className="is-active" href="#work">
            Work
          </a>
          <a href="#about">About</a>
          <a href="#sources">Sources</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="utility">
          <span className="status-pill">Illustrator</span>
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
        {["Work", "About", "Sources", "Contact"].map((item) => (
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
        <picture className="hero-art">
          <source media="(max-width: 720px)" srcSet={moonAutumnDragon} />
          <img src={midAutumnBridge} alt="KONGER illustration featuring a moonlit bridge scene" />
        </picture>
        <div className="hero-shade" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow">Illustration / Character / Narrative Art</p>
          <h1>KONGER 空二</h1>
          <p className="intro">
            空二 KONGER 的作品在角色、幻想场景与细腻情绪之间展开。这里收录她的精选插画、游戏美宣、漫画与动画练习，作为一个安静、清晰、以作品为中心的个人画廊。
          </p>
          <div className="hero-actions">
            <a className="line-link light" href="#work">
              <span>View selected work</span>
              <ArrowRight size={22} weight="light" />
            </a>
            <a className="line-link light muted-link" href="#about">
              <span>About KONGER</span>
            </a>
          </div>
        </div>
      </section>

      <section className="intro-band" aria-label="Artist profile summary">
        <div className="intro-stat">
          <strong>27</strong>
          <span>selected images</span>
        </div>
        <p>
          空二 KONGER，站酷公开资料标注为上海插画师。公开作品覆盖 2D 原画、游戏美宣、角色、文创插画、漫画与动画短片。
        </p>
        <div className="intro-stat">
          <strong>2020-2025</strong>
          <span>selection range</span>
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

        <div className="featured-layout">
          <button
            className={`featured-image ${featuredWork.ratio}`}
            type="button"
            onClick={() => setSelectedWork(featuredWork)}
          >
            <img src={featuredWork.image} alt={`${featuredWork.title} illustration`} />
          </button>
          <article className="featured-copy">
            <p>{featuredWork.categoryZh}</p>
            <h2>{featuredWork.title}</h2>
            <dl>
              <div>
                <dt>Type</dt>
                <dd>{featuredWork.type}</dd>
              </div>
              <div>
                <dt>Year</dt>
                <dd>{featuredWork.year}</dd>
              </div>
              <div>
                <dt>Source</dt>
                <dd>{featuredWork.source}</dd>
              </div>
            </dl>
            <p className="featured-summary">{featuredWork.summary}</p>
            <button
              className="line-link as-button"
              type="button"
              onClick={() => setSelectedWork(featuredWork)}
            >
              <span>Open work</span>
              <ArrowRight size={22} weight="light" />
            </button>
          </article>
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
                className={filter.id === activeFilter ? "is-active" : ""}
                type="button"
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
              >
                <span>{filter.label}</span>
                <small>{filter.zh}</small>
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
                  {work.categoryZh}
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
          <h2>Stories, characters, moonlight, and quiet narrative scenes.</h2>
        </div>
        <div className="about-copy">
          <p>
            空二 KONGER，插画师。她的创作横跨 2D 原画、游戏美宣、角色设计、文创插画、漫画与短片练习。作品里既有宏大的幻想叙事，也有更贴近日常情绪的人物插画。
          </p>
          <p>
            月光、水面、节日、书卷、游龙与城市角落共同构成画面的叙事线索。当前主页以安静的策展墙组织作品，让强叙事主图和更轻的人物小品都能被清晰观看。
          </p>
          <div className="about-points">
            <span>
              <Sparkle size={16} weight="fill" />
              2D 原画
            </span>
            <span>
              <Sparkle size={16} weight="fill" />
              游戏美宣
            </span>
            <span>
              <Sparkle size={16} weight="fill" />
              文学幻想
            </span>
          </div>
        </div>
      </section>

      <section className="sources" id="sources">
        <div>
          <p className="eyebrow">Public sources</p>
          <h2>空二KONGER</h2>
          <p>
            站酷公开资料标注她为上海插画师，签名提及抖音、微博、LOFTER、GGAC 均使用“空二KONGER”。GGAC公开作品列表显示 36 组作品。
          </p>
        </div>
        <div className="source-grid">
          {socials.map(({ label, href, icon: Icon }) => (
            <a href={href} target="_blank" rel="noreferrer" key={label}>
              <Icon size={20} weight="light" />
              <span>{label}</span>
              <ArrowRight size={18} weight="light" />
            </a>
          ))}
        </div>
      </section>

      <footer className="footer" id="contact">
        <div className="footer-mark">
          <img src={boboGirl01} alt="" />
        </div>
        <div>
          <p>KONGER 空二</p>
          <div className="footer-links">
            {socials.slice(0, 3).map(({ label, href, icon: Icon }) => (
              <a href={href} target="_blank" rel="noreferrer" key={label}>
                <Icon size={17} weight="light" />
                {label}
              </a>
            ))}
            <a href="#top">Back to top</a>
          </div>
        </div>
        <p className="copyright">© 2026 KONGER. Portfolio draft.</p>
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
            <div className={`project-art ${selectedWork.ratio}`}>
              <img src={selectedWork.image} alt={`${selectedWork.title} project artwork`} />
            </div>
            <div className="project-info">
              <p className="eyebrow">
                {selectedWork.categoryZh} / {selectedWork.year}
              </p>
              <h2 id="project-title">{selectedWork.title}</h2>
              <p className="project-zh">{selectedWork.type}</p>
              <p>{selectedWork.summary}</p>
              <dl>
                <div>
                  <dt>Source</dt>
                  <dd>{selectedWork.source}</dd>
                </div>
                <div>
                  <dt>Category</dt>
                  <dd>{selectedWork.category}</dd>
                </div>
              </dl>
              <div className="project-tags">
                {selectedWork.notes.map((note) => (
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
