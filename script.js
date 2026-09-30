const products10 = [
  ["Raspberry Watermelon","Малина Арбуз","Мякоть спелого арбуза и сочная малина.","Ripe watermelon with juicy raspberry.","მწიფე საზამთრო და წვნიანი ჟოლო."],
  ["Fresh Mint","Мята","Чистый свежий мятный вкус с прохладным характером.","A clean, fresh mint flavor with a cool character.","სუფთა ახალი პიტნის გემო გამაგრილებელი ხასიათით."],
  ["Watermelon","Арбуз","Сочный вкус спелого арбуза.","The juicy taste of ripe watermelon.","მწიფე საზამთროს წვნიანი გემო."],
  ["Strawberry Kiwi","Клубника Киви","Яркое сочетание сладкой клубники и киви.","A bright combination of sweet strawberry and kiwi.","ტკბილი მარწყვისა და კივის გამოკვეთილი კომბინაცია."],
  ["Cherry","Вишня","Насыщенный вкус спелой вишни с лёгкой кислинкой.","A rich ripe-cherry flavor with a light tart note.","მწიფე ალუბლის მდიდარი გემო მსუბუქი მომჟავო ნოტით."],
  ["Blueberry Raspberry","Черника Малина","Спелая черника с яркими нотами малины.","Ripe blueberry with bright raspberry notes.","მწიფე მოცვი ჟოლოს მკვეთრი ნოტებით."],
  ["Kiwi Passion Guava","Киви Маракуйя Гуава","Кисловатый киви, сладкая гуава и сочная маракуйя.","Tart kiwi blended with sweet guava and juicy passion fruit.","მომჟავო კივი ტკბილ გუავასა და წვნიან მარაკუიასთან ერთად."],
  ["Grape Apple","Виноград Яблоко","Насыщенный виноград с кислинкой зелёного яблока.","Rich grape with the tartness of green apple.","მდიდარი ყურძენი მწვანე ვაშლის მომჟავო ნოტით."],
  ["Apple Wave","Яблочная Волна","Яркий яблочный вкус с освежающим характером.","A bright apple flavor with a refreshing character.","ვაშლის მკვეთრი გემო გამაგრილებელი ხასიათით."]
].map(x=>({name:x[0],ru:x[1],descRu:x[2],descEn:x[3],descKa:x[4]}));

const products30 = [
  ["Strawberry Watermelon Ice","Клубника Арбуз Холодок","Сладкая клубника и сочный арбуз с прохладным послевкусием.","Sweet strawberry and juicy watermelon with an icy finish.","ტკბილი მარწყვი და წვნიანი საზამთრო გრილი დაბოლოებით."],
  ["Raspberry Cola","Малиновая Кола","Сладкая малина с узнаваемыми коловыми нотами.","Sweet raspberry with a recognizable cola character.","ტკბილი ჟოლო გამოკვეთილი კოლას ნოტებით."],
  ["Juicy Grape Ice","Сочный Виноград Холодок","Сочный виноград с холодящим эффектом.","Juicy grape with a cool icy finish.","წვნიანი ყურძენი გამაგრილებელი დაბოლოებით."],
  ["Cherry Soda Ice","Вишнёвая Сода Холодок","Сладкая вишнёвая газировка с прохладной нотой.","Sweet cherry soda with a cool finish.","ტკბილი ალუბლის გაზიანი სასმლის გემო გრილი ნოტით."],
  ["Watermelon Ice","Арбуз Холодок","Сочный арбуз с прохладным послевкусием.","Juicy watermelon with an icy finish.","წვნიანი საზამთრო გრილი დაბოლოებით."],
  ["Banana Coconut","Банан Кокос","Мягкое сочетание сладкого банана и кокоса.","A smooth blend of sweet banana and coconut.","ტკბილი ბანანისა და ქოქოსის რბილი კომბინაცია."],
  ["Sour Blueberry Raspberry Ice","Кислая Черника Малина Холодок","Кисловатая черника и малина с холодящим акцентом.","Tart blueberry and raspberry with an icy accent.","მომჟავო მოცვი და ჟოლო გამაგრილებელი აქცენტით."],
  ["Strawberry Mango Ice","Клубника Манго Холодок","Сладкая клубника и сочное манго с прохладной нотой.","Sweet strawberry and juicy mango with a cool finish.","ტკბილი მარწყვი და წვნიანი მანგო გრილი ნოტით."],
  ["Strawberry Kiwi Ice","Клубника Киви Холодок","Клубника и киви с прохладным послевкусием.","Strawberry and kiwi with an icy finish.","მარწყვი და კივი გრილი დაბოლოებით."],
  ["Guava Raspberry Ice","Гуава Малина Холодок","Сладкая гуава и сочная малина с прохладой.","Sweet guava and juicy raspberry with a cool finish.","ტკბილი გუავა და წვნიანი ჟოლო გამაგრილებელი დაბოლოებით."],
  ["Peach Blue Raspberry Ice","Персик Голубая Малина Холодок","Сочный персик и яркая голубая малина с холодком.","Juicy peach and bright blue raspberry with an icy finish.","წვნიანი ატამი და გამოკვეთილი ლურჯი ჟოლო გრილი დაბოლოებით."],
  ["Triple Berry Ice","Тройная Ягода Холодок","Микс трёх ягод с прохладным акцентом.","A mix of three berries with a cool accent.","სამი კენკრის ნაზავი გამაგრილებელი აქცენტით."],
  ["Coconut Water","Кокосовая Вода","Лёгкий и свежий вкус кокосовой воды.","A light and refreshing coconut-water flavor.","მსუბუქი და გამაგრილებელი ქოქოსის წყლის გემო."],
  ["Mint","Мята","Чистый мятный вкус с прохладным характером.","A clean mint flavor with a cool character.","სუფთა პიტნის გემო გამაგრილებელი ხასიათით."],
  ["Fresh Mint","Свежая Мята","Выраженная свежая мята с прохладным послевкусием.","Fresh, pronounced mint with a cool finish.","გამოკვეთილი ახალი პიტნა გრილი დაბოლოებით."]
].map(x=>({name:x[0],ru:x[1],descRu:x[2],descEn:x[3],descKa:x[4]}));

