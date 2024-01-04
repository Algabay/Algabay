import React from "react";

const DummyNews = () => {
  const newsData = [
    {
      title:
        "Scammers Are Tricking Anti-Vaxxers Into Buying Bogus Medical Documents",
      description:
        "Scammers Are Tricking Anti-Vaxxers Into Buying Bogus Medical Documents",
      urlToImage:
        "https://media.wired.com/photos/657cdc0f0bfff3d8273cf8dd/191:100/w_1280,c_limit/Anti-Vaxxers-sold-fake-medical-docs-Security-GettyImages-924224840.jpg",
    },
    {
      title: "El Salvador Bitcoin bonds clear regulatory hurdle",
      description: "El Salvador Bitcoin bonds clear regulatory hurdle",
      urlToImage:
        "https://readwrite.com/wp-content/uploads/2023/12/El-Salvador-Bitcoin-bonds.jpg",
    },
    {
      title:
        "Bitcoin soars above $45,000 in New Year rally, eyes on SEC for ETF approvals",
      description:
        "Bitcoin soars above $45,000 in New Year rally, eyes on SEC for ETF approvals",
      urlToImage:
        "https://readwrite.com/wp-content/uploads/2023/12/Bitcoin-gathers-momentum.jpg",
    },
    {
      title: "Bitcoin price surges by 175% amid US ETF hopes",
      description: "Bitcoin price surges by 175% amid US ETF hopes",
      urlToImage:
        "https://readwrite.com/wp-content/uploads/2023/12/bitcoin-2730220_1280.jpg",
    },
    {
      title: "Bitcoin surges past $42,000 as crypto gathers momentum",
      description: "Bitcoin surges past $42,000 as crypto gathers momentum",
      urlToImage:
        "https://readwrite.com/wp-content/uploads/2023/12/Bitcoin-gathers-momentum.jpg",
    },
    {
      title:
        "After a brutal stretch, a remarkable thing is happening: Cryptocurrencies are surging",
      description:
        "After a brutal stretch, a remarkable thing is happening: Cryptocurrencies are surging",
      urlToImage:
        "https://media.npr.org/assets/img/2023/12/25/gettyimages-1402675790_wide-eadf8676b64af620ebb4f8ae76eb29bc059f2598-s1400-c100.jpg",
    },
    {
      title:
        "A lawsuit filed against a bitcoin mine in Texas has shed light on a growing trend: US crypto mines backed by millions of dollars from Chinese investors",
      description:
        "A lawsuit filed against a bitcoin mine in Texas has shed light on a growing trend: US crypto mines backed by millions of dollars from Chinese investors",
      urlToImage:
        "https://i.insider.com/658acb99ec62ab5daf7ea6be?width=1200&format=jpeg",
    },
    {
      title:
        "Sam Altman’s Weird Eyeball Scanning Crypto Tech Comes to Minecraft",
      description:
        "Sam Altman’s Weird Eyeball Scanning Crypto Tech Comes to Minecraft",
      urlToImage:
        "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/7bc02f7461ba489abf2051851f709254.png",
    },
    {
      title: "Coin Cloud bankruptcy leaves customers at risk",
      description: "Coin Cloud bankruptcy leaves customers at risk",
      urlToImage:
        "https://readwrite.com/wp-content/uploads/2023/12/Coin-Cloud-bankruptcy.jpg",
    },
    {
      title:
        "Vuelve el criptooptimismo: Bitcoin supera los 42.000 dólares y vuelve a niveles de hace 18 meses",
      description:
        "Vuelve el criptooptimismo: Bitcoin supera los 42.000 dólares y vuelve a niveles de hace 18 meses",
      urlToImage: "https://i.blogs.es/c333fe/btc1/840_560.jpeg",
    },
    {
      title:
        "Ein Bitcoin erstmals seit April 2022 wieder über 45.000 US-Dollar wert",
      description:
        "Ein Bitcoin erstmals seit April 2022 wieder über 45.000 US-Dollar wert",
      urlToImage:
        "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/5/1/9/4/6/3/shutterstock_1888907947-54ebd2bafa9434e9.jpg",
    },
    {
      title: "Bitcoin breaks $40k as momentum builds",
      description: "Bitcoin breaks $40k as momentum builds",
      urlToImage:
        "https://www.reuters.com/resizer/HcptAJJkSp8HpHdex6n8Ks16WzA=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/CJ7MYCX2U5NHTNNZI4MMFWUTE4.jpg",
    },
    {
      title: "Bitcoin Is Crucial Climate Tech (BTP Ep. 1 Recap)",
      description: "Bitcoin Is Crucial Climate Tech (BTP Ep. 1 Recap)",
      urlToImage:
        "https://miro.medium.com/v2/resize:fit:640/0*3WEqMiNG3I0IfnHC.png",
    },
    {
      title:
        "US stocks rise as Fed official gives investors more rate-cut optimism",
      description:
        "US stocks rise as Fed official gives investors more rate-cut optimism",
      urlToImage:
        "https://i.insider.com/6581abfda79e5746976ade76?width=1200&format=jpeg",
    },
    {
      title:
        "Is El Salvador's crypto push working? Experts urge caution amid reforms",
      description:
        "Is El Salvador's crypto push working? Experts urge caution amid reforms",
      urlToImage:
        "https://i.abcnewsfe.com/a/e60be918-011e-4258-ab0e-fe5eb957bff6/Salvador-1-gty-er-231207_1701987930117_hpMain_16x9.jpg?w=992",
    },
    {
      title: "Se filtra el tráiler de ‘GTA 6’",
      description: "Se filtra el tráiler de ‘GTA 6’",
      urlToImage:
        "https://imgs.hipertextual.com/wp-content/uploads/2022/09/gta-6-1.jpg",
    },
    {
      title:
        "Of Wonder, the Courage of Uncertainty, and How to Hear Your Soul: The Best of The Marginalian 2023",
      description:
        "Of Wonder, the Courage of Uncertainty, and How to Hear Your Soul: The Best of The Marginalian 2023",
      urlToImage:
        "https://www.themarginalian.org/wp-content/uploads/2023/05/margaretcook_leavesofgrass_attention.jpg?fit=1200%2C630&ssl=1",
    },
    {
      title:
        "Reminder: Donate to win swag in our annual Charity Drive sweepstakes",
      description:
        "Reminder: Donate to win swag in our annual Charity Drive sweepstakes",
      urlToImage:
        "https://cdn.arstechnica.net/wp-content/uploads/2023/11/charity2023-1-760x380.jpg",
    },
    {
      title:
        "Reminder: Donate to win swag in our annual Charity Drive sweepstakes",
      description:
        "Reminder: Donate to win swag in our annual Charity Drive sweepstakes",
      urlToImage:
        "https://cdn.arstechnica.net/wp-content/uploads/2023/11/charity2023-760x380.jpg",
    },
    {
      title:
        "Final reminder: Donate to win swag in our annual Charity Drive sweepstakes",
      description:
        "Final reminder: Donate to win swag in our annual Charity Drive sweepstakes",
      urlToImage:
        "https://cdn.arstechnica.net/wp-content/uploads/2023/11/charity2023-760x380.jpg",
    },
    {
      title:
        "Filtrados los nuevos juegos de Insomniac Games: ‘Spider-Man 3’ y ‘Spider-Verse’",
      description:
        "Filtrados los nuevos juegos de Insomniac Games: ‘Spider-Man 3’ y ‘Spider-Verse’",
      urlToImage:
        "https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2023/06/spider-man-cruzando-el-multiverso.jpg?fit=2500%2C1406&quality=50&strip=all&ssl=1",
    },
    {
      title: "7 Expert & Data-Backed Trend Predictions for 2024",
      description: "7 Expert & Data-Backed Trend Predictions for 2024",
      urlToImage:
        "https://blog.hubspot.com/hubfs/Copy%20of%20Featured%20Image%20Template%20Backgrounds-Dec-19-2023-08-34-34-9450-PM.png#keepProtocol",
    },
    {
      title: "Robinhood: Kryptobörse nun auch in der EU verfügbar",
      description: "Robinhood: Kryptobörse nun auch in der EU verfügbar",
      urlToImage:
        "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/5/1/0/3/9/6/shutterstock_2060451869-7dbad282f7566a3f.jpg",
    },
    {
      title:
        "Cathie Wood dumps Grayscale and buys bitcoin-futures ETF. Here’s why.",
      description:
        "Cathie Wood dumps Grayscale and buys bitcoin-futures ETF. Here’s why.",
      urlToImage: "https://images.mktw.net/im-17572622/social",
    },
    {
      title:
        "Why bitcoin may not see a ‘Santa Claus rally’, despite potential approval of crypto-based ETFs",
      description:
        "Why bitcoin may not see a ‘Santa Claus rally’, despite potential approval of crypto-based ETFs",
      urlToImage: "https://images.mktw.net/im-783732/social",
    },
    {
      title:
        "Trailer for Bitconned, a documentary about one of the many scamcoins minted in the mid-late 2010s",
      description:
        "Trailer for Bitconned, a documentary about one of the many scamcoins minted in the mid-late 2010s",
      urlToImage:
        "https://i0.wp.com/boingboing.net/wp-content/uploads/2023/12/image-31.png?fit=1200%2C600&ssl=1",
    },
    {
      title:
        "El Salvador, el primer país en adoptar el Bitcoin, ahora ofrece visados a criptoinversores por un millón de dólares",
      description:
        "El Salvador, el primer país en adoptar el Bitcoin, ahora ofrece visados a criptoinversores por un millón de dólares",
      urlToImage:
        "https://i.blogs.es/7cf7a2/esau-fuentes-gonzalez-bqefbdsc4ko-unsplash/840_560.jpeg",
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
        "How a big, messy ‘cleanup’ in crypto could pave way for a more regulated, mature market in 2024",
      description:
        "How a big, messy ‘cleanup’ in crypto could pave way for a more regulated, mature market in 2024",
      urlToImage: "https://images.mktw.net/im-92646701/social",
    },
    {
      title:
        "PlayStation game dev hit by major ransomware attack – stolen data being auctioned off",
      description:
        "PlayStation game dev hit by major ransomware attack – stolen data being auctioned off",
      urlToImage:
        "https://readwrite.com/wp-content/uploads/2023/06/towfiqu-barbhuiya-em5w9_xj3uU-unsplash.jpg",
    },
    {
      title: "Nyan Keys: Because Your Keyboard is Painfully Slow",
      description: "Nyan Keys: Because Your Keyboard is Painfully Slow",
      urlToImage:
        "https://hackaday.com/wp-content/uploads/2023/12/nyan-keys-800.jpg",
    },
    {
      title:
        "Ausblick: Was bringt das Tech-Jahr 2024 für Apple, KI, Bitcoin & Co.?​",
      description:
        "Ausblick: Was bringt das Tech-Jahr 2024 für Apple, KI, Bitcoin & Co.?​",
      urlToImage:
        "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/5/1/8/7/1/4/shutterstock_1818921524-a01f07a7c31a688a.jpg",
    },
    {
      title:
        "Insomniac leak: Rhysida hack sparks rally of support for game developer",
      description:
        "Insomniac leak: Rhysida hack sparks rally of support for game developer",
      urlToImage:
        "https://readwrite.com/wp-content/uploads/2023/12/pexels-soumil-kumar-735911-scaled.jpg",
    },
    {
      title: "Who Accepts Bitcoin as Payment?",
      description: "Who Accepts Bitcoin as Payment?",
      urlToImage:
        "https://media.smallbiztrends.com/2021/12/who-accepts-bitcoin.png",
    },
    {
      title: 'Darknet: Polizei hebt "Kingdom Market" aus',
      description: 'Darknet: Polizei hebt "Kingdom Market" aus',
      urlToImage:
        "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/5/1/6/7/9/8/bka-6ed59eff942f6cc1.jpg",
    },
    {
      title:
        "El impago a contratistas en Texas tira por tierra el anonimato de Bitcoin y destapa una trama millonaria de inversores chinos",
      description:
        "El impago a contratistas en Texas tira por tierra el anonimato de Bitcoin y destapa una trama millonaria de inversores chinos",
      urlToImage:
        "https://i.blogs.es/2192ec/ewan-kennedy-mkdbteclpzc-unsplash/840_560.jpeg",
    },
    {
      title: "Coinbase targets financially vulnerable young adults",
      description: "Coinbase targets financially vulnerable young adults",
      urlToImage:
        "https://substackcdn.com/image/youtube/w_728,c_limit/a4F9u8Z84YI",
    },
    {
      title: "Le Bitcoin est au plus haut : la BCE prédit sa mort prochaine",
      description:
        "Le Bitcoin est au plus haut : la BCE prédit sa mort prochaine",
      urlToImage:
        "https://www.presse-citron.net/app/uploads/2022/06/bitcoin-decentralise-anonyme.jpg",
    },
    {
      title:
        "'Rich Dad Poor Dad' author warns exploding US debt will fuel inflation and crush the dollar",
      description:
        "'Rich Dad Poor Dad' author warns exploding US debt will fuel inflation and crush the dollar",
      urlToImage:
        "https://i.insider.com/64b50a55dcdf1100194c22eb?width=1200&format=jpeg",
    },
    {
      title:
        "Bitcoin trades above $40K for the first time since May 2022 as it extends its 2023 rebound (Sunil Jagtiani/Bloomberg)",
      description:
        "Bitcoin trades above $40K for the first time since May 2022 as it extends its 2023 rebound (Sunil Jagtiani/Bloomberg)",
      urlToImage:
        "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iTNK7L5JA_BA/v0/1200x785.jpg",
    },
    {
      title:
        "Former Amazon engineer pleads guilty to stealing $12.3 million of crypto in first ever hacking case involving smart contracts",
      description:
        "Former Amazon engineer pleads guilty to stealing $12.3 million of crypto in first ever hacking case involving smart contracts",
      urlToImage:
        "https://i.insider.com/657e49ed50edbc52a865111a?width=1200&format=jpeg",
    },
    {
      title:
        "Digitalwährung : Bitcoin erstmals seit April 2022 über 45.000 US-Dollar",
      description:
        "Digitalwährung : Bitcoin erstmals seit April 2022 über 45.000 US-Dollar",
      urlToImage:
        "https://img.zeit.de/news/2024-01/02/bitcoin-erstmals-seit-april-2022-ueber-45-000-us-dollar-image-group/wide__1300x731",
    },
    {
      title:
        "Freitag: Hyperloop-Hype wohl zu Ende, Lapsus$-Täter in Psychiatrie statt in Haft",
      description:
        "Freitag: Hyperloop-Hype wohl zu Ende, Lapsus$-Täter in Psychiatrie statt in Haft",
      urlToImage:
        "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/5/1/7/4/6/5/friday-8811913955340084.webp",
    },
    {
      title: "Bitcoin rally: Is El Salvador's Bitcoin bet paying off?",
      description: "Bitcoin rally: Is El Salvador's Bitcoin bet paying off?",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/3B14/production/_121742151_hi072113665.jpg",
    },
    {
      title:
        "heise+ | Geldanlage: Mit Aktien, ETFs und ETPs in Kryptowährungen investieren",
      description:
        "heise+ | Geldanlage: Mit Aktien, ETFs und ETPs in Kryptowährungen investieren",
      urlToImage:
        "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/5/0/9/9/6/7/202312_Kryptofond-9a5df8e7b08e12d1.png",
    },
    {
      title: "Insomniac Games por fin rompe el silencio tras su brutal hackeo",
      description:
        "Insomniac Games por fin rompe el silencio tras su brutal hackeo",
      urlToImage:
        "https://imgs.hipertextual.com/wp-content/uploads/2021/09/wolverine-scaled.jpeg",
    },
  ];

  return (
    <>
      <div className="grid gap-8 grid-cols-1 px-24 my-6 pb-10">
        {newsData.map((news, index) => (
          <div
            key={index}
            className="flex bg-white border border-gray-300 p-6 rounded-lg shadow"
          >
            <img
              className="h-32 w-32 object-cover rounded-md shadow"
              src={news.urlToImage}
              alt="News"
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
