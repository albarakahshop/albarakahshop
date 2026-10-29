const IS_PRODUCT_PAGE = /(?:^|\/)product\.html$/i.test(window.location.pathname);
const WHATSAPP="8801670455526";
// Google Apps Script Web App URL (your live /exec URL)
const APPS_SCRIPT_URL="https://script.google.com/macros/s/AKfycbwve7BtdnB-pAt-p2uQrpykl7sjlyRVCRk3dv8xLzyGnvBkQU8Qa56kR5wvklhAk9OI/exec";

const galleryImages=[  
  
      "images/wall-lamp-1.webp",
      "images/wall-lamp-2.webp",
      "images/wall-lamp-3.webp",
      "images/wall-lamp-4.webp",
      "images/wall-lamp-5.webp",
      "images/wall-lamp-6.webp",
      "images/wall-lamp-7.webp",
      "images/wall-lamp-8.webp",
      "images/wall-lamp-9.webp",
      "images/wall-lamp-10.webp",
      "images/wall-lamp-11.webp",
      "images/wall-lamp-12.webp",
      "images/wall-lamp-13.webp",
      "images/wall-lamp-14.webp",
      "images/wall-lamp-15.webp",
      "images/wall-lamp-16.webp",
      "images/wall-lamp-17.webp",
      "images/wall-lamp-18.webp",
      "images/wall-lamp-1-2.webp",
      "images/wall-lamp-1-3.webp",
      "images/wall-lamp-1-4.webp",
      "images/wall-lamp-1-5.webp",
	  
      "images/table-lamp-1.webp",
      "images/table-lamp-1-2.webp",
      "images/table-lamp-1-3.webp",
      "images/table-lamp-1-4.webp",
      "images/table-lamp-1-5.webp",
	  
      "images/table-lamp-2.webp",
      "images/table-lamp-1-2.webp",
      "images/table-lamp-1-3.webp",
      "images/table-lamp-1-4.webp",
      "images/table-lamp-1-5.webp",
	  
      "images/table-lamp-3.webp",
      "images/table-lamp-3-2.webp",
      "images/table-lamp-3-3.webp",
      "images/table-lamp-3-4.webp",
      "images/table-lamp-3-5.webp",
	  
      "images/table-lamp-4.webp",
      "images/table-lamp-4-2.webp",
      "images/table-lamp-4-3.webp",
      "images/table-lamp-4-4.webp",
      "images/table-lamp-4-5.webp",
	  
      "images/table-lamp-5.webp",
      "images/table-lamp-5-2.webp",
      "images/table-lamp-5-3.webp",
      "images/table-lamp-5-4.webp",
      "images/table-lamp-5-5.webp",
	  
      "images/table-lamp-6.webp",
      "images/table-lamp-6-2.webp",
      "images/table-lamp-6-3.webp",
      "images/table-lamp-6-4.webp",
      "images/table-lamp-6-5.webp",
	  
      "images/table-lamp-7.webp",
      "images/table-lamp-7-2.webp",
      "images/table-lamp-7-3.webp",
      "images/table-lamp-7-4.webp",
      "images/table-lamp-7-5.webp",
	  
      "images/table-lamp-8.webp",
      "images/table-lamp-1-2.webp",
      "images/table-lamp-3-3.webp",
      "images/table-lamp-3-4.webp",
      "images/table-lamp-3-5.webp",
	  
      "images/table-lamp-9.webp",
      "images/table-lamp-3-2.webp",
      "images/table-lamp-3-3.webp",
      "images/table-lamp-3-4.webp",
      "images/table-lamp-3-5.webp",
	  
      "images/table-lamp-10.webp",
      "images/table-lamp-1-2.webp",
      "images/table-lamp-3-3.webp",
      "images/table-lamp-3-4.webp",
      "images/table-lamp-3-5.webp",
	  
      "images/table-lamp-11.webp",
      "images/table-lamp-1-2.webp",
      "images/table-lamp-3-3.webp",
      "images/table-lamp-3-4.webp",
      "images/table-lamp-3-5.webp",
	  
      "images/decorative-items-1.webp",
      "images/decorative-items-1.webp",
      "images/decorative-items-1.webp",
      "images/decorative-items-1.webp",
      "images/decorative-items-1.webp",
	  
      "images/decorative-items-2.webp",
      "images/decorative-items-2.webp",
      "images/decorative-items-2.webp",
      "images/decorative-items-2.webp",
      "images/decorative-items-2.webp",
	  
      "images/decorative-items-3.webp",
      "images/decorative-items-3.webp",
      "images/decorative-items-3.webp",
      "images/decorative-items-3.webp",
      "images/decorative-items-3.webp",
	  
      "images/decorative-items-4.webp",
      "images/decorative-items-4.webp",
      "images/decorative-items-4.webp",
      "images/decorative-items-4.webp",
      "images/decorative-items-4.webp",
	  
      "images/decorative-items-5.webp",
      "images/decorative-items-5.webp",
      "images/decorative-items-5.webp",
      "images/decorative-items-5.webp",
      "images/decorative-items-5.webp",
	  
      "images/decorative-items-6.webp",
      "images/decorative-items-6.webp",
      "images/decorative-items-6.webp",
      "images/decorative-items-6.webp",
      "images/decorative-items-6.webp",
	  
      "images/decorative-items-7.webp",
      "images/decorative-items-7.webp",
      "images/decorative-items-7.webp",
      "images/decorative-items-7.webp",
      "images/decorative-items-7.webp",
	  
      "images/neon-strip-light-1.webp",
      "images/neon-strip-light-2.webp",
      "images/neon-strip-light-1.webp",
      "images/neon-strip-light-2.webp",
      "images/neon-strip-light-1.webp",
	  
      "images/holdar-pin-1.webp",
      "images/holdar-pin-2.webp",
      "images/holdar-pin-1.webp",
      "images/holdar-pin-2.webp",
      "images/holdar-pin-1.webp",
	  
      "images/rgb-leb-light-1.webp",
      "images/rgb-leb-light-1.webp",
      "images/rgb-leb-light-1.webp",
      "images/rgb-leb-light-1.webp",
      "images/rgb-leb-light-1.webp",
	  
      "images/holdar-patch-1.webp",
      "images/holdar-patch-2.webp",
      "images/holdar-patch-1.webp",
      "images/holdar-patch-2.webp",
      "images/holdar-patch-1.webp",
	  
      "images/ac-power-cord-1.webp",
      "images/ac-power-cord-2.webp",
      "images/ac-power-cord-1.webp",
      "images/ac-power-cord-2.webp",
      "images/ac-power-cord-1.webp",
	  
      "images/mini-honey-nut-mixd-1.webp",
      "images/mini-honey-nut-mixd-2.webp",
      "images/mini-honey-nut-mixd-3.webp",
      "images/mini-honey-nut-mixd-4.webp",
      "images/mini-honey-nut-mixd-5.webp",
	  
      "images/mixed-honey-1.webp",
      "images/mixed-honey-2.webp",
      "images/mixed-honey-1.webp",
      "images/mixed-honey-2.webp",
      "images/mixed-honey-2.webp",
	  
      "images/honey-nut-mixd-5.webp",
      "images/honey-nut-mixd-2.webp",
      "images/honey-nut-mixd-4.webp",
      "images/honey-nut-mixd-5.webp",
      "images/honey-nut-mixd-5.webp",
	  
      "images/zatax-attar-1.webp",
      "images/zatax-attar-2.webp",
      "images/zatax-attar-3.webp",
      "images/zatax-attar-1.webp",
      "images/zatax-attar-2.webp",
	  
      "images/vampire-blood-attar-1.webp",
      "images/vampire-blood-attar-2.webp",
      "images/vampire-blood-attar-3.webp",
      "images/vampire-blood-attar-1.webp",
      "images/vampire-blood-attar-2.webp",
	  
      "images/charkul_image_1.webp",
      "images/charkul_image_2.webp",
      "images/charkul_image_3.webp",
      "images/charkul_image_1.webp",
      "images/charkul_image_2.webp",
	  
      "images/drop-shoulder-t-shart-1.webp",
      "images/drop-shoulder-t-shart-2.webp",
      "images/drop-shoulder-t-shart-3.webp",
      "images/drop-shoulder-t-shart-4.webp",
      "images/drop-shoulder-t-shart-5.webp",
	  
      "images/afgani-tupi-1.webp",
      "images/afgani-tupi-2.webp",
      "images/afgani-tupi-3.webp",
      "images/afgani-tupi-4.webp",
      "images/afgani-tupi-5.webp",
	  
      "images/premium-regular-fit-hoodie-1.webp",
      "images/premium-regular-fit-hoodie-2.webp",
      "images/premium-regular-fit-hoodie-3.webp",
      "images/premium-regular-fit-hoodie-4.webp",
      "images/premium-regular-fit-hoodie-5.webp",
	  
      "images/premium-drop-shoulder-hoodie-1.webp",
      "images/premium-drop-shoulder-hoodie-2.webp",
      "images/premium-drop-shoulder-hoodie-3.webp",
      "images/premium-drop-shoulder-hoodie-4.webp",
      "images/premium-drop-shoulder-hoodie-5.webp",
	  
      "images/the-army-of-mehdi-t-shirt-1.webp",
      "images/the-army-of-mehdi-t-shirt-2.webp",
      "images/the-army-of-mehdi-t-shirt-3.webp",
      "images/the-army-of-mehdi-t-shirt-4.webp",
      "images/the-army-of-mehdi-t-shirt-5.webp",
	  
      "images/fiber-paper-1.webp",
      "images/fiber-paper-2.webp",
      "images/fiber-paper-3.webp",
      "images/fiber-paper-4.webp",
      "images/fiber-paper-5.webp"
	  
	  
	  
];