const TITAN_GENERIC="https://www.theoriginalvape.com/web/image/product.product/1923/image_1920?unique=39c7895";
// Real WAKA soPro Titan 30K device photos. Each catalog card gets a visible Titan image.
const TITAN_PHOTOS=[
 "https://www.theoriginalvape.com/web/image/product.product/1923/image_1920?unique=39c7895",
 "https://invapesgt.com/cdn/shop/files/2_93cb2148-6e3c-4cde-91d4-3ae10c86d5ae.jpg?v=1772237754&width=1024",
 "https://vapecityy.com/cdn/shop/files/IMG-9342.png?v=1728077172&width=1445"
];
const WAKA10_PHOTOS=[
 "assets/raspberry-watermelon.jpg",
 "assets/fresh-mint.jpg",
 "assets/watermelon.jpg",
 "assets/strawberry-kiwi.jpg",
 "assets/cherry.jpg",
 "assets/blueberry-raspberry.jpg",
 "assets/kiwi-passion-guava.jpg",
 "assets/grape-apple.jpg",
 "assets/apple-wave.jpg"
];

function productImage(key,p,i=0){
  if(key==="10000") return WAKA10_PHOTOS[i % WAKA10_PHOTOS.length];
  if(key==="30000") return TITAN_PHOTOS[i % TITAN_PHOTOS.length];
  return MODEL[key]?.image || "https://www.wakavaping.com/cdn/shop/files/pa10000.jpg?v=1688106071";
}

const MODEL={
 "10000":{title:"Waka 10 000",eyebrow:"WAKA SO PRO",image:"https://www.wakavaping.com/cdn/shop/files/pa10000.jpg?v=1688106071",products:products10,puffs:"10 000",priceUsd:25,infoRu:"9 вкусов • до 10 000 затяжек",infoEn:"9 flavors • up to 10,000 puffs",infoKa:"9 არომატი • 10 000-მდე ნაფასი"},
 "30000":{title:"Waka 30 000",eyebrow:"WAKA SO PRO TITAN",image:TITAN_GENERIC,products:products30,puffs:"30 000",priceUsd:32,infoRu:"15 вкусов • до 30 000 затяжек",infoEn:"15 flavors • up to 30,000 puffs",infoKa:"15 არომატი • 30 000-მდე ნაფასი"}
};

const ui={
ru:{home:"Главная",about:"О нас",catalog:"Каталог",language:"Язык",heroTitle:"WAKA VAPE<br><span>приветствует вас</span>",heroText:"Продажа WAKA по странам СНГ с платной или бесплатной доставкой в зависимости от вашего местоположения.",chooseMenu:"Выберите меню, перейдите в каталог",chooseMenuText:"Откройте ☰ слева сверху и выберите нужную модель WAKA.",viewCatalog:"Смотреть каталог",aboutUs:"О нас",legalHero:"Никотиновая продукция. Только для совершеннолетних по законам вашей страны.",catalogTitle:"Каталог",catalogChoose:"Выберите модель",model10Text:"Каталог вкусов WAKA 10 000.",model30Text:"Каталог вкусов WAKA 30 000.",backToCatalog:"Каталог",statPuffs:"до затяжек",statCharge:"зарядка*",statCoil:"система испарения*",statBrand:"официальная линейка*",deliveryTitle:"Доставка и информация",deliveryText:"Условия доставки, наличие, цены и допустимость никотиновой продукции зависят от страны и действующего законодательства. Уточняйте детали перед заказом.",contacts:"Контакты и локации",footer:"Информационная страница. Никотин вызывает зависимость. Не является медицинской рекомендацией.",aboutTitle:"О нас",aboutBody:"Мы собираем актуальный каталог WAKA и помогаем уточнить наличие, стоимость и условия доставки.",locations:"Локации",priceNote:"Цена в каталоге — эквивалент $25 по курсу, зафиксированному при создании этой версии сайта. Крепость никотина и характеристики могут зависеть от рынка.",more:"Подробнее",order:"Заказать",orderFrom:"Откуда вы",orderFromText:"Выберите страну доставки.",chooseCity:"Выберите город",quantityTitle:"Уточните кол-во",orderSeller:"Заказать у продавца",other:"Другой",price:"2 123 ₽"},
en:{home:"Home",about:"About us",catalog:"Catalog",language:"Language",heroTitle:"WAKA VAPE<br><span>welcome</span>",heroText:"WAKA sales across CIS countries with paid or free delivery depending on your location.",chooseMenu:"Choose the menu, go to the catalog",chooseMenuText:"Open ☰ in the top-left and choose the WAKA model you need.",viewCatalog:"View catalog",aboutUs:"About us",legalHero:"Nicotine products. For adults of legal age in your country only.",catalogTitle:"Catalog",catalogChoose:"Choose a model",model10Text:"WAKA 10,000 flavor catalog.",model30Text:"WAKA 30,000 flavor catalog.",backToCatalog:"Catalog",statPuffs:"up to puffs",statCharge:"charging*",statCoil:"vapor system*",statBrand:"official range*",deliveryTitle:"Delivery & information",deliveryText:"Delivery terms, availability, pricing and legality of nicotine products depend on your country and current laws. Confirm details before ordering.",contacts:"Contacts & locations",footer:"Information page. Nicotine is addictive. Not medical advice.",aboutTitle:"About us",aboutBody:"We maintain a WAKA catalog and help clarify availability, pricing and delivery conditions.",locations:"Locations",phone:"Phone",editNote:"Replace these contact details with your own in index.html.",priceNote:"Catalog price is the $25 base converted using the exchange rate fixed for this site version. Nicotine strength and specifications may vary by market.",more:"Details",order:"Order",orderFrom:"Where are you from?",orderFromText:"Choose your delivery country.",chooseCity:"Choose your city",quantityTitle:"Specify quantity",orderSeller:"Order from seller",other:"Other",price:"$25"},
ka:{home:"მთავარი",about:"ჩვენს შესახებ",catalog:"კატალოგი",language:"ენა",heroTitle:"WAKA VAPE<br><span>გესალმებათ</span>",heroText:"WAKA-ს გაყიდვა დსთ-ს ქვეყნებში ფასიანი ან უფასო მიწოდებით, თქვენი მდებარეობის მიხედვით.",chooseMenu:"აირჩიეთ მენიუ და გადადით კატალოგში",chooseMenuText:"გახსენით ☰ ზედა მარცხენა კუთხეში და აირჩიეთ სასურველი WAKA მოდელი.",viewCatalog:"კატალოგის ნახვა",aboutUs:"ჩვენს შესახებ",legalHero:"ნიკოტინის პროდუქცია. მხოლოდ თქვენი ქვეყნის კანონით დაშვებული სრულწლოვანი პირებისთვის.",catalogTitle:"კატალოგი",catalogChoose:"აირჩიეთ მოდელი",model10Text:"WAKA 10 000-ის არომატების კატალოგი.",model30Text:"WAKA 30 000-ის არომატების კატალოგი.",backToCatalog:"კატალოგი",statPuffs:"მაქს. ნაფასი",statCharge:"დამუხტვა*",statCoil:"აორთქლების სისტემა*",statBrand:"ოფიციალური ხაზი*",deliveryTitle:"მიწოდება და ინფორმაცია",deliveryText:"მიწოდების პირობები, მარაგი, ფასები და ნიკოტინის პროდუქციის კანონიერება დამოკიდებულია ქვეყანასა და მოქმედ კანონებზე. შეკვეთამდე დააზუსტეთ დეტალები.",contacts:"კონტაქტები და ლოკაციები",footer:"საინფორმაციო გვერდი. ნიკოტინი იწვევს დამოკიდებულებას. ეს არ არის სამედიცინო რჩევა.",aboutTitle:"ჩვენს შესახებ",aboutBody:"ჩვენ ვაგროვებთ WAKA-ს აქტუალურ კატალოგს და ვაზუსტებთ მარაგს, ფასებსა და მიწოდების პირობებს.",locations:"ლოკაციები",priceNote:"კატალოგის ფასი არის $25-ის ეკვივალენტი ამ ვერსიის შექმნისას დაფიქსირებული კურსით. ნიკოტინის სიმძლავრე და მახასიათებლები ბაზრის მიხედვით შეიძლება განსხვავდებოდეს.",more:"დეტალები",order:"შეკვეთა",orderFrom:"საიდან ხართ?",orderFromText:"აირჩიეთ მიწოდების ქვეყანა.",chooseCity:"აირჩიეთ ქალაქი",quantityTitle:"მიუთითეთ რაოდენობა",orderSeller:"შეუკვეთეთ გამყიდველს",other:"სხვა",price:"65.55 ₾"}
};

