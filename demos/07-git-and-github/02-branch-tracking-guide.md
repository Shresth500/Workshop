
# How to Create a Local Branch That Tracks a Remote Branch

## 1. Automatically Create and Track the Remote Branch

You can use the following command to **create a local branch** that automatically tracks an existing remote branch:

```bash
git checkout --track origin/<remote-branch>
```

### Example:
```bash
git checkout --track origin/feature-1
```

- This creates a local branch named `feature-1` that **tracks the remote branch** `origin/feature-1`.
- Now, `git pull` and `git push` will sync the local branch with the remote branch automatically.

---

## 2. Manually Create a Local Branch and Track a Remote Branch

If you want to give the local branch a different name, you can manually create the branch and specify the remote branch:

```bash
git checkout -b <local-branch> origin/<remote-branch>
```

### Example:
```bash
git checkout -b my-feature origin/feature-1
```

- This creates a local branch named `my-feature` that **tracks** the remote branch `origin/feature-1`.

---

## 3. Set the Tracking Branch for an Existing Local Branch

If you already have a local branch and want to **link it to a remote branch**, use:

```bash
git branch --set-upstream-to=origin/<remote-branch> <local-branch>
```

### Example:
```bash
git branch --set-upstream-to=origin/feature-1 my-feature
```

- Now, the local branch `my-feature` will track `origin/feature-1`.

---

## 4. Verify Tracking Configuration

To check which remote branch a local branch is tracking, use:

```bash
git branch -vv
```

### Example Output:
```
* my-feature   123abc [origin/feature-1] Some commit message
```

---

## Summary of Commands

| **Action**                               | **Command**                                         |
|------------------------------------------|-----------------------------------------------------|
| Automatically track a remote branch      | `git checkout --track origin/feature-1`             |
| Manually create and track a remote branch| `git checkout -b my-feature origin/feature-1`       |
| Set upstream for an existing local branch| `git branch --set-upstream-to=origin/feature-1 my-feature` |
| Check tracking status                    | `git branch -vv`                                    |
