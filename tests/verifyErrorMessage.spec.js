const{test,expect} =require('@playwright/test')

test("verify error Message",async function({page}){

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    const viewportSize = await page.viewportSize()
    console.log(viewportSize.width)
    console.log(viewportSize.height)
    await page.getByPlaceholder("Username").fill("Admin")
    await page.locator("input[name='password']").fill("admin111")
    await page.locator("//button[@type='submit']").click()
    const errorMessage=await page.locator("//body/div[@id='app']/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/p[1]").textContent()
    console.log("Error message is "+errorMessage);

    expect(errorMessage.includes("Invalid")).toBeTruthy()
})