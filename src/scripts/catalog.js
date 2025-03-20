export const catalog = (harvestedArray) => {
    let HTMLString = ''
   
    for (const obj of harvestedArray) {
        HTMLString += `
        <section class="plant">${obj.type}</section>`
        
    }
    return HTMLString
}