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


/* WAKA 3D support robot — built from Three.js geometry, no robot image used. */
function initWakaRobot3D(){
  const canvas=document.getElementById('wakaRobot3D');
  if(!canvas || !window.THREE) return;

  const T=window.THREE;
  let renderer;
  try{
    renderer=new T.WebGLRenderer({canvas,alpha:true,antialias:true,premultipliedAlpha:true});
  }catch(err){ console.warn('Waka 3D robot unavailable',err); return; }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2));
  renderer.setClearColor(0x000000,0);
  renderer.outputColorSpace=T.SRGBColorSpace;

  const scene=new T.Scene();
  const camera=new T.PerspectiveCamera(25,140/160,.1,100);
  camera.position.set(0,1.35,7.6);
  camera.lookAt(0,1.35,0);

  scene.add(new T.HemisphereLight(0xbfeaff,0x06101d,2.0));
  const key=new T.DirectionalLight(0xffffff,3.2); key.position.set(3,5,6); scene.add(key);
  const rim=new T.PointLight(0x20aaff,10,10); rim.position.set(-2,2,3); scene.add(rim);

  const robot=new T.Group();
  robot.position.y=-1.25;
  scene.add(robot);

  const white=new T.MeshStandardMaterial({color:0xf3f7fb,metalness:.55,roughness:.22});
  const dark=new T.MeshStandardMaterial({color:0x07111d,metalness:.7,roughness:.18});
  const black=new T.MeshStandardMaterial({color:0x01050a,metalness:.2,roughness:.1});
  const blue=new T.MeshStandardMaterial({color:0x2bbcff,emissive:0x008dff,emissiveIntensity:2.4,metalness:.2,roughness:.18});
  const grey=new T.MeshStandardMaterial({color:0x9eabb7,metalness:.7,roughness:.25});

  function roundedBox(w,h,d,r,mat){
    const g=new T.BoxGeometry(w,h,d,8,8,8);
    const m=new T.Mesh(g,mat); return m;
  }
  function sphere(sx,sy,sz,mat){
    const m=new T.Mesh(new T.SphereGeometry(1,24,16),mat); m.scale.set(sx,sy,sz); return m;
  }
  function cyl(rt,rb,h,mat){return new T.Mesh(new T.CylinderGeometry(rt,rb,h,24),mat)}

  // Legs
  const legL=new T.Group(), legR=new T.Group();
  legL.position.set(-.34,.36,0); legR.position.set(.34,.36,0);
  const footL=roundedBox(.42,.22,.58,.1,white); footL.position.set(0,-.28,.05); legL.add(footL);
  const footR=roundedBox(.42,.22,.58,.1,white); footR.position.set(0,-.28,.05); legR.add(footR);
  const shinL=cyl(.16,.18,.52,dark); shinL.position.y=-.03; legL.add(shinL);
  const shinR=cyl(.16,.18,.52,dark); shinR.position.y=-.03; legR.add(shinR);
  robot.add(legL,legR);

  // Torso
  const torso=roundedBox(1.02,1.05,.7,.2,white); torso.position.y=1.0; robot.add(torso);
  const chest=roundedBox(.62,.25,.03,.06,dark); chest.position.set(0,1.03,.365); robot.add(chest);
  const logo=roundedBox(.34,.13,.035,.035,white); logo.position.set(0,.83,.39); robot.add(logo);

  // Head with black visor
  const neck=cyl(.18,.2,.18,grey); neck.position.y=1.62; robot.add(neck);
  const head=roundedBox(1.28,.88,.78,.23,white); head.position.y=2.12; robot.add(head);
  const visor=roundedBox(1.08,.52,.055,.18,black); visor.position.set(0,2.12,.415); robot.add(visor);
  const eyeL=sphere(.095,.13,.035,blue); eyeL.position.set(-.23,2.14,.45); robot.add(eyeL);
  const eyeR=sphere(.095,.13,.035,blue); eyeR.position.set(.23,2.14,.45); robot.add(eyeR);
  const sideL=cyl(.16,.16,.16,blue); sideL.rotation.z=Math.PI/2; sideL.position.set(-.69,2.12,0); robot.add(sideL);
  const sideR=cyl(.16,.16,.16,blue); sideR.rotation.z=Math.PI/2; sideR.position.set(.69,2.12,0); robot.add(sideR);

  // Arms are separate groups so the waving arm actually rotates.
  const armL=new T.Group(), armR=new T.Group();
  armL.position.set(-.67,1.25,0); armR.position.set(.67,1.25,0);
  const upperL=cyl(.14,.17,.55,white); upperL.rotation.z=-.22; upperL.position.set(-.06,-.18,0); armL.add(upperL);
  const upperR=cyl(.14,.17,.55,white); upperR.rotation.z=.22; upperR.position.set(.06,-.18,0); armR.add(upperR);
  const handL=sphere(.18,.16,.18,white); handL.position.set(-.13,-.49,0); armL.add(handL);
  const handR=sphere(.18,.16,.18,white); handR.position.set(.13,-.49,0); armR.add(handR);
  robot.add(armL,armR);

  // Small blue joints and antenna-like details.
  const jointL=sphere(.09,.09,.09,blue); jointL.position.set(-.76,1.04,.18); robot.add(jointL);
  const jointR=sphere(.09,.09,.09,blue); jointR.position.set(.76,1.04,.18); robot.add(jointR);

  function resize(){
    const w=canvas.clientWidth||140,h=canvas.clientHeight||160;
    renderer.setSize(w,h,false); camera.aspect=w/h; camera.updateProjectionMatrix();
  }
  resize(); window.addEventListener('resize',resize);

  let start=performance.now(), last=performance.now();
  function animate(now){
    requestAnimationFrame(animate);
    const elapsed=(now-start)/1000;
    const cycle=elapsed%5.2;
    const notice=Math.max(0,Math.min(1,(cycle-3.65)/1.15));
    // idle breathing / subtle head motion
    robot.position.y=-1.25 + Math.sin(elapsed*2.0)*.018;
    head.rotation.y=Math.sin(elapsed*1.3)*.025;
    // Every ~5 seconds: crouch, jump and wave.
    if(cycle>3.65){
      const t=(cycle-3.65)/1.15;
      const jump=Math.sin(Math.min(1,t)*Math.PI);
      robot.position.y=-1.25 + jump*.42;
      robot.rotation.z=Math.sin(t*Math.PI)*.035;
      armR.rotation.z=-Math.sin(Math.min(1,t)*Math.PI)*1.15;
      armR.rotation.x=Math.sin(Math.min(1,t)*Math.PI*2)*.28;
      armL.rotation.z=Math.sin(Math.min(1,t)*Math.PI)*.12;
      head.rotation.y=Math.sin(t*Math.PI*2)*.08;
    }else{
      armR.rotation.z*=.82; armR.rotation.x*=.82; armL.rotation.z*=.82; robot.rotation.z*=.82;
    }
    renderer.render(scene,camera);
    last=now;
  }
  requestAnimationFrame(animate);
}

document.addEventListener('DOMContentLoaded',initWakaRobot3D);
