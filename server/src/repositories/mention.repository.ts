import { Mention, IMention } from "../models/Mention";

export class MentionRepository {
  async create(data: Partial<IMention>): Promise<IMention> {
    const mention = new Mention(data);
    return mention.save();
  }

  async saveMany(data: Partial<IMention>[]): Promise<IMention[]> {
    return Mention.insertMany(data, { ordered: false }).catch((err) => {
      if (err.code === 11000) {
        return err.insertedDocs || [];
      }
      throw err;
    });
  }

  async findById(id: string): Promise<IMention | null> {
    return Mention.findById(id).exec();
  }

  async findByBrand(
    brand: string,
    limit: number = 50,
    skip: number = 0
  ): Promise<IMention[]> {
    return Mention.find({ brand })
      .sort({ fetchedAt: -1 })
      .limit(limit)
      .skip(skip)
      .exec();
  }

  async getStats(brand: string) {
    const stats = await Mention.aggregate([
      { $match: { brand } },
      { $group: { _id: "$sentiment", count: { $sum: 1 } } },
    ]);
    return stats;
  }
}

export default new MentionRepository();
