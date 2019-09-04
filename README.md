# Campaign Monitor Email Client

Simply Email client for a Campaign Monitor.
The package is wrapper of the `createsend-node` lib.


## Getting started

```bash
$ yarn add createsend-node-ts
```

### Send a Transactional Email

```typescript
import Client from 'createsend-node-ts'

const client = new Client('YOUR_API_KEY')
client.sendTransactionalEmai({
   smartEmailID: 'xxx-xxx-xxx-xxx',
   to: 'John doe <test@example.com>',
   data: {
     firstName: 'John'
   }
})
  .then(result => console.log(result))
```

## Contribution

```
$ git clone git@github.com:hideokamoto/createsend-node-ts.git
$ cd git@github.com:hideokamoto/createsend-node-ts.git

// Put your GitHub Personal Access Token
$ mv .envrc.example .envrc
$ vim .envrc
export CONVENTIONAL_GITHUB_RELEASER_TOKEN=PUT_YOUR_GITHUB_ACCESS_TOKEN

// Install
$ yarn
or
$ npm install
```

### GitHub Personal Access Token Scope

If the project is private -> `repo`
If the project is public -> `public_repo`

## Commit message rule

The repository runs commitlint.
We have to follow "Conventional Commit" to make a commit message.

https://www.conventionalcommits.org/en/v1.0.0-beta.4/

```bash
$ git commit -m "<type>[optional scope]: <description>

[optional body]

[optional footer]"
```

## Contribution

```bash
// clone
$ git clone git@github.com:hideokamoto/createsend-node-ts.git
$ cd createsend-node-ts

// setup
$ yarn

// Unit test
$ yarn test
or
$ yarn run test:watch

// Lint
$ yarn run lint
or
$ yarn run lint --fix

// Build
$ yarn run build

// Rebuild docs
$ yarn run doc
```