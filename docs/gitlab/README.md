---
title: Getting Started
---

# Setting Up Yappy GitLab

Follow the following steps to set up Yappy with any repo on GitLab.

> The commands used to be ran with the prefix `GL! ` before some Discord changes a while back.
> 
> Use a ping to the bot (`@Yappy, the GitLab Monitor#7339`) so that it can see your messages, and give it commands that way.
> The application does not support slash commands.

## Discord

1. Go to the channel you want events in for a repo
2. Say `@Yappy, the GitLab Monitor#7339 init REPO`, where `REPO` can be `username/repo`, a GitLab url... see more usage info at `@Yappy, the GitLab Monitor#7339 init`
    - If the repository is private, make sure you tell Yappy that with `init REPO private`

## GitLab

1. Go to the GitLab repo you want to have events for
2. Click Settings > Integrations
3. Set `URL` to [https://yappy.dsev.dev/gitlab](https://yappy.dsev.dev/gitlab)
4. Select the events you want to emit to the channel
5. Click "Add Webhook"

### Testing

Now you can test the webhook.

1. Go to Settings > Integrations
2. Scroll down to "Webhooks (#)"
3. Find the webhook pointing to the url mentioned above
4. Click Test and choose an event to simulate.
    - Not all are supported by Yappy GitLab. `push` should always work.