// =====================================================
// MANUAL FEATURED PRODUCT CONTROL
// trending: true  -> show in 🔥 Trending Products
// isNew: true     -> show in ✨ New Arrivals
// Omit either property or set it to false to hide that product
// from the corresponding section. A product can appear in both.
// =====================================================
const products=[
  {
    id:1,
	//stock:false,
	//trending: true,
	//isNew: true,
    name:"আল্লাহু-আকবার PVC Wall Lamp",
    cat:"ওয়াল ল্যাম্প",
    price:650,
    discount:25,
	quantity: 1,
    img:"images/wall-lamp-1.webp",
    images:[
      "images/wall-lamp-1.webp",
      "images/wall-lamp-1-2.webp",
      "images/wall-lamp-1-3.webp",
      "images/wall-lamp-1-4.webp",
      "images/wall-lamp-1-5.webp"
    ],
    short:"ইসলামিক ক্যালিগ্রাফি ডিজাইন",
    desc:"আল্লাহু-আকবার ক্যালিগ্রাফি সম্বলিত এই Premium Decorative PVC Lamp ঘরের পরিবেশে একটি শান্ত, মার্জিত ও নান্দনিক আবহ তৈরি করতে পারে। বেডরুম, ড্রয়িংরুম, নামাজের স্থান বা বিশেষ উপহার হিসেবে এটি ব্যবহার করা যায়।",
    features:["Premium PVC body 2mm","আকর্ষণীয় Islamic Calligraphy","সহজেই লাইট পরিবর্তন সুব্বিধা","দেয়ালে ও টেবিলে দুইভাবেই মানিয়ে নেয়","৭ কালার RGB LED light (9wt with 3 mode)","সাইজঃ- ৪.৫ইঞ্চি পাশ এবং উচ্চতা ১১ইঞ্চি","১টি হোল্ডার কনভার্টার","নরম ও সুন্দর lighting effect","ঘর সাজানো ও উপহারের জন্য উপযোগী"]
  },
  {
    id:2,
	//stock:false,
	//trending: true,
	//isNew: true,
    name:"মাশা-আল্লাহ PVC Wall Lamp",
    cat:"ওয়াল ল্যাম্প",
    price:650,
    discount:25,
	quantity: 4,
    img:"images/wall-lamp-2.webp",
    images:[
      "images/wall-lamp-2.webp",
      "images/wall-lamp-1-2.webp",
      "images/wall-lamp-1-3.webp",
      "images/wall-lamp-1-4.webp",
      "images/wall-lamp-1-5.webp"
    ],
    short:"ইসলামিক ক্যালিগ্রাফি ডিজাইন",
    desc:"মাশা-আল্লাহ ক্যালিগ্রাফির সুন্দর ডিজাইনের এই Decorative Lamp আপনার ঘরের সাজে একটি আলাদা সৌন্দর্য যোগ করবে। Islamic decor পছন্দ করেন এমন প্রিয়জনের জন্যও এটি চমৎকার একটি উপহার।",
    features:["Premium PVC body 2mm","আকর্ষণীয় Islamic Calligraphy","সহজেই লাইট পরিবর্তন সুব্বিধা","দেয়ালে ও টেবিলে দুইভাবেই মানিয়ে নেয়","৭ কালার RGB LED light (9wt with 3 mode)","সাইজঃ- ৪.৫ইঞ্চি পাশ এবং উচ্চতা ১১ইঞ্চি","১টি হোল্ডার কনভার্টার","নরম ও সুন্দর lighting effect","ঘর সাজানো ও উপহারের জন্য উপযোগী"]
  },
  {
    id:3,
	//stock:false,
	//trending: true,
	//isNew: true,
    name:"আল্লাহু — PVC Wall Lamp",
    cat:"ওয়াল ল্যাম্প",
    price:650,
    discount:25,
	quantity: 2,
    img:"images/wall-lamp-3.webp",
    images:[
      "images/wall-lamp-3.webp",
      "images/wall-lamp-1-2.webp",
      "images/wall-lamp-1-3.webp",
      "images/wall-lamp-1-4.webp",
      "images/wall-lamp-1-5.webp"
    ],
    short:"ইসলামিক ক্যালিগ্রাফি ডিজাইন",
    desc:"আল্লাহু আলোর আকর্ষণীয় presentation-এর সঙ্গে Islamic decorative design। ঘরের একটি বিশেষ corner, bedside table বা decorative setup-এ আলাদা visual effect তৈরি করতে ব্যবহার করতে পারেন।",
    features:["Premium PVC body 2mm","আকর্ষণীয় Islamic Calligraphy","সহজেই লাইট পরিবর্তন সুব্বিধা","দেয়ালে ও টেবিলে দুইভাবেই মানিয়ে নেয়","৭ কালার RGB LED light (9wt with 3 mode)","সাইজঃ- ৪.৫ইঞ্চি পাশ এবং উচ্চতা ১১ইঞ্চি","১টি হোল্ডার কনভার্টার","নরম ও সুন্দর lighting effect","ঘর সাজানো ও উপহারের জন্য উপযোগী"]
  },
  {
    id:4,
	//stock:false,
	//trending: true,
	//isNew: true,
    name:"মুহাম্মদ ﷺ — PVC Wall Lamp",
    cat:"ওয়াল ল্যাম্প",
    price:650,
    discount:25,
	quantity: 1,
    img:"images/wall-lamp-4.webp",
    images:[
      "images/wall-lamp-4.webp",
      "images/wall-lamp-1-2.webp",
      "images/wall-lamp-1-3.webp",
      "images/wall-lamp-1-4.webp",
      "images/wall-lamp-1-5.webp"
    ],
    short:"ইসলামিক ক্যালিগ্রাফি ডিজাইন",
    desc:"মুহাম্মদ ﷺ নামের অনুপ্রেরণায় তৈরি এই decorative lamp-এর সবুজ lighting presentation ঘরে একটি শান্ত ও elegant Islamic decor feeling তৈরি করতে সাহায্য করে।",
    features:["Premium PVC body 2mm","আকর্ষণীয় Islamic Calligraphy","সহজেই লাইট পরিবর্তন সুব্বিধা","দেয়ালে ও টেবিলে দুইভাবেই মানিয়ে নেয়","৭ কালার RGB LED light (9wt with 3 mode)","সাইজঃ- ৪.৫ইঞ্চি পাশ এবং উচ্চতা ১১ইঞ্চি","১টি হোল্ডার কনভার্টার","নরম ও সুন্দর lighting effect","ঘর সাজানো ও উপহারের জন্য উপযোগী"]
  },
  {
    id:5,
	//stock:false,
	//trending: true,
	//isNew: true,
    name:"সুবহান-আল্লাহ — PVC Wall Lamp",
    cat:"ওয়াল ল্যাম্প",
    price:650,
    discount:25,
	quantity: 3,
    img:"images/wall-lamp-5.webp",
    images:[
      "images/wall-lamp-5.webp",
      "images/wall-lamp-1-2.webp",
      "images/wall-lamp-1-3.webp",
      "images/wall-lamp-1-4.webp",
      "images/wall-lamp-1-5.webp"
    ],
	short:"ইসলামিক ক্যালিগ্রাফি ডিজাইন",
    desc:"সুবহান-আল্লাহ লেখা উষ্ণ lighting-এর সঙ্গে Islamic calligraphy inspired design। ঘরের ambience আরও premium দেখাতে এবং বিশেষ মুহূর্তে উপহার দিতে এই designটি দারুণ একটি choice।",
    features:["Premium PVC body 2mm","আকর্ষণীয় Islamic Calligraphy","সহজেই লাইট পরিবর্তন সুব্বিধা","দেয়ালে ও টেবিলে দুইভাবেই মানিয়ে নেয়","৭ কালার RGB LED light (9wt with 3 mode)","সাইজঃ- ৪.৫ইঞ্চি পাশ এবং উচ্চতা ১১ইঞ্চি","১টি হোল্ডার কনভার্টার","নরম ও সুন্দর lighting effect","ঘর সাজানো ও উপহারের জন্য উপযোগী"]
  },
  {
    id:6,
	//stock:false,
	//trending: true,
	//isNew: true,
    name:"আলহামদুলিল্লাহ — PVC Wall Lamp",
    cat:"ওয়াল ল্যাম্প",
    price:650,
    discount:25,
	quantity: 1,
    img:"images/wall-lamp-6.webp",
    images:[
      "images/wall-lamp-6.webp",
      "images/wall-lamp-1-2.webp",
      "images/wall-lamp-1-3.webp",
      "images/wall-lamp-1-4.webp",
      "images/wall-lamp-1-5.webp"
    ],
	short:"ইসলামিক ক্যালিগ্রাফি ডিজাইন",
    desc:"আলহামদুলিল্লাহ লেখা উষ্ণ lighting-এর সঙ্গে Islamic calligraphy inspired design। ঘরের ambience আরও premium দেখাতে এবং বিশেষ মুহূর্তে উপহার দিতে এই designটি দারুণ একটি choice।",
    features:["Premium PVC body 2mm","আকর্ষণীয় Islamic Calligraphy","সহজেই লাইট পরিবর্তন সুব্বিধা","দেয়ালে ও টেবিলে দুইভাবেই মানিয়ে নেয়","৭ কালার RGB LED light (9wt with 3 mode)","সাইজঃ- ৪.৫ইঞ্চি পাশ এবং উচ্চতা ১১ইঞ্চি","১টি হোল্ডার কনভার্টার","নরম ও সুন্দর lighting effect","ঘর সাজানো ও উপহারের জন্য উপযোগী"]
  },
  {
    id:7,
	//stock:false,
	//trending: true,
	//isNew: true,
    name:"মাছরাঙ্গা — PVC Wall Lamp",
    cat:"ওয়াল ল্যাম্প",
    price:650,
    discount:25,
	quantity: 1,
    img:"images/wall-lamp-7.webp",
    images:[
      "images/wall-lamp-7.webp",
      "images/wall-lamp-1-2.webp",
      "images/wall-lamp-1-3.webp",
      "images/wall-lamp-1-4.webp",
      "images/wall-lamp-1-5.webp"
    ],
	short:"মাছরাঙ্গা ও পদ্ম ফুলের উষ্ণ আলো",
    desc:"মাছরাঙ্গা ও পদ্ম ফুল এর উষ্ণ lighting-এর সঙ্গে inspired design। ঘরের ambience আরও premium দেখাতে এবং বিশেষ মুহূর্তে উপহার দিতে এই designটি দারুণ একটি choice।",
    features:["Premium PVC body 2mm","সহজেই লাইট পরিবর্তন সুব্বিধা","দেয়ালে ও টেবিলে দুইভাবেই মানিয়ে নেয়","৭ কালার RGB LED light (9wt with 3 mode)","সাইজঃ- ৪.৫ইঞ্চি পাশ এবং উচ্চতা ১১ইঞ্চি","১টি হোল্ডার কনভার্টার","নরম ও সুন্দর lighting effect","ঘর সাজানো ও উপহারের জন্য উপযোগী"]
  },
  {
    id:8,
	//stock:false,
	//trending: true,
	//isNew: true,
    name:"সূর্যমুখী — PVC Wall Lamp",
    cat:"ওয়াল ল্যাম্প",
    price:650,
    discount:25,
	quantity: 5,
    img:"images/wall-lamp-8.webp",
    images:[
      "images/wall-lamp-8.webp",
      "images/wall-lamp-1-2.webp",
      "images/wall-lamp-1-3.webp",
      "images/wall-lamp-1-4.webp",
      "images/wall-lamp-1-5.webp"
    ],
	short:"সূর্যমুখী ফুলের উষ্ণ আলোর ডিজাইন",
    desc:"সূর্যমুখী ফুলের উষ্ণ lighting-এর সঙ্গে inspired design। ঘরের ambience আরও premium দেখাতে এবং বিশেষ মুহূর্তে উপহার দিতে এই designটি দারুণ একটি choice।",
    features:["Premium PVC body 2mm","সহজেই লাইট পরিবর্তন সুব্বিধা","দেয়ালে ও টেবিলে দুইভাবেই মানিয়ে নেয়","৭ কালার RGB LED light (9wt with 3 mode)","সাইজঃ- ৪.৫ইঞ্চি পাশ এবং উচ্চতা ১১ইঞ্চি","১টি হোল্ডার কনভার্টার","নরম ও সুন্দর lighting effect","ঘর সাজানো ও উপহারের জন্য উপযোগী"]
  },
  {
    id:9,
	//stock:false,
	//trending: true,
	//isNew: true,
    name:"গোলাপ ফুল — PVC Wall Lamp",
    cat:"ওয়াল ল্যাম্প",
    price:650,
    discount:25,
	quantity: 3,
    img:"images/wall-lamp-9.webp",
    images:[
      "images/wall-lamp-9.webp",
      "images/wall-lamp-1-2.webp",
      "images/wall-lamp-1-3.webp",
      "images/wall-lamp-1-4.webp",
      "images/wall-lamp-1-5.webp"
    ],
	short:"গোলাপের উষ্ণ আলোর ডিজাইন",
    desc:"উষ্ণ গোলাপের lighting-এর সঙ্গে inspired design। ঘরের ambience আরও premium দেখাতে এবং বিশেষ মুহূর্তে উপহার দিতে এই designটি দারুণ একটি choice।",
    features:["Premium PVC body 2mm","সহজেই লাইট পরিবর্তন সুব্বিধা","দেয়ালে ও টেবিলে দুইভাবেই মানিয়ে নেয়","৭ কালার RGB LED light (9wt with 3 mode)","সাইজঃ- ৪.৫ইঞ্চি পাশ এবং উচ্চতা ১১ইঞ্চি","১টি হোল্ডার কনভার্টার","নরম ও সুন্দর lighting effect","ঘর সাজানো ও উপহারের জন্য উপযোগী"]
  },
  {
    id:10,
	//stock:false,
	//trending: true,
	//isNew: true,
    name:"গ্রামীণ পরিবেশ — PVC Wall Lamp",
    cat:"ওয়াল ল্যাম্প",
    price:650,
    discount:23,
	quantity: 1,
    img:"images/wall-lamp-10.webp",
    images:[
      "images/wall-lamp-10.webp",
      "images/wall-lamp-10-2.webp",
      "images/wall-lamp-1-2.webp",
      "images/wall-lamp-1-4.webp",
      "images/wall-lamp-1-5.webp"
    ],
	short:"গ্রামের উষ্ণ আলোর ছোঁয়া",
    desc:"গ্রামীণ পরিবেশের inspired design। ঘরের ambience আরও premium দেখাতে এবং বিশেষ মুহূর্তে উপহার দিতে এই designটি দারুণ একটি choice।",
    features:["Premium PVC body 2mm","আকর্ষণীয় design","সহজেই লাইট পরিবর্তন সুব্বিধা","দেয়ালে ও টেবিলে দুইভাবেই মানিয়ে নেয়","৭ কালার RGB LED light (9wt with 3 mode)","সাইজঃ- ৪.৫ইঞ্চি পাশ এবং উচ্চতা ১১ইঞ্চি","১টি হোল্ডার কনভার্টার","নরম ও সুন্দর lighting effect","ঘর সাজানো ও উপহারের জন্য উপযোগী"]
  },
  {
    id:11,
	//stock:false,
	//trending: true,
	//isNew: true,
    name:"পদ্ম ফুল — PVC Wall Lamp",
    cat:"ওয়াল ল্যাম্প",
    price:650,
    discount:25,
	quantity: 1,
    img:"images/wall-lamp-11.webp",
    images:[
      "images/wall-lamp-11.webp",
      "images/wall-lamp-1-2.webp",
      "images/wall-lamp-1-3.webp",
      "images/wall-lamp-1-4.webp",
      "images/wall-lamp-1-5.webp"
    ],
	short:"পদ্ম ফুলের উষ্ণ আলোর ডিজাইন",
    desc:"পদ্ম ফুলের উষ্ণ lighting-এর সঙ্গে inspired design। ঘরের ambience আরও premium দেখাতে এবং বিশেষ মুহূর্তে উপহার দিতে এই designটি দারুণ একটি choice।",
    features:["Premium PVC body 2mm","সহজেই লাইট পরিবর্তন সুব্বিধা","দেয়ালে ও টেবিলে দুইভাবেই মানিয়ে নেয়","৭ কালার RGB LED light (9wt with 3 mode)","সাইজঃ- ৪.৫ইঞ্চি পাশ এবং উচ্চতা ১১ইঞ্চি","১টি হোল্ডার কনভার্টার","নরম ও সুন্দর lighting effect","ঘর সাজানো ও উপহারের জন্য উপযোগী"]
  },
  {
    id:12,
	//stock:false,
	//trending: true,
	//isNew: true,
    name:"আলহামদুলিল্লাহ-২ — PVC Wall Lamp",
    cat:"ওয়াল ল্যাম্প",
    price:650,
    discount:25,
	quantity: 2,
    img:"images/wall-lamp-12.webp",
    images:[
      "images/wall-lamp-12.webp",
      "images/wall-lamp-1-2.webp",
      "images/wall-lamp-1-3.webp",
      "images/wall-lamp-1-4.webp",
      "images/wall-lamp-1-5.webp"
    ],
	short:"ইসলামিক ক্যালিগ্রাফিক উষ্ণ আলো",
    desc:"আলহামদুলিল্লাহ লেখা উষ্ণ lighting-এর সঙ্গে Islamic calligraphy inspired design। ঘরের ambience আরও premium দেখাতে এবং বিশেষ মুহূর্তে উপহার দিতে এই designটি দারুণ একটি choice।",
    features:["Premium PVC body 2mm","আকর্ষণীয় Islamic Calligraphy","সহজেই লাইট পরিবর্তন সুব্বিধা","দেয়ালে ও টেবিলে দুইভাবেই মানিয়ে নেয়","৭ কালার RGB LED light (9wt with 3 mode)","সাইজঃ- ৪.৫ইঞ্চি পাশ এবং উচ্চতা ১১ইঞ্চি","১টি হোল্ডার কনভার্টার","নরম ও সুন্দর lighting effect","ঘর সাজানো ও উপহারের জন্য উপযোগী"]
  },
  {
    id:13,
	//stock:false,
	//trending: true,
	//isNew: true,
    name:"টিউলিপ ফুল — PVC Wall Lamp",
    cat:"ওয়াল ল্যাম্প",
    price:650,
    discount:25,
	quantity: 3,
    img:"images/wall-lamp-13.webp",
    images:[
      "images/wall-lamp-13.webp",
      "images/wall-lamp-1-2.webp",
      "images/wall-lamp-1-3.webp",
      "images/wall-lamp-1-4.webp",
      "images/wall-lamp-1-5.webp"
    ],
	short:"টিউলিপ ফুলের উষ্ণ আলো",
    desc:"টিউলিপ ফুলের উষ্ণ গোল্ডেন lighting-এর সঙ্গে inspired design। ঘরের ambience আরও premium দেখাতে এবং বিশেষ মুহূর্তে উপহার দিতে এই designটি দারুণ একটি choice।",
    features:["Premium PVC body 2mm","সহজেই লাইট পরিবর্তন সুব্বিধা","দেয়ালে ও টেবিলে দুইভাবেই মানিয়ে নেয়","৭ কালার RGB LED light (9wt with 3 mode)","সাইজঃ- ৪.৫ইঞ্চি পাশ এবং উচ্চতা ১১ইঞ্চি","১টি হোল্ডার কনভার্টার","নরম ও সুন্দর lighting effect","ঘর সাজানো ও উপহারের জন্য উপযোগী"]
  },
  {
    id:14,
	//stock:false,
	//trending: true,
	//isNew: true,
    name:"আলহামদুলিল্লাহ-৩ — PVC Wall Lamp",
    cat:"ওয়াল ল্যাম্প",
    price:650,
    discount:25,
	quantity: 4,
    img:"images/wall-lamp-14.webp",
    images:[
      "images/wall-lamp-14.webp",
      "images/wall-lamp-1-2.webp",
      "images/wall-lamp-1-3.webp",
      "images/wall-lamp-1-4.webp",
      "images/wall-lamp-1-5.webp"
    ],
	short:"আলহামদুলিল্লাহ লেখা ক্যালিগ্রাফিক ডিজাইন",
    desc:"আলহামদুলিল্লাহ লেখা উষ্ণ lighting-এর সঙ্গে Islamic calligraphy inspired design। ঘরের ambience আরও premium দেখাতে এবং বিশেষ মুহূর্তে উপহার দিতে এই designটি দারুণ একটি choice।",
    features:["Premium PVC body 2mm","আকর্ষণীয় Islamic Calligraphy","সহজেই লাইট পরিবর্তন সুব্বিধা","দেয়ালে ও টেবিলে দুইভাবেই মানিয়ে নেয়","৭ কালার RGB LED light (9wt with 3 mode)","সাইজঃ- ৪.৫ইঞ্চি পাশ এবং উচ্চতা ১১ইঞ্চি","১টি হোল্ডার কনভার্টার","নরম ও সুন্দর lighting effect","ঘর সাজানো ও উপহারের জন্য উপযোগী"]
  },
  {
    id:15,
	//stock:false,
	//trending: true,
	//isNew: true,
    name:"মুহাম্মদ ﷺ — PVC Wall Lamp Design 2",
    cat:"ওয়াল ল্যাম্প",
    price:650,
    discount:25,
	quantity: 1,
    img:"images/wall-lamp-15.webp",
    images:[
      "images/wall-lamp-15.webp",
      "images/wall-lamp-1-2.webp",
      "images/wall-lamp-1-3.webp",
      "images/wall-lamp-1-4.webp",
      "images/wall-lamp-1-5.webp"
    ],
	short:"মুহাম্মদ ﷺ লেখা ক্যালিগ্রাফিক ডিজাইন",
    desc:"মুহাম্মদ ﷺ লেখা উষ্ণ lighting-এর সঙ্গে Islamic calligraphy inspired design। ঘরের ambience আরও premium দেখাতে এবং বিশেষ মুহূর্তে উপহার দিতে এই designটি দারুণ একটি choice।",
    features:["Premium PVC body 2mm","আকর্ষণীয় Islamic Calligraphy","সহজেই লাইট পরিবর্তন সুব্বিধা","দেয়ালে ও টেবিলে দুইভাবেই মানিয়ে নেয়","৭ কালার RGB LED light (9wt with 3 mode)","সাইজঃ- ৩ইঞ্চি পাশ এবং উচ্চতা ১০ইঞ্চি","১টি হোল্ডার কনভার্টার","নরম ও সুন্দর lighting effect","ঘর সাজানো ও উপহারের জন্য উপযোগী"]
  },
  {
    id:16,
	//stock:false,
	trending: true,
	isNew: true,
    name:"বাশ-পাতা — PVC Wall Lamp",
    cat:"ওয়াল ল্যাম্প",
    price:650,
    discount:25,
	quantity: 1,
    img:"images/wall-lamp-16.webp",
    images:[
      "images/wall-lamp-16.webp",
      "images/wall-lamp-1-2.webp",
      "images/wall-lamp-1-3.webp",
      "images/wall-lamp-1-4.webp",
      "images/wall-lamp-1-5.webp"
    ],
	short:"বাশ-পাতা ডিজাইন",
    desc:"বাশ-পাতার উষ্ণ lighting-এর সঙ্গে inspired design। ঘরের ambience আরও premium দেখাতে এবং বিশেষ মুহূর্তে উপহার দিতে এই designটি দারুণ একটি choice।",
    features:["Premium PVC body 2mm","সহজেই লাইট পরিবর্তন সুব্বিধা","দেয়ালে ও টেবিলে দুইভাবেই মানিয়ে নেয়","৭ কালার RGB LED light (9wt with 3 mode)","সাইজঃ- ৩ইঞ্চি পাশ এবং উচ্চতা ১০ইঞ্চি","১টি হোল্ডার কনভার্টার","নরম ও সুন্দর lighting effect","ঘর সাজানো ও উপহারের জন্য উপযোগী"]
  },
  {
    id:17,
	//stock:false,
	//trending: true,
	//isNew: true,
    name:"আল্লাহু — PVC Wall Lamp Design 2",
    cat:"ওয়াল ল্যাম্প",
    price:650,
    discount:25,
	quantity: 1,
    img:"images/wall-lamp-17.webp",
    images:[
      "images/wall-lamp-17.webp",
      "images/wall-lamp-1-2.webp",
      "images/wall-lamp-1-3.webp",
      "images/wall-lamp-1-4.webp",
      "images/wall-lamp-1-5.webp"
    ],
	short:"আল্লাহু লেখা ক্যালিগ্রাফিক ডিজাইন",
    desc:"আল্লাহু আলোর আকর্ষণীয় presentation-এর সঙ্গে Islamic calligraphy inspired design। ঘরের ambience আরও premium দেখাতে এবং বিশেষ মুহূর্তে উপহার দিতে এই designটি দারুণ একটি choice।",
    features:["Premium PVC body 2mm","আকর্ষণীয় Islamic Calligraphy","সহজেই লাইট পরিবর্তন সুব্বিধা","দেয়ালে ও টেবিলে দুইভাবেই মানিয়ে নেয়","৭ কালার RGB LED light (9wt with 3 mode)","সাইজঃ- ৩ইঞ্চি পাশ এবং উচ্চতা ১০ইঞ্চি","১টি হোল্ডার কনভার্টার","নরম ও সুন্দর lighting effect","ঘর সাজানো ও উপহারের জন্য উপযোগী"]
  },
  {
    id:18,
	//stock:false,
	//trending: true,
	isNew: true,
    name:"Couple Name Design (Custom) — PVC Wall Lamp",
    cat:"ওয়াল ল্যাম্প",
    price:650,
    discount:22,
    img:"images/wall-lamp-18.webp",
    images:[
      "images/wall-lamp-18.webp",
      "images/wall-lamp-1-2.webp",
      "images/wall-lamp-1-3.webp",
      "images/wall-lamp-1-4.webp",
      "images/wall-lamp-1-5.webp"
    ],
	short:"প্রিমিয়াম কাপল নেম কাস্টম ল্যাম্প",
    desc:"আপনার প্রিয় মানুষটির নামকে আরও বিশেষ ও স্মরণীয় করে তুলতে তৈরি Premium Couple Name Decorative Lamp। বিবাহবার্ষিকী, জন্মদিন, বিয়ে, ভালোবাসার বিশেষ দিন বা প্রিয়জনকে উপহার দেওয়ার জন্য উপযুক্ত। ল্যাম্পটির কালো বডির ওপর রোমান্টিক কাপল ডিজাইন, হার্ট ও ফুলের নান্দনিক কাটিং এবং “আপনাদের” নামের আলোকিত ডিজাইন একে করে তুলবে অসাধারণ একটি কাস্টম ডেকোরেশন পিস। আলো জ্বালালে পুরো ডিজাইনটি উষ্ণ অ্যাম্বার আলোয় সুন্দরভাবে ফুটে ওঠে।",
    features:["কাপল থিমের আকর্ষণীয় ডিজাইন","দুইজনের নাম কাস্টমাইজ করার সুবিধা","সহজেই লাইট পরিবর্তন সুব্বিধা","দেয়ালে ও টেবিলে দুইভাবেই মানিয়ে নেয়","৭ কালার RGB LED light (9wt with 3 mode)","সাইজঃ- ৩ইঞ্চি পাশ এবং উচ্চতা ১০ইঞ্চি","আলো জ্বালালে নাম ও ডিজাইন সুন্দরভাবে আলোকিত হয়","নরম ও সুন্দর lighting effect","ঘর সাজানো ও উপহারের জন্য উপযোগী","একটি ল্যাম্প, দুটি নাম—আর অসংখ্য সুন্দর স্মৃতি।"]
  },
  {
    id:19,
	//stock:false,
	//trending: true,
	//isNew: true,
    name:"সুবহান-আল্লাহ PVC টেবিল ল্যাম্প — Black & Silver",
    cat:"টেবিল ল্যাম্প",
    price:720,
    discount:17,
	quantity: 1,
    img:"images/table-lamp-1.webp",
    images:[
      "images/table-lamp-1.webp",
      "images/table-lamp-1-2.webp",
      "images/table-lamp-1-3.webp",
      "images/table-lamp-1-4.webp",
      "images/table-lamp-1-5.webp"
    ],
    short:"ঘর সাজাতে ইসলামিক আলোর ডিজাইন",
    desc:"উষ্ণ গোল্ডেন lighting-এর সঙ্গে Islamic calligraphy inspired design। ঘরের ambience আরও premium দেখাতে এবং বিশেষ মুহূর্তে উপহার দিতে এই designটি দারুণ একটি choice।",
    features:["Premium PVC body 2mm","আকর্ষণীয় Islamic Calligraphy","সহজেই লাইট পরিবর্তন সুব্বিধা","৭ কালার RGB LED light (9wt with 3 mode)","সাইজঃ- ৪.৫ইঞ্চি পাশ এবং উচ্চতা ১১ইঞ্চি","১টি হোল্ডার কনভার্টার","নরম ও সুন্দর lighting effect","ঘর সাজানো ও উপহারের জন্য উপযোগী"]
  },
  {
    id:20,
	//stock:false,
	//trending: true,
	//isNew: true,
    name:"আলহামদুলিল্লাহ PVC টেবিল ল্যাম্প — Black & Silver",
    cat:"টেবিল ল্যাম্প",
    price:720,
    discount:17,
	quantity: 1,
    img:"images/table-lamp-2.webp",
    images:[
      "images/table-lamp-2.webp",
      "images/table-lamp-1-2.webp",
      "images/table-lamp-1-3.webp",
      "images/table-lamp-1-4.webp",
      "images/table-lamp-1-5.webp"
    ],
    short:"ঘর সাজাতে ইসলামিক আলোর ডিজাইন",
    desc:"উষ্ণ গোল্ডেন lighting-এর সঙ্গে Islamic calligraphy inspired design। ঘরের ambience আরও premium দেখাতে এবং বিশেষ মুহূর্তে উপহার দিতে এই designটি দারুণ একটি choice।",
    features:["Premium PVC body 2mm","আকর্ষণীয় Islamic Calligraphy","সহজেই লাইট পরিবর্তন সুব্বিধা","৭ কালার RGB LED light (9wt with 3 mode)","সাইজঃ- ৪.৫ইঞ্চি পাশ এবং উচ্চতা ১১ইঞ্চি","১টি হোল্ডার কনভার্টার","নরম ও সুন্দর lighting effect","ঘর সাজানো ও উপহারের জন্য উপযোগী"]
  },
  {
    id:21,
	//stock:false,
	//trending: true,
	//isNew: true,
    name:"সূর্যমুখী ফুল PVC টেবিল ল্যাম্প — Black & Silver",
    cat:"টেবিল ল্যাম্প",
    price:720,
    discount:18,
	quantity: 1,
    img:"images/table-lamp-3.webp",
    images:[
      "images/table-lamp-3.webp",
      "images/table-lamp-3-2.webp",
      "images/table-lamp-3-3.webp",
      "images/table-lamp-3-4.webp",
      "images/table-lamp-3-5.webp"
    ],
    short:"ঘর সাজাতে সূর্যমুখী ফুলের ডিজাইন",
    desc:"উষ্ণ গোল্ডেন lighting-এর সঙ্গে সূর্যমুখী ফুলের ডিজাইন। ঘরের ambience আরও premium দেখাতে এবং বিশেষ মুহূর্তে উপহার দিতে এই designটি দারুণ একটি choice।",
    features:["Premium PVC body 2mm","সহজেই লাইট পরিবর্তন সুব্বিধা","৭ কালার RGB LED light (9wt with 3 mode)","সাইজঃ- ৪.৫ইঞ্চি পাশ এবং উচ্চতা ১১ইঞ্চি","১টি হোল্ডার কনভার্টার","নরম ও সুন্দর lighting effect","ঘর সাজানো ও উপহারের জন্য উপযোগী"]
  },
  {
    id:22,
	//stock:false,
	trending: true,
	//isNew: true,
    name:"গ্রামীণ পরিবেশ, ঘর ও গাছ PVC টেবিল ল্যাম্প — Black & Silver",
    cat:"টেবিল ল্যাম্প",
    price:720,
    discount:15,
	quantity: 2,
    img:"images/table-lamp-4.webp",
    images:[
      "images/table-lamp-4.webp",
      "images/table-lamp-4-2.webp",
      "images/table-lamp-4-3.webp",
      "images/table-lamp-4-4.webp",
      "images/table-lamp-4-5.webp"
    ],
    short:"ঘর সাজাতে গ্রামীণ পরিবেশে",
    desc:"গ্রামীণ পরিবেশের inspired design। ঘরের ambience আরও premium দেখাতে এবং বিশেষ মুহূর্তে উপহার দিতে এই designটি দারুণ একটি choice।",
    features:["Premium PVC body 2mm","সহজেই লাইট পরিবর্তন সুব্বিধা","৭ কালার RGB LED light (9wt with 3 mode)","সাইজঃ- ৪.৫ইঞ্চি পাশ এবং উচ্চতা ১১ইঞ্চি","১টি হোল্ডার কনভার্টার","নরম ও সুন্দর lighting effect","ঘর সাজানো ও উপহারের জন্য উপযোগী"]
  },
  {
    id:23,
	//stock:false,
	//trending: true,
	//isNew: true,
    name:"গোলাপ ফুল PVC টেবিল ল্যাম্প — Black & Silver",
    cat:"টেবিল ল্যাম্প",
    price:720,
    discount:18,
	quantity: 1,
    img:"images/table-lamp-5.webp",
    images:[
      "images/table-lamp-5.webp",
      "images/table-lamp-5-2.webp",
      "images/table-lamp-5-3.webp",
      "images/table-lamp-5-4.webp",
      "images/table-lamp-5-5.webp"
    ],
    short:"ঘর সাজাতে গোলাপের আলোর",
    desc:"গোলাপ ফুলের আলোয় রাত হোক আলোকিত। ঘরের ambience আরও premium দেখাতে এবং বিশেষ মুহূর্তে উপহার দিতে এই designটি দারুণ একটি choice।",
    features:["Premium PVC body 2mm","সহজেই লাইট পরিবর্তন সুব্বিধা","৭ কালার RGB LED light (9wt with 3 mode)","সাইজঃ- ৪.৫ইঞ্চি পাশ এবং উচ্চতা ১১ইঞ্চি","১টি হোল্ডার কনভার্টার","নরম ও সুন্দর lighting effect","ঘর সাজানো ও উপহারের জন্য উপযোগী"]
  },
  {
    id:24,
	//stock:false,
	//trending: true,
	//isNew: true,
    name:"মুহাম্মদ ﷺ লেখা PVC টেবিল ল্যাম্প — Black & Gold",
    cat:"টেবিল ল্যাম্প",
    price:780,
    discount:18,
	quantity: 1,
    img:"images/table-lamp-6.webp",
    images:[
      "images/table-lamp-6.webp",
      "images/table-lamp-6-2.webp",
      "images/table-lamp-6-3.webp",
      "images/table-lamp-6-4.webp",
      "images/table-lamp-6-5.webp"
    ],
    short:"ঘর সাজাতে ইসলামিক আলোর ডিজাইন",
    desc:"উষ্ণ গোল্ডেন lighting-এর সঙ্গে Islamic calligraphy inspired design। ঘরের ambience আরও premium দেখাতে এবং বিশেষ মুহূর্তে উপহার দিতে এই designটি দারুণ একটি choice।",
    features:["Premium PVC body 2mm","আকর্ষণীয় Islamic Calligraphy","সহজেই লাইট পরিবর্তন সুব্বিধা","৭ কালার RGB LED light (9wt with 3 mode)","সাইজঃ- ৪.৫ইঞ্চি পাশ এবং উচ্চতা ১১ইঞ্চি","১টি হোল্ডার কনভার্টার","নরম ও সুন্দর lighting effect","ঘর সাজানো ও উপহারের জন্য উপযোগী"]
  },
  {
    id:25,
	//stock:false,
	//trending: true,
	//isNew: true,
    name:"আল্লাহু লেখা PVC টেবিল ল্যাম্প — Black & Gold",
    cat:"টেবিল ল্যাম্প",
    price:780,
    discount:18,
	quantity: 1,
    img:"images/table-lamp-7.webp",
    images:[
      "images/table-lamp-7.webp",
      "images/table-lamp-7-2.webp",
      "images/table-lamp-7-3.webp",
      "images/table-lamp-7-4.webp",
      "images/table-lamp-7-5.webp"
    ],
    short:"ঘর সাজাতে ইসলামিক আলোর ডিজাইন",
    desc:"উষ্ণ গোল্ডেন lighting-এর সঙ্গে Islamic calligraphy inspired design। ঘরের ambience আরও premium দেখাতে এবং বিশেষ মুহূর্তে উপহার দিতে এই designটি দারুণ একটি choice।",
    features:["Premium PVC body 2mm","আকর্ষণীয় Islamic Calligraphy","সহজেই লাইট পরিবর্তন সুব্বিধা","৭ কালার RGB LED light (9wt with 3 mode)","সাইজঃ- ৪.৫ইঞ্চি পাশ এবং উচ্চতা ১১ইঞ্চি","১টি হোল্ডার কনভার্টার","নরম ও সুন্দর lighting effect","ঘর সাজানো ও উপহারের জন্য উপযোগী"]
  },
  {
    id:26,
	//stock:false,
	//trending: true,
	//isNew: true,
    name:"মুহাম্মদ ﷺ লেখা PVC টেবিল ল্যাম্প — Design-2 Black & Silver",
    cat:"টেবিল ল্যাম্প",
    price:780,
    discount:18,
	quantity: 1,
    img:"images/table-lamp-8.webp",
    images:[
      "images/table-lamp-8.webp",
      "images/table-lamp-1-2.webp",
      "images/table-lamp-3-3.webp",
      "images/table-lamp-3-4.webp",
      "images/table-lamp-3-5.webp"
    ],
    short:"ঘর সাজাতে ইসলামিক আলোর ডিজাইন",
    desc:"উষ্ণ গোল্ডেন lighting-এর সঙ্গে Islamic calligraphy inspired design। ঘরের ambience আরও premium দেখাতে এবং বিশেষ মুহূর্তে উপহার দিতে এই designটি দারুণ একটি choice।",
    features:["Premium PVC body 2mm","আকর্ষণীয় Islamic Calligraphy","সহজেই লাইট পরিবর্তন সুব্বিধা","৭ কালার RGB LED light (9wt with 3 mode)","সাইজঃ- ৪.৫ইঞ্চি পাশ এবং উচ্চতা ১১ইঞ্চি","১টি হোল্ডার কনভার্টার","নরম ও সুন্দর lighting effect","ঘর সাজানো ও উপহারের জন্য উপযোগী"]
  },
  {
    id:27,
	//stock:false,
	trending: true,
	//isNew: true,
    name:"টিউলিপ ফুল PVC টেবিল ল্যাম্প — Black & Silver",
    cat:"টেবিল ল্যাম্প",
    price:720,
    discount:18,
	quantity: 1,
    img:"images/table-lamp-9.webp",
    images:[
      "images/table-lamp-9.webp",
      "images/table-lamp-3-2.webp",
      "images/table-lamp-3-3.webp",
      "images/table-lamp-3-4.webp",
      "images/table-lamp-3-5.webp"
    ],
    short:"টিউলিপ ফুলের উষ্ণ আলোর ডিজাইন",
    desc:"টিউলিপ ফুলের উষ্ণ গোল্ডেন lighting-এর সঙ্গে inspired design। ঘরের ambience আরও premium দেখাতে এবং বিশেষ মুহূর্তে উপহার দিতে এই designটি দারুণ একটি choice।",
    features:["Premium PVC body 2mm","আকর্ষণীয় Islamic Calligraphy","সহজেই লাইট পরিবর্তন সুব্বিধা","৭ কালার RGB LED light (9wt with 3 mode)","সাইজঃ- ৪.৫ইঞ্চি পাশ এবং উচ্চতা ১১ইঞ্চি","১টি হোল্ডার কনভার্টার","নরম ও সুন্দর lighting effect","ঘর সাজানো ও উপহারের জন্য উপযোগী"]
  },
  {
    id:28,
	//stock:false,
	trending: true,
	//isNew: true,
    name:"আল্লাহু লেখা PVC টেবিল ল্যাম্প — Design-2 Black & Silver",
    cat:"টেবিল ল্যাম্প",
    price:725,
    discount:18,
	quantity: 1,
    img:"images/table-lamp-10.webp",
    images:[
      "images/table-lamp-10.webp",
      "images/table-lamp-1-2.webp",
      "images/table-lamp-3-3.webp",
      "images/table-lamp-3-4.webp",
      "images/table-lamp-3-5.webp"
    ],
    short:"ঘর সাজাতে ইসলামিক আলোর ডিজাইন",
    desc:"উষ্ণ গোল্ডেন lighting-এর সঙ্গে Islamic calligraphy inspired design। ঘরের ambience আরও premium দেখাতে এবং বিশেষ মুহূর্তে উপহার দিতে এই designটি দারুণ একটি choice।",
    features:["Premium PVC body 2mm","আকর্ষণীয় Islamic Calligraphy","সহজেই লাইট পরিবর্তন সুব্বিধা","৭ কালার RGB LED light (9wt with 3 mode)","সাইজঃ- ৪.৫ইঞ্চি পাশ এবং উচ্চতা ১১ইঞ্চি","১টি হোল্ডার কনভার্টার","নরম ও সুন্দর lighting effect","ঘর সাজানো ও উপহারের জন্য উপযোগী"]
  },
  {
    id:29,
	//stock:false,
	//trending: true,
	//isNew: true,
    name:"আল্লাহু লেখা PVC টেবিল ল্যাম্প — Design-3 Black & Silver",
    cat:"টেবিল ল্যাম্প",
    price:720,
    discount:18,
	quantity: 1,
    img:"images/table-lamp-11.webp",
    images:[
      "images/table-lamp-11.webp",
      "images/table-lamp-1-2.webp",
      "images/table-lamp-3-3.webp",
      "images/table-lamp-3-4.webp",
      "images/table-lamp-3-5.webp"
    ],
    short:"ঘর সাজাতে ইসলামিক ডিজাইন",
    desc:"উষ্ণ গোল্ডেন lighting-এর সঙ্গে Islamic calligraphy inspired design। ঘরের ambience আরও premium দেখাতে এবং বিশেষ মুহূর্তে উপহার দিতে এই designটি দারুণ একটি choice।",
    features:["Premium PVC body 2mm","আকর্ষণীয় Islamic Calligraphy","সহজেই লাইট পরিবর্তন সুব্বিধা","৭ কালার RGB LED light (9wt with 3 mode)","সাইজঃ- ৪.৫ইঞ্চি পাশ এবং উচ্চতা ১১ইঞ্চি","১টি হোল্ডার কনভার্টার","নরম ও সুন্দর lighting effect","ঘর সাজানো ও উপহারের জন্য উপযোগী"]
  },
  {
    id:30,
	//stock:false,
	//trending: true,
	//isNew: true,
    name:"ডেকোরেটিভ লাইট — Design 01",
    cat:"ডেকোরেটিভ আইটেম",
    price:650,
    discount:15,
    img:"images/decorative-items-1.webp",
    images:[
      "images/decorative-items-1.webp",
      "images/decorative-items-1.webp",
      "images/decorative-items-1.webp",
      "images/decorative-items-1.webp",
      "images/decorative-items-1.webp"
    ],
    short:"ঘর সাজাতে প্রিমিয়াম ডিজাইন",
    desc:"উষ্ণ lighting-এর সঙ্গে প্রিমিয়াম ডিজাইন। ঘরের ambience আরও premium দেখাতে এবং বিশেষ মুহূর্তে উপহার দিতে এই designটি দারুণ একটি choice।",
    features:["Premium PVC body 2mm","নরম ও সুন্দর lighting effect","ঘর সাজানো ও উপহারের জন্য উপযোগী"]
  },
  {
    id:31,
	//stock:false,
	//trending: true,
	//isNew: true,
    name:"ডেকোরেটিভ লাইট — Design 02",
    cat:"ডেকোরেটিভ আইটেম",
    price:650,
    discount:14,
    img:"images/decorative-items-2.webp",
    images:[
      "images/decorative-items-2.webp",
      "images/decorative-items-2.webp",
      "images/decorative-items-2.webp",
      "images/decorative-items-2.webp",
      "images/decorative-items-2.webp"
    ],
    short:"ঘর সাজাতে প্রিমিয়াম ডিজাইন",
    desc:"উষ্ণ lighting-এর সঙ্গে প্রিমিয়াম ডিজাইন। ঘরের ambience আরও premium দেখাতে এবং বিশেষ মুহূর্তে উপহার দিতে এই designটি দারুণ একটি choice।",
    features:["Premium PVC body 2mm","নরম ও সুন্দর lighting effect","ঘর সাজানো ও উপহারের জন্য উপযোগী"]
  },
  {
    id:32,
	//stock:false,
	//trending: true,
	//isNew: true,
    name:"ডেকোরেটিভ ঘড়ি — Design 01",
    cat:"ডেকোরেটিভ আইটেম",
    price:2300,
    discount:14,
    img:"images/decorative-items-3.webp",
    images:[
      "images/decorative-items-3.webp",
      "images/decorative-items-3.webp",
      "images/decorative-items-3.webp",
      "images/decorative-items-3.webp",
      "images/decorative-items-3.webp"
    ],
    short:"ঘর সাজাতে প্রিমিয়াম ডিজাইন",
    desc:"উষ্ণ lighting-এর সঙ্গে প্রিমিয়াম ডিজাইন। ঘরের ambience আরও premium দেখাতে এবং বিশেষ মুহূর্তে উপহার দিতে এই designটি দারুণ একটি choice।",
    features:["Premium PVC body 2mm","নরম ও সুন্দর lighting effect","ঘর সাজানো ও উপহারের জন্য উপযোগী"]
  },
  {
    id:33,
	//stock:false,
	//trending: true,
	//isNew: true,
    name:"ডেকোরেটিভ লাইট — Design 04",
    cat:"ডেকোরেটিভ আইটেম",
    price:630,
    discount:13,
    img:"images/decorative-items-4.webp",
    images:[
      "images/decorative-items-4.webp",
      "images/decorative-items-4.webp",
      "images/decorative-items-4.webp",
      "images/decorative-items-4.webp",
      "images/decorative-items-4.webp"
    ],
    short:"ঘর সাজাতে প্রিমিয়াম ডিজাইন",
    desc:"উষ্ণ lighting-এর সঙ্গে প্রিমিয়াম ডিজাইন। ঘরের ambience আরও premium দেখাতে এবং বিশেষ মুহূর্তে উপহার দিতে এই designটি দারুণ একটি choice।",
    features:["Premium PVC body 2mm","নরম ও সুন্দর lighting effect","ঘর সাজানো ও উপহারের জন্য উপযোগী"]
  },
  {
    id:34,
	//stock:false,
	//trending: true,
	//isNew: true,
    name:"ডেকোরেটিভ লাইট — Design 05",
    cat:"ডেকোরেটিভ আইটেম",
    price:1280,
    discount:19,
    img:"images/decorative-items-5.webp",
    images:[
      "images/decorative-items-5.webp",
      "images/decorative-items-5.webp",
      "images/decorative-items-5.webp",
      "images/decorative-items-5.webp",
      "images/decorative-items-5.webp"
    ],
    short:"ঘর সাজাতে প্রিমিয়াম ডিজাইন",
    desc:"উষ্ণ lighting-এর সঙ্গে প্রিমিয়াম ডিজাইন। ঘরের ambience আরও premium দেখাতে এবং বিশেষ মুহূর্তে উপহার দিতে এই designটি দারুণ একটি choice।",
    features:["Premium PVC body 2mm","নরম ও সুন্দর lighting effect","ঘর সাজানো ও উপহারের জন্য উপযোগী"]
  },
  {
    id:35,
	//stock:false,
	//trending: true,
	//isNew: true,
    name:"ডেকোরেটিভ লাইট — Design 06",
    cat:"ডেকোরেটিভ আইটেম",
    price:2230,
    discount:17,
    img:"images/decorative-items-6.webp",
    images:[
      "images/decorative-items-6.webp",
      "images/decorative-items-6.webp",
      "images/decorative-items-6.webp",
      "images/decorative-items-6.webp",
      "images/decorative-items-6.webp"
    ],
    short:"ঘর সাজাতে প্রিমিয়াম ডিজাইন",
    desc:"উষ্ণ lighting-এর সঙ্গে প্রিমিয়াম ডিজাইন। ঘরের ambience আরও premium দেখাতে এবং বিশেষ মুহূর্তে উপহার দিতে এই designটি দারুণ একটি choice।",
    features:["Premium PVC body 2mm","নরম ও সুন্দর lighting effect","ঘর সাজানো ও উপহারের জন্য উপযোগী"]
  },
  {
    id:36,
	//stock:false,
	//trending: true,
	//isNew: true,
    name:"ডেকোরেটিভ ঘড়ি — Design 02",
    cat:"ডেকোরেটিভ আইটেম",
    price:2150,
    discount:20,
    img:"images/decorative-items-7.webp",
    images:[
      "images/decorative-items-7.webp",
      "images/decorative-items-7.webp",
      "images/decorative-items-7.webp",
      "images/decorative-items-7.webp",
      "images/decorative-items-7.webp"
    ],
    short:"ঘর সাজাতে প্রিমিয়াম ডিজাইন",
    desc:"উষ্ণ lighting-এর সঙ্গে প্রিমিয়াম ডিজাইন। ঘরের ambience আরও premium দেখাতে এবং বিশেষ মুহূর্তে উপহার দিতে এই designটি দারুণ একটি choice।",
    features:["Premium PVC body 2mm","নরম ও সুন্দর lighting effect","ঘর সাজানো ও উপহারের জন্য উপযোগী"]
  },
  {
    id:37,
	//stock:false,
	//trending: true,
	//isNew: true,
    name:"RGBIC Neon Strip Light",
    cat:"অ্যাক্সেসরিস",
    price:1650,
    discount:23,
    img:"images/neon-strip-light-1.webp",
    images:[
      "images/neon-strip-light-1.webp",
      "images/neon-strip-light-2.webp",
      "images/neon-strip-light-1.webp",
      "images/neon-strip-light-2.webp",
      "images/neon-strip-light-1.webp"
    ],
    short:"রিমোর্ট ও মোবাইল অ্যাপ দিয়ে কালার কন্ট্রোল",
    desc:"মোবাইল অ্যাপ এবং রিমোর্ট দিয়ে সহজেই কালার কন্ট্রোল সুবিধা। ঘরের ambience আরও premium দেখাতে এবং বিশেষ মুহূর্তের জন্য দারুণ একটি choice।",
    features:["রিমোর্ট ও মোবাইল অ্যাপ দিয়ে কালার কন্ট্রোল","সহজেই কালার পরিবর্তন সুব্বিধা","৭ কালার RGB LED light (9wt with multi mode)","Bluetooth app control","Remote control","Music sync","Diy Cuttable & USB Powered"]
  },
  {
    id:38,
	//stock:false,
	//trending: true,
	//isNew: true,
    name:"Pendant Pin Type Holder",
    cat:"অ্যাক্সেসরিস",
    price:40,
    discount:10,
    img:"images/holdar-pin-1.webp",
    images:[
      "images/holdar-pin-1.webp",
      "images/holdar-pin-2.webp",
      "images/holdar-pin-1.webp",
      "images/holdar-pin-2.webp",
      "images/holdar-pin-1.webp"
    ],
    short:"ঝুলন্ত হোল্ডার পিন সিস্টেম",
    desc:"Pendant Pin Type Holder- ঝুলন্ত হোল্ডার পিন সিস্টেম এতে কনভার্টার ব্যাবহার করতে পারবেন।",
    features:["ঝুলন্ত হোল্ডার পিন সিস্টেম","Pendant Pin Type Holder"]
  },
  {
    id:39,
	//stock:false,
	//trending: true,
	//isNew: true,
    name:"ফাইবার পেপার (মিডিয়াম কোয়ালিটি) Siz- 12inc x 40inc",
    cat:"অ্যাক্সেসরিস",
    price:85,
    discount:15,
    img:"images/fiber-paper-1.webp",
    images:[
      "images/fiber-paper-1.webp",
      "images/fiber-paper-2.webp",
      "images/fiber-paper-3.webp",
      "images/fiber-paper-4.webp",
      "images/fiber-paper-5.webp"
    ],
    short:"ফাইবার পেপার পারফেক্ট থিকনেস",
    desc:"নিজের মতো করে নান্দনিক ও আধুনিক ল্যাম্প তৈরি করতে চান? আমাদের প্রিমিয়াম কোয়ালিটির ফাইবার পেপার আপনার হোম ডেকর ও লাইটিং প্রজেক্টকে দেবে একটি নিখুঁত ও প্রফেশনাল লুক। টেবিল ল্যাম্প থেকে শুরু করে ওয়াল ল্যাম্প—যেকোনো আলোর সাজে এটি অত্যন্ত উপযোগী!",
    features:["প্রোডাক্ট: ফাইবার পেপার (মিডিয়াম কোয়ালিটি)","সাইজ: ১২ ইঞ্চি বাই ৪০ ইঞ্চি","ব্যবহার: টেবিল ল্যাম্প, ওয়াল ল্যাম্প এবং বিভিন্ন ক্রিয়েটিভ ডিআইওয়াই (DIY) লাইটিং প্রজেক্ট।"]
  },
  {
    id:40,
	//stock:false,
	//trending: true,
	//isNew: true,
    name:"RGB LED Light",
    cat:"অ্যাক্সেসরিস",
    price:130,
    discount:16,
    img:"images/rgb-leb-light-1.webp",
    images:[
      "images/rgb-leb-light-1.webp",
      "images/rgb-leb-light-1.webp",
      "images/rgb-leb-light-1.webp",
      "images/rgb-leb-light-1.webp",
      "images/rgb-leb-light-1.webp"
    ],
    short:"৭ কালার RGB LED light with multi mode",
    desc:"সুইচ অফ-অন এর মাধ্যমে সহজেই কালার কন্ট্রোল সুবিধা। ঘরের ambience আরও premium দেখাতে এবং বিশেষ মুহূর্তের জন্য দারুণ একটি choice।",
    features:["সুইচ অফ-অন এর মাধ্যমে কালার কন্ট্রোল","সহজেই কালার পরিবর্তন সুব্বিধা","৭ কালার RGB LED light (9wt with multi mode)"]
  },
  {
    id:41,
	//stock:false,
	//trending: true,
	//isNew: true,
    name:"Patch-type pendant holder",
    cat:"অ্যাক্সেসরিস",
    price:40,
    discount:10,
    img:"images/holdar-patch-1.webp",
    images:[
      "images/holdar-patch-1.webp",
      "images/holdar-patch-2.webp",
      "images/holdar-patch-1.webp",
      "images/holdar-patch-2.webp",
      "images/holdar-patch-1.webp"
    ],
    short:"ঝুলন্ত হোল্ডার প্যাঁচ সিস্টেম",
    desc:"Pendant Patch-type Holder- ঝুলন্ত হোল্ডার প্যাঁচ সিস্টেম এতে কনভার্টার ব্যাবহার করতে পারবেন।",
    features:["ঝুলন্ত হোল্ডার প্যাঁচ সিস্টেম","Pendant Patch-type Holder"]
  },
  {
    id:42,
	//stock:false,
	//trending: true,
	//isNew: true,
    name:"AC power cord",
    cat:"অ্যাক্সেসরিস",
    price:50,
    discount:17,
    img:"images/ac-power-cord-1.webp",
    images:[
      "images/ac-power-cord-1.webp",
      "images/ac-power-cord-2.webp",
      "images/ac-power-cord-1.webp",
      "images/ac-power-cord-2.webp",
      "images/ac-power-cord-1.webp"
    ],
    short:"AC পাওয়ার কর্ড",
    desc:"AC power cord সরাসরি বিদ্যুৎ হতে চার্জার লাইট অথাবা চার্জার ফ্যান এর সাথে কানেক্ট করে চার্জ করার সুবিধার",
    features:["চার্জার লাইট অথাবা চার্জার ফ্যান এর জন্য","220 volt AC power cord","With female port"]
  },
  {
    id:43,
	//stock:false,
	trending: true,
	//isNew: true,
    name:"Mini Honey Nut Box পাইকারি– ১৯ গ্রাম +-১গ্রাম ",
    cat:"অর্গানিক ফুড",
    price:16,
    discount:0,
    img:"images/mini-honey-nut-mixd-1.webp",
    images:[
      "images/mini-honey-nut-mixd-1.webp",
      "images/mini-honey-nut-mixd-2.webp",
      "images/mini-honey-nut-mixd-3.webp",
      "images/mini-honey-nut-mixd-4.webp",
      "images/mini-honey-nut-mixd-5.webp"
    ],
    short:"হানি নাট 19gm mini Box পাইকারি সর্বনিম্ন অর্ডার ৫০পিস",
    desc:"হানি নাট 19gm mini Box পাইকারি সর্বনিম্ন অর্ডার ৫০পিস। ছোট্ট প্যাকেটে প্রাকৃতিক মধুর মিষ্টতা আর বিভিন্ন বাদাম ও বীজের পুষ্টিগুণের দারুণ সমন্বয়। কাজুবাদাম, কাঠবাদাম, পেস্তাবাদাম, চিনাবাদাম, দেশিবাদাম, চিয়া সিড, তিল, কুমড়াবিজ ও কিছমিছ এবং লিচু ফুলের মধু সহ পুষ্টিকর উপাদানের সমাহার। 💚 AL-BARAKAH – ছোট প্যাকেট, বড় পুষ্টির আনন্দ।",
    features:["শরীরের জন্য প্রয়োজনীয় পুষ্টি ও এনার্জি পেতে সহায়ক","বাদাম ও বীজের প্রাকৃতিক প্রোটিন, ভালো ফ্যাট, ফাইবার ও বিভিন্ন মাইক্রোনিউট্রিয়েন্টের উৎস","ক্ষুধার সময় ছোট ও সহজ একটি স্ন্যাকস","অফিস, স্কুল, ভ্রমণ বা ব্যস্ত সময়ে সঙ্গে রাখা সহজ","প্রতিদিনের খাদ্যতালিকায় পুষ্টিকর বৈচিত্র্য যোগ করতে পারে"]
  },
  {
    id:44,
	//stock:false,
	//trending: true,
	//isNew: true,
    name:"প্রিমিয়াম ৫০০ গ্রাম মিক্সড মধু",
    cat:"অর্গানিক ফুড",
    price:960,
    discount:20,
    img:"images/mixed-honey-1.webp",
    images:[
      "images/mixed-honey-1.webp",
      "images/mixed-honey-2.webp",
      "images/mixed-honey-1.webp",
      "images/mixed-honey-2.webp",
      "images/mixed-honey-2.webp"
    ],
    short:"৫০০ গ্রাম মিক্সড মধু প্রকৃতির মিষ্টতা🍯❤️",
    desc:"প্রকৃতির মিষ্টি উপহার—খাঁটি মধু। প্রতিদিনের খাবারের তালিকায় প্রাকৃতিক মিষ্টতা ও পুষ্টিগুণ যোগ করতে আমাদের ৫০০ গ্রাম মধু হতে পারে দারুণ একটি পছন্দ। 🥄 খাওয়ার সহজ নিয়ম: সরাসরি ১–২ চা চামচ খেতে পারেন অথবা কুসুম গরম পানি/দুধের সঙ্গে মিশিয়ে নিতে পারেন।",
    features:["প্রাকৃতিকভাবে মিষ্টি ও সুস্বাদু","শরীরের জন্য প্রয়োজনীয় বিভিন্ন পুষ্টি উপাদানের উৎস","সকালে বা দিনের যেকোনো সময় খাওয়া যায়","চা, দুধ, রুটি, পাউরুটি কিংবা বিভিন্ন খাবারের সঙ্গে সহজেই ব্যবহারযোগ্য","পরিবারের দৈনন্দিন ব্যবহারের জন্য সুবিধাজনক ৫০০ গ্রাম জার"]
  },
  {
    id:45,
	//stock:false,
	//trending: true,
	//isNew: true,
    name:"AL-BARAKAH Honey Nut Mixed – 250 গ্রাম",
    cat:"অর্গানিক ফুড",
    price:266,
    discount:16,
    img:"images/honey-nut-mixd-5.webp",
    images:[
      "images/honey-nut-mixd-5.webp",
      "images/honey-nut-mixd-2.webp",
      "images/honey-nut-mixd-4.webp",
      "images/honey-nut-mixd-5.webp",
      "images/honey-nut-mixd-5.webp"
    ],
    short:"হানি নাট 250 gm",
    desc:"প্রাকৃতিক মধুর মিষ্টতা আর বিভিন্ন বাদাম ও বীজের পুষ্টিগুণের দারুণ সমন্বয়। কাজুবাদাম, কাঠবাদাম, পেস্তাবাদাম, চিনাবাদাম, দেশিবাদাম, চিয়া সিড, তিল, কুমড়াবিজ ও কিছমিছসহ পুষ্টিকর উপাদানের সমাহার। 💚 AL-BARAKAH – বড় পুষ্টির আনন্দ।",
    features:["শরীরের জন্য প্রয়োজনীয় পুষ্টি ও এনার্জি পেতে সহায়ক","বাদাম ও বীজের প্রাকৃতিক প্রোটিন, ভালো ফ্যাট, ফাইবার ও বিভিন্ন মাইক্রোনিউট্রিয়েন্টের উৎস","ক্ষুধার সময় সহজ একটি স্ন্যাকস","প্রতিদিনের খাদ্যতালিকায় পুষ্টিকর বৈচিত্র্য যোগ করতে পারে"]
  },
  {
    id:46,
	//stock:false,
	//trending: true,
	//isNew: true,
    name:"Zatax Attar 8ml",
    cat:"প্রসাধনী",
    price:120,
    discount:13,
    img:"images/zatax-attar-1.webp",
    images:[
      "images/zatax-attar-1.webp",
      "images/zatax-attar-2.webp",
      "images/zatax-attar-3.webp",
      "images/zatax-attar-1.webp",
      "images/zatax-attar-2.webp"
    ],
    short:"প্রিমিয়াম পারফিউম সুগন্ধী",
    desc:"Alif Zatax 8ml-এর প্রস্তুতকারকের তথ্য অনুযায়ী এটি একটি Unisex oil perfume, যার ঘ্রাণে Patchouli, Amber, Vanilla ও Sandalwood-এর সমন্বয় রয়েছে। এটি অ্যালকোহলমুক্ত আতর হিসেবে বাজারজাত করা হয়। Zatax Attar 8ml একটি প্রিমিয়াম ও আকর্ষণীয় সুগন্ধির আতর, যা পুরুষ ও নারী উভয়ের ব্যবহারের উপযোগী। এর উডি, অ্যাম্বার ও মিষ্টি ভ্যানিলা ঘ্রাণ ব্যক্তিত্বে আনে রুচিশীলতা ও আকর্ষণীয় অনুভূতি। দৈনন্দিন ব্যবহার, অফিস, ভ্রমণ কিংবা বিশেষ অনুষ্ঠানে ব্যবহার করা যায়।",
    features:["৮ml কমপ্যাক্ট ও সহজে বহনযোগ্য বোতল","Unisex — নারী ও পুরুষ উভয়ের জন্য উপযোগী","অ্যালকোহলমুক্ত আতর","Long-lasting fragrance","Roll-on ব্যবহারের সুবিধা","Patchouli, Amber, Vanilla ও Sandalwood-এর মনোমুগ্ধকর ঘ্রাণের সমন্বয়","দৈনন্দিন ও বিশেষ অনুষ্ঠানে ব্যবহারের উপযোগী","অল্প পরিমাণেই মনোরম সুগন্ধি উপভোগের সুবিধা"]
  },
  {
    id:47,
	//stock:false,
	//trending: true,
	//isNew: true,
    name:"Vampire Blood Attar 8ml",
    cat:"প্রসাধনী",
    price:120,
    discount:13,
    img:"images/vampire-blood-attar-1.webp",
    images:[
      "images/vampire-blood-attar-1.webp",
      "images/vampire-blood-attar-2.webp",
      "images/vampire-blood-attar-3.webp",
      "images/vampire-blood-attar-1.webp",
      "images/vampire-blood-attar-2.webp"
    ],
    short:"রহস্যময় ও আকর্ষণীয় সুগন্ধির এক অনন্য অনুভূতি",
    desc:"নামের মতোই এর ঘ্রাণে রয়েছে এক ধরনের রহস্য, গভীরতা ও আকর্ষণ। Vampire Blood Attar মূলত মিষ্টি ও ডার্ক ফ্রুটি ঘ্রাণের সঙ্গে ফ্লোরাল এবং মস্কি নোটের সুন্দর সমন্বয়—যা সাধারণ সুগন্ধি থেকে একটু ভিন্ন ধরনের পারফিউম পছন্দ করেন তাদের জন্য দারুণ একটি পছন্দ। 🌹 ঘ্রাণের ধরন: Dark Fruity • Sweet • Floral • Musky • Mysterious. প্রথমে পাওয়া যায় মিষ্টি ও জুসি ফলের ঘ্রাণ, এরপর ধীরে ধীরে ফুটে ওঠে ফ্লোরাল নোট এবং শেষে থাকে নরম মস্কি, উষ্ণ ও গভীর একটি বেস—যা পুরো সুগন্ধিটিকে করে তোলে আরও আকর্ষণীয় ও স্মরণীয়। 💎 কার জন্য উপযুক্ত: যারা মিষ্টি, ফ্রুটি, একটু ডার্ক ও রহস্যময় ধরনের সুগন্ধি পছন্দ করেন এবং প্রচলিত আতরের বাইরে একটু আলাদা signature scent খুঁজছেন, তাদের জন্য Vampire Blood Attar হতে পারে চমৎকার একটি পছন্দ।",
    features:["৮ml কমপ্যাক্ট ও সহজে বহনযোগ্য বোতল","ডার্ক ফ্রুটি অ্যারোমা — Black Cherry, Red Berries ও Plum-এর মিষ্টি-ফ্রুটি অনুভূতি","ফ্লোরাল টাচ — Jasmine ও অন্যান্য ফুলের নরম ঘ্রাণ","মাস্কি ও উডি বেস — ঘ্রাণে যোগ করে গভীরতা ও আকর্ষণ","মিষ্টি ও উষ্ণ অনুভূতি — Vanilla, Amber বা অনুরূপ উষ্ণ নোটের কারণে ঘ্রাণটি আরও সমৃদ্ধ লাগে","নারী ও পুরুষ উভয়ের জন্য উপযোগী","Evening & Night Wear — সন্ধ্যা, রাত, পার্টি ও বিশেষ অনুষ্ঠানের জন্য বিশেষভাবে মানানসই","Concentrated Attar/Perfume Oil — অল্প পরিমাণেই ব্যবহার করা যায়; তবে স্থায়িত্ব ত্বক, আবহাওয়া ও ব্যবহারের পরিমাণের ওপর নির্ভর করে।"]
  },
  {
    id:48,
	//stock:false,
	//trending: true,
	isNew: true,
    name:"Rechargeable Charcoal Table Lamp",
    cat:"টেবিল ল্যাম্প",
    price:2050,
    discount:20,
	quantity: 1,
    img:"images/charkul_image_1.webp",
    images:[
      "images/charkul_image_1.webp",
      "images/charkul_image_2.webp",
      "images/charkul_image_3.webp",
      "images/charkul_image_4.webp",
      "images/charkul_image_5.webp"
    ],
    short:"ইসলামিক হ্যান্ডমেড রিচার্জেবল চার কুল টেবিল ল্যাম্প",
    desc:"PVC পাইপ দিয়ে সম্পূর্ণ হাতে তৈরি একটি ইউনিক ও আকর্ষণীয় Rechargeable Islamic Decorative Light। সুন্দর কারুকাজের মাধ্যমে এতে “আল্লাহু-আকবার” এবং চারটি নির্বাচিত সূরা—সূরা আল-কাফিরুন, সূরা আল-ইখলাস, সূরা আল-ফালাক ও সূরা আন-নাস অর্থাৎ চার ক্বুল ফুটিয়ে তোলা হয়েছে। এতে রয়েছে 2000mAh Lithium Battery এবং আকর্ষণীয় RGB Light। সঙ্গে থাকা রিমোট কন্ট্রোলের মাধ্যমে প্রয়োজন ও পছন্দ অনুযায়ী সহজেই লাইটের কালার পরিবর্তন করার সুবিধা। চার্জিংয়ের জন্য রয়েছে Type-C Charging Port। Type-C সম্বলিত যেকোনো মোবাইল চার্জার ব্যবহার করে সহজেই চার্জ দেওয়া যাবে। একবার ফুল চার্জ করলে এটি প্রায় একটানা ৩ থেকে ৪ দিন পর্যন্ত ব্যবহার করা যাবে। ব্যাটারি ব্যাকআপ ব্যবহারের সময়, উজ্জ্বলতা ও লাইট মোডের ওপর নির্ভর করে কিছুটা কম-বেশি হতে পারে।",
    features:["Premium PVC pipe 2mm","আকর্ষণীয় Islamic Calligraphy","Height: 7 Inches","Width: 5 Inches","Battery: 2000mAh Lithium Battery","Lighting: RGB Multi-Color Light","Remote Control: রিমোটের মাধ্যমে লাইটের কালার পরিবর্তনের সুবিধা","Charging Port: Type-C (মোবাইল চার্জার দিয়ে সহজে চার্জ করার সুবিধা)","Battery Backup: এক চার্জে প্রায় একটানা ৩ থেকে ৪ দিন পর্যন্ত ব্যবহারযোগ্য","Design: “Allahuakbar” & 4 Surahs –  (চার ক্বুল)","Suitable for: Bedroom, Living Room, Office, Islamic Decoration & Gift","হাতে তৈরি • রিচার্জেবল • RGB লাইট • রিমোট কন্ট্রোল • Type-C চার্জিং • ইউনিক ইসলামিক ডিজাইন "]
  },
  {
    id:49,
	//stock:false,
	//trending: true,
	//isNew: true,
    name:"Premium Regular Fit Hoodie for Men | প্রিমিয়াম শীতের হুডি",
    cat:"মেনস ফ্যাশন",
    price:800,
    discount:30,
    img:"images/premium-regular-fit-hoodie-2.webp",
    images:[
      "images/premium-regular-fit-hoodie-2.webp",
      "images/premium-regular-fit-hoodie-1.webp",
      "images/premium-regular-fit-hoodie-3.webp",
      "images/premium-regular-fit-hoodie-4.webp",
      "images/premium-regular-fit-hoodie-5.webp"
    ],
	sizes: ["L", "XL", "XXL"],
	showColorSelector: true,
	colors: [
	  { name: "নেভি ব্লু", color: "#343346" },
	  { name: "বেইজ", color: "#ceb9ac" },
	  { name: "অফ-হোয়াইট", color: "#f2eae3" },
	  { name: "অ্যাশ গ্রে", color: "#b4b4b4" },
	  { name: "চকলেট ব্রাউন", color: "#8c5338" }
	],
	sizeChart: [
	  { "সাইজ": "L", "বুক": "৪০ ইঞ্চি", "লম্বা": "২৮ ইঞ্চি" },
	  { "সাইজ": "XL", "বুক": "৪২ ইঞ্চি", "লম্বা": "২৯ ইঞ্চি" },
	  { "সাইজ": "XXL", "বুক": "৪৪ ইঞ্চি", "লম্বা": "৩০ ইঞ্চি" }
	],
    short:"Premium Regular Fit Hoodie — আরাম, স্টাইল ও প্রিমিয়াম লুকের পারফেক্ট কম্বিনেশন! 🧥",
    desc:"Premium Regular Fit Hoodie — আরাম, স্টাইল ও প্রিমিয়াম লুকের পারফেক্ট কম্বিনেশন! 🧥 শীতের ফ্যাশনে নিজের স্টাইলকে আরও আকর্ষণীয় করে তুলতে বেছে নিন আমাদের Premium Regular Fit Hoodie (GSM 350+)। মিনিমাল ডিজাইন, আরামদায়ক হুড এবং সামনে ব্যবহারিক ক্যাঙ্গারু পকেটসহ এই হুডিটি আপনার দৈনন্দিন পোশাকে যোগ করবে আধুনিক ও স্টাইলিশ লুক। এর 350+ GSM ফেব্রিক হুডিটিকে দেয় ভারী ও প্রিমিয়াম অনুভূতি। ক্যাজুয়াল আউটিং, বন্ধুদের সঙ্গে ঘোরাঘুরি, ভ্রমণ কিংবা প্রতিদিনের ব্যবহারের জন্য এটি হতে পারে আপনার শীতকালীন পোশাকের দারুণ একটি পছন্দ। আপনি যদি ভারী ফেব্রিক, সিম্পল ডিজাইন এবং দৈনন্দিন ব্যবহারের উপযোগী একটি স্টাইলিশ হুডি খুঁজে থাকেন, তাহলে Premium Regular Fit Hoodie হতে পারে আপনার পছন্দের তালিকায়। নিজের জন্য অথবা প্রিয়জনকে উপহার দিতে বেছে নিন আপনার পছন্দের রং ও সাইজ। অর্ডার করুন AL-BARAKAH SHOP থেকে এবং শীতের ফ্যাশনে যোগ করুন নতুন মাত্রা!",
    features:["প্রিমিয়াম ফেব্রিক: 350+ GSM-এর ভারী ফেব্রিক।","Regular Fit: স্বাভাবিক ও আরামদায়ক ফিটিং।","শীতকালীন পোশাক: শীতের দিনে আরামদায়ক পোশাক হিসেবে উপযোগী।","মিনিমাল ডিজাইন: সিম্পল, স্মার্ট ও আধুনিক লুক।","ক্যাঙ্গারু পকেট: ছোটখাটো প্রয়োজনীয় জিনিস রাখার সুবিধাজনক পকেট।","কমফোর্টেবল হুড: স্টাইলের পাশাপাশি অতিরিক্ত কভারেজ।","সহজে ম্যাচিং: জিন্স, জগারস ও ক্যাজুয়াল প্যান্টের সঙ্গে মানানসই।"]
  },
  {
    id:50,
	//stock:false,
	//trending: true,
	//isNew: true,
    name:"Premium Drop Shoulder Hoodie for Men | 350+ GSM Heavyweight Hoodie",
    cat:"মেনস ফ্যাশন",
    price:900,
    discount:28,
    img:"images/premium-drop-shoulder-hoodie-1.webp",
    images:[
      "images/premium-drop-shoulder-hoodie-1.webp",
      "images/premium-drop-shoulder-hoodie-2.webp",
      "images/premium-drop-shoulder-hoodie-3.webp",
      "images/premium-drop-shoulder-hoodie-4.webp",
      "images/premium-drop-shoulder-hoodie-5.webp"
    ],
	sizes: ["L", "XL", "XXL"],
	showColorSelector: true,
	colors: [
	  { name: "বারগান্ডি", color: "#5b202d" },
	  { name: "সাদা", color: "#ffffff" },
	  { name: "ডার্ক গ্রিন", color: "#0c6353" },
	  { name: "জেট ব্ল্যাক", color: "#252525" },
	  { name: "বেবি পিঙ্ক", color: "#e0b1bc" }
	],
	sizeChart: [
	  { "সাইজ": "L", "বুক": "৪০ ইঞ্চি", "লম্বা": "২৮ ইঞ্চি" },
	  { "সাইজ": "XL", "বুক": "৪২ ইঞ্চি", "লম্বা": "২৯ ইঞ্চি" },
	  { "সাইজ": "XXL", "বুক": "৪৪ ইঞ্চি", "লম্বা": "৩০ ইঞ্চি" }
	],
    short:"Premium Drop Shoulder Hoodie — স্টাইলে প্রিমিয়াম, আরামে অসাধারণ!",
    desc:"Premium Drop Shoulder Hoodie — স্টাইলে প্রিমিয়াম, আরামে অসাধারণ! শীতের ফ্যাশনে নিয়ে আসুন আধুনিক স্ট্রিটওয়্যারের ছোঁয়া! Premium Drop Shoulder Hoodie (350+ GSM) তৈরি করা হয়েছে তাদের জন্য, যারা পছন্দ করেন ওভারসাইজড লুক, আরামদায়ক পোশাক এবং ট্রেন্ডি ফ্যাশন। এর Drop Shoulder ডিজাইন আপনার লুকে যোগ করবে স্মার্ট ও আধুনিক স্টাইল। অন্যদিকে, 350+ GSM Heavyweight ফেব্রিক হুডিটিকে দেয় ভারী ও প্রিমিয়াম অনুভূতি। মিনিমাল ডিজাইন, আরামদায়ক হুড এবং সামনের ক্যাঙ্গারু পকেট—সব মিলিয়ে এটি হতে পারে আপনার শীতকালীন পোশাকের সংগ্রহে দারুণ একটি সংযোজন। ক্যাজুয়াল আউটিং, বন্ধুদের সঙ্গে ঘোরাঘুরি, ভ্রমণ কিংবা প্রতিদিনের ব্যবহারে জিন্স ও জগারসের সঙ্গে সহজেই মানিয়ে নিতে পারবেন এই স্টাইলিশ হুডি। 👕 কাদের জন্য উপযুক্ত?- যারা স্ট্রিটওয়্যার, আধুনিক ক্যাজুয়াল ফ্যাশন এবং Drop Shoulder ডিজাইনের হুডি পছন্দ করেন, তাদের জন্য এটি দারুণ একটি পছন্দ। নিজের স্টাইলকে আরও আকর্ষণীয় করে তুলতে দৈনন্দিন পোশাকে রাখতে পারেন এই প্রিমিয়াম হুডি।",
    features:["প্রিমিয়াম ফেব্রিক: 350+ GSM Heavyweight ফেব্রিক।","Drop Shoulder Design: কাঁধের সেলাই নিচের দিকে হওয়ায় পাওয়া যায় ট্রেন্ডি লুক।","Heavyweight & Cozy: শীতের পোশাকে ভারী ও আরামদায়ক অনুভূতি।","Modern Streetwear Style: তরুণদের জন্য আধুনিক ও আকর্ষণীয় ফ্যাশন।","Kangaroo Pocket: সামনে ব্যবহারিক পকেটের সুবিধা।","Comfortable Hood: স্টাইলের পাশাপাশি মাথার জন্য অতিরিক্ত কভারেজ।","Easy Styling: জিন্স, কার্গো প্যান্ট ও জগারসের সঙ্গে মানানসই।"]
  },
  {
    id:51,
	//stock:false,
	//trending: true,
	//isNew: true,
    name:"প্রিমিয়াম আফগানি টুপি for Men | স্টাইলিশ শীতকালীন টুপি",
    cat:"মেনস ফ্যাশন",
    price:350,
    discount:28,
    img:"images/afgani-tupi-1.webp",
    images:[
      "images/afgani-tupi-1.webp",
      "images/afgani-tupi-2.webp",
      "images/afgani-tupi-3.webp",
      "images/afgani-tupi-4.webp",
      "images/afgani-tupi-5.webp"
    ],
	showColorSelector: true,
	colors: [
	  { name: "খাকি", color: "#bba88c" },
	  { name: "আকাশি নীল", color: "#b0c8ed" },
	  { name: "হালকা ধূসর", color: "#cbc8cd" },
	  { name: "কালো", color: "#201c26" },
	  { name: "অফ-হোয়াইট", color: "#d2cbc9" }
	],
    short:"প্রিমিয়াম আফগানি টুপি — ঐতিহ্যবাহী ডিজাইনে আধুনিক স্টাইল!",
    desc:"প্রিমিয়াম আফগানি টুপি — ঐতিহ্যবাহী ডিজাইনে আধুনিক স্টাইল! আপনার ব্যক্তিত্বে যোগ করুন আভিজাত্য ও স্টাইলের নতুন মাত্রা। আমাদের প্রিমিয়াম আফগানি টুপি তৈরি করা হয়েছে ঐতিহ্যবাহী আফগানি স্টাইলের অনুপ্রেরণায়। আকর্ষণীয় ডিজাইন, সুন্দর রঙ এবং সামনের স্টাইলিশ স্টার ডিটেইলিং টুপিটিকে করেছে আরও দৃষ্টিনন্দন। শীতের দিনে বাইরে যাওয়া, ভ্রমণ কিংবা দৈনন্দিন ব্যবহারের জন্য এই টুপি হতে পারে আপনার পছন্দের একটি ফ্যাশন অ্যাকসেসরিজ। পাঞ্জাবি, কুর্তা ও ক্যাজুয়াল পোশাকের সঙ্গে মানিয়ে যায় সহজেই। আপনি যদি ঐতিহ্যবাহী ডিজাইনের পাশাপাশি আধুনিক ফ্যাশন পছন্দ করেন, তাহলে এই আফগানি টুপি হতে পারে আপনার সংগ্রহে রাখার মতো একটি অনন্য অ্যাকসেসরিজ। নিজের ব্যবহারের জন্য কিংবা প্রিয়জনকে উপহার দিতে এখনই বেছে নিন আপনার পছন্দের রং।",
    features:["আকর্ষণীয় আফগানি ডিজাইন: ঐতিহ্য ও আধুনিক স্টাইলের সুন্দর সমন্বয়।","স্টাইলিশ স্টার ডিটেইলিং: টুপির সামনের অংশে নজরকাড়া ডিজাইন।","আকর্ষণীয় কালার: পোশাকের সঙ্গে মানানসই বিভিন্ন রঙের অপশন।","শীতকালীন ফ্যাশন: শীতের পোশাকের সঙ্গে স্টাইলিশ লুকের জন্য উপযোগী।","বিভিন্ন পোশাকের সঙ্গে মানানসই: পাঞ্জাবি, কুর্তা ও ক্যাজুয়াল পোশাকের সঙ্গে পরা যায়।","উপহার হিসেবেও উপযুক্ত: পরিবার ও প্রিয়জনদের জন্য হতে পারে সুন্দর একটি উপহার।"]
  },
  {
    id:52,
	//stock:false,
	//trending: true,
	//isNew: true,
    name:"এক কালার প্রিমিয়াম ড্রপ শোল্ডার টি-শার্ট",
    cat:"মেনস ফ্যাশন",
    price:680,
    discount:20,
    img:"images/drop-shoulder-t-shart-1.webp",
    images:[
      "images/drop-shoulder-t-shart-1.webp",
      "images/drop-shoulder-t-shart-2.webp",
      "images/drop-shoulder-t-shart-3.webp",
      "images/drop-shoulder-t-shart-4.webp",
      "images/drop-shoulder-t-shart-5.webp"
    ],
	sizes: ["M", "L", "XL", "XXL"],
	showColorSelector: true,
	colors: [
	  { name: "লাইট পিংক", color: "#f8c9d5" },
	  { name: "ডার্ক গ্রিন", color: "#103f34" },
	  { name: "ক্রিম", color: "#f3eadb" },
	  { name: "ডার্ক গ্রে", color: "#464646" },
	  { name: "লাইট ব্লু", color: "#adc8e8" }
	],
	sizeChart: [
	  { "সাইজ": "M", "বুক": "৩৮ ইঞ্চি", "লম্বা": "২৭ ইঞ্চি", "হাতা": "৭.০৪ ইঞ্চি" },
	  { "সাইজ": "L", "বুক": "৪০ ইঞ্চি", "লম্বা": "২৮ ইঞ্চি", "হাতা": "৭.০৬ ইঞ্চি" },
	  { "সাইজ": "XL", "বুক": "৪২ ইঞ্চি", "লম্বা": "২৯ ইঞ্চি", "হাতা": "৮.০০ ইঞ্চি" },
	  { "সাইজ": "XXL", "বুক": "৪৪ ইঞ্চি", "লম্বা": "৩০ ইঞ্চি", "হাতা": "৮.০২ ইঞ্চি" }
	],
    short:"স্টাইলিশ লুক, আরামদায়ক ফিটিং!",
    desc:"স্টাইলিশ লুক, আরামদায়ক ফিটিং! আপনার প্রতিদিনের পোশাকে নিয়ে আসুন আধুনিক ও ট্রেন্ডি লুক। প্রিমিয়াম কটন ফেব্রিক দিয়ে তৈরি এই ড্রপ শোল্ডার টি-শার্ট আপনাকে দেবে স্টাইলিশ আউটলুক ও আরামদায়ক অনুভূতি। সিম্পল এবং আকর্ষণীয় ডিজাইন, প্রিমিয়াম ফ্যাব্রিক এবং ট্রেন্ডি ড্রপ শোল্ডার ফিট—সব মিলিয়ে আপনার স্টাইলকে আরও আকর্ষণীয় করে তুলতে দারুণ একটি পছন্দ।",
    features:["স্টাইল: ট্রেন্ডি ড্রপ শোল্ডার ডিজাইন","ফেব্রিক: আরামদায়ক কটন","GSM: 220+ — ভারী ও প্রিমিয়াম ফিল","লুক: মডার্ন ও স্টাইলিশ","ব্যবহার: ক্যাজুয়াল আউটিং, বন্ধুদের সঙ্গে ঘোরাঘুরি কিংবা প্রতিদিনের ব্যবহারের জন্য উপযুক্ত।"]
  },
  {
    id:53,
	//stock:false,
	//trending: true,
	//isNew: true,
    name:"The Army of Mehdi Drop Shoulder T-Shirt for Men",
    cat:"মেনস ফ্যাশন",
    price:650,
    discount:24,
    img:"images/the-army-of-mehdi-t-shirt-1.webp",
    images:[
      "images/the-army-of-mehdi-t-shirt-1.webp",
      "images/the-army-of-mehdi-t-shirt-2.webp",
      "images/the-army-of-mehdi-t-shirt-3.webp",
      "images/the-army-of-mehdi-t-shirt-4.webp",
      "images/the-army-of-mehdi-t-shirt-5.webp"
    ],
	sizes: ["M", "L", "XL", "XXL"],
	showColorSelector: true,
	colors: [
	  { name: "জেট ব্ল্যাক", color: "#000000" },
	  { name: "ডার্ক গ্রিন", color: "#264b3a" },
	  { name: "সাদা", color: "#ffffff" }
	],
	sizeChart: [
	  { "সাইজ": "M", "বুক": "৩৮ ইঞ্চি", "লম্বা": "২৭ ইঞ্চি", "হাতা": "৭.০৪ ইঞ্চি" },
	  { "সাইজ": "L", "বুক": "৪০ ইঞ্চি", "লম্বা": "২৮ ইঞ্চি", "হাতা": "৭.০৬ ইঞ্চি" },
	  { "সাইজ": "XL", "বুক": "৪২ ইঞ্চি", "লম্বা": "২৯ ইঞ্চি", "হাতা": "৮.০০ ইঞ্চি" },
	  { "সাইজ": "XXL", "বুক": "৪৪ ইঞ্চি", "লম্বা": "৩০ ইঞ্চি", "হাতা": "৮.০২ ইঞ্চি" }
	],
    short:"The Army of Mehdi Drop Shoulder T-Shirt — স্টাইল হোক স্বতন্ত্র!",
    desc:"The Army of Mehdi Drop Shoulder T-Shirt — আপনার স্টাইলে ফুটে উঠুক স্বতন্ত্রতা! 👕 আপনার ক্যাজুয়াল ফ্যাশনে যোগ করুন আধুনিক স্ট্রিটওয়্যারের ছোঁয়া! The Army of Mehdi Drop Shoulder T-Shirt-এ রয়েছে আকর্ষণীয় ডার্ক গ্রিন কালার এবং পেছনে নজরকাড়া সাদা গ্রাফিক প্রিন্ট। এর Drop Shoulder ডিজাইন তৈরি করে ট্রেন্ডি ও রিল্যাক্সড লুক, যা আপনার ব্যক্তিত্বকে আরও আকর্ষণীয়ভাবে ফুটিয়ে তুলতে সাহায্য করবে। যারা সাধারণ টি-শার্টের পরিবর্তে একটু আলাদা ডিজাইন ও আধুনিক ফিটিং পছন্দ করেন, তাদের জন্য এই গ্রাফিক টি-শার্ট হতে পারে দারুণ একটি পছন্দ। জিন্স, কার্গো প্যান্ট কিংবা ক্যাজুয়াল ট্রাউজারের সঙ্গে সহজেই মানিয়ে যাবে। কীভাবে স্টাইল করবেন?- এই টি-শার্টের সঙ্গে ব্ল্যাক কার্গো প্যান্ট ও স্নিকার্স পরলে তৈরি হবে আকর্ষণীয় স্ট্রিটওয়্যার লুক। আরও সাধারণ ক্যাজুয়াল স্টাইলের জন্য ব্লু বা ব্ল্যাক জিন্সের সঙ্গেও পরতে পারেন। কেন বেছে নেবেন এই টি-শার্ট? আপনি যদি আধুনিক Drop Shoulder ফিটিং, গাঢ় সবুজ রং এবং আকর্ষণীয় গ্রাফিক প্রিন্ট পছন্দ করেন, তাহলে The Army of Mehdi Drop Shoulder T-Shirt আপনার পোশাকের সংগ্রহে রাখতে পারেন। এখনই অর্ডার করুন AL-BARAKAH SHOP থেকে এবং আপনার স্টাইলে যোগ করুন স্বতন্ত্রতার ছোঁয়া!",
    features:["Drop Shoulder Design: আধুনিক ও ট্রেন্ডি স্টাইলের জন্য বিশেষ ডিজাইন।","Dark Green Color: আকর্ষণীয় গাঢ় সবুজ রং, যা সহজেই নজর কাড়ে।","Graphic Back Print: পেছনে The Army of Mehdi-এর স্টেটমেন্টধর্মী গ্রাফিক ডিজাইন।","Streetwear Look: তরুণদের ক্যাজুয়াল ও স্ট্রিটওয়্যার ফ্যাশনের জন্য উপযুক্ত।","Easy Styling: জিন্স, কার্গো ও ক্যাজুয়াল প্যান্টের সঙ্গে মানানসই।","Versatile Wear: আড্ডা, ঘোরাঘুরি, ভ্রমণ ও দৈনন্দিন ব্যবহারের জন্য উপযোগী।"]
  }
];

