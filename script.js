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

const azNames10=["Moruq Qarpız","Təzə Nanə","Qarpız","Çiyələk Kivi","Albalı","Qaragilə Moruq","Kivi Marakuya Quava","Üzüm Alma","Alma Dalğası"];
const azNames30=["Çiyələk Qarpız Buz","Moruq Kola","Şirəli Üzüm Buz","Albalı Soda Buz","Qarpız Buz","Banan Kokos","Turş Qaragilə Moruq Buz","Çiyələk Manqo Buz","Çiyələk Kivi Buz","Quava Moruq Buz","Şaftalı Mavi Moruq Buz","Üçqat Giləmeyvə Buz","Kokos Suyu","Nanə","Təzə Nanə"];
const azDesc10=[
"Yetişmiş qarpız və şirəli moruğun dadı.","Təmiz, təravətli və sərin nanə dadı.","Yetişmiş qarpızın şirəli dadı.","Şirin çiyələk və kivinin parlaq birləşməsi.","Yüngül turşuluqla yetişmiş albalının zəngin dadı.","Parlaq moruq notları ilə yetişmiş qaragilə.","Turş kivi, şirin quava və şirəli marakuyanın birləşməsi.","Yaşıl almanın turşluğu ilə zəngin üzüm dadı.","Təravətləndirici xarakterə malik parlaq alma dadı."];
const azDesc30=[
"Şirin çiyələk və şirəli qarpızın sərin sonluğu ilə dadı.","Tanış kola notları ilə şirin moruq dadı.","Sərinləşdirici effektli şirəli üzüm dadı.","Sərin notlu şirin albalılı qazlı içki dadı.","Sərin sonluqlu şirəli qarpız dadı.","Şirin banan və kokosun yumşaq birləşməsi.","Sərin vurğulu turş qaragilə və moruq.","Sərin notlu şirin çiyələk və şirəli manqo.","Sərin sonluqlu çiyələk və kivi.","Sərinlik verən şirin quava və şirəli moruq.","Sərin sonluqlu şirəli şaftalı və parlaq mavi moruq.","Sərin vurğulu üç giləmeyvənin qarışığı.","Yüngül və təravətləndirici kokos suyu dadı.","Sərin xarakterli təmiz nanə dadı.","Sərin sonluqlu ifadəli təzə nanə."];
products10.forEach((p,i)=>{p.az=azNames10[i];p.descAz=azDesc10[i]});
products30.forEach((p,i)=>{p.az=azNames30[i];p.descAz=azDesc30[i]});

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
 "10000":{title:"Waka 10 000",eyebrow:"WAKA SO PRO",image:"https://www.wakavaping.com/cdn/shop/files/pa10000.jpg?v=1688106071",products:products10,puffs:"10 000",priceUsd:25,infoRu:"9 вкусов • до 10 000 затяжек",infoEn:"9 flavors • up to 10,000 puffs",infoKa:"9 არომატი • 10 000-მდე ნაფასი",infoAz:"9 dad • 10 000-ə qədər puff"},
 "30000":{title:"Waka 30 000",eyebrow:"WAKA SO PRO TITAN",image:TITAN_GENERIC,products:products30,puffs:"30 000",priceUsd:32,infoRu:"15 вкусов • до 30 000 затяжек",infoEn:"15 flavors • up to 30,000 puffs",infoKa:"15 არომატი • 30 000-მდე ნაფასი",infoAz:"15 dad • 30 000-ə qədər puff"}
};

