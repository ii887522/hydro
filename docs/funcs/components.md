# components

## Table of contents
- [showPagination](https://github.com/ii887522/hydro/blob/master/docs/funcs/components.md#showPagination)

## **showPagination**
```ts
function showPagination (
  items: string[],
  { query, showHeader, onSelected }: { query: string, showHeader: () => void, onSelected: (id: number) => void }
): void
```
Displays a page that allows the user to navigate back and forth to select an item from a long list without needing to show a long page.

`items`: The items that the user selects from.

`query`: A prompt message asking for user input.

`showHeader`: A function that displays a header for the pagination.

`onSelected`: A callback to process the item selected.

### **Example usage:**
```ts
const choices = ['Red', 'Black', 'Blue', 'Green']
showPagination(
  choices,
  {
    query: 'What is your favourite color ?',
    showHeader: () => {
      console.log('          Color list          ')
      console.log('------------------------------')
    },
    onSelected: id => {
      console.log(`You selected ${choices[id].toLowerCase()} color!`)
    }
  }
)
```
<br />