let cart=JSON.parse(localStorage.getItem("albarakah_cart")||"[]"),active="সব";
// Randomize the all-products view once per page load; category views keep their normal order.
let allProductsShuffleOrder = null;
let currentProduct=null,currentImage=0;
let productDetailQty=1;
let selectedProductSize="";
let selectedProductColor="";
const money=n=>"৳"+Number(n).toLocaleString("bn-BD");
// ===== PRODUCT PRICE SETTINGS =====
// প্রতিটি পণ্যে শুধু price (মূল দাম) এবং discount (%) লিখলেই হবে।
// Current Price ও কত টাকা Save হবে—দুটিই অটোমেটিক হিসাব হবে।
function discountAmount(p){
  const base=Number(p.price)||0;
  const percent=Number(p.discount)||0;
  return Math.round(base*percent/100);
}
function currentPrice(p){
  return Math.max(0,(Number(p.price)||0)-discountAmount(p));
}
function priceHTML(p){
  const base=Number(p.price)||0;
  const save=discountAmount(p);
  const current=currentPrice(p);
  const hasDiscount=Number(p.discount)>0 && save>0;
  return `<div class="price-box">${hasDiscount?`<span class="old-price">মূল মূল্য: <s>${money(base)}</s></span><span class="discount-badge">${money(save)} SAVE</span>`:''}<strong class="current-price">${money(current)}</strong></div>`;
}
function productCardOfferBadge(p){
  // The product grid renders before ALBA_OFFER is initialized later in this file.
  // Keep offer-badge errors isolated so they can never prevent products from rendering.
  try {
    const activeOffer = typeof albaIsOfferActive === "function" && albaIsOfferActive() &&
      ALBA_OFFER.type === "free_delivery";
    const eligible = typeof albaIsOfferProductEligible === "function" && albaIsOfferProductEligible(p);
    return activeOffer && eligible ? '<span class="card-free-delivery">⚡ Free Delivery</span>' : '';
  } catch (error) {
    return '';
  }
}
function productCardPriceHTML(p){
  const base=Number(p.price)||0, save=discountAmount(p), current=currentPrice(p);
  const hasDiscount=Number(p.discount)>0 && save>0;
  return `<div class="card-price-area">${hasDiscount?`<span class="card-save-badge">▾ Save ${money(save)}</span>`:''}<div class="card-price-line"><strong class="card-current-price">${money(current)}</strong>${hasDiscount?`<span class="card-old-price"><s>${money(base)}</s></span><span class="card-discount-percent">-${Number(p.discount)}%</span>`:''}</div></div>`;
}
function save(){localStorage.setItem("albarakah_cart",JSON.stringify(cart));count()}
function count(){document.getElementById("cartCount").textContent=cart.reduce((a,b)=>a+b.qty,0)}
function ensureStickyCategory(){
  const el=document.getElementById("categories");
  if(!el)return;
  el.classList.add("alba-sticky-category");
}
function scrollActiveCategoryIntoView(){
  const el = document.getElementById("categories");

  if(!el) return;

  /*
   * Mobile-এ category কখনো automatically center হবে না।
   * সবসময় প্রথমে "সব" category থেকেই শুরু হবে।
   */

  if(window.innerWidth <= 650){

    requestAnimationFrame(() => {

      el.scrollTo({
        left: 0,
        behavior: "instant"
      });

    });

  }
}
function categoryImage(cat){
  const item = cat === "সব"
    ? products[0]
    : products.find(x => x.cat === cat);
  return item && (item.img || (item.images && item.images[0]))
    ? (item.img || item.images[0])
    : "images/logo.webp";
}

