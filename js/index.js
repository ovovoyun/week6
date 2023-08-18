document.addEventListener("DOMContentLoaded", function () {
    const data = [
        {
            id: 1, 
            date: "19 MAY 2023",
            url: "../assets/images/event/01.jpg",
            title: "邪典電影派對——房間",
            content: "你有聽說過「大災難家」裡面的主角 Tommy Wiseau 製作的「史上最爛的電影」——房間嗎？在美國甚至演變成一種邪教、一種派對的形式，在電影播放的對著螢幕丟湯匙都...",
            sparklerText: "社群活動",
            linkText: "開賣中"
        },
        {
            id: 2, 
            date: "23 MAY 2023",
            url: "../assets/images/event/02.jpg",
            title: "怪舞俱樂部",
            content: "覺得自己的舞蹈細胞異於常人？每次隨著音樂起舞身邊的人總是露出無法理解的表情？來這裡就對了！來參加這場一起跳舞的聚會，也會在每一次的舞會中選出舞步最怪的...",
            sparklerText: "演出",
            linkText: "檢視活動"
        },
        {
            id: 3, 
            date: "30 MAY 2023",
            url: "../assets/images/event/03.jpg",
            title: "哈利波特馬拉松",
            content: "每次身邊有人開啟哈利波特的話題，自己永遠都是聽不懂的那個麻瓜？看大家在討論魁地奇、用咒語鬥法的時候，自己永遠是陪笑的那個人？穿好你的法袍、帶上你的法杖...",
            sparklerText: "聯誼",
            linkText: "開賣中"
        },
        {
            id: 4, 
            date: "12 June 2023",
            url: "../assets/images/event/04.jpg",
            title: "皮卡丘排球大賽",
            content: "還記得小時候玩的小遊戲嗎？總是有朋友吹噓自己獨孤求敗、只求一敗？是時候該展現真正的實力了！本活動採用瑞士制賽程，以絕對公平的方式進行，是時候該證明自己...",
            sparklerText: "遊戲競賽",
            linkText: "開賣中"
        },
        {
            id: 5, 
            date: "25 June 2023",
            url: "../assets/images/event/05.jpg",
            title: "酒精路跑",
            content: "身邊總是有對自己酒量有高度自信的朋友嗎？拉著他/她一起來參加酒精路跑吧！一起拍下第一杯直到倒下為止的照片，一起喝遍市區內各家極具品味的酒吧。",
            sparklerText: "社群活動",
            linkText: "開賣中"
        },
        {
            id: 6, 
            date: "9 July 2023",
            url: "../assets/images/event/06.jpg",
            title: "展覽——我的房間",
            content: "每個人的房間總會有那麼一兩個能代表自己的物事，或許是再平凡不過的牙刷、馬克杯，或許有那些別人的房間從沒出現過的小東西——那些能定義自己的特別的東西。",
            sparklerText: "展覽",
            linkText: "開賣中"
        },
    ];

    const recentActivityList = document.getElementById("recentActivityList");
    
    let ulContent = "";
    data.forEach(item => {
        ulContent += `
            <li class="col">
                <a href="#">
                    <p class="pb-2 pb-md-12 fs-2 fs-md-48 border-bottom border-3 mb-3 mb-md-12">${item.date}</p>
                    <img src="${item.url}" alt="event${item.id}" class="img-fluid mb-2 mb-md-12 w-100 card__img">
                    <h4 class="mb-2 mb-md-12 fs-18 fs-md-4 fw-bold ff-notoSerif">${item.title}</h4>
                    <p class="mb-3">${item.content}</p>
                </a>
                <div class="d-flex justify-content-between py-10 py-md-12 border-top border-bottom border-2"> 
                    <div class="d-flex">
                        <img src="../assets/images/sparkler.png" alt="sparklerIcon" class="me-1 card__sparklerIcon">
                        <p class="fw-bold ff-notoSerif card__sparklerText">${item.sparklerText}</p>
                    </div>
                    <a href="#" class="d-flex card__saleText">
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