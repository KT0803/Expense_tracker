# Project Idea Submission: Expense Tracker 

## 1. Project Title
SQLExpense: Database-Driven Expense Tracker

## 2. Name & URN Number
Krrish Taneja - 2024-B-07032006C

## 3. Problem Statement
Most expense tracking systems are built with complex frontend and backend technologies. However, for students and beginners, the real challenge is learning **data modeling, relationships, and queries** that form the foundation of any expense tracker. By building an SQL-only project, we can focus on the core — designing normalized tables for expenses, income, categories, and budgets, and writing queries for reporting, analysis, and insights.

## 4. Proposed Solution / Idea
SQLExpense will be a **database project** where all expense management happens via SQL queries. The solution will include:  
- A relational database schema for users, categories, transactions, and budgets.  
- Queries to add expenses/income, categorize transactions, and update records.  
- Views and aggregate queries to generate financial summaries (monthly spend, category-wise spend, total income vs expenses).  
- Export-ready reports generated using SQL (with `SELECT INTO` or `COPY` statements depending on RDBMS).  

## 5. Key Features
- **Add Transactions:** Insert queries for income and expense records with date, amount, category, and description.  
- **Category Management:** Separate table for categories (Food, Travel, Rent, Bills, etc.).  
- **Budget Tracking:** A budget table with category/monthly limits; SQL queries will check overspending.  
- **Reports & Dashboard:**  
  - Monthly expense report (using `GROUP BY` and `SUM`).  
  - Category-wise breakdown.  
  - Balance (Income – Expenses).  
- **Data Integrity:** Foreign keys, constraints, and triggers to ensure valid entries.  

## 6. Target Users / Audience
- Students learning SQL through practical projects.  
- Small businesses or individuals needing a lightweight, SQL-based expense system.  
- Educators using SQLExpense as a teaching tool for database concepts.  

## 7. Technology Stack
- **Database:** MySQL / PostgreSQL / SQLite  
- **Data Export:** SQL queries (`SELECT INTO OUTFILE` / `COPY TO CSV`)  
- **Optional:** CLI client (MySQL Workbench, pgAdmin, or SQLite Browser) for interaction  

## 8. Expected Outcome
A fully functional SQL database where:  
- Users can insert expenses/income with a single query.  
- Category-wise and monthly summaries can be generated.  
- Budgets can be tracked, with overspending highlighted using queries.  
- Reports can be exported into CSV/PDF (via SQL tools).  

## 9. Timeline (Optional)
- **Week 1:** Research and design the ER diagram & schema.  
- **Week 2:** Create tables, relationships, and constraints.  
- **Week 3:** Write queries for adding, updating, deleting, and fetching transactions.  
- **Week 4:** Implement reporting queries (monthly summary, budgets).  
- **Week 5:** Test with dummy data and refine schema.  
- **Week 6:** Export reports and finalize documentation.  

## 10. Additional Notes
- **Key Challenge:** Designing queries that are both efficient and flexible for real-world reporting.  
- **Future Scope:**  
  - Add stored procedures for automated monthly reports.  
  - Implement triggers for budget alerts.  
  - Build a small frontend later that just runs SQL queries in the background.  
