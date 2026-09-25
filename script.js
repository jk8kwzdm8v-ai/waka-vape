const products = [
  {name:"Raspberry Watermelon",ru:"Малина Арбуз",descRu:"Мякоть спелого арбуза и сочная малина.",descEn:"Ripe watermelon pulp with juicy raspberry.",descKa:"მწიფე საზამთროს რბილობი და წვნიანი ჟოლო."},
  {name:"Fresh Mint",ru:"Мята",descRu:"Чистый свежий мятный вкус с прохладным характером.",descEn:"A clean, fresh mint flavor with a cool character.",descKa:"სუფთა, ახალი პიტნის გემო გამაგრილებელი ხასიათით."},
  {name:"Watermelon",ru:"Арбуз",descRu:"Сочный вкус спелого арбуза.",descEn:"The juicy taste of ripe watermelon.",descKa:"მწიფე საზამთროს წვნიანი გემო."},
  {name:"Strawberry Kiwi",ru:"Клубника Киви",descRu:"Яркое сочетание сладкой клубники и киви.",descEn:"A bright combination of sweet strawberry and kiwi.",descKa:"ტკბილი მარწყვისა და კივის გამოკვეთილი კომბინაცია."},
  {name:"Cherry",ru:"Вишня",descRu:"Насыщенный вкус спелой вишни с лёгкой кислинкой.",descEn:"A rich ripe-cherry flavor with a light tart note.",descKa:"მწიფე ალუბლის მდიდარი გემო მსუბუქი მომჟავო ნოტით."},
  {name:"Blueberry Raspberry",ru:"Черника Малина",descRu:"Спелая черника с яркими нотами малины.",descEn:"Ripe blueberry with bright raspberry notes.",descKa:"მწიფე მოცვი ჟოლოს მკვეთრი ნოტებით."},
  {name:"Kiwi Passion Guava",ru:"Киви Маракуйя Гуава",descRu:"Кисловатый киви, сладкая гуава и сочная маракуйя.",descEn:"Tart kiwi blended with sweet guava and juicy passion fruit.",descKa:"მომჟავო კივი ტკბილ გუავასა და წვნიან მარაკუიასთან ერთად."},
  {name:"Grape Apple",ru:"Виноград Яблоко",descRu:"Насыщенный тёмный виноград с кислинкой зелёного яблока.",descEn:"Rich dark grape with the tartness of green apple.",descKa:"მუქი ყურძნის მდიდარი გემო მწვანე ვაშლის მომჟავო ნოტით."},
  {name:"Apple Wave",ru:"Яблочная Волна",descRu:"Знакомый яблочный вкус в стиле освежающего энергетика.",descEn:"A familiar apple flavor with a refreshing energy-drink-style character.",descKa:"ნაცნობი ვაშლის გემო გამაგრილებელი ენერგეტიკული სასმლის სტილში."}
];


