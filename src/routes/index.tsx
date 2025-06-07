import { createFileRoute } from '@tanstack/react-router'
import logo from '../logo.svg'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="text-center">
      <header className="min-h-screen flex flex-col items-center justify-center bg-[#282c34] text-white text-[calc(10px+2vmin)]">
        <img
          src={logo}
          className="h-[40vmin] pointer-events-none animate-[spin_20s_linear_infinite]"
          alt="logo"
        />
        <h1 className='text-[calc(10px+2vmin)] font-bold'>
          Welcome to the Blockdeed App!
          <br />
          <span className='text-[calc(10px+1vmin)] font-normal'>
            This is a demo app for the Blockdeed platform.
          </span>
          <br />
          <span className='text-[calc(10px+1vmin)] font-normal'>
            Explore the features and functionalities.
          </span>
          <br />
          <span className='text-[calc(10px+1vmin)] font-normal'>
            Built with React and TypeScript.
          </span>
          <br />
          <span className='text-[calc(10px+1vmin)] font-normal'>
            Powered by Blockdeed's blockchain technology.
          </span>
          <br />
        </h1>
      </header>
    </div>
  )
}
