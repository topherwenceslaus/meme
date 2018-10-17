export const changeRowOrder = ({ column, state }) => {
    const { sort: { direction }, columns } = state;
    let rows = state.rows;
    const [columnBeingSorted, ...b] = columns.filter(c => c.accessor === column);
    const type = (columnBeingSorted && columnBeingSorted.sortable !== false) ? columnBeingSorted.sortType : null;
    const isUniqueRows = ()=>{
        let urows= rows.map((row)=>{
                return row[column]
        })
        return new Set(urows).size == 1 || false 
    }
    if(isUniqueRows()){
        return { sortedRows: rows.reverse() };  
    }
    switch (direction) {
        case 'ascending':
            rows.sort(dynamicSort({ column, type }));
            break;
        case 'descending':
            rows.sort(dynamicSort({ column, type })).reverse();
            break;
        default:
            rows.sort(dynamicSort({ column, type }));
    }

    return { sortedRows: rows };
};
