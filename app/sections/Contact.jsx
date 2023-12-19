import Title from "../components/Title";
import ContactComp from "../components/ContactComp";

export default function Contact() {
  return (
    <div className="section2">
        <div className="container">
            <Title title={'contact me'} description={'Contact me for work or comment'} />
            <ContactComp />
        </div>
    </div>
  )
}