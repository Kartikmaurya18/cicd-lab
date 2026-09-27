# cicd-lab

A tiny Node.js app plus a GitHub Actions pipeline so you can learn **CI/CD** by doing.

## What this app does

```bash
npm start          # Hello, world!
npm start Kartik   # Hello, Kartik!
npm test           # 3 unit tests
```

The interesting part is not the app. It is the file `.github/workflows/ci.yml`.

## CI vs CD in one minute

| Term | Meaning here |
| --- | --- |
| **CI** (continuous integration) | Every push/PR automatically installs Node and runs `npm test`. Broken tests fail the check before merge. |
| **CD** (continuous delivery/deploy) | After tests pass on `main`, the workflow packages the app and uploads it as a GitHub Actions **artifact**. That is a safe stand-in for a real deploy. |

Local `npm test` is the same command the pipeline runs. If it fails on your machine, it will fail in CI too.

## Run it locally

You need [Node.js 22+](https://nodejs.org/) (the `node` command).

```bash
npm test
npm start
```

There are no extra packages to install. Tests use Node’s built-in test runner.

## Turn on the pipeline (GitHub)

1. Create an empty GitHub repo named `cicd-lab` (do not add a README on GitHub).
2. From this folder:

```bash
git add .
git commit -m "Add app and GitHub Actions CI pipeline"
git branch -M main
git remote add origin https://github.com/YOUR_USER/cicd-lab.git
git push -u origin main
```

3. Open the repo on GitHub → **Actions**. You should see a workflow named **CI**.
4. Click the latest run. The **Run tests** job should be green.
5. Because this push was to `main`, the **Package (demo CD)** job should also run and attach `cicd-lab.tar.gz`.

## Suggested experiments (best way to learn)

1. **Watch CI fail on purpose.** Change a test expectation, commit, push. The Actions run should turn red.
2. **Fix it.** Revert the test, push again, watch it go green.
3. **Use a pull request.** Create a branch, push it, open a PR. Only the **test** job runs (the package job is `main`-only). Merge when checks pass.
4. **Replace the fake deploy.** Swap the `package` job for GitHub Pages, a Docker image, or a host you actually use.

## Pipeline map

```
push / pull_request
        │
        ▼
   checkout code
        │
        ▼
   setup Node 22
        │
        ▼
      npm test  ──fail──►  red X on GitHub
        │
      pass
        │
        ▼
   only on main push
        │
        ▼
   upload artifact  (demo CD)
```
