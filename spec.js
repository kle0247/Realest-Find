const { conn, User } = require('./server/db'); //call in Sequelize connection
const app = require('supertest')(require('./server/app'));
const { expect } = require('chai');

describe('Authenticating', () => {
    beforeEach(async() => {
        await conn.sync({ force: true });
        await User.create({ username: 'moe', firstName: 'Moe', lastName: 'Buzz', email:'moe@email.com', password: '123'})
    });
    describe('Successful Authentication', () => {
        it('Logs the User In', async() => {
            let response = await app.post('/api/sessions')
                .send({ username: 'moe', firstName: 'Moe', lastName: 'Buzz', email:'moe@email.com', password: '123'});

            expect(response.status).to.equal(200);
            const token = response.body.token;
            expect(token).to.be.ok;

            response = await app.get(`/api/sessions/${token}`);
            expect(response.status).to.equal(200);
            expect(response.body.username).to.equal('moe');
        })
    })
});