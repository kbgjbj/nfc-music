const SONGS = {
  "1": {
    name: "范玮琪/家家 - 范范之辈",

    // ✅ QQ音乐：解析工具真实输出，songmid = 000QeMlM00pwCj
    qqScheme: "qqmusic://qq.com/media/playSonglist?p=%7B%22song%22:%5B%7B%22type%22:%220%22,%22songmid%22:%22000QeMlM00pwCj%22%7D%5D,%22action%22:%22play%22%7D",

    // ✅ 网易云：分享链接 id=229327
    neteaseScheme: "orpheus://song/229327/?autoplay=1",

    // ⏳ 以下三个平台：协议待实测，先留空（自动分发会跳过）
    qishiScheme: "",
    kugouScheme: "",
    kuwoScheme: "",

    // ✅ 网页兜底：只保留QQ音乐原样短链
    qqWeb: "https://c6.y.qq.com/base/fcgi-bin/u?__=45xjEweuqdWW",
    neteaseWeb: "https://music.163.com/#/search/m/?s=%E8%8C%83%E8%8C%83%E4%B9%8B%E8%BE%88%20%E8%8C%83%E7%8E%AE%E7%90%AA"
  }
};
