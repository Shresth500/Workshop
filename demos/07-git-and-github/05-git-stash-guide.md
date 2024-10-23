
# Understanding `git stash`

In Git, **`git stash`** is used to temporarily save (stash) changes that are not yet committed. This is useful if you want to **switch branches** or perform other tasks without committing unfinished work.

---

## **How `git stash` Works**

When you run `git stash`, Git:
1. **Saves the changes** from your working directory and the staging area.
2. **Restores your working directory** to match the last commit, so you have a clean working state.

Later, you can **reapply the stashed changes** when you're ready.

---

## **Common `git stash` Commands**

### **1. Stash Your Changes**
```bash
git stash
```
- Stashes both **staged** and **unstaged** changes.
- Leaves you with a clean working directory.

### **2. Stash Only Unstaged Changes**
```bash
git stash --keep-index
```
- Keeps the **staged changes** intact, but stashes only the **unstaged changes**.

---

### **3. List All Stashed Changes**
```bash
git stash list
```
- Shows all stashes with their index and message:
  ```
  stash@{0}: WIP on main: 123abc Initial commit
  stash@{1}: WIP on main: Modified readme
  ```

---

### **4. Apply the Latest Stash**
```bash
git stash apply
```
- Reapplies the most recent stash but **does not delete** it from the stash list.

### **5. Apply a Specific Stash**
```bash
git stash apply stash@{1}
```
- Reapplies the stash at the specified index.

---

### **6. Drop a Stash (Delete)**
```bash
git stash drop stash@{0}
```
- Deletes a specific stash.

---

### **7. Pop the Latest Stash**
```bash
git stash pop
```
- Applies the latest stash **and removes it** from the stash list.

---

### **8. Stash Changes with a Custom Message**
```bash
git stash push -m "Your message here"
```
- This saves the stash with a **custom message**, making it easier to identify later.

---

### **9. Clear All Stashes**
```bash
git stash clear
```
- Deletes **all stashes** from the stash list.

---

## **When to Use `git stash`?**
- **Switching branches**: If you're in the middle of work and need to change branches without committing.
- **Experimenting with changes**: When you want to try something out but aren’t sure if you’ll keep the changes.
- **Interruptions**: If you need to stop work suddenly and pick it up later without committing incomplete changes.

---

## **Summary of Common Commands**

| **Action**                      | **Command**                                 |
|----------------------------------|---------------------------------------------|
| Stash all changes                | `git stash`                                 |
| Stash only unstaged changes      | `git stash --keep-index`                    |
| List all stashes                 | `git stash list`                            |
| Apply the latest stash           | `git stash apply`                           |
| Apply a specific stash           | `git stash apply stash@{n}`                 |
| Pop the latest stash             | `git stash pop`                             |
| Drop a specific stash            | `git stash drop stash@{n}`                  |
| Clear all stashes                | `git stash clear`                           |
| Stash with a custom message      | `git stash push -m "Your message"`          |

---

Let me know if you need further clarifications!
