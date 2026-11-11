---
name: karpathy-minimalism
description: >-
  Clean, minimalist, and anti-bloat code engineering standards inspired by Andrej Karpathy's
  guidelines. Enforces simple functions over abstract factories, minimal dependencies, explicit
  error handling, and readable TypeScript.
---

# Minimalist & Anti-Bloat Code Skill

Enforces discipline in TypeScript and React development. Prevents AI-generated architectural over-engineering, unnecessary abstractions, and bloated dependency trees.

---

## 1. The Anti-Bloat Manifesto

1. **No Gratuitous Abstractions:**
   - Do NOT write abstract factory classes, generic strategy wrappers, or multi-layered builder patterns when a straightforward 10-line function gets the job done.
   - Code is read more often than written. Keep the execution path flat and immediately understandable.

2. **Zero-Bloat Dependency Policy:**
   - Avoid pulling in heavy third-party npm packages for operations that standard JavaScript/TypeScript handles natively:
     * ❌ `moment` / `dayjs` ➔ ✅ Standard `Intl.DateTimeFormat` or native `Date`.
     * ❌ `lodash` ➔ ✅ Native `Array.map`, `filter`, `reduce`, `Object.entries`.
     * ❌ `axios` ➔ ✅ Standard Web `fetch()`.
     * ❌ `uuid` package ➔ ✅ Native `crypto.randomUUID()`.

---

## 2. Explicit Over Clever

1. **Readability First:**
   - Prioritize self-documenting code with clear variable and function names.
   - Avoid dense, multi-nested ternary expressions and "code golf" one-liners.

2. **Early Returns (Guard Clauses):**
   - Flatten nested `if-else` pyramids using early guard clauses:
     ```typescript
     // ❌ Bad: Nested pyramid
     function getWorkflowBadge(workflow) {
       if (workflow) {
         if (workflow.is_verified) {
           return 'Verified';
         } else {
           return 'Community';
         }
       }
       return null;
     }

     // ✅ Good: Minimalist guard clauses
     function getWorkflowBadge(workflow: Workflow | null) {
       if (!workflow) return null;
       if (workflow.is_verified) return 'Verified';
       return 'Community';
     }
     ```

---

## 3. Fail Fast & Explicit Errors

1. **Never Swallow Errors Silently:**
   - Do not catch exceptions with an empty `catch {}` block.
   - Either handle the failure state with a user-facing fallback or bubble up a descriptive typed error.

2. **Type Safety Without Over-Typing:**
   - Write clear, pragmatic TypeScript interfaces for database models and UI props.
   - Do NOT create deeply recursive generic mapped types that slow down the compiler and confuse developers.

