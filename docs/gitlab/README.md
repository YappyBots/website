---
title: Getting Started
---

# Setting Up Yappy GitLab

Follow the following steps to set up Yappy with any repo on GitLab.

## Discord

1. Go to the channel you want events in for a repo
2. Say `GL! init REPO`, where `REPO` can be `username/repo`, a GitLab url... see more usage info at `GL! help init`
    - If the repository is private, make sure you tell Yappy that with `GL! init REPO private`

## GitLab

1. Go to the GitLab repo you want to have events for
2. Click Settings > Integrations
3. Set `URL` to [https://www.yappybots.tk/gitlab](https://www.yappybots.tk/gitlab)
4. Select the events you want to emit to the channel
5. Click "Add Webhook"

### Testing

Now you can test the webhook.

1. Go to Settings > Integrations
2. Scroll down to "Webhooks (#)"
3. Find the webhook pointing to the url mentioned above
4. Click Test and choose an event to simulate.
    - Not all are supported by Yappy GitLab. `push` should always work.
