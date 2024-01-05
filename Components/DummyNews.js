import React from "react";
const newsDataPath = "./news.json";

const DummyNews = () => {
  const newsData = [
    {
      title:
        "Bluesky changed its logo and now lets everyone view posts, even without an account",
      description:
        "Bluesky, the invite-only decentralized social network, is taking baby steps towards opening up to the public. CEO Jay Graber announced\r\n this week that Bluesky posts are now viewable whether a person is logged in or not, meaning you can directly share content…",
      urlToImage:
        "https://s.yimg.com/ny/api/res/1.2/w6sUHrT11QSKficQReS8Kg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU-/https://s.yimg.com/os/creatr-uploaded-images/2023-12/9a321f80-a1b6-11ee-aefd-07ebdd04771f",
    },
    {
      title:
        "Sorry Elon: Chinese Company Overtakes Tesla as Most Popular Electric Carmaker",
      description:
        "2023 was a bad year for Elon Musk. Even before his antisemitic tirade, the billionaire’s mounting failures at X/Twitter took Musk from media darling to a near-laughing stock. His bid to take SpaceX pubic is faltering after its satellite internet business Star…",
      urlToImage:
        "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/da32ec09daf525f85ad8adb6ec08ebee.jpg",
    },
    {
      title:
        "Nvidia’s stellar 2023 performance: A decade’s best in stock market",
      description:
        "Nvidia’s stock value experienced an extraordinary surge in 2023, tripling its worth and outperforming every other company in the S&P […]\nThe post Nvidia’s stellar 2023 performance: A decade’s best in stock market appeared first on ReadWrite.",
      urlToImage:
        "https://readwrite.com/wp-content/uploads/2023/07/EUs-End-Semiconductor-Shortages.jpg",
    },
    {
      title: "Etsy cuts 11% of staff and stock price tumbles",
      description:
        "The height of the holiday season is upon us, and Etsy is cutting 11% of its staff, looking to restructure […]\nThe post Etsy cuts 11% of staff and stock price tumbles appeared first on ReadWrite.",
      urlToImage:
        "https://readwrite.com/wp-content/uploads/2023/12/Etsy-cuts-11-of-staff.jpg",
    },
    {
      title: "China gaming laws: Tencent stock plummets amid crackdown fears",
      description:
        "China is set to enforce new gaming laws on the nation’s vast video game sector after fresh regulations were applied […]\nThe post China gaming laws: Tencent stock plummets amid crackdown fears appeared first on ReadWrite.",
      urlToImage:
        "https://readwrite.com/wp-content/uploads/2023/12/edward-he-uKyzXEc2k_s-unsplash-scaled.jpg",
    },
    {
      title:
        "ASML stock price dips as Netherlands revokes China export license",
      description:
        "The Dutch government has partially revoked an export license for semiconductor equipment giant ASML (Advanced Semiconductor Materials Lithography) to ship […]\nThe post ASML stock price dips as Netherlands revokes China export license appeared first on ReadWri…",
      urlToImage:
        "https://readwrite.com/wp-content/uploads/2024/01/main-board-89049_1280.jpg",
    },
    {
      title: "TikTok owner ByteDance offers to buy back billions in stock",
      description:
        "TikTok owner ByteDance will offer investors a buyback offer for their shares worth around $5 billion of the company’s stock, […]\nThe post TikTok owner ByteDance offers to buy back billions in stock appeared first on ReadWrite.",
      urlToImage:
        "https://readwrite.com/wp-content/uploads/2023/12/tiktok-5064078_1280.jpg",
    },
    {
      title: "Gun stock camera rig lets you literally shoot your photographs",
      description:
        "Have you ever wanted to shoot a photograph? Like, literally shoot one, as if you were shooting a rifle? Well now you can, thanks to the StockCam — a modified gunstock designed to work as a camera brace! Yes, really.\n\n\n\nFrom IndieGoGo:\n\n\n\n\nStockcam is a revolu…",
      urlToImage:
        "https://i0.wp.com/boingboing.net/wp-content/uploads/2023/12/maxresdefault-252.jpg?fit=1200%2C675&ssl=1",
    },
    {
      title: "Stock-market gurus predicted a grim 2023. They were dead wrong.",
      description:
        "Cooling inflation and the rise of AI helped stocks to defy Wall Street analysts' gloomy predictions this year.",
      urlToImage:
        "https://i.insider.com/6565c573fe5bc6545ebcd3e8?width=1200&format=jpeg",
    },
    {
      title: "Apple appeals ban on Watch Series 9 and Ultra 2",
      description:
        "Apple has filed an appeal to the International Trade Commission (ITC) attempting to reverse a ban on US sales of the Apple Watch Series 9 and Ultra 2, according to court records.\r\n The company’s also requesting an emergency stay on the ban until a decision is…",
      urlToImage:
        "https://s.yimg.com/ny/api/res/1.2/oQFsTYF6hWVogoCoK_B_ig--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD03OTg-/https://s.yimg.com/os/creatr-uploaded-images/2023-12/9db494b0-a415-11ee-bfba-7079485ad539",
    },
    {
      title:
        "Harvard missed out on $75 million of potential gains after selling donated stock, Bill Ackman claims",
      description:
        "Bill Ackman rejected the narrative that his crusade against Harvard in the wake of the Israel-Hamas war has been fueled by personal resentment.",
      urlToImage:
        "https://i.insider.com/65790ad90ec98e92f74ed07c?width=1200&format=jpeg",
    },
    {
      title:
        "Apple market cap: History, how the price is calculated, relationship to available shares and stock price",
      description:
        "Apple's current market cap has hit a peak of $3.1 trillion. Here's how the price is calculated and its relation to available shares and stock price.",
      urlToImage:
        "https://i.insider.com/6582f2df1c5c7b8c9a0a326b?width=1200&format=jpeg",
    },
    {
      title:
        "Nike stock plunges and takes rivals like Under Armour and Adidas with it",
      description:
        "Nike's stock plunged after the company announced $2 billion in cuts and potential layoffs.",
      urlToImage:
        "https://i.insider.com/6585bb62a79e5746976cb810?width=1200&format=jpeg",
    },
    {
      title:
        "Apple is on track to be the first $4 trillion company by the end of 2024, Wedbush says",
      description:
        'Next year will present a "golden opportunity" for investors to own Apple stock, Wedbush strategists said.',
      urlToImage:
        "https://i.insider.com/5cc8d3fae9f08a0939071a13?width=1200&format=jpeg",
    },
    {
      title: "Apple Stock Falls on Reports Watch Sales Will Be Halted",
      description:
        "The ban will include the Apple Watch Series 9 and Apple Watch Ultra 2.",
      urlToImage: "https://images.barrons.com/im-828823/social",
    },
    {
      title: "Women in the US Are Now Stockpiling Abortion Pills",
      description:
        "Some women in the US are ordering abortion pills before they’re even pregnant. But early access to medication isn’t available to those who would benefit the most.",
      urlToImage:
        "https://media.wired.com/photos/6584801100dfb1ea68b5a845/191:100/w_1280,c_limit/Mifepristone-Stockpiling-Politics-1258730531.jpg",
    },
    {
      title: "Stock Markets and Social Media? Absolutely!",
      description:
        "This year, global social media users swelled to a record-breaking 4.9 billion. Statistics like these suggest that social media stocks may be a great investment opportunity — but what are the best social media stocks to invest in?",
      urlToImage:
        "https://blog.hubspot.com/hubfs/social%20media%20stocks.png#keepProtocol",
    },
    {
      title:
        "'The Santa Claus rally is real': Why the stock market has a good chance of hitting record highs next week",
      description:
        "The Santa Claus rally phenomenon was discovered in 1972 by Yale Hirsch, creator of the Stock Trader's Almanac.",
      urlToImage:
        "https://i.insider.com/65846cf6a79e5746976c50ed?width=1200&format=jpeg",
    },
    {
      title:
        "The stock market looks like a 'rubber band poised to snap' as investors crowd into US equities, RBA says",
      description:
        "The hype around AI has sent a glut of capital toward a handful of US tech stocks, making them a riskier bet compared to global equities.",
      urlToImage:
        "https://i.insider.com/6570d89458e7c0c29a2a6248?width=1200&format=jpeg",
    },
    {
      title:
        "Move over, Nvidia: the best-performing stock of 2023 is a battery maker that's skyrocketed nearly 600%",
      description:
        "Retail traders' EV investing frenzy has powered South Korean battery maker Ecopro's shares 572% higher this year.",
      urlToImage:
        "https://i.insider.com/658447841c5c7b8c9a0ae940?width=1200&format=jpeg",
    },
    {
      title:
        "AMD stock price jumps as company releases AI chip to compete with Nvidia",
      description:
        "The stock price of Advanced Micro Devices (AMD) rose nearly 10% on Thursday (Dec.7) in the company’s best single trading […]\nThe post AMD stock price jumps as company releases AI chip to compete with Nvidia appeared first on ReadWrite.",
      urlToImage:
        "https://readwrite.com/wp-content/uploads/2023/12/vladimir-malyutin-sw8-yizppMs-unsplash-scaled.jpg",
    },
    {
      title:
        "Trump is now complaining that soaring stocks are 'making rich people richer' after bragging about the market's gains while president",
      description:
        "Trump dismissed the stock-market's breathless rally this year as a boon for the wealthy after President Biden boasted about its performance under him.",
      urlToImage:
        "https://i.insider.com/6477ae31df2567001837e8cc?width=1200&format=jpeg",
    },
    {
      title:
        "'The great disinflation' will set the stage for 5 Fed rate cuts in 2024, Goldman Sachs says",
      description:
        "The bank's latest prediction comes after central bank chair Jerome Powell's dovish comments sparked a stock-market surge.",
      urlToImage:
        "https://i.insider.com/65802c9e50edbc52a8652499?width=1200&format=jpeg",
    },
    {
      title:
        "Blood, Guns, and Broken Scooters: Inside the Chaotic Rise and Fall of Bird",
      description:
        "Bird was once valued at more than $2 billion—now it has filed for bankruptcy. This is the untold story of the contractors who risked it all to try to make the micromobility dream a reality.",
      urlToImage:
        "https://media.wired.com/photos/658391447383b5bb09c393a0/191:100/w_1280,c_limit/Scooter_Collage_09.26.23_2400px_300dpi.jpg",
    },
    {
      title:
        "This AI stock trader engaged in insider trading — despite being instructed not to – and lied about it",
      description:
        "AI may have the capacity to deceive its users when it's under pressure to succeed, a new study based around insider trading suggests.",
      urlToImage:
        "https://i.insider.com/658dea1eec62ab5daf7f63d5?width=1200&format=jpeg",
    },
    {
      title:
        "China opening its doors to the West and an AI model taking over the stock market are among the 'gray swan' events that could rattle investors in 2024, research firm says",
      description:
        "Macro Hive outlined nine low-probability, high-impact events that could rock the world economy and drive up stock-market volatility next year.",
      urlToImage:
        "https://i.insider.com/6572f55d58e7c0c29a2ae946?width=1200&format=jpeg",
    },
    {
      title:
        "An all-time high for stocks could be a sign investors are getting ahead of themselves",
      description:
        "In today's big story, we're looking at why a slew of good news for the stock market doesn't guarantee a huge 2024.",
      urlToImage:
        "https://i.insider.com/657a34710ec98e92f74f4152?width=1200&format=jpeg",
    },
    {
      title:
        "Tim Cook net worth: How the Apple leader earns and spends his money",
      description:
        "Tim Cook's net worth is estimated at $2 billion. The Apple CEO's fortune includes more than 3 million shares of Apple stock. Here's how he spends it.",
      urlToImage:
        "https://i.insider.com/6585396fcefc010bea268d11?width=1200&format=jpeg",
    },
    {
      title:
        "Warren Buffett's gift of 1.5 million Berkshire Hathaway shares was the biggest donation of the year",
      description:
        "Warren Buffett donated stock valued at $541.5 million to a foundation named after his first wife, Susan, who died in 2004.",
      urlToImage:
        "https://i.insider.com/659436661c5c7b8c9a0d3d8a?width=1200&format=jpeg",
    },
    {
      title:
        "China's economy was supposed to be the comeback story of 2023. The lowest-ever foreign stock purchases didn't help make that happen.",
      description:
        "Foreign funds bought 44 billion Chinese yuan of mainland stocks via stock connect programs with Hong Kong — the lowest ever, per Bloomberg.",
      urlToImage:
        "https://i.insider.com/658e4a71ab6f2ebb11f79d45?width=1200&format=jpeg",
    },
    {
      title:
        "Samsung’s new AI-enabled smart fridge can design recipes based on your dietary needs",
      description:
        "A new model, deemed the Bespoke 4-Door Flex Refrigerator with AI Family Hub+, includes AI upgrades and will be unveiled at CES next year.",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/iwq0Hu_MKBMuPxdA_scQ2-TmOwo=/0x0:2560x1276/1200x628/filters:focal(1280x638:1281x639)/cdn.vox-cdn.com/uploads/chorus_asset/file/25189166/Screen_Shot_2023_12_27_at_12.43.24_PM.png",
    },
    {
      title:
        "Jack Ma praised a key rival. A day later, it overtook Alibaba as China's most valuable e-commerce company.",
      description:
        "PDD's market cap is nearly $185 billion, while Alibaba's market cap is nearly $184 billion.",
      urlToImage:
        "https://i.insider.com/65766cd858e7c0c29a2b7a58?width=1200&format=jpeg",
    },
    {
      title:
        "Warren Buffett snaps up nearly $600 million of Occidental stock in 3 days, signaling he likes the energy group's latest deal",
      description:
        "Warren Buffett's Berkshire Hathaway bought 10.5 million Occidental shares in three days after the oil-and-gas company agreed to acquire CrownRock.",
      urlToImage:
        "https://i.insider.com/5dea2b2c695b58662c4e36e0?width=1200&format=jpeg",
    },
    {
      title: "Amazon claims record-breaking holiday sales in 2023",
      description:
        "In a show of retail strength, Amazon says it has broken its holiday sales record, as per reporting by Retail […]\nThe post Amazon claims record-breaking holiday sales in 2023 appeared first on ReadWrite.",
      urlToImage:
        "https://readwrite.com/wp-content/uploads/2023/07/andrew-stickelman-4zSqHtIx8H8-unsplash.jpg",
    },
    {
      title:
        "From New York to Tokyo, Stock Markets Across the Globe Have Rallied in 2023",
      description:
        "It's been a great year for stock markets around the world, with Wall Street's rally front and center.",
      urlToImage:
        "https://api.time.com/wp-content/uploads/2023/12/AP23345653432418.jpg?quality=85",
    },
    {
      title: "People With Acne Pay a Steep Social Price, Study Finds",
      description:
        "In a survey of more than 1,000 people, researchers found that people were more likely to be treated as pariahs in a variety of ways when their faces were digitally altered to have acne. The stigma associated with acne may be greater for people with severe sym…",
      urlToImage:
        "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/c6dc4f141653718b5bf61a7112ed5a1e.jpg",
    },
    {
      title:
        "Democrats' choice to replace George Santos is lukewarm on abortion, violated federal law over 300 times with his stock trades, and once said Florida's 'Don't Say Gay' bill is 'common sense'",
      description:
        "Former Rep. Tom Suozzi, a more moderate Democrat, previously launched an unsuccessful bid for governor in 2022.",
      urlToImage:
        "https://i.insider.com/657200c70ec98e92f74d2c9a?width=1200&format=jpeg",
    },
    {
      title: "3 Google features to help you get last-minute holiday gifts",
      description:
        "An image of green puffer jackets on Search shows a filter for “Get it by Dec 24”",
      urlToImage:
        "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/12-13-23_Shopping_2.width-1300.jpg",
    },
    {
      title:
        "Who owns Apple? Vanguard, BlackRock, Berkshire Hathaway last-known biggest shareholders; 2024 proxy statement expected",
      description:
        "Apple's owners include individuals and entity shareholders within the ownership structure that shape the tech giant's direction.",
      urlToImage:
        "https://i.insider.com/6582cb561c5c7b8c9a0a25d4?width=1200&format=jpeg",
    },
    {
      title: "Figgie: Simulate stock trading with a deck of cards",
      description:
        "Jane Street's fast-paced Figgie game simulates exciting elements of markets and trading",
      urlToImage: "https://figgie.com/static/images/social-image.png",
    },
    {
      title: "SunPower’s stock tanks after going-concern warning",
      description:
        "Shares of SunPower Corp. dropped more than 30% Monday after the residential solar company spooked investors with a going-concern warning in regulatory filings.",
      urlToImage: "https://images.mktw.net/im-875215/social",
    },
    {
      title: "Data analytics firm Alteryx agrees to $4.4B buyout deal",
      description:
        "Alteryx, a prominent player in the data analytics sector, has announced its acquisition by private-equity firms Clearlake Capital Group and […]\nThe post Data analytics firm Alteryx agrees to $4.4B buyout deal appeared first on ReadWrite.",
      urlToImage:
        "https://readwrite.com/wp-content/uploads/2019/08/accomplished-adults-business-deal-1124065-751x719.jpg",
    },
    {
      title: "Walthamstow: Kacey Boothe's killers found guilty of murder",
      description:
        "Kammar Henry-Richards, Kay-O, boasted about killing rival gang member Kacey Boothe in a rap video.",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/165A1/production/_126335519_kaceyboothe.jpg",
    },
    {
      title:
        "Tesla's Nordic labor crisis drags on as a Danish pension fund dumps its shares in Elon Musk's EV maker",
      description:
        "Tesla has clashed with Nordic trade unionists in recent months, with its Swedish mechanics on strike since October.",
      urlToImage:
        "https://i.insider.com/6571b49a7a3c8094d5da88bc?width=1200&format=jpeg",
    },
    {
      title:
        "How May Mobility went fully driverless while avoiding the pitfalls of robotaxis",
      description:
        "May Mobility is launching a driverless service in Arizona amid a challenging time for self-driving cars. The company’s business model is different from robotaxi ventures.",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/pkFBr_iyPY-68s97CIC46j7Ia2w=/0x0:4000x2250/1200x628/filters:focal(2000x1125:2001x1126)/cdn.vox-cdn.com/uploads/chorus_asset/file/25165561/May_Mobility_Sun_City_.JPG",
    },
    {
      title: "FedEx’s stock drops as company trims sales forecast",
      description:
        "FedEx says it expects ‘low-single-digit percentage decline’ in sales for its fiscal 2024",
      urlToImage: "https://images.mktw.net/im-507706/social",
    },
    {
      title: "Rocket Mortgage parent’s stock rocked by analyst’s sell call",
      description:
        "Shares of Rocket Cos. tumbled Wednesday toward their worst day in 14 months after Keefe, Bruyette & Woods analyst Bose George turned bearish, citing valuation and the company's weakness in the home-purchase market.",
      urlToImage: "https://images.mktw.net/im-26689193/social",
    },
    {
      title: "Worm’s rear end develops its own head, wanders off to mate",
      description: "The butt even grows its own eyes, antennae, and brain.",
      urlToImage:
        "https://cdn.arstechnica.net/wp-content/uploads/2023/12/Screen-Shot-2023-12-08-at-2.30.22-PM-760x380.jpeg",
    },
    {
      title: "Intel’s stock sheds a bear as a key catalyst awaits",
      description:
        "BofA says Intel’s plans to break out design and manufacturing financials could help investors better value the respective businesses",
      urlToImage: "https://images.mktw.net/im-63559076/social",
    },
    {
      title: "Cathie Wood’s ETFs are now buying Tesla’s stock",
      description:
        "The ARK Innovation ETF was previously a seller of Tesla stock, which is one of its largest holdings.",
      urlToImage: "https://images.mktw.net/im-17572622/social",
    },
    {
      title:
        "Since Elon Musk’s Twitter purchase, firm reportedly lost 72% of its value",
      description:
        "Fidelity cuts value of X stake, implying 72% drop since Musk paid $44 billion.",
      urlToImage:
        "https://cdn.arstechnica.net/wp-content/uploads/2024/01/value-drop-760x380.jpg",
    },
    {
      title:
        "Bill Ackman wrote 1,600 words on X about how he's definitely not resentful towards Harvard",
      description:
        'According to a New York Times article published on Tuesday, Ackman has had "years of resentment" against Harvard. Ackman took to X with his side of the story.',
      urlToImage:
        "https://i.insider.com/65791d6a50edbc52a863988c?width=1200&format=jpeg",
    },
    {
      title: "Elon Musk really, really hates running a public company",
      description:
        "Musk said on an X Spaces livestream Thursday that he often works until midnight on New Year's Eve so Tesla can meet its quarterly delivery targets.",
      urlToImage:
        "https://i.insider.com/658559e71c5c7b8c9a0b5fcf?width=1200&format=jpeg",
    },
    {
      title:
        "Netflix's data dump signals a new era of transparency for the company — but don't expect other streaming sites to follow suit",
      description:
        "Netflix says it wants to be more open about its viewership numbers. Its rivals have little incentive to do the same.",
      urlToImage:
        "https://i.insider.com/6555824f4ca513d8242a5680?width=1200&format=jpeg",
    },
    {
      title:
        "Apple Watch Series 9 and Ultra 2 Available in Apple Stores Starting Today, Online Sales to Resume Tomorrow",
      description:
        "Apple Watch Series 9 and the Apple Watch Ultra 2 are back in some of Apple's retail stores in the United States today, according to Bloomberg's Mark Gurman. Select stores will have availability today, while all stores will have the Apple Watch models back in …",
      urlToImage:
        "https://images.macrumors.com/t/GBQdcdJQVWopDyQh1iW7Psj9kcU=/2880x/article-new/2023/09/Apple-Watch-Series-9.jpg",
    },
    {
      title: "Deepfake AI-generated images that went viral in 2023",
      description:
        "In recent years, deepfake technology has developed quickly, making it harder to distinguish between fact and fiction. It’s getting harder […]\nThe post Deepfake AI-generated images that went viral in 2023 appeared first on ReadWrite.",
      urlToImage:
        "https://readwrite.com/wp-content/uploads/2023/12/Deepfake-AI-generated-2023.jpg",
    },
    {
      title: "Apple’s stock falls after ‘sell’ call from Barclays",
      description:
        'Shares of Apple Inc. are starting 2024 with a selloff, after Barclays analyst Tim Long said it was "time for a breather," citing weak hardware sales as iPhone 15 demand disappoints.',
      urlToImage: "https://images.mktw.net/im-08183262/social",
    },
    {
      title: "GameStop’s stock climbs more than 5%, resuming its rally",
      description:
        "GameStop's stock enjoyed a meme-like rally ahead of its recent fiscal third-quarter earnings.",
      urlToImage: "https://images.mktw.net/im-291978/social",
    },
    {
      title: "Buy FedEx’s stock on the big dip, analyst says",
      description:
        "FedEx's stock has fallen so much on the back of the package delivery giant's earnings miss, that it has created an attractive buying opportunity for investors, one Wall Street analyst said.",
      urlToImage: "https://images.mktw.net/im-19943839/social",
    },
    {
      title:
        "From Unicorns To Zombies: Tech Startups Run Out of Time and Money",
      description:
        "After staving off collapse by cutting costs, many young tech companies are out of options, fueling a cash bonfire. From a report: WeWork raised more than $11 billion in funding as a private company. Olive AI, a health care start-up, gathered $852 million. Con…",
      urlToImage: "https://a.fsdn.com/sd/topics/business_64.png",
    },
    {
      title:
        "Thanks to AI, snowstorms won't stop Walmart delivering your presents this Christmas",
      description:
        "Here's how the retail giant is using AI to predict sales across the US and redirect inventory.",
      urlToImage:
        "https://i.insider.com/6582ae9a1c5c7b8c9a0a220a?width=1200&format=jpeg",
    },
    {
      title:
        "Genre Bests, Personal Top 10 Lists And More: One Last Look Back At 2023",
      description:
        "This week, we continued taking stock of 2023 with looks back at how the Switch and the Steam Deck fared, our picks for the cream of the crop among shooters and role-playing games, and more juicy commentary on everything the year had to offer. Read more...",
      urlToImage:
        "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/97297007d11430488c00f71cc22526e9.jpg",
    },
    {
      title: "The rise and fall of Olaplex",
      description:
        "Olaplex started with a meeting between a haircare industry expert and two scientists. It's since battled claims that its products hurt customers' hair.",
      urlToImage:
        "https://i.insider.com/6581e9f7a79e5746976b1596?width=1200&format=jpeg",
    },
    {
      title: "We're a scapegoat for PPE failures, says Michelle Mone's husband",
      description:
        'Doug Barrowman says his family has been "treated as a punchbag" for "lamentable failures" by ministers.',
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/702D/production/_132071782_monestill1.jpg",
    },
    {
      title: "Spotify’s not going for Pulitzers anymore",
      description:
        "Heavyweight and Stolen have been canceled, while Spotify’s originals roster is dominated by celebrity chat shows.",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/oaNdxtfeU3sXEbIdR2rGWZb-sd4=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/23985252/VRG_Illo_STK130_K_Radtke_Spotify_Podcast_1.jpg",
    },
    {
      title:
        "2023 Apple stock growth lags behind competitors, longest revenue decline in two decades",
      description:
        "Today marks the last day of trading for 2023. While AAPL saw a 54% gain for the year, the performance is put in perspective when looking at its competitors and peers. Here’s a look at the revenue declines Apple has seen and how it could turn things around in …",
      urlToImage:
        "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/06/apple-stock-down.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    },
    {
      title:
        "AAPL stock closes at new record high after adding $1 trillion to market cap this year",
      description:
        "Apple as a company is doing alright. The firm’s stock just closed at an all-time high, valuing Apple at more than $3 trillion. That puts the market cap value add for 2023 over the $1 trillion mark. Not bad. \n\n\n\n more…",
      urlToImage:
        "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/12/AAPL-high.webp?resize=1200%2C628&quality=82&strip=all&ssl=1",
    },
    {
      title: "Japanese chip gear-maker Kokusai targets Chinese growth",
      description:
        "Kokusai Electric Corp, a Japanese chip machinery maker, is hiring in China in a move to extend the 66% rally […]\nThe post Japanese chip gear-maker Kokusai targets Chinese growth appeared first on ReadWrite.",
      urlToImage:
        "https://readwrite.com/wp-content/uploads/2023/12/pexels-rfstudio-3825581-scaled.jpg",
    },
    {
      title:
        "From the stunning surge of the 'Magnificent 7' stocks to bitcoin's shock rebound, here are 8 of 2023's wildest markets stories",
      description:
        "Stocks defied Wall Street's gloomy predictions, bonds suffered a historic rout, and the US economy dodged a long-expected recession this year.",
      urlToImage:
        "https://i.insider.com/640b89ead81e7e0018be07d0?width=1200&format=jpeg",
    },
    {
      title:
        "From bars of 24-karat gold to huge portions of freeze-dried emergency-survival food and even caskets, here are the strangest things you can buy from Costco",
      description:
        "Costco is known for selling an eclectic range of merchandise: $350,000 rings, luxury caviar, chicken coops, NBA tickets, and even Costco Monopoly.",
      urlToImage:
        "https://i.insider.com/657327a47a3c8094d5daf2cd?width=1200&format=jpeg",
    },
    {
      title:
        "GameStop Debuts ‘Alarming’ Plan To Let Its CEO Gamble Millions On The Stock Market",
      description:
        "But members of the online meme-stock community are already loving it. “Welcome to the new Berkshire Hathaway!”",
      urlToImage:
        "https://video-images.vice.com/articles/65720325e76ff73ea394428a/lede/1701970834331-gettyimages-1475285729.jpeg?image-resize-opts=Y3JvcD0xeHc6MC44NDI3eGg7MHh3LDAuMDY4NXhoJnJlc2l6ZT0xMjAwOiomcmVzaXplPTEyMDA6Kg",
    },
    {
      title:
        "It sure looks like corporate America isn't afraid of Joe Biden anymore",
      description:
        "More than $170 billion worth of company mergers have been announced since the FTC lost its high-profile case to block the Microsoft/Activision merger.",
      urlToImage:
        "https://i.insider.com/64ac294e6d7e02001af8a668?width=1200&format=jpeg",
    },
    {
      title:
        "Mullen’s stock rockets after large reverse-split keeps listing hopes alive",
      description:
        "Mullen Automotive's stock blasted higher in very active trading Thursday, after the California-based electric vehicle maker enacted a much-needed reverse stock split.",
      urlToImage: "https://images.mktw.net/im-24145996/social",
    },
    {
      title:
        "Nike's warnings on China should scare other companies that do business there",
      description:
        "Nike's results signaled that weak consumer demand in China may remain a headwind despite Beijing's effort to stimulate growth.",
      urlToImage:
        "https://i.insider.com/6585af81cefc010bea26a87e?width=1200&format=jpeg",
    },
    {
      title:
        "This basic bean soup has been served every day in the Senate for over 100 years and symbolizes why we need more flavor in Congress",
      description:
        "A simple bean soup with just four ingredients has been served every day to members of Congress for over a century.",
      urlToImage:
        "https://i.insider.com/6591031eab6f2ebb11f7f7f9?width=1200&format=jpeg",
    },
    {
      title:
        "Broadcom now ranks among 10 largest U.S. companies after big 2023 stock gains",
      description:
        "Broadcom's ascent reflects how chip stocks have gotten more shine this year amid the artificial-intelligence frenzy.",
      urlToImage: "https://images.mktw.net/im-863384/social",
    },
    {
      title:
        "This record-setting stock market rally is living on borrowed time",
      description:
        "Cash is flooding the market and there isn't much left on the sidelines.",
      urlToImage: "https://images.mktw.net/im-590105/social",
    },
    {
      title:
        "Moderna’s stock soars 10% to lead S&P 500 gainers as Oppenheimer upgrades to buy",
      description:
        "Moderna's stock started the year with a bang thanks to an analyst upgrade.",
      urlToImage: "https://images.mktw.net/im-281276/social",
    },
    {
      title:
        "Intel’s stock on pace for biggest daily percentage gain in two months, buoyed by Israel deal",
      description:
        "Shares of Intel Corp. rose 4.7% Tuesday, lifted by the announcement of a $25 billion investment in Israel.",
      urlToImage: "https://images.mktw.net/im-876690/social",
    },
    {
      title:
        "Santa Claus is coming to town and bringing presents for your stock portfolio",
      description:
        "This seasonal rally is aiming for new all-time stock market records.",
      urlToImage: "https://images.mktw.net/im-41075011/social",
    },
    {
      title: "These unsung stock market heroes offer 9 favorite picks for 2024",
      description:
        "3 top newsletters: 'Magnificent Seven' take a pause; dividend-rich value and energy stocks take the lead.",
      urlToImage: "https://images.mktw.net/im-833483/social",
    },
    {
      title:
        "Tesla’s stock can rise to $1 trillion market value in 2024, analyst says",
      description:
        "Wedbush's Dan Ives is boosting his price target on Tesla's stock to $350, noting that he sees further gains in EV share.",
      urlToImage: "https://images.mktw.net/im-21147292/social",
    },
    {
      title:
        "Kimberly-Clark’s stock hit by BofA downgrade, while Clorox gets an upgrade",
      description:
        "Consumers may be more willing to trade down to private-label brands and away from Kimberly-Clark’s, analysts say",
      urlToImage: "https://images.mktw.net/im-291697/social",
    },
    {
      title:
        "Why Amazon’s stock could be 2024’s biggest winner among major internet names",
      description:
        "Amazon shares offer the most upside among large-capitalization internet companies going into next year, an analyst wrote Thursday.",
      urlToImage: "https://images.mktw.net/im-798704/social",
    },
    {
      title:
        "Fund managers most upbeat on stock market since January 2022 as S&P 500 nears record",
      description:
        "Global fund managers are the most upbeat in nearly two years.",
      urlToImage: "https://images.mktw.net/im-401335/social",
    },
    {
      title:
        "Affirm’s stock rockets after Walmart expands buy-now-pay-later option to include self-checkout purchases",
      description:
        "Shares of Affirm Holdings Inc. soared toward the highest prices seen in nearly two years after the provider of buy-now-pay-later payment options said it has expanded its services with discount retail giant Walmart Inc. to include self-checkout purchases.",
      urlToImage: "https://images.mktw.net/im-29616255/social",
    },
    {
      title: "The 10 days that moved the stock market the most in 2023",
      description:
        "Here are the 5 biggest up days and 5 biggest down days for the S&P 500 this year.",
      urlToImage: "https://images.mktw.net/im-08869333/social",
    },
    {
      title:
        "Amazon’s stock looks to enter 2024 with a record-tying weekly winning streak",
      description:
        "Shares of Amazon climbed back into positive territory for the week on Thursday, putting them on track to end the year with a record-tying weekly winning streak.",
      urlToImage: "https://images.mktw.net/im-39573581/social",
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
