const category=[{
    
    name: "fashion",
    cateid: 1
  },{
    
    name: "electronics",
    cateid: 2
  },{
    
    name: "home",
    cateid: 3
  },{
  
    name: "beauty&health",
    cateid: 4
  }]
const subcategory=[{
   
    cateid: 4,
    name: "makeup",
    options: [
      "Foundation",
      "color"
    ]
  },{
    
    cateid: 4,
    name: "skinCare",
    options: [
      "SkinType"
    ]
  },{
   
    cateid: 4,
    name: "hairCare",
    options: [
      "HairType",
      "formulation"
    ]
  },{
    
    cateid: 1,
    name: "menWear",
    options: [
      "Material",
      "color",
      "Size"
    ]
  },{
   
    cateid: 1,
    name: "womenWear",
    options: [
      "Material",
      "color",
      "Size"
    ]
  },{
    
    cateid: 1,
    name: "kidWear",
    options: [
      "Material",
      "color",
      "Size"
    ]
  },{
    
    cateid: 2,
    name: "mobiles",
    options: [
      "ScreenSize",
      "InternalMemory",
      "Battery"
    ]
  },{
    
    cateid: 2,
    name: "labtops",
    options: [
      "OperatingSystem",
      "MemorySize",
      "Proccessor"
    ]
  },{
    
    cateid: 2,
    name: "tv",
    options: [
      "TvScreenSize",
      "UsbPort"
    ]
  },{
    
    cateid: 3,
    name: "kitchen",
    options: [
      "BaseMaterial"
    ]
  },{
    
    cateid: 3,
    name: "homeDecor",
    options: [
      "BaseMaterial",
      "color"
    ]
  },{
    
    cateid: 3,
    name: "furniture",
    options: [
      "BaseMaterial",
      "color"
    ]
  }]




  module.exports={category,subcategory}