import { useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowsCounterClockwise,
  List,
  MagnifyingGlassMinus,
  MagnifyingGlassPlus,
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
import tencentGlialCells from "./assets/konger/commercial/tencent-glial-cells-cover.webp";
import tencentTobaccoHistory from "./assets/konger/commercial/tencent-tobacco-history-cover.webp";
import tencentPoisonCure from "./assets/konger/commercial/tencent-poison-cure-cover.webp";
import tencentArsenicHistory from "./assets/konger/commercial/tencent-arsenic-history-cover.webp";
import tencentGoldElixir from "./assets/konger/commercial/tencent-gold-elixir-cover.webp";
import tencentFakeBeer from "./assets/konger/commercial/tencent-fake-beer-cover.webp";
import tencentOpiumHistory from "./assets/konger/commercial/tencent-opium-history-cover.webp";
import tencentColaDrug from "./assets/konger/commercial/tencent-cola-drug-cover.webp";
import baiduPilotBody from "./assets/konger/commercial/baidu-pilot-body-cover.webp";
import baiduCigaretteLung from "./assets/konger/commercial/baidu-cigarette-lung-cover.webp";
import simmonsCover from "./assets/konger/commercial/simmons-cover.webp";
import simmonsPreview01 from "./assets/konger/commercial/simmons-preview-01.webp";
import simmonsPreview02 from "./assets/konger/commercial/simmons-preview-02.webp";
import shanhunRedThreadCover from "./assets/konger/commercial/shanhun-red-thread-cover.webp";
import shanhunRedThreadPreview01 from "./assets/konger/commercial/shanhun-red-thread-preview-01.webp";
import shanhunNeuralCloud from "./assets/konger/commercial/shanhun-neural-cloud-cover.webp";
import shanhunPeppaPigCover from "./assets/konger/commercial/shanhun-peppa-pig-cover.webp";
import shanhunPeppaPigPreview01 from "./assets/konger/commercial/shanhun-peppa-pig-preview-01.webp";
import shanhunIdentityVCover from "./assets/konger/commercial/shanhun-identity-v-cover.webp";
import shanhunIdentityVPreview01 from "./assets/konger/commercial/shanhun-identity-v-preview-01.webp";
import shanhunIdentityVPreview02 from "./assets/konger/commercial/shanhun-identity-v-preview-02.webp";
import shanhunIdentityVPreview03 from "./assets/konger/commercial/shanhun-identity-v-preview-03.webp";
import shanhunIdentityVPreview04 from "./assets/konger/commercial/shanhun-identity-v-preview-04.webp";
import shanhunIdentityVPreview05 from "./assets/konger/commercial/shanhun-identity-v-preview-05.webp";
import shanhunPaperBrideCover from "./assets/konger/commercial/shanhun-paper-bride-cover.webp";
import shanhunPaperBridePreview01 from "./assets/konger/commercial/shanhun-paper-bride-preview-01.webp";

const personalWorks = [
  {
    id: "moon-autumn-dragon",
    title: "月秋游龙",
    category: "Narrative",
    categoryZh: "文学幻想",
    type: "2D原画 / 文创插画",
    year: "2024",
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
    image: flowerFu,
    ratio: "square",
    tone: "garden",
    summary:
      "更轻巧的角色小品，适合在作品墙中打破大幅叙事图的密度。",
    notes: ["角色小品", "花下", "练习"],
  },
];

const commercialWorks = [
  {
    id: "tencent-glial-cells",
    title: "大脑里的“胶水”细胞",
    category: "Commercial",
    categoryZh: "商业项目",
    client: "腾讯医典",
    type: "商业条漫 / 医学科普",
    year: "2021",
    image: tencentGlialCells,
    ratio: "tall",
    tone: "paper",
    externalUrl: "https://mp.weixin.qq.com/s/g_8t3itt2Jzp8MSuIuSuJw",
    summary:
      "腾讯医典医学科普条漫项目，以叙事化切片承载复杂医学知识，适合作为商业科普表达能力的代表案例。",
    notes: ["腾讯医典", "医学科普", "商业条漫"],
  },
  {
    id: "tencent-tobacco-history",
    title: "揭秘烟草黑历史",
    category: "Commercial",
    categoryZh: "商业项目",
    client: "腾讯医典",
    type: "商业条漫 / 医学科普",
    year: "2021",
    image: tencentTobaccoHistory,
    ratio: "tall",
    tone: "paper",
    externalUrl: "https://mp.weixin.qq.com/s/0q9UDdeYRMGr0VqyYJ7pVg",
    summary:
      "围绕烟草医学史展开的长篇科普条漫，通过戏剧化画面组织历史叙事与健康知识。",
    notes: ["腾讯医典", "医学史", "长篇条漫"],
  },
  {
    id: "tencent-poison-cure",
    title: "古人连这种“毒药”都用了",
    category: "Commercial",
    categoryZh: "商业项目",
    client: "腾讯医典",
    type: "商业条漫 / 医学科普",
    year: "2021",
    image: tencentPoisonCure,
    ratio: "tall",
    tone: "paper",
    externalUrl: "https://mp.weixin.qq.com/s/VwhZabVUvuQXLooygkpJEQ",
    summary:
      "腾讯医典荒诞医学史系列条漫，将历史题材、医学科普和漫画化叙事结合。",
    notes: ["腾讯医典", "荒诞医学史", "商业条漫"],
  },
  {
    id: "tencent-arsenic-history",
    title: "荒诞医学史之砷",
    category: "Commercial",
    categoryZh: "商业项目",
    client: "腾讯医典",
    type: "商业条漫 / 医学科普",
    year: "2022",
    image: tencentArsenicHistory,
    ratio: "tall",
    tone: "paper",
    externalUrl: "https://mp.weixin.qq.com/s/8N0FL0YczzrND4p9lo3F2A",
    summary:
      "以砒霜与现代治疗为线索的医学史条漫，强调长图节奏、信息层级和故事化阅读。",
    notes: ["腾讯医典", "医学科普", "原文阅读"],
  },
  {
    id: "tencent-gold-elixir",
    title: "黄金长生不老药",
    category: "Commercial",
    categoryZh: "商业项目",
    client: "腾讯医典",
    type: "商业条漫 / 医学科普",
    year: "2022",
    image: tencentGoldElixir,
    ratio: "tall",
    tone: "paper",
    externalUrl: "https://mp.weixin.qq.com/s/8EyWKVBUlR5Uh9BYmOYICw",
    summary:
      "围绕古代炼金与医学误区展开的腾讯医典科普条漫，以荒诞感建立阅读入口。",
    notes: ["腾讯医典", "历史科普", "商业条漫"],
  },
  {
    id: "tencent-fake-beer",
    title: "假啤酒里的毒物",
    category: "Commercial",
    categoryZh: "商业项目",
    client: "腾讯医典",
    type: "商业条漫 / 医学科普",
    year: "2022",
    image: tencentFakeBeer,
    ratio: "tall",
    tone: "paper",
    externalUrl: "https://mp.weixin.qq.com/s/Jq6NTDCM0Iim0X3fo_uV8g",
    summary:
      "医学科普条漫商业项目，以案例叙事承载毒理知识和公共健康议题。",
    notes: ["腾讯医典", "毒理科普", "商业条漫"],
  },
  {
    id: "tencent-opium-history",
    title: "鸦片的历史",
    category: "Commercial",
    categoryZh: "商业项目",
    client: "腾讯医典",
    type: "商业条漫 / 医学科普",
    year: "2022",
    image: tencentOpiumHistory,
    ratio: "tall",
    tone: "paper",
    externalUrl: "https://mp.weixin.qq.com/s/1ZYvhHBWtwKUWymDyB4CEA",
    summary:
      "从药品到毒品的历史转向被组织成长篇条漫，适合展示复杂议题的画面叙事能力。",
    notes: ["腾讯医典", "医学史", "公共健康"],
  },
  {
    id: "tencent-cola-drug",
    title: "可乐配方中的毒品",
    category: "Commercial",
    categoryZh: "商业项目",
    client: "腾讯医典",
    type: "商业条漫 / 医学科普",
    year: "2022",
    image: tencentColaDrug,
    ratio: "tall",
    tone: "paper",
    externalUrl: "https://mp.weixin.qq.com/s/0zkHT9l_JRPd4z2nyr7gkg",
    summary:
      "腾讯医典医学史条漫项目，以大众熟悉的消费品切入，完成商业科普内容的视觉转译。",
    notes: ["腾讯医典", "医学史", "商业科普"],
  },
  {
    id: "baidu-pilot-body",
    title: "飞行员的身体正在经历什么？",
    category: "Commercial",
    categoryZh: "商业项目",
    client: "百度健康",
    type: "商业条漫 / 健康科普",
    year: "2022",
    image: baiduPilotBody,
    ratio: "tall",
    tone: "sky",
    externalUrl: "https://mp.weixin.qq.com/s/e6yb-YEmDq_ukX09IEEmQw",
    summary:
      "百度健康公众号条漫项目，用连续画面解释飞行场景中的身体反应与健康知识。",
    notes: ["百度健康", "健康科普", "商业条漫"],
  },
  {
    id: "baidu-cigarette-lung",
    title: "一根烟，是怎么毁了肺的？",
    category: "Commercial",
    categoryZh: "商业项目",
    client: "百度健康",
    type: "商业条漫 / 健康科普",
    year: "2022",
    image: baiduCigaretteLung,
    ratio: "scroll",
    tone: "paper",
    externalUrl: "https://mp.weixin.qq.com/s/dAwD7ynoa9ibcYRAyrDgLA",
    summary:
      "百度健康长图条漫项目，封面保留长条阅读感，完整内容通过原文链接进入官方发布页。",
    notes: ["百度健康", "控烟科普", "查看原文"],
  },
  {
    id: "simmons-brand-illustration",
    title: "席梦思品牌插画",
    category: "Commercial",
    categoryZh: "商业项目",
    client: "席梦思",
    type: "商业插画 / 品牌项目",
    year: "商业项目",
    image: simmonsCover,
    ratio: "portrait",
    tone: "cream",
    gallery: [
      { image: simmonsCover, label: "席梦思品牌插画 01" },
      { image: simmonsPreview01, label: "席梦思品牌插画 02" },
      { image: simmonsPreview02, label: "席梦思品牌插画 03" },
    ],
    summary:
      "席梦思商业插画项目，适合作为品牌合作方向的代表案例，详情中保留多张预览图。",
    notes: ["席梦思", "品牌插画", "商业合作"],
  },
  {
    id: "shanhun-red-thread",
    title: "红丝缠",
    category: "Commercial",
    categoryZh: "商业项目",
    client: "闪魂",
    type: "卡牌插画 / 商业项目",
    year: "商业项目",
    image: shanhunRedThreadCover,
    ratio: "wide",
    tone: "vermilion",
    gallery: [
      { image: shanhunRedThreadCover, label: "红丝缠 01" },
      { image: shanhunRedThreadPreview01, label: "红丝缠 02" },
    ],
    summary:
      "闪魂系列卡牌作品，保留卡面构图和角色叙事感，适合展示商业卡牌方向。",
    notes: ["闪魂", "卡牌插画", "角色叙事"],
  },
  {
    id: "shanhun-neural-cloud",
    title: "云图计划",
    category: "Commercial",
    categoryZh: "商业项目",
    client: "闪魂",
    type: "卡牌插画 / 商业项目",
    year: "商业项目",
    image: shanhunNeuralCloud,
    ratio: "portrait",
    tone: "jade",
    summary:
      "闪魂卡牌方向作品，强调角色站姿、服装层次与商业卡面完成度。",
    notes: ["闪魂", "卡牌插画", "角色"],
  },
  {
    id: "shanhun-peppa-pig",
    title: "小猪佩奇",
    category: "Commercial",
    categoryZh: "商业项目",
    client: "闪魂",
    type: "卡牌插画 / 商业项目",
    year: "商业项目",
    image: shanhunPeppaPigCover,
    ratio: "portrait",
    tone: "festival",
    gallery: [
      { image: shanhunPeppaPigCover, label: "小猪佩奇 01" },
      { image: shanhunPeppaPigPreview01, label: "小猪佩奇 02" },
    ],
    summary:
      "闪魂合作卡牌作品，以轻松明快的角色表现承接商业 IP 视觉需求。",
    notes: ["闪魂", "IP 合作", "卡牌插画"],
  },
  {
    id: "shanhun-identity-v",
    title: "第五人格",
    category: "Commercial",
    categoryZh: "商业项目",
    client: "闪魂",
    type: "卡牌插画 / 商业项目",
    year: "商业项目",
    image: shanhunIdentityVCover,
    ratio: "portrait",
    tone: "night",
    gallery: [
      { image: shanhunIdentityVCover, label: "第五人格 01" },
      { image: shanhunIdentityVPreview01, label: "第五人格 02" },
      { image: shanhunIdentityVPreview02, label: "第五人格 03" },
      { image: shanhunIdentityVPreview03, label: "第五人格 04" },
      { image: shanhunIdentityVPreview04, label: "第五人格 05" },
      { image: shanhunIdentityVPreview05, label: "第五人格 06" },
    ],
    summary:
      "闪魂系列卡牌项目，集中呈现多个角色卡面的商业化风格统一与差异化处理。",
    notes: ["闪魂", "第五人格", "系列卡牌"],
  },
  {
    id: "shanhun-paper-bride",
    title: "纸嫁衣",
    category: "Commercial",
    categoryZh: "商业项目",
    client: "闪魂",
    type: "卡牌插画 / 商业项目",
    year: "商业项目",
    image: shanhunPaperBrideCover,
    ratio: "portrait",
    tone: "vermilion",
    gallery: [
      { image: shanhunPaperBrideCover, label: "纸嫁衣 01" },
      { image: shanhunPaperBridePreview01, label: "纸嫁衣 02" },
    ],
    summary:
      "闪魂卡牌合作项目，以民俗题材和角色氛围展现商业卡牌插画能力。",
    notes: ["闪魂", "纸嫁衣", "民俗题材"],
  },
];

const works = [...personalWorks, ...commercialWorks];
const featuredWorks = personalWorks;

const workTypes = [
  { id: "personal", label: "Personal", zh: "个人插画" },
  { id: "commercial", label: "Commercial", zh: "商业作品" },
];

const personalFilters = [
  { id: "All", label: "All", zh: "全部" },
  { id: "Narrative", label: "Narrative", zh: "文学幻想" },
  { id: "Character", label: "Character", zh: "角色与美宣" },
  { id: "Illustration", label: "Illustration", zh: "个人插画" },
  { id: "Motion", label: "Motion", zh: "动画漫画" },
];

const commercialFilters = [
  { id: "All", label: "All", zh: "全部" },
  { id: "腾讯医典", label: "Tencent", zh: "腾讯医典" },
  { id: "百度健康", label: "Baidu", zh: "百度健康" },
  { id: "席梦思", label: "Simmons", zh: "席梦思" },
  { id: "闪魂", label: "Shanhun", zh: "闪魂卡牌" },
];

export function App() {
  const [activeWorkType, setActiveWorkType] = useState("personal");
  const [activeFilter, setActiveFilter] = useState("All");
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const [selectedWork, setSelectedWork] = useState(null);
  const [viewerWork, setViewerWork] = useState(null);
  const [viewerZoom, setViewerZoom] = useState(1);
  const [viewerOffset, setViewerOffset] = useState({ x: 0, y: 0 });
  const [viewerDrag, setViewerDrag] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const featuredWork = featuredWorks[featuredIndex];
  const selectedImages = selectedWork
    ? selectedWork.gallery ?? [{ image: selectedWork.image, label: selectedWork.title }]
    : [];
  const selectedProjectImage = selectedImages[selectedImageIndex] ?? selectedImages[0];
  const currentWorks = activeWorkType === "commercial" ? commercialWorks : personalWorks;
  const currentFilters =
    activeWorkType === "commercial" ? commercialFilters : personalFilters;

  const visibleWorks = useMemo(() => {
    if (activeFilter === "All") return currentWorks;
    if (activeWorkType === "commercial") {
      return currentWorks.filter((work) => work.client === activeFilter);
    }

    return currentWorks.filter((work) => work.category === activeFilter);
  }, [activeFilter, activeWorkType, currentWorks]);

  useEffect(() => {
    document.body.classList.toggle("modal-open", Boolean(selectedWork || viewerWork));
    return () => document.body.classList.remove("modal-open");
  }, [selectedWork, viewerWork]);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        if (viewerWork) {
          closeImageViewer();
        } else {
          setSelectedWork(null);
        }
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [viewerWork]);

  const showPrevious = () => {
    setFeaturedIndex((index) => (index === 0 ? featuredWorks.length - 1 : index - 1));
  };

  const showNext = () => {
    setFeaturedIndex((index) => (index + 1) % featuredWorks.length);
  };

  const openProject = (work) => {
    setSelectedWork(work);
    setSelectedImageIndex(0);
  };

  const switchWorkType = (workType) => {
    setActiveWorkType(workType);
    setActiveFilter("All");
  };

  const openImageViewer = (work) => {
    setViewerWork(work);
    setViewerZoom(1);
    setViewerOffset({ x: 0, y: 0 });
    setViewerDrag(null);
  };

  const openExternalWork = (work) => {
    if (!work.externalUrl) return;
    window.open(work.externalUrl, "_blank", "noopener,noreferrer");
  };

  const handleProjectImageClick = () => {
    if (!selectedWork) return;
    if (selectedWork.externalUrl) {
      openExternalWork(selectedWork);
      return;
    }

    openImageViewer({
      ...selectedWork,
      image: selectedProjectImage?.image ?? selectedWork.image,
      title: selectedProjectImage?.label ?? selectedWork.title,
    });
  };

  const closeImageViewer = () => {
    setViewerWork(null);
    setViewerZoom(1);
    setViewerOffset({ x: 0, y: 0 });
    setViewerDrag(null);
  };

  const updateViewerZoom = (nextZoom) => {
    const zoom = Math.min(4, Math.max(1, Number(nextZoom.toFixed(2))));
    setViewerZoom(zoom);
    if (zoom === 1) {
      setViewerOffset({ x: 0, y: 0 });
    }
  };

  const resetImageViewer = () => {
    setViewerZoom(1);
    setViewerOffset({ x: 0, y: 0 });
    setViewerDrag(null);
  };

  const handleViewerWheel = (event) => {
    event.preventDefault();
    updateViewerZoom(viewerZoom + (event.deltaY < 0 ? 0.2 : -0.2));
  };

  const handleViewerPointerDown = (event) => {
    if (viewerZoom <= 1) return;
    event.currentTarget.setPointerCapture(event.pointerId);
    setViewerDrag({
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      originX: viewerOffset.x,
      originY: viewerOffset.y,
    });
  };

  const handleViewerPointerMove = (event) => {
    if (!viewerDrag || viewerDrag.pointerId !== event.pointerId) return;
    setViewerOffset({
      x: viewerDrag.originX + event.clientX - viewerDrag.startX,
      y: viewerDrag.originY + event.clientY - viewerDrag.startY,
    });
  };

  const handleViewerPointerUp = (event) => {
    if (viewerDrag?.pointerId === event.pointerId) {
      setViewerDrag(null);
    }
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
        {["Work", "About", "Contact"].map((item) => (
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
          <h1>空二KONGER</h1>
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
          <strong>31</strong>
          <span>selected works</span>
        </div>
        <p>
          空二 KONGER，插画师。作品覆盖 2D 原画、游戏美宣、角色、文创插画、漫画与动画短片。
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
              {String(featuredWorks.length).padStart(2, "0")}
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
            onClick={() => openProject(featuredWork)}
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
            </dl>
            <p className="featured-summary">{featuredWork.summary}</p>
            <button
              className="line-link as-button"
              type="button"
              onClick={() => openProject(featuredWork)}
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
          <div className="work-filter-panel">
            <div className="work-type-tabs" aria-label="Work type">
              {workTypes.map((type) => (
                <button
                  className={type.id === activeWorkType ? "is-active" : ""}
                  type="button"
                  key={type.id}
                  onClick={() => switchWorkType(type.id)}
                >
                  <span>{type.zh}</span>
                  <small>{type.label}</small>
                </button>
              ))}
            </div>
            <div className="filters" aria-label="Work filters">
              {currentFilters.map((filter) => (
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
        </div>

        <div className="masonry" aria-live="polite">
          {visibleWorks.map((work) => (
            <article className={`work-card ${work.ratio}`} key={work.id}>
              <button type="button" onClick={() => openProject(work)}>
                <img src={work.image} alt={`${work.title} illustration`} />
              </button>
              <div className="work-meta">
                <h3>{work.title}</h3>
                <p>{work.year} · {work.client ?? work.categoryZh}</p>
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

      <footer className="footer" id="contact">
        <div className="footer-mark">
          <img src={boboGirl01} alt="" />
        </div>
        <div>
          <p>空二KONGER</p>
          <div className="footer-links">
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
            <div className="project-media">
              <button
                className={`project-art ${selectedWork.ratio}`}
                type="button"
                data-action={selectedWork.externalUrl ? "external" : "viewer"}
                aria-label={
                  selectedWork.externalUrl
                    ? `Open original article for ${selectedWork.title}`
                    : `Open image viewer for ${selectedWork.title}`
                }
                onClick={handleProjectImageClick}
              >
                <img
                  src={selectedProjectImage?.image ?? selectedWork.image}
                  alt={`${selectedProjectImage?.label ?? selectedWork.title} project artwork`}
                />
              </button>
              {selectedImages.length > 1 ? (
                <div className="project-gallery" aria-label={`${selectedWork.title} previews`}>
                  {selectedImages.map((item, index) => (
                    <button
                      className={index === selectedImageIndex ? "is-active" : ""}
                      type="button"
                      key={item.label}
                      aria-label={`Show ${item.label}`}
                      onClick={() => setSelectedImageIndex(index)}
                    >
                      <img src={item.image} alt="" />
                    </button>
                  ))}
                </div>
              ) : null}
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
                  <dt>{selectedWork.client ? "Client" : "Category"}</dt>
                  <dd>{selectedWork.client ?? selectedWork.category}</dd>
                </div>
                <div>
                  <dt>Year</dt>
                  <dd>{selectedWork.year}</dd>
                </div>
              </dl>
              {selectedWork.externalUrl ? (
                <a
                  className="line-link project-external"
                  href={selectedWork.externalUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>查看原文</span>
                  <ArrowRight size={22} weight="light" />
                </a>
              ) : null}
              <div className="project-tags">
                {selectedWork.notes.map((note) => (
                  <span key={note}>{note}</span>
                ))}
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {viewerWork ? (
        <section
          className="image-viewer"
          role="dialog"
          aria-modal="true"
          aria-label={`${viewerWork.title} image viewer`}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeImageViewer();
            }
          }}
        >
          <div className="viewer-toolbar">
            <p>{viewerWork.title}</p>
            <div className="viewer-actions" aria-label="Image viewer controls">
              <button
                className="icon-button"
                type="button"
                aria-label="Zoom out"
                onClick={() => updateViewerZoom(viewerZoom - 0.25)}
              >
                <MagnifyingGlassMinus size={18} weight="light" />
              </button>
              <span>{Math.round(viewerZoom * 100)}%</span>
              <button
                className="icon-button"
                type="button"
                aria-label="Zoom in"
                onClick={() => updateViewerZoom(viewerZoom + 0.25)}
              >
                <MagnifyingGlassPlus size={18} weight="light" />
              </button>
              <button
                className="icon-button"
                type="button"
                aria-label="Reset image view"
                onClick={resetImageViewer}
              >
                <ArrowsCounterClockwise size={18} weight="light" />
              </button>
              <button
                className="icon-button"
                type="button"
                aria-label="Close image viewer"
                onClick={closeImageViewer}
              >
                <X size={18} weight="light" />
              </button>
            </div>
          </div>
          <div
            className="viewer-stage"
            data-draggable={viewerZoom > 1}
            onWheel={handleViewerWheel}
            onPointerDown={handleViewerPointerDown}
            onPointerMove={handleViewerPointerMove}
            onPointerUp={handleViewerPointerUp}
            onPointerCancel={handleViewerPointerUp}
          >
            <img
              src={viewerWork.image}
              alt={`${viewerWork.title} full artwork`}
              draggable="false"
              style={{
                transform: `translate(${viewerOffset.x}px, ${viewerOffset.y}px) scale(${viewerZoom})`,
              }}
            />
          </div>
        </section>
      ) : null}
    </main>
  );
}
