
# Git Reset Tutorial

## Introduction
`git reset` is a powerful command in Git that allows you to undo changes by resetting the state of your repository to a previous commit. There are three common modes for `git reset`: **soft**, **mixed**, and **hard**. This tutorial explains how each mode works and when to use it.

---

## 1. Basic Syntax
```bash
git reset [<mode>] <commit>
```
- `<mode>`: Defines how the reset affects the working directory and index. Defaults to `--mixed` if not specified.
- `<commit>`: The commit to which you want to reset your branch.

---

## 2. Reset Modes Explained

### 2.1 `--soft`
- **What it does**: Moves the `HEAD` to the specified commit but keeps the changes in the staging area (index) and working directory.
- **Use case**: When you want to undo commits but keep the changes staged for a new commit.

**Command:**
```bash
git reset --soft <commit>
```

### Example:
```bash
git reset --soft HEAD~1
```
This moves `HEAD` back by one commit but retains the changes in the staging area.

---

### 2.2 `--mixed` (Default)
- **What it does**: Moves the `HEAD` to the specified commit and un-stages the changes, but keeps them in the working directory.
- **Use case**: When you want to undo commits and changes should remain in the working directory for further editing.

**Command:**
```bash
git reset --mixed <commit>
```

### Example:
```bash
git reset --mixed HEAD~1
```
This un-stages the last commit but keeps the changes in the working directory.

---

### 2.3 `--hard`
- **What it does**: Moves the `HEAD` to the specified commit and deletes all changes in the staging area and working directory.
- **Use case**: When you want to completely discard all changes.

**Command:**
```bash
git reset --hard <commit>
```

### Example:
```bash
git reset --hard HEAD~1
```
This removes the last commit and any uncommitted changes.

---

## 3. Practical Examples

### Example 1: Undo the Last Commit (Keep Changes)
```bash
git reset --soft HEAD~1
git commit -m "New commit message"
```

### Example 2: Unstage Files from the Index
```bash
git reset HEAD <file>
```

### Example 3: Completely Reset to a Previous Commit
```bash
git reset --hard <commit>
```

---

## 4. Precautions
- **Use `--hard` carefully**: It permanently removes changes from the working directory and cannot be undone.
- Always double-check which commit you are resetting to with:
  ```bash
  git log --oneline
  ```

---

## 5. Summary Table

| Mode   | HEAD Moves | Index Changes | Working Directory Changes |
|--------|------------|---------------|----------------------------|
| soft   | Yes        | No            | No                         |
| mixed  | Yes        | Yes (Unstage) | No                         |
| hard   | Yes        | Yes           | Yes (Discard)              |

---

## 6. Additional Tips
- Use `git log` or `git reflog` to identify the commit you want to reset to.
- If you mistakenly use `--hard`, try `git reflog` to find the lost commit and recover it.

---

## Conclusion
The `git reset` command is a powerful tool for undoing changes at different levels of your repository. By understanding its modes, you can effectively manage your Git history and avoid unintended changes.
