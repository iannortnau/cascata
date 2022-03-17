import { PrismaClient, Prisma } from '@prisma/client'
import { v4 as uuidv4 } from 'uuid';

const prisma = new PrismaClient()

export default function handler(req, res) {
    const token = req.query.token;
    switch (req.method) {
        case 'GET':
            return getUserInfo();
        default:
            return res.status(405).end(`Method ${req.method} Not Allowed`)
    }

    async function getUserInfo() {
        const user = await prisma.Usuario.findUnique({
            where: {
                token: token,
            },
        });

        if (user) {
            res.status(200).json(user);
        } else {
            res.status(400).end();
        }
    }
}

