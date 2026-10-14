import { createFileRoute, Link } from '@tanstack/react-router';
import { useState } from 'react';
import { listProducts } from '../lib/api/products.functions';

export const Route = createFileRoute('/')({
  loader: () => listProducts(),
  component: Home,
});

type Lang = 'en' | 'fa' | 'ru';

const translations = {
  en: {
    nav: { products: 'Products', brands: 'Brands', wholesale: 'Wholesale partners', contacts: 'Contacts' },
    eyebrow: 'B2B WHOLESALE · KYRGYZSTAN',
    heroTitle: 'Professional barber equipment for distributors and wholesale partners.',
    heroLead: 'Impulse KG supplies original professional barber equipment and haircare products from Kyrgyzstan to international wholesale partners.',
    explore: 'Explore catalogue',
    partner: 'Become a partner →',
    productsLabel: 'PROFESSIONAL PRODUCTS',
    catalogue: 'Catalogue',
    wholesalePrices: 'Wholesale prices are available on request.',
    requestPrice: 'Request wholesale price ↗',
    wholesaleLabel: 'WHOLESALE COOPERATION',
    wholesaleTitle: 'For long-term B2B partnerships.',
    points: ['Distributors and wholesale buyers','Product selection for your market','Trial and regular orders','Negotiations in English and Russian'],
    inquiry: 'Wholesale inquiry',
    contactText: 'Contact us on WhatsApp to request current assortment, availability and wholesale terms.',
    admin: 'Admin',
  },
  fa: {
    nav: { products: 'محصولات', brands: 'برندها', wholesale: 'همکاری عمده‌فروشی', contacts: 'تماس' },
    eyebrow: 'فروش عمده B2B · قرقیزستان',
    heroTitle: 'تجهیزات حرفه‌ای آرایشگری برای توزیع‌کنندگان و شرکای عمده‌فروشی.',
    heroLead: 'Impulse KG تجهیزات حرفه‌ای آرایشگری و محصولات مراقبت از مو را از قرقیزستان برای شرکای عمده‌فروشی بین‌المللی تأمین می‌کند.',
    explore: 'مشاهده کاتالوگ',
    partner: 'همکاری با ما ←',
    productsLabel: 'محصولات حرفه‌ای',
    catalogue: 'کاتالوگ',
    wholesalePrices: 'قیمت‌های عمده‌فروشی بنا به درخواست ارائه می‌شوند.',
    requestPrice: 'درخواست قیمت عمده‌فروشی ↗',
    wholesaleLabel: 'همکاری عمده‌فروشی',
    wholesaleTitle: 'برای همکاری بلندمدت B2B.',
    points: ['توزیع‌کنندگان و خریداران عمده','انتخاب محصولات متناسب با بازار شما','سفارش‌های آزمایشی و منظم','مذاکره به زبان انگلیسی و روسی'],
    inquiry: 'درخواست همکاری عمده‌فروشی',
    contactText: 'برای دریافت اطلاعات درباره موجودی، محصولات و شرایط عمده‌فروشی از طریق واتساپ با ما تماس بگیرید.',
    admin: 'مدیریت',
  },
  ru: {
    nav: { products: 'Товары', brands: 'Бренды', wholesale: 'Оптовым партнёрам', contacts: 'Контакты' },
    eyebrow: 'B2B ОПТ · КЫРГЫЗСТАН',
    heroTitle: 'Профессиональное оборудование для барберов, дистрибьюторов и оптовых партнёров.',
    heroLead: 'Impulse KG поставляет оригинальное профессиональное оборудование для барберов и средства для волос из Кыргызстана международным оптовым партнёрам.',
    explore: 'Смотреть каталог',
    partner: 'Стать партнёром →',
    productsLabel: 'ПРОФЕССИОНАЛЬНЫЕ ТОВАРЫ',
    catalogue: 'Каталог',
    wholesalePrices: 'Оптовые цены предоставляются по запросу.',
    requestPrice: 'Запросить оптовую цену ↗',
    wholesaleLabel: 'ОПТОВОЕ СОТРУДНИЧЕСТВО',
    wholesaleTitle: 'Для долгосрочного B2B-партнёрства.',
    points: ['Дистрибьюторы и оптовые покупатели','Подбор ассортимента под ваш рынок','Тестовые и регулярные заказы','Переговоры на русском и английском'],
    inquiry: 'Оптовый запрос',
    contactText: 'Свяжитесь с нами в WhatsApp, чтобы запросить актуальный ассортимент, наличие и условия оптового сотрудничества.',
    admin: 'Админ',
  },
} as const;

