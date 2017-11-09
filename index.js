var Nightmare =require("nightmare");
const nightmare = Nightmare({ show: true });
const selector='a.Fw(b)'

nightmare
  .goto('https://in.finance.yahoo.com/')
  .type('input[name=p]', 'FB')
  .click('#search-button')

  .scrollTo(20000,0)
  .wait(3000)
  .scrollTo(40000,0)
  .wait(3000)
  .scrollTo(60000,0)
  .wait(3000)
  .scrollTo(80000,0)
  .wait(3000)
  .scrollTo(100000,0)
  .wait(3000)
  .scrollTo(120000,0)
  .wait(3000)
  .scrollTo(140000,0)
  .wait(3000)
  .scrollTo(160000,0)


  .evaluate((selector)=>{
  return document.querySelector(selector);
    },selector)
  .then((links)=>{
    alert(links)
  })

  