let lang=localStorage.getItem("wakaLang")||null;
let currentModel=null;

function nameOf(p){return lang==="ru"?p.ru:p.name}
function descOf(p){return lang==="ru"?p.descRu:lang==="ka"?p.descKa:p.descEn}
function price(key=currentModel){
 const usd=MODEL[key]?.priceUsd ?? 25;
 if(lang==="en") return "$"+usd;
 if(lang==="ru") return new Intl.NumberFormat("ru-RU").format(Math.round(usd*84.9057))+" ₽";
 return new Intl.NumberFormat("ka-GE",{minimumFractionDigits:2,maximumFractionDigits:2}).format(usd*2.6218)+" ₾";
}
function modelInfo(m){return lang==="ru"?m.infoRu:lang==="ka"?m.infoKa:m.infoEn}

function setText(){
 document.documentElement.lang=lang==="ka"?"ka":lang;
 document.querySelectorAll("[data-i18n]").forEach(el=>{let k=el.dataset.i18n;if(ui[lang][k]!==undefined)el.innerHTML=ui[lang][k]});
 document.getElementById("langTop").textContent=lang.toUpperCase();
 if(currentModel)renderProducts(currentModel);
}

const orderLocations={ru:[{country:"Россия",cities:["Москва","Питер","Новосибирск"]},{country:"Казахстан",cities:["Алмата","Астана"]},{country:"Грузия",cities:[]}],en:[{country:"Russia",cities:["Moscow","St. Petersburg","Novosibirsk"]},{country:"Kazakhstan",cities:["Almaty","Astana"]},{country:"Georgia",cities:[]}],ka:[{country:"რუსეთი",cities:["მოსკოვი","პეტერბურგი","ნოვოსიბირსკი"]},{country:"ყაზახეთი",cities:["ალმათი","ასტანა"]},{country:"საქართველო",cities:[]}]};
let orderState={productIndex:null,country:null,city:null,quantity:1};
function openOrder(i,push=true){
 orderState={productIndex:i,country:null,city:null,quantity:1};
 renderCountryChoices();showOrderStep("orderStepLocation");
 document.getElementById("orderModal").classList.add("show");
 if(push) historyPush({view:"order",model:currentModel,product:i,step:"orderStepLocation"});
}
function showOrderStep(id,push=true){
 document.querySelectorAll("#orderModal .order-step").forEach(s=>s.classList.add("hidden"));
 document.getElementById(id).classList.remove("hidden");
 if(push) historyPush({view:"order",model:currentModel,product:orderState.productIndex,step:id});
}
function renderCountryChoices(){const w=document.getElementById("countryChoices");w.innerHTML=(orderLocations[lang]||orderLocations.en).map((x,i)=>`<button type="button" class="order-choice" data-country-index="${i}">${x.country}</button>`).join("");w.querySelectorAll("[data-country-index]").forEach(b=>b.onclick=()=>selectCountry(+b.dataset.countryIndex))}
function selectCountry(i){
 const x=(orderLocations[lang]||orderLocations.en)[i];
 orderState.country=x.country;
 if(!x.cities.length){orderState.city=x.country;showQuantityStep();return}
 document.getElementById("selectedCountryText").textContent=x.country;
 document.getElementById("cityChoices").innerHTML=x.cities.map(c=>`<button type="button" class="order-choice" data-city="${c}">${c}</button>`).join("");
 document.querySelectorAll("#cityChoices [data-city]").forEach(b=>b.onclick=()=>{orderState.city=b.dataset.city;showQuantityStep()});
 showOrderStep("orderStepCity");
}
function showQuantityStep(){
 const m=MODEL[currentModel],p=m.products[orderState.productIndex];
 orderState.quantity=1;
 document.getElementById("orderProductText").textContent=`${m.title} — ${nameOf(p)}`;
 document.getElementById("quantityValue").textContent="1";
 showOrderStep("orderStepQuantity");
}
function finishOrder(){const m=MODEL[currentModel],p=m.products[orderState.productIndex];const msg=["Здравствуйте! Хочу заказать:",`Товар: ${m.title}`,`Вкус: ${nameOf(p)}`,`Количество: ${orderState.quantity}`,`Страна: ${orderState.country}`,`Город: ${orderState.city}`].join("\n");window.open("https://t.me/lnternationa1?text="+encodeURIComponent(msg),"_blank","noopener,noreferrer")}

