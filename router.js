import { Router } from 'https://deno.land/x/oak/mod.ts';

import { getBooks, saveBook, updateBook, deleteBook } from "./src/controller/book.js";

const router = new Router()

router.get('/books', getBooks);
router.get('/book/:id', getBooks);
router.post('/book', saveBook);
router.put('/book/:id', updateBook);
router.delete('/book/:id', deleteBook);

export default router;