// import TaApi from '@/lib/TaApi';
// import { TaApiConfig } from './TaApi';
import { ComputedRef } from "@vue/runtime-core";
import { VApi, VModel } from "vails/lib";
import { VApiConfig } from "vails/lib/api";

export interface Post {
  id: number;
  title: string;
  content: string;
}

export class PostApi extends VApi<Post> {
  constructor(config?: VApiConfig) {
    super({
      name: "post",
      namespace: "/comm/user",
      ...config
    });
  }
}

export class PostModel extends VModel<Post> {
  abc: ComputedRef<Post> = this.computedAttr(
    "abc",
    () => `${this.reactiveRecord.title}+${this.reactiveRecord.content}`
  );

  static statusOptions = [{ label: "进行中", value: "doing" }];
}
