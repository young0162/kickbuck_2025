import { IBucketForm, IMyBucketForm } from "@/types/bucket";
import { kickbuckInstance } from "../instance";

export const bucket = {
  bucketAdd: async (bucketAddForm: IBucketForm) => {
    const { data } = await kickbuckInstance.post<string>(
      `/bucket/add`,
      bucketAddForm
    );

    return data;
  },

  bucketMyList: async (id: number) => {
    const { data } = await kickbuckInstance.get<IMyBucketForm[]>(
      `/bucket/${id}`
    );

    return data;
  },
};
