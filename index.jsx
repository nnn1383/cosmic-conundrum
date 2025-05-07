import { createRoot } from "react-dom/client"
import Question from "./Question"
const root = createRoot(document.getElementById("root"))
import './styles.css'

function Page() {
    return (
        <div className="homepage">
            <main>
                <h1 className="adventure-title">Cosmic Conundrum</h1>
            </main>
            <img src="images/spaceshipgif.gif"></img>
            <Question />
        </div>
    )
}

root.render(
    <>
    <Page />
    </>
)