const ui = {
  ru:{ageTitle:"Пожалуйста, подтвердите ваш возраст",ageText:"Этот сайт содержит информацию о никотиновой продукции. Доступ разрешён только лицам, достигшим законного возраста в своей стране.",ageYes:"Мне есть законный возраст",ageNo:"Мне нет законного возраста",ageNote:"Никотин вызывает зависимость. Соблюдайте местные законы.",heroTitle:"WAKA VAPE<br><span>приветствует вас</span>",heroText:"Продажа WAKA по странам СНГ с платной или бесплатной доставкой в зависимости от вашего местоположения.",viewCatalog:"Смотреть каталог",aboutUs:"О нас",legalHero:"Никотиновая продукция. Только для совершеннолетних по законам вашей страны.",puffs:"затяжек",catalogTitle:"Каталог вкусов",catalogInfo:"9 вкусов • до 10 000 затяжек",statPuffs:"до затяжек",statLiquid:"объём жидкости*",statBattery:"аккумулятор*",statCoil:"система испарения*",deliveryTitle:"Доставка и информация",deliveryText:"Условия доставки, наличие, цены и допустимость никотиновой продукции зависят от страны и действующего законодательства. Уточняйте детали перед заказом.",contacts:"Контакты и локации",footer:"Информационная страница. Никотин вызывает зависимость. Не является медицинской рекомендацией.",about:"О нас",catalog:"Каталог",language:"Язык",aboutTitle:"О нас",aboutBody:"Мы собираем актуальный каталог WAKA и помогаем уточнить наличие, стоимость и условия доставки.",locations:"Локации",phone:"Телефон",editNote:"Замените эти контактные данные на свои в файле index.html.",priceNote:"Цена в каталоге — эквивалент $25 по курсу, зафиксированному при создании этой версии сайта. Крепость никотина зависит от рынка.",more:"Подробнее",price:"Цена: 2 123 ₽"},
  en:{ageTitle:"Please confirm your age",ageText:"This site contains information about nicotine products. Access is only for people who have reached the legal age in their country.",ageYes:"I am of legal age",ageNo:"I am not of legal age",ageNote:"Nicotine is addictive. Follow local laws.",heroTitle:"WAKA VAPE<br><span>welcome</span>",heroText:"WAKA sales across CIS countries with paid or free delivery depending on your location.",viewCatalog:"View catalog",aboutUs:"About us",legalHero:"Nicotine products. For adults of legal age in your country only.",puffs:"puffs",catalogTitle:"Flavor catalog",catalogInfo:"9 flavors • up to 10,000 puffs",statPuffs:"up to puffs",statLiquid:"e-liquid volume*",statBattery:"battery*",statCoil:"vapor system*",deliveryTitle:"Delivery & information",deliveryText:"Delivery terms, availability, pricing and legality of nicotine products depend on your country and current laws. Confirm details before ordering.",contacts:"Contacts & locations",footer:"Information page. Nicotine is addictive. Not medical advice.",about:"About us",catalog:"Catalog",language:"Language",aboutTitle:"About us",aboutBody:"We maintain a WAKA catalog and help clarify availability, pricing and delivery conditions.",locations:"Locations",phone:"Phone",editNote:"Replace these contact details with your own in index.html.",priceNote:"Catalog price is the $25 base converted using the exchange rate fixed for this site version. Nicotine strength varies by market.",more:"Details",price:"Price: $25"},
  ka:{ageTitle:"გთხოვთ, დაადასტუროთ თქვენი ასაკი",ageText:"ეს საიტი შეიცავს ინფორმაციას ნიკოტინის პროდუქტების შესახებ. წვდომა ნებადართულია მხოლოდ თქვენს ქვეყანაში კანონით დაშვებული ასაკის პირებისთვის.",ageYes:"მე ვარ კანონით დაშვებულ ასაკში",ageNo:"მე არ ვარ კანონით დაშვებულ ასაკში",ageNote:"ნიკოტინი იწვევს დამოკიდებულებას. დაიცავით ადგილობრივი კანონები.",heroTitle:"WAKA VAPE<br><span>გესალმებათ</span>",heroText:"WAKA-ს გაყიდვა დსთ-ს ქვეყნებში ფასიანი ან უფასო მიწოდებით, თქვენი მდებარეობის მიხედვით.",viewCatalog:"კატალოგის ნახვა",aboutUs:"ჩვენს შესახებ",legalHero:"ნიკოტინის პროდუქცია. მხოლოდ თქვენი ქვეყნის კანონით დაშვებული სრულწლოვანი პირებისთვის.",puffs:"ნაფასი",catalogTitle:"არომატების კატალოგი",catalogInfo:"9 არომატი • 10 000-მდე ნაფასი",statPuffs:"მაქს. ნაფასი",statLiquid:"სითხის მოცულობა*",statBattery:"ელემენტი*",statCoil:"აორთქლების სისტემა*",deliveryTitle:"მიწოდება და ინფორმაცია",deliveryText:"მიწოდების პირობები, მარაგი, ფასები და ნიკოტინის პროდუქციის კანონიერება დამოკიდებულია ქვეყანასა და მოქმედ კანონებზე. შეკვეთამდე დააზუსტეთ დეტალები.",contacts:"კონტაქტები და ლოკაციები",footer:"საინფორმაციო გვერდი. ნიკოტინი იწვევს დამოკიდებულებას. ეს არ არის სამედიცინო რჩევა.",about:"ჩვენს შესახებ",catalog:"კატალოგი",language:"ენა",aboutTitle:"ჩვენს შესახებ",aboutBody:"ჩვენ ვაგროვებთ WAKA-ს აქტუალურ კატალოგს და ვაზუსტებთ მარაგს, ფასებსა და მიწოდების პირობებს.",locations:"ლოკაციები",phone:"ტელეფონი",editNote:"index.html ფაილში ჩაანაცვლეთ ეს საკონტაქტო მონაცემები თქვენი მონაცემებით.",priceNote:"კატალოგის ფასი არის $25-ის ეკვივალენტი ამ ვერსიის შექმნისას დაფიქსირებული კურსით. ნიკოტინის სიმძლავრე ბაზრის მიხედვით განსხვავდება.",more:"დეტალები",price:"ფასი: 65.55 ₾"}
};

let lang = localStorage.getItem("wakaLang") || "ru";
const img = "https://www.wakavaping.com/cdn/shop/files/pa10000.jpg?v=1688106071";
products.forEach(p => p.image = img);