const ui={
ru:{home:"Главная",about:"О нас",catalog:"Каталог",language:"Язык",heroTitle:"WAKA VAPE<br><span>приветствует вас</span>",heroText:"Продажа WAKA по странам СНГ с платной или бесплатной доставкой в зависимости от вашего местоположения.",chooseMenu:"Выберите меню, перейдите в каталог",chooseMenuText:"Откройте ☰ слева сверху и выберите нужную модель WAKA.",viewCatalog:"Смотреть каталог",aboutUs:"О нас",legalHero:"Никотиновая продукция. Только для совершеннолетних по законам вашей страны.",catalogTitle:"Каталог",catalogChoose:"Выберите модель",model10Text:"Каталог вкусов WAKA 10 000.",model30Text:"Каталог вкусов WAKA 30 000.",backToCatalog:"Каталог",statPuffs:"до затяжек",statCharge:"зарядка*",statCoil:"система испарения*",statBrand:"официальная линейка*",deliveryTitle:"Доставка и информация",deliveryText:"Условия доставки, наличие, цены и допустимость никотиновой продукции зависят от страны и действующего законодательства. Уточняйте детали перед заказом.",contacts:"Контакты и локации",footer:"Информационная страница. Никотин вызывает зависимость. Не является медицинской рекомендацией.",aboutTitle:"О нас",aboutBody:"Мы собираем актуальный каталог WAKA и помогаем уточнить наличие, стоимость и условия доставки.",locations:"Локации",locationsList:"Россия — Москва, Питер, Новосибирск<br>Казахстан — Алмата, Астана<br>Грузия<br>Азербайджан — Баку, Шеки, Габала<br>Армения — Ереван",priceNote:"Цена в каталоге — эквивалент $25 по курсу, зафиксированному при создании этой версии сайта. Крепость никотина и характеристики могут зависеть от рынка.",more:"Подробнее",order:"Заказать",orderFrom:"Откуда вы",orderFromText:"Выберите страну доставки.",chooseCity:"Выберите город",quantityTitle:"Уточните кол-во",orderSeller:"Заказать у продавца",other:"Другой",price:"2 123 ₽"},
en:{home:"Home",about:"About us",catalog:"Catalog",language:"Language",heroTitle:"WAKA VAPE<br><span>welcome</span>",heroText:"WAKA sales across CIS countries with paid or free delivery depending on your location.",chooseMenu:"Choose the menu, go to the catalog",chooseMenuText:"Open ☰ in the top-left and choose the WAKA model you need.",viewCatalog:"View catalog",aboutUs:"About us",legalHero:"Nicotine products. For adults of legal age in your country only.",catalogTitle:"Catalog",catalogChoose:"Choose a model",model10Text:"WAKA 10,000 flavor catalog.",model30Text:"WAKA 30,000 flavor catalog.",backToCatalog:"Catalog",statPuffs:"up to puffs",statCharge:"charging*",statCoil:"vapor system*",statBrand:"official range*",deliveryTitle:"Delivery & information",deliveryText:"Delivery terms, availability, pricing and legality of nicotine products depend on your country and current laws. Confirm details before ordering.",contacts:"Contacts & locations",footer:"Information page. Nicotine is addictive. Not medical advice.",aboutTitle:"About us",aboutBody:"We maintain a WAKA catalog and help clarify availability, pricing and delivery conditions.",locations:"Locations",locationsList:"Russia — Moscow, St. Petersburg, Novosibirsk<br>Kazakhstan — Almaty, Astana<br>Georgia<br>Azerbaijan — Baku, Sheki, Gabala<br>Armenia — Yerevan",phone:"Phone",editNote:"Replace these contact details with your own in index.html.",priceNote:"Catalog price is the $25 base converted using the exchange rate fixed for this site version. Nicotine strength and specifications may vary by market.",more:"Details",order:"Order",orderFrom:"Where are you from?",orderFromText:"Choose your delivery country.",chooseCity:"Choose your city",quantityTitle:"Specify quantity",orderSeller:"Order from seller",other:"Other",price:"$25"},
ka:{home:"მთავარი",about:"ჩვენს შესახებ",catalog:"კატალოგი",language:"ენა",heroTitle:"WAKA VAPE<br><span>გესალმებათ</span>",heroText:"WAKA-ს გაყიდვა დსთ-ს ქვეყნებში ფასიანი ან უფასო მიწოდებით, თქვენი მდებარეობის მიხედვით.",chooseMenu:"აირჩიეთ მენიუ და გადადით კატალოგში",chooseMenuText:"გახსენით ☰ ზედა მარცხენა კუთხეში და აირჩიეთ სასურველი WAKA მოდელი.",viewCatalog:"კატალოგის ნახვა",aboutUs:"ჩვენს შესახებ",legalHero:"ნიკოტინის პროდუქცია. მხოლოდ თქვენი ქვეყნის კანონით დაშვებული სრულწლოვანი პირებისთვის.",catalogTitle:"კატალოგი",catalogChoose:"აირჩიეთ მოდელი",model10Text:"WAKA 10 000-ის არომატების კატალოგი.",model30Text:"WAKA 30 000-ის არომატების კატალოგი.",backToCatalog:"კატალოგი",statPuffs:"მაქს. ნაფასი",statCharge:"დამუხტვა*",statCoil:"აორთქლების სისტემა*",statBrand:"ოფიციალური ხაზი*",deliveryTitle:"მიწოდება და ინფორმაცია",deliveryText:"მიწოდების პირობები, მარაგი, ფასები და ნიკოტინის პროდუქციის კანონიერება დამოკიდებულია ქვეყანასა და მოქმედ კანონებზე. შეკვეთამდე დააზუსტეთ დეტალები.",contacts:"კონტაქტები და ლოკაციები",footer:"საინფორმაციო გვერდი. ნიკოტინი იწვევს დამოკიდებულებას. ეს არ არის სამედიცინო რჩევა.",aboutTitle:"ჩვენს შესახებ",aboutBody:"ჩვენ ვაგროვებთ WAKA-ს აქტუალურ კატალოგს და ვაზუსტებთ მარაგს, ფასებსა და მიწოდების პირობებს.",locations:"ლოკაციები",locationsList:"რუსეთი — მოსკოვი, პეტერბურგი, ნოვოსიბირსკი<br>ყაზახეთი — ალმათი, ასტანა<br>საქართველო<br>აზერბაიჯანი — ბაქო, შექი, გაბალა<br>სომხეთი — ერევანი",priceNote:"კატალოგის ფასი არის $25-ის ეკვივალენტი ამ ვერსიის შექმნისას დაფიქსირებული კურსით. ნიკოტინის სიმძლავრე და მახასიათებლები ბაზრის მიხედვით შეიძლება განსხვავდებოდეს.",more:"დეტალები",order:"შეკვეთა",orderFrom:"საიდან ხართ?",orderFromText:"აირჩიეთ მიწოდების ქვეყანა.",chooseCity:"აირჩიეთ ქალაქი",quantityTitle:"მიუთითეთ რაოდენობა",orderSeller:"შეუკვეთეთ გამყიდველს",other:"სხვა",price:"65.55 ₾"}
,az:{home:"Ana səhifə",about:"Haqqımızda",catalog:"Kataloq",language:"Dil",heroTitle:"WAKA VAPE<br><span>xoş gəlmisiniz</span>",heroText:"WAKA məhsullarının MDB ölkələrinə satışı — yerləşdiyiniz yerdən asılı olaraq ödənişli və ya pulsuz çatdırılma ilə.",chooseMenu:"Menyunu seçin, kataloqa keçin",chooseMenuText:"Sol yuxarıdakı ☰ düyməsini açın və istədiyiniz WAKA modelini seçin.",viewCatalog:"Kataloqa bax",aboutUs:"Haqqımızda",legalHero:"Nikotin məhsulları. Yalnız ölkənizin qanunlarına əsasən yetkin şəxslər üçün.",catalogTitle:"Kataloq",catalogChoose:"Model seçin",model10Text:"WAKA 10 000 dad kataloqu.",model30Text:"WAKA 30 000 dad kataloqu.",backToCatalog:"Kataloq",statPuffs:"qədər puff",statCharge:"şarj*",statCoil:"buxarlandırma sistemi*",statBrand:"rəsmi seriya*",deliveryTitle:"Çatdırılma və məlumat",deliveryText:"Çatdırılma şərtləri, mövcudluq, qiymətlər və nikotin məhsullarının qanuniliyi ölkədən və qüvvədə olan qanunlardan asılıdır. Sifarişdən əvvəl detalları dəqiqləşdirin.",contacts:"Əlaqə və məkanlar",footer:"Məlumat səhifəsi. Nikotin asılılıq yaradır. Tibbi məsləhət deyil.",aboutTitle:"Haqqımızda",aboutBody:"WAKA kataloqunu aktual saxlayır və mövcudluq, qiymət və çatdırılma şərtlərini dəqiqləşdirməyə kömək edirik.",locations:"Məkanlar",locationsList:"Rusiya — Moskva, Sankt-Peterburq, Novosibirsk<br>Kazaxıstan — Almatı, Astana<br>Gürcüstan<br>Azərbaycan — Bakı, Şəki, Qəbələ<br>Ermənistan — İrəvan",priceNote:"Kataloq qiyməti bu sayt versiyası üçün sabitləşdirilmiş məzənnə ilə $25 ekvivalentidir. Nikotinin gücü və xüsusiyyətləri bazara görə dəyişə bilər.",more:"Ətraflı",order:"Sifariş et",orderFrom:"Haradansınız?",orderFromText:"Çatdırılma ölkəsini seçin.",chooseCity:"Şəhəri seçin",quantityTitle:"Miqdarı göstərin",orderSeller:"Satıcıdan sifariş et",other:"Digər",price:"$25"}

};

