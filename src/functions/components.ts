'use strict'

import { keyInSelect } from 'readline-sync'

/**
 * Displays a page that allows the user to navigate back and forth to select an item from a long list without needing to
 * show a long page.
 *
 * @param items The items that the user selects from.
 * @param query A prompt message asking for user input.
 * @param showHeader A function that displays a header for the pagination.
 * @param onSelected A callback to process the item selected.
 */
export function showPagination (
  items: string[] = [],
  {
    query = 'Select a choice',
    showHeader = () => { },
    onSelected = _ => { }
  }: {
    query?: string
    showHeader?: () => void
    onSelected?: (id: number) => void
  } = { }
): void {
  let selectList
  let pageID = 0
  while (true) {
    console.log()
    showHeader()
    selectList = []
    if (pageID !== 0) selectList.push('Previous page')
    const maxPageItemCount = 8
    selectList.push(...items.slice(pageID * maxPageItemCount, (pageID + 1) * maxPageItemCount))
    if (selectList.length === 0) {
      console.log('------ No items found! ------')
      break
    }
    const lastPageID = Math.ceil(items.length / maxPageItemCount) - 1
    if (pageID !== lastPageID) selectList.push('Next page')
    const id = keyInSelect(selectList, query, { cancel: 'Back' })
    if (id === -1) break
    if (pageID !== 0 && id === 0) --pageID
    else if (pageID !== lastPageID && id === selectList.length - 1) ++pageID
    else {
      onSelected(pageID * maxPageItemCount + id - (pageID === 0 ? 0 : 1))
      break
    }
  }
}
