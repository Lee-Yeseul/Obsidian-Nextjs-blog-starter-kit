# Obsidian + Git + Nextjs Blog Starter kit

<p align="center">
  Generate Blog by Obsidian, Git REST API, Next.js.
</p>

<p align="center">
  <a href="#tech-stack"><strong>Tech Stack</strong></a> ·
  <a href="#deploy-your-own"><strong>Deploy Your Own</strong></a> ·
  <a href="#authors"><strong>Authors</strong></a> ·
</p>
<br/>

## Tech Stack

- Next.js [App Router](https://nextjs.org/docs/app)
- [tailwindCSS](https://tailwindcss.com/)
- [Octokit](https://github.com/octokit/octokit.js/#readme)
- [Obsidian Git](https://github.com/denolehov/obsidian-git)
- [react-markdown](https://www.npmjs.com/package/react-markdown?activeTab=readme)
- [gray-matter](https://www.npmjs.com/package/gray-matter)

## Deploy Your Own Blog

You can deploy this template to Vercel with the button below:

Note that you'll need to:

- Set up NVM Version over 18+
- Set up Obsidian Git
    <details>
      <summary>for details</summary>
      <div markdown="1">
      Create a repository for Obsidian Vault using <a href="https://github.com/denolehov/obsidian-git">Obsidian Git</a>.<br />
      This repository will be uploaded with Obsidian's note, so if you don't want to share everything publicly, I recommend setting the repository to <strong>private</strong>.
      </div>
    </details>

    <br />

- Set up Git RESTAPI
  <details>
  <summary>for details</summary>
  <div markdown="1">
    Enter to the following path and generate a new token. This token is used for Github REST API calls.
    <div>
      <code>
      github main home > settings > Developer Setting > Personal access token
      </code>
    </div>
    <image src="https://i.imgur.com/sG912Xl.png"/>
  </div>
  </details>
<br />

- Start project And Setting Env file
  <details>
    <summary>for details</summary>
    <div markdown="1">
      This project can be started in two ways. Please choose the method that suits you best
      <ul>
        <li>clone <a href="https://github.com/Lee-Yeseul/Obsidian-Nextjs-blog-starter-kit">this repository</a>.</li>
        <li>run <code>npx create-obsidian-nextjs-blog</code></li>
      </ul> 
      After downloaded the project, copy the <code>env.sample</code> file and fill it in.
    </details>
<br />

- Deploy your own by vercel
  - blog example : https://yeseul-blog.vercel.app/

### Fast Start

```bash
npx create-obsidian-nextjs-blog
```

## Authors

- [@](ssulv3030@gmail.com)Yeseul Lee
