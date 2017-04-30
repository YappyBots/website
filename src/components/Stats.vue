<template>
  <ul class="stats">
    <li>{{ stars }} stars</li>
    <li>{{ contributors }} contributors</li>
  </ul>
</template>

<script>
  import request from 'superagent/superagent';

  const data = {
    stars: '2+',
    contributors: '3+',
    fetching: false,
  };

  export default {
    name: 'stats',

    data() {
      if (data.fetching) return data;
      data.fetching = true;

      request.get('https://api.github.com/repos/datitisev/DiscordBot-YappyGitLab').end((err, res) => {
        if (!err) data.stars = res.body.stargazers_count.toLocaleString();
      });
      request.get('https://api.github.com/repos/datitisev/DiscordBot-YappyGitLab/stats/contributors').end((err, res) => {
        if (!err) data.contributors = res.body.length.toLocaleString();
      });

      return data;
    },
  };
</script>
