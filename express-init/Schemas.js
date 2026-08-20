import * as z from "zod";

export const CategoryBody = z.object({
  name: z.string().nonempty(),
})
