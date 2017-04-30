<template>
  <div>
    <ul class="stats">
      <li style="list-style-type: none;"><b>Yappy Github</b></li>
      <li>{{ Yappy.stars }} stars</li>
      <li>{{ Yappy.contributors }} contributors</li>
    </ul>
    <ul class="stats">
      <li style="list-style-type: none;"><b>Yappy GitLab</b></li>
      <li>{{ YappyGitLab.stars }} stars</li>
      <li>{{ YappyGitLab.contributors }} contributors</li>
    </ul>
  </div>
</template>

<script>
  import request from 'superagent/superagent';

  const data = {
    Yappy: {
      stars: '10+',
      contributors: '1+',
    },
    YappyGitLab: {
      stars: '2+',
      contributors: '2+',
    },
    fetching: false,
  };

  function fetch(repo) {
    return new Promise(resolve => {
      let a = {};
      request.get(`https://api.github.com/repos/${repo}`).end((err, res) => {
        if (!err) a.stars = res.body.stargazers_count.toLocaleString();

        request.get(`https://api.github.com/repos/${repo}/stats/contributors`).end((e, r) => {
          if (!e) a.contributors = r.body.length.toLocaleString();

          return resolve(a);
        });
      });
    });
  }

  export default {
    name: 'stats',

    data() {
      if (data.fetching) return data;
      data.fetching = true;

      ['YappyGitLab', 'Yappy'].forEach(async repo => {
        data[repo] = await fetch(`datitisev/DiscordBot-${repo}`);
      });

      return data;
    },
  };
</script>
