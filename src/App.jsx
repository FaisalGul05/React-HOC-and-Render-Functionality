import Counter1 from "./Components/Counter1"
import Counter2 from "./Components/Counter2"
import CommonCounter from "./RenderFunction/CommonCounter"
import CounterOne from "./RenderFunction/CounterOne"

// const initialState = {
//   count: 0
// }

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'inc':
//       return { count: state.count + action.payload }
//     case 'res':
//       return initialState
//     default:
//       return state
//   }
// }

function App() {

  return (
    <>
      <h2>App</h2>
      {/* <Counter1 name='Faisal'/>
      <Counter2/> */}
      <CommonCounter startsWith={10} render={(count,event)=>(
        <CounterOne count={count} event={event}/>
      )}/>
    </>
  )
}

export default App
