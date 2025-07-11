# 📚 PLP Bookstore MongoDB Project

This project showcases beginner to advanced MongoDB operations using a sample bookstore database. It includes data insertion, CRUD operations, aggregation pipelines, sorting, pagination, and indexing.

## 🔗 Live Repository
👉 [GitHub: PreciousMuemi/plp-mongodb-bookstore](https://github.com/PreciousMuemi/plp-mongodb-bookstore)

---

## 🛠️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/PreciousMuemi/plp-mongodb-bookstore.git
cd plp-mongodb-bookstore
2. MongoDB Setup
You can use either:

✅ MongoDB Atlas (Cloud - used in this project)

Create an account at https://www.mongodb.com/cloud/atlas

Create a free cluster, user, and whitelist your IP

Replace the connection URI in insert_books.js with your Atlas connection string

OR

☑️ MongoDB Compass / Local (for viewing only)

📂 Files Included
File	Description
insert_books.js	Inserts 12 book documents into the books collection
queries.js	Contains MongoDB CRUD, filtering, sorting, pagination, aggregation, and indexing queries
README.md	Full project documentation and how-to guide
screenshot_books_collection.png	Proof of working collection from MongoDB Atlas

💻 Skills Covered
✔️ CRUD Operations (Insert, Find, Update, Delete)
✔️ Advanced Filtering with Projections, Pagination, Sorting
✔️ Aggregation Pipelines
✔️ Indexing & Performance with explain()
✔️ MongoDB Atlas cloud setup
✔️ Working with VS Code MongoDB Playground
✔️ Real JSON structure, data modeling, and schema planning

🧪 How to Run
1. Insert Data
bash
Copy
Edit
node insert_books.js
Expected output:

pgsql
Copy
Edit
Connected to MongoDB server
12 books inserted.
Connection closed
2. Run Queries in Playground
Open queries.js
Highlight one query at a time → Right-click → Run Selected Lines in Playground

3. View Data in MongoDB Compass
Connect to your MongoDB Atlas cluster
Switch to the plp_bookstore database
Expand the collections and view the books collection


 Screenshot of books collection in MongoDB Atlas/Compass

👩🏽‍💻 Author: @PreciousMuemi
