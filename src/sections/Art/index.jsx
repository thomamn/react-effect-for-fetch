import ArtList from "./components/ArtList"

function ArtsSection() {
  const artList=null
  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container"><ArtList artList={artList}/></div>
      
    </section>
  )
}

export default ArtsSection