function renderProducts(key){
 const m=MODEL[key]; currentModel=key;
 document.getElementById("modelEyebrow").textContent=m.eyebrow;
 document.getElementById("productsTitle").textContent=m.title;
 document.getElementById("productsInfo").textContent=modelInfo(m);
 document.getElementById("productGrid").innerHTML=m.products.map((p,i)=>`
 <article class="product-card">
  <div class="product-photo"><img src="${productImage(key,p,i)}" alt="${m.title} — ${nameOf(p)}" loading="lazy"></div>
  <div class="product-name">${nameOf(p)}</div>
  <div class="product-desc">${descOf(p)}</div>
  <div class="card-bottom"><div class="price">${price(key)}</div><div class="card-actions"><button class="more" data-product="${i}">${ui[lang].more}</button><button class="order-btn" data-order="${i}">${ui[lang].order}</button></div></div>
 </article>`).join("");
 document.querySelectorAll(".more").forEach(b=>b.onclick=()=>openProduct(+b.dataset.product));
 document.querySelectorAll(".order-btn").forEach(b=>b.onclick=()=>openOrder(+b.dataset.order));
}

function showSection(id){
 ["homeSection","catalogSection","productsSection"].forEach(x=>document.getElementById(x).classList.add("hidden-section"));
 document.getElementById(id).classList.remove("hidden-section");
 window.scrollTo({top:0,behavior:"smooth"});
}

let restoringHistory=false;

function historyPush(state){
 if(restoringHistory) return;
 const next={...state};
 history.pushState(next,"",location.href.split("#")[0]);
}

function currentUiState(){
 if(document.getElementById("orderModal").classList.contains("show")){
   const step=[...document.querySelectorAll("#orderModal .order-step")].find(s=>!s.classList.contains("hidden"));
   return {view:"order", model:currentModel, product:orderState.productIndex, step:step?.id||"orderStepLocation"};
 }
 if(document.getElementById("productModal").classList.contains("show"))
   return {view:"product", model:currentModel, product:document.querySelector("#productModal")?.dataset.productIndex};
 if(document.getElementById("aboutModal").classList.contains("show"))
   return {view:"about"};
 if(document.getElementById("drawer").classList.contains("open"))
   return {view:"drawer"};
 if(!document.getElementById("productsSection").classList.contains("hidden-section"))
   return {view:"products", model:currentModel};
 if(!document.getElementById("catalogSection").classList.contains("hidden-section"))
   return {view:"catalog"};
 return {view:"home"};
}

function goHome(push=true){
 closeDrawer(); closeAllModals(); currentModel=null; showSection("homeSection");
 if(push) historyPush({view:"home"});
}
function goCatalog(push=true){
 closeDrawer(); closeAllModals(); currentModel=null; showSection("catalogSection");
 if(push) historyPush({view:"catalog"});
}
function goProducts(k,push=true){
 closeDrawer(); closeAllModals(); renderProducts(k); showSection("productsSection");
 if(push) historyPush({view:"products",model:k});
}

function openProduct(i,push=true){
 const m=MODEL[currentModel],p=m.products[i];
 document.getElementById("modalEyebrow").textContent=m.eyebrow;
 document.getElementById("modalTitle").textContent=nameOf(p);
 document.getElementById("modalDesc").textContent=descOf(p);
 document.getElementById("modalImage").src=productImage(currentModel,p,i);
 document.getElementById("modalPrice").textContent=price(currentModel);
 document.getElementById("modalTags").innerHTML=[
  m.title,m.puffs+(lang==="ru"?" затяжек":lang==="en"?" puffs":" ნაფასი"),
  currentModel==="30000"?"850 mAh • Type-C • Dual Mesh":"Dual Mesh • Type-C"
 ].map(x=>`<span class="tag">${x}</span>`).join("");
 document.getElementById("productModal").dataset.productIndex=i;
 document.getElementById("productModal").classList.add("show");
 if(push) historyPush({view:"product",model:currentModel,product:i});
}

function openDrawer(push=true){
 document.getElementById("drawer").classList.add("open");
 document.getElementById("overlay").classList.add("show");
 if(push) historyPush({view:"drawer"});
}
function closeDrawer(){document.getElementById("drawer").classList.remove("open");document.getElementById("overlay").classList.remove("show")}
function openAbout(push=true){
 closeDrawer();
 document.getElementById("aboutModal").classList.add("show");
 if(push) historyPush({view:"about"});
}

function closeAllModals(){
 document.querySelectorAll(".modal").forEach(m=>m.classList.remove("show"));
 closeDrawer();
}

