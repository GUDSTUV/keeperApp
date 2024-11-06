import Header from "./Header"
import Body from "./Body"
import './App.css'
import Note from "./Note"



function App() {
//   function noteBoard(noteKepper) {
//   return (
//     <Body
//       key = "noteKeeper"
//       title={noteKepper.title}
//       content = {noteKepper.content} />
//   )
// }
  
  return (
    <div>
      <Header />
      <div className="cards">
        {Note.map( (noteKepper) => {
  return (
    <Body
      key = "noteKeeper"
      title={noteKepper.title}
      content = {noteKepper.content} />
  )
}
  )}     
      </div>
    </div>
  )
}

export default App
