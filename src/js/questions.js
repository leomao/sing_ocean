let questions = [
  {
    "level": 3,
    "question": "光合作用是一種%{:氧化還原作用%}"
  },
  {
    "level": 3,
    "question": "大氣中氧的穩定可藉由海水中有機質的沈降掩埋於海底來調控是一種%{:負回饋作用%}"
  },
  {
    "level": 3,
    "question": "海水中二氧化碳最穩定的型態為%{:$\\ce{HCO3-}$%}"
  },
  {
    "level": 3,
    "question": "海洋水體中有機質的$\\ce{C}/\\ce{N}$比值%{:隨深度增加而增加%}"
  },
  {
    "level": 3,
    "question": "鋁離子在大洋中的垂直分佈型態為%{:中層極小值%}"
  },
  {
    "level": 3,
    "question": "大洋底層水溶氧值最低的是%{:太平洋%}"
  },
  {
    "level": 3,
    "question": "大氣中 $\\ce{CO2}$ 含量在%{何季節:冬季%}最高"
  },
  {
    "level": 3,
    "question": "光合作用的波長範圍大概是%{:$400 \\sim 700\\si{\\nm}$%}"
  },
  {
    "level": 3,
    "question": "$\\ce{Mg}/\\ce{Ca}$的比例，海水比淡水來得%{:高%}"
  },
  {
    "level": 3,
    "question": "藻華的顏色是%{:紅色%}"
  },
  {
    "level": 3,
    "question": "$\\ce{NO3-}$ 在海水的分布為%{:表層沒有，欲往底層愈多%}"
  },
  {
    "level": 3,
    "question": "$\\ce{Al}$ 在海水的分布%{:中層極小，表層跟底層極大%}"
  },
  {
    "level": 3,
    "question": "$\\ce{Pb}$ 在海水的分布%{:表層極大，愈往底層漸減%}"
  },
  {
    "level": 3,
    "question": "溶氧在海水的分布%{:中層極小，表層極大，愈往底層漸增(跟$\\ce{Al}$類似)%}"
  },
  {
    "level": 3,
    "question": "溫度或鹽度 上升 將使溶氧%{:下降%}，反之亦然"
  },
  {
    "level": 3,
    "question": "化學平衡: $\\ce{53 CO2 + 61 H2O + 8 HNO3 + 8 H3PO4 -> 53 CH2O + 8 H3PO4(NH3) +69 O2}$"
  },
  {
    "level": 3,
    "question": "溫室氣體%{列四種:CO2、CH4、N2O、CFCS(氟氯碳化物)%}"
  },
  {
    "level": 3,
    "question": "大西洋海水下沉流，太平洋湧升流。所以深層水大西洋%{:氧多、營養少%}，太平洋%{:氧少、營養多%}"
  },
  {
    "level": 3,
    "question": "海水的顏色是%{:無色透明(選項將有藍色 綠色 都是錯的)%}的"
  },
  {
    "level": 3,
    "question": "健康的浮游植物(phytoplankton)需依一定比例吸收碳氮及磷，redfield ratio: $\\ce{C : N : P} =${:$106: 16 : 1$}"
  },
  {
    "level": 3,
    "question": "哪種環境影響魚類分布最大%{:食物%}"
  },
  {
    "level": 3,
    "question": "哪種環境影響初級生產量(藻類)最大%{:光線.溫度.營養鹽%}"
  },
  {
    "level": 3,
    "question": "補償深度是指%{:光合作用=呼吸作用%}"
  },
  {
    "level": 3,
    "question": "大型生物可藉%{何者:魚標.肺部.鰭三者皆可%}避免沉降"
  },
  {
    "level": 3,
    "question": "鮭魚生活史何者正確? → 產卵時溯河而上.迴游(一生都在海洋中為非)"
  },
  {
    "level": 3,
    "question": "鮪魚.馬林魚分布在%{:熱帶.亞熱帶%}"
  },
  {
    "level": 3,
    "question": "深海動物發光可用來%{:捕食+防禦%}"
  },
  {
    "level": 3,
    "question": "深海巨大症何者為非? → 生長快速"
  },
  {
    "level": 3,
    "question": "何者為非? → 細菌分解大有機物是初級生產量"
  },
  {
    "level": 3,
    "question": "海洋裡何者為非? → 次級產量大於初級產量"
  },
  {
    "level": 3,
    "question": "湧升流食物鏈較大洋食物鏈%{:短%}"
  },
  {
    "level": 3,
    "question": "造成漁業資源枯竭%{:環境改變.工具改變.彀魚(選以上皆是)%}"
  },
  {
    "level": 3,
    "question": "彀(ㄍㄡˋ)魚是指%{:捕獲太多小魚%}"
  },
  {
    "level": 3,
    "question": "麻痺性病毒%{:影響鈉的CHANNEL%}"
  },
  {
    "level": 3,
    "question": "熱帶魚毒中毒症狀為%{:下痢%}"
  },
  {
    "level": 3,
    "question": "紅潮發生對海洋生物最大衝擊是%{:溶氧量減少%}"
  },
  {
    "level": 3,
    "question": "紅潮發生源於%{:浮游動植物%}"
  },
  {
    "level": 3,
    "question": "多醣菜(洋菜)用途%{:食品加工.培養細菌.工業用途.清腸道(選以上皆是)%}"
  },
  {
    "level": 3,
    "question": "國內淺海養殖大型海藻有%{哪些:紫菜.龍鬚菜(無石花菜)%}"
  },
  {
    "level": 3,
    "question": "膠原蛋白可從%{哪種海洋生物:魚類(植物.貝殼不行)%}獲得"
  },
// known problems
  {
    "level": 3,
    "question": "福島核電場外洩的放射物質可能有%{:(B)%} (A) 氧-18 (B) 碘-131 (C) 鉛-210 (D) 碳-14"
  },
  {
    "level": 3,
    "question": "哪一種放射性同位素可能是福島核電場的外洩產物%{:(B)%} (A) 氧-18 (B) 銫-137 (C) 鉛-210 (D) 碳-14"
  },
  {
    "level": 3,
    "question": "表層海水的溶氧量大約是%{多少:$\\SI{5}{ppm}$%}"
  },
  {
    "level": 3,
    "question": "海水中最有經濟規模的提煉產物是%{:(D)%} (A) 金 (B) 銀 (C) 鈾 (D) 飲用水"
  },
  {
    "level": 3,
    "question": "海水的 pH 大約是%{:8%}"
  },
  {
    "level": 3,
    "question": "地球大氣的 CO2 已經增加到%{多少:400%}ppm"
  },
  {
    "level": 3,
    "question": "海水的電導係數 ($\\si{\\micro S \\per \\cm}$) 大約是%{多少:53000%}"
  },
  {
    "level": 3,
    "question": "海水的鹽度 S 大約是%{多少:$35$%}"
  },
  {
    "level": 3,
    "question": "海水酸化的原因是%{:二氧化碳增加%}"
  },
  {
    "level": 3,
    "question": "大 S 是表示海水鹽度的符號，請問 S=35 代表%{:每公斤海水中有 35 公克的鹽%}"
  },
  {
    "level": 3,
    "question": "台灣北部陰陽海景觀的成因是%{:亞鐵與三價鐵的變化%}"
  },
  {
    "level": 3,
    "question": "龜山島海底熱泉的特色是%{:(A)%} (A) 含大量硫磺(B) 含大量氧氣(C) 含大量銅離子(D) 含大量葉綠素"
  },
  {
    "level": 3,
    "question": "市面海水飲品有哪些種類%{:(A) 海水直接稀釋(B) 海水(經RO)淡化(C) 海水(經RO)淡化再加鹽(D) 電解製鹽的副產品(E) 普通水加一滴鹽滷%}"
  },
  {
    "level": 3,
    "question": "海水為什麼會酸化%{:大氣二氧化碳增加改變了海洋中的碳平衡、人類排放工業酸水，污染海洋%}"
  },
// new
  {
    "level": 3,
    "question": "當船員在海上漂流時需要水時可以{怎麼做:喝尿、喝雨水}"
  },
  {
    "level": 3,
    "question": "海水跟空氣的比較，密度為{多少:800}倍，黏滯性為{多少:60}倍，傳音速度為{多少:4}倍，導電度為{多少:1016}倍"
  },
  {
    "level": 3,
    "question": "低溫高壓會降低細胞膜的{什麼:流動性}，每增加 1000 大氣壓等效於降低{約幾度:13 - 21℃}"
  },
  {
    "level": 5,
    "question": "{什麼:氧化三甲胺 TMAO}分解後的{什麼:三甲胺 TMA}是魚腥味的主要來源"
  },
  {
    "level": 3,
    "question": "光暗瓶法可以測量{哪兩種量:淨基礎生產量、消耗量}以求得{什麼量:基礎生產總量}，此法的優點為{:比較準確}，缺點為{哪三個:耗時費力、只能做小範圍、受海況限制}"
  },
  {
    "level": 3,
    "question": "碳-14標定法可測量{什麼量:基礎生產總量}"
  },
  {
    "level": 3,
    "question": "生物多樣性即為{:單位面積或體積內的物種數量和豐度的變化}"
  },
  {
    "level": 3,
    "question": "海洋自營細菌有{哪兩種:光合細菌、化學合成細菌}"
  },
  {
    "level": 3,
    "question": "雙鞭毛蟲的危害是{什麼:赤潮}"
  },
  {
    "level": 3,
    "question": "浮游生物的適應方式有{什麼方式:增加浮力機制}以維持在表水層和{哪兩個方式:身體透明化和垂直遷移}以避免被吃掉"
  },
  {
    "level": 3,
    "question": "浮游生物增加浮力的方法有{哪些:增加表面積、體表的突起、毛髮和翅膀都可增加摩擦力，減緩下沈，排除重離子，利用氣囊}"
  },
  {
    "level": 3,
    "question": "賞龜時要注意{哪幾點:避免開燈、至少距離 5-10 公尺、產卵結束後才能拍照、不能使用閃光燈}"
  },
  {
    "level": 3,
    "question": "水母、珊瑚、海葵都屬於{哪個門:刺細胞動物門}"
  },
  {
    "level": 3,
    "question": "櫛板動物門的特徵是{什麼:身體成球狀，兩側對稱，有八排具有纖毛的櫛板帶}"
  },
  {
    "level": 3,
    "question": "扁蟲的特徵是{什麼:兩側對稱，不分節，背腹扁平}"
  },
  {
    "level": 3,
    "question": "環節動物門的特徵是{什麼:兩側對稱，分節，具有疣足和剛毛}"
  },
  {
    "level": 3,
    "question": "甲殼動物門的特徵是{什麼:堅硬的基丁質外骨骼，靈活的節肢}"
  },
  {
    "level": 3,
    "question": "生態系統在文化上的價值有{哪些:娛樂、教育、科學、好奇心} (這感覺很鬧)"
  },
  {
    "level": 3,
    "question": "顆粒有機碳通量隨深度{什麼趨勢:遞減}"
  },
  {
    "level": 3,
    "question": "適應食物缺乏的環境的方法為{哪三個:吃多、高效、低耗}"
  },
];

export default questions;
