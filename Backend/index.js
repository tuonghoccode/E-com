const express = require("express");
const app = express();
const port = 3030;

const products = 
  {
    sneaker: [
      {
        imageURL:
          "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/51a8c4a4-4ce3-44ba-9f6b-1d8e39764a05/jordan-zoom-separate-pf-basketball-shoes-kGPg2r.png",
        name: "Jordan Zoom Separate PF",
        price: "3,239,000₫",
        value:1,
      },
      {
        imageURL:
          "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/37cd492e-d0c3-4592-bc59-418e9d15cbfd/air-jordan-xxxvi-first-light-pf-basketball-shoes-fjPfDg.png",
        name: "Air Jordan XXXVI 'First Light' PF",
        price: "5,439,000₫",
        value:1,
      },
      {
        imageURL:
          "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/454532b7-0cec-475c-85de-9d3552e270db/air-jordan-1-low-se-shoes-GKDhB0.png",
        name: "Air Jordan 1 Low SE",
        price: "3,239,000₫",
        value:1,
      },
      {
        imageURL:
          "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/021932ca-7ae3-4704-8319-22fba3a66cd5/jordan-series-es-shoes-FDtg9v.png",
        name: "Jordan Series ES",
        price: "2,499,000₫",
        value:1,
      },
      {
        imageURL:
          "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7243c3dc-4e7b-4aa7-b8fa-f23353b29de1/jordan-ma2-shoe-qw1Z6m.png",
        name: "Jordan MA2",
        price: "3,669,000₫",
        value:1,
      },
      {
        imageURL:
          "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/39a83668-705d-49b0-aed5-ede91d2241aa/jordan-ma2-shoe-gr2pR5.png",
        name: "Jordan MA2",
        price: "3,669,000₫",
        value:1,
      },
      {
        imageURL:
          "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e1a5ab97-c9aa-4f16-a587-17c5ad2e039a/jordan-nola-slide-ncqgpt.png",
        name: "Jordan NOLA",
        price: "1,169,000₫",
        value:1,
      },
      {
        imageURL:
          "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/cc23da7e-e3a4-4708-ace8-e7a83e46961a/air-jordan-1-mid-se-utility-shoes-vg0XNS.png",
        name: "Air Jordan 1 Mid SE Utility",
        price: "3,519,000₫",
        value:1,
      },
      {
        imageURL:
          "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/1b0cb036-e87a-4eea-b4c9-f5919018803b/jordan-delta-2-shoe-dG2Stx.png",
        name: "Jordan Delta 2",
        price: "3,829,000₫",
        value:1,
      },
      {
        imageURL:
          "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ceb3fa38-2019-45ed-91c4-89398748c001/jordan-one-take-3-older-basketball-shoes-w321B7.png",
        name: "Jordan One Take 3",
        price: "2,039,000₫",
        value:1,
      },
      {
        imageURL:
          "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/09f9cbc5-c958-40a2-a34a-b05751d9f14a/jordan-series-2-dear-deloris-shoe-nS3GqL.png",
        name: 'Jordan Series .02 "Dear Deloris"',
        price: "2,349,000₫",
        value:1,
      },
      {
        imageURL:
          "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/14c94550-ca1f-4de6-90cf-e7a1e2e49df0/air-jordan-1-mid-se-shoes-hHltxp.png",
        name: "Air Jordan 1 Mid SE",
        price: "3,519,000₫",
        value:1,
      },
      {
        imageURL:
          "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/61445250-915d-49ba-bfdd-90c03fd0773c/air-jordan-1-zoom-air-comfort-shoe-DMnp24.png",
        name: "Air Jordan 1 Zoom Air Comfort",
        price: "4,109,000₫",
        value:1,
      },
      {
        imageURL:
          "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/da011921-9840-4310-b656-445bc71cb739/air-jordan-3-retro-shoe-TJf2lm.png",
        name: "Air Jordan 3 Retro",
        price: "5,589,000₫",
        value:1,
      },
      {
        imageURL:
          "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/715bdd38-902a-426c-813a-9c7252c9a515/jordan-adg-3-golf-shoe-mJRNPg.png",
        name: "Jordan ADG 3",
        price: "4,109,000₫",
        value:1,
      },
      {
        imageURL:
          "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/98c318a2-d185-43da-b905-c5d717212d83/jordan-6-retro-little-flex-younger-shoe-hJ23Sd.png",
        name: "Jordan 6 Retro Little Flex",
        price: "1,789,000₫",
        value:1,
      },
      {
        imageURL:
          "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6417b6dc-c08c-4c15-95df-4ca7eaeb72f0/air-jordan-11-retro-shoes-4x2Pv2.png",
        name: "Air Jordan 11 Retro",
        price: "5,589,000₫",
        value:1,
      },
      {
        imageURL:
          "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-2c46e149-c4c4-4608-a85b-0ae0a67ab8db/jordan-break-slides-QmwKlG.png",
        name: "Jordan Break",
        price: "889,000₫",
        value:1,
      },
      {
        imageURL:
          "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4c212535-d8a8-4dc2-846d-60a82fec3133/air-jordan-5-retro-older-shoes-nnTrYzdO.png",
        name: "Air Jordan 5 Retro",
        price: "3,569,000₫",
        value:1,
      },
      {
        imageURL:
          "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ed175ada-dccd-4dd2-94a1-5dfa000bf276/jordan-ls-slides-v8c9t9.png",
        name: "Jordan LS",
        price: "1,878,000₫",
        value:1,
      },
      {
        imageURL:
          "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d6f66b63-127f-4856-a4ed-2fc54f2aa4d6/jordan-adg-2-golf-shoe-rjHVg9.png",
        name: "Jordan ADG 2",
        price: "2,349,000₫",
        value:1,
      },
      {
        imageURL:
          "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/136222bb-225a-4048-a25e-2afc81bf332e/jordan-4-retro-younger-shoes.png",
        name: "Jordan 4 Retro",
        price: "4,109,000₫",
        value:1,
      },
      {
        imageURL:
          "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/43459240-b1e4-4b20-bcd6-9058595283d4/jordan-delta-2-shoe-8Z0Rkk.png",
        name: "Jordan Delta 2",
        price: "2,169,000₫",
        value:1,
      },
      {
        imageURL:
          "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e199c592-15fc-43d7-ac3c-eba8e076ebdc/jordan-series-shoes-FX0cpT.png",
        name: "Jordan Series",
        price: "3,058,000₫",
        value:1,
      },
      {
        imageURL:
          "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b0e6e9ac-ff23-497f-9bc4-2ae1a2b9f359/jordan-why-not-zer04-pf-basketball-shoe-0bpnfr.png",
        name: "Jordan Why Not? Zer0.4 PF",
        price: "3,829,000₫",
        value:1,
      },
      {
        imageURL:
          "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8cb73898-47b4-401f-a84e-6b678f7e0a82/jordan-why-not-zer04-pf-basketball-shoe-P3c3Rp.png",
        name: "Jordan 'Why Not?' Zer0.4 PF",
        price: "2,499,000₫",
        value:1,
      },
      {
        imageURL:
          "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9e638c75-88de-453c-8508-1beb72a7ca00/jordan-6-retro-little-flex-shoe-Tzl4C0.png",
        name: "Jordan 6 Retro Little Flex",
        price: "3,063,199₫",
        value:1,
      },
      {
        imageURL:
          "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e296ed95-845c-4f46-8682-dbc7d330131a/jordan-11-cot-bootie-zQcm7J.png",
        name: "Jordan 11",
        price: "3,829,000₫",
        value:1,
      },
      {
        imageURL:
          "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b682dd19-194e-4fc0-ae47-39a929b1218f/air-jordan-xxxvi-older-basketball-shoes-5rlrTs.png",
        name: "Air Jordan XXXVI",
        price: "3,829,000₫",
        value:1,
      },
      {
        imageURL:
          "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a616a8dd-a7bf-4a55-a2bf-516e40bc9955/zion-1-basketball-shoes-bHGvxg.png",
        name: "Zion 1",
        price: "1,529,000₫",
        value:1,
      },
      {
        imageURL:
          "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/85cc1407-27dd-4d52-b089-fea1f6db8169/jordan-delta-2-older-shoe-7FNpBn.png",
        name: "Jordan Delta 2",
        price: "1,529,000₫",
        value:1,
      },
      {
        imageURL:
          "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4323e8ee-1503-449b-9631-759291e120af/air-jordan-1-mid-se-older-shoes-CtB8N5.png",
        name: "Air Jordan 1 Mid SE",
        price: "3,569,000₫",
        value:1,
      },
      {
        imageURL:
          "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/58dc90b7-e536-4677-ad30-20a64abbe955/jordan-jumpman-2021-pf-basketball-shoe-X3gQBM.png",
        name: "Jordan Jumpman 2021 PF",
        price: "2,818,000₫",
        value:1,
      },
      {
        imageURL:
          "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fb8298fc-1946-4009-9580-a6e78d749066/jordan-ls-slides-kHpmTf.png",
        name: "Jordan LS",
        price: "3,519,000₫",
        value:1,
      },
      {
        imageURL:
          "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5b9062c9-1410-4811-9ca3-1bacd7e01060/jordan-why-not-zer04-basketball-shoes-GNMwp9.png",
        name: "Jordan 'Why Not?' Zer0.4",
        price: "2,299,000₫",
        value:1,
      },
      {
        imageURL:
          "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/da011921-9840-4310-b656-445bc71cb739/air-jordan-3-retro-shoe-TJf2lm.png",
        name: "Air Jordan 3 Retro",
        price: "2,549,000₫",
        value:1,
      },
    ],
    bag: [],
    belt: [],
  };

app.get("/products", (req, res) => {
  res.status(200).json(products);
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
