useless switcher function for handling different HTTP methods

```ts
import createSwitcher from 'next-api-switcher'

createSwitcher({
  async get(req, res) {
    // do anything
  },

  post(req, res) {
    // do anything
  }
})
```
