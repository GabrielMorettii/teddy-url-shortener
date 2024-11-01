import { type PrismaClient } from "@prisma/client";
import {
  type GetShortUrlRepository,
  type CreateShortUrlParams,
  type CreateShortUrlRepository,
} from "@/data/protocols/db";
import { type ShortUrlModel } from "@/domain/models";
import { type GetShortUrlRequest } from "@/domain/usecases";

export class PrismaShortUrlRepository
  implements CreateShortUrlRepository, GetShortUrlRepository
{
  constructor(private readonly prisma: PrismaClient) {}

  async create(data: CreateShortUrlParams): Promise<ShortUrlModel> {
    const shortUrlCreated = await this.prisma.shortUrl.create({
      data,
    });

    return shortUrlCreated as ShortUrlModel;
  }

  async get(data: GetShortUrlRequest): Promise<ShortUrlModel | undefined> {
    const shortUrl = await this.prisma.shortUrl.findUnique({
      where: {
        shortUrl: data.shortUrl,
      },
    });

    return shortUrl as ShortUrlModel;
  }
}