document.getElementById("menuBtn").onclick=()=>openDrawer();
document.getElementById("closeDrawer").onclick=()=>history.back();
document.getElementById("overlay").onclick=()=>history.back();
document.querySelectorAll('[data-action="home"]').forEach(b=>b.onclick=()=>goHome());
document.querySelectorAll('[data-action="about"]').forEach(b=>b.onclick=()=>openAbout());
document.querySelectorAll('[data-action="catalog"]').forEach(b=>b.onclick=()=>goCatalog());
document.querySelectorAll(".model-card").forEach(c=>c.onclick=()=>goProducts(c.dataset.model));
document.getElementById("backToCatalog").onclick=()=>goCatalog();
document.getElementById("otherCountryBtn").onclick=()=>{
 orderState.country=ui[lang].other;orderState.city=ui[lang].other;showQuantityStep();
};
document.getElementById("quantityMinus").onclick=()=>{orderState.quantity=Math.max(1,orderState.quantity-1);document.getElementById("quantityValue").textContent=orderState.quantity};
document.getElementById("quantityPlus").onclick=()=>{orderState.quantity+=1;document.getElementById("quantityValue").textContent=orderState.quantity};
document.getElementById("sellerOrderBtn").onclick=finishOrder;

document.querySelectorAll("[data-lang]").forEach(b=>b.onclick=()=>{
 lang=b.dataset.lang;localStorage.setItem("wakaLang",lang);setText();closeDrawer();if(document.getElementById("orderModal").classList.contains("show"))renderCountryChoices();
});
document.getElementById("langTop").onclick=()=>{
 const order=["en","ru","ka"];lang=order[(order.indexOf(lang)+1)%3];localStorage.setItem("wakaLang",lang);setText();if(document.getElementById("orderModal").classList.contains("show"))renderCountryChoices();
};
document.querySelectorAll("[data-close]").forEach(b=>b.onclick=()=>history.back());
document.querySelectorAll(".modal").forEach(m=>m.onclick=e=>{if(e.target===m)history.back()});


function restoreHistory(state){
 restoringHistory=true;
 closeAllModals();
 if(state?.view==="drawer"){
   showSection("homeSection"); openDrawer(false);
 }else if(state?.view==="about"){
   showSection(state?.model?"productsSection":"homeSection");
   if(state?.model){currentModel=state.model;renderProducts(state.model);}
   openAbout(false);
 }else if(state?.view==="catalog"){
   goCatalog(false);
 }else if(state?.view==="products"){
   goProducts(state.model||"10000",false);
 }else if(state?.view==="product"){
   goProducts(state.model||"10000",false);
   openProduct(Number(state.product)||0,false);
 }else if(state?.view==="order"){
   goProducts(state.model||"10000",false);
   openOrder(Number(state.product)||0,false);
   if(state.step && state.step!=="orderStepLocation"){
     if(state.step==="orderStepCity"){
       const locations=orderLocations[lang]||orderLocations.en;
       const country=orderState.country||locations[0]?.country;
       const idx=locations.findIndex(x=>x.country===country);
       if(idx>=0) selectCountry(idx);
     }
     if(state.step==="orderStepQuantity") showQuantityStep();
   }
 }else{
   goHome(false);
 }
 restoringHistory=false;
}

window.addEventListener("popstate",e=>{
 restoreHistory(e.state||{view:"home"});
});

document.querySelectorAll("[data-first-lang]").forEach(b=>b.onclick=()=>{
 lang=b.dataset.firstLang;localStorage.setItem("wakaLang",lang);
 document.getElementById("languageScreen").classList.add("hidden");
 document.body.classList.add("site-ready");setText();
 renderSupport();
 history.replaceState({view:"home"},"",location.href.split("#")[0]);
});
// The language screen is intentionally shown on every fresh page load.
// The saved language is used as the current language after the visitor chooses it.

/* WAKA support assistant — centered chat */
const supportFaq={
ru:[
["Как оформить заказ?","Дорогой пользователь! Чтобы оформить заказ, перейдите в каталог, выберите интересующую вас модель и нужный вкус. Далее выберите страну и город доставки.\n\nЕсли вашей страны или города нет в списке, нажмите кнопку «Другой» и следуйте дальнейшим инструкциям. После этого вы будете автоматически перенаправлены к нашему администратору, с которым сможете обсудить все детали заказа."],
["Какие модели есть?","Чтобы просмотреть все доступные модели, перейдите в наш каталог."],
["Как выбрать вкус?","После того как вы перейдёте в каталог и выберете интересующую вас модель, перед вами откроется список всех доступных на данный момент вкусов."],
["Куда отправляется заказ?","Условия доставки могут отличаться в зависимости от страны и города, в который необходимо доставить заказ. В некоторых случаях может взиматься дополнительная плата за доставку. Точную стоимость и условия доставки вы сможете уточнить у нашего администратора."],
["Как связаться с администратором?","Связаться с нашим администратором вы можете в разделе «О нас» или после оформления заказа."],
["Не нашли ответ на свой вопрос?","Если вы не нашли ответ на свой вопрос, вы можете связаться с нашим администратором."]
],
en:[
["How do I place an order?","Dear user! To place an order, open the catalog, choose the model and flavor you are interested in, then select the delivery country and city.\n\nIf your country or city is not listed, tap “Other” and follow the next instructions. You will then be automatically redirected to our administrator, who can discuss all order details with you."],
["Which models are available?","To see all currently available models, open our catalog."],
["How do I choose a flavor?","After you open the catalog and choose a model, you will see the list of all flavors currently available for that model."],
["Where is delivery available?","Delivery conditions may differ depending on the country and city. In some cases, an additional delivery fee may apply. Please ask our administrator for the exact delivery cost and conditions."],
["How do I contact the administrator?","You can contact our administrator in the “About” section or after placing an order."],
["Didn't find the answer?","If you did not find the answer to your question, you can contact our administrator."]
],
ka:[
["როგორ შევუკვეთო?","ძვირფასო მომხმარებელო! შეკვეთის გასაფორმებლად გადადით კატალოგში, აირჩიეთ სასურველი მოდელი და გემო, შემდეგ მიუთითეთ მიწოდების ქვეყანა და ქალაქი.\n\nთუ თქვენი ქვეყანა ან ქალაქი სიაში არ არის, დააჭირეთ „სხვა“ ღილაკს და მიჰყევით შემდეგ ინსტრუქციებს. ამის შემდეგ ავტომატურად გადამისამართდებით ჩვენს ადმინისტრატორთან, რომელთანაც შეძლებთ შეკვეთის ყველა დეტალის შეთანხმებას."],
["რომელი მოდელებია?","ყველა ხელმისაწვდომი მოდელის სანახავად გადადით ჩვენს კატალოგში."],
["როგორ ავირჩიო გემო?","კატალოგში მოდელის არჩევის შემდეგ გამოჩნდება ამ მოდელისთვის ამჟამად ხელმისაწვდომი ყველა გემო."],
["სად ხდება მიწოდება?","მიწოდების პირობები შეიძლება განსხვავდებოდეს ქვეყნისა და ქალაქის მიხედვით. ზოგიერთ შემთხვევაში შეიძლება დამატებითი საფასური დაწესდეს. ზუსტი ღირებულებისა და პირობების გასაგებად დაუკავშირდით ჩვენს ადმინისტრატორს."],
["როგორ დავუკავშირდე ადმინისტრატორს?","ჩვენს ადმინისტრატორს შეგიძლიათ დაუკავშირდეთ „ჩვენს შესახებ“ განყოფილებაში ან შეკვეთის გაფორმების შემდეგ."],
["პასუხი ვერ იპოვეთ?","თუ თქვენს კითხვაზე პასუხი ვერ იპოვეთ, შეგიძლიათ დაუკავშირდეთ ჩვენს ადმინისტრატორს."]
]};

