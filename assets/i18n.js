(function () {
  "use strict";

  var STORAGE_KEY = "disktone-lang";
  var SUPPORTED = ["en", "zh-Hans", "zh-Hant"];

  var messages = {
    en: {
      "meta.support.title": "DiskTone — Support",
      "meta.support.description": "DiskTone — Technical Support. Get help with your music experience on iOS.",
      "meta.privacy.title": "DiskTone — Privacy Policy",
      "meta.privacy.description": "DiskTone Privacy Policy — how we handle your data on iOS.",
      "nav.aria": "Site navigation",
      "nav.about": "About",
      "nav.faq": "FAQ",
      "nav.privacy": "Privacy",
      "nav.contact": "Contact",
      "nav.support": "Support",
      "brand.alt": "DiskTone app icon",
      "lang.aria": "Language",
      "hero.eyebrow.support": "Technical Support",
      "hero.title.support": "We're here to <em>help</em>",
      "hero.lead.support": "Welcome to the official DiskTone support page. Find answers to common questions or reach out to our team directly.",
      "about.label": "About DiskTone",
      "about.title": "Music on your device, beautifully played",
      "about.intro": "DiskTone is a local music player for iOS. Browse your system music library, download tracks from direct audio links, and enjoy playback with background audio and lock-screen controls — no account required.",
      "about.card1.title": "System Music Library",
      "about.card1.text": "With your permission, browse and play songs, albums, and artists from your device's music library using native iOS playback.",
      "about.card2.title": "Direct Link Downloads",
      "about.card2.text": "Paste an HTTP/HTTPS link to an MP3, M4A, or WAV file to download it into the app for offline playback.",
      "about.card3.title": "Privacy First",
      "about.card3.text": "Music stays on your device. No account, no cloud sync, no analytics, and no parsing of music services or web pages.",
      "faq.label": "Help Center",
      "faq.title": "Frequently asked questions",
      "faq.intro": "Quick answers to the most common support requests.",
      "faq.q1": "How do I add music to DiskTone?",
      "faq.a1": "There are two ways: (1) grant access to your system music library so DiskTone can browse and play existing tracks, or (2) tap the download button in the library and paste a direct link to an MP3, M4A, or WAV file. DiskTone does not support music platform links or general web page parsing.",
      "faq.q2": "Which audio formats are supported?",
      "faq.a2": "For direct downloads, DiskTone supports <strong>MP3, M4A, and WAV</strong> files linked by a direct HTTP/HTTPS URL. For your system music library, available formats depend on what iOS already stores on your device.",
      "faq.q3": "Why can't I download from a music platform link?",
      "faq.a3": "DiskTone only accepts direct links that point to an audio file (for example, ending in .mp3, .m4a, or .wav). It cannot parse Spotify, Apple Music, YouTube, or other streaming or web pages. Use a URL that downloads the file directly.",
      "faq.q4": "Does DiskTone work offline?",
      "faq.a4": "Yes. Playback of your system library and previously downloaded tracks works without an internet connection. Downloading new files requires network access; you can choose whether cellular data is allowed in Settings.",
      "faq.q5": "How do I report a bug or request a feature?",
      "faq.a5": "Email us at <a href=\"mailto:dengcheez@gmail.com\">dengcheez@gmail.com</a> with a description of the issue, your iOS version, and device model. Screenshots or screen recordings are helpful.",
      "faq.q6": "How can I delete my data?",
      "faq.a6": "Delete individual downloaded tracks within the app, or uninstall DiskTone to remove all downloaded files, local indexes, and app settings. DiskTone does not maintain a remote account, so no server-side deletion is needed. See our <a href=\"privacy.html\">Privacy Policy</a> for details.",
      "contact.title": "Still need help?",
      "contact.text": "Our support team typically responds within 1–2 business days. Include your device model and iOS version for faster assistance.",
      "contact.note": "DiskTone Support · English, 简体中文 & 繁體中文",
      "footer.copyright": "© 2026 DiskTone. All rights reserved.",
      "footer.privacy": "Privacy Policy",
      "hero.eyebrow.privacy": "Legal",
      "hero.title.privacy": "Privacy <em>Policy</em>",
      "hero.lead.privacy": "DiskTone is built around local playback. This policy explains what data the app uses and what stays on your device.",
      "privacy.meta": "Effective date: August 21, 2026 · App version 1.0",
      "privacy.summary": "<strong>Summary:</strong> DiskTone does not require an account, does not track you, and does not collect personal data for analytics or advertising. Music stays on your device.",
      "privacy.s1.title": "1. Introduction",
      "privacy.s1.p1": "DiskTone (\"we\", \"our\", or \"the app\") is a local music player for iOS. This Privacy Policy describes how the app handles information when you use it. By using DiskTone, you agree to the practices described here.",
      "privacy.s2.title": "2. Information We Do Not Collect",
      "privacy.s2.p1": "DiskTone is designed to operate without collecting personal data. We do not:",
      "privacy.s2.l1": "Require you to create an account or sign in",
      "privacy.s2.l2": "Collect analytics, crash reports, or usage statistics through third-party SDKs",
      "privacy.s2.l3": "Display advertisements",
      "privacy.s2.l4": "Track you across apps or websites",
      "privacy.s2.l5": "Upload your music, listening history, or library metadata to our servers",
      "privacy.s2.l6": "Sync your data to the cloud",
      "privacy.s2.p2": "Our App Store privacy label reflects this: DiskTone declares that it does not track users and does not collect data types linked to you.",
      "privacy.s3.title": "3. Information Stored Locally on Your Device",
      "privacy.s3.p1": "The app stores the following data only on your device to provide its features:",
      "privacy.s3.l1": "<strong>Downloaded audio files</strong> — saved in the app's private storage when you download from a direct link you provide",
      "privacy.s3.l2": "<strong>Download index</strong> — title, artist, album, duration, and play timestamps for tracks you downloaded through the app",
      "privacy.s3.l3": "<strong>App preferences</strong> — settings such as whether cellular downloads are allowed and whether to auto-play after a download completes",
      "privacy.s3.p2": "This data remains on your device and is not transmitted to us.",
      "privacy.s4.title": "4. Access to Your Music Library",
      "privacy.s4.p1": "With your permission, DiskTone can read your device's system music library to browse and play songs, albums, and artists. The app reads metadata such as title, artist, album, duration, and artwork for display and playback.",
      "privacy.s4.p2": "DiskTone does not copy system library files to external servers. Playback of system library items uses iOS system APIs. You can revoke library access at any time in <strong>Settings → Privacy &amp; Security → Media &amp; Apple Music</strong> on your device.",
      "privacy.s5.title": "5. Network Usage",
      "privacy.s5.p1": "DiskTone connects to the internet only when you choose to download audio from a direct HTTP or HTTPS link. The download destination is the URL you enter — we do not operate a fixed backend service for music delivery.",
      "privacy.s5.p2": "Supported direct download formats are <strong>MP3, M4A, and WAV</strong>. The app does not parse music streaming services or general web pages. Whether downloads use Wi‑Fi or cellular data is controlled by your in-app setting.",
      "privacy.s6.title": "6. Data Sharing",
      "privacy.s6.p1": "We do not sell, rent, or share your personal information with third parties for marketing purposes. Because DiskTone does not collect personal data on our servers, there is no user database to share.",
      "privacy.s6.p2": "When you download a file, your device communicates directly with the server hosting that URL. That server is chosen by you, not by DiskTone.",
      "privacy.s7.title": "7. Third-Party Components",
      "privacy.s7.p1": "DiskTone includes open-source libraries used for user interface layout. These components do not receive your music library, download history, or personal identifiers for analytics or advertising.",
      "privacy.s8.title": "8. Children's Privacy",
      "privacy.s8.p1": "DiskTone is not directed at children under 13, and we do not knowingly collect personal information from children. If you believe a child has provided personal information through the app, please contact us and we will assist with deletion of any locally stored app data.",
      "privacy.s9.title": "9. Your Choices and Data Deletion",
      "privacy.s9.p1": "You can manage your data as follows:",
      "privacy.s9.l1": "<strong>Revoke music library access</strong> — in iOS Settings",
      "privacy.s9.l2": "<strong>Remove downloaded tracks</strong> — delete items within the app",
      "privacy.s9.l3": "<strong>Remove all app data</strong> — uninstall DiskTone from your device",
      "privacy.s9.p2": "Uninstalling the app deletes downloaded files, local indexes, and app preferences stored on your device.",
      "privacy.s10.title": "10. Data Security",
      "privacy.s10.p1": "Downloaded files and app data are stored in the app's sandboxed container on iOS, protected by the operating system's access controls. No security measure is perfect, but we do not expose your library to external services operated by us.",
      "privacy.s11.title": "11. Changes to This Policy",
      "privacy.s11.p1": "We may update this Privacy Policy from time to time. When we do, we will revise the effective date at the top of this page. Continued use of the app after changes constitutes acceptance of the updated policy.",
      "privacy.s12.title": "12. Contact Us",
      "privacy.s12.p1": "If you have questions about this Privacy Policy or how DiskTone handles data, contact us at <a href=\"mailto:dengcheez@gmail.com\">dengcheez@gmail.com</a>."
    },
    "zh-Hans": {
      "meta.support.title": "DiskTone — 技术支持",
      "meta.support.description": "DiskTone 技术支持 — 获取 iOS 音乐播放相关帮助。",
      "meta.privacy.title": "DiskTone — 隐私政策",
      "meta.privacy.description": "DiskTone 隐私政策 — 了解我们如何处理您的数据。",
      "nav.aria": "网站导航",
      "nav.about": "关于",
      "nav.faq": "常见问题",
      "nav.privacy": "隐私",
      "nav.contact": "联系",
      "nav.support": "支持",
      "brand.alt": "DiskTone 应用图标",
      "lang.aria": "语言",
      "hero.eyebrow.support": "技术支持",
      "hero.title.support": "我们随时为您<em>提供帮助</em>",
      "hero.lead.support": "欢迎访问 DiskTone 官方支持页面。在这里查找常见问题解答，或直接联系我们的团队。",
      "about.label": "关于 DiskTone",
      "about.title": "设备上的音乐，优雅播放",
      "about.intro": "DiskTone 是一款 iOS 本地音乐播放器。浏览系统音乐资料库、通过音频直链下载歌曲，并支持后台播放与锁屏控制 — 无需注册账号。",
      "about.card1.title": "系统音乐资料库",
      "about.card1.text": "经您授权后，通过原生 iOS 播放浏览和播放设备音乐资料库中的歌曲、专辑与艺人。",
      "about.card2.title": "直链下载",
      "about.card2.text": "粘贴 MP3、M4A 或 WAV 文件的 HTTP/HTTPS 直链，即可下载到应用内离线播放。",
      "about.card3.title": "隐私优先",
      "about.card3.text": "音乐仅保存在本机。无账号、无云同步、无数据分析，也不解析音乐平台或普通网页链接。",
      "faq.label": "帮助中心",
      "faq.title": "常见问题",
      "faq.intro": "最常见支持问题的快速解答。",
      "faq.q1": "如何向 DiskTone 添加音乐？",
      "faq.a1": "有两种方式：（1）授权访问系统音乐资料库，让 DiskTone 浏览并播放已有曲目；（2）在资料库中点击下载按钮，粘贴 MP3、M4A 或 WAV 文件的直链。DiskTone 不支持音乐平台链接或普通网页解析。",
      "faq.q2": "支持哪些音频格式？",
      "faq.a2": "直链下载支持通过 HTTP/HTTPS 直链的 <strong>MP3、M4A 和 WAV</strong> 文件。系统音乐资料库的可播放格式取决于 iOS 设备上已有的媒体类型。",
      "faq.q3": "为什么无法从音乐平台链接下载？",
      "faq.a3": "DiskTone 仅接受指向音频文件的直链（例如以 .mp3、.m4a 或 .wav 结尾）。无法解析 Spotify、Apple Music、YouTube 等流媒体或网页。请使用可直接下载文件的 URL。",
      "faq.q4": "DiskTone 可以离线使用吗？",
      "faq.a4": "可以。系统资料库和已下载曲目的播放无需网络连接。下载新文件需要网络；是否允许使用蜂窝数据可在设置中控制。",
      "faq.q5": "如何报告 Bug 或提出功能建议？",
      "faq.a5": "请发送邮件至 <a href=\"mailto:dengcheez@gmail.com\">dengcheez@gmail.com</a>，说明问题、iOS 版本和设备型号。截图或录屏会很有帮助。",
      "faq.q6": "如何删除我的数据？",
      "faq.a6": "可在应用内删除单首已下载曲目，或卸载 DiskTone 以移除所有下载文件、本地索引和应用设置。DiskTone 没有远程账号，无需服务器端删除。详情请参阅<a href=\"privacy.html\">隐私政策</a>。",
      "contact.title": "仍需帮助？",
      "contact.text": "支持团队通常在 1–2 个工作日内回复。请附上设备型号和 iOS 版本以便更快处理。",
      "contact.note": "DiskTone 支持 · English、简体中文 & 繁體中文",
      "footer.copyright": "© 2026 DiskTone. 保留所有权利。",
      "footer.privacy": "隐私政策",
      "hero.eyebrow.privacy": "法律",
      "hero.title.privacy": "隐私<em>政策</em>",
      "hero.lead.privacy": "DiskTone 以本地播放为核心。本政策说明应用使用哪些数据，以及哪些信息始终保留在您的设备上。",
      "privacy.meta": "生效日期：2026 年 8 月 21 日 · 应用版本 1.0",
      "privacy.summary": "<strong>摘要：</strong>DiskTone 无需账号、不追踪用户、不收集用于分析或广告的个人数据。音乐仅保存在您的设备上。",
      "privacy.s1.title": "1. 引言",
      "privacy.s1.p1": "DiskTone（「我们」或「本应用」）是一款 iOS 本地音乐播放器。本隐私政策说明您使用本应用时如何处理相关信息。使用 DiskTone 即表示您同意本政策所述做法。",
      "privacy.s2.title": "2. 我们不收集的信息",
      "privacy.s2.p1": "DiskTone 的设计目标是不收集个人数据。我们不会：",
      "privacy.s2.l1": "要求您创建账号或登录",
      "privacy.s2.l2": "通过第三方 SDK 收集分析、崩溃报告或使用统计",
      "privacy.s2.l3": "展示广告",
      "privacy.s2.l4": "跨应用或网站追踪您",
      "privacy.s2.l5": "将您的音乐、播放记录或资料库元数据上传至我们的服务器",
      "privacy.s2.l6": "将您的数据同步至云端",
      "privacy.s2.p2": "App Store 隐私标签与此一致：DiskTone 声明不追踪用户，且不收集与您关联的数据类型。",
      "privacy.s3.title": "3. 仅存储在您设备上的信息",
      "privacy.s3.p1": "为提供功能，应用仅在您的设备上存储以下数据：",
      "privacy.s3.l1": "<strong>已下载的音频文件</strong> — 当您通过提供的直链下载时，保存在应用私有存储中",
      "privacy.s3.l2": "<strong>下载索引</strong> — 通过应用下载的曲目的标题、艺人、专辑、时长及播放时间戳",
      "privacy.s3.l3": "<strong>应用偏好设置</strong> — 例如是否允许蜂窝下载、下载完成后是否自动播放",
      "privacy.s3.p2": "这些数据保留在您的设备上，不会传输给我们。",
      "privacy.s4.title": "4. 访问您的音乐资料库",
      "privacy.s4.p1": "经您授权，DiskTone 可读取设备系统音乐资料库以浏览和播放歌曲、专辑与艺人。应用读取标题、艺人、专辑、时长和封面等元数据用于展示和播放。",
      "privacy.s4.p2": "DiskTone 不会将系统资料库文件复制到外部服务器。系统资料库条目通过 iOS 系统 API 播放。您可随时在设备的 <strong>设置 → 隐私与安全性 → 媒体与 Apple Music</strong> 中撤销资料库访问权限。",
      "privacy.s5.title": "5. 网络使用",
      "privacy.s5.p1": "DiskTone 仅在您选择通过 HTTP 或 HTTPS 直链下载音频时连接互联网。下载目标为您输入的 URL — 我们不运营固定的音乐分发后端服务。",
      "privacy.s5.p2": "支持的直链下载格式为 <strong>MP3、M4A 和 WAV</strong>。应用不解析音乐流媒体服务或普通网页。下载使用 Wi‑Fi 或蜂窝数据由应用内设置控制。",
      "privacy.s6.title": "6. 数据共享",
      "privacy.s6.p1": "我们不会出于营销目的向第三方出售、出租或共享您的个人信息。由于 DiskTone 不在我们的服务器上收集个人数据，因此不存在可共享的用户数据库。",
      "privacy.s6.p2": "当您下载文件时，您的设备直接与托管该 URL 的服务器通信。该服务器由您选择，而非 DiskTone。",
      "privacy.s7.title": "7. 第三方组件",
      "privacy.s7.p1": "DiskTone 包含用于界面布局的开源库。这些组件不会接收您的音乐资料库、下载历史或个人标识符用于分析或广告。",
      "privacy.s8.title": "8. 儿童隐私",
      "privacy.s8.p1": "DiskTone 不面向 13 岁以下儿童，且我们不会故意收集儿童的个人信息。如您认为儿童通过本应用提供了个人信息，请联系我们，我们将协助删除本地存储的应用数据。",
      "privacy.s9.title": "9. 您的选择与数据删除",
      "privacy.s9.p1": "您可以通过以下方式管理数据：",
      "privacy.s9.l1": "<strong>撤销音乐资料库访问</strong> — 在 iOS 设置中操作",
      "privacy.s9.l2": "<strong>删除已下载曲目</strong> — 在应用内删除",
      "privacy.s9.l3": "<strong>删除全部应用数据</strong> — 从设备卸载 DiskTone",
      "privacy.s9.p2": "卸载应用将删除设备上存储的下载文件、本地索引和应用偏好设置。",
      "privacy.s10.title": "10. 数据安全",
      "privacy.s10.p1": "下载文件和应用数据存储在 iOS 沙盒容器中，受操作系统访问控制保护。没有任何安全措施是完美的，但我们不会将您的资料库暴露给我们运营的外部服务。",
      "privacy.s11.title": "11. 政策变更",
      "privacy.s11.p1": "我们可能不时更新本隐私政策。更新时，我们将修订本页顶部的生效日期。变更后继续使用应用即表示接受更新后的政策。",
      "privacy.s12.title": "12. 联系我们",
      "privacy.s12.p1": "如对本隐私政策或 DiskTone 的数据处理方式有疑问，请联系 <a href=\"mailto:dengcheez@gmail.com\">dengcheez@gmail.com</a>。"
    },
    "zh-Hant": {
      "meta.support.title": "DiskTone — 技術支援",
      "meta.support.description": "DiskTone 技術支援 — 取得 iOS 音樂播放相關協助。",
      "meta.privacy.title": "DiskTone — 隱私權政策",
      "meta.privacy.description": "DiskTone 隱私權政策 — 了解我們如何處理您的資料。",
      "nav.aria": "網站導覽",
      "nav.about": "關於",
      "nav.faq": "常見問題",
      "nav.privacy": "隱私",
      "nav.contact": "聯絡",
      "nav.support": "支援",
      "brand.alt": "DiskTone App 圖示",
      "lang.aria": "語言",
      "hero.eyebrow.support": "技術支援",
      "hero.title.support": "我們隨時為您<em>提供協助</em>",
      "hero.lead.support": "歡迎造訪 DiskTone 官方支援頁面。在此查找常見問題解答，或直接聯絡我們的團隊。",
      "about.label": "關於 DiskTone",
      "about.title": "裝置上的音樂，優雅播放",
      "about.intro": "DiskTone 是一款 iOS 本機音樂播放器。瀏覽系統音樂資料庫、透過音訊直連下載歌曲，並支援背景播放與鎖定畫面控制 — 無需註冊帳號。",
      "about.card1.title": "系統音樂資料庫",
      "about.card1.text": "經您授權後，透過原生 iOS 播放瀏覽和播放裝置音樂資料庫中的歌曲、專輯與藝人。",
      "about.card2.title": "直連下載",
      "about.card2.text": "貼上 MP3、M4A 或 WAV 檔案的 HTTP/HTTPS 直連，即可下載到 App 內離線播放。",
      "about.card3.title": "隱私優先",
      "about.card3.text": "音樂只會儲存在本機。無帳號、無雲端同步、無資料分析，也不解析音樂平台或一般網頁連結。",
      "faq.label": "說明中心",
      "faq.title": "常見問題",
      "faq.intro": "最常見支援問題的快速解答。",
      "faq.q1": "如何向 DiskTone 新增音樂？",
      "faq.a1": "有兩種方式：（1）授權存取系統音樂資料庫，讓 DiskTone 瀏覽並播放已有曲目；（2）在資料庫中點按下載按鈕，貼上 MP3、M4A 或 WAV 檔案的直連。DiskTone 不支援音樂平台連結或一般網頁解析。",
      "faq.q2": "支援哪些音訊格式？",
      "faq.a2": "直連下載支援透過 HTTP/HTTPS 直連的 <strong>MP3、M4A 和 WAV</strong> 檔案。系統音樂資料庫的可播放格式取決於 iOS 裝置上已有的媒體類型。",
      "faq.q3": "為什麼無法從音樂平台連結下載？",
      "faq.a3": "DiskTone 僅接受指向音訊檔案的直連（例如以 .mp3、.m4a 或 .wav 結尾）。無法解析 Spotify、Apple Music、YouTube 等串流或網頁。請使用可直接下載檔案的 URL。",
      "faq.q4": "DiskTone 可以離線使用嗎？",
      "faq.a4": "可以。系統資料庫和已下載曲目的播放無需網路連線。下載新檔案需要網路；是否允許使用行動數據可在設定中控制。",
      "faq.q5": "如何回報 Bug 或提出功能建議？",
      "faq.a5": "請寄信至 <a href=\"mailto:dengcheez@gmail.com\">dengcheez@gmail.com</a>，說明問題、iOS 版本和裝置型號。截圖或錄影會很有幫助。",
      "faq.q6": "如何刪除我的資料？",
      "faq.a6": "可在 App 內刪除單首已下載曲目，或解除安裝 DiskTone 以移除所有下載檔案、本機索引和 App 設定。DiskTone 沒有遠端帳號，無需伺服器端刪除。詳情請參閱<a href=\"privacy.html\">隱私權政策</a>。",
      "contact.title": "仍需協助？",
      "contact.text": "支援團隊通常在 1–2 個工作天內回覆。請附上裝置型號和 iOS 版本以便更快處理。",
      "contact.note": "DiskTone 支援 · English、简体中文 & 繁體中文",
      "footer.copyright": "© 2026 DiskTone. 保留所有權利。",
      "footer.privacy": "隱私權政策",
      "hero.eyebrow.privacy": "法律",
      "hero.title.privacy": "隱私<em>政策</em>",
      "hero.lead.privacy": "DiskTone 以本機播放為核心。本政策說明 App 使用哪些資料，以及哪些資訊始終保留在您的裝置上。",
      "privacy.meta": "生效日期：2026 年 8 月 21 日 · App 版本 1.0",
      "privacy.summary": "<strong>摘要：</strong>DiskTone 無需帳號、不追蹤使用者、不收集用於分析或廣告的個人資料。音樂只會儲存在您的裝置上。",
      "privacy.s1.title": "1. 引言",
      "privacy.s1.p1": "DiskTone（「我們」或「本 App」）是一款 iOS 本機音樂播放器。本隱私權政策說明您使用本 App 時如何處理相關資訊。使用 DiskTone 即表示您同意本政策所述做法。",
      "privacy.s2.title": "2. 我們不收集的資訊",
      "privacy.s2.p1": "DiskTone 的設計目標是不收集個人資料。我們不會：",
      "privacy.s2.l1": "要求您建立帳號或登入",
      "privacy.s2.l2": "透過第三方 SDK 收集分析、當機報告或使用統計",
      "privacy.s2.l3": "展示廣告",
      "privacy.s2.l4": "跨 App 或網站追蹤您",
      "privacy.s2.l5": "將您的音樂、播放紀錄或資料庫中繼資料上傳至我們的伺服器",
      "privacy.s2.l6": "將您的資料同步至雲端",
      "privacy.s2.p2": "App Store 隱私標籤與此一致：DiskTone 聲明不追蹤使用者，且不收集與您關聯的資料類型。",
      "privacy.s3.title": "3. 僅儲存在您裝置上的資訊",
      "privacy.s3.p1": "為提供功能，App 僅在您的裝置上儲存以下資料：",
      "privacy.s3.l1": "<strong>已下載的音訊檔案</strong> — 當您透過提供的直連下載時，儲存在 App 私有儲存空間中",
      "privacy.s3.l2": "<strong>下載索引</strong> — 透過 App 下載的曲目的標題、藝人、專輯、時長及播放時間戳",
      "privacy.s3.l3": "<strong>App 偏好設定</strong> — 例如是否允許行動數據下載、下載完成後是否自動播放",
      "privacy.s3.p2": "這些資料保留在您的裝置上，不會傳輸給我們。",
      "privacy.s4.title": "4. 存取您的音樂資料庫",
      "privacy.s4.p1": "經您授權，DiskTone 可讀取裝置系統音樂資料庫以瀏覽和播放歌曲、專輯與藝人。App 讀取標題、藝人、專輯、時長和封面等詮釋資料用於展示和播放。",
      "privacy.s4.p2": "DiskTone 不會將系統資料庫檔案複製到外部伺服器。系統資料庫項目透過 iOS 系統 API 播放。您可隨時在裝置的 <strong>設定 → 隱私權與安全性 → 媒體與 Apple Music</strong> 中撤銷資料庫存取權限。",
      "privacy.s5.title": "5. 網路使用",
      "privacy.s5.p1": "DiskTone 僅在您選擇透過 HTTP 或 HTTPS 直連下載音訊時連線網際網路。下載目標為您輸入的 URL — 我們不營運固定的音樂分發後端服務。",
      "privacy.s5.p2": "支援的直連下載格式為 <strong>MP3、M4A 和 WAV</strong>。App 不解析音樂串流服務或一般網頁。下載使用 Wi‑Fi 或行動數據由 App 內設定控制。",
      "privacy.s6.title": "6. 資料共享",
      "privacy.s6.p1": "我們不會出於行銷目的向第三方出售、出租或共享您的個人資訊。由於 DiskTone 不在我們的伺服器上收集個人資料，因此不存在可共享的使用者資料庫。",
      "privacy.s6.p2": "當您下載檔案時，您的裝置直接與託管該 URL 的伺服器通訊。該伺服器由您選擇，而非 DiskTone。",
      "privacy.s7.title": "7. 第三方元件",
      "privacy.s7.p1": "DiskTone 包含用於介面排版的開源函式庫。這些元件不會接收您的音樂資料庫、下載紀錄或個人識別碼用於分析或廣告。",
      "privacy.s8.title": "8. 兒童隱私",
      "privacy.s8.p1": "DiskTone 不面向 13 歲以下兒童，且我們不會故意收集兒童的個人資訊。如您認為兒童透過本 App 提供了個人資訊，請聯絡我們，我們將協助刪除本機儲存的 App 資料。",
      "privacy.s9.title": "9. 您的選擇與資料刪除",
      "privacy.s9.p1": "您可以透過以下方式管理資料：",
      "privacy.s9.l1": "<strong>撤銷音樂資料庫存取</strong> — 在 iOS 設定中操作",
      "privacy.s9.l2": "<strong>刪除已下載曲目</strong> — 在 App 內刪除",
      "privacy.s9.l3": "<strong>刪除全部 App 資料</strong> — 從裝置解除安裝 DiskTone",
      "privacy.s9.p2": "解除安裝 App 將刪除裝置上儲存的下載檔案、本機索引和 App 偏好設定。",
      "privacy.s10.title": "10. 資料安全",
      "privacy.s10.p1": "下載檔案和 App 資料儲存在 iOS 沙盒容器中，受作業系統存取控制保護。沒有任何安全措施是完美的，但我們不會將您的資料庫暴露給我們營運的外部服務。",
      "privacy.s11.title": "11. 政策變更",
      "privacy.s11.p1": "我們可能不時更新本隱私權政策。更新時，我們將修訂本頁頂部的生效日期。變更後繼續使用 App 即表示接受更新後的政策。",
      "privacy.s12.title": "12. 聯絡我們",
      "privacy.s12.p1": "如對本隱私權政策或 DiskTone 的資料處理方式有疑問，請聯絡 <a href=\"mailto:dengcheez@gmail.com\">dengcheez@gmail.com</a>。"
    }
  };

  function normalizeLang(lang) {
    if (!lang) return "en";
    var lower = lang.toLowerCase();
    if (lower === "zh-hans" || lower === "zh-cn" || lower === "zh-sg") return "zh-Hans";
    if (lower === "zh-hant" || lower === "zh-tw" || lower === "zh-hk" || lower === "zh-mo") return "zh-Hant";
    if (lower.indexOf("zh") === 0) return "zh-Hans";
    return SUPPORTED.indexOf(lang) !== -1 ? lang : "en";
  }

  function detectLang() {
    var params = new URLSearchParams(window.location.search);
    var fromUrl = params.get("lang");
    if (fromUrl) return normalizeLang(fromUrl);

    try {
      var stored = localStorage.getItem(STORAGE_KEY);
      if (stored) return normalizeLang(stored);
    } catch (e) {}

    var candidates = navigator.languages && navigator.languages.length
      ? navigator.languages
      : [navigator.language || "en"];

    for (var i = 0; i < candidates.length; i++) {
      var candidate = candidates[i].toLowerCase();
      if (candidate.indexOf("en") === 0) return "en";
      var resolved = normalizeLang(candidates[i]);
      if (resolved === "zh-Hans" || resolved === "zh-Hant") return resolved;
    }

    return "en";
  }

  function translate(lang, key) {
    var bundle = messages[lang] || messages.en;
    return bundle[key] != null ? bundle[key] : messages.en[key] || "";
  }

  function syncLangToUrl(lang) {
    var url = new URL(window.location.href);
    if (lang === "en") {
      url.searchParams.delete("lang");
    } else {
      url.searchParams.set("lang", lang);
    }
    window.history.replaceState(null, "", url.toString());
  }

  function updatePageLinks(lang) {
    document.querySelectorAll("a[href]").forEach(function (a) {
      var href = a.getAttribute("href");
      if (!href || href.indexOf("mailto:") === 0 || href.charAt(0) === "#") return;

      var hashIndex = href.indexOf("#");
      var hash = hashIndex >= 0 ? href.slice(hashIndex) : "";
      var path = hashIndex >= 0 ? href.slice(0, hashIndex) : href;
      var queryIndex = path.indexOf("?");
      var base = queryIndex >= 0 ? path.slice(0, queryIndex) : path;

      if (base !== "index.html" && base !== "privacy.html" && base.indexOf("/index.html") === -1 && base.indexOf("/privacy.html") === -1) {
        return;
      }

      if (lang === "en") {
        a.setAttribute("href", base + hash);
      } else {
        a.setAttribute("href", base + "?lang=" + encodeURIComponent(lang) + hash);
      }
    });
  }

  function applyLang(lang) {
    var page = document.body.getAttribute("data-page") || "support";
    document.documentElement.lang = lang === "zh-Hans" ? "zh-Hans" : lang === "zh-Hant" ? "zh-Hant" : "en";

    var titleKey = page === "privacy" ? "meta.privacy.title" : "meta.support.title";
    var descKey = page === "privacy" ? "meta.privacy.description" : "meta.support.description";
    document.title = translate(lang, titleKey);

    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", translate(lang, descKey));

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      el.textContent = translate(lang, el.getAttribute("data-i18n"));
    });

    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      el.innerHTML = translate(lang, el.getAttribute("data-i18n-html"));
    });

    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      el.setAttribute("aria-label", translate(lang, el.getAttribute("data-i18n-aria")));
    });

    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
      el.setAttribute("alt", translate(lang, el.getAttribute("data-i18n-alt")));
    });

    document.querySelectorAll(".lang-switch button").forEach(function (btn) {
      var isActive = btn.getAttribute("data-lang") === lang;
      btn.classList.toggle("is-active", isActive);
      btn.setAttribute("aria-pressed", isActive ? "true" : "false");
    });

    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {}

    syncLangToUrl(lang);
    updatePageLinks(lang);
  }

  function initLangSwitcher(lang) {
    document.querySelectorAll(".lang-switch button").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var next = normalizeLang(btn.getAttribute("data-lang"));
        applyLang(next);
      });
    });
    applyLang(lang);
  }

  document.addEventListener("DOMContentLoaded", function () {
    initLangSwitcher(detectLang());
  });
})();
