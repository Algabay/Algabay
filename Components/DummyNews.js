import React from "react";
const newsDataPath = "./news.json";

const DummyNews = () => {
  const newsData = [
    {
      title:
        "Bluesky changed its logo and now lets everyone view posts, even without an account",
      description:
        "Bluesky changed its logo and now lets everyone view posts, even without an account",
      urlToImage:
        "https://s.yimg.com/ny/api/res/1.2/w6sUHrT11QSKficQReS8Kg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU-/https://s.yimg.com/os/creatr-uploaded-images/2023-12/9a321f80-a1b6-11ee-aefd-07ebdd04771f",
    },
    {
      title:
        "Sorry Elon: Chinese Company Overtakes Tesla as Most Popular Electric Carmaker",
      description:
        "Sorry Elon: Chinese Company Overtakes Tesla as Most Popular Electric Carmaker",
      urlToImage:
        "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/da32ec09daf525f85ad8adb6ec08ebee.jpg",
    },
    {
      title:
        "Nvidia’s stellar 2023 performance: A decade’s best in stock market",
      description:
        "Nvidia’s stellar 2023 performance: A decade’s best in stock market",
      urlToImage:
        "https://readwrite.com/wp-content/uploads/2023/07/EUs-End-Semiconductor-Shortages.jpg",
    },
    {
      title: "Etsy cuts 11% of staff and stock price tumbles",
      description: "Etsy cuts 11% of staff and stock price tumbles",
      urlToImage:
        "https://readwrite.com/wp-content/uploads/2023/12/Etsy-cuts-11-of-staff.jpg",
    },
    {
      title: "China gaming laws: Tencent stock plummets amid crackdown fears",
      description:
        "China gaming laws: Tencent stock plummets amid crackdown fears",
      urlToImage:
        "https://readwrite.com/wp-content/uploads/2023/12/edward-he-uKyzXEc2k_s-unsplash-scaled.jpg",
    },
    {
      title:
        "ASML stock price dips as Netherlands revokes China export license",
      description:
        "ASML stock price dips as Netherlands revokes China export license",
      urlToImage:
        "https://readwrite.com/wp-content/uploads/2024/01/main-board-89049_1280.jpg",
    },
    {
      title: "TikTok owner ByteDance offers to buy back billions in stock",
      description:
        "TikTok owner ByteDance offers to buy back billions in stock",
      urlToImage:
        "https://readwrite.com/wp-content/uploads/2023/12/tiktok-5064078_1280.jpg",
    },
    {
      title: "Gun stock camera rig lets you literally shoot your photographs",
      description:
        "Gun stock camera rig lets you literally shoot your photographs",
      urlToImage:
        "https://i0.wp.com/boingboing.net/wp-content/uploads/2023/12/maxresdefault-252.jpg?fit=1200%2C675&ssl=1",
    },
    {
      title: "Stock-market gurus predicted a grim 2023. They were dead wrong.",
      description:
        "Stock-market gurus predicted a grim 2023. They were dead wrong.",
      urlToImage:
        "https://i.insider.com/6565c573fe5bc6545ebcd3e8?width=1200&format=jpeg",
    },
    {
      title: "Apple appeals ban on Watch Series 9 and Ultra 2",
      description: "Apple appeals ban on Watch Series 9 and Ultra 2",
      urlToImage:
        "https://s.yimg.com/ny/api/res/1.2/oQFsTYF6hWVogoCoK_B_ig--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD03OTg-/https://s.yimg.com/os/creatr-uploaded-images/2023-12/9db494b0-a415-11ee-bfba-7079485ad539",
    },
    {
      title:
        "Harvard missed out on $75 million of potential gains after selling donated stock, Bill Ackman claims",
      description:
        "Harvard missed out on $75 million of potential gains after selling donated stock, Bill Ackman claims",
      urlToImage:
        "https://i.insider.com/65790ad90ec98e92f74ed07c?width=1200&format=jpeg",
    },
    {
      title:
        "Apple market cap: History, how the price is calculated, relationship to available shares and stock price",
      description:
        "Apple market cap: History, how the price is calculated, relationship to available shares and stock price",
      urlToImage:
        "https://i.insider.com/6582f2df1c5c7b8c9a0a326b?width=1200&format=jpeg",
    },
    {
      title:
        "Nike stock plunges and takes rivals like Under Armour and Adidas with it",
      description:
        "Nike stock plunges and takes rivals like Under Armour and Adidas with it",
      urlToImage:
        "https://i.insider.com/6585bb62a79e5746976cb810?width=1200&format=jpeg",
    },
    {
      title:
        "Apple is on track to be the first $4 trillion company by the end of 2024, Wedbush says",
      description:
        "Apple is on track to be the first $4 trillion company by the end of 2024, Wedbush says",
      urlToImage:
        "https://i.insider.com/5cc8d3fae9f08a0939071a13?width=1200&format=jpeg",
    },
    {
      title: "Apple Stock Falls on Reports Watch Sales Will Be Halted",
      description: "Apple Stock Falls on Reports Watch Sales Will Be Halted",
      urlToImage: "https://images.barrons.com/im-828823/social",
    },
    {
      title: "Women in the US Are Now Stockpiling Abortion Pills",
      description: "Women in the US Are Now Stockpiling Abortion Pills",
      urlToImage:
        "https://media.wired.com/photos/6584801100dfb1ea68b5a845/191:100/w_1280,c_limit/Mifepristone-Stockpiling-Politics-1258730531.jpg",
    },
    {
      title: "Stock Markets and Social Media? Absolutely!",
      description: "Stock Markets and Social Media? Absolutely!",
      urlToImage:
        "https://blog.hubspot.com/hubfs/social%20media%20stocks.png#keepProtocol",
    },
    {
      title:
        "'The Santa Claus rally is real': Why the stock market has a good chance of hitting record highs next week",
      description:
        "'The Santa Claus rally is real': Why the stock market has a good chance of hitting record highs next week",
      urlToImage:
        "https://i.insider.com/65846cf6a79e5746976c50ed?width=1200&format=jpeg",
    },
    {
      title:
        "The stock market looks like a 'rubber band poised to snap' as investors crowd into US equities, RBA says",
      description:
        "The stock market looks like a 'rubber band poised to snap' as investors crowd into US equities, RBA says",
      urlToImage:
        "https://i.insider.com/6570d89458e7c0c29a2a6248?width=1200&format=jpeg",
    },
    {
      title:
        "Move over, Nvidia: the best-performing stock of 2023 is a battery maker that's skyrocketed nearly 600%",
      description:
        "Move over, Nvidia: the best-performing stock of 2023 is a battery maker that's skyrocketed nearly 600%",
      urlToImage:
        "https://i.insider.com/658447841c5c7b8c9a0ae940?width=1200&format=jpeg",
    },
    {
      title:
        "AMD stock price jumps as company releases AI chip to compete with Nvidia",
      description:
        "AMD stock price jumps as company releases AI chip to compete with Nvidia",
      urlToImage:
        "https://readwrite.com/wp-content/uploads/2023/12/vladimir-malyutin-sw8-yizppMs-unsplash-scaled.jpg",
    },
    {
      title:
        "Trump is now complaining that soaring stocks are 'making rich people richer' after bragging about the market's gains while president",
      description:
        "Trump is now complaining that soaring stocks are 'making rich people richer' after bragging about the market's gains while president",
      urlToImage:
        "https://i.insider.com/6477ae31df2567001837e8cc?width=1200&format=jpeg",
    },
    {
      title:
        "'The great disinflation' will set the stage for 5 Fed rate cuts in 2024, Goldman Sachs says",
      description:
        "'The great disinflation' will set the stage for 5 Fed rate cuts in 2024, Goldman Sachs says",
      urlToImage:
        "https://i.insider.com/65802c9e50edbc52a8652499?width=1200&format=jpeg",
    },
    {
      title:
        "Blood, Guns, and Broken Scooters: Inside the Chaotic Rise and Fall of Bird",
      description:
        "Blood, Guns, and Broken Scooters: Inside the Chaotic Rise and Fall of Bird",
      urlToImage:
        "https://media.wired.com/photos/658391447383b5bb09c393a0/191:100/w_1280,c_limit/Scooter_Collage_09.26.23_2400px_300dpi.jpg",
    },
    {
      title:
        "This AI stock trader engaged in insider trading — despite being instructed not to – and lied about it",
      description:
        "This AI stock trader engaged in insider trading — despite being instructed not to – and lied about it",
      urlToImage:
        "https://i.insider.com/658dea1eec62ab5daf7f63d5?width=1200&format=jpeg",
    },
    {
      title:
        "China opening its doors to the West and an AI model taking over the stock market are among the 'gray swan' events that could rattle investors in 2024, research firm says",
      description:
        "China opening its doors to the West and an AI model taking over the stock market are among the 'gray swan' events that could rattle investors in 2024, research firm says",
      urlToImage:
        "https://i.insider.com/6572f55d58e7c0c29a2ae946?width=1200&format=jpeg",
    },
    {
      title:
        "An all-time high for stocks could be a sign investors are getting ahead of themselves",
      description:
        "An all-time high for stocks could be a sign investors are getting ahead of themselves",
      urlToImage:
        "https://i.insider.com/657a34710ec98e92f74f4152?width=1200&format=jpeg",
    },
    {
      title:
        "Tim Cook net worth: How the Apple leader earns and spends his money",
      description:
        "Tim Cook net worth: How the Apple leader earns and spends his money",
      urlToImage:
        "https://i.insider.com/6585396fcefc010bea268d11?width=1200&format=jpeg",
    },
    {
      title:
        "Warren Buffett's gift of 1.5 million Berkshire Hathaway shares was the biggest donation of the year",
      description:
        "Warren Buffett's gift of 1.5 million Berkshire Hathaway shares was the biggest donation of the year",
      urlToImage:
        "https://i.insider.com/659436661c5c7b8c9a0d3d8a?width=1200&format=jpeg",
    },
    {
      title:
        "China's economy was supposed to be the comeback story of 2023. The lowest-ever foreign stock purchases didn't help make that happen.",
      description:
        "China's economy was supposed to be the comeback story of 2023. The lowest-ever foreign stock purchases didn't help make that happen.",
      urlToImage:
        "https://i.insider.com/658e4a71ab6f2ebb11f79d45?width=1200&format=jpeg",
    },
    {
      title:
        "Samsung’s new AI-enabled smart fridge can design recipes based on your dietary needs",
      description:
        "Samsung’s new AI-enabled smart fridge can design recipes based on your dietary needs",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/iwq0Hu_MKBMuPxdA_scQ2-TmOwo=/0x0:2560x1276/1200x628/filters:focal(1280x638:1281x639)/cdn.vox-cdn.com/uploads/chorus_asset/file/25189166/Screen_Shot_2023_12_27_at_12.43.24_PM.png",
    },
    {
      title:
        "Jack Ma praised a key rival. A day later, it overtook Alibaba as China's most valuable e-commerce company.",
      description:
        "Jack Ma praised a key rival. A day later, it overtook Alibaba as China's most valuable e-commerce company.",
      urlToImage:
        "https://i.insider.com/65766cd858e7c0c29a2b7a58?width=1200&format=jpeg",
    },
    {
      title:
        "Warren Buffett snaps up nearly $600 million of Occidental stock in 3 days, signaling he likes the energy group's latest deal",
      description:
        "Warren Buffett snaps up nearly $600 million of Occidental stock in 3 days, signaling he likes the energy group's latest deal",
      urlToImage:
        "https://i.insider.com/5dea2b2c695b58662c4e36e0?width=1200&format=jpeg",
    },
    {
      title: "Amazon claims record-breaking holiday sales in 2023",
      description: "Amazon claims record-breaking holiday sales in 2023",
      urlToImage:
        "https://readwrite.com/wp-content/uploads/2023/07/andrew-stickelman-4zSqHtIx8H8-unsplash.jpg",
    },
    {
      title:
        "From New York to Tokyo, Stock Markets Across the Globe Have Rallied in 2023",
      description:
        "From New York to Tokyo, Stock Markets Across the Globe Have Rallied in 2023",
      urlToImage:
        "https://api.time.com/wp-content/uploads/2023/12/AP23345653432418.jpg?quality=85",
    },
    {
      title: "People With Acne Pay a Steep Social Price, Study Finds",
      description: "People With Acne Pay a Steep Social Price, Study Finds",
      urlToImage:
        "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/c6dc4f141653718b5bf61a7112ed5a1e.jpg",
    },
    {
      title:
        "Democrats' choice to replace George Santos is lukewarm on abortion, violated federal law over 300 times with his stock trades, and once said Florida's 'Don't Say Gay' bill is 'common sense'",
      description:
        "Democrats' choice to replace George Santos is lukewarm on abortion, violated federal law over 300 times with his stock trades, and once said Florida's 'Don't Say Gay' bill is 'common sense'",
      urlToImage:
        "https://i.insider.com/657200c70ec98e92f74d2c9a?width=1200&format=jpeg",
    },
    {
      title: "3 Google features to help you get last-minute holiday gifts",
      description:
        "3 Google features to help you get last-minute holiday gifts",
      urlToImage:
        "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/12-13-23_Shopping_2.width-1300.jpg",
    },
    {
      title:
        "Who owns Apple? Vanguard, BlackRock, Berkshire Hathaway last-known biggest shareholders; 2024 proxy statement expected",
      description:
        "Who owns Apple? Vanguard, BlackRock, Berkshire Hathaway last-known biggest shareholders; 2024 proxy statement expected",
      urlToImage:
        "https://i.insider.com/6582cb561c5c7b8c9a0a25d4?width=1200&format=jpeg",
    },
    {
      title: "Figgie: Simulate stock trading with a deck of cards",
      description: "Figgie: Simulate stock trading with a deck of cards",
      urlToImage: "https://figgie.com/static/images/social-image.png",
    },
    {
      title: "SunPower’s stock tanks after going-concern warning",
      description: "SunPower’s stock tanks after going-concern warning",
      urlToImage: "https://images.mktw.net/im-875215/social",
    },
    {
      title: "Data analytics firm Alteryx agrees to $4.4B buyout deal",
      description: "Data analytics firm Alteryx agrees to $4.4B buyout deal",
      urlToImage:
        "https://readwrite.com/wp-content/uploads/2019/08/accomplished-adults-business-deal-1124065-751x719.jpg",
    },
    {
      title: "Walthamstow: Kacey Boothe's killers found guilty of murder",
      description: "Walthamstow: Kacey Boothe's killers found guilty of murder",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/165A1/production/_126335519_kaceyboothe.jpg",
    },
    {
      title:
        "Tesla's Nordic labor crisis drags on as a Danish pension fund dumps its shares in Elon Musk's EV maker",
      description:
        "Tesla's Nordic labor crisis drags on as a Danish pension fund dumps its shares in Elon Musk's EV maker",
      urlToImage:
        "https://i.insider.com/6571b49a7a3c8094d5da88bc?width=1200&format=jpeg",
    },
    {
      title:
        "How May Mobility went fully driverless while avoiding the pitfalls of robotaxis",
      description:
        "How May Mobility went fully driverless while avoiding the pitfalls of robotaxis",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/pkFBr_iyPY-68s97CIC46j7Ia2w=/0x0:4000x2250/1200x628/filters:focal(2000x1125:2001x1126)/cdn.vox-cdn.com/uploads/chorus_asset/file/25165561/May_Mobility_Sun_City_.JPG",
    },
    {
      title: "FedEx’s stock drops as company trims sales forecast",
      description: "FedEx’s stock drops as company trims sales forecast",
      urlToImage: "https://images.mktw.net/im-507706/social",
    },
    {
      title: "Worm’s rear end develops its own head, wanders off to mate",
      description: "Worm’s rear end develops its own head, wanders off to mate",
      urlToImage:
        "https://cdn.arstechnica.net/wp-content/uploads/2023/12/Screen-Shot-2023-12-08-at-2.30.22-PM-760x380.jpeg",
    },
    {
      title: "Intel’s stock sheds a bear as a key catalyst awaits",
      description: "Intel’s stock sheds a bear as a key catalyst awaits",
      urlToImage: "https://images.mktw.net/im-63559076/social",
    },
    {
      title: "Cathie Wood’s ETFs are now buying Tesla’s stock",
      description: "Cathie Wood’s ETFs are now buying Tesla’s stock",
      urlToImage: "https://images.mktw.net/im-17572622/social",
    },
    {
      title:
        "Since Elon Musk’s Twitter purchase, firm reportedly lost 72% of its value",
      description:
        "Since Elon Musk’s Twitter purchase, firm reportedly lost 72% of its value",
      urlToImage:
        "https://cdn.arstechnica.net/wp-content/uploads/2024/01/value-drop-760x380.jpg",
    },
    {
      title:
        "Bill Ackman wrote 1,600 words on X about how he's definitely not resentful towards Harvard",
      description:
        "Bill Ackman wrote 1,600 words on X about how he's definitely not resentful towards Harvard",
      urlToImage:
        "https://i.insider.com/65791d6a50edbc52a863988c?width=1200&format=jpeg",
    },
    {
      title: "Elon Musk really, really hates running a public company",
      description: "Elon Musk really, really hates running a public company",
      urlToImage:
        "https://i.insider.com/658559e71c5c7b8c9a0b5fcf?width=1200&format=jpeg",
    },
    {
      title:
        "Netflix's data dump signals a new era of transparency for the company — but don't expect other streaming sites to follow suit",
      description:
        "Netflix's data dump signals a new era of transparency for the company — but don't expect other streaming sites to follow suit",
      urlToImage:
        "https://i.insider.com/6555824f4ca513d8242a5680?width=1200&format=jpeg",
    },
    {
      title:
        "Apple Watch Series 9 and Ultra 2 Available in Apple Stores Starting Today, Online Sales to Resume Tomorrow",
      description:
        "Apple Watch Series 9 and Ultra 2 Available in Apple Stores Starting Today, Online Sales to Resume Tomorrow",
      urlToImage:
        "https://images.macrumors.com/t/GBQdcdJQVWopDyQh1iW7Psj9kcU=/2880x/article-new/2023/09/Apple-Watch-Series-9.jpg",
    },
    {
      title: "Deepfake AI-generated images that went viral in 2023",
      description: "Deepfake AI-generated images that went viral in 2023",
      urlToImage:
        "https://readwrite.com/wp-content/uploads/2023/12/Deepfake-AI-generated-2023.jpg",
    },
    {
      title: "Apple’s stock falls after ‘sell’ call from Barclays",
      description: "Apple’s stock falls after ‘sell’ call from Barclays",
      urlToImage: "https://images.mktw.net/im-08183262/social",
    },
    {
      title: "GameStop’s stock climbs more than 5%, resuming its rally",
      description: "GameStop’s stock climbs more than 5%, resuming its rally",
      urlToImage: "https://images.mktw.net/im-291978/social",
    },
    {
      title: "Buy FedEx’s stock on the big dip, analyst says",
      description: "Buy FedEx’s stock on the big dip, analyst says",
      urlToImage: "https://images.mktw.net/im-19943839/social",
    },
    {
      title:
        "From Unicorns To Zombies: Tech Startups Run Out of Time and Money",
      description:
        "From Unicorns To Zombies: Tech Startups Run Out of Time and Money",
      urlToImage: "https://a.fsdn.com/sd/topics/business_64.png",
    },
    {
      title:
        "Thanks to AI, snowstorms won't stop Walmart delivering your presents this Christmas",
      description:
        "Thanks to AI, snowstorms won't stop Walmart delivering your presents this Christmas",
      urlToImage:
        "https://i.insider.com/6582ae9a1c5c7b8c9a0a220a?width=1200&format=jpeg",
    },
    {
      title:
        "Genre Bests, Personal Top 10 Lists And More: One Last Look Back At 2023",
      description:
        "Genre Bests, Personal Top 10 Lists And More: One Last Look Back At 2023",
      urlToImage:
        "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/97297007d11430488c00f71cc22526e9.jpg",
    },
    {
      title: "The rise and fall of Olaplex",
      description: "The rise and fall of Olaplex",
      urlToImage:
        "https://i.insider.com/6581e9f7a79e5746976b1596?width=1200&format=jpeg",
    },
    {
      title: "We're a scapegoat for PPE failures, says Michelle Mone's husband",
      description:
        "We're a scapegoat for PPE failures, says Michelle Mone's husband",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/702D/production/_132071782_monestill1.jpg",
    },
    {
      title: "Spotify’s not going for Pulitzers anymore",
      description: "Spotify’s not going for Pulitzers anymore",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/oaNdxtfeU3sXEbIdR2rGWZb-sd4=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/23985252/VRG_Illo_STK130_K_Radtke_Spotify_Podcast_1.jpg",
    },
    {
      title:
        "AAPL stock closes at new record high after adding $1 trillion to market cap this year",
      description:
        "AAPL stock closes at new record high after adding $1 trillion to market cap this year",
      urlToImage:
        "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/12/AAPL-high.webp?resize=1200%2C628&quality=82&strip=all&ssl=1",
    },
    {
      title:
        "2023 Apple stock growth lags behind competitors, longest revenue decline in two decades",
      description:
        "2023 Apple stock growth lags behind competitors, longest revenue decline in two decades",
      urlToImage:
        "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/06/apple-stock-down.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    },
    {
      title: "Japanese chip gear-maker Kokusai targets Chinese growth",
      description: "Japanese chip gear-maker Kokusai targets Chinese growth",
      urlToImage:
        "https://readwrite.com/wp-content/uploads/2023/12/pexels-rfstudio-3825581-scaled.jpg",
    },
    {
      title:
        "From the stunning surge of the 'Magnificent 7' stocks to bitcoin's shock rebound, here are 8 of 2023's wildest markets stories",
      description:
        "From the stunning surge of the 'Magnificent 7' stocks to bitcoin's shock rebound, here are 8 of 2023's wildest markets stories",
      urlToImage:
        "https://i.insider.com/640b89ead81e7e0018be07d0?width=1200&format=jpeg",
    },
    {
      title:
        "From bars of 24-karat gold to huge portions of freeze-dried emergency-survival food and even caskets, here are the strangest things you can buy from Costco",
      description:
        "From bars of 24-karat gold to huge portions of freeze-dried emergency-survival food and even caskets, here are the strangest things you can buy from Costco",
      urlToImage:
        "https://i.insider.com/657327a47a3c8094d5daf2cd?width=1200&format=jpeg",
    },
    {
      title:
        "GameStop Debuts ‘Alarming’ Plan To Let Its CEO Gamble Millions On The Stock Market",
      description:
        "GameStop Debuts ‘Alarming’ Plan To Let Its CEO Gamble Millions On The Stock Market",
      urlToImage:
        "https://video-images.vice.com/articles/65720325e76ff73ea394428a/lede/1701970834331-gettyimages-1475285729.jpeg?image-resize-opts=Y3JvcD0xeHc6MC44NDI3eGg7MHh3LDAuMDY4NXhoJnJlc2l6ZT0xMjAwOiomcmVzaXplPTEyMDA6Kg",
    },
    {
      title:
        "It sure looks like corporate America isn't afraid of Joe Biden anymore",
      description:
        "It sure looks like corporate America isn't afraid of Joe Biden anymore",
      urlToImage:
        "https://i.insider.com/64ac294e6d7e02001af8a668?width=1200&format=jpeg",
    },
    {
      title:
        "Mullen’s stock rockets after large reverse-split keeps listing hopes alive",
      description:
        "Mullen’s stock rockets after large reverse-split keeps listing hopes alive",
      urlToImage: "https://images.mktw.net/im-24145996/social",
    },
    {
      title:
        "Nike's warnings on China should scare other companies that do business there",
      description:
        "Nike's warnings on China should scare other companies that do business there",
      urlToImage:
        "https://i.insider.com/6585af81cefc010bea26a87e?width=1200&format=jpeg",
    },
    {
      title:
        "This basic bean soup has been served every day in the Senate for over 100 years and symbolizes why we need more flavor in Congress",
      description:
        "This basic bean soup has been served every day in the Senate for over 100 years and symbolizes why we need more flavor in Congress",
      urlToImage:
        "https://i.insider.com/6591031eab6f2ebb11f7f7f9?width=1200&format=jpeg",
    },
    {
      title:
        "Broadcom now ranks among 10 largest U.S. companies after big 2023 stock gains",
      description:
        "Broadcom now ranks among 10 largest U.S. companies after big 2023 stock gains",
      urlToImage: "https://images.mktw.net/im-863384/social",
    },
    {
      title:
        "This record-setting stock market rally is living on borrowed time",
      description:
        "This record-setting stock market rally is living on borrowed time",
      urlToImage: "https://images.mktw.net/im-590105/social",
    },
    {
      title:
        "Moderna’s stock soars 10% to lead S&P 500 gainers as Oppenheimer upgrades to buy",
      description:
        "Moderna’s stock soars 10% to lead S&P 500 gainers as Oppenheimer upgrades to buy",
      urlToImage: "https://images.mktw.net/im-281276/social",
    },
    {
      title:
        "Why Amazon’s stock could be 2024’s biggest winner among major internet names",
      description:
        "Why Amazon’s stock could be 2024’s biggest winner among major internet names",
      urlToImage: "https://images.mktw.net/im-798704/social",
    },
    {
      title:
        "Kimberly-Clark’s stock hit by BofA downgrade, while Clorox gets an upgrade",
      description:
        "Kimberly-Clark’s stock hit by BofA downgrade, while Clorox gets an upgrade",
      urlToImage: "https://images.mktw.net/im-291697/social",
    },
    {
      title:
        "Affirm’s stock rockets after Walmart expands buy-now-pay-later option to include self-checkout purchases",
      description:
        "Affirm’s stock rockets after Walmart expands buy-now-pay-later option to include self-checkout purchases",
      urlToImage: "https://images.mktw.net/im-29616255/social",
    },
    {
      title:
        "Amazon’s stock looks to enter 2024 with a record-tying weekly winning streak",
      description:
        "Amazon’s stock looks to enter 2024 with a record-tying weekly winning streak",
      urlToImage: "https://images.mktw.net/im-39573581/social",
    },
    {
      title:
        "Fund managers most upbeat on stock market since January 2022 as S&P 500 nears record",
      description:
        "Fund managers most upbeat on stock market since January 2022 as S&P 500 nears record",
      urlToImage: "https://images.mktw.net/im-401335/social",
    },
    {
      title:
        "Tesla’s stock can rise to $1 trillion market value in 2024, analyst says",
      description:
        "Tesla’s stock can rise to $1 trillion market value in 2024, analyst says",
      urlToImage: "https://images.mktw.net/im-21147292/social",
    },
    {
      title: "These unsung stock market heroes offer 9 favorite picks for 2024",
      description:
        "These unsung stock market heroes offer 9 favorite picks for 2024",
      urlToImage: "https://images.mktw.net/im-833483/social",
    },
    {
      title:
        "Santa Claus is coming to town and bringing presents for your stock portfolio",
      description:
        "Santa Claus is coming to town and bringing presents for your stock portfolio",
      urlToImage: "https://images.mktw.net/im-41075011/social",
    },
    {
      title:
        "Stock futures show S&P 500 opening just several points shy of record high",
      description:
        "Stock futures show S&P 500 opening just several points shy of record high",
      urlToImage: "https://images.mktw.net/im-00021142/social",
    },
    {
      title: "The 10 days that moved the stock market the most in 2023",
      description: "The 10 days that moved the stock market the most in 2023",
      urlToImage: "https://images.mktw.net/im-08869333/social",
    },
    {
      title:
        "Intel’s stock on pace for biggest daily percentage gain in two months, buoyed by Israel deal",
      description:
        "Intel’s stock on pace for biggest daily percentage gain in two months, buoyed by Israel deal",
      urlToImage: "https://images.mktw.net/im-876690/social",
    },
    {
      title:
        "A broadening stock-market rally just led to this ‘fairly uncommon’ occurrence",
      description:
        "A broadening stock-market rally just led to this ‘fairly uncommon’ occurrence",
      urlToImage: "https://images.mktw.net/im-35115915/social",
    },
  ];
  return (
    <>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 mt-8 max-sm:px-6 px-20 py-8">
        {newsData.map((news, index) => (
          <div
            key={index}
            className="bg-white border border-gray-300 p-4 rounded-md shadow-md"
          >
            <img
              className="h-44 w-full px-8 max-sm:h-32 max-sm:w-full object-cover rounded-md mb-4 border border-gray-100"
              src={news.urlToImage}
              alt=" :') "
            />
            <div className="h-auto w-full py-4 px-8">
              <h6 className="text-md font-semibold mb-2">{news.title}</h6>
              <p className="text-gray-600">{news.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default DummyNews;
