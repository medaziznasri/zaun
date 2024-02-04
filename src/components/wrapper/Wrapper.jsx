import React from "react"
import "./style.css"

const Wrapper = () => {
  const data = [
    {
      cover: <i class='fa-solid fa-truck-fast'></i>,
      title: "livrason l kefet an7aa2 al joumhouriya",
      decs: "24h 48h w tousel livraison",
    },
    {
      cover: <i class='fa-solid fa-id-card'></i>,
      title: "t7eb tkhales b d17 marhbe",
      decs: "thana matrawah ken farhan.",
    },
    {
      cover: <i class='fa-solid fa-shield'></i>,
      title: "yadi tsawaq wett mit3meeen ",
      decs: "tw hetha klem",
    },
    {
      cover: <i class='fa-solid fa-headset'></i>,
      title: "24/7 Support ",
      decs: "kalemna waqet matheb noum lil na3rfouhouch",
    },
  ]
  return (
    <>
      <section className='wrapper background'>
        <div className='container grid2'>
          {data.map((val, index) => {
            return (
              <div className='product' key={index}>
                <div className='img icon-circle'>
                  <i>{val.cover}</i>
                </div>
                <h3>{val.title}</h3>
                <p>{val.decs}</p>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Wrapper