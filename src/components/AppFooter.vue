<template>
  <footer>
    <container>
      <strong><router-link to="/">Yappy</router-link></strong>
      <p>Powerful Discord bots to interact with Github, Gitlab, and Trello (soon™)</p>
      <stats />
    </container>
  </footer>
</template>

<script>
  import Stats from './Stats.vue';

  export default {
    name: 'footer',
    components: {
      Stats,
    },
  };
</script>

<style lang="scss">
  @import '../styles/theming';

  footer {
  	padding: 3rem;
  	background: $color-navbar-bg;
    color: $color-footer-text;

    a {
      text-decoration: none;
      color: $color-footer-text;
    }

    a:hover {
      color: lighten($color-footer-text, 10%);
    }

    .container {
      text-align: center;
    }

    .stats {
  		padding: 0;
      list-style: none;

      li {
        display: inline-block;

        &:not(:last-child):after {
          content: ','
        }
      }
    }
  }
</style>