function goToCategory(cat){
  closeMobileMenu();
  if(IS_PRODUCT_PAGE){
    window.location.href = "index.html?category=" + encodeURIComponent(cat) + "#products";
    return;
  }
  const search = new URLSearchParams(window.location.search);
  search.set("category", cat);
  const newUrl = window.location.pathname + "?" + search.toString() + "#products";
  history.replaceState(null, "", newUrl);
  active = cat;
  categories();
  renderProducts();
  document.getElementById("products")?.scrollIntoView({behavior:"smooth", block:"start"});
}

function renderMenuCategories(){
  const menu = document.getElementById("menuCategoryLinks");
  if(!menu) return;

  const categoryList = ["সব", ...new Set(products.map(x => x.cat))];

  menu.innerHTML = categoryList.map(cat => `
    <button type="button"
      class="menu-category-card ${cat === active ? "active" : ""}"
      onclick='goToCategory(${JSON.stringify(cat)})'>
      <img src="${categoryImage(cat)}" alt="${cat}" loading="lazy">
      <span>${cat}</span>
    </button>
  `).join("");
}

function categories(){

  const original = document.getElementById("categories");

  if(!original) return;


  // =====================================================
  // CATEGORY OUTSIDE ARROW WRAPPER
  // =====================================================

  let shell = original.parentElement;

  if(!shell || !shell.classList.contains("category-scroll-shell")){

    shell = document.createElement("div");

    shell.className = "category-scroll-shell";

    original.parentNode.insertBefore(
      shell,
      original
    );

    shell.appendChild(original);


    // -------------------------------------------------
    // Right fade - scroll area-এর বাইরে
    // -------------------------------------------------

    const fade = document.createElement("div");

    fade.className = "category-scroll-fade";

    fade.setAttribute(
      "aria-hidden",
      "true"
    );

    shell.appendChild(fade);


    // -------------------------------------------------
    // Arrow - IMPORTANT
    // এটা #categories-এর ভিতরে নয়
    // shell-এর আলাদা element
    // -------------------------------------------------

    const arrow = document.createElement("div");

    arrow.className =
      "category-scroll-arrow";

    arrow.innerHTML = "›";

    arrow.setAttribute(
      "aria-hidden",
      "true"
    );

    shell.appendChild(arrow);


    // -------------------------------------------------
    // First time swipe hint
    // -------------------------------------------------

    const hint = document.createElement("div");

    hint.className =
      "category-scroll-hint";

    hint.innerHTML =
      '<span class="hint-hand">👉</span>' +
      '<span>আরও ক্যাটাগরি দেখতে ডানে সোয়াইপ করুন</span>' +
      '<span class="hint-arrow">→</span>';

    shell.appendChild(hint);


    // =================================================
    // CATEGORY INDICATOR UPDATE
    // =================================================

    const updateIndicator = () => {

      const max =
        Math.max(
          0,
          original.scrollWidth -
          original.clientWidth
        );

      const hasOverflow = max > 4;

      shell.classList.toggle(
        "has-overflow",
        hasOverflow
      );

      shell.classList.toggle(
        "no-overflow",
        !hasOverflow
      );


      // Category-এর আর scroll করার জায়গা না থাকলে
      // Arrow পুরোপুরি বন্ধ
      if(!hasOverflow){

        arrow.classList.remove("show");

        return;
      }


      // একদম ডান পাশে পৌঁছে গেলে Arrow বন্ধ
      const atEnd =
        original.scrollLeft >= max - 3;

      arrow.classList.toggle(
        "show",
        !atEnd
      );

    };


    // =================================================
    // USER CATEGORY SCROLL
    // =================================================

    original.addEventListener(
      "scroll",
      () => {

        updateIndicator();

        // User swipe শুরু করলে hint বন্ধ
        if(original.scrollLeft > 5){

          hint.classList.remove("show");

        }

      },
      {
        passive:true
      }
    );


    // Screen resize হলে indicator update
    window.addEventListener(
      "resize",
      updateIndicator,
      {
        passive:true
      }
    );


    // =================================================
    // FIRST TIME CATEGORY VIEW HINT
    // =================================================

    if(window.IntersectionObserver){

      const observer =
        new IntersectionObserver(
          entries => {

            if(!entries[0].isIntersecting){
              return;
            }


            if(
              window.innerWidth <= 650 &&
              localStorage.getItem(
                "albarakah_category_swipe_hint_seen"
              ) !== "1"
            ){

              hint.classList.add("show");


              // User একবার Hint দেখে ফেলেছে
              localStorage.setItem(
                "albarakah_category_swipe_hint_seen",
                "1"
              );


              // ৩ সেকেন্ড পরে Hint চলে যাবে
              setTimeout(
                () => {

                  hint.classList.remove(
                    "show"
                  );

                },
                3000
              );

            }


            observer.disconnect();

          },
          {
            threshold:0.35
          }
        );


      observer.observe(shell);

    }


    // প্রথমবার indicator update
    requestAnimationFrame(
      updateIndicator
    );

  }


  // =====================================================
  // CATEGORY BUTTON GENERATE
  // =====================================================

  const categoryList = [
    "সব",
    ...new Set(
      products.map(x => x.cat)
    )
  ];


  original.innerHTML =
    categoryList.map(
      x =>
        `<button class="cat ${
          x === active ? "active" : ""
        }"
        onclick='setCat(${JSON.stringify(x)})'>
          <img class="cat-image" src="${categoryImage(x)}" alt="${x}" loading="lazy">
          <span class="cat-name">${x}</span>
        </button>`
    ).join("");

  renderMenuCategories();


  // =====================================================
  // MOBILE INITIAL POSITION
  // =====================================================

  if(window.innerWidth <= 650){

    requestAnimationFrame(() => {

      // সবসময় প্রথমে বাম দিক থেকে শুরু হবে
      original.scrollLeft = 0;


      const arrow =
        shell.querySelector(
          ".category-scroll-arrow"
        );


      if(arrow){

        const max =
          Math.max(
            0,
            original.scrollWidth -
            original.clientWidth
          );


        arrow.classList.toggle(
          "show",
          max > 4
        );

      }

    });

  }

}
function setCat(x){
  active=x;
  categories();
  renderProducts();
  renderMenuCategories();
}
function isStockOut(p){
  const s=p && p.stock;
  return s===false || s===0 || String(s).trim().toLowerCase() === "out" ||
         String(s).trim().toLowerCase() === "stock out" ||
         String(s).trim().toLowerCase() === "stockout";
}

