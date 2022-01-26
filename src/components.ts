'use strict'

import { keyInSelect } from 'readline-sync'

/**
 * It displays a page that allows the user to navigate back and forth to select an item from a long list without needing to show a long page.
 *
 * @param items The items that the user selects from.
 * @param query A prompt message asking for user input.
 * @param showHeader A function that displays a header for the pagination.
 * @param onSelected A callback to process the item selected.
 */
export function showPagination (items: string[] = [], { query = 'Select a choice', showHeader = () => { }, onSelected = _ => { } }:
{ query?: string, showHeader?: () => void, onSelected?: (index: number) => void } = { }): void {
  let selectList
  let pageIndex = 0
  while (true) {
    console.log()
    showHeader()
    selectList = []
    if (pageIndex !== 0) selectList.push('Previous page')
    const maxPageItemCount = 8
    selectList.push(...items.slice(pageIndex * maxPageItemCount, (pageIndex + 1) * maxPageItemCount))
    if (selectList.length === 0) {
      console.log('------ No items found! ------')
      break
    }
    const lastPageIndex = Math.ceil(items.length / maxPageItemCount) - 1
    if (pageIndex !== lastPageIndex) selectList.push('Next page')
    const index = keyInSelect(selectList, query, { cancel: 'Back' })
    if (index === -1) break
    if (pageIndex !== 0 && index === 0) --pageIndex
    else if (pageIndex !== lastPageIndex && index === selectList.length - 1) ++pageIndex
    else {
      onSelected(pageIndex * maxPageItemCount + index - (pageIndex === 0 ? 0 : 1))
      break
    }
  }
}
