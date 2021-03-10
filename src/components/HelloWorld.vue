<template>
  <div class="hello">
    <h1 v-for="record in records" :key="record.id">
      {{ record.abc }} | id: {{ record.id }} name: {{ record.title }} content:
      {{ record.content }}
      <button @click="onDelete(record)">[delete]</button>
      <button @click="onUpdate(record)">[update]</button>
    </h1>
    <input v-model="formData.title" />
    <input v-model="formData.content" />
    <button @click="onCreate">create</button>
  </div>
</template>

<script lang="ts">
import { VStore } from "vails/lib/store";
import { defineComponent, onMounted } from "vue";
import { PostApi, PostModel } from "@/api/post.api";

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: String
  },
  setup() {
    const formData = {};
    // const store = new VStore(new PostApi());
    const store = new VStore(new PostApi({}), PostModel);
    onMounted(() => {
      store.index();
    });

    const onCreate = () => {
      store.create(formData);
    };

    const onDelete = (record: PostModel) => {
      record.delete();
    };

    const onUpdate = (record: PostModel) => {
      record.update(formData);
    };

    return {
      records: store.records,
      formData,
      onCreate,
      onDelete,
      onUpdate
    };
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
