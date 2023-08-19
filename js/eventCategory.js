document.addEventListener("DOMContentLoaded", function () {
    // tagList
    let tagData = [
        "演出","音樂", "舞蹈", "戲劇", "音樂會", "課程講座", "社群活動", "展覽", "研討會", "電影", "電音派對", "遊戲競賽", "親子", "藝文活動", "運動", "交通旅遊", "美食", "資訊科技", "聯誼", "戶外", "線上活動",
    ];

    const eventTagList = document.getElementById("eventTagList");
    let tagContent = "";
    tagData.forEach(item => {
        tagContent += `
            <a href="#">
                <span class="badge me-2 mb-2 px-3 px-lg-4 py-lg-1 text-primary fs-14 fs-lg-6 fw-bold ff-notoSerif">${item}</span>
            </a>
        `;
    });

    eventTagList.innerHTML = tagContent;

    //cardList
    const data = [
        {
            id: "01", 
            linkUrl: "./eventDetail.html",
            date: "19 MAY 2023",
            title: "邪典電影派對——房間",
            content: "你有聽說過「大災難家」裡面的主角 Tommy Wiseau 製作的「史上最爛的電影」——房間嗎？在美國甚至演變成一種邪教、一種派對的形式，在電影播放的對著螢幕丟湯匙都...",
            sparklerText: "社群活動",
            linkText: "開賣中"
        },
        {
            id: "02", 
            linkUrl: "./eventDetail.html",
            date: "23 MAY 2023",
            title: "怪舞俱樂部",
            content: "覺得自己的舞蹈細胞異於常人？每次隨著音樂起舞身邊的人總是露出無法理解的表情？來這裡就對了！來參加這場一起跳舞的聚會，也會在每一次的舞會中選出舞步最怪的...",
            sparklerText: "演出",
            linkText: "檢視活動"
        },
        {
            id: "03", 
            linkUrl: "./eventDetail.html",
            date: "30 MAY 2023",
            title: "哈利波特馬拉松",
            content: "每次身邊有人開啟哈利波特的話題，自己永遠都是聽不懂的那個麻瓜？看大家在討論魁地奇、用咒語鬥法的時候，自己永遠是陪笑的那個人？穿好你的法袍、帶上你的法杖...",
            sparklerText: "聯誼",
            linkText: "開賣中"
        },
        {
            id: "04", 
            linkUrl: "./eventDetail.html",
            date: "12 JUNE 2023",
            title: "皮卡丘排球大賽",
            content: "還記得小時候玩的小遊戲嗎？總是有朋友吹噓自己獨孤求敗、只求一敗？是時候該展現真正的實力了！本活動採用瑞士制賽程，以絕對公平的方式進行，是時候該證明自己...",
            sparklerText: "遊戲競賽",
            linkText: "開賣中"
        },
        {
            id: "05", 
            linkUrl: "./eventDetail.html",
            date: "25 JUNE 2023",
            title: "酒精路跑",
            content: "身邊總是有對自己酒量有高度自信的朋友嗎？拉著他/她一起來參加酒精路跑吧！一起拍下第一杯直到倒下為止的照片，一起喝遍市區內各家極具品味的酒吧。",
            sparklerText: "社群活動",
            linkText: "開賣中"
        },
        {
            id: "06", 
            linkUrl: "./eventDetail.html",
            date: "9 JULY 2023",
            title: "展覽——我的房間",
            content: "每個人的房間總會有那麼一兩個能代表自己的物事，或許是再平凡不過的牙刷、馬克杯，或許有那些別人的房間從沒出現過的小東西——那些能定義自己的特別的東西。",
            sparklerText: "展覽",
            linkText: "開賣中"
        },
        {
            id: "07", 
            linkUrl: "./eventDetail.html",
            date: "19 MAY 2023",
            title: "野營音樂祭",
            content: "喜歡山水、喜歡音樂嗎？一起在溪邊來場浪漫的沉浸式森林活動吧！結合四大戶外探索類別、超過 15 項體驗與工作坊、新興音樂人的草地演唱。",
            sparklerText: "演出",
            linkText: "開賣中"
        },
        {
            id: "08", 
            linkUrl: "./eventDetail.html",
            date: "19 MAY 2023",
            title: "疊疊樂大賽",
            content: "來到七星潭會想到什麼呢？絕對是數也數不清的扁扁石頭吧！有這項技能卻沒有機會大展身手的你，展露頭角的機會來囉！",
            sparklerText: "遊戲競賽",
            linkText: "檢視活動"
        },
        {
            id: "09", 
            linkUrl: "./eventDetail.html",
            date: "18 MAY 2023",
            title: "返老還童-制服聯誼",
            content: "由戀愛家教「艾德溫」主辦策劃，讓各位在安排好的青春行程中擁有自然的純愛互動體驗，互相餵食餅乾、觀察對方手相，有趣的互動環節讓你/妳怦然心動！",
            sparklerText: "聯誼",
            linkText: "開賣中"
        },
        {
            id: "10", 
            linkUrl: "./eventDetail.html",
            date: "19 MAY 2023",
            title: "野外求生17天",
            content: "野外求生體驗，我們將在沒有水、沒有電的自然環境裡，學習各項生存技能，課程內容包含生火、水源取得及淨化、射箭、木食器製作、無具野炊、野地編繩和狩獵技能...",
            sparklerText: "戶外",
            linkText: "開賣中"
        },
        {
            id: "11", 
            linkUrl: "./eventDetail.html",
            date: "19 MAY 2023",
            title: "耳熟能詳音樂祭",
            content: "對你來說聽都沒聽過的團，但是音樂一下保證跟著唱，重磅邀請各界隱藏天籟歌手、天團，不想曬太陽也可以在樹下當 KTV 跟著唱，唱不出來服務台報到立馬退費！",
            sparklerText: "演出",
            linkText: "開賣中"
        },
        {
            id: "12", 
            linkUrl: "./eventDetail.html",
            date: "19 MAY 2023",
            title: "野營發呆大賽",
            content: "你也是那種動不動就容易放空、神遊的人嗎？這輩子靠這技能出頭的機會來了，在恆春山林一起神遊、盡情地發呆吧！冠軍可以得到價值十萬的綿豆腐床墊一張！",
            sparklerText: "遊戲競賽",
            linkText: "開賣中"
        },
    ];

    const recentActivityList = document.getElementById("recentActivityList");
    
    let ulContent = "";
    data.forEach(item => {
        const imageUrl = new URL(`../assets/images/event/${item.id}.jpg`, import.meta.url).href;
        const sparklerUrl = new URL("../assets/images/sparkler.png", import.meta.url).href;

        ulContent += `
            <li class="col">
                <a href="${item.linkUrl}">
                    <p class="pb-2 pb-lg-12 fs-2 fs-lg-48 border-bottom border-3 mb-3 mb-lg-12">${item.date}</p>
                    <img src="${imageUrl}" alt="event${item.id}" class="img-fluid mb-2 mb-lg-12 w-100 card__img">
                    <h4 class="mb-2 mb-lg-12 fs-18 fs-lg-4 fw-bold ff-notoSerif">${item.title}</h4>
                    <p class="mb-3">${item.content}</p>
                </a>
                <div class="d-flex justify-content-between py-10 py-lg-12 border-top border-bottom border-2"> 
                    <div class="d-flex">
                        <img src="${sparklerUrl}" alt="sparklerIcon" class="me-1 card__sparklerIcon">
                        <p class="fw-bold ff-notoSerif card__sparklerText">${item.sparklerText}</p>
                    </div>
                    <a href="#" class="d-flex card__saleText" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <p class="fw-bold">${item.linkText}</p>
                        <span class="material-symbols-outlined ms-1">keyboard_double_arrow_right</span>
                    </a>
                </div>
            </li>
        `;

        return ulContent;
    });

    recentActivityList.innerHTML = ulContent;
});
