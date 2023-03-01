# 01 Exercise - Breaking down tasks

## Product Brief

Make sure you have watched the [Elephant Carpaccio: Breaking down tasks](https://www.loom.com/share/628847a04f4e47368872f4da49f2257e) video (16mins)

Create a tax calculator that applies different tax rates depending on what state you enter.

The calculator accepts 3 inputs from the user:

- How many items are being purchased
- How much each item costs
- 2-letter state code

Output the total price. The total price is the number of items multiplied by the cost of each item, less the discount, plus the tax percentage.

- The discount is calculated based on the number of items multiplied by the cost of each item
- The tax is calculated based on the discounted cost
- Build the tax feature BEFORE the discount feature

### Example output

```
How many items are being purchased? 978
How much does each item cost? 270.99
What state? UT
Total: $240,705.26
```

### Discount rates

| Order value | Discount rate |
| ----------- | ------------- |
| $1,000      | 3%            |
| $5,000      | 5%            |
| $7,000      | 7%            |
| $10,000     | 10%           |
| $50,000     | 15%           |

### State tax rates

| State | Tax rate |
| ----- | -------- |
| UT    | 6.85%    |
| NV    | 8.00%    |
| TX    | 6.25%    |
| AL    | 4.00%    |
| CA    | 8.25%    |

---

## Rationale

Breaking tasks down into tiny slices is an important skill to learn when tackling big problems. It helps keep you focused and delivering small manageable pieces of work.

When you complete a lot of small tasks continually, if you run out of time, you still have something that can be used. In contrast, if you tackle everything at once, and run out of time, you often have nothing useable.

## Getting started

<details>
<summary>Preparing for development</summary>
<br>

1. Get [VS Code Live Sharing](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare-pack) setup. Make sure you have a backup plan in case this doesn't work (e.g Screen Sharing on Slack)
   - There is a [Loom video explaining how to configure Live Sharing](https://www.loom.com/share/c14b991d9e3e474c9ecf39110e2b8f9b).
1. Some boilerplate code has been provided for you if you wish to use it. Open `src/script.js` in VS Code. It uses [`window.prompt`](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt) and [`alert`](https://developer.mozilla.org/en-US/docs/Web/API/Window/alert) as the user interface. This is a quick way to get input and output working on a webpage.
2. Type `npm install` and `npm start` to start a local web server that will serve this HTML file

</details>

## Part A - Planning

<details>
<summary>Planning</summary>
<br>

1. Only use one workstation for this exercise - start a video call and one person will have to screen share.
2. Looking at the product brief and requirements, break down what you need to do into small user stories ("slices"). Create a GitHub issue for each slice. You should end up with 10-20 slices that you will develop and demo. Don't create more than 20 slices. Each should be doable in around 10-20 minutes. Each slice should show real input & output.
3. If you need help creating GitHub issues, watch [Creating Issues in GitHub (7mins)](https://www.loom.com/share/531586a10fee4784bc7d698c699b7c86)

</details>

## Instructions Part B - Building

<details>
<summary>Building</summary>
<br>

You will be given 2 hours to complete as many of the tasks you created in Part B as you can.

**Important** only work on one GitHub issue at a time until its fully complete. When it's complete, commit the change to git, and close the issue. Then start on the next issue.

</details>

---

# Submit your Exercise

- [ ] Demo your product to the team. Talk through your experience and process.
- [ ] Commits are pushed to GitHub