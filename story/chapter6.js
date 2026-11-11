(()=>{
"use strict";
const story=window.CHAPTER_1;
const nodes={
  "chapter6_start": [
    {
      "type": "section",
      "title": "第六章｜謊言"
    },
    {
      "type": "text",
      "pages": [
        {
          "text": "黑暗並沒有持續太久，畫面重新亮起時，你仍站在那條石板路上。",
          "speaker": "",
          "effects": [
            "fade-black",
            "blur",
            "fade-black"
          ]
        },
        {
          "text": "腳下的道路筆直延伸，兩側沒有住家、路燈或圍牆，只有濃得化不開的黑暗，你回頭望去，原本應該位於身後的老宅已經消失，來時的道路也變成同樣看不見盡頭的長廊。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "蘇璟辰的聲音從四面八方傳來。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "「這棟老宅沒有出口。」",
          "speaker": "蘇璟辰",
          "effects": []
        },
        {
          "text": "那句話落下以後，道路再次向前延伸，石板一塊接著一塊從黑暗裡浮現，排列到視線無法抵達的遠處。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "「猜猜看。」",
          "speaker": "蘇璟辰",
          "effects": []
        },
        {
          "text": "「它是真的沒有盡頭——」",
          "speaker": "蘇璟辰",
          "effects": []
        },
        {
          "text": "「還是因為你相信它沒有盡頭？」",
          "speaker": "蘇璟辰",
          "effects": []
        },
        {
          "text": "你沒有回答，遠處忽然亮起一盞燈，燈下站著黎靖，他維持著人形，頸部纏著繃帶，那張沒有五官的臉朝向你，你立刻向他走去，可無論走了多久，彼此之間的距離都沒有縮短。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "「黎靖！」",
          "speaker": "你",
          "effects": []
        },
        {
          "text": "他似乎聽見了。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "「不要過來。」",
          "speaker": "黎靖",
          "effects": []
        },
        {
          "text": "「你知道怎麼出去嗎？」",
          "speaker": "你",
          "effects": []
        },
        {
          "text": "「不知道。」",
          "speaker": "黎靖",
          "effects": []
        },
        {
          "text": "「蘇璟辰把路改了。」",
          "speaker": "黎靖",
          "effects": []
        },
        {
          "text": "黎靖安靜片刻。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "「他說了什麼？」",
          "speaker": "黎靖",
          "effects": []
        },
        {
          "text": "「他說這裡沒有出口。」",
          "speaker": "你",
          "effects": []
        },
        {
          "text": "道路又延長了一截，黎靖立刻打斷你。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "「不要重複。」",
          "speaker": "黎靖",
          "effects": []
        },
        {
          "text": "「為什麼？」",
          "speaker": "你",
          "effects": []
        },
        {
          "text": "「每說一次，路就會變得更長。」",
          "speaker": "黎靖",
          "effects": []
        },
        {
          "text": "蘇璟辰低聲笑了。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "「錯了。」",
          "speaker": "蘇璟辰",
          "effects": []
        },
        {
          "text": "「不是說出口才會生效。」",
          "speaker": "蘇璟辰",
          "effects": []
        },
        {
          "text": "「是相信。」",
          "speaker": "蘇璟辰",
          "effects": []
        },
        {
          "text": "黑暗裡浮現無數道粉色人影，每一道身影都站在不同的道路盡頭，頸部纏著染血的繃帶，臉被黑暗完整覆蓋。",
          "speaker": "",
          "effects": [
            "glitch"
          ]
        },
        {
          "text": "「只要有一個人相信——」",
          "speaker": "蘇璟辰",
          "effects": []
        },
        {
          "text": "「謊言就能成為現實。」",
          "speaker": "蘇璟辰",
          "effects": []
        }
      ]
    },
    {
      "type": "jump",
      "target": "ch6_first_test"
    }
  ],
  "ch6_first_test": [
    {
      "type": "section",
      "title": "第一項測試｜沒有盡頭的走廊"
    },
    {
      "type": "text",
      "pages": [
        {
          "text": "前方出現三個選項，它們沒有像往常一樣浮在畫面中央，而是直接寫在石板路上，墨色文字隨著道路延伸，像早已成為這個空間的一部分。",
          "speaker": "",
          "effects": []
        }
      ]
    },
    {
      "type": "choice",
      "options": [
        {
          "label": "相信蘇璟辰：「這條路沒有盡頭。」",
          "next": "ch6_first_1"
        },
        {
          "label": "否定：「走廊一定有出口。」",
          "next": "ch6_first_2"
        },
        {
          "label": "「這只是你希望我相信的事。」",
          "next": "ch6_first_3"
        }
      ]
    }
  ],
  "ch6_first_1": [
    {
      "type": "text",
      "pages": [
        {
          "text": "你看向前方，道路沒有轉彎，也沒有任何能夠稱作出口的東西，你已經走了很久，卻連黎靖都無法靠近，或許蘇璟辰說的是真的，這個念頭成立的瞬間，腳下傳來劇烈震動，前後兩端的道路同時向黑暗延伸，所有轉角、門與窗戶都從記憶中消失，你甚至開始想不起自己是從哪裡進來的。",
          "speaker": "",
          "effects": [
            "shake-strong"
          ]
        },
        {
          "text": "黎靖的身影變得更加遙遠。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "「你相信了？」",
          "speaker": "黎靖",
          "effects": []
        },
        {
          "text": "「我只是覺得，他可能沒有說謊。」",
          "speaker": "你",
          "effects": []
        },
        {
          "text": "「他已經告訴你，那是謊言。」",
          "speaker": "黎靖",
          "effects": []
        },
        {
          "text": "「可是路真的沒有盡頭。」",
          "speaker": "你",
          "effects": []
        },
        {
          "text": "「因為你相信以後，它才變成這樣。」",
          "speaker": "黎靖",
          "effects": []
        },
        {
          "text": "蘇璟辰的聲音貼近耳邊。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "「現在才否定，來得及嗎？」",
          "speaker": "蘇璟辰",
          "effects": []
        },
        {
          "text": "道路完全封閉",
          "speaker": "SYSTEM",
          "effects": [
            "system"
          ]
        },
        {
          "text": "需要消耗一項證據道具尋找出口",
          "speaker": "SYSTEM",
          "effects": [
            "system"
          ]
        }
      ]
    },
    {
      "type": "effects",
      "items": [
        {
          "kind": "stat",
          "key": "belief",
          "label": "相信值",
          "amount": 3
        },
        {
          "kind": "stat",
          "key": "suControl",
          "label": "蘇璟辰控制值",
          "amount": 2
        }
      ]
    },
    {
      "type": "jump",
      "target": "ch6_escape"
    }
  ],
  "ch6_first_2": [
    {
      "type": "text",
      "pages": [
        {
          "text": "你停下腳步，眼前沒有任何證據能證明出口存在，但同樣的，也沒有證據能證明它不存在。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "「這條路一定有出口。」",
          "speaker": "你",
          "effects": []
        },
        {
          "text": "你不是對蘇璟辰說，而是對自己說，身後傳來門鎖轉動的聲音。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "喀。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "你回過頭，原本空無一物的黑暗中，多出一扇白色木門，蘇璟辰沒有立刻說話，黎靖則第一次朝你走近了一步。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "「你做了什麼？」",
          "speaker": "黎靖",
          "effects": []
        },
        {
          "text": "「相信我自己的判斷。」",
          "speaker": "你",
          "effects": []
        },
        {
          "text": "「你也在說謊？」",
          "speaker": "黎靖",
          "effects": []
        },
        {
          "text": "「可能。」",
          "speaker": "你",
          "effects": []
        },
        {
          "text": "蘇璟辰低聲笑了一下。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "「答對一半。」",
          "speaker": "蘇璟辰",
          "effects": []
        },
        {
          "text": "相信值－1",
          "speaker": "",
          "effects": [
            "system"
          ]
        },
        {
          "text": "創造出口「白色木門」",
          "speaker": "SYSTEM",
          "effects": [
            "system"
          ]
        }
      ]
    },
    {
      "type": "effects",
      "items": [
        {
          "kind": "stat",
          "key": "suUnderstanding",
          "label": "蘇璟辰理解度",
          "amount": 1
        },
        {
          "kind": "stat",
          "key": "investigation",
          "label": "調查度",
          "amount": 1
        }
      ]
    },
    {
      "type": "jump",
      "target": "ch6_white"
    }
  ],
  "ch6_first_3": [
    {
      "type": "text",
      "pages": [
        {
          "text": "你沒有接受，也沒有直接否定。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "「你先告訴我這是謊言，再讓我看見沒有出口的道路。」",
          "speaker": "你",
          "effects": []
        },
        {
          "text": "蘇璟辰沒有回應。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "「你不是在證明道路沒有盡頭。」",
          "speaker": "你",
          "effects": []
        },
        {
          "text": "「你是在讓我懷疑，自己看到的東西能不能相信。」",
          "speaker": "你",
          "effects": []
        },
        {
          "text": "石板路停止延伸，遠處的粉色身影同時轉向你。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "「那你相信什麼？」",
          "speaker": "蘇璟辰",
          "effects": []
        },
        {
          "text": "「我相信你希望我作出判斷。」",
          "speaker": "你",
          "effects": []
        },
        {
          "text": "「這算回答？」",
          "speaker": "蘇璟辰",
          "effects": []
        },
        {
          "text": "「至少不是你提供的答案。」",
          "speaker": "你",
          "effects": []
        },
        {
          "text": "短暫沉默後，黎靖身旁出現一扇門，蘇璟辰沒有替你開路，但他也沒有繼續阻止。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "相信值維持不變",
          "speaker": "SYSTEM",
          "effects": [
            "system"
          ]
        },
        {
          "text": "True Ending隱藏條件：「理解謊言的目的，而非只判斷內容」",
          "speaker": "SYSTEM",
          "effects": [
            "system"
          ]
        }
      ]
    },
    {
      "type": "effects",
      "items": [
        {
          "kind": "stat",
          "key": "suUnderstanding",
          "label": "蘇璟辰理解度",
          "amount": 3
        },
        {
          "kind": "stat",
          "key": "boundaryValue",
          "label": "界線值",
          "amount": 1
        },
        {
          "kind": "flag",
          "name": "「理解謊言的目的，而非只判斷內容"
        }
      ]
    },
    {
      "type": "jump",
      "target": "ch6_white"
    }
  ],
  "ch6_escape": [
    {
      "type": "section",
      "title": "從謊言中離開"
    },
    {
      "type": "choice",
      "options": [
        {
          "label": "使用黎靖修改後的人物設定",
          "next": "ch6_escape_1",
          "requiresItem": "黎靖修改後的人物設定"
        },
        {
          "label": "使用精神科病歷",
          "next": "ch6_escape_2"
        },
        {
          "label": "呼喚黎靖",
          "next": "ch6_escape_3"
        }
      ]
    }
  ],
  "ch6_escape_1": [
    {
      "type": "text",
      "pages": [
        {
          "text": "你取出人物設定。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "黎靖曾親手將「所屬：蘇璟辰」改成「關係：由蘇璟辰創造」，這張紙證明由蘇璟辰寫下的內容並非永遠不能修改。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "既然設定可以更改，道路也可以。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "你在紙張背面寫下：",
          "speaker": "",
          "effects": []
        },
        {
          "text": "這條路有出口。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "前方隨即出現一道門。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "消耗道具使用次數",
          "speaker": "SYSTEM",
          "effects": [
            "system"
          ]
        },
        {
          "text": "相信值－1",
          "speaker": "",
          "effects": [
            "system"
          ]
        }
      ]
    },
    {
      "type": "effects",
      "items": [
        {
          "kind": "stat",
          "key": "affection",
          "label": "黎靖好感度",
          "amount": 1
        }
      ]
    },
    {
      "type": "jump",
      "target": "ch6_white"
    }
  ],
  "ch6_escape_2": [
    {
      "type": "text",
      "pages": [
        {
          "text": "你拿出第五章取得的精神科病歷。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "醫院、醫師、病歷號碼與處方紀錄都是真實的，DID診斷卻可能是後來覆蓋上去的內容。",
          "speaker": "",
          "effects": [
            "glitch"
          ]
        },
        {
          "text": "「一份資料可以同時包含真的和假的部分。」",
          "speaker": "你",
          "effects": []
        },
        {
          "text": "你看向沒有盡頭的道路。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "「眼前這條路也一樣。」",
          "speaker": "你",
          "effects": []
        },
        {
          "text": "「它現在確實沒有盡頭。」",
          "speaker": "你",
          "effects": []
        },
        {
          "text": "「不代表它原本沒有出口。」",
          "speaker": "你",
          "effects": []
        },
        {
          "text": "病歷上的DID文字開始剝落，黑色碎屑落在地面，沿著石板排列成一道箭頭，指向左側尚未出現的門。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "黎靖朝箭頭所指的位置伸出手。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "牆面隨即裂開。",
          "speaker": "",
          "effects": [
            "shatter"
          ]
        },
        {
          "text": "DID診斷可信度下降",
          "speaker": "SYSTEM",
          "effects": [
            "system"
          ]
        },
        {
          "text": "建立出口「被遮住的側門」",
          "speaker": "SYSTEM",
          "effects": [
            "system"
          ]
        }
      ]
    },
    {
      "type": "effects",
      "items": [
        {
          "kind": "stat",
          "key": "investigation",
          "label": "調查度",
          "amount": 2
        },
        {
          "kind": "flag",
          "name": "出口「被遮住的側門"
        }
      ]
    },
    {
      "type": "jump",
      "target": "ch6_white"
    }
  ],
  "ch6_escape_3": [
    {
      "type": "text",
      "pages": [
        {
          "text": "「黎靖！」",
          "speaker": "你",
          "effects": []
        },
        {
          "text": "遠處的人形抬起頭。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "「你是這棟老宅的引路者。」",
          "speaker": "你",
          "effects": []
        },
        {
          "text": "「那是蘇璟辰寫的設定。」",
          "speaker": "黎靖",
          "effects": []
        },
        {
          "text": "「但現在使用能力的人是你。」",
          "speaker": "你",
          "effects": []
        },
        {
          "text": "黎靖伸手碰向身旁的黑暗。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "「我不知道出口在哪裡。」",
          "speaker": "黎靖",
          "effects": []
        },
        {
          "text": "「那就決定一個方向。」",
          "speaker": "你",
          "effects": []
        },
        {
          "text": "他沉默片刻，最終指向左側。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "牆面立刻裂開。",
          "speaker": "",
          "effects": [
            "shatter"
          ]
        },
        {
          "text": "即使不知道正確道路，黎靖仍以自己的選擇創造了出口。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "蘇璟辰控制值－1",
          "speaker": "",
          "effects": [
            "system"
          ]
        },
        {
          "text": "True Ending隱藏條件：「相信黎靖的選擇，而非蘇璟辰的設定」",
          "speaker": "SYSTEM",
          "effects": [
            "system"
          ]
        }
      ]
    },
    {
      "type": "effects",
      "items": [
        {
          "kind": "stat",
          "key": "affection",
          "label": "黎靖好感度",
          "amount": 3
        },
        {
          "kind": "flag",
          "name": "「相信黎靖的選擇，而非蘇璟辰的設定"
        }
      ]
    },
    {
      "type": "jump",
      "target": "ch6_white"
    }
  ],
  "ch6_white": [
    {
      "type": "section",
      "title": "白色木門"
    },
    {
      "type": "text",
      "pages": [
        {
          "text": "你與黎靖穿過出口。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "門後是一間精神科診間，牆面刷著略顯陳舊的白色，空氣裡殘留著消毒水與紙張長期存放後的氣味，診療桌旁擺著兩張椅子，其中一張椅墊留下淺淺凹痕，像不久以前還有人坐在那裡。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "牆上的醫院名稱遭白色方塊遮住，只能辨認出：",
          "speaker": "",
          "effects": []
        },
        {
          "text": "台北市立 ○○ 醫院",
          "speaker": "",
          "effects": []
        },
        {
          "text": "精神醫學科",
          "speaker": "",
          "effects": []
        },
        {
          "text": "桌面中央放著第五章出現的精神科病歷。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "若玩家先前相信DID診斷，封面會清楚寫著：",
          "speaker": "",
          "effects": []
        },
        {
          "text": "患者疑似具有解離性身分疾患。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "次人格自稱「黎靖」。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "若玩家曾檢查覆寫痕跡，診斷欄邊緣便會出現重複書寫的痕跡，底下隱約透出原始文字。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "若玩家直接詢問過蘇璟辰，封面右下角則會多出一句手寫文字：",
          "speaker": "",
          "effects": []
        },
        {
          "text": "你相信病歷，還是相信病歷裡的人？",
          "speaker": "",
          "effects": []
        },
        {
          "text": "黎靖站在桌旁，沒有立刻碰觸文件。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "「這間醫院是真的嗎？」",
          "speaker": "你",
          "effects": []
        },
        {
          "text": "「看起來是。」",
          "speaker": "黎靖",
          "effects": []
        },
        {
          "text": "「那份病歷呢？」",
          "speaker": "你",
          "effects": []
        },
        {
          "text": "「是真的。」",
          "speaker": "黎靖",
          "effects": []
        },
        {
          "text": "黎靖轉向你。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "「這麼肯定？」",
          "speaker": "你",
          "effects": []
        },
        {
          "text": "「病歷是真的。」",
          "speaker": "黎靖",
          "effects": []
        },
        {
          "text": "你看向墨色過深的診斷欄。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "「內容不一定全部是真的。」",
          "speaker": "黎靖",
          "effects": []
        },
        {
          "text": "黎靖翻開第一頁。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "病歷號碼：SJH-1995-0830",
          "speaker": "",
          "effects": []
        },
        {
          "text": "姓名：███",
          "speaker": "",
          "effects": []
        },
        {
          "text": "性別／年齡：男／24歲",
          "speaker": "",
          "effects": []
        },
        {
          "text": "出生日期：████年8月30日",
          "speaker": "",
          "effects": []
        },
        {
          "text": "身高／體重：181cm／60 kg",
          "speaker": "",
          "effects": []
        },
        {
          "text": "就診醫院：台北市立 ○○ 醫院 精神醫學科",
          "speaker": "",
          "effects": []
        },
        {
          "text": "主治醫師：林建安 醫師",
          "speaker": "",
          "effects": []
        },
        {
          "text": "初診日期：████年█月██日",
          "speaker": "",
          "effects": []
        },
        {
          "text": "最近就診：████年█月██日",
          "speaker": "",
          "effects": []
        },
        {
          "text": "姓名被遮住了。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "但出生日期、病歷號碼與其他資料都能和蘇璟辰的身分互相對應。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "「所以他真的看過精神科。」",
          "speaker": "你",
          "effects": []
        },
        {
          "text": "「嗯。」",
          "speaker": "黎靖",
          "effects": []
        },
        {
          "text": "「那DID呢？」",
          "speaker": "你",
          "effects": []
        },
        {
          "text": "你翻到主要診斷欄。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "最上方寫著：",
          "speaker": "",
          "effects": []
        },
        {
          "text": "解離性身分疾患。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "下方列出黎靖的名字、時間空白、身體控制權轉換與次人格形成原因，內容完整得近乎刻意。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "更奇怪的是，紙張背面透出另外幾行被覆蓋的文字。",
          "speaker": "",
          "effects": [
            "glitch"
          ]
        },
        {
          "text": "真正的診斷仍藏在墨水下方。",
          "speaker": "",
          "effects": []
        }
      ]
    },
    {
      "type": "jump",
      "target": "ch6_investigate_1"
    }
  ],
  "ch6_investigate_1": [
    {
      "type": "section",
      "title": "診斷室調查｜1 / 3"
    },
    {
      "type": "choice",
      "options": [
        {
          "label": "病歷號碼",
          "next": "ch6_investigation_1_1",
          "hiddenIfFlag": "ch6-investigation-1"
        },
        {
          "label": "主治醫師",
          "next": "ch6_investigation_2_1",
          "hiddenIfFlag": "ch6-investigation-2"
        },
        {
          "label": "紙張背面的凹痕",
          "next": "ch6_investigation_3_1",
          "hiddenIfFlag": "ch6-investigation-3"
        },
        {
          "label": "藥物紀錄",
          "next": "ch6_investigation_4_1",
          "hiddenIfFlag": "ch6-investigation-4"
        },
        {
          "label": "牆後的會談",
          "next": "ch6_investigation_5_1",
          "hiddenIfFlag": "ch6-investigation-5"
        }
      ]
    }
  ],
  "ch6_investigate_2": [
    {
      "type": "section",
      "title": "診斷室調查｜2 / 3"
    },
    {
      "type": "choice",
      "options": [
        {
          "label": "病歷號碼",
          "next": "ch6_investigation_1_2",
          "hiddenIfFlag": "ch6-investigation-1"
        },
        {
          "label": "主治醫師",
          "next": "ch6_investigation_2_2",
          "hiddenIfFlag": "ch6-investigation-2"
        },
        {
          "label": "紙張背面的凹痕",
          "next": "ch6_investigation_3_2",
          "hiddenIfFlag": "ch6-investigation-3"
        },
        {
          "label": "藥物紀錄",
          "next": "ch6_investigation_4_2",
          "hiddenIfFlag": "ch6-investigation-4"
        },
        {
          "label": "牆後的會談",
          "next": "ch6_investigation_5_2",
          "hiddenIfFlag": "ch6-investigation-5"
        }
      ]
    }
  ],
  "ch6_investigate_3": [
    {
      "type": "section",
      "title": "診斷室調查｜3 / 3"
    },
    {
      "type": "choice",
      "options": [
        {
          "label": "病歷號碼",
          "next": "ch6_investigation_1_3",
          "hiddenIfFlag": "ch6-investigation-1"
        },
        {
          "label": "主治醫師",
          "next": "ch6_investigation_2_3",
          "hiddenIfFlag": "ch6-investigation-2"
        },
        {
          "label": "紙張背面的凹痕",
          "next": "ch6_investigation_3_3",
          "hiddenIfFlag": "ch6-investigation-3"
        },
        {
          "label": "藥物紀錄",
          "next": "ch6_investigation_4_3",
          "hiddenIfFlag": "ch6-investigation-4"
        },
        {
          "label": "牆後的會談",
          "next": "ch6_investigation_5_3",
          "hiddenIfFlag": "ch6-investigation-5"
        }
      ]
    }
  ],
  "ch6_investigation_1_1": [
    {
      "type": "text",
      "pages": [
        {
          "text": "你抄下病歷號碼。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "SJH-1995-0830",
          "speaker": "",
          "effects": []
        },
        {
          "text": "後方數字與蘇璟辰遭遮蔽的出生日期相符。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "診療桌抽屜裡放著數張繳費收據，所有收據都使用相同病歷號碼，時間前後跨越數年，科別始終是精神醫學科。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "這不是臨時製造的假編號。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "病歷確實存在，蘇璟辰也確實曾在這裡接受長期治療。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "病歷真實性＋1",
          "speaker": "",
          "effects": [
            "system"
          ]
        },
        {
          "text": "獲得情報：蘇璟辰曾長期接受精神科治療",
          "speaker": "SYSTEM",
          "effects": [
            "system"
          ]
        }
      ]
    },
    {
      "type": "effects",
      "items": [
        {
          "kind": "stat",
          "key": "investigation",
          "label": "調查度",
          "amount": 2
        },
        {
          "kind": "info",
          "name": "蘇璟辰曾長期接受精神科治療"
        }
      ]
    },
    {
      "type": "effects",
      "items": [
        {
          "kind": "flag",
          "name": "ch6-investigation-1"
        }
      ]
    },
    {
      "type": "jump",
      "target": "ch6_investigate_2"
    }
  ],
  "ch6_investigation_1_2": [
    {
      "type": "text",
      "pages": [
        {
          "text": "你抄下病歷號碼。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "SJH-1995-0830",
          "speaker": "",
          "effects": []
        },
        {
          "text": "後方數字與蘇璟辰遭遮蔽的出生日期相符。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "診療桌抽屜裡放著數張繳費收據，所有收據都使用相同病歷號碼，時間前後跨越數年，科別始終是精神醫學科。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "這不是臨時製造的假編號。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "病歷確實存在，蘇璟辰也確實曾在這裡接受長期治療。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "病歷真實性＋1",
          "speaker": "",
          "effects": [
            "system"
          ]
        },
        {
          "text": "獲得情報：蘇璟辰曾長期接受精神科治療",
          "speaker": "SYSTEM",
          "effects": [
            "system"
          ]
        }
      ]
    },
    {
      "type": "effects",
      "items": [
        {
          "kind": "stat",
          "key": "investigation",
          "label": "調查度",
          "amount": 2
        },
        {
          "kind": "info",
          "name": "蘇璟辰曾長期接受精神科治療"
        }
      ]
    },
    {
      "type": "effects",
      "items": [
        {
          "kind": "flag",
          "name": "ch6-investigation-1"
        }
      ]
    },
    {
      "type": "jump",
      "target": "ch6_investigate_3"
    }
  ],
  "ch6_investigation_1_3": [
    {
      "type": "text",
      "pages": [
        {
          "text": "你抄下病歷號碼。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "SJH-1995-0830",
          "speaker": "",
          "effects": []
        },
        {
          "text": "後方數字與蘇璟辰遭遮蔽的出生日期相符。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "診療桌抽屜裡放著數張繳費收據，所有收據都使用相同病歷號碼，時間前後跨越數年，科別始終是精神醫學科。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "這不是臨時製造的假編號。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "病歷確實存在，蘇璟辰也確實曾在這裡接受長期治療。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "病歷真實性＋1",
          "speaker": "",
          "effects": [
            "system"
          ]
        },
        {
          "text": "獲得情報：蘇璟辰曾長期接受精神科治療",
          "speaker": "SYSTEM",
          "effects": [
            "system"
          ]
        }
      ]
    },
    {
      "type": "effects",
      "items": [
        {
          "kind": "stat",
          "key": "investigation",
          "label": "調查度",
          "amount": 2
        },
        {
          "kind": "info",
          "name": "蘇璟辰曾長期接受精神科治療"
        }
      ]
    },
    {
      "type": "effects",
      "items": [
        {
          "kind": "flag",
          "name": "ch6-investigation-1"
        }
      ]
    },
    {
      "type": "jump",
      "target": "ch6_original"
    }
  ],
  "ch6_investigation_2_1": [
    {
      "type": "text",
      "pages": [
        {
          "text": "你找到桌上的醫師名牌。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "林建安",
          "speaker": "",
          "effects": []
        },
        {
          "text": "精神醫學科",
          "speaker": "",
          "effects": []
        },
        {
          "text": "名牌背面夾著數張回診預約單，簽名與病歷上的筆跡相同，走廊門牌、處方紀錄與醫院章戳也能彼此對應。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "醫師並非虛構。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "醫院也是真實存在的場所。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "「所以病歷是真的。」",
          "speaker": "黎靖",
          "effects": []
        },
        {
          "text": "「至少它原本是真的。」",
          "speaker": "你",
          "effects": []
        },
        {
          "text": "你看向那行墨色過深的DID診斷。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "「內容被改過，不代表整份文件都是假的。」",
          "speaker": "你",
          "effects": []
        },
        {
          "text": "相信值－1",
          "speaker": "",
          "effects": [
            "system"
          ]
        },
        {
          "text": "獲得情報：真實資料也可能被謊言覆寫",
          "speaker": "SYSTEM",
          "effects": [
            "system"
          ]
        }
      ]
    },
    {
      "type": "effects",
      "items": [
        {
          "kind": "stat",
          "key": "investigation",
          "label": "調查度",
          "amount": 2
        },
        {
          "kind": "info",
          "name": "真實資料也可能被謊言覆寫"
        }
      ]
    },
    {
      "type": "effects",
      "items": [
        {
          "kind": "flag",
          "name": "ch6-investigation-2"
        }
      ]
    },
    {
      "type": "jump",
      "target": "ch6_investigate_2"
    }
  ],
  "ch6_investigation_2_2": [
    {
      "type": "text",
      "pages": [
        {
          "text": "你找到桌上的醫師名牌。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "林建安",
          "speaker": "",
          "effects": []
        },
        {
          "text": "精神醫學科",
          "speaker": "",
          "effects": []
        },
        {
          "text": "名牌背面夾著數張回診預約單，簽名與病歷上的筆跡相同，走廊門牌、處方紀錄與醫院章戳也能彼此對應。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "醫師並非虛構。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "醫院也是真實存在的場所。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "「所以病歷是真的。」",
          "speaker": "黎靖",
          "effects": []
        },
        {
          "text": "「至少它原本是真的。」",
          "speaker": "你",
          "effects": []
        },
        {
          "text": "你看向那行墨色過深的DID診斷。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "「內容被改過，不代表整份文件都是假的。」",
          "speaker": "你",
          "effects": []
        },
        {
          "text": "相信值－1",
          "speaker": "",
          "effects": [
            "system"
          ]
        },
        {
          "text": "獲得情報：真實資料也可能被謊言覆寫",
          "speaker": "SYSTEM",
          "effects": [
            "system"
          ]
        }
      ]
    },
    {
      "type": "effects",
      "items": [
        {
          "kind": "stat",
          "key": "investigation",
          "label": "調查度",
          "amount": 2
        },
        {
          "kind": "info",
          "name": "真實資料也可能被謊言覆寫"
        }
      ]
    },
    {
      "type": "effects",
      "items": [
        {
          "kind": "flag",
          "name": "ch6-investigation-2"
        }
      ]
    },
    {
      "type": "jump",
      "target": "ch6_investigate_3"
    }
  ],
  "ch6_investigation_2_3": [
    {
      "type": "text",
      "pages": [
        {
          "text": "你找到桌上的醫師名牌。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "林建安",
          "speaker": "",
          "effects": []
        },
        {
          "text": "精神醫學科",
          "speaker": "",
          "effects": []
        },
        {
          "text": "名牌背面夾著數張回診預約單，簽名與病歷上的筆跡相同，走廊門牌、處方紀錄與醫院章戳也能彼此對應。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "醫師並非虛構。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "醫院也是真實存在的場所。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "「所以病歷是真的。」",
          "speaker": "黎靖",
          "effects": []
        },
        {
          "text": "「至少它原本是真的。」",
          "speaker": "你",
          "effects": []
        },
        {
          "text": "你看向那行墨色過深的DID診斷。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "「內容被改過，不代表整份文件都是假的。」",
          "speaker": "你",
          "effects": []
        },
        {
          "text": "相信值－1",
          "speaker": "",
          "effects": [
            "system"
          ]
        },
        {
          "text": "獲得情報：真實資料也可能被謊言覆寫",
          "speaker": "SYSTEM",
          "effects": [
            "system"
          ]
        }
      ]
    },
    {
      "type": "effects",
      "items": [
        {
          "kind": "stat",
          "key": "investigation",
          "label": "調查度",
          "amount": 2
        },
        {
          "kind": "info",
          "name": "真實資料也可能被謊言覆寫"
        }
      ]
    },
    {
      "type": "effects",
      "items": [
        {
          "kind": "flag",
          "name": "ch6-investigation-2"
        }
      ]
    },
    {
      "type": "jump",
      "target": "ch6_original"
    }
  ],
  "ch6_investigation_3_1": [
    {
      "type": "text",
      "pages": [
        {
          "text": "你將病歷舉向燈光。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "DID相關內容浮在最上層，底下還壓著三組未能完全辨認的文字。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "你用鉛筆輕輕塗過紙張背面。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "第一組字逐漸顯現。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "廣泛性焦慮症",
          "speaker": "",
          "effects": []
        },
        {
          "text": "第二組：",
          "speaker": "",
          "effects": []
        },
        {
          "text": "重度憂鬱症，復發型",
          "speaker": "",
          "effects": []
        },
        {
          "text": "第三組：",
          "speaker": "",
          "effects": []
        },
        {
          "text": "失眠症",
          "speaker": "",
          "effects": []
        },
        {
          "text": "文字出現的瞬間，紙上的DID診斷開始滲出墨水，試圖再次將原有內容吞沒。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "黎靖立刻伸手壓住紙張。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "「它不想讓我們看。」",
          "speaker": "黎靖",
          "effects": []
        },
        {
          "text": "「不是病歷不想。」",
          "speaker": "黎靖",
          "effects": []
        },
        {
          "text": "你看向診間深處。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "「是改過它的人不想。」",
          "speaker": "你",
          "effects": []
        },
        {
          "text": "解鎖「原始診斷」",
          "speaker": "SYSTEM",
          "effects": [
            "system"
          ]
        },
        {
          "text": "DID診斷可信度大幅下降",
          "speaker": "SYSTEM",
          "effects": [
            "system"
          ]
        }
      ]
    },
    {
      "type": "effects",
      "items": [
        {
          "kind": "stat",
          "key": "investigation",
          "label": "調查度",
          "amount": 3
        },
        {
          "kind": "stat",
          "key": "suUnderstanding",
          "label": "蘇璟辰理解度",
          "amount": 1
        },
        {
          "kind": "flag",
          "name": "原始診斷"
        }
      ]
    },
    {
      "type": "effects",
      "items": [
        {
          "kind": "flag",
          "name": "ch6-investigation-3"
        }
      ]
    },
    {
      "type": "jump",
      "target": "ch6_investigate_2"
    }
  ],
  "ch6_investigation_3_2": [
    {
      "type": "text",
      "pages": [
        {
          "text": "你將病歷舉向燈光。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "DID相關內容浮在最上層，底下還壓著三組未能完全辨認的文字。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "你用鉛筆輕輕塗過紙張背面。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "第一組字逐漸顯現。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "廣泛性焦慮症",
          "speaker": "",
          "effects": []
        },
        {
          "text": "第二組：",
          "speaker": "",
          "effects": []
        },
        {
          "text": "重度憂鬱症，復發型",
          "speaker": "",
          "effects": []
        },
        {
          "text": "第三組：",
          "speaker": "",
          "effects": []
        },
        {
          "text": "失眠症",
          "speaker": "",
          "effects": []
        },
        {
          "text": "文字出現的瞬間，紙上的DID診斷開始滲出墨水，試圖再次將原有內容吞沒。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "黎靖立刻伸手壓住紙張。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "「它不想讓我們看。」",
          "speaker": "黎靖",
          "effects": []
        },
        {
          "text": "「不是病歷不想。」",
          "speaker": "黎靖",
          "effects": []
        },
        {
          "text": "你看向診間深處。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "「是改過它的人不想。」",
          "speaker": "你",
          "effects": []
        },
        {
          "text": "解鎖「原始診斷」",
          "speaker": "SYSTEM",
          "effects": [
            "system"
          ]
        },
        {
          "text": "DID診斷可信度大幅下降",
          "speaker": "SYSTEM",
          "effects": [
            "system"
          ]
        }
      ]
    },
    {
      "type": "effects",
      "items": [
        {
          "kind": "stat",
          "key": "investigation",
          "label": "調查度",
          "amount": 3
        },
        {
          "kind": "stat",
          "key": "suUnderstanding",
          "label": "蘇璟辰理解度",
          "amount": 1
        },
        {
          "kind": "flag",
          "name": "原始診斷"
        }
      ]
    },
    {
      "type": "effects",
      "items": [
        {
          "kind": "flag",
          "name": "ch6-investigation-3"
        }
      ]
    },
    {
      "type": "jump",
      "target": "ch6_investigate_3"
    }
  ],
  "ch6_investigation_3_3": [
    {
      "type": "text",
      "pages": [
        {
          "text": "你將病歷舉向燈光。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "DID相關內容浮在最上層，底下還壓著三組未能完全辨認的文字。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "你用鉛筆輕輕塗過紙張背面。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "第一組字逐漸顯現。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "廣泛性焦慮症",
          "speaker": "",
          "effects": []
        },
        {
          "text": "第二組：",
          "speaker": "",
          "effects": []
        },
        {
          "text": "重度憂鬱症，復發型",
          "speaker": "",
          "effects": []
        },
        {
          "text": "第三組：",
          "speaker": "",
          "effects": []
        },
        {
          "text": "失眠症",
          "speaker": "",
          "effects": []
        },
        {
          "text": "文字出現的瞬間，紙上的DID診斷開始滲出墨水，試圖再次將原有內容吞沒。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "黎靖立刻伸手壓住紙張。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "「它不想讓我們看。」",
          "speaker": "黎靖",
          "effects": []
        },
        {
          "text": "「不是病歷不想。」",
          "speaker": "黎靖",
          "effects": []
        },
        {
          "text": "你看向診間深處。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "「是改過它的人不想。」",
          "speaker": "你",
          "effects": []
        },
        {
          "text": "解鎖「原始診斷」",
          "speaker": "SYSTEM",
          "effects": [
            "system"
          ]
        },
        {
          "text": "DID診斷可信度大幅下降",
          "speaker": "SYSTEM",
          "effects": [
            "system"
          ]
        }
      ]
    },
    {
      "type": "effects",
      "items": [
        {
          "kind": "stat",
          "key": "investigation",
          "label": "調查度",
          "amount": 3
        },
        {
          "kind": "stat",
          "key": "suUnderstanding",
          "label": "蘇璟辰理解度",
          "amount": 1
        },
        {
          "kind": "flag",
          "name": "原始診斷"
        }
      ]
    },
    {
      "type": "effects",
      "items": [
        {
          "kind": "flag",
          "name": "ch6-investigation-3"
        }
      ]
    },
    {
      "type": "jump",
      "target": "ch6_original"
    }
  ],
  "ch6_investigation_4_1": [
    {
      "type": "text",
      "pages": [
        {
          "text": "診療桌最下方的抽屜裡放著三張處方箋。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "Sertraline 50 mg／每日一次",
          "speaker": "",
          "effects": []
        },
        {
          "text": "Lorazepam 1 mg／視需要服用",
          "speaker": "",
          "effects": []
        },
        {
          "text": "Zopiclone 7.5 mg／睡前一次",
          "speaker": "",
          "effects": []
        },
        {
          "text": "藥袋上的病歷號碼與診斷資料相同，領藥時間也分布於不同月份。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "你想起黑貓記憶裡被咬破的藥袋。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "「黎靖，那不是貓零食。」",
          "speaker": "蘇璟辰",
          "effects": []
        },
        {
          "text": "那些藥並不是為了某個不存在的次人格，而是蘇璟辰用來治療憂鬱、焦慮與長期失眠的藥物。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "黎靖看著處方。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "「黑貓真的咬過這些？」",
          "speaker": "黎靖",
          "effects": []
        },
        {
          "text": "「看來是。」",
          "speaker": "你",
          "effects": []
        },
        {
          "text": "「難怪他那麼生氣。」",
          "speaker": "黎靖",
          "effects": []
        },
        {
          "text": "「他看起來沒有很生氣。」",
          "speaker": "你",
          "effects": []
        },
        {
          "text": "「他說要讓我當反派。」",
          "speaker": "黎靖",
          "effects": []
        },
        {
          "text": "黎靖顯然仍然記得。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "獲得道具「蘇璟辰的處方紀錄」",
          "speaker": "SYSTEM",
          "effects": [
            "system"
          ]
        },
        {
          "text": "證實工作室中的藥袋並非虛假道具",
          "speaker": "SYSTEM",
          "effects": [
            "system"
          ]
        }
      ]
    },
    {
      "type": "effects",
      "items": [
        {
          "kind": "stat",
          "key": "suUnderstanding",
          "label": "蘇璟辰理解度",
          "amount": 2
        },
        {
          "kind": "stat",
          "key": "affection",
          "label": "黎靖好感度",
          "amount": 1
        },
        {
          "kind": "item",
          "name": "蘇璟辰的處方紀錄"
        },
        {
          "kind": "flag",
          "name": "工作室中的藥袋並非虛假道具"
        }
      ]
    },
    {
      "type": "effects",
      "items": [
        {
          "kind": "flag",
          "name": "ch6-investigation-4"
        }
      ]
    },
    {
      "type": "jump",
      "target": "ch6_investigate_2"
    }
  ],
  "ch6_investigation_4_2": [
    {
      "type": "text",
      "pages": [
        {
          "text": "診療桌最下方的抽屜裡放著三張處方箋。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "Sertraline 50 mg／每日一次",
          "speaker": "",
          "effects": []
        },
        {
          "text": "Lorazepam 1 mg／視需要服用",
          "speaker": "",
          "effects": []
        },
        {
          "text": "Zopiclone 7.5 mg／睡前一次",
          "speaker": "",
          "effects": []
        },
        {
          "text": "藥袋上的病歷號碼與診斷資料相同，領藥時間也分布於不同月份。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "你想起黑貓記憶裡被咬破的藥袋。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "「黎靖，那不是貓零食。」",
          "speaker": "蘇璟辰",
          "effects": []
        },
        {
          "text": "那些藥並不是為了某個不存在的次人格，而是蘇璟辰用來治療憂鬱、焦慮與長期失眠的藥物。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "黎靖看著處方。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "「黑貓真的咬過這些？」",
          "speaker": "黎靖",
          "effects": []
        },
        {
          "text": "「看來是。」",
          "speaker": "你",
          "effects": []
        },
        {
          "text": "「難怪他那麼生氣。」",
          "speaker": "黎靖",
          "effects": []
        },
        {
          "text": "「他看起來沒有很生氣。」",
          "speaker": "你",
          "effects": []
        },
        {
          "text": "「他說要讓我當反派。」",
          "speaker": "黎靖",
          "effects": []
        },
        {
          "text": "黎靖顯然仍然記得。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "獲得道具「蘇璟辰的處方紀錄」",
          "speaker": "SYSTEM",
          "effects": [
            "system"
          ]
        },
        {
          "text": "證實工作室中的藥袋並非虛假道具",
          "speaker": "SYSTEM",
          "effects": [
            "system"
          ]
        }
      ]
    },
    {
      "type": "effects",
      "items": [
        {
          "kind": "stat",
          "key": "suUnderstanding",
          "label": "蘇璟辰理解度",
          "amount": 2
        },
        {
          "kind": "stat",
          "key": "affection",
          "label": "黎靖好感度",
          "amount": 1
        },
        {
          "kind": "item",
          "name": "蘇璟辰的處方紀錄"
        },
        {
          "kind": "flag",
          "name": "工作室中的藥袋並非虛假道具"
        }
      ]
    },
    {
      "type": "effects",
      "items": [
        {
          "kind": "flag",
          "name": "ch6-investigation-4"
        }
      ]
    },
    {
      "type": "jump",
      "target": "ch6_investigate_3"
    }
  ],
  "ch6_investigation_4_3": [
    {
      "type": "text",
      "pages": [
        {
          "text": "診療桌最下方的抽屜裡放著三張處方箋。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "Sertraline 50 mg／每日一次",
          "speaker": "",
          "effects": []
        },
        {
          "text": "Lorazepam 1 mg／視需要服用",
          "speaker": "",
          "effects": []
        },
        {
          "text": "Zopiclone 7.5 mg／睡前一次",
          "speaker": "",
          "effects": []
        },
        {
          "text": "藥袋上的病歷號碼與診斷資料相同，領藥時間也分布於不同月份。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "你想起黑貓記憶裡被咬破的藥袋。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "「黎靖，那不是貓零食。」",
          "speaker": "蘇璟辰",
          "effects": []
        },
        {
          "text": "那些藥並不是為了某個不存在的次人格，而是蘇璟辰用來治療憂鬱、焦慮與長期失眠的藥物。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "黎靖看著處方。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "「黑貓真的咬過這些？」",
          "speaker": "黎靖",
          "effects": []
        },
        {
          "text": "「看來是。」",
          "speaker": "你",
          "effects": []
        },
        {
          "text": "「難怪他那麼生氣。」",
          "speaker": "黎靖",
          "effects": []
        },
        {
          "text": "「他看起來沒有很生氣。」",
          "speaker": "你",
          "effects": []
        },
        {
          "text": "「他說要讓我當反派。」",
          "speaker": "黎靖",
          "effects": []
        },
        {
          "text": "黎靖顯然仍然記得。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "獲得道具「蘇璟辰的處方紀錄」",
          "speaker": "SYSTEM",
          "effects": [
            "system"
          ]
        },
        {
          "text": "證實工作室中的藥袋並非虛假道具",
          "speaker": "SYSTEM",
          "effects": [
            "system"
          ]
        }
      ]
    },
    {
      "type": "effects",
      "items": [
        {
          "kind": "stat",
          "key": "suUnderstanding",
          "label": "蘇璟辰理解度",
          "amount": 2
        },
        {
          "kind": "stat",
          "key": "affection",
          "label": "黎靖好感度",
          "amount": 1
        },
        {
          "kind": "item",
          "name": "蘇璟辰的處方紀錄"
        },
        {
          "kind": "flag",
          "name": "工作室中的藥袋並非虛假道具"
        }
      ]
    },
    {
      "type": "effects",
      "items": [
        {
          "kind": "flag",
          "name": "ch6-investigation-4"
        }
      ]
    },
    {
      "type": "jump",
      "target": "ch6_original"
    }
  ],
  "ch6_investigation_5_1": [
    {
      "type": "text",
      "pages": [
        {
          "text": "診間牆後傳來醫師與患者的聲音。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "「最近還是只能睡三、四個小時？」",
          "speaker": "醫師",
          "effects": []
        },
        {
          "text": "「差不多。」",
          "speaker": "蘇璟辰",
          "effects": []
        },
        {
          "text": "「惡夢呢？」",
          "speaker": "醫師",
          "effects": []
        },
        {
          "text": "「有。」",
          "speaker": "蘇璟辰",
          "effects": []
        },
        {
          "text": "「工作量有減少嗎？」",
          "speaker": "醫師",
          "effects": []
        },
        {
          "text": "短暫沉默後，蘇璟辰回答：",
          "speaker": "",
          "effects": []
        },
        {
          "text": "「截稿日不會因為我睡不著就消失。」",
          "speaker": "蘇璟辰",
          "effects": []
        },
        {
          "text": "「胸悶和呼吸困難還會出現？」",
          "speaker": "醫師",
          "effects": []
        },
        {
          "text": "「趕稿的時候比較嚴重。」",
          "speaker": "蘇璟辰",
          "effects": []
        },
        {
          "text": "「上次提到的念頭呢？」",
          "speaker": "醫師",
          "effects": []
        },
        {
          "text": "牆後安靜了很久。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "「還在。」",
          "speaker": "蘇璟辰",
          "effects": []
        },
        {
          "text": "醫師的語氣放得更慢。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "「如果變得更強烈，或者你覺得自己可能傷害自己，要立刻聯絡醫院，也要告訴陪你來的人。」",
          "speaker": "醫師",
          "effects": []
        },
        {
          "text": "「他不是家屬。」",
          "speaker": "蘇璟辰",
          "effects": []
        },
        {
          "text": "「編輯也可以是支持者。」",
          "speaker": "醫師",
          "effects": []
        },
        {
          "text": "蘇璟辰沒有回答。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "這段談話裡沒有黎靖、第二人格或身分轉換。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "只有一名長期失眠、焦慮，並反覆陷入憂鬱狀態的年輕患者。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "獲得情報：蘇璟辰生前的編輯曾陪同他就醫",
          "speaker": "SYSTEM",
          "effects": [
            "system"
          ]
        },
        {
          "text": "獲得情報：蘇璟辰曾接受自傷風險追蹤",
          "speaker": "SYSTEM",
          "effects": [
            "system"
          ]
        }
      ]
    },
    {
      "type": "effects",
      "items": [
        {
          "kind": "stat",
          "key": "suUnderstanding",
          "label": "蘇璟辰理解度",
          "amount": 3
        },
        {
          "kind": "stat",
          "key": "investigation",
          "label": "調查度",
          "amount": 1
        },
        {
          "kind": "info",
          "name": "蘇璟辰生前的編輯曾陪同他就醫"
        },
        {
          "kind": "info",
          "name": "蘇璟辰曾接受自傷風險追蹤"
        }
      ]
    },
    {
      "type": "effects",
      "items": [
        {
          "kind": "flag",
          "name": "ch6-investigation-5"
        }
      ]
    },
    {
      "type": "jump",
      "target": "ch6_investigate_2"
    }
  ],
  "ch6_investigation_5_2": [
    {
      "type": "text",
      "pages": [
        {
          "text": "診間牆後傳來醫師與患者的聲音。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "「最近還是只能睡三、四個小時？」",
          "speaker": "醫師",
          "effects": []
        },
        {
          "text": "「差不多。」",
          "speaker": "蘇璟辰",
          "effects": []
        },
        {
          "text": "「惡夢呢？」",
          "speaker": "醫師",
          "effects": []
        },
        {
          "text": "「有。」",
          "speaker": "蘇璟辰",
          "effects": []
        },
        {
          "text": "「工作量有減少嗎？」",
          "speaker": "醫師",
          "effects": []
        },
        {
          "text": "短暫沉默後，蘇璟辰回答：",
          "speaker": "",
          "effects": []
        },
        {
          "text": "「截稿日不會因為我睡不著就消失。」",
          "speaker": "蘇璟辰",
          "effects": []
        },
        {
          "text": "「胸悶和呼吸困難還會出現？」",
          "speaker": "醫師",
          "effects": []
        },
        {
          "text": "「趕稿的時候比較嚴重。」",
          "speaker": "蘇璟辰",
          "effects": []
        },
        {
          "text": "「上次提到的念頭呢？」",
          "speaker": "醫師",
          "effects": []
        },
        {
          "text": "牆後安靜了很久。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "「還在。」",
          "speaker": "蘇璟辰",
          "effects": []
        },
        {
          "text": "醫師的語氣放得更慢。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "「如果變得更強烈，或者你覺得自己可能傷害自己，要立刻聯絡醫院，也要告訴陪你來的人。」",
          "speaker": "醫師",
          "effects": []
        },
        {
          "text": "「他不是家屬。」",
          "speaker": "蘇璟辰",
          "effects": []
        },
        {
          "text": "「編輯也可以是支持者。」",
          "speaker": "醫師",
          "effects": []
        },
        {
          "text": "蘇璟辰沒有回答。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "這段談話裡沒有黎靖、第二人格或身分轉換。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "只有一名長期失眠、焦慮，並反覆陷入憂鬱狀態的年輕患者。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "獲得情報：蘇璟辰生前的編輯曾陪同他就醫",
          "speaker": "SYSTEM",
          "effects": [
            "system"
          ]
        },
        {
          "text": "獲得情報：蘇璟辰曾接受自傷風險追蹤",
          "speaker": "SYSTEM",
          "effects": [
            "system"
          ]
        }
      ]
    },
    {
      "type": "effects",
      "items": [
        {
          "kind": "stat",
          "key": "suUnderstanding",
          "label": "蘇璟辰理解度",
          "amount": 3
        },
        {
          "kind": "stat",
          "key": "investigation",
          "label": "調查度",
          "amount": 1
        },
        {
          "kind": "info",
          "name": "蘇璟辰生前的編輯曾陪同他就醫"
        },
        {
          "kind": "info",
          "name": "蘇璟辰曾接受自傷風險追蹤"
        }
      ]
    },
    {
      "type": "effects",
      "items": [
        {
          "kind": "flag",
          "name": "ch6-investigation-5"
        }
      ]
    },
    {
      "type": "jump",
      "target": "ch6_investigate_3"
    }
  ],
  "ch6_investigation_5_3": [
    {
      "type": "text",
      "pages": [
        {
          "text": "診間牆後傳來醫師與患者的聲音。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "「最近還是只能睡三、四個小時？」",
          "speaker": "醫師",
          "effects": []
        },
        {
          "text": "「差不多。」",
          "speaker": "蘇璟辰",
          "effects": []
        },
        {
          "text": "「惡夢呢？」",
          "speaker": "醫師",
          "effects": []
        },
        {
          "text": "「有。」",
          "speaker": "蘇璟辰",
          "effects": []
        },
        {
          "text": "「工作量有減少嗎？」",
          "speaker": "醫師",
          "effects": []
        },
        {
          "text": "短暫沉默後，蘇璟辰回答：",
          "speaker": "",
          "effects": []
        },
        {
          "text": "「截稿日不會因為我睡不著就消失。」",
          "speaker": "蘇璟辰",
          "effects": []
        },
        {
          "text": "「胸悶和呼吸困難還會出現？」",
          "speaker": "醫師",
          "effects": []
        },
        {
          "text": "「趕稿的時候比較嚴重。」",
          "speaker": "蘇璟辰",
          "effects": []
        },
        {
          "text": "「上次提到的念頭呢？」",
          "speaker": "醫師",
          "effects": []
        },
        {
          "text": "牆後安靜了很久。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "「還在。」",
          "speaker": "蘇璟辰",
          "effects": []
        },
        {
          "text": "醫師的語氣放得更慢。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "「如果變得更強烈，或者你覺得自己可能傷害自己，要立刻聯絡醫院，也要告訴陪你來的人。」",
          "speaker": "醫師",
          "effects": []
        },
        {
          "text": "「他不是家屬。」",
          "speaker": "蘇璟辰",
          "effects": []
        },
        {
          "text": "「編輯也可以是支持者。」",
          "speaker": "醫師",
          "effects": []
        },
        {
          "text": "蘇璟辰沒有回答。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "這段談話裡沒有黎靖、第二人格或身分轉換。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "只有一名長期失眠、焦慮，並反覆陷入憂鬱狀態的年輕患者。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "獲得情報：蘇璟辰生前的編輯曾陪同他就醫",
          "speaker": "SYSTEM",
          "effects": [
            "system"
          ]
        },
        {
          "text": "獲得情報：蘇璟辰曾接受自傷風險追蹤",
          "speaker": "SYSTEM",
          "effects": [
            "system"
          ]
        }
      ]
    },
    {
      "type": "effects",
      "items": [
        {
          "kind": "stat",
          "key": "suUnderstanding",
          "label": "蘇璟辰理解度",
          "amount": 3
        },
        {
          "kind": "stat",
          "key": "investigation",
          "label": "調查度",
          "amount": 1
        },
        {
          "kind": "info",
          "name": "蘇璟辰生前的編輯曾陪同他就醫"
        },
        {
          "kind": "info",
          "name": "蘇璟辰曾接受自傷風險追蹤"
        }
      ]
    },
    {
      "type": "effects",
      "items": [
        {
          "kind": "flag",
          "name": "ch6-investigation-5"
        }
      ]
    },
    {
      "type": "jump",
      "target": "ch6_original"
    }
  ],
  "ch6_original": [
    {
      "type": "section",
      "title": "原始診斷"
    },
    {
      "type": "text",
      "pages": [
        {
          "text": "若玩家取得兩項以上相關證據，便可嘗試移除覆蓋在病歷上的墨水。",
          "speaker": "",
          "effects": [
            "glitch"
          ]
        },
        {
          "text": "你將病歷平放在診療桌上。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "DID診斷的文字仍在蠕動。",
          "speaker": "",
          "effects": [
            "glitch"
          ]
        },
        {
          "text": "黎靖是蘇璟辰的另一人格。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "時間空白源於人格轉換。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "黑貓記憶是患者為合理化次人格而創造的敘事。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "每一句話，都在試圖解釋你們已經看見的事。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "黎靖站在桌邊。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "「如果下面的內容也對我不利呢？」",
          "speaker": "黎靖",
          "effects": []
        },
        {
          "text": "「那也應該先看它原本寫了什麼。」",
          "speaker": "你",
          "effects": []
        },
        {
          "text": "「你不怕自己又相信？」",
          "speaker": "黎靖",
          "effects": []
        },
        {
          "text": "「相信病歷存在，不等於相信所有寫在病歷上的解釋。」",
          "speaker": "你",
          "effects": []
        },
        {
          "text": "你將手按在紙面。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "黎靖也伸出手，壓住另一端。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "墨水迅速沿著你們的手指爬升，蘇璟辰的聲音從診間四周傳來。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "「沒有必要。」",
          "speaker": "蘇璟辰",
          "effects": []
        },
        {
          "text": "「為什麼？」",
          "speaker": "你",
          "effects": []
        },
        {
          "text": "「你們已經知道黎靖不是我的人格。」",
          "speaker": "蘇璟辰",
          "effects": []
        },
        {
          "text": "「所以更應該把真正的內容留下。」",
          "speaker": "你",
          "effects": []
        },
        {
          "text": "「那些事和他無關。」",
          "speaker": "蘇璟辰",
          "effects": []
        },
        {
          "text": "黎靖抬起頭。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "「和我無關，不代表你可以拿來說謊。」",
          "speaker": "黎靖",
          "effects": []
        },
        {
          "text": "墨水停頓了一瞬。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "你趁機掀起最上方那層薄得近乎透明的紙膜，DID診斷連同虛構的會談紀錄一起被剝離，底下逐漸露出原始病歷。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "病歷號碼：SJH-1995-0830",
          "speaker": "",
          "effects": []
        },
        {
          "text": "姓名：███",
          "speaker": "",
          "effects": []
        },
        {
          "text": "性別／年齡：男／24歲",
          "speaker": "",
          "effects": []
        },
        {
          "text": "出生日期：████年8月30日",
          "speaker": "",
          "effects": []
        },
        {
          "text": "身高／體重：181cm／60 kg",
          "speaker": "",
          "effects": []
        },
        {
          "text": "就診醫院：台北市立 ○○ 醫院 精神醫學科",
          "speaker": "",
          "effects": []
        },
        {
          "text": "主治醫師：林建安 醫師",
          "speaker": "",
          "effects": []
        },
        {
          "text": "初診日期：████年█月██日",
          "speaker": "",
          "effects": []
        },
        {
          "text": "最近就診：████年█月██日",
          "speaker": "",
          "effects": []
        },
        {
          "text": "主要診斷",
          "speaker": "",
          "effects": []
        },
        {
          "text": "1. 廣泛性焦慮症（GAD）",
          "speaker": "",
          "effects": []
        },
        {
          "text": "長期呈現過度擔憂與失眠，並出現心悸、胸悶、呼吸不順等焦慮生理症狀。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "對工作期限與失敗的恐懼加劇病情。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "2. 重度憂鬱症（MDD，復發型）",
          "speaker": "",
          "effects": []
        },
        {
          "text": "間歇性出現強烈無望感與自責，情緒低落持續時間可長達數週。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "多次向醫師坦言「覺得自己不應該活著」之類的想法，需嚴密追蹤。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "3. 失眠症（與焦慮、憂鬱相關）",
          "speaker": "",
          "effects": []
        },
        {
          "text": "長期睡眠品質不佳，平均睡眠時間僅三至四小時。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "常伴隨惡夢或淺眠，容易驚醒。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "過去病史",
          "speaker": "",
          "effects": []
        },
        {
          "text": "████年6月：因長期工作過勞與焦慮引發胸悶、呼吸困難，急診檢查後未發現心臟疾病，建議轉介精神科。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "████年4月：確診重度憂鬱症與焦慮症，開始接受藥物治療與認知行為治療（CBT）。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "████年8月：曾出現自殘行為，傷處集中於頸部與手腕。家屬不知情，由編輯陪同就醫。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "藥物治療",
          "speaker": "",
          "effects": []
        },
        {
          "text": "抗憂鬱藥：Sertraline 50 mg／每日一次",
          "speaker": "",
          "effects": []
        },
        {
          "text": "抗焦慮藥：Lorazepam 1 mg／視需要服用",
          "speaker": "",
          "effects": []
        },
        {
          "text": "助眠藥物：Zopiclone 7.5 mg／睡前一次",
          "speaker": "",
          "effects": []
        },
        {
          "text": "建議追蹤日期：████年4月5日",
          "speaker": "",
          "effects": []
        },
        {
          "text": "醫師簽名：林建安",
          "speaker": "",
          "effects": []
        },
        {
          "text": "病歷末端沒有DID，也沒有黎靖的名字。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "只有一名二十四歲的患者，在過勞、焦慮、反覆憂鬱與長期失眠中持續工作，並試著接受治療。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "黎靖看著病歷上遭遮蔽的姓名。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "「是蘇璟辰。」",
          "speaker": "你",
          "effects": []
        },
        {
          "text": "「嗯。」",
          "speaker": "黎靖",
          "effects": []
        },
        {
          "text": "「他為什麼把名字遮起來？」",
          "speaker": "你",
          "effects": []
        },
        {
          "text": "蘇璟辰沒有回答。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "原本覆蓋診斷欄的墨水，開始沿著桌面緩慢退回黑暗。",
          "speaker": "",
          "effects": [
            "glitch"
          ]
        }
      ]
    },
    {
      "type": "jump",
      "target": "ch6_second_test"
    }
  ],
  "ch6_second_test": [
    {
      "type": "section",
      "title": "第二項測試｜病歷能證明什麼"
    },
    {
      "type": "text",
      "pages": [
        {
          "text": "診療室的門自行反鎖。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "天花板喇叭傳出蘇璟辰的聲音。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "「現在你們有真正的病歷了。」",
          "speaker": "蘇璟辰",
          "effects": []
        },
        {
          "text": "桌面浮現三張結論卡。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "第一張寫著：",
          "speaker": "",
          "effects": []
        },
        {
          "text": "蘇璟辰患有精神疾病，因此他的記憶與證詞不可信。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "第二張寫著：",
          "speaker": "",
          "effects": []
        },
        {
          "text": "蘇璟辰曾有自殘行為，因此山區死亡不是意外。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "第三張寫著：",
          "speaker": "",
          "effects": []
        },
        {
          "text": "病歷只能證明他曾經生病並接受治療，不能替其他事件下結論。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "「選一個。」",
          "speaker": "黎靖",
          "effects": []
        },
        {
          "text": "黎靖看向你。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "「他又在測試相信。」",
          "speaker": "黎靖",
          "effects": []
        },
        {
          "text": "「這次不只是真假。」",
          "speaker": "黎靖",
          "effects": []
        },
        {
          "text": "你望著三張卡片。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "「還有我們會怎麼解讀真的東西。」",
          "speaker": "你",
          "effects": []
        }
      ]
    },
    {
      "type": "choice",
      "options": [
        {
          "label": "「他的記憶可能都不可信。」",
          "next": "ch6_second_1"
        },
        {
          "label": "「他的死亡可能不是意外。」",
          "next": "ch6_second_2"
        },
        {
          "label": "「病歷不能替其他事件下結論。」",
          "next": "ch6_second_3"
        }
      ]
    }
  ],
  "ch6_second_1": [
    {
      "type": "text",
      "pages": [
        {
          "text": "你選擇第一張卡片。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "病歷上的「重度憂鬱症」迅速擴散，覆蓋所有記憶道具，育幼院、學校、黑貓與工作室的畫面同時產生雜訊，彷彿只要蘇璟辰曾接受精神科治療，他留下的一切便都可以被視為症狀。",
          "speaker": "",
          "effects": [
            "glitch"
          ]
        },
        {
          "text": "黎靖抓住其中一張日常稿。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "「這和病歷沒有關係。」",
          "speaker": "黎靖",
          "effects": []
        },
        {
          "text": "「可是他確實可能受到病情影響。」",
          "speaker": "你",
          "effects": []
        },
        {
          "text": "「受到影響，不代表所有事都是假的。」",
          "speaker": "黎靖",
          "effects": []
        },
        {
          "text": "蘇璟辰沒有反駁你。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "正因為你已經替他完成了最方便的否定。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "蘇璟辰理解度－2",
          "speaker": "",
          "effects": [
            "system"
          ]
        },
        {
          "text": "調查度－1",
          "speaker": "",
          "effects": [
            "system"
          ]
        },
        {
          "text": "蘇璟辰過往證物可信度暫時下降",
          "speaker": "SYSTEM",
          "effects": [
            "system"
          ]
        }
      ]
    },
    {
      "type": "effects",
      "items": [
        {
          "kind": "stat",
          "key": "belief",
          "label": "相信值",
          "amount": 2
        }
      ]
    },
    {
      "type": "jump",
      "target": "ch6_lie_choice"
    }
  ],
  "ch6_second_2": [
    {
      "type": "text",
      "pages": [
        {
          "text": "你看向病歷裡關於自殘與死亡念頭的記錄，又想起山區墜落、頸部重創與大量失血。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "兩者似乎能夠連成一條合理的因果。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "你選擇第二張卡片。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "死亡新聞上的「失足墜落」開始變淡，取而代之的是尚未完成的新標題。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "漫畫家疑似於山區——",
          "speaker": "",
          "effects": []
        },
        {
          "text": "黎靖立刻按住報紙。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "「病歷沒有寫他想在山裡死亡。」",
          "speaker": "黎靖",
          "effects": []
        },
        {
          "text": "「可是他曾經覺得自己不應該活著。」",
          "speaker": "你",
          "effects": []
        },
        {
          "text": "「那也不能證明十月十二日發生了什麼。」",
          "speaker": "黎靖",
          "effects": []
        },
        {
          "text": "你的手停住。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "蘇璟辰的聲音從喇叭裡傳來。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "「繼續啊。」",
          "speaker": "蘇璟辰",
          "effects": []
        },
        {
          "text": "「只差一點，新的死因就能成立。」",
          "speaker": "蘇璟辰",
          "effects": []
        },
        {
          "text": "調查度－2",
          "speaker": "",
          "effects": [
            "system"
          ]
        },
        {
          "text": "蘇璟辰死亡真相遭到污染",
          "speaker": "SYSTEM",
          "effects": [
            "system"
          ]
        },
        {
          "text": "開啟錯誤推論：「山區墜落可能並非意外」",
          "speaker": "SYSTEM",
          "effects": [
            "system"
          ]
        }
      ]
    },
    {
      "type": "effects",
      "items": [
        {
          "kind": "stat",
          "key": "belief",
          "label": "相信值",
          "amount": 3
        },
        {
          "kind": "flag",
          "name": "錯誤推論：「山區墜落可能並非意外"
        }
      ]
    },
    {
      "type": "jump",
      "target": "ch6_lie_choice"
    }
  ],
  "ch6_second_3": [
    {
      "type": "text",
      "pages": [
        {
          "text": "你選擇第三張卡片。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "「病歷能證明蘇璟辰曾經罹患焦慮症、憂鬱症與失眠，也曾有需要追蹤的自殘行為。」",
          "speaker": "你",
          "effects": []
        },
        {
          "text": "「還有呢？」",
          "speaker": "蘇璟辰"
        },
        {
          "text": "「沒有了。」",
          "speaker": "你",
          "effects": []
        },
        {
          "text": "「你不想猜他的死亡？」",
          "speaker": "蘇璟辰",
          "effects": []
        },
        {
          "text": "「死亡要看死亡現場的證據。」",
          "speaker": "你",
          "effects": []
        },
        {
          "text": "「不想懷疑他的記憶？」",
          "speaker": "蘇璟辰",
          "effects": []
        },
        {
          "text": "「記憶要逐項比對。」",
          "speaker": "你",
          "effects": []
        },
        {
          "text": "「那這份病歷有什麼用？」",
          "speaker": "蘇璟辰",
          "effects": []
        },
        {
          "text": "你看向原始診斷。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "「讓我們知道他當時正在經歷什麼。」",
          "speaker": "你",
          "effects": []
        },
        {
          "text": "「不是讓我們拿疾病解釋他的一切。」",
          "speaker": "你",
          "effects": []
        },
        {
          "text": "診療室陷入沉默。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "黎靖將病歷從三張結論卡中抽出。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "「這次我同意。」",
          "speaker": "黎靖",
          "effects": []
        },
        {
          "text": "相信值－1",
          "speaker": "",
          "effects": [
            "system"
          ]
        },
        {
          "text": "True Ending必要條件：「不以精神疾病取代人物與證據」",
          "speaker": "SYSTEM",
          "effects": [
            "system"
          ]
        },
        {
          "text": "保留山區死亡為意外事件",
          "speaker": "SYSTEM",
          "effects": [
            "system"
          ]
        }
      ]
    },
    {
      "type": "effects",
      "items": [
        {
          "kind": "stat",
          "key": "suUnderstanding",
          "label": "蘇璟辰理解度",
          "amount": 3
        },
        {
          "kind": "stat",
          "key": "investigation",
          "label": "調查度",
          "amount": 2
        },
        {
          "kind": "flag",
          "name": "「不以精神疾病取代人物與證據"
        }
      ]
    },
    {
      "type": "jump",
      "target": "ch6_collapse"
    }
  ],
  "ch6_lie_choice": [
    {
      "type": "section",
      "title": "謊言成立的瞬間"
    },
    {
      "type": "text",
      "pages": [
        {
          "text": "若玩家選擇前兩項，病歷便會開始向玩家相信的方向改寫現實。",
          "speaker": "",
          "effects": [
            "glitch"
          ]
        },
        {
          "text": "選擇第一項時，蘇璟辰留下的證據會逐漸被標記為「患者妄想內容」。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "選擇第二項時，山區死亡新聞會由「意外墜落」逐漸改寫為「主動行為」。",
          "speaker": "",
          "effects": [
            "glitch"
          ]
        }
      ]
    },
    {
      "type": "choice",
      "options": [
        {
          "label": "接受病歷推論",
          "next": "ch6_accept_inference"
        },
        {
          "label": "病歷沒有這樣寫",
          "next": "ch6_reject_inference"
        }
      ]
    }
  ],
  "ch6_accept_inference": [
    {
      "type": "text",
      "pages": [
        {
          "text": "錯誤結論將保留至後續死亡記憶，並改變部分選項文字。",
          "speaker": "",
          "effects": []
        }
      ]
    },
    {
      "type": "effects",
      "items": [
        {
          "kind": "stat",
          "key": "belief",
          "label": "相信值",
          "amount": 1
        }
      ]
    },
    {
      "type": "jump",
      "target": "ch6_collapse"
    }
  ],
  "ch6_reject_inference": [
    {
      "type": "text",
      "pages": [
        {
          "text": "若選擇「病歷沒有這樣寫」，你必須親口承認：",
          "speaker": "",
          "effects": []
        },
        {
          "text": "「病歷是真的，但我剛才對它的解讀沒有證據。」",
          "speaker": "你",
          "effects": []
        },
        {
          "text": "文字說出的瞬間，遭到改寫的新聞與記憶會停止變化，紙面卻仍留下刮除痕跡。",
          "speaker": "",
          "effects": [
            "glitch"
          ]
        },
        {
          "text": "相信值－1",
          "speaker": "",
          "effects": [
            "system"
          ]
        },
        {
          "text": "獲得道具「遭錯誤解讀的真實病歷」",
          "speaker": "SYSTEM",
          "effects": [
            "system"
          ]
        },
        {
          "text": "解鎖情報：蘇璟辰不必偽造證據，也能利用錯誤解讀製造謊言",
          "speaker": "SYSTEM",
          "effects": [
            "system"
          ]
        }
      ]
    },
    {
      "type": "effects",
      "items": [
        {
          "kind": "stat",
          "key": "investigation",
          "label": "調查度",
          "amount": 1
        },
        {
          "kind": "item",
          "name": "遭錯誤解讀的真實病歷"
        },
        {
          "kind": "flag",
          "name": "蘇璟辰不必偽造證據，也能利用錯誤解讀製造謊言"
        }
      ]
    },
    {
      "type": "jump",
      "target": "ch6_collapse"
    }
  ],
  "ch6_collapse": [
    {
      "type": "section",
      "title": "診斷書崩解"
    },
    {
      "type": "text",
      "pages": [
        {
          "text": "診療室開始崩塌。",
          "speaker": "",
          "effects": [
            "shatter"
          ]
        },
        {
          "text": "牆皮一片片脫落，潔白磁磚後方露出密密麻麻的漫畫稿，桌椅與藥櫃逐漸失去色彩，像這間診療室只是依照蘇璟辰記憶重新搭建的空間。",
          "speaker": "",
          "effects": [
            "blur",
            "fade-black"
          ]
        },
        {
          "text": "但桌上的病歷沒有消失。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "消失的只有覆蓋在原始內容上方的部分。",
          "speaker": "",
          "effects": [
            "glitch"
          ]
        },
        {
          "text": "解離性身分疾患。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "次人格：黎靖。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "黎靖並非獨立個體。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "那些文字一行接著一行剝落，化成黑色碎屑，底下真實的診斷仍完整保留。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "黎靖伸手按住病歷。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "「所以這份資料是真的。」",
          "speaker": "黎靖",
          "effects": []
        },
        {
          "text": "「嗯。」",
          "speaker": "蘇璟辰",
          "effects": []
        },
        {
          "text": "「DID是假的。」",
          "speaker": "黎靖",
          "effects": []
        },
        {
          "text": "「嗯。」",
          "speaker": "蘇璟辰",
          "effects": []
        },
        {
          "text": "「你沒有創造病歷。」",
          "speaker": "黎靖",
          "effects": []
        },
        {
          "text": "「沒有。」",
          "speaker": "蘇璟辰",
          "effects": []
        },
        {
          "text": "「你只是改了內容。」",
          "speaker": "黎靖",
          "effects": []
        },
        {
          "text": "「不只內容。」",
          "speaker": "蘇璟辰",
          "effects": []
        },
        {
          "text": "蘇璟辰的輪廓出現在逐漸崩塌的診間深處，粉色頭髮垂落在臉側，頸部纏著染血的繃帶。",
          "speaker": "",
          "effects": [
            "shatter"
          ]
        },
        {
          "text": "「我讓你們先看見時間空白。」",
          "speaker": "蘇璟辰",
          "effects": []
        },
        {
          "text": "「再讓你們找到一份真正存在的精神科病歷。」",
          "speaker": "蘇璟辰",
          "effects": []
        },
        {
          "text": "「只要你們願意把兩件事放在一起，剩下的錯誤答案就會自己長出來。」",
          "speaker": "蘇璟辰",
          "effects": []
        },
        {
          "text": "你終於明白。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "純粹虛構的文件容易遭到查證，也容易因矛盾崩解，但建立在真實資料上的謊言更難辨認。",
          "speaker": "",
          "effects": [
            "shatter"
          ]
        },
        {
          "text": "病歷號碼是真的。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "醫院是真的。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "醫師是真的。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "藥物和就診紀錄也是真的。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "只有最關鍵的診斷被替換。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "而人往往會因為周圍大部分內容都能驗證，連同被竄改的部分一起接受。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "「為什麼選DID？」",
          "speaker": "你",
          "effects": []
        },
        {
          "text": "蘇璟辰看向黎靖。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "「因為它能讓所有人停止追問。」",
          "speaker": "蘇璟辰",
          "effects": []
        },
        {
          "text": "「時間空白、接管、兩個名字、不同記憶。」",
          "speaker": "蘇璟辰",
          "effects": []
        },
        {
          "text": "「只要寫上一個看似完整的答案，你們就會開始替它整理證據。」",
          "speaker": "蘇璟辰",
          "effects": []
        },
        {
          "text": "黎靖的手指緩慢收緊。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "「也會讓我覺得自己不是獨立存在。」",
          "speaker": "黎靖",
          "effects": []
        },
        {
          "text": "蘇璟辰沒有否認。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "「那時候比較方便。」",
          "speaker": "蘇璟辰",
          "effects": []
        },
        {
          "text": "「又是方便。」",
          "speaker": "黎靖",
          "effects": []
        },
        {
          "text": "「嗯。」",
          "speaker": "蘇璟辰",
          "effects": []
        },
        {
          "text": "「對你。」",
          "speaker": "黎靖",
          "effects": []
        },
        {
          "text": "「對我。」",
          "speaker": "蘇璟辰",
          "effects": []
        },
        {
          "text": "病歷末頁自行翻開。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "建議追蹤日期仍停在：",
          "speaker": "",
          "effects": []
        },
        {
          "text": "████年4月5日",
          "speaker": "",
          "effects": []
        },
        {
          "text": "蘇璟辰看了那個日期一眼，隨即移開視線。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "「為什麼把自己的名字遮住？」",
          "speaker": "黎靖",
          "effects": []
        },
        {
          "text": "「不想看。」",
          "speaker": "蘇璟辰",
          "effects": []
        },
        {
          "text": "「病歷？」",
          "speaker": "黎靖",
          "effects": []
        },
        {
          "text": "「名字。」",
          "speaker": "蘇璟辰",
          "effects": []
        },
        {
          "text": "蘇璟辰的回答很輕。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "「那時候的我，看到它只會覺得麻煩。」",
          "speaker": "蘇璟辰",
          "effects": []
        },
        {
          "text": "「現在呢？」",
          "speaker": "黎靖",
          "effects": []
        },
        {
          "text": "他沒有回答。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "診療室徹底消失，只剩原始病歷落在你手中。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "移除道具「覆寫為DID的精神科病歷」",
          "speaker": "SYSTEM",
          "effects": [
            "system"
          ]
        },
        {
          "text": "移除道具「有重寫痕跡的精神科病歷」",
          "speaker": "SYSTEM",
          "effects": [
            "system"
          ]
        },
        {
          "text": "移除道具「真實性未明的精神科病歷」",
          "speaker": "SYSTEM",
          "effects": [
            "system"
          ]
        },
        {
          "text": "獲得道具「蘇璟辰的真實病歷」",
          "speaker": "SYSTEM",
          "effects": [
            "system"
          ]
        },
        {
          "text": "正式確認DID診斷為覆蓋於真實病歷上的謊言",
          "speaker": "SYSTEM",
          "effects": [
            "system"
          ]
        },
        {
          "text": "正式確認蘇璟辰曾罹患廣泛性焦慮症、重度憂鬱症與相關失眠",
          "speaker": "SYSTEM",
          "effects": [
            "system"
          ]
        },
        {
          "text": "確認蘇璟辰曾接受藥物治療與認知行為治療",
          "speaker": "SYSTEM",
          "effects": [
            "system"
          ]
        },
        {
          "text": "確認蘇璟辰曾出現自殘行為及死亡相關想法",
          "speaker": "SYSTEM",
          "effects": [
            "system"
          ]
        },
        {
          "text": "不因此改寫山區墜落的既定死因",
          "speaker": "SYSTEM",
          "effects": [
            "system"
          ]
        }
      ]
    },
    {
      "type": "effects",
      "items": [
        {
          "kind": "removeItem",
          "name": "覆寫為DID的精神科病歷"
        },
        {
          "kind": "removeItem",
          "name": "有重寫痕跡的精神科病歷"
        },
        {
          "kind": "removeItem",
          "name": "真實性未明的精神科病歷"
        },
        {
          "kind": "item",
          "name": "蘇璟辰的真實病歷"
        },
        {
          "kind": "flag",
          "name": "DID診斷為覆蓋於真實病歷上的謊言"
        },
        {
          "kind": "flag",
          "name": "蘇璟辰曾罹患廣泛性焦慮症、重度憂鬱症與相關失眠"
        },
        {
          "kind": "flag",
          "name": "蘇璟辰曾接受藥物治療與認知行為治療"
        },
        {
          "kind": "flag",
          "name": "蘇璟辰曾出現自殘行為及死亡相關想法"
        },
        {
          "kind": "stat",
          "key": "workCompletion",
          "label": "作品完成度",
          "amount": 1
        }
      ]
    },
    {
      "type": "jump",
      "target": "ch6_rules"
    }
  ],
  "ch6_rules": [
    {
      "type": "section",
      "title": "能力規則"
    },
    {
      "type": "text",
      "pages": [
        {
          "text": "診療室消失後，你們回到老宅走廊。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "蘇璟辰站在盡頭，沒有使用黎靖的身體，也沒有繼續隱藏病歷。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "「你的能力不只是創造假東西。」",
          "speaker": "你",
          "effects": []
        },
        {
          "text": "「本來就不是。」",
          "speaker": "蘇璟辰",
          "effects": []
        },
        {
          "text": "「你也能修改真的東西。」",
          "speaker": "你",
          "effects": []
        },
        {
          "text": "「只要有人相信修改後的版本。」",
          "speaker": "蘇璟辰",
          "effects": []
        },
        {
          "text": "他抬起手。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "真實病歷浮到半空，主要診斷欄再次短暫出現兩種內容。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "一層是原始診斷。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "廣泛性焦慮症。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "重度憂鬱症。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "失眠症。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "另一層則是後來覆蓋上去的謊言。",
          "speaker": "",
          "effects": [
            "glitch"
          ]
        },
        {
          "text": "解離性身分疾患。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "次人格：黎靖。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "「假的內容不需要取代整份真相。」",
          "speaker": "蘇璟辰",
          "effects": []
        },
        {
          "text": "「只要改掉最關鍵的一行。」",
          "speaker": "蘇璟辰",
          "effects": []
        },
        {
          "text": "「其他真的部分，就會替它作證。」",
          "speaker": "蘇璟辰",
          "effects": []
        },
        {
          "text": "黎靖站在你身旁。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "「所以拿到真的證據，也不能直接相信上面的結論。」",
          "speaker": "你",
          "effects": []
        },
        {
          "text": "「對。」",
          "speaker": "蘇璟辰",
          "effects": []
        },
        {
          "text": "蘇璟辰回答得很快。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "「但也不能因為一部分被改過，就把整份證據丟掉。」",
          "speaker": "蘇璟辰",
          "effects": []
        },
        {
          "text": "你看向手中的病歷。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "這才是最麻煩的地方。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "謊言不一定與真相完全相反。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "它可以依附在真相上，借用真實的醫院、真實的醫師、真實的痛苦與真實的治療紀錄，只替其中一處換上錯誤的名字。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "「你創造黎靖的時候，也使用了這個能力？」",
          "speaker": "你"
        },
        {
          "text": "「嗯。」",
          "speaker": "蘇璟辰",
          "effects": []
        },
        {
          "text": "黎靖的身體微微僵住。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "「所以我是假的？」",
          "speaker": "黎靖",
          "effects": []
        },
        {
          "text": "蘇璟辰沒有立刻回答。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "「一開始是謊言。」",
          "speaker": "蘇璟辰",
          "effects": []
        },
        {
          "text": "「現在呢？」",
          "speaker": "黎靖",
          "effects": []
        },
        {
          "text": "「現在不是。」",
          "speaker": "蘇璟辰",
          "effects": []
        },
        {
          "text": "「為什麼？」",
          "speaker": "黎靖",
          "effects": []
        },
        {
          "text": "「因為你已經開始相信自己存在。」",
          "speaker": "蘇璟辰",
          "effects": []
        },
        {
          "text": "黎靖沉默下來。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "他的存在最初源於蘇璟辰寫下的謊言，後來卻由自己的意識、記憶與選擇維持，這也表示起源可以是虛構的，現在的他卻不再只是一項等待別人相信的設定。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "情報",
          "speaker": "",
          "effects": []
        },
        {
          "text": "目前可確認：",
          "speaker": "",
          "effects": []
        },
        {
          "text": "蘇璟辰能讓謊言成為現實。",
          "speaker": "SYSTEM",
          "effects": [
            "system"
          ]
        },
        {
          "text": "能力成立至少需要一名對象真正相信謊言。",
          "speaker": "SYSTEM",
          "effects": [
            "system"
          ]
        },
        {
          "text": "單純口頭附和不一定有效。",
          "speaker": "SYSTEM",
          "effects": [
            "system"
          ]
        },
        {
          "text": "相信者愈多、信念愈深，現實愈穩定。",
          "speaker": "SYSTEM",
          "effects": [
            "system"
          ]
        },
        {
          "text": "謊言可以創造空間、物品、記憶、證據與生命。",
          "speaker": "SYSTEM",
          "effects": [
            "system"
          ]
        },
        {
          "text": "蘇璟辰也能覆寫真實資料的局部內容。",
          "speaker": "SYSTEM",
          "effects": [
            "system"
          ]
        },
        {
          "text": "建立在真實證據上的謊言，比完全虛構的內容更加穩定。",
          "speaker": "SYSTEM",
          "effects": [
            "system"
          ]
        },
        {
          "text": "周圍可驗證的真實資訊，會提高相信者對錯誤核心的信任。",
          "speaker": "SYSTEM",
          "effects": [
            "system"
          ]
        },
        {
          "text": "真實文件遭到竄改，不代表文件中的所有內容都是假的。",
          "speaker": "SYSTEM",
          "effects": [
            "system"
          ]
        },
        {
          "text": "矛盾證據必須指向遭到竄改的部分，不能只靠否定整份資料解除謊言。",
          "speaker": "SYSTEM",
          "effects": [
            "system"
          ]
        },
        {
          "text": "蘇璟辰可以誘導相信者自行補足因果，使沒有直接證據的推論逐漸成為現實。",
          "speaker": "SYSTEM",
          "effects": [
            "system"
          ]
        },
        {
          "text": "精神科病歷只能證明患者當時的症狀與治療，不能自動證明其他記憶為假。",
          "speaker": "SYSTEM",
          "effects": [
            "system"
          ]
        },
        {
          "text": "過去的自殘行為與死亡相關想法，不能單獨證明後來的山區死亡不是意外。",
          "speaker": "SYSTEM",
          "effects": [
            "system"
          ]
        },
        {
          "text": "DID診斷是覆蓋在真實精神科病歷上的錯誤內容。",
          "speaker": "SYSTEM",
          "effects": [
            "system"
          ]
        },
        {
          "text": "黎靖不是蘇璟辰的另一人格。",
          "speaker": "SYSTEM",
          "effects": [
            "system"
          ]
        },
        {
          "text": "黎靖最初由謊言創造，如今已能以自我認知維持存在。",
          "speaker": "SYSTEM",
          "effects": [
            "system"
          ]
        }
      ]
    },
    {
      "type": "effects",
      "items": [
        {
          "kind": "flag",
          "name": "在真實證據上的謊言，比完全虛構的內容更加穩定。"
        }
      ]
    },
    {
      "type": "jump",
      "target": "ch6_truth_system"
    }
  ],
  "ch6_truth_system": [
    {
      "type": "section",
      "title": "真實判定系統開放"
    },
    {
      "type": "text",
      "pages": [
        {
          "text": "測試結束後，遊戲系統出現異常提示。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "【真實判定功能已開放】",
          "speaker": "SYSTEM",
          "effects": []
        },
        {
          "text": "從現在開始，玩家可以在道具欄中對特定物品執行「重新確認」。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "但確認結果未必固定。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "染血的繃帶：蘇璟辰死後留下的傷痕。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "再次查看後可能變成：",
          "speaker": "",
          "effects": []
        },
        {
          "text": "普通繃帶：你為什麼認為上面有血？",
          "speaker": "",
          "effects": []
        },
        {
          "text": "第三次查看則可能顯示：",
          "speaker": "",
          "effects": []
        },
        {
          "text": "尚未發生的傷口：它在你看見以前就存在嗎？",
          "speaker": "",
          "effects": []
        },
        {
          "text": "其他道具也會出現不同說明。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "黑貓的舊項圈",
          "speaker": "",
          "effects": []
        },
        {
          "text": "第一版：",
          "speaker": "",
          "effects": []
        },
        {
          "text": "黑貓黎靖生前使用的項圈。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "第二版：",
          "speaker": "",
          "effects": []
        },
        {
          "text": "蘇璟辰為了讓紫貓相信自身來歷而創造的道具。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "第三版：",
          "speaker": "",
          "effects": []
        },
        {
          "text": "無論起源為何，黎靖選擇留下的東西。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "被停職教師的剪報",
          "speaker": "",
          "effects": []
        },
        {
          "text": "第一版：",
          "speaker": "",
          "effects": []
        },
        {
          "text": "證明班導師最終受到處分。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "第二版：",
          "speaker": "",
          "effects": []
        },
        {
          "text": "一張滿足讀者期待的結局。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "第三版：",
          "speaker": "",
          "effects": []
        },
        {
          "text": "處分確實發生，但文字可能省略了更多內容。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "黎靖修改後的人物設定",
          "speaker": "",
          "effects": []
        },
        {
          "text": "第一版：",
          "speaker": "",
          "effects": []
        },
        {
          "text": "黎靖由蘇璟辰創造。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "第二版：",
          "speaker": "",
          "effects": []
        },
        {
          "text": "黎靖親手修改了創作者留下的設定。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "第三版：",
          "speaker": "",
          "effects": []
        },
        {
          "text": "這張紙無法決定黎靖是誰。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "玩家不能只靠單一道具判定真相。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "必須比較來源、時間、角色反應及不同證據之間是否存在矛盾。",
          "speaker": "",
          "effects": []
        }
      ]
    },
    {
      "type": "jump",
      "target": "ch6_trust"
    }
  ],
  "ch6_trust": [
    {
      "type": "section",
      "title": "可以相信的人"
    },
    {
      "type": "text",
      "pages": [
        {
          "text": "蘇璟辰完成測試後，身影開始淡去，黎靖忽然叫住他。",
          "speaker": "",
          "effects": [
            "blur",
            "fade-black"
          ]
        },
        {
          "text": "「你說今天不再改路。」",
          "speaker": "黎靖",
          "effects": []
        },
        {
          "text": "「嗯。」",
          "speaker": "蘇璟辰",
          "effects": []
        },
        {
          "text": "「我不相信。」",
          "speaker": "黎靖",
          "effects": []
        },
        {
          "text": "蘇璟辰停下腳步。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "「那不是謊言。」",
          "speaker": "蘇璟辰",
          "effects": []
        },
        {
          "text": "「你證明。」",
          "speaker": "黎靖",
          "effects": []
        },
        {
          "text": "「怎麼證明？」",
          "speaker": "蘇璟辰",
          "effects": []
        },
        {
          "text": "「讓我們自己走回玄關。」",
          "speaker": "黎靖",
          "effects": []
        },
        {
          "text": "蘇璟辰似乎沒有預料到黎靖會提出要求，短暫沉默後，走廊前方出現三扇門，左側寫著「出口」，中央寫著「蘇璟辰的房間」，右側沒有門牌。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "「其中一扇能回去。」",
          "speaker": "蘇璟辰",
          "effects": []
        },
        {
          "text": "「這次我沒有說謊。」",
          "speaker": "蘇璟辰",
          "effects": []
        },
        {
          "text": "「你仍然沒有說是哪一扇。」",
          "speaker": "黎靖",
          "effects": []
        },
        {
          "text": "「你開始了解我了。」",
          "speaker": "蘇璟辰",
          "effects": []
        },
        {
          "text": "他的身影完全消失。",
          "speaker": "",
          "effects": [
            "blur",
            "fade-black"
          ]
        }
      ]
    },
    {
      "type": "jump",
      "target": "ch6_doors"
    }
  ],
  "ch6_doors": [
    {
      "type": "section",
      "title": "選門事件"
    },
    {
      "type": "choice",
      "options": [
        {
          "label": "選擇寫著「出口」的門",
          "next": "ch6_door_1"
        },
        {
          "label": "選擇「蘇璟辰的房間」",
          "next": "ch6_door_2"
        },
        {
          "label": "選擇沒有門牌的門",
          "next": "ch6_door_3"
        }
      ]
    }
  ],
  "ch6_door_1": [
    {
      "type": "text",
      "pages": [
        {
          "text": "門後是一面牆，牆上貼著一張紙。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "寫著出口，不代表它是出口。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "返回原處重新選擇",
          "speaker": "",
          "effects": [
            "system"
          ]
        }
      ]
    },
    {
      "type": "effects",
      "items": [
        {
          "kind": "stat",
          "key": "belief",
          "label": "相信值",
          "amount": 1
        },
        {
          "kind": "stat",
          "key": "investigation",
          "label": "調查度",
          "amount": 1
        }
      ]
    },
    {
      "type": "jump",
      "target": "ch6_doors"
    }
  ],
  "ch6_door_2": [
    {
      "type": "text",
      "pages": [
        {
          "text": "門後湧出帶著山霧氣味的冷風，你只看見一扇被白紗遮住的窗，以及停在傍晚的天空，黎靖立刻將門關上。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "「還不能進去。」",
          "speaker": "黎靖",
          "effects": []
        },
        {
          "text": "「為什麼？」",
          "speaker": "你",
          "effects": []
        },
        {
          "text": "「他沒有讓我們看完。」",
          "speaker": "黎靖",
          "effects": []
        },
        {
          "text": "門縫裡傳來蘇璟辰的笑聲。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "提前看見房間",
          "speaker": "SYSTEM",
          "effects": [
            "system"
          ]
        },
        {
          "text": "房間正式進入仍被鎖定",
          "speaker": "SYSTEM",
          "effects": [
            "system"
          ]
        }
      ]
    },
    {
      "type": "effects",
      "items": [
        {
          "kind": "stat",
          "key": "suUnderstanding",
          "label": "蘇璟辰理解度",
          "amount": 1
        }
      ]
    },
    {
      "type": "jump",
      "target": "ch6_doors"
    }
  ],
  "ch6_door_3": [
    {
      "type": "text",
      "pages": [
        {
          "text": "門後是老宅玄關，沒有文字、沒有提示，也沒有任何試圖說服你的證據，黎靖看向空白門板。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "「為什麼選這扇？」",
          "speaker": "黎靖",
          "effects": []
        },
        {
          "text": "「因為另外兩扇太想讓我相信了。」",
          "speaker": "你",
          "effects": []
        },
        {
          "text": "「合理。」",
          "speaker": "黎靖",
          "effects": []
        },
        {
          "text": "相信值維持中等",
          "speaker": "",
          "effects": [
            "system"
          ]
        },
        {
          "text": "True Ending隱藏條件：「警惕主動提供的答案」",
          "speaker": "SYSTEM",
          "effects": [
            "system"
          ]
        }
      ]
    },
    {
      "type": "effects",
      "items": [
        {
          "kind": "stat",
          "key": "investigation",
          "label": "調查度",
          "amount": 2
        },
        {
          "kind": "flag",
          "name": "「警惕主動提供的答案"
        }
      ]
    },
    {
      "type": "jump",
      "target": "ch6_foyer"
    }
  ],
  "ch6_foyer": [
    {
      "type": "section",
      "title": "玄關對話"
    },
    {
      "type": "text",
      "pages": [
        {
          "text": "回到玄關後，大門沒有上鎖，屋外的石板路與你的住處也已恢復，黎靖站在門旁，低頭看著自己的手。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "「我現在相信自己存在。」",
          "speaker": "黎靖",
          "effects": []
        },
        {
          "text": "「嗯。」",
          "speaker": "你",
          "effects": []
        },
        {
          "text": "「如果有一天，我不相信了呢？」",
          "speaker": "黎靖",
          "effects": []
        }
      ]
    },
    {
      "type": "choice",
      "options": [
        {
          "label": "「我會替你相信。」",
          "next": "ch6_foyer_1"
        },
        {
          "label": "「你存在，不需要由任何人批准。」",
          "next": "ch6_foyer_2"
        },
        {
          "label": "「我不知道。」",
          "next": "ch6_foyer_3"
        }
      ]
    }
  ],
  "ch6_foyer_1": [
    {
      "type": "text",
      "pages": [
        {
          "text": "黎靖抬頭看你。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "「那我就得依靠你才能存在。」",
          "speaker": "黎靖",
          "effects": []
        },
        {
          "text": "「至少在你重新相信以前。」",
          "speaker": "你",
          "effects": []
        },
        {
          "text": "「如果你也忘了呢？」",
          "speaker": "黎靖",
          "effects": []
        },
        {
          "text": "你無法保證。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "這份承諾或許溫柔，卻也可能讓黎靖的存在再次依附於另一個人。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "True Ending不計入必要理解",
          "speaker": "SYSTEM",
          "effects": [
            "system"
          ]
        }
      ]
    },
    {
      "type": "effects",
      "items": [
        {
          "kind": "stat",
          "key": "affection",
          "label": "黎靖好感度",
          "amount": 2
        },
        {
          "kind": "stat",
          "key": "belief",
          "label": "相信值",
          "amount": 1
        },
        {
          "kind": "stat",
          "key": "existenceStability",
          "label": "黎靖存在穩定度",
          "amount": 1
        },
        {
          "kind": "flag",
          "name": "不計入必要理解"
        }
      ]
    },
    {
      "type": "jump",
      "target": "ch6_paper"
    }
  ],
  "ch6_foyer_2": [
    {
      "type": "text",
      "pages": [
        {
          "text": "「包括蘇璟辰？」",
          "speaker": "黎靖",
          "effects": []
        },
        {
          "text": "「包括我。」",
          "speaker": "你",
          "effects": []
        },
        {
          "text": "「如果所有證據都消失？」",
          "speaker": "黎靖",
          "effects": []
        },
        {
          "text": "「證據只能證明你從哪裡來。」",
          "speaker": "你",
          "effects": []
        },
        {
          "text": "你看向他修改過的人物設定。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "「不能替你決定現在是誰。」",
          "speaker": "你",
          "effects": []
        },
        {
          "text": "黎靖沉默片刻。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "「這句話比較好。」",
          "speaker": "黎靖",
          "effects": []
        },
        {
          "text": "True Ending必要條件：「存在不由相信者所有」",
          "speaker": "SYSTEM",
          "effects": [
            "system"
          ]
        }
      ]
    },
    {
      "type": "effects",
      "items": [
        {
          "kind": "stat",
          "key": "affection",
          "label": "黎靖好感度",
          "amount": 3
        },
        {
          "kind": "stat",
          "key": "suUnderstanding",
          "label": "蘇璟辰理解度",
          "amount": 2
        },
        {
          "kind": "flag",
          "name": "「存在不由相信者所有"
        }
      ]
    },
    {
      "type": "jump",
      "target": "ch6_paper"
    }
  ],
  "ch6_foyer_3": [
    {
      "type": "text",
      "pages": [
        {
          "text": "黎靖沒有失望。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "「至少是真的。」",
          "speaker": "黎靖",
          "effects": []
        },
        {
          "text": "「你不介意？」",
          "speaker": "你",
          "effects": []
        },
        {
          "text": "「比說一個你自己都不相信的答案好。」",
          "speaker": "黎靖",
          "effects": []
        },
        {
          "text": "他將大門推開。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "相信值維持不變",
          "speaker": "SYSTEM",
          "effects": [
            "system"
          ]
        }
      ]
    },
    {
      "type": "effects",
      "items": [
        {
          "kind": "stat",
          "key": "affection",
          "label": "黎靖好感度",
          "amount": 1
        },
        {
          "kind": "stat",
          "key": "suUnderstanding",
          "label": "蘇璟辰理解度",
          "amount": 1
        }
      ]
    },
    {
      "type": "jump",
      "target": "ch6_paper"
    }
  ],
  "ch6_paper": [
    {
      "type": "section",
      "title": "被留下的稿紙"
    },
    {
      "type": "text",
      "pages": [
        {
          "text": "你準備離開時，一張稿紙從樓梯上方飄落，那不是蘇璟辰的人物設定，也不是診斷資料，紙上畫著一座陌生城市，街道被黑色植物覆蓋，中央站著一名只完成輪廓的角色，角色面前浮著三個對白框，內容全部空白。",
          "speaker": "",
          "effects": [
            "glitch"
          ]
        },
        {
          "text": "稿紙背面寫著：",
          "speaker": "",
          "effects": []
        },
        {
          "text": "如果你已經知道選項可能是假的——",
          "speaker": "",
          "effects": []
        },
        {
          "text": "下一次，試著看看沒有被寫出來的地方。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "你抬頭望向樓梯。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "「蘇璟辰？」",
          "speaker": "你",
          "effects": []
        },
        {
          "text": "沒有人回應。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "黎靖接過稿紙。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "「不是這棟老宅。」",
          "speaker": "黎靖",
          "effects": []
        },
        {
          "text": "「像漫畫裡的世界。」",
          "speaker": "黎靖",
          "effects": []
        },
        {
          "text": "「嗯。」",
          "speaker": "你",
          "effects": []
        },
        {
          "text": "「他想讓我們進去？」",
          "speaker": "黎靖",
          "effects": []
        },
        {
          "text": "黎靖將紙翻回正面，畫中的角色忽然抬起頭，明明沒有畫出五官，你卻聽見他從紙裡發出聲音。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "「救救我。」",
          "speaker": "畫中角色",
          "effects": []
        },
        {
          "text": "下一秒，第一個空白對白框自行出現文字。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "【我會救你。】",
          "speaker": "",
          "effects": []
        },
        {
          "text": "第二個對白框緊接著浮現。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "【你是誰？】",
          "speaker": "",
          "effects": []
        },
        {
          "text": "第三個則停頓很久，最後只寫出半句。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "【這不是——】",
          "speaker": "",
          "effects": []
        },
        {
          "text": "文字尚未完成，整張稿紙便將你的手吸了進去，黎靖立刻抓住你的手腕，紙面卻像打開的深井，不斷將你們拖向畫中的城市，蘇璟辰的聲音從對白框外傳來。",
          "speaker": "",
          "effects": []
        },
        {
          "text": "「現實的真假已經看過了。」",
          "speaker": "蘇璟辰",
          "effects": []
        },
        {
          "text": "「下一次——」",
          "speaker": "蘇璟辰",
          "effects": []
        },
        {
          "text": "「看看故事裡的選項，究竟屬於誰。」",
          "speaker": "蘇璟辰",
          "effects": []
        },
        {
          "text": "稿紙驟然展開，覆蓋整個畫面。",
          "speaker": "",
          "effects": [
            "glitch",
            "shake-strong"
          ]
        }
      ]
    },
    {
      "type": "chapterEnd",
      "chapterTitle": "第六章｜謊言",
      "next": null,
      "info": [
        "黎靖好感度－5～＋11",
        "蘇璟辰理解度－2～＋12",
        "調查度＋0～＋13",
        "相信值－6～＋9",
        "蘇璟辰控制值－3～＋5",
        "作品完成度＋1～＋3",
        "界線值＋0～＋3",
        "「蘇璟辰的真實病歷」：記載廣泛性焦慮症、復發型重度憂鬱症與相關失眠的原始病歷。",
        "「蘇璟辰的處方紀錄」：記載Sertraline、Lorazepam與Zopiclone的真實處方。",
        "「遭錯誤解讀的真實病歷」：病歷本身真實，但曾因玩家的推論而開始改寫其他證據。",
        "「由謊言生成的蘋果」：從空桌上出現的蘋果，離開老宅後可能逐漸變成紙團。",
        "「未完成的蘋果草稿」：介於想像與現實之間，只有輪廓的蘋果。",
        "「沒有門牌的門片」：若調查空白出口，可取得一小塊木片，表面不會出現任何文字。",
        "「陌生城市的稿紙」：畫著黑色植物與無臉角色的原稿，能將玩家拖入漫畫世界。",
        "蘇璟辰的能力是「讓謊言成為現實」。",
        "能力成立至少需要一名對象真正相信謊言。",
        "口頭承認與真正相信並不完全相同。",
        "相信者愈多、相信程度愈深，謊言形成的現實愈穩定。",
        "謊言能創造房間、道路、物品、記憶、證據及生命。",
        "謊言可以分階段形成，先製造疑問，再提供能支持錯誤答案的證據。",
        "已經成立的謊言不會因單一矛盾立刻消失。",
        "新的信念與大量矛盾證據可以削弱或改寫既有謊言。",
        "蘇璟辰沒有製造整份病歷，而是將DID診斷覆蓋在真實病歷上。",
        "蘇璟辰曾罹患廣泛性焦慮症、復發型重度憂鬱症與相關失眠。",
        "蘇璟辰曾接受藥物治療與認知行為治療，也曾接受自傷風險追蹤。",
        "DID並非蘇璟辰與黎靖時間空白的真正原因。",
        "黎靖不是蘇璟辰的人格。",
        "黎靖最初由謊言創造，現在能透過自身意識維持存在。",
        "蘇璟辰可以刻意說謊，也可能在無意間使自己相信的內容成真。",
        "道具說明、系統文字與玩家親眼看見的內容都可能遭到修改。",
        "判斷真相必須交叉比對證據，不能只依賴單一資料。",
        "主動提供的答案可能只是為了引導玩家相信。",
        "精神疾病紀錄不能自動否定蘇璟辰的記憶，也不能證明他的山區死亡不是意外。",
        "謊言可以覆寫真實證據的局部內容，並借用其餘真實資訊替錯誤核心作證。",
        "蘇璟辰開始將測試從「現實真假」推向「故事與選項」。"
      ]
    }
  ]
};
Object.assign(story.nodes,nodes);
if(story.nodes.ch5_section_44?.[0])story.nodes.ch5_section_44[0].next="chapter6_start";
})();