const supportUI={
ru:{title:"Чем могу помочь?",sub:"Выберите вопрос",hello:"Здравствуйте! Чем могу помочь?",back:"← Назад к вопросам",another:"Задать другой вопрос",contact:"Связаться с администратором"},
en:{title:"How can I help?",sub:"Choose a question",hello:"Hello! How can I help you?",back:"← Back to questions",another:"Ask another question",contact:"Contact administrator"},
ka:{title:"რით შემიძლია დაგეხმაროთ?",sub:"აირჩიეთ კითხვა",hello:"გამარჯობა! რით შემიძლია დაგეხმაროთ?",back:"← კითხვებზე დაბრუნება",another:"სხვა კითხვის დასმა",contact:"ადმინისტრატორთან დაკავშირება"}
};

function supportElements(){return {
 overlay:document.getElementById("supportOverlay"),
 bubble:document.getElementById("supportBubble"),
 close:document.getElementById("supportClose"),
 title:document.getElementById("supportTitle"),
 subtitle:document.getElementById("supportSubtitle"),
 greeting:document.getElementById("supportGreeting"),
 questions:document.getElementById("supportQuestions"),
 answer:document.getElementById("supportAnswer"),
 answerText:document.getElementById("supportAnswerText"),
 back:document.getElementById("supportBack"),
 another:document.getElementById("supportAnother"),
 contact:document.getElementById("supportContact"),
 backText:document.getElementById("supportAnswerBackText"),
 anotherText:document.getElementById("supportAnotherText"),
 contactText:document.getElementById("supportContactText"),
 body:document.getElementById("supportChatBody")
};}

function supportSetOpen(open){
 const e=supportElements(); if(!e.overlay)return;
 e.overlay.classList.toggle("show",open); e.overlay.setAttribute("aria-hidden",String(!open));
 document.body.style.overflow=open?"hidden":"";
 if(open) renderSupport();
}

function supportScrollBottom(){
 const e=supportElements(); if(e.body) requestAnimationFrame(()=>{e.body.scrollTop=e.body.scrollHeight;});
}

function renderSupport(){
 const e=supportElements(); if(!e.questions)return;
 const l=lang||"en", d=supportFaq[l]||supportFaq.en, ui=supportUI[l]||supportUI.en;
 e.title.textContent=ui.title; e.subtitle.textContent=ui.sub; e.greeting.textContent=ui.hello;
 e.backText.textContent=ui.back; e.anotherText.textContent=ui.another; e.contactText.textContent=ui.contact;
 e.questions.innerHTML=d.map((x,i)=>`<button type="button" class="support-question" data-support-index="${i}">${x[0]}</button>`).join("");
 e.questions.hidden=false; e.answer.hidden=true;
 e.questions.querySelectorAll("[data-support-index]").forEach(btn=>btn.onclick=()=>supportChoose(+btn.dataset.supportIndex));
}

function supportChoose(index){
 const e=supportElements(); if(!e.questions)return;
 const l=lang||"en", d=supportFaq[l]||supportFaq.en, ui=supportUI[l]||supportUI.en, item=d[index]; if(!item)return;
 const old=e.questions.querySelector(`[data-support-index="${index}"]`);
 if(old){
   const user=document.createElement("div"); user.className="support-message user"; user.textContent=item[0];
   e.questions.innerHTML="";
   e.questions.appendChild(user);
 }
 e.questions.hidden=false;
 e.answer.hidden=false;
 e.answerText.textContent=item[1];
 e.questions.querySelectorAll(".support-question").forEach(x=>x.disabled=true);
 e.back.onclick=()=>renderSupport();
 e.another.onclick=()=>renderSupport();
 supportScrollBottom();
}

function initSupport(){
 const e=supportElements(); if(!e.bubble)return;
 e.bubble.onclick=()=>supportSetOpen(true);
 e.close.onclick=()=>supportSetOpen(false);
 e.overlay.addEventListener("click",ev=>{if(ev.target===e.overlay)supportSetOpen(false);});
 document.addEventListener("keydown",ev=>{if(ev.key==="Escape")supportSetOpen(false);});
 renderSupport();
}
document.addEventListener("DOMContentLoaded",initSupport);

