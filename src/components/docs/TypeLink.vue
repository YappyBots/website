<template>
  <span class="docs-type-link">
    <span v-if="!link" :title="type[0] === '*' ? 'Any type' : null">{{ typeName }}</span><!--
  --><router-link :to="link" v-else-if="typeof link === 'object'">{{ typeName }}</router-link><!--
  --><a :href="link" v-else>{{ typeName }}</a><!--
  --><span v-if="type[1]">{{ type[1] }}</span>
  </span>
</template>

<script>
  import See from './See.vue';

  export default {
    name: 'type-link',
    props: ['docs', 'type'],
    components: {
      See,
    },

    computed: {
      typeName() {
        if (this.type[0] === 'function') return 'Function';
        return this.type[0].replace('external:', '');
      },

      link() {
        if (this.docs.links[this.type[0]]) return this.docs.links[this.type[0]];
        const external = this.docs.externals.find(t => t.name === this.typeName.replace('external:', ''));
        if (external) {
          return {
            name: 'docs-external',
            params: { external: external.name },
          };
        }
        return null;
      },
    },
  };
</script>