function stockStatusHTML(p){
  if(isStockOut(p)){
    return '<span class="stock-status stock-out">🔴 Stock Out</span>';
  }

  const quantityValue = p && p.quantity !== undefined && p.quantity !== null
    ? String(p.quantity).trim()
    : "";

  const quantityHTML = quantityValue !== ""
    ? ' <span class="stock-quantity">📦 ' + quantityValue + ' টি</span>'
    : "";

  return '<span class="stock-status stock-in">🟢 In Stock</span>' + quantityHTML;
}

function isInStock(p){
  return !isStockOut(p);
}

function setProductStock(id, inStock){
  const p=products.find(x=>x.id===id);
  if(p) p.stock=!!inStock;
  renderProducts();
  if(currentProduct && currentProduct.id===id) renderProductModal();
}

function renderFeaturedProducts(){
  const trendingEl=document.getElementById("trendingProducts");
  const arrivalsEl=document.getElementById("newArrivalsProducts");
  if(!trendingEl || !arrivalsEl) return;

  // Manual selection: no automatic discount ranking or array-tail guessing.
  // Accept boolean true (recommended), numeric 1, or text "true" for flags.
  // A manually tagged Trending product remains visible even when out of stock;
  // its cart/order buttons stay disabled by the existing stock checks below.
  const isManualFlagEnabled=(p,key)=>{
    const value=p ? p[key] : undefined;
    return value===true || value===1 || String(value).trim().toLowerCase()==="true";
  };
  const trending=products.filter(p=>isManualFlagEnabled(p,"trending")).slice(0,4);
  const arrivals=products.filter(p=>isManualFlagEnabled(p,"isNew")).reverse().slice(0,4);
  const cardHTML=(p,label)=>`<article class="product featured-product-card alba-shop-card" onclick="openProduct(${p.id})">
    <div class="pimg"><img src="${p.img}" alt="${p.name}" loading="lazy">${Number(p.discount)>0?`<span class="card-discount-ribbon">-${Number(p.discount)}%</span>`:''}<button class="card-zoom-btn" aria-label="পণ্যের বিস্তারিত দেখুন" onclick="event.stopPropagation();openProduct(${p.id})">⌕</button>${productCardOfferBadge(p)}<span class="card-heart" aria-hidden="true">♡</span><span class="featured-tag">${label}</span></div>
    <div class="pinfo"><h3>${p.name}</h3><div class="product-bottom"><div class="stock-row">${stockStatusHTML(p)}</div><div class="card-price-cart-row">${productCardPriceHTML(p)}<div class="product-actions"><button class="add card-cart-btn" aria-label="কার্টে যোগ করুন" ${isStockOut(p)?'disabled aria-disabled="true"':''} onclick="event.stopPropagation();${isStockOut(p)?'':'add('+p.id+')'}">🛒</button></div></div></div></div></article>`;
  trendingEl.innerHTML=trending.map(p=>cardHTML(p,"🔥 TRENDING")).join("")||"<p>শীঘ্রই জনপ্রিয় পণ্য যুক্ত হবে।</p>";
  arrivalsEl.innerHTML=arrivals.map(p=>cardHTML(p,"✨ NEW ARRIVAL")).join("")||"<p>নতুন পণ্য শীঘ্রই আসছে।</p>";
}