function Home() {
  const products = Route.useLoaderData();
  const [lang, setLang] = useState<Lang>('en');
  const t = translations[lang];
  const isRtl = lang === 'fa';

  function setLanguage(next: Lang) {
    setLang(next);
    if (typeof document !== 'undefined') {
      document.documentElement.lang = next;
      document.documentElement.dir = next === 'fa' ? 'rtl' : 'ltr';
    }
  }

  return <main dir={isRtl ? 'rtl' : 'ltr'}>
    <header className="nav">
      <a className="logo" href="#top"><b>IK</b><span>IMPULSE KG<small>KYRGYZSTAN · CENTRAL ASIA</small></span></a>
      <nav><a href="#catalog">{t.nav.products}</a><a href="#brands">{t.nav.brands}</a><a href="#wholesale">{t.nav.wholesale}</a><a href="#contact">{t.nav.contacts}</a></nav>
      <div className="langs">
        {(['en','fa','ru'] as Lang[]).map(item => <button key={item} type="button" onClick={() => setLanguage(item)} aria-pressed={lang === item} style={{background:'transparent',border:0,padding:'4px',cursor:'pointer',font:'inherit',opacity:lang===item?1:.6,textDecoration:lang===item?'underline':'none'}}>{item.toUpperCase()}</button>)}
      </div>
    </header>

    <section id="top" className="hero videohero">
      <video className="herovideo" autoPlay muted loop playsInline preload="metadata"><source src="https://d2ol7oe51mr4n9.cloudfront.net/user_3K8xW5KJmPZo0PJ9Tm26kwhd5Ue/7eb6242c-f43f-49bf-b2d8-06fc1005514d.mp4" type="video/mp4"/></video>
      <div className="videooverlay"></div>
      <div className="herocopy"><p className="eyebrow">{t.eyebrow}</p><h1>{t.heroTitle}</h1><p className="lead">{t.heroLead}</p><div className="actions"><a className="cta" href="#catalog">{t.explore}</a><a className="ghost" href="#contact">{t.partner}</a></div></div>
    </section>

    <section id="brands" className="brands"><span>WAHL</span><span>BaBylissPRO</span><span>StyleCraft</span><span>GAMMA+</span><span>ANDIS</span><span>FANOLA</span></section>

    <section id="catalog" className="catalog">
      <div className="sectionhead"><p>{t.productsLabel}</p><h2>{t.catalogue}</h2><span>{t.wholesalePrices}</span></div>
      <div className="grid">{products.map((p:any)=><article className="card" key={p.id}>
        {p.image_url?<img src={p.image_url} alt={p.brand+' '+p.name}/>:<div className="productmark"><span>{p.brand}</span><b>{p.name}</b></div>}
        <div className="cardbody"><div className="meta"><span>{p.brand}</span><i>{p.badge||p.status}</i></div><h3>{p.name}</h3><p>{p.description}</p>
        {p.price?<div className="price">{p.price}</div>:<a className="price pricewa" href={'https://wa.me/996777712263?text='+encodeURIComponent('Hello! I am interested in the wholesale price for '+p.brand+' '+p.name+'. Please send your wholesale terms.')} target="_blank" rel="noreferrer">{t.requestPrice}</a>}</div>
      </article>)}</div>
    </section>

    <section id="wholesale" className="wholesale"><div><p className="eyebrow">{t.wholesaleLabel}</p><h2>{t.wholesaleTitle}</h2></div><div className="points">{t.points.map((point,index)=><p key={point}><b>{String(index+1).padStart(2,'0')}</b> {point}</p>)}</div></section>

    <footer id="contact"><div className="logo"><b>IK</b><span>IMPULSE KG<small>BISHKEK, KYRGYZSTAN</small></span></div><div><h2>{t.inquiry}</h2><p>{t.contactText}</p><a className="footerwa" href="https://wa.me/996777712263" target="_blank" rel="noreferrer">WhatsApp: +996 777 712 263</a><p className="social">Instagram: @impulse_kg2020</p></div><Link to="/admin" className="adminlink">{t.admin}</Link></footer>
    <a className="floatingwa" href="https://wa.me/996777712263" target="_blank" rel="noreferrer" aria-label="WhatsApp">WA</a>
  </main>;
}
