import { PrismaClient, Prisma } from '@prisma/client'
import { v4 as uuidv4 } from 'uuid';

const prisma = new PrismaClient()

export default function handler(req, res) {
    switch (req.method) {
        case 'POST':
            return getUserInfo();
        default:
            return res.status(405).end(`Method ${req.method} Not Allowed`)
    }

    async function getUserInfo() {
        const user = await prisma.Usuario.findUnique({
            where: {
                email: req.body.email,
            },
        });

        if (user) {
            if(user.email === req.body.email){
                if (req.body.password === user.senha) {
                    res.status(200).json(user);
                } else {
                    res.status(400).end();
                }
            }
        } else {
            res.status(400).end();
        }
    }
}

