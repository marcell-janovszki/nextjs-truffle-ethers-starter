import CurrentMessage from "../components/CurrentMessage"

function HomePage() {
  return (
    <div className="flex flex-col items-center">
      <div className="m-4">SimpleMessage.sol</div>
      <CurrentMessage />
    </div>
  )
}

export default HomePage
