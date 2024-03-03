import {
  BLOG_PATH,
  GIT_ACCESS_TOKEN,
  OBSIDIAN_VAULT_REPO_NAME,
  OWNER,
  REVALIDATE_INTERVAL,
} from "@/constants";
import { Octokit } from "octokit";

const gitAccessToken = GIT_ACCESS_TOKEN;
const owner = OWNER;
const repo = OBSIDIAN_VAULT_REPO_NAME;
const revalidateInterval = REVALIDATE_INTERVAL;

const octokit = new Octokit({
  auth: gitAccessToken,
});

export const getRawPosts = async (path: string = BLOG_PATH) => {
  try {
    const { data } = await octokit.rest.repos.getContent({
      mediaType: {
        format: "raw",
      },
      owner,
      repo,
      path,
      next: {
        revalidate: revalidateInterval,
      },
    });

    return data;
  } catch (err) {
    throw new Error(`Failed to get: ${err}`);
  }
};

export const getPostBlobData = async (sha: string) => {
  try {
    const { data } = await octokit.rest.git.getBlob({
      owner,
      repo,
      file_sha: sha,
      next: {
        revalidate: revalidateInterval,
      },
    });
    return data;
  } catch (err) {
    throw new Error(`Failed to get: ${err}`);
  }
};
