---
title: Getting Started
---

# Setting Up Yappy GitHub

Invite the bot @ [https://yappy.dsev.dev/github](https://yappy.dsev.dev/github).

Follow the following steps to set up Yappy with any repo on GitHub.

By using the bot or sending webhooks to the bot, you agree to the [privacy policy](privacy.html).

::: warning
These instructions are for the version that utilizes Discord slash commands.
It may not have been deployed yet.
:::

1. Go to the channel you want events in for a repo
2. Choose the method to connect your repos
    * Run the `/setup` command to retrieve a time-limited link to the setup dashboard
        * This link will expire after 30 minutes
        * It will ask you to sign in with GitHub to confirm you have permissions in the repositories you want to use with the bot
        * It will then ask you to select the repositories you want to use with the bot
        * You will not have to manually create webhooks for each repo you want to have events for
    * OR Manually create a webhook that sends events to the channels you specify
        * _This method is not recommended, as it requires you to manually create webhooks for each repo you want to have events for_
        * _It also requires you to manually configure the webhooks to send the events you want to the channels you want_
        * You can retrieve the URL to send webhooks to by running `/setup` and clicking the hook link
        * This will display a page with instructions on how to set up the webhook
        * You can test the webhook by, in Settings > Webhooks, scrolling down the webhook, finding the webhook pointing to the url mentioned above, clicking it, and clicking the "Test" button on the right.
            * Keep in mind you will need to have a commit or two in the repo, as it will simulate a push request.
3. Filter out events you don't want to see
    * Run the `/conf` command to configure the events you want to see
    * You can also use the `/conf` command to ignore events from specific users, branches, or repositories