if(!lang) lang="en";
document.body.classList.remove("site-ready");
setText();


/* WAKA 3D support robot — local GLB model, transparent WebGL, no external library. */
function initWakaRobot3D(){
  const canvas=document.getElementById('wakaRobot3D');
  if(!canvas) return;
  const gl=canvas.getContext('webgl',{alpha:true,antialias:true,premultipliedAlpha:true}) || canvas.getContext('experimental-webgl',{alpha:true,antialias:true,premultipliedAlpha:true});
  if(!gl) return;

  const vs=`attribute vec3 aPosition;attribute vec3 aNormal;uniform mat4 uMVP;uniform mat4 uModel;varying vec3 vN;varying vec3 vP;void main(){vec4 wp=uModel*vec4(aPosition,1.0);vP=wp.xyz;vN=mat3(uModel)*aNormal;gl_Position=uMVP*vec4(aPosition,1.0);}`;
  const fs=`precision mediump float;uniform vec4 uColor;uniform vec3 uEmissive;uniform vec3 uLight;varying vec3 vN;varying vec3 vP;void main(){vec3 n=normalize(vN);vec3 l=normalize(uLight-vP);float d=max(dot(n,l),0.0);float rim=pow(1.0-max(dot(n,normalize(vec3(0.0,-1.0,0.35))),0.0),2.0)*0.18;vec3 c=uColor.rgb*(0.48+0.52*d)+uColor.rgb*rim+uEmissive;gl_FragColor=vec4(c,uColor.a);}`;
  function shader(type,src){const sh=gl.createShader(type);gl.shaderSource(sh,src);gl.compileShader(sh);return sh;}
  const prog=gl.createProgram();gl.attachShader(prog,shader(gl.VERTEX_SHADER,vs));gl.attachShader(prog,shader(gl.FRAGMENT_SHADER,fs));gl.linkProgram(prog);if(!gl.getProgramParameter(prog,gl.LINK_STATUS))return;gl.useProgram(prog);
  const aP=gl.getAttribLocation(prog,'aPosition'),aN=gl.getAttribLocation(prog,'aNormal');
  const uMVP=gl.getUniformLocation(prog,'uMVP'),uModel=gl.getUniformLocation(prog,'uModel'),uColor=gl.getUniformLocation(prog,'uColor'),uEm=gl.getUniformLocation(prog,'uEmissive'),uLight=gl.getUniformLocation(prog,'uLight');
  gl.enable(gl.DEPTH_TEST);gl.enable(gl.CULL_FACE);gl.clearColor(0,0,0,0);

  const I=()=>new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]);
  const mul=(a,b)=>{const o=new Float32Array(16);for(let c=0;c<4;c++)for(let r=0;r<4;r++)o[c*4+r]=a[r]*b[c*4]+a[4+r]*b[c*4+1]+a[8+r]*b[c*4+2]+a[12+r]*b[c*4+3];return o};
  const T=(x,y,z)=>{const m=I();m[12]=x;m[13]=y;m[14]=z;return m};
  const S=(x,y,z)=>{const m=I();m[0]=x;m[5]=y;m[10]=z;return m};
  const RY=a=>{const m=I(),c=Math.cos(a),s=Math.sin(a);m[0]=c;m[2]=-s;m[8]=s;m[10]=c;return m};
  const RX=a=>{const m=I(),c=Math.cos(a),s=Math.sin(a);m[5]=c;m[6]=s;m[9]=-s;m[10]=c;return m};
  const RZ=a=>{const m=I(),c=Math.cos(a),s=Math.sin(a);m[0]=c;m[1]=s;m[4]=-s;m[5]=c;return m};
  const persp=(fov,asp,n,f)=>{const t=1/Math.tan(fov/2),m=new Float32Array(16);m[0]=t/asp;m[5]=t;m[10]=(f+n)/(n-f);m[11]=-1;m[14]=2*f*n/(n-f);return m};
  const lookAt=(eye,center,up)=>{let zx=eye[0]-center[0],zy=eye[1]-center[1],zz=eye[2]-center[2];let zl=Math.hypot(zx,zy,zz);zx/=zl;zy/=zl;zz/=zl;let xx=up[1]*zz-up[2]*zy,xy=up[2]*zx-up[0]*zz,xz=up[0]*zy-up[1]*zx;let xl=Math.hypot(xx,xy,xz);xx/=xl;xy/=xl;xz/=xl;let yx=zy*xz-zz*xy,yy=zz*xx-zx*xz,yz=zx*xy-zy*xx;const m=I();m[0]=xx;m[1]=yx;m[2]=zx;m[4]=xy;m[5]=yy;m[6]=zy;m[8]=xz;m[9]=yz;m[10]=zz;m[12]=-(xx*eye[0]+xy*eye[1]+xz*eye[2]);m[13]=-(yx*eye[0]+yy*eye[1]+yz*eye[2]);m[14]=-(zx*eye[0]+zy*eye[1]+zz*eye[2]);return m};

  const modelM=mul(T(0,0,0),mul(RY(0),S(1.0,1.0,1.0)));
  let meshes=[];let nodes=[];let loaded=false;
  const materials=[];
  function readAccessor(gltf,bin,idx){const a=gltf.accessors[idx],bv=gltf.bufferViews[a.bufferView],stride=bv.byteStride||0;const comps={SCALAR:1,VEC2:2,VEC3:3,VEC4:4}[a.type];const C=a.componentType;const bytes=C===5126?4:C===5125?4:C===5123?2:1;const count=a.count;const off=(bv.byteOffset||0)+(a.byteOffset||0);const out=new ArrayBuffer(count*comps*bytes);const src=new Uint8Array(bin,off,count*comps*bytes);new Uint8Array(out).set(src);let typed=C===5126?new Float32Array(out):C===5125?new Uint32Array(out):C===5123?new Uint16Array(out):new Uint8Array(out);return {data:typed,count,comps};}
  function parseMat(m){const p=m&&m.pbrMetallicRoughness||{};const c=p.baseColorFactor||[1,1,1,1];const e=m&&m.emissiveFactor||[0,0,0];return {c,e};}
  function loadGLB(){
    fetch('assets/waka_robot_3d.glb').then(r=>r.arrayBuffer()).then(buf=>{
      const dv=new DataView(buf);if(dv.getUint32(0,true)!==0x46546c67)throw Error('bad glb');let off=12,json=null,bin=null;
      while(off<buf.byteLength){const len=dv.getUint32(off,true),type=dv.getUint32(off+4,true);const part=buf.slice(off+8,off+8+len);if(type===0x4e4f534a)json=JSON.parse(new TextDecoder().decode(part));if(type===0x4e4942)bin=part;off+=8+len;}
      if(!json||!bin)throw Error('missing glb chunks');
      json.materials.forEach(m=>materials.push(parseMat(m)));
      json.meshes.forEach((mesh,mi)=>{const prim=mesh.primitives[0];const pos=readAccessor(json,bin,prim.attributes.POSITION);let idx=prim.indices!=null?readAccessor(json,bin,prim.indices).data:null;const raw=pos.data;const p=[];
        if(idx){for(let i=0;i<idx.length;i++){const k=idx[i]*3;p.push(raw[k],raw[k+1],raw[k+2]);}}else for(let i=0;i<raw.length;i++)p.push(raw[i]);
        const n=new Float32Array(p.length);for(let i=0;i<p.length;i+=9){const ax=p[i+3]-p[i],ay=p[i+4]-p[i+1],az=p[i+5]-p[i+2],bx=p[i+6]-p[i],by=p[i+7]-p[i+1],bz=p[i+8]-p[i+2];let nx=ay*bz-az*by,ny=az*bx-ax*bz,nz=ax*by-ay*bx,l=Math.hypot(nx,ny,nz)||1;nx/=l;ny/=l;nz/=l;for(let j=0;j<3;j++){n[i+j*3]=nx;n[i+j*3+1]=ny;n[i+j*3+2]=nz;}}
        const vb=gl.createBuffer(),nb=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,vb);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(p),gl.STATIC_DRAW);gl.bindBuffer(gl.ARRAY_BUFFER,nb);gl.bufferData(gl.ARRAY_BUFFER,n,gl.STATIC_DRAW);meshes[mi]={vb,nb,count:p.length/3,mat:prim.material||0};
      });
      nodes=json.nodes.map(n=>({name:n.name,mesh:n.mesh,matrix:new Float32Array(n.matrix||I())}));loaded=true;
    }).catch(()=>{loaded=false;});
  }
  loadGLB();
  function resize(){const w=Math.max(1,canvas.clientWidth),h=Math.max(1,canvas.clientHeight),d=Math.min(devicePixelRatio||1,2);canvas.width=Math.round(w*d);canvas.height=Math.round(h*d);gl.viewport(0,0,canvas.width,canvas.height)}
  resize();addEventListener('resize',resize);
  const start=performance.now();
  function animate(now){requestAnimationFrame(animate);resize();gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT);if(!loaded)return;const e=(now-start)/1000,phase=e%5.4,active=Math.max(0,Math.min(1,(phase-3.45)/1.45));const wave=active?Math.sin(active*Math.PI):0;const jump=active?Math.sin(active*Math.PI)*0.16:0;const sway=Math.sin(e*1.4)*0.018;const view=lookAt([0,-4.8,0.15],[0,0,0.0],[0,0,1]);const vp=mul(persp(Math.PI/6.5,canvas.clientWidth/Math.max(1,canvas.clientHeight),.05,30),view);
    for(const node of nodes){if(node.mesh==null)continue;let nm=node.matrix;
      let extra=T(0,0,jump); if(node.name==='head'||node.name==='face_screen'||node.name==='left_eye'||node.name==='right_eye'||node.name==='left_ear'||node.name==='right_ear'||node.name==='head_top_light'||node.name==='neck'){extra=mul(T(0,0,jump+0.02),RY(sway));}
      if(node.name==='right_upper_arm'||node.name==='right_cuff'||node.name==='right_hand'||node.name==='right_shoulder'){const pivot=[0.55,0,0.02];extra=mul(T(pivot[0],pivot[1],pivot[2]),mul(RY(-wave*0.75),T(-pivot[0],-pivot[1],-pivot[2])));extra=mul(T(0,0,jump),extra);}
      if(node.name==='right_hand') extra=mul(extra,RZ(-wave*0.9));
      if(node.name==='left_upper_arm'||node.name==='left_cuff'||node.name==='left_hand'||node.name==='left_shoulder'){extra=mul(T(0,0,jump),RY(-sway*0.6));}
      const mdl=mul(modelM,mul(extra,nm));const mvp=mul(vp,mdl);const me=meshes[node.mesh],mat=materials[me.mat]||{c:[1,1,1,1],e:[0,0,0]};gl.bindBuffer(gl.ARRAY_BUFFER,me.vb);gl.enableVertexAttribArray(aP);gl.vertexAttribPointer(aP,3,gl.FLOAT,false,0,0);gl.bindBuffer(gl.ARRAY_BUFFER,me.nb);gl.enableVertexAttribArray(aN);gl.vertexAttribPointer(aN,3,gl.FLOAT,false,0,0);gl.uniformMatrix4fv(uModel,false,mdl);gl.uniformMatrix4fv(uMVP,false,mvp);gl.uniform4fv(uColor,mat.c);gl.uniform3fv(uEm,mat.e);gl.uniform3f(uLight,-2,-4,4);gl.drawArrays(gl.TRIANGLES,0,me.count);
    }
  }
  requestAnimationFrame(animate);
}
document.addEventListener('DOMContentLoaded',initWakaRobot3D);
