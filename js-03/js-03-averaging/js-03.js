const entry1 = +prompt ("Enter Entry 1")
const entry2 = +prompt ("Enter Entry 2")
const entry3 = +prompt ("Enter Entry 3")
const entry4 = +prompt ("Enter Entry 4")
const entry5 = +prompt ("Enter Entry 5")
const allEntries = entry1+entry2+entry3+entry4+entry5

function sum() {
   if (!isNaN(allEntries) && allEntries/5 >= 12) {

    return (allEntries/5)

   } 
   else { return ("something is wrong!!")}

}

console.log(sum())