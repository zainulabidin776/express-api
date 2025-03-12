const request =require('supertest');
const express=require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send('Hello, World!');
});

describe('GET /',()=>{

    it('should return Hello, WOrld!',async()=>{

        const response =await request(app).get('/');
        expect(response.status).toBe(200);
    expect(response.text).toBe('Hello, World!');
    }); 
});

