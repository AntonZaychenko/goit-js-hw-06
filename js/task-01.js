

const allCategory = document.querySelectorAll (".item");
console.log(`Elements: ${allCategory.length} `, )

const total = [...allCategory]
.map(
    categories => `Categoty: ${categories.children[0].textContent}
    Elements: ${categories.children[1].children.length}`
)
.join("\n")
console.log(total)
