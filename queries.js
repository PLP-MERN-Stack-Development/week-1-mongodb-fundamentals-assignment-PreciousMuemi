// queries.js
// 📚 MongoDB Query Script - Task 2: Basic CRUD Operations

// 1. Find all books in a specific genre (e.g., Fiction)
db.books.find({ genre: "Fiction" })

// 2. Find books published after a certain year (e.g., 1950)
db.books.find({ published_year: { $gt: 1950 } })

// 3. Find books by a specific author (e.g., George Orwell)
db.books.find({ author: "George Orwell" })

// 4. Update the price of a specific book (e.g., 'The Hobbit')
db.books.updateOne(
  { title: "The Hobbit" },
  { $set: { price: 15.99 } }
)

// 5. Delete a book by its title (e.g., 'Moby Dick')
db.books.deleteOne({ title: "Moby Dick" })


// TASK 3: Advanced Queries

// 1. Find books that are in stock and published after 2010
db.books.find({ in_stock: true, published_year: { $gt: 2010 } })

// 2. Project only the title, author, and price fields (no _id)
db.books.find({}, { title: 1, author: 1, price: 1, _id: 0 })

// 3. Sort books by price ascending
db.books.find().sort({ price: 1 })

// 4. Sort books by price descending
db.books.find().sort({ price: -1 })

// 5. Pagination: page 1 (skip 0, limit 5)
db.books.find().skip(0).limit(5)

// 6. Pagination: page 2 (skip 5, limit 5)
db.books.find().skip(5).limit(5)

// 7. Find books by genre and sort by price (e.g., Fiction, ascending)
db.books.find({ genre: "Fiction" }).sort({ price: 1 })

// TASK 4: Aggregation Pipeline

// 1. Average price of books by genre
db.books.aggregate([
  { $group: { _id: "$genre", averagePrice: { $avg: "$price" } } }
])

// 2. Author with the most books
db.books.aggregate([
  { $group: { _id: "$author", totalBooks: { $sum: 1 } } },
  { $sort: { totalBooks: -1 } },
  { $limit: 1 }
])

// 3. Group books by publication decade and count
db.books.aggregate([
  {
    $project: {
      decade: { $concat: [ { $toString: { $multiply: [ { $floor: { $divide: ["$published_year", 10] } }, 10 ] } }, "s" ] }
    }
  },
  { $group: { _id: "$decade", count: { $sum: 1 } } },
  { $sort: { _id: 1 } }
])

// TASK 5: Indexing

db.books.createIndex({ title: 1 })
db.books.createIndex({ author: 1, published_year: -1 })
db.books.find({ title: "The Hobbit" }).explain("executionStats")