function setText(){
  document.documentElement.lang = lang === "ka" ? "ka" : lang;
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key=el.dataset.i18n;
    if(ui[lang][key]!==undefined) el.innerHTML=ui[lang][key];
  });
  document.getElementById("langTop").textContent=lang.toUpperCase();
  renderProducts();
}

function currencyLabel(){
  if(lang==="ru") return "2 123 ₽";
  if(lang==="ka") return "65.55 ₾";
  return "$25";
}

function localizedProductName(p){
  if(lang==="ru") return p.ru;
  if(lang==="ka") return p.name;
  return p.name;
}

function localizedProductDesc(p){
  if(lang==="ru") return p.descRu;
  if(lang==="ka") return p.descKa;
  return p.descEn;
}

function renderProducts(){
  const grid=document.getElementById("productGrid");
  grid.innerHTML=products.map((p,i)=>`
    <article class="product-card" data-index="${i}">
      <div class="product-photo">
        <img src="${p.image}" alt="WAKA soPro PA10000 — ${localizedProductName(p)}" loading="lazy">
      </div>
      <div class="product-name">${localizedProductName(p)}</div>
      <div class="product-desc">${localizedProductDesc(p)}</div>
      <div class="card-bottom">
        <div class="price">${currencyLabel()}</div>
        <button class="more" data-product="${i}">${ui[lang].more}</button>
      </div>
    </article>`).join("");
  grid.querySelectorAll(".more").forEach(b=>b.addEventListener("click",()=>openProduct(+b.dataset.product)));
}
function openProduct(i){
  const p=products[i];
  document.getElementById("modalTitle").textContent=localizedProductName(p);
  document.getElementById("modalDesc").textContent=localizedProductDesc(p);
  document.getElementById("modalImage").src=p.image;
  document.getElementById("modalImage").alt="WAKA soPro PA10000 "+localizedProductName(p);
  document.getElementById("modalPrice").textContent=currencyLabel();
  document.getElementById("modalTags").innerHTML=[
    "WAKA soPro PA10000",
    "10 000 "+(lang==="ru"?"затяжек":lang==="en"?"puffs":"ნაფასი"),
    "18 ml*","850 mAh*","DUAL MESH*","USB-C*"
  ].map(x=>`<span class="tag">${x}</span>`).join("");
  document.getElementById("productModal").classList.add("show");
}
function openDrawer(){document.getElementById("drawer").classList.add("open");document.getElementById("overlay").classList.add("show")}
function closeDrawer(){document.getElementById("drawer").classList.remove("open");document.getElementById("overlay").classList.remove("show")}
function openAbout(){closeDrawer();document.getElementById("aboutModal").classList.add("show")}
function goCatalog(){closeDrawer();document.getElementById("catalogSection").scrollIntoView({behavior:"smooth"})}

document.getElementById("menuBtn").onclick=openDrawer;
document.getElementById("closeDrawer").onclick=closeDrawer;
document.getElementById("overlay").onclick=closeDrawer;
document.querySelectorAll('[data-action="about"]').forEach(b=>b.addEventListener("click",openAbout));
document.querySelectorAll('[data-action="catalog"]').forEach(b=>b.addEventListener("click",goCatalog));
document.querySelectorAll("[data-lang]").forEach(b=>b.addEventListener("click",()=>{
  lang=b.dataset.lang;localStorage.setItem("wakaLang",lang);setText();closeDrawer();
}));
document.getElementById("langTop").onclick=()=>{lang=lang==="ru"?"en":lang==="en"?"ka":"ru";localStorage.setItem("wakaLang",lang);setText()};
document.querySelectorAll("[data-close]").forEach(b=>b.addEventListener("click",()=>document.getElementById(b.dataset.close).classList.remove("show")));
document.querySelectorAll(".modal").forEach(m=>m.addEventListener("click",e=>{if(e.target===m)m.classList.remove("show")}));

const gate=document.getElementById("ageGate");
if(localStorage.getItem("wakaAgeConfirmed")==="yes") gate.classList.add("hidden");
document.getElementById("ageYes").onclick=()=>{localStorage.setItem("wakaAgeConfirmed","yes");gate.classList.add("hidden")};
document.getElementById("ageNo").onclick=()=>{document.body.innerHTML="<main style='min-height:100vh;display:grid;place-items:center;padding:30px;text-align:center;background:#050a12;color:white;font-family:Inter,sans-serif'><div><h1>Access restricted</h1><p>Please leave this site if you are not of legal age to access nicotine-product information in your country.</p></div></main>"};

setText();
