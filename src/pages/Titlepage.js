import Banner from "../components/Banner"
import Description from "../components/Description"
import Clips from "../components/Clips"
import Partners from "../components/Partners"
import Gameprevs from "../components/Gameprevs"
import Partners2 from "../components/Partners2"
import Gameprevs2 from "../components/Gameprevs2"

const Titlepage = ({ isOpen, isGuideOpen, setIsOpen, setIsGuideOpen }) => {
  return (
    <div className ="w-screen h-screen overflow-y-scroll no-scrollbar bg-black">
      <Banner isOpen={isOpen} isGuideOpen={isGuideOpen} setIsOpen={setIsOpen} setIsGuideOpen={setIsGuideOpen}></Banner>
      <Description></Description>
      <Gameprevs></Gameprevs>
      <Clips></Clips>
      <Partners2></Partners2>
    </div>
  )
}
export default Titlepage