function addPremiumTrustAndSupport(){
  if(!document.getElementById("albaTrustStrip")){
    const strip=document.createElement("section");
    strip.id="albaTrustStrip"; strip.className="alba-trust-strip";
    strip.innerHTML='<div class="alba-trust-item"><span>✓</span><div><strong>বিশ্বস্ত সেবা</strong><small>কাস্টমার-কেন্দ্রিক সহায়তা</small></div></div><div class="alba-trust-item"><span>🔒</span><div><strong>নিরাপদ অর্ডার</strong><small>সহজ ও নির্ভরযোগ্য অর্ডার প্রক্রিয়া</small></div></div><div class="alba-trust-item"><span>📦</span><div><strong>যত্নসহকারে প্যাকিং</strong><small>পণ্য পৌঁছানো পর্যন্ত গুরুত্ব</small></div></div><div class="alba-trust-item"><span>💬</span><div><strong>সরাসরি সাপোর্ট</strong><small>প্রয়োজনে আমাদের সাথে যোগাযোগ</small></div></div>';
    const main=document.querySelector("main");
    if(main) main.insertAdjacentElement("afterend",strip);
  }
  if(!document.getElementById("albaFloatingSupport")){
    const link=document.createElement("a");
    link.id="albaFloatingSupport"; link.className="alba-floating-support";
    link.href="https://wa.me/8801670455526"; link.target="_blank"; link.rel="noopener noreferrer";
    link.setAttribute("aria-label","WhatsApp-এ যোগাযোগ করুন");
    link.innerHTML='<span class="support-wa-icon">☏</span><span class="support-label"><strong>সাহায্য লাগবে?</strong><small>WhatsApp-এ কথা বলুন</small></span>';
    document.body.appendChild(link);
  }
}

function renderProducts(){
  const q=(document.getElementById("search")?.value || "").toLowerCase().trim();
  // Shuffle all products only for the "সব" view, and keep that order stable while searching.
  if(active === "সব" && !allProductsShuffleOrder){
    allProductsShuffleOrder = [...products];
    for(let i=allProductsShuffleOrder.length-1;i>0;i--){
      const j=Math.floor(Math.random()*(i+1));
      [allProductsShuffleOrder[i],allProductsShuffleOrder[j]]=[allProductsShuffleOrder[j],allProductsShuffleOrder[i]];
    }
  }
  const sourceProducts = active === "সব" ? (allProductsShuffleOrder || products) : products.filter(x=>x.cat===active);
  const a=sourceProducts.filter(x=>(!q||x.name.toLowerCase().includes(q)||x.cat.toLowerCase().includes(q)||x.short.toLowerCase().includes(q)));
  document.getElementById("productGrid").innerHTML=a.map(x=>{
    const out=isStockOut(x);
    return `<article class="product alba-shop-card ${out?'is-stock-out':''}" onclick="openProduct(${x.id})">
      <div class="pimg"><img src="${x.img}" alt="${x.name}" loading="lazy">${Number(x.discount)>0?`<span class="card-discount-ribbon">-${Number(x.discount)}%</span>`:''}<button class="card-zoom-btn" aria-label="পণ্যের বিস্তারিত দেখুন" onclick="event.stopPropagation();openProduct(${x.id})">⌕</button>${productCardOfferBadge(x)}<span class="card-heart" aria-hidden="true">♡</span></div>
      <div class="pinfo"><h3>${x.name}</h3><div class="product-bottom">
        <div class="stock-row">${stockStatusHTML(x)}</div>
        <div class="card-price-cart-row">${productCardPriceHTML(x)}<div class="product-actions"><button class="add card-cart-btn" aria-label="কার্টে যোগ করুন" ${out?'disabled aria-disabled="true"':''} onclick="event.stopPropagation();${out?'':'add('+x.id+')'}">🛒</button></div></div>
      </div></div>
    </article>`;
  }).join("")||"<p>কোনো পণ্য পাওয়া যায়নি।</p>"
}
function openProduct(id){
  const p=products.find(x=>x.id===id);
  if(!p)return;

  if(!IS_PRODUCT_PAGE){
    const url="product.html?id="+encodeURIComponent(id);
    window.location.href=url;
    return;
  }

  currentProduct=p;
  currentImage=0;
  productDetailQty=1;
  selectedProductSize="";
  selectedProductColor="";
  renderProductModal();
}
function closeProduct(e){
  if(IS_PRODUCT_PAGE){
    window.location.href="index.html#products";
    return;
  }
  if(!e||e.target.id==="productModal"){
    document.getElementById("productModal")?.classList.remove("show");
    document.body.classList.remove("modal-open");
  }
}
function productHasSizes(p){return !!(p && Array.isArray(p.sizes) && p.sizes.length);}
function productHasColors(p){return !!(p && p.showColorSelector === true && Array.isArray(p.colors) && p.colors.length);}
function variantForSelection(p, size=selectedProductSize, color=selectedProductColor){
  if(!p || !Array.isArray(p.variants) || !p.variants.length) return null;
  return p.variants.find(v => (!productHasSizes(p) || String(v.size||"")===String(size||"")) && (!productHasColors(p) || String(v.color||"")===String(color||""))) || null;
}
function isSelectedVariantOutOfStock(p){
  if(!p || isStockOut(p)) return true;
  if(!productHasSizes(p) && !productHasColors(p)) return false;
  const v=variantForSelection(p);
  if(Array.isArray(p.variants) && p.variants.length) return !v || v.stock===false || Number(v.stock)<=0;
  return false;
}
function variantSelectionReady(p, showAlert=true){
  if(productHasSizes(p) && !selectedProductSize){if(showAlert)alert("অনুগ্রহ করে আপনার পছন্দের সাইজ নির্বাচন করুন।");return false;}
  if(productHasColors(p) && !selectedProductColor){if(showAlert)alert("অনুগ্রহ করে আপনার পছন্দের রং নির্বাচন করুন।");return false;}
  if(isSelectedVariantOutOfStock(p)){if(showAlert)alert("দুঃখিত, নির্বাচিত সাইজ/রংটি বর্তমানে স্টকে নেই। অন্য ভ্যারিয়েন্ট নির্বাচন করুন।");return false;}
  return true;
}
function renderProductVariantOptions(){
  const p=currentProduct, wrap=document.getElementById("productVariantOptions");
  if(!p || !wrap)return;
  const hasSizes=productHasSizes(p), hasColors=productHasColors(p);
  wrap.style.display=(hasSizes||hasColors)?"":"none";
  const sizeGroup=document.getElementById("productSizeGroup"), colorGroup=document.getElementById("productColorGroup");
  if(sizeGroup)sizeGroup.style.display=hasSizes?"":"none";
  if(colorGroup)colorGroup.style.display=hasColors?"":"none";
  if(hasSizes && !p.sizes.includes(selectedProductSize))selectedProductSize="";
  if(hasColors && !p.colors.some(c=>(typeof c==="string"?c:c.name)===selectedProductColor))selectedProductColor="";
  const sizeOptions=document.getElementById("productSizeOptions");
  if(sizeOptions && hasSizes){
    sizeOptions.innerHTML=p.sizes.map(size=>{
      const unavailable=Array.isArray(p.variants)&&p.variants.length&&hasColors&&selectedProductColor ? !p.variants.some(v=>String(v.size)===String(size)&&String(v.color)===String(selectedProductColor)&&v.stock!==false&&(v.stock==null||Number(v.stock)>0)) : Array.isArray(p.variants)&&p.variants.length&&!hasColors ? !p.variants.some(v=>String(v.size)===String(size)&&v.stock!==false&&(v.stock==null||Number(v.stock)>0)) : false;
      return `<button type="button" class="variant-option ${selectedProductSize===String(size)?'active':''}" ${unavailable?'disabled':''} onclick='selectProductSize(${JSON.stringify(String(size))})'>${size}</button>`;
    }).join("");
  }
  const colorOptions=document.getElementById("productColorOptions");
  if(colorOptions && hasColors){
    colorOptions.innerHTML=p.colors.map(item=>{
      const c=typeof item==="string"?{name:item,color:item}:item;
      const unavailable=Array.isArray(p.variants)&&p.variants.length&&hasSizes&&selectedProductSize ? !p.variants.some(v=>String(v.color)===String(c.name)&&String(v.size)===String(selectedProductSize)&&v.stock!==false&&(v.stock==null||Number(v.stock)>0)) : Array.isArray(p.variants)&&p.variants.length&&!hasSizes ? !p.variants.some(v=>String(v.color)===String(c.name)&&v.stock!==false&&(v.stock==null||Number(v.stock)>0)) : false;
      const isHex=/^#[0-9a-f]{3,8}$/i.test(c.color||"");
      return `<button type="button" class="variant-option color-swatch ${selectedProductColor===String(c.name)?'active':''}" style="background:${isHex?c.color:'#ffffff'}" title="${c.name}" aria-label="${c.name}" ${unavailable?'disabled':''} onclick='selectProductColor(${JSON.stringify(String(c.name))})'></button>`;
    }).join("");
  }
  const sizeLabel=document.getElementById("selectedSizeLabel");if(sizeLabel)sizeLabel.textContent=selectedProductSize?"নির্বাচিত: "+selectedProductSize:"";
  const colorLabel=document.getElementById("selectedColorLabel");if(colorLabel)colorLabel.textContent=selectedProductColor?"নির্বাচিত: "+selectedProductColor:"";
  const chartBtn=document.getElementById("sizeChartButton");if(chartBtn)chartBtn.style.display=hasSizes&&p.sizeChart?"":"none";
  const msg=document.getElementById("variantStockMessage");
  if(msg){const chosen=(hasSizes?!!selectedProductSize:true)&&(hasColors?!!selectedProductColor:true);msg.textContent=chosen&&isSelectedVariantOutOfStock(p)?"এই সাইজ/রংটি বর্তমানে স্টকে নেই।":"";}
  const buttons=document.querySelectorAll("#productModal .modal-actions .btn");
  buttons.forEach(btn=>{const unavailable=isStockOut(p)||((hasSizes||hasColors)&&isSelectedVariantOutOfStock(p));btn.disabled=unavailable;btn.setAttribute("aria-disabled",String(unavailable));});
}
function selectProductSize(size){selectedProductSize=String(size);renderProductVariantOptions();}
function selectProductColor(color){selectedProductColor=String(color);renderProductVariantOptions();}
function openSizeChart(){
  if(!currentProduct||!currentProduct.sizeChart)return;
  const title=document.getElementById("sizeChartTitle"), content=document.getElementById("sizeChartContent");
  if(title)title.textContent=currentProduct.name+" — সাইজ চার্ট";
  if(content){
    if(Array.isArray(currentProduct.sizeChart)){
      const rows=currentProduct.sizeChart;
      content.innerHTML=`<table><thead><tr>${Object.keys(rows[0]||{}).map(k=>`<th>${k}</th>`).join("")}</tr></thead><tbody>${rows.map(row=>`<tr>${Object.values(row).map(v=>`<td>${v}</td>`).join("")}</tr>`).join("")}</tbody></table>`;
    }else content.innerHTML=String(currentProduct.sizeChart);
  }
  document.getElementById("sizeChartOverlay")?.classList.add("show");
}
function closeSizeChart(e){if(e&&e.target&&e.target.id!=="sizeChartOverlay")return;document.getElementById("sizeChartOverlay")?.classList.remove("show");}
function cartVariantLabel(x){return [x.size?"সাইজ: "+x.size:"",x.color?"রং: "+x.color:""].filter(Boolean).join(" • ");}
function cartItemKey(x){return [x.id,x.size||"",x.color||""].join("::");}
function addCartVariant(id, quantity=1, mode="add"){
  const p=products.find(a=>a.id===id);if(!p)return;
  if((productHasSizes(p)||productHasColors(p)) && (!IS_PRODUCT_PAGE || currentProduct?.id!==id)){
    window.location.href="product.html?id="+encodeURIComponent(id);return;
  }
  if(!variantSelectionReady(p))return;
  const size=productHasSizes(p)?selectedProductSize:"", color=productHasColors(p)?selectedProductColor:"";
  const qty=Math.max(1,parseInt(quantity,10)||1);
  let x=cart.find(a=>cartItemKey(a)===cartItemKey({id,size,color}));
  if(x)x.qty+=qty;else cart.push({id,qty,size,color});
  save();renderCart();
  if(mode==="order"&&!IS_PRODUCT_PAGE)closeProduct();
  openCart();
}

function renderProductModal(){
  if(!currentProduct)return;
  const p=currentProduct;
  document.getElementById("modalImage").src=p.images[currentImage];
  document.getElementById("modalImage").alt=p.name;
  const photoCount=document.getElementById("photoCount");
  if(photoCount) photoCount.textContent=(p.images.length||0)+"টি ছবি";
  document.getElementById("modalThumbs").innerHTML=p.images.map((src,i)=>`<button class="thumb-btn ${i===currentImage?'active':''}" onclick="selectProductImage(${i})"><img src="${src}" alt="ছবি ${i+1}"></button>`).join("");
  document.getElementById("modalTitle").textContent=p.name;
  document.getElementById("modalCategory").textContent=p.cat;
  document.getElementById("modalPrice").innerHTML=priceHTML(p);
  renderProductVariantOptions();
  const modalStock=document.getElementById("modalStockStatus");
  if(modalStock) modalStock.innerHTML=stockStatusHTML(p);
  const qtyOutput=document.getElementById("productDetailQty");
  if(qtyOutput) qtyOutput.textContent=String(productDetailQty);
  const modalBtns=document.querySelectorAll("#productModal .modal-actions .btn");
  modalBtns.forEach(btn=>{
    const unavailable=isStockOut(p)||((productHasSizes(p)||productHasColors(p))&&isSelectedVariantOutOfStock(p));
    btn.disabled=unavailable;
    btn.setAttribute("aria-disabled",String(unavailable));
  });
  const qtyWrap=document.getElementById("productDetailQuantityWrap");
  if(qtyWrap) qtyWrap.classList.toggle("is-stock-out",isStockOut(p));
  document.getElementById("modalDesc").textContent=p.desc;
  document.getElementById("modalFeatures").innerHTML=p.features.map(f=>`<li>✓ ${f}</li>`).join("");
  renderRelatedProducts();
}

function renderRelatedProducts(){
  const section=document.getElementById("relatedProductsSection");
  const grid=document.getElementById("relatedProductsGrid");
  const title=document.getElementById("relatedProductsTitle");
  const subtitle=document.getElementById("relatedProductsSubtitle");

  if(!section || !grid || !currentProduct){
    return;
  }

  const related=products.filter(x =>
    x.cat === currentProduct.cat &&
    x.id !== currentProduct.id
  );

  // If there are no other products in this category, keep the page unchanged.
  if(!related.length){
    section.style.display="none";
    return;
  }

  section.style.display="";
  title.textContent=`${currentProduct.cat} — আরও পণ্য`;
  subtitle.textContent=`${currentProduct.cat} ক্যাটাগরির আরও ${related.length}টি পণ্য দেখুন।`;

  grid.innerHTML=related.map(x=>{
    const out=isStockOut(x);

    return `<article class="product related-product-card alba-shop-card ${out?'is-stock-out':''}" onclick="window.location.href='product.html?id=${encodeURIComponent(x.id)}'">
      <div class="pimg"><img src="${x.img}" alt="${x.name}" loading="lazy">${Number(x.discount)>0?`<span class="card-discount-ribbon">-${Number(x.discount)}%</span>`:''}<button class="card-zoom-btn" aria-label="পণ্যের বিস্তারিত দেখুন" onclick="event.stopPropagation();window.location.href='product.html?id=${encodeURIComponent(x.id)}'">⌕</button>${productCardOfferBadge(x)}<span class="card-heart" aria-hidden="true">♡</span></div>
      <div class="pinfo"><h3>${x.name}</h3><div class="product-bottom">
        <div class="stock-row">${stockStatusHTML(x)}</div>
        <div class="card-price-cart-row">${productCardPriceHTML(x)}<div class="product-actions"><button class="add card-cart-btn" aria-label="কার্টে যোগ করুন" ${out?'disabled aria-disabled="true"':''} onclick="event.stopPropagation();${out?'':'add('+x.id+')'}">🛒</button></div></div>
      </div></div>
    </article>`;
  }).join("");
}
function selectProductImage(i){currentImage=i;renderProductModal()}
function nextProductImage(){if(!currentProduct)return;currentImage=(currentImage+1)%currentProduct.images.length;renderProductModal()}
function prevProductImage(){if(!currentProduct)return;currentImage=(currentImage-1+currentProduct.images.length)%currentProduct.images.length;renderProductModal()}
function changeProductDetailQty(delta){
  if(!currentProduct || isStockOut(currentProduct)) return;
  productDetailQty=Math.max(1,Math.min(99,productDetailQty+delta));
  const output=document.getElementById("productDetailQty");
  if(output) output.textContent=String(productDetailQty);
}

function add(id, quantity=1){
  const p=products.find(a=>a.id===id);if(!p)return;
  if(productHasSizes(p)||productHasColors(p)){
    if(!IS_PRODUCT_PAGE || currentProduct?.id!==id){window.location.href="product.html?id="+encodeURIComponent(id);return;}
    return addCartVariant(id,quantity,"add");
  }
  let x=cart.find(a=>a.id===id&&!a.size&&!a.color);
  const qty=Math.max(1,parseInt(quantity,10)||1);
  if(x)x.qty+=qty;else cart.push({id:id,qty:qty,size:"",color:""});
  save();renderCart();openCart();
}

function orderNow(id, quantity=1){
  const p=products.find(a=>a.id===id);
  if(!p){alert("পণ্যটি পাওয়া যাচ্ছে না।");return;}
  if(productHasSizes(p)||productHasColors(p)){
    if(!IS_PRODUCT_PAGE || currentProduct?.id!==id){window.location.href="product.html?id="+encodeURIComponent(id);return;}
    return addCartVariant(id,quantity,"order");
  }
  let x=cart.find(a=>a.id===id&&!a.size&&!a.color);
  const qty=Math.max(1,parseInt(quantity,10)||1);
  if(x)x.qty+=qty;else cart.push({id:id,qty:qty,size:"",color:""});
  save();renderCart();if(!IS_PRODUCT_PAGE)closeProduct();openCart();
}

function total(){
  return cart.reduce((s,x)=>{
    let p=products.find(p=>p.id===x.id);
    return s+(p?currentPrice(p)*x.qty:0);
  },0);
}
function change(id,d){let x=cart.find(a=>a.id===id&&!a.size&&!a.color);if(!x)return;x.qty+=d;if(x.qty<1)cart=cart.filter(a=>a!==x);save();renderCart();renderCheckout()}
function changeCartItem(index,d){const x=cart[index];if(!x)return;x.qty+=d;if(x.qty<1)cart.splice(index,1);save();renderCart();renderCheckout()}
function removeItem(id){cart=cart.filter(x=>x.id!==id);save();renderCart();renderCheckout()}
function removeCartItem(index){if(index<0||index>=cart.length)return;cart.splice(index,1);save();renderCart();renderCheckout()}
function renderCart(){let e=document.getElementById("cartItems");if(!e)return;if(!cart.length){e.innerHTML="<p style='color:#888'>কার্ট খালি।</p>";document.getElementById("cartTotal").textContent=money(0);return}e.innerHTML=cart.map((x,i)=>{let p=products.find(a=>a.id===x.id);if(!p)return "";const variant=cartVariantLabel(x);return `<div class="cart-row"><div class="thumb"><img src="${p.img}"></div><div><h4>${p.name}</h4>${variant?`<small class="cart-variant-label">${variant}</small><br>`:''}<small>${money(currentPrice(p))}</small><div class="qty"><button onclick="changeCartItem(${i},-1)">−</button><b>${x.qty}</b><button onclick="changeCartItem(${i},1)">+</button></div></div><button class="remove" onclick="removeCartItem(${i})">✕</button></div>`}).join("");document.getElementById("cartTotal").textContent=money(total())}
function openCart(){
  document.getElementById("cartOverlay").classList.add("show");
  renderCart();

  albaOpenOverlay("cart");
}
function closeCart(e){if(!e||e.target.id==="cartOverlay")document.getElementById("cartOverlay").classList.remove("show")}
function openCheckout(){

  if(!cart || !cart.length){
    alert("আগে একটি পণ্য কার্টে যোগ করুন।");
    return;
  }

  const cartOverlay=document.getElementById("cartOverlay");
  const checkoutOverlay=document.getElementById("checkoutOverlay");

  if(cartOverlay){
    cartOverlay.classList.remove("show");
  }

  if(checkoutOverlay){
    checkoutOverlay.classList.add("show");
  }

  renderCheckout();
}


