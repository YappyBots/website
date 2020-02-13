---
title: Getting Started
---

# Setting Up Yappy GitHub

Follow the following steps to set up Yappy with any repo on GitHub.

## Discord
1. Go to the channel you want events in for a repo
2. Say `G! init REPO`, where `REPO` can be `username/repo`, a GitHub url... more usage info at `G! help init`
    - If the repository is private, make sure you tell Yappy that with `G! init REPO private`

## GitHub

1. Go to the GitHub repo you want to have events for
2. Click Settings > Webhooks
3. Set `URL` to [https://www.yappybots.tk](https://www.yappybots.tk)
4. Leave `Content-Type` to whatever it's set - Yappy supports both options
5. Select the events you want to emit to the channel
6. Click "Add Webhook"

Now you can test the webhook by, in Settings > Webhooks, scrolling down the webhook, finding the webhook pointing to the url mentioned above, clicking it, and clicking the "Test" button on the right.
Keep in mind you will need to have a commit or two in the repo, as it will simulate a push request.
