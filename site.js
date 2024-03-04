// Switch structure------------------------------------------------------------


let myCategories = ["smartphones",
"laptops",
"fragrances",
"skincare",
"groceries",
"home-decoration",
"furniture",
"tops",
"womens-dresses",
"womens-shoes",
"mens-shirts",
"mens-shoes",
"mens-watches",
"womens-watches",
"womens-bags",
"womens-jewellery",
"sunglasses",
"automotive",
"motorcycle",
"lighting"
]


categorySorter(myCategories)

function categorySorter(categoriesToSort) {

// myCategory = myCategories[0]

// push

let myElectronics=[]
let myCosmetics=[]
let myVehicles=[]
let myMisch=[]

categoriesToSort.forEach(category => {

  switch (category) {
    case 'laptops':
    case 'lighting':
    case 'smartphones':
  
    //   console.log('electronics');
      myElectronics.push(category)
      break;
  
    case 'fragrances':
    case 'skincare':
      
    //   console.log('cosmetics');
      myCosmetics.push(category)
      break;

    case 'automotive':
    case 'motorcycle':

    //   console.log('vehicles');
      myVehicles.push(category)
      break;
  
    default:
    //   console.log('misch');
      myMisch.push(category)
      break;
  }
});


console.log(myElectronics);
console.log(myCosmetics);
console.log(myVehicles);
console.log(myMisch);

}