async function openCheckout(){

  if(!cart || !cart.length){
    alert("আগে একটি পণ্য কার্টে যোগ করুন।");
    return;
  }

  // Flash Offer-এর সময় নিশ্চিত করা
  if(
    typeof albaEnsureTimeSynced === "function" &&
    typeof ALBA_OFFER !== "undefined" &&
    ALBA_OFFER.enabled
  ){
    await albaEnsureTimeSynced();
  }

  const cartOverlay =
    document.getElementById("cartOverlay");

  const checkoutOverlay =
    document.getElementById("checkoutOverlay");

  if(cartOverlay){
    cartOverlay.classList.remove("show");
  }

  if(checkoutOverlay){
    checkoutOverlay.classList.add("show");
  }

  renderCheckout();
}



function closeCheckout(e){if(!e||e.target.id==="checkoutOverlay")document.getElementById("checkoutOverlay").classList.remove("show")}


function getDeliveryCharge(){

  const area =
    document.getElementById("deliveryArea")?.value ||
    "dhaka";

  // Flash Offer active হলে Free Delivery
  if(
    typeof albaIsOfferActive === "function" &&
    albaIsOfferActive() &&
    ALBA_OFFER.type === "free_delivery"
  ){

    const subtotal = albaEligibleSubtotal();
    const minimum = Number(ALBA_OFFER.minOrder) || 0;

    if(
      albaAllCartProductsEligible() &&
      (minimum <= 0 || subtotal >= minimum)
    ){
      return 0;
    }
  }

  // স্বাভাবিক Delivery Charge
  const weight = 1;

  const base =
    area === "outside"
      ? 130
      : 70;

  const extraKg =
    weight > 1
      ? Math.ceil(weight - 1)
      : 0;

  return base + (extraKg * 20);
}


function renderCheckout(){

  const d =
    getDeliveryCharge();

  document.getElementById("delivery").value =
    d;


  const e =
    document.getElementById("checkoutSummary");


  const area =
    document.getElementById("deliveryArea")?.value === "outside"
      ? "ঢাকার বাইরে"
      : "ঢাকার ভেতর";


  const weight = 1;


  const subtotal =
    total();


  const offerDiscount =
    typeof albaOfferDiscount === "function"
      ? albaOfferDiscount()
      : 0;


  const finalSubtotal =
    Math.max(
      0,
      subtotal - offerDiscount
    );


  const offerActive =
    typeof albaIsOfferActive === "function"
      ? albaIsOfferActive()
      : false;


  let html =
    cart.map(x => {

      let p =
        products.find(
          a => a.id === x.id
        );

      const variantLabel = cartVariantLabel(x);
      return p
        ? `
          <div>
            <span>
              ${p.name}${variantLabel ? ` (${variantLabel})` : ""} × ${x.qty}
            </span>

            <b>
              ${money(
                currentPrice(p) * x.qty
              )}
            </b>
          </div>
        `
        : "";

    }).join("");


  html += `
    <hr>

    <div>
      <b>পণ্য মোট</b>
      <b>${money(subtotal)}</b>
    </div>
  `;


  // Extra Discount
  if(offerDiscount > 0){

    html += `
      <div class="checkout-offer-row">
        <span>
          🎁 অফার ছাড়
        </span>

        <b>
          -${money(offerDiscount)}
        </b>
      </div>
    `;

  }


  // Delivery
  if(
    offerActive &&
    ALBA_OFFER.type === "free_delivery" &&
    d === 0
  ){

    html += `
      <div class="checkout-offer-row">
        <span>
          🚚 Free Delivery
        </span>

        <b>
          FREE
        </b>
      </div>
    `;

  }else{

    html += `
      <div>
        <span>
          ডেলিভারি (${area}, ${weight} কেজি)
        </span>

        <b>
          ${money(d)}
        </b>
      </div>
    `;

  }


  const grandTotal =
    finalSubtotal + d;


  html += `
    <div>
      <strong>সর্বমোট</strong>

      <strong>
        ${money(grandTotal)}
      </strong>
    </div>
  `;


  e.innerHTML = html;
}


async function saveOrderToGoogleSheet(orderData){
  if(!APPS_SCRIPT_URL){
    throw new Error("Order backend URL is not configured.");
  }

  const response = await fetch(APPS_SCRIPT_URL,{
    method:"POST",
    mode:"no-cors",
    headers:{"Content-Type":"text/plain;charset=utf-8"},
    body:JSON.stringify(orderData)
  });

  // no-cors returns an opaque response by design. A resolved fetch means the
  // browser successfully handed the request to the configured endpoint.
  return response;
}



async function placeOrder(ev){
  ev.preventDefault();

  if(!cart || !cart.length){
    alert("আগে একটি পণ্য কার্টে যোগ করুন।");
    return;
  }

  const form = ev.target;
  const submitBtn = form?.querySelector('button[type="submit"]');
  if(submitBtn?.dataset.submitting === "1") return;

  const name = document.getElementById("name")?.value.trim() || "";
  const phone = document.getElementById("phone")?.value.trim() || "";
  const address = document.getElementById("address")?.value.trim() || "";
  const area = document.getElementById("deliveryArea")?.value || "dhaka";
  const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked')?.value || "cod";

  if(!name || !phone || !address){
    alert("অনুগ্রহ করে প্রয়োজনীয় তথ্যগুলো পূরণ করুন।");
    return;
  }

  const weight = 1;
  const d = getDeliveryCharge();
  const subtotal = total();
  const offerDiscount = typeof albaOfferDiscount === "function" ? albaOfferDiscount() : 0;
  const finalSubtotal = Math.max(0, subtotal - offerDiscount);
  const grandTotal = finalSubtotal + d;
  const order = "ALB-" + Date.now().toString().slice(-8);

  if(
    typeof ALBA_OFFER !== "undefined" &&
    ALBA_OFFER.enabled &&
    typeof albaEnsureTimeSynced === "function" &&
    !albaTimeSynced
  ){
    const synced = await albaEnsureTimeSynced();
    if(!synced){
      alert("অফারের সময় যাচাই করা যাচ্ছে না। ইন্টারনেট সংযোগ পরীক্ষা করে আবার চেষ্টা করুন।");
      return;
    }
  }

  const items = cart.map(x => {
    const p = products.find(a => a.id === x.id);
    return {
      id: p?.id || x.id,
      name: p?.name || "Unknown Product",
      category: p?.cat || "",
      size: x.size || "",
      color: x.color || "",
      variant: cartVariantLabel(x),
      qty: x.qty,
      unitPrice: Number(p ? currentPrice(p) : 0),
      lineTotal: Number(p ? currentPrice(p) * x.qty : 0)
    };
  });

  let offerText = "";
  if(typeof albaIsOfferActive === "function" && albaIsOfferActive() && typeof ALBA_OFFER !== "undefined"){
    if(ALBA_OFFER.type === "free_delivery" && d === 0) offerText = "FREE DELIVERY";
    if(ALBA_OFFER.type === "extra_discount" && offerDiscount > 0){
      offerText = (ALBA_OFFER.extraDiscountPercent || "") + "% EXTRA DISCOUNT";
    }
  }

  const orderData = {
    orderNo: order,
    orderTime: new Date().toISOString(),
    name,
    phone,
    address,
    deliveryArea: area,
    paymentMethod,
    weight,
    items,
    subtotal,
    offer: offerText,
    offerDiscount,
    delivery: d,
    grandTotal,
    source: "AL-BARAKAH Website"
  };

  if(submitBtn){
    submitBtn.dataset.submitting = "1";
    submitBtn.disabled = true;
    submitBtn.textContent = "⏳ অর্ডার কনফার্ম হচ্ছে...";
  }

  try{
    await saveOrderToGoogleSheet(orderData);

    // Customer never needs to know about Google Sheets or Telegram.
    cart = [];
    save();
    renderCart();
    renderCheckout();
    closeCheckout();
    showOrderSuccess(order, grandTotal);
  }catch(err){
    console.error("Order submission failed:", err);
    alert("অর্ডার কনফার্ম করা যায়নি। অনুগ্রহ করে কিছুক্ষণ পর আবার চেষ্টা করুন।");
  }finally{
    if(submitBtn){
      submitBtn.dataset.submitting = "0";
      submitBtn.disabled = false;
      submitBtn.textContent = "🛍️ অর্ডার কনফার্ম করুন";
    }
  }
}

function showOrderSuccess(orderNo, grandTotal, customMessage){
  const modal = document.getElementById("orderSuccessOverlay");
  if(!modal) return;
  const no = document.getElementById("successOrderNo");
  const totalEl = document.getElementById("successOrderTotal");
  if(no) no.textContent = orderNo;
  if(totalEl) totalEl.textContent = grandTotal > 0 ? money(grandTotal) : "গ্রহণ করা হয়েছে";
  const desc = modal.querySelector(".order-success-card > p");
  if(desc) desc.textContent = customMessage || "আপনার অর্ডারটি আমরা পেয়েছি। প্রয়োজন অনুযায়ী আমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবেন।";
  modal.classList.add("show");
  document.body.classList.add("modal-open");
}

function closeOrderSuccess(){
  const modal = document.getElementById("orderSuccessOverlay");
  if(modal) modal.classList.remove("show");
  document.body.classList.remove("modal-open");
}


document.addEventListener("keydown",e=>{if(e.key==="Escape"){closeProduct();closeCart();closeCheckout()}if(currentProduct&&document.getElementById("productModal").classList.contains("show")){if(e.key==="ArrowRight")nextProductImage();if(e.key==="ArrowLeft")prevProductImage()}});
// ===== CUSTOM DESIGN / WHOLESALE =====
let businessType="custom";
function openBusinessForm(type){
  businessType=type||"custom";
  const custom=businessType==="custom";
  const title=document.getElementById("businessTitle");
  const desc=document.getElementById("businessDescription");
  const eyebrow=document.getElementById("businessEyebrow");
  const qtyLabel=document.getElementById("businessQtyLabel");
  if(!title||!desc)return;
  eyebrow.textContent=custom?"CUSTOM DESIGN":"WHOLESALE ORDER";
  title.textContent=custom?"কাস্টম ডিজাইন":"পাইকারি অর্ডার";
  desc.textContent=custom?"আপনার পছন্দের ডিজাইন বা প্রয়োজন অনুযায়ী কাস্টম ল্যাম্প নিয়ে সরাসরি কথা বলুন।":"বাল্ক/পাইকারি অর্ডারের জন্য প্রয়োজনীয় পরিমাণ ও বিস্তারিত জানিয়ে আমাদের সাথে সরাসরি কথা বলুন।";
  qtyLabel.firstChild.textContent=custom?"প্রয়োজনীয় পরিমাণ":"অর্ডারের পরিমাণ";
  document.getElementById("businessOverlay").classList.add("show");
  document.body.classList.add("modal-open");
  setTimeout(()=>document.getElementById("businessName")?.focus(),80);
}
function closeBusinessForm(e){
  if(e && e.target!==document.getElementById("businessOverlay"))return;
  document.getElementById("businessOverlay")?.classList.remove("show");
  document.body.classList.remove("modal-open");
}
async function submitBusinessForm(e){
  e.preventDefault();

  const form=e.target;
  const submitBtn=form?.querySelector('button[type="submit"]');
  if(submitBtn?.dataset.submitting === "1") return;

  const name=document.getElementById("businessName")?.value.trim() || "";
  const phone=document.getElementById("businessPhone")?.value.trim() || "";
  const qty=Number(document.getElementById("businessQty")?.value || 1);
  const details=document.getElementById("businessDetails")?.value.trim() || "";
  const type=businessType==="custom"?"কাস্টম ডিজাইন":"পাইকারি অর্ডার";
  const order="ALB-SP-"+Date.now().toString().slice(-8);

  if(!name || !phone || !details){
    alert("অনুগ্রহ করে প্রয়োজনীয় তথ্যগুলো পূরণ করুন।");
    return;
  }

  if(submitBtn){
    submitBtn.dataset.submitting="1";
    submitBtn.disabled=true;
    submitBtn.textContent="⏳ অনুরোধ পাঠানো হচ্ছে...";
  }

  try{
    await saveOrderToGoogleSheet({
      orderNo:order,
      orderTime:new Date().toISOString(),
      orderType:type,
      name,
      phone,
      address:"—",
      deliveryArea:"—",
      paymentMethod:"—",
      weight:1,
      quantity:qty,
      details,
      items:[{name:type, qty, unitPrice:0, lineTotal:0}],
      subtotal:0,
      offer:"",
      offerDiscount:0,
      delivery:0,
      grandTotal:0,
      source:"AL-BARAKAH Website"
    });

    closeBusinessForm();
    showOrderSuccess(order, 0, type + " অনুরোধ সফলভাবে গ্রহণ করা হয়েছে।");
  }catch(err){
    console.error("Special order submission failed:",err);
    alert("অনুরোধ পাঠানো যায়নি। অনুগ্রহ করে কিছুক্ষণ পর আবার চেষ্টা করুন।");
  }finally{
    if(submitBtn){
      submitBtn.dataset.submitting="0";
      submitBtn.disabled=false;
      submitBtn.textContent="📨 অনুরোধ পাঠান";
    }
  }
}

const yearEl=document.getElementById("year"); if(yearEl) yearEl.textContent=new Date().getFullYear();
if(!IS_PRODUCT_PAGE){
  const requestedCategory = new URLSearchParams(window.location.search).get("category");
  if(requestedCategory && products.some(x => x.cat === requestedCategory)){
    active = requestedCategory;
  }
  categories();
  renderProducts();
  renderFeaturedProducts();
  renderCart();
} else {
  renderMenuCategories();
}
count();
addPremiumTrustAndSupport();

// ===== V12: AUTO PRODUCT MAIN-IMAGE SLIDER =====
let heroIndex = 0;
let heroTimer = null;

const MAX_HERO_DOTS = 7;

function renderHeroDots(){
  const dots = document.getElementById('heroDots');
  if(!dots || !products.length) return;

  const total = products.length;

  // ৭টির কম/সমান Product হলে সব dot দেখাবে
  if(total <= MAX_HERO_DOTS){
    dots.innerHTML = products.map((p,i) =>
      `<button
        class="hero-dot ${i === heroIndex ? 'active' : ''}"
        type="button"
        onclick="event.stopPropagation();heroGo(${i})"
        aria-label="ছবি ${i+1}">
      </button>`
    ).join('');

    return;
  }

  // সর্বোচ্চ ৭টি dot-এর active window
  let start;

  if(heroIndex <= 3){
    // শুরুতে প্রথম ৭টি
    start = 0;
  }else if(heroIndex >= total - 4){
    // শেষে শেষ ৭টি
    start = total - MAX_HERO_DOTS;
  }else{
    // মাঝখানে active dot-কে কেন্দ্র করে
    start = heroIndex - 3;
  }

  const end = Math.min(start + MAX_HERO_DOTS, total);

  let html = '';

  for(let i = start; i < end; i++){
    html += `
      <button
        class="hero-dot ${i === heroIndex ? 'active' : ''}"
        type="button"
        onclick="event.stopPropagation();heroGo(${i})"
        aria-label="ছবি ${i+1}">
      </button>
    `;
  }

  dots.innerHTML = html;
}

function initHeroSlider(){
  const track = document.getElementById('heroSlideTrack');
  const dots = document.getElementById('heroDots');

  if(!track || !dots || !products.length) return;

  // সব Product Slider-এ থাকবে
  track.innerHTML = products.map((p,i) =>
    `<div
      class="hero-slide"
      onclick="openProduct(${p.id})"
      role="button"
      tabindex="0"
      aria-label="${p.name} বিস্তারিত দেখুন">

      <img
        src="${p.img}"
        alt="${p.name}"
        loading="${i === 0 ? 'eager' : 'lazy'}">

      <div class="hero-slide-info">
        <strong>${p.name}</strong>
        <small>${p.discount}% ছাড় • ${money(p.price)}</small>
      </div>

    </div>`
  ).join('');

  renderHeroDots();
  heroUpdate();
  heroStart();

  const slider = document.getElementById('heroSlider');

  if(slider){
    slider.addEventListener('mouseenter', heroPause);
    slider.addEventListener('mouseleave', heroStart);
    slider.addEventListener('touchstart', heroPause, {passive:true});
    slider.addEventListener('touchend', heroStart, {passive:true});
  }
}

function heroUpdate(){
  const track = document.getElementById('heroSlideTrack');

  if(!track) return;

  // Slider-এর সব Product আগের মতোই থাকবে
  track.style.transform =
    `translate3d(-${heroIndex * 100}%,0,0)`;

  // শুধু সর্বোচ্চ ৭টি dot দেখাবে
  renderHeroDots();
}

function heroGo(i){
  if(!products.length) return;

  heroIndex = (i + products.length) % products.length;

  heroUpdate();
  heroStart();
}

function heroNext(){
  if(!products.length) return;

  heroIndex = (heroIndex + 1) % products.length;

  heroUpdate();
  heroStart();
}

function heroPrev(){
  if(!products.length) return;

  heroIndex =
    (heroIndex - 1 + products.length) % products.length;

  heroUpdate();
  heroStart();
}

function heroStart(){
  clearInterval(heroTimer);
  heroTimer = setInterval(heroNext, 3500);
}

function heroPause(){
  clearInterval(heroTimer);
}

initHeroSlider();


// =====================================================
// AL-BARAKAH MOBILE BACK BUTTON / OVERLAY HISTORY FIX
// =====================================================

(function () {

  let albaBackLock = false;

  function getOverlayState() {
    const product = document.getElementById("productModal");
    const cart = document.getElementById("cartOverlay");
    const checkout = document.getElementById("checkoutOverlay");
    const business = document.getElementById("businessFormOverlay");

    if (checkout && checkout.classList.contains("show")) {
      return "checkout";
    }

    if (cart && cart.classList.contains("show")) {
      return "cart";
    }

    if (product && product.classList.contains("show")) {
      return "product";
    }

    if (business && business.classList.contains("show")) {
      return "business";
    }

    return null;
  }

  function pushOverlayState(type) {
    if (albaBackLock) return;

    const current = history.state;

    if (!current || !current.albaOverlay) {
      history.pushState(
        { albaOverlay: type },
        "",
        window.location.href.split("#")[0]
      );
    } else {
      history.replaceState(
        { albaOverlay: type },
        "",
        window.location.href.split("#")[0]
      );
    }
  }

  function closeCurrentOverlay() {

    const checkout = document.getElementById("checkoutOverlay");
    const cart = document.getElementById("cartOverlay");
    const product = document.getElementById("productModal");
    const business = document.getElementById("businessFormOverlay");

    if (checkout && checkout.classList.contains("show")) {
      checkout.classList.remove("show");
      return true;
    }

    if (cart && cart.classList.contains("show")) {
      cart.classList.remove("show");
      return true;
    }

    if (product && product.classList.contains("show")) {
      product.classList.remove("show");
      document.body.classList.remove("modal-open");
      return true;
    }

    if (business && business.classList.contains("show")) {
      business.classList.remove("show");
      return true;
    }

    return false;
  }

  window.addEventListener("popstate", function () {

    albaBackLock = true;

    const closed = closeCurrentOverlay();

    albaBackLock = false;

    if (!closed) {
      // কোনো popup খোলা না থাকলে browser-এর স্বাভাবিক Back কাজ করবে
      return;
    }

    // Overlay বন্ধ হওয়ার পর history state পরিষ্কার করা
    if (history.state && history.state.albaOverlay) {
      history.replaceState(
        null,
        "",
        window.location.href.split("#")[0]
      );
    }
  });

  // Overlay open হলে history state তৈরি
  window.albaOpenOverlay = function (type) {
    pushOverlayState(type);
  };

})();


// =====================================================
// AL-BARAKAH MOBILE CATEGORY SWIPE HINT
// প্রথমবার Category দেখার সময় ৩ সেকেন্ডের Hint
// =====================================================

(function () {

  const HINT_KEY = "albarakah_category_swipe_hint_seen";

  function showCategorySwipeHint() {

    // আগে দেখানো হয়ে থাকলে আর দেখাবে না
    if (localStorage.getItem(HINT_KEY) === "1") {
      return;
    }

    const categories = document.getElementById("categories");

    if (!categories) return;

    // শুধু Mobile-এর জন্য
    if (window.innerWidth > 650) return;

    // একই hint একাধিকবার তৈরি হওয়া বন্ধ
    if (document.getElementById("albaCategorySwipeHint")) {
      return;
    }

    // Category wrapper তৈরি
    let wrapper = categories.parentElement;

    if (!wrapper.classList.contains("alba-category-wrap")) {

      const newWrapper = document.createElement("div");

      newWrapper.className = "alba-category-wrap";

      categories.parentNode.insertBefore(
        newWrapper,
        categories
      );

      newWrapper.appendChild(categories);

      wrapper = newWrapper;
    }

    // Hint তৈরি
    const hint = document.createElement("div");

    hint.id = "albaCategorySwipeHint";

    hint.innerHTML = `
      <span class="alba-hint-icon">👉</span>
      <span>আরও ক্যাটাগরি দেখতে ডানে সোয়াইপ করুন</span>
      <span class="alba-hint-arrow">→</span>
    `;

    wrapper.appendChild(hint);

    // Hint দেখানোর animation
    requestAnimationFrame(() => {
      hint.classList.add("show");
    });

    // একবার দেখানো হয়েছে — মনে রাখবে
    localStorage.setItem(HINT_KEY, "1");

    // ৩ সেকেন্ড পরে চলে যাবে
    setTimeout(() => {

      hint.classList.remove("show");

      setTimeout(() => {
        hint.remove();
      }, 350);

    }, 3000);
  }


  // Category viewport-এ আসলে Hint দেখাবে
  function initCategorySwipeHint() {

    const categories = document.getElementById("categories");

    if (!categories) {
      setTimeout(initCategorySwipeHint, 500);
      return;
    }

    // আগে দেখানো হয়ে থাকলে observer-এর প্রয়োজন নেই
    if (localStorage.getItem(HINT_KEY) === "1") {
      return;
    }

    // Mobile ছাড়া Hint নয়
    if (window.innerWidth > 650) {
      return;
    }

    const observer = new IntersectionObserver(
      function (entries) {

        entries.forEach(function (entry) {

          if (entry.isIntersecting) {

            showCategorySwipeHint();

            observer.disconnect();

          }

        });

      },
      {
        threshold: 0.35
      }
    );

    observer.observe(categories);
  }


  // Page load হওয়ার পরে শুরু
  if (document.readyState === "loading") {

    document.addEventListener(
      "DOMContentLoaded",
      initCategorySwipeHint
    );

  } else {

    initCategorySwipeHint();

  }

})();