let lang=localStorage.getItem("wakaLang")||null;
let currentModel=null;

function nameOf(p){return lang==="ru"?p.ru:lang==="az"?p.az:p.name}
function descOf(p){return lang==="ru"?p.descRu:lang==="ka"?p.descKa:lang==="az"?p.descAz:p.descEn}
function price(key=currentModel){
 const usd=MODEL[key]?.priceUsd ?? 25;
 if(lang==="en") return "$"+usd;
 if(lang==="ru") return new Intl.NumberFormat("ru-RU").format(Math.round(usd*84.9057))+" ₽";
 if(lang==="ka") return new Intl.NumberFormat("ka-GE",{minimumFractionDigits:2,maximumFractionDigits:2}).format(usd*2.6218)+" ₾";
 return "$"+usd;
}
function modelInfo(m){return lang==="ru"?m.infoRu:lang==="ka"?m.infoKa:lang==="az"?m.infoAz:m.infoEn}

function setText(){
 document.documentElement.lang=lang;
 document.querySelectorAll("[data-i18n]").forEach(el=>{let k=el.dataset.i18n;if(ui[lang][k]!==undefined)el.innerHTML=ui[lang][k]});
 document.getElementById("langTop").textContent=lang.toUpperCase();
 if(currentModel)renderProducts(currentModel);
}

