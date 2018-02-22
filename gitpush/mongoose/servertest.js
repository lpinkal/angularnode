const expect=require('expect');
const request=require('supertest');

const {app}=require('./server');
const {Todo}=require('./todo');

describe('todopost',()=>{
   it('teat1',(done)=>{
       var text='todo text';

       request(app)
           .post('/todos')
           .send({})
           .expect(200)
           .expect((res)=>{
           expect(res.body.text).toBe('bhu');
           })
       done();
   })
});
describe('todoget',()=>{
    it('teat2',(done)=>{

        request(app)
            .get('/todos')
            .expect(200)
            .expect((res)=>{
                expect(res.body.text.length).toBe(4);
            })
            .end(done);


    })
});