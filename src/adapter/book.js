import { ObjectId } from "https://deno.land/x/mongo@v0.31.0/mod.ts";
import { getDb } from "../../db.js";

async function getBooks(id = null) {
	try {
		if (id) {
			const book = await getDb().collection("books").findOne({ _id: new ObjectId(id) });
			return book;
		}
		const books = await getDb().collection("books").find({}).toArray();
		return books;
	} catch (e) {
		throw new Error(e.message);
	}
}

async function saveBook(book) {
	try{
		await getDb().collection("books").insertOne(book);
		return `Book created successfully`;
	} catch (e) {
		throw new Error(e.message);
	}
}

async function updateBook(id, book) {
	try {
		await getDb().collection("books").updateOne({ _id: new ObjectId(id) }, { $set: book });;
		return `Book ${id} updated successfully`
	} catch (e) {
		throw new error(e.message);
	}
}

async function deleteBook(id) {
	try {
		await getDb().collection("books").deleteOne({ _id: new ObjectId(id) });
		return `Book ${id} deleted successfully`
	} catch (e) {
		throw new error(e.message);
	}
}

export { getBooks, saveBook, updateBook, deleteBook };