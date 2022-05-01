'use strict';
import { keyInSelect } from 'readline-sync';
export function showPagination(items = [], { query = 'Select a choice', showHeader = () => { }, onSelected = _ => { } } = {}) {
    let selectList;
    let pageIndex = 0;
    while (true) {
        console.log();
        showHeader();
        selectList = [];
        if (pageIndex !== 0)
            selectList.push('Previous page');
        const maxPageItemCount = 8;
        selectList.push(...items.slice(pageIndex * maxPageItemCount, (pageIndex + 1) * maxPageItemCount));
        if (selectList.length === 0) {
            console.log('------ No items found! ------');
            break;
        }
        const lastPageIndex = Math.ceil(items.length / maxPageItemCount) - 1;
        if (pageIndex !== lastPageIndex)
            selectList.push('Next page');
        const index = keyInSelect(selectList, query, { cancel: 'Back' });
        if (index === -1)
            break;
        if (pageIndex !== 0 && index === 0)
            --pageIndex;
        else if (pageIndex !== lastPageIndex && index === selectList.length - 1)
            ++pageIndex;
        else {
            onSelected(pageIndex * maxPageItemCount + index - (pageIndex === 0 ? 0 : 1));
            break;
        }
    }
}
