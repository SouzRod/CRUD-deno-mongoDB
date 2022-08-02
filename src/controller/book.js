import * as adapter from '../adapter/book.js';

async function getBooks({ response, params }) {
	const { id } = params;
	const result = await adapter.getBooks(id);
	response.status = 200;
	response.body = result;
	return result;
}

async function saveBook({ request, response }) {
	const book = await request.body().value;
	const result = await adapter.saveBook(book);
	response.status = 201;
	response.body = result;
	return result;
}

async function updateBook({ request, params, response }) {
	const book = await request.body().value;
	const { id } = params;
	const result = await adapter.updateBook(id, book);
	response.status = 200;
	response.body = result;
	return result;
}

async function deleteBook({ params, response }) {
	const { id } = params;
	const result = await adapter.deleteBook(id);
	response.status = 200;
	response.body = result;
	return result;
}

export { getBooks, saveBook, updateBook, deleteBook };