const orderLocations={
ru:[{country:"Россия",cities:["Москва","Питер","Новосибирск"]},{country:"Казахстан",cities:["Алмата","Астана"]},{country:"Грузия",cities:[]},{country:"Азербайджан",cities:["Баку","Шеки","Габала"]},{country:"Армения",cities:["Ереван"]}],
en:[{country:"Russia",cities:["Moscow","St. Petersburg","Novosibirsk"]},{country:"Kazakhstan",cities:["Almaty","Astana"]},{country:"Georgia",cities:[]},{country:"Azerbaijan",cities:["Baku","Sheki","Gabala"]},{country:"Armenia",cities:["Yerevan"]}],
ka:[{country:"რუსეთი",cities:["მოსკოვი","პეტერბურგი","ნოვოსიბირსკი"]},{country:"ყაზახეთი",cities:["ალმათი","ასტანა"]},{country:"საქართველო",cities:[]},{country:"აზერბაიჯანი",cities:["ბაქო","შექი","გაბალა"]},{country:"სომხეთი",cities:["ერევანი"]}],
az:[{country:"Rusiya",cities:["Bakı","Şəki","Qəbələ"]},{country:"Qazaxıstan",cities:["Almatı","Astana"]},{country:"Gürcüstan",cities:[]},{country:"Azərbaycan",cities:["Bakı","Şəki","Qəbələ"]},{country:"Ermənistan",cities:["İrəvan"]}]
};
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
  m.title,m.puffs+(lang==="ru"?" затяжек":lang==="en"?" puffs":lang==="az"?" puff":" ნაფასი"),
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
 const order=["en","ru","ka","az"];lang=order[(order.indexOf(lang)+1)%4];localStorage.setItem("wakaLang",lang);setText();if(document.getElementById("orderModal").classList.contains("show"))renderCountryChoices();
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
],
az:[
["Sifarişi necə rəsmiləşdirə bilərəm?","Hörmətli istifadəçi! Sifariş vermək üçün kataloqa keçin, istədiyiniz modeli və dadı seçin, sonra çatdırılma ölkəsini və şəhərini göstərin.\n\nÖlkəniz və ya şəhəriniz siyahıda yoxdursa, «Digər» düyməsinə basın və növbəti təlimatları izləyin. Bundan sonra bütün sifariş detalları barədə administratorumuzla əlaqə saxlaya biləcəksiniz."],
["Hansı modellər mövcuddur?","Hazırda mövcud olan bütün modellərə baxmaq üçün kataloqumuza keçin."],
["Dadı necə seçə bilərəm?","Kataloqda modeli seçdikdən sonra həmin model üçün hazırda mövcud olan bütün dadların siyahısı açılacaq."],
["Çatdırılma haraya edilir?","Çatdırılma şərtləri ölkə və şəhərdən asılı olaraq dəyişə bilər. Bəzi hallarda əlavə çatdırılma haqqı tətbiq oluna bilər. Dəqiq qiymət və şərtləri administratorumuzdan öyrənə bilərsiniz."],
["Administratorla necə əlaqə saxlaya bilərəm?","Administratorumuzla «Haqqımızda» bölməsindən və ya sifariş verdikdən sonra əlaqə saxlaya bilərsiniz."],
["Sualınıza cavab tapmadınız?","Sualınıza cavab tapmadınızsa, administratorumuzla əlaqə saxlaya bilərsiniz."]
]
};

