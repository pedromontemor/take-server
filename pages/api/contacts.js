import NextCors from 'nextjs-cors';

export default async (req, res) => {
    await NextCors(req, res, {
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: '*',
        optionsSuccessStatus: 200,
    });
    res.statusCode = 200;
    let contacts = require('./responses/contacts.json');
    if(req.query.name) {
        contacts = contacts.filter(b=> b.name.toLowerCase().includes(req.query.name.toLowerCase()));
    }
    res.json(contacts);
}