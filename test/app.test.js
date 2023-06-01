const request = require('supertest')
const {app,server} = require('../app')

describe('Test the root PATH', ()=>{

    test('It should respond with "Hello World"', async () =>{
        const response = await request(app).get('/')
        expect(response.text).toBe('<h1>Hello World!</h1>')
        expect(response.statusCode).toBe(200)
    })

})

describe('Test the Show PATH', ()=>{

    test('It should respond with "found Gif []"', async () =>{
        const response = await request(app).post('/gif/new')
        expect(response.json()).toBe({})
        expect(response.statusCode).toBe(200)
    })

})

afterAll(done => {
    server.close()
    done()
})