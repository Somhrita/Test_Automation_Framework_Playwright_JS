const{test,expect}=require('@playwright/test')

test("Verify Application Title",async function({page}){
    await page.goto("http://google.com")
    const url=await page.url()
    console.log("Title is"+url)
})
