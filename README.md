# CRUD com Deno + MongoDB + OAK

That aplication is a CRUD using [deno](https://deno.land/) (runtime javascript), [MongoDB](https://deno.land/x/mongo@v0.31.0) (Driver of MongoDB) and [oak](https://deno.land/x/oak@v10.6.0) (server lib)

## Installation

Use the package manager [chocolatey](https://chocolatey.org/) to install deno.
```bash
choco install deno
```

Use the package manager [Scoop](https://scoop.sh/) (Windows) to install deno.
```bash
scoop install deno
```

Use the package manager [Homebrew](https://formulae.brew.sh/formula/deno) (Mac) to install deno.
```bash
brew install deno
```

Shell (Mac, Linux):
```bash
curl -fsSL https://deno.land/install.sh | sh
```

## Dependencies
You need install [mongoDB](https://www.mongodb.com/try/download/community) on your PC

## Usage
```deno
cd crud-deno
deno run --allow-net index.js
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
