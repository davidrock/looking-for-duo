import express from 'express';
import { PrismaClient } from '@prisma/client';
import convertHourStringToMinutes from './utils/convert-hour-string-to-minutes';
import convertMinutesToHourString from './utils/convert-minutes-to-hour-string';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

const prisma = new PrismaClient({
  log: ['query'],
});

app.get('/games', async (req, res) => {
  const games = await prisma.game.findMany({
    include: {
      _count: {
        select: {
          Ads: true,
        },
      },
    },
  });

  return res.json(games);
});

app.get('/ads', async (req, res) => {
  const ads = await prisma.ad.findMany();
  return res.json(ads);
});

app.get('/games/:id/ads', async (request, response) => {
  const gameId = request.params.id;

  const ads = await prisma.ad.findMany({
    select: {
      id: true,
      name: true,
      weekDays: true,
      useVoiceChannel: true,
      yearsPlaying: true,
      hourStart: true,
      hourEnd: true,
    },
    where: {
      gameId,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  return response.json(
    ads.map((ad) => {
      return {
        ...ad,
        weekDays: ad.weekDays.split(','),
        hourStart: convertMinutesToHourString(ad.hourStart),
        hourEnd: convertMinutesToHourString(ad.hourEnd),
      };
    })
  );
});

app.post('/games/:id/ads', async (request, response) => {
  const gameId = request.params.id;
  const body = request.body;

  const hourStart = convertHourStringToMinutes(body.hourStart);
  const hourEnd = convertHourStringToMinutes(body.hourEnd);

  const ad = await prisma.ad.create({
    data: {
      gameId,
      hourEnd,
      hourStart,
      name: body.name,
      discord: body.discord,
      yearsPlaying: body.yearsPlaying,
      weekDays: body.weekDays.join(','),
      useVoiceChannel: body.useVoiceChannel,
    },
  });

  return response.status(201).json(ad);
});

app.get('/ads/:id/discord', async (request, response) => {
  const adId = request.params.id;

  const ad = await prisma.ad.findUniqueOrThrow({
    select: {
      discord: true,
    },
    where: {
      id: adId,
    },
  });

  return response.json({
    discord: ad.discord,
  });
});

app.listen(3333);