// =====================================================
// AL-BARAKAH SMART CATEGORY SWIPE INDICATOR
// User swipe করলে hint permanently hide
// =====================================================

(function(){

  function initSmartCategory(){

    const categories =
      document.getElementById("categories");

    const hint =
      document.getElementById("albaCategorySwipeHint");

    if(!categories) return;

    let hasInteracted = false;

    categories.addEventListener(
      "scroll",
      function(){

        if(hasInteracted) return;

        hasInteracted = true;

        if(hint){

          hint.classList.remove("show");

          setTimeout(function(){

            if(hint && hint.parentNode){
              hint.remove();
            }

          },350);

        }

      },
      {
        passive:true
      }
    );

  }


  if(document.readyState === "loading"){

    document.addEventListener(
      "DOMContentLoaded",
      initSmartCategory
    );

  }else{

    initSmartCategory();

  }

})();

// =====================================================
// AL-BARAKAH UNIVERSAL MOBILE KEYBOARD FIX
// Chrome + Facebook In-App Browser + Android WebView
// =====================================================

(function(){

  let initialHeight = window.innerHeight;
  let keyboardOpen = false;

  function getActiveField(){

    const el = document.activeElement;

    if(!el) return null;

    if(
      el.tagName === "INPUT" ||
      el.tagName === "TEXTAREA" ||
      el.tagName === "SELECT"
    ){
      return el;
    }

    return null;
  }


  function isKeyboardOpen(){

    let currentHeight = window.innerHeight;

    // visualViewport থাকলে সেটার height ব্যবহার
    if(window.visualViewport){
      currentHeight = Math.min(
        window.innerHeight,
        window.visualViewport.height
      );
    }

    return (
      initialHeight - currentHeight > 120
    );
  }


  function findOpenPopup(){

    const ids = [
      "checkoutOverlay",
      "cartOverlay",
      "productModal",
      "businessOverlay",
      "businessFormOverlay"
    ];

    for(let i=0;i<ids.length;i++){

      const el=document.getElementById(ids[i]);

      if(
        el &&
        el.classList.contains("show")
      ){
        return el;
      }

    }

    return null;
  }


  function moveFieldAboveKeyboard(){

    const field = getActiveField();

    if(!field) return;

    const popup = findOpenPopup();

    setTimeout(function(){

      // -----------------------------------------
      // প্রথম চেষ্টা: scrollIntoView
      // -----------------------------------------

      try{

        field.scrollIntoView({
          behavior:"smooth",
          block:"center",
          inline:"nearest"
        });

      }catch(err){}


      // -----------------------------------------
      // দ্বিতীয় চেষ্টা: popup-এর ভিতরে scroll
      // Facebook WebView-এর জন্য গুরুত্বপূর্ণ
      // -----------------------------------------

      if(popup){

        setTimeout(function(){

          try{

            const fieldRect =
              field.getBoundingClientRect();

            const popupRect =
              popup.getBoundingClientRect();

            const viewportHeight =
              window.visualViewport
                ? window.visualViewport.height
                : window.innerHeight;

            // Keyboard-এর উপরের নিরাপদ জায়গা
            const safeBottom =
              viewportHeight - 30;

            // Field নিচে চলে গেলে
            if(fieldRect.bottom > safeBottom){

              const difference =
                fieldRect.bottom - safeBottom;

              popup.scrollTop += difference + 30;

            }

            // Field popup-এর উপরের বাইরে চলে গেলে
            if(fieldRect.top < popupRect.top){

              popup.scrollTop -=
                (popupRect.top - fieldRect.top) + 20;

            }

          }catch(err){}

        },150);

      }

    },250);

  }


  // =================================================
  // INPUT / TEXTAREA FOCUS
  // =================================================

  document.addEventListener(
    "focusin",
    function(e){

      const el=e.target;

      if(
        el.tagName === "INPUT" ||
        el.tagName === "TEXTAREA" ||
        el.tagName === "SELECT"
      ){

        setTimeout(function(){

          moveFieldAboveKeyboard();

        },200);

        setTimeout(function(){

          moveFieldAboveKeyboard();

        },600);

        setTimeout(function(){

          moveFieldAboveKeyboard();

        },1000);

      }

    },
    true
  );


  // =================================================
  // VISUAL VIEWPORT
  // Chrome + newer WebView
  // =================================================

  if(window.visualViewport){

    window.visualViewport.addEventListener(
      "resize",
      function(){

        if(isKeyboardOpen()){

          keyboardOpen=true;

          moveFieldAboveKeyboard();

        }else{

          keyboardOpen=false;

        }

      }
    );


    window.visualViewport.addEventListener(
      "scroll",
      function(){

        if(keyboardOpen){

          moveFieldAboveKeyboard();

        }

      }
    );

  }


  // =================================================
  // WINDOW RESIZE
  // Facebook In-App Browser fallback
  // =================================================

  window.addEventListener(
    "resize",
    function(){

      if(isKeyboardOpen()){

        keyboardOpen=true;

        setTimeout(function(){

          moveFieldAboveKeyboard();

        },100);

      }else{

        keyboardOpen=false;

      }

    }
  );


  // =================================================
  // PAGE LOAD HEIGHT
  // =================================================

  window.addEventListener(
    "load",
    function(){

      setTimeout(function(){

        initialHeight=window.innerHeight;

      },500);

    }
  );


  // =================================================
  // ORIENTATION CHANGE
  // =================================================

  window.addEventListener(
    "orientationchange",
    function(){

      setTimeout(function(){

        initialHeight=window.innerHeight;

      },500);

    }
  );


})();










// =====================================================
// AL-BARAKAH PREMIUM FLASH OFFER SYSTEM
// SECURE FIXED-TIME COUNTDOWN
// BANGLADESH TIME + ONLINE TIME SYNC
// =====================================================

const ALBA_OFFER = {
	
  // ===================================================
  // true  = Offer চালু
  // false = Offer বন্ধ
  // ===================================================
  enabled: true,

  // ===================================================
  // OFFER START AND END TIME
  // Bangladesh Time (UTC +6)
  // ===================================================
  startTime: "2026-09-11T00:00:00+06:00",
  endTime:   "2026-09-31T23:59:59+06:00",


  // ===================================================
  // CAMPAIGN ID
  // নতুন Campaign চালু করলে ID পরিবর্তন করবেন
  // ===================================================
  campaignId: "free-delivery-campaign-3",


  // ===================================================
  // OFFER TYPE
  // free_delivery
  // extra_discount
  // ===================================================
  type: "free_delivery",


  // ===================================================
  // EXTRA DISCOUNT
  // ===================================================
  extraDiscountPercent: 5,


  // ===================================================
  // OFFER PRODUCT CATEGORIES
  // এখানে যেসব category দেবেন, অফার শুধু সেই category-এর
  // product-এর উপর প্রযোজ্য হবে।
  // [] দিলে সব category-এর product eligible হবে।
  // উদাহরণ: ["ওয়াল ল্যাম্প", "টেবিল ল্যাম্প"]
  // ===================================================
  categories: ["ওয়াল ল্যাম্প", "টেবিল ল্যাম্প", "ডেকোরেটিভ আইটেম"],

  // ===================================================
  // MINIMUM ORDER
  // 0 = কোনো minimum নেই
  // ===================================================
  minOrder: 0
};



// =====================================================
// TIME API
// =====================================================
//
// Online server time ব্যবহার করা হবে।
// তাই visitor-এর mobile/computer clock
// পরিবর্তন করলেও countdown সেই clock অনুসরণ করবে না.
//
// =====================================================

const ALBA_TIME_APIS = [
  "https://timeapi.io/api/Time/current/zone?timeZone=Asia%2FDhaka",
  "https://worldtimeapi.org/api/timezone/Asia/Dhaka"
];


// =====================================================
// SERVER TIME VARIABLES
// =====================================================

let albaServerTimeAtSync = null;

let albaClientTimeAtSync = null;

let albaTimeSynced = false;

let albaTimeSyncTimer = null;


// =====================================================
// GET TRUSTED CURRENT TIME
// =====================================================
//
// Server থেকে পাওয়া সময়ের সঙ্গে
// client-এর elapsed time যোগ করে বর্তমান সময়
// বের করা হবে।
//
// ফলে প্রতি সেকেন্ডে API call করার প্রয়োজন নেই।
//
// =====================================================

function albaGetTrustedNow(){

  // ===================================================
  // Server time এখনো পাওয়া যায়নি
  // ===================================================

  if(
    albaServerTimeAtSync === null ||
    albaClientTimeAtSync === null
  ){

    return null;
  }


  // ===================================================
  // Server sync হওয়ার পর client-এ যত সময় গেছে
  // ===================================================

  const elapsed =
    performance.now() -
    albaClientTimeAtSync;


  return (
    albaServerTimeAtSync +
    elapsed
  );
}


// =====================================================
// SYNC WITH ONLINE TIME
// =====================================================

async function albaSyncServerTime(){

  // একাধিক trusted online time source চেষ্টা করা হবে।
  // কোনো source ব্যর্থ হলে পরের source ব্যবহার হবে।
  for(const apiUrl of ALBA_TIME_APIS){
    try{
      const requestStart = performance.now();
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 7000);

      let response;
      try{
        response = await fetch(apiUrl, {
          method: "GET",
          cache: "no-store",
          signal: controller.signal
        });
      }finally{
        clearTimeout(timeoutId);
      }

      if(!response.ok) throw new Error("Time API request failed: " + response.status);

      const data = await response.json();
      const requestEnd = performance.now();
      let serverTime = NaN;

      // timeapi.io returns dateTime; worldtimeapi returns unixtime.
      if(typeof data.unixtime === "number"){
        serverTime = data.unixtime * 1000;
      }else if(typeof data.dateTime === "string"){
        const dateTime = data.dateTime.trim();
        // API timestamp-এ timezone offset না থাকলে Bangladesh (+06:00) যোগ করা হবে।
        const hasTimezone = /(?:Z|[+-]\d{2}:?\d{2})$/i.test(dateTime);
        serverTime = new Date(hasTimezone ? dateTime : dateTime + "+06:00").getTime();
      }

      if(!Number.isFinite(serverTime)) throw new Error("Invalid time response");

      // Network latency-এর অর্ধেক যোগ করে আনুমানিক midpoint time।
      albaServerTimeAtSync = serverTime + ((requestEnd - requestStart) / 2);
      albaClientTimeAtSync = performance.now();
      albaTimeSynced = true;
      return true;

    }catch(error){
      console.warn("AL-BARAKAH time source failed:", apiUrl, error);
    }
  }

  albaTimeSynced = false;
  albaServerTimeAtSync = null;
  albaClientTimeAtSync = null;
  console.error("AL-BARAKAH: সব online time source ব্যর্থ হয়েছে; countdown নিরাপত্তার জন্য লুকানো আছে।");
  return false;
}

// =====================================================
// OFFER START TIMESTAMP
// =====================================================

function albaGetOfferStart(){

  return new Date(
    ALBA_OFFER.startTime
  ).getTime();

}


// =====================================================
// OFFER END TIMESTAMP
// =====================================================

function albaGetOfferEnd(){

  return new Date(
    ALBA_OFFER.endTime
  ).getTime();

}


// =====================================================
// OFFER ACTIVE?
// =====================================================

function albaIsOfferActive(){

  if(!ALBA_OFFER.enabled){

    return false;
  }


  const now =
    albaGetTrustedNow();


  if(now === null){

    return false;
  }


  const start =
    albaGetOfferStart();


  const end =
    albaGetOfferEnd();


  return (
    now >= start &&
    now < end
  );

}


// =====================================================
// OFFER UPCOMING?
// =====================================================

function albaIsOfferUpcoming(){

  const now =
    albaGetTrustedNow();


  if(now === null){

    return true;
  }


  return (
    now <
    albaGetOfferStart()
  );

}


// =====================================================
// OFFER EXPIRED?
// =====================================================

function albaIsOfferExpired(){

  const now =
    albaGetTrustedNow();


  if(now === null){

    return false;
  }


  return (
    now >=
    albaGetOfferEnd()
  );

}


// =====================================================
// OFFER PRODUCT CATEGORY FILTER
// =====================================================

function albaIsOfferProductEligible(p){
  if(!p) return false;
  const allowed=Array.isArray(ALBA_OFFER.categories) ? ALBA_OFFER.categories : [];
  if(allowed.length===0) return true;
  return allowed.some(cat => String(cat).trim() === String(p.cat || "").trim());
}

function albaEligibleSubtotal(){
  if(typeof cart === "undefined" || !Array.isArray(cart)) return 0;
  return cart.reduce((sum,item)=>{
    const p=products.find(x=>x.id===item.id);
    if(!p || !albaIsOfferProductEligible(p)) return sum;
    return sum + currentPrice(p) * (Number(item.qty)||0);
  },0);
}

function albaAllCartProductsEligible(){
  if(!Array.isArray(cart) || cart.length===0) return false;
  return cart.every(item=>{
    const p=products.find(x=>x.id===item.id);
    return !!p && albaIsOfferProductEligible(p);
  });
}

// =====================================================
// OFFER DISCOUNT
// =====================================================

function albaOfferDiscount(){

  if(
    !albaIsOfferActive()
  ){

    return 0;
  }


  if(
    ALBA_OFFER.type !==
    "extra_discount"
  ){

    return 0;
  }


  const subtotal = albaEligibleSubtotal();


  if(
    ALBA_OFFER.minOrder > 0 &&
    subtotal <
    ALBA_OFFER.minOrder
  ){

    return 0;
  }


  const percent =
    Number(
      ALBA_OFFER.extraDiscountPercent
    ) || 0;


  return Math.round(
    subtotal *
    percent /
    100
  );

}


// =====================================================
// DELIVERY CHARGE
// =====================================================

function albaGetDeliveryCharge(){

  // ===================================================
  // FREE DELIVERY
  // ===================================================

  if(
    albaIsOfferActive() &&
    ALBA_OFFER.type ===
    "free_delivery"
  ){

    const subtotal = albaEligibleSubtotal();

    // Free Delivery একটি order-level benefit হওয়ায় mixed cart-এ
    // ineligible product থাকলে এটি দেওয়া হবে না।
    if(
      albaAllCartProductsEligible() &&
      (ALBA_OFFER.minOrder <= 0 ||
       subtotal >= ALBA_OFFER.minOrder)
    ){
      return 0;
    }

  }


  // ===================================================
  // EXISTING DELIVERY SYSTEM
  // ===================================================

  const area =
    document.getElementById(
      "deliveryArea"
    )?.value ||
    "dhaka";


  const weight = 1;


  const base =
    area === "outside"
      ? 130
      : 70;


  const extraKg =
    weight > 1
      ? Math.ceil(
          weight - 1
        )
      : 0;


  return (
    base +
    extraKg * 20
  );

}


// =====================================================
// UPDATE OFFER UI
// =====================================================

function albaUpdateOffer(){

  const section =
    document.getElementById(
      "albaFlashOffer"
    );


  if(!section){

    return;
  }


  // ===================================================
  // OFFER DISABLED
  // ===================================================

  if(!ALBA_OFFER.enabled){

    section.style.display =
      "none";

    return;
  }


  // ===================================================
  // TIME NOT SYNCED
  // ===================================================

  if(!albaTimeSynced){

    // নিরাপত্তার জন্য countdown দেখাবে না
    // যতক্ষণ trusted time পাওয়া না যায়

    section.style.display =
      "none";

    return;
  }


  const now =
    albaGetTrustedNow();


  const start =
    albaGetOfferStart();


  const end =
    albaGetOfferEnd();

  // ভুল/অবৈধ campaign date থাকলে timer দেখানো হবে না।
  if(!Number.isFinite(start) || !Number.isFinite(end) || end <= start){
    section.style.display = "none";
    console.error("AL-BARAKAH: Offer startTime/endTime ভুলভাবে সেট করা হয়েছে।");
    return;
  }


  // ===================================================
  // OFFER NOT STARTED
  // ===================================================

  if(now < start){

    section.style.display =
      "none";

    return;
  }


  // ===================================================
  // OFFER EXPIRED
  // ===================================================

  if(now >= end){

    clearInterval(
      albaOfferTimer
    );


    section.style.display =
      "none";

    return;
  }


  // ===================================================
  // OFFER ACTIVE
  // ===================================================

  section.style.display =
    "";


  // ===================================================
  // REMAINING TIME
  // ===================================================

  const remaining =
    end -
    now;


  if(remaining <= 0){

    section.style.display =
      "none";

    return;
  }


  // ===================================================
  // TIME CALCULATION
  // ===================================================

  const totalSeconds =
    Math.floor(
      remaining /
      1000
    );


  const days =
    Math.floor(
      totalSeconds /
      86400
    );


  const hours =
    Math.floor(
      (
        totalSeconds %
        86400
      ) /
      3600
    );


  const minutes =
    Math.floor(
      (
        totalSeconds %
        3600
      ) /
      60
    );


  const seconds =
    totalSeconds %
    60;


  // ===================================================
  // HTML ELEMENTS
  // ===================================================

  const dayEl =
    document.getElementById(
      "offerDays"
    );


  const hourEl =
    document.getElementById(
      "offerHours"
    );


  const minuteEl =
    document.getElementById(
      "offerMinutes"
    );


  const secondEl =
    document.getElementById(
      "offerSeconds"
    );


  // ===================================================
  // DAYS
  // ===================================================

  if(dayEl){

    dayEl.textContent =
      String(days)
        .padStart(
          2,
          "0"
        );
  }


  // ===================================================
  // HOURS
  // ===================================================

  if(hourEl){

    hourEl.textContent =
      String(hours)
        .padStart(
          2,
          "0"
        );
  }


  // ===================================================
  // MINUTES
  // ===================================================

  if(minuteEl){

    minuteEl.textContent =
      String(minutes)
        .padStart(
          2,
          "0"
        );
  }


  // ===================================================
  // SECONDS
  // ===================================================

  if(secondEl){

    secondEl.textContent =
      String(seconds)
        .padStart(
          2,
          "0"
        );
  }


  // ===================================================
  // OFFER TEXT
  // ===================================================

  const title =
    document.getElementById(
      "offerTitle"
    );


  const description =
    document.getElementById(
      "offerDescription"
    );


  const benefit =
    document.getElementById(
      "offerBenefit"
    );


  // ===================================================
  // FREE DELIVERY
  // ===================================================

  if(
    ALBA_OFFER.type ===
    "free_delivery"
  ){

    if(title){

      title.textContent =
        "বিশেষ Free Delivery Offer!";
    }


    if(description){

      description.textContent =
        "অফার শেষ হওয়ার আগেই অর্ডার করুন এবং ডেলিভারি চার্জ ছাড়াই পণ্য নিন।";
    }


    if(benefit){

      benefit.innerHTML =
        "🚚 <strong>FREE DELIVERY</strong>";
    }

  }


  // ===================================================
  // EXTRA DISCOUNT
  // ===================================================

  if(
    ALBA_OFFER.type ===
    "extra_discount"
  ){

    if(title){

      title.textContent =
        "নির্দিষ্ট পণ্যের উপড় বিশেষ ছাড়!";
    }


    if(description){

      description.textContent =
        "অফার শেষ হওয়ার আগে অর্ডার করলে অতিরিক্ত " +
        ALBA_OFFER.extraDiscountPercent +
        "% ছাড় পাবেন।";
    }


    if(benefit){

      benefit.innerHTML =
        "🔥 <strong>" +
        ALBA_OFFER.extraDiscountPercent +
        "% EXTRA DISCOUNT</strong>";
    }

  }

}


// =====================================================
// OFFER TIMER
// =====================================================

let albaOfferTimer =
  null;


// =====================================================
// START COUNTDOWN
// =====================================================

function albaStartOfferTimer(){

  clearInterval(
    albaOfferTimer
  );


  albaUpdateOffer();


  albaOfferTimer =
    setInterval(
      albaUpdateOffer,
      250
    );

}


// =====================================================
// PERIODIC TIME RESYNC
// =====================================================
//
// প্রতি 5 মিনিটে আবার server time নেওয়া হবে।
// এতে দীর্ঘসময় page খোলা থাকলেও clock drift কম থাকবে।
//
// =====================================================

async function albaStartTimeSync(){

  const synced =
    await albaSyncServerTime();


  if(synced){

    albaStartOfferTimer();
  }


  clearInterval(
    albaTimeSyncTimer
  );


  albaTimeSyncTimer =
    setInterval(
      async function(){

        const success =
          await albaSyncServerTime();


        if(success){

          albaUpdateOffer();
        }

      },
      5 * 60 * 1000
    );

}


// =====================================================
// INIT OFFER
// =====================================================

async function albaInitOffer(){

  const section =
    document.getElementById(
      "albaFlashOffer"
    );


  // ===================================================
  // OFFER OFF
  // ===================================================

  if(!ALBA_OFFER.enabled){

    if(section){

      section.style.display =
        "none";
    }

    return;
  }


  // ===================================================
  // INITIAL HIDE
  // ===================================================

  if(section){

    section.style.display =
      "none";
  }


  // ===================================================
  // GET TRUSTED TIME
  // ===================================================

  await albaStartTimeSync();

}


// =====================================================
// START
// =====================================================

if(
  document.readyState ===
  "loading"
){

  document.addEventListener(
    "DOMContentLoaded",
    albaInitOffer
  );

}else{

  albaInitOffer();

}


/* ===== AL-BARAKAH MOBILE MENU — UI ONLY ===== */
function toggleMobileMenu(){
  const overlay=document.getElementById("mobileMenuOverlay");
  const btn=document.querySelector(".mobile-menu-btn");
  if(!overlay)return;
  const show=!overlay.classList.contains("show");
  overlay.classList.toggle("show",show);
  document.body.classList.toggle("mobile-menu-open",show);
  if(btn) btn.setAttribute("aria-expanded",show?"true":"false");
}

function closeMobileMenu(e){
  if(e && e.target && e.target.id!=="mobileMenuOverlay") return;
  const overlay=document.getElementById("mobileMenuOverlay");
  const btn=document.querySelector(".mobile-menu-btn");
  if(!overlay)return;
  overlay.classList.remove("show");
  document.body.classList.remove("mobile-menu-open");
  if(btn) btn.setAttribute("aria-expanded","false");
}

document.addEventListener("keydown",function(e){
  if(e.key==="Escape") closeMobileMenu();
});
 
