import { IBucketAdd } from "@/types/bucket";
import { kickbuckInstance } from "../instance";

export const bucket = {
  bucketAdd: async (bucketAddForm: IBucketAdd) => {
    const { data } = await kickbuckInstance.post<string>(
      `/bucket/add`,
      bucketAddForm
    );

    return data;
  },
};
