const{test,expect}=require('@playwright/test')

test("My First Test",async function({page}){
    expect(3).toBe(3)
})

test("My Second Test",async function({page}){
    expect(100).toBe(101)
})

test("My Third Test",async function({page}){
    expect(2).toBe(2);
})