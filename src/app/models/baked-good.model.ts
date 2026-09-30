import * as v from 'valibot';

export const BakedGoodSchema = v.object({
  id: v.number(),
  name: v.string(),
  price: v.number(),
  description: v.string(),
  isListed: v.boolean(),
  isAvailable: v.boolean(),
});

export const BakedGoodListSchema = v.array(BakedGoodSchema);

export type BakedGood = v.InferOutput<typeof BakedGoodSchema>;
