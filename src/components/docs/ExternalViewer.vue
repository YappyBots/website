<template>
  <div v-if="external" id="external-viewer" class="docs-page">
    <source-button :meta="external.meta" :docs="docs" />

    <h1>{{ external.name }}</h1>
    <span v-if="external.deprecated" class="badge warn" title="This external is deprecated, and may be removed in a future version.">Deprecated</span>
    <p class="external-desc" v-html="description" v-if="external.description"></p>
    <see v-if="external.see" :see="external.see" :docs="docs" />

    <!-- <h2>Types</h2>
    <ul id="external-types">
      <li v-for="type in external.type"><types :names="type" :docs="docs" /></li>
    </ul>

    <div id="external-params" v-if="external.props && external.props.length > 0">
      <h2>Properties</h2>
      <param-table :params="external.props" :docs="docs" />
    </div> -->
  </div>
  <unknown-page v-else class="docs-page" />
</template>

<script>
  import Vue from 'vue';
  import { hljs, convertLinks } from '../../util';
  import Types from './Types.vue';
  import ParamTable from './class-viewer/ParamTable.vue';
  import SourceButton from './SourceButton.vue';
  import See from './See.vue';

  export default {
    name: 'external-viewer',
    props: ['docs'],
    components: {
      Types,
      ParamTable,
      SourceButton,
      See,
    },

    data() {
      return {
        external: this.docs.externals.find(t => t.name === this.$route.params.external),
      };
    },

    computed: {
      description() {
        return Vue.filter('marked')(convertLinks(this.external.description, this.docs, this.$router, this.$route));
      },
    },

    mounted() {
      this.$nextTick(() => {
        for (const el of this.$el.querySelectorAll('pre code')) hljs(el);
      });
    },
  };
</script>

<style lang="scss">
  @import '../../styles/theming';

  #external-viewer {
    h1 {
      display: inline-block;
    }

    h2 {
      font-size: 1.3rem;
      margin-top: 40px;
    }

    #external-types {
      font-family: $font-monospace;
    }

    .param-table-wrapper {
      border: 0;
    }

    code {
      font-family: $font-monospace;
      font-size: 0.8rem;
    }

    :not(pre) > code {
      background: darken($color-content-bg, 3.5%);
      border-radius: 2px;
    }
  }
</style>
