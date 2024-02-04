import React from "react"

const Categories = () => {
  const data = [
  
    {
      cateImg: "./images/category/cat2.png",
      cateName: "Electronic",
    },
   
   
    {
      cateImg: "./images/category/cat5.png",
      cateName: "Giveaway",
    },
   
   
  ]

  return (
    <>
      <div className='category'>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Categories