const supportUI={
ru:{title:"Чем могу помочь?",sub:"Выберите вопрос",hello:"Здравствуйте! Чем могу помочь?",back:"← Назад к вопросам",another:"Задать другой вопрос",contact:"Связаться с администратором"},
en:{title:"How can I help?",sub:"Choose a question",hello:"Hello! How can I help you?",back:"← Back to questions",another:"Ask another question",contact:"Contact administrator"},
ka:{title:"რით შემიძლია დაგეხმაროთ?",sub:"აირჩიეთ კითხვა",hello:"გამარჯობა! რით შემიძლია დაგეხმაროთ?",back:"← კითხვებზე დაბრუნება",another:"სხვა კითხვის დასმა",contact:"ადმინისტრატორთან დაკავშირება"},
az:{title:"Necə kömək edə bilərəm?",sub:"Sual seçin",hello:"Salam! Sizə necə kömək edə bilərəm?",back:"← Suallara qayıt",another:"Başqa sual ver",contact:"Administratorla əlaqə saxla"}
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


/* WAKA 3D support robot — procedural Three.js model, matching the robot from the reference project. */
async function initWakaRobot3D(){
  const canvas=document.getElementById('wakaRobot3D');
  if(!canvas || canvas.dataset.wakaRobotReady==='1') return;
  canvas.dataset.wakaRobotReady='1';
  try{
    const THREE=await import('three');
    const {RoundedBoxGeometry}=await import('three/addons/geometries/RoundedBoxGeometry.js');

    const CYCLE=5.5, EMOTE=1.7, GLOW=0x4fc3ff;
    const renderer=new THREE.WebGLRenderer({canvas,alpha:true,antialias:true,preserveDrawingBuffer:false});
    renderer.setClearColor(0x000000,0);
    renderer.outputColorSpace=THREE.SRGBColorSpace;
    renderer.toneMapping=THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure=1.1;

    const scene=new THREE.Scene();
    const camera=new THREE.PerspectiveCamera(30,1,0.1,100);

    scene.add(new THREE.HemisphereLight(0xdff4ff,0x07101b,1.2));
    const key=new THREE.DirectionalLight(0xffffff,3.0); key.position.set(2.5,3.5,4); scene.add(key);
    const rim=new THREE.DirectionalLight(GLOW,2.6); rim.position.set(-3,1,-2); scene.add(rim);
    const fill=new THREE.DirectionalLight(0xbfe4ff,1.1); fill.position.set(-2,-1.5,3); scene.add(fill);

    function faceTexture(){
      const c=document.createElement('canvas'); c.width=512; c.height=384;
      const g=c.getContext('2d'); g.clearRect(0,0,c.width,c.height);
      g.strokeStyle='#7fdcff'; g.lineWidth=26; g.lineCap='round';
      const eye=(cx)=>{g.beginPath();g.arc(cx,220,62,Math.PI*1.05,Math.PI*1.95);g.stroke()};
      eye(170); eye(342);
      g.strokeStyle='#2fe8ff'; g.lineWidth=13; g.beginPath(); g.arc(256,285,24,Math.PI*0.15,Math.PI*0.85); g.stroke();
      const t=new THREE.CanvasTexture(c); t.colorSpace=THREE.SRGBColorSpace; return t;
    }
    function logoTexture(){
      const c=document.createElement('canvas'); c.width=512; c.height=256;
      const g=c.getContext('2d'); g.clearRect(0,0,c.width,c.height); g.fillStyle='#101418';
      g.font='700 150px Inter,Arial,sans-serif'; g.textAlign='center'; g.textBaseline='middle'; g.fillText('waka',256,140);
      const t=new THREE.CanvasTexture(c); t.colorSpace=THREE.SRGBColorSpace; return t;
    }

    const white=new THREE.MeshPhysicalMaterial({color:0xf6f9fc,roughness:0.24,metalness:0.05,clearcoat:1,clearcoatRoughness:0.12});
    const black=new THREE.MeshPhysicalMaterial({color:0x11151b,roughness:0.28,metalness:0.12,clearcoat:0.85});
    const screen=new THREE.MeshPhysicalMaterial({color:0x05080d,roughness:0.1,metalness:0.22,clearcoat:1});
    const neon=new THREE.MeshStandardMaterial({color:GLOW,emissive:GLOW,emissiveIntensity:2.8,roughness:0.35});
    const rbox=(w,h,d,r,mat)=>new THREE.Mesh(new RoundedBoxGeometry(w,h,d,6,r),mat);

    const root=new THREE.Group(); const bob=new THREE.Group(); root.add(bob); scene.add(root);

    const headPivot=new THREE.Group(); headPivot.position.set(0,0.62,0); bob.add(headPivot);
    const head=rbox(1.32,1.06,0.72,0.26,white); headPivot.add(head);
    const faceScreen=rbox(1.06,0.80,0.66,0.18,screen); faceScreen.position.z=0.09; headPivot.add(faceScreen);
    const face=new THREE.Mesh(new THREE.PlaneGeometry(0.86,0.645),new THREE.MeshBasicMaterial({map:faceTexture(),transparent:true,toneMapped:false,depthWrite:false}));
    face.position.set(0,0.02,0.425); headPivot.add(face);
    [-1,1].forEach(s=>{
      const ear=new THREE.Mesh(new THREE.CylinderGeometry(0.19,0.19,0.20,24),black); ear.rotation.z=Math.PI/2; ear.position.set(s*0.68,-0.05,0); headPivot.add(ear);
      const ring=new THREE.Mesh(new THREE.TorusGeometry(0.13,0.025,12,28),neon); ring.position.set(s*0.79,-0.05,0); ring.rotation.y=Math.PI/2; headPivot.add(ring);
    });
    const crown=new THREE.Mesh(new THREE.SphereGeometry(0.055,16,16),neon); crown.position.set(0,0.56,0.05); headPivot.add(crown);

    const torso=rbox(0.98,0.92,0.66,0.30,white); torso.position.y=-0.28; bob.add(torso);
    const logo=new THREE.Mesh(new THREE.PlaneGeometry(0.62,0.31),new THREE.MeshBasicMaterial({map:logoTexture(),transparent:true,toneMapped:false,depthWrite:false})); logo.position.set(0,-0.20,0.345); bob.add(logo);
    const waist=rbox(0.86,0.09,0.60,0.04,neon); waist.position.y=-0.72; bob.add(waist);
    const hips=rbox(0.90,0.16,0.58,0.07,black); hips.position.y=-0.80; bob.add(hips);

    [-1,1].forEach(s=>{
      const leg=new THREE.Mesh(new THREE.CapsuleGeometry(0.20,0.22,8,20),white); leg.position.set(s*0.26,-1.02,0); bob.add(leg);
      const foot=rbox(0.42,0.16,0.50,0.07,black); foot.position.set(s*0.26,-1.26,0.04); bob.add(foot);
      const strip=rbox(0.40,0.05,0.48,0.02,neon); strip.position.set(s*0.26,-1.18,0.04); bob.add(strip);
    });

    const makeArm=(side)=>{
      const pivot=new THREE.Group(); pivot.position.set(side*0.52,-0.12,0); bob.add(pivot);
      const shoulder=new THREE.Mesh(new THREE.SphereGeometry(0.17,20,20),black); pivot.add(shoulder);
      const arm=new THREE.Mesh(new THREE.CapsuleGeometry(0.15,0.26,8,20),white); arm.position.set(side*0.08,-0.26,0); arm.rotation.z=side*0.18; pivot.add(arm);
      const cuff=new THREE.Mesh(new THREE.TorusGeometry(0.14,0.022,10,24),neon); cuff.position.set(side*0.13,-0.44,0); cuff.rotation.x=Math.PI/2; pivot.add(cuff);
      const hand=new THREE.Mesh(new THREE.SphereGeometry(0.155,20,20),black); hand.position.set(side*0.15,-0.56,0.02); pivot.add(hand);
      return pivot;
    };
    const leftArm=makeArm(-1), rightArm=makeArm(1);
    const glowLight=new THREE.PointLight(GLOW,5.5,4,2); glowLight.position.set(0,-1.4,0.6); scene.add(glowLight);

    const resize=()=>{
      const w=Math.max(1,canvas.clientWidth),h=Math.max(1,canvas.clientHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)); renderer.setSize(w,h,false);
      camera.aspect=w/h;
      const fovV=THREE.MathUtils.degToRad(camera.fov), fovH=2*Math.atan(Math.tan(fovV/2)*camera.aspect);
      const dist=1.55/Math.sin(Math.min(fovV,fovH)/2);
      camera.position.set(0,-0.10,dist); camera.lookAt(0,-0.10,0); camera.updateProjectionMatrix();
    };
    resize(); window.addEventListener('resize',resize);
    const clock=new THREE.Clock(); let frame=0;
    const tick=()=>{
      frame=requestAnimationFrame(tick); resize();
      const t=clock.getElapsedTime(),phase=t%CYCLE,a=Math.max(0,Math.min(1,(phase-(CYCLE-EMOTE))/EMOTE));
      const active=a>0&&a<1,env=active?Math.sin(a*Math.PI):0;
      const up=active?Math.max(0,Math.min(1,Math.min(a/0.18,(1-a)/0.18))):0;
      const hop=active?Math.abs(Math.sin(a*Math.PI*2))*env:0;
      bob.position.y=hop*0.3+Math.sin(t*1.6)*0.025; bob.scale.set(1+hop*0.03,1-hop*0.05,1+hop*0.03);
      root.rotation.y=Math.sin(t*0.7)*0.14+env*0.12;
      const wave=Math.sin(a*Math.PI*7)*0.4*up;
      rightArm.rotation.z=-(up*2.0+wave); rightArm.rotation.x=-up*0.25;
      leftArm.rotation.z=up*0.3+Math.sin(t*1.6)*0.05;
      headPivot.rotation.z=Math.sin(t*1.2)*0.05-env*0.1; headPivot.position.y=0.62+Math.sin(t*1.6)*0.01;
      renderer.render(scene,camera);
    };
    tick();
  }catch(err){
    console.error('Waka 3D robot failed to initialize:',err);
    canvas.dataset.wakaRobotReady='0';
  }
}
document.addEventListener('DOMContentLoaded',initWakaRobot3D);
