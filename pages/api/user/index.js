import { PrismaClient, Prisma } from '@prisma/client'
import { v4 as uuidv4 } from 'uuid';

const prisma = new PrismaClient()

export default function handler(req, res) {
    switch (req.method) {
        /*
        case 'GET':
            return getUserInfo();
         */
        case 'POST':
            return createUser();
        default:
            return res.status(405).end(`Method ${req.method} Not Allowed`)
    }

    /*
    async function getUserInfo() {
        const user = await prisma.user.findUnique({
            where: {
                email: req.body.email,
            },
        });
        if (user) {
            if(req.body.password === user.senha){
                res.status(200).json(user);
            }else{
                res.status(400).end();
            }
        } else {
            res.status(400).end();
        }
    }
    */

    async function createUser() {
        console.log(req.body);

        const user = await prisma.Usuario.create({
            data: {
                nome_completo: req.body.name,
                user: req.body.user,
                senha: req.body.password,
                perfil: req.body.profile,
                token:  uuidv4(),
                emailToken: uuidv4(),
                email: req.body.email
            },
        });
        if(user){
            res.status(200).json(user);
        }else{
            res.status(400).end();
        }
    }

}
