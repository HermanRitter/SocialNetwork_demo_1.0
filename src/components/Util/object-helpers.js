
export const updateObjectInArray = (items, itemId, objPropName, newObjectProps) => {
    return items.map(i => {
        if (i[objPropName] === itemId) {  // i[objPropName] обращение к сво-ву объекта
            return {...i, ...newObjectProps}
        }
        return i;
    })
}