import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import "../App.css";
import OperationArea from "../component/OperationArea";
import CardContact from "../component/CardContact";
import { useEffect, useState } from "react";
import axios from "axios";
import Jumbotron from "../component/Jumbotron";
interface ImageData {
  id: number;
  imageSrc: string;
  altImage: string;
  category: string;
}
interface operationArea {
  title: string;
  caption: string;
  content: string;
  address: string;
  address1: string;
  address2: string;
}

interface Contact {
  id: number;
  name: string;
  position: string;
  phone: number;
  email: string;
  emailAlt?: string;
}

const Kontak = () => {
  const [jumbotron, setJumbotron] = useState<ImageData[]>([]);
  const [items, setItems] = useState<operationArea[]>([]);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchJumbotron = async () => {
      try {
        const response = await axios.get("http://localhost:3307/api/images", {
          params: { category: "jumbotron" },
        });
        setJumbotron(response.data);
      } catch (err) {
        setError("Failed to fetch image");
      }
    };

    fetchJumbotron();
  }, []);
  const banner = jumbotron[11] || { imageSrc: "", altImage: "" };

  useEffect(() => {
    // Fetch contacts from backend
    const fetchContacts = async () => {
      try {
        const response = await fetch(
          "http://localhost:3307/api/contact_person"
        );
        const data = await response.json();
        setContacts(data);
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    };

    fetchContacts();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3307/api/operation_area"
        );
        setItems(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <Jumbotron
        bgImage={banner.imageSrc}
        headCaption="Kontak"
        captionSection="Kami siap untuk membantu segala kebutuhan Anda"
        btnAction="none"
        showButton={false}
      />
      <section className="mb-20">
        <div className="relative mx-6 my-10 px-4 lg:px-0 lg:ml-32 lg:mr-20 lg:my-20">
          <h1 className="text-3xl font-raleway font-medium text-ne02 lg:text-4xl">
            Tim Kontak 24 Jam
          </h1>
        </div>
        <div className="mx-6 mb-10 px-4 lg:px-0 lg:ml-32 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {contacts.map((contact) => (
            <CardContact
              key={contact.id}
              name={contact.name}
              position={contact.position}
              phone={contact.phone}
              email={contact.email}
              emailAlt={contact.emailAlt}
            />
          ))}
        </div>
      </section>
      <section>
        <div className="relative mx-6 my-10 px-4 lg:px-0 lg:ml-32 lg:mr-20 lg:my-20">
          <h1 className="text-3xl font-raleway font-medium text-ne02 lg:text-4xl pb-8">
            Area Operasional
          </h1>
          <div className="map-responsive mb-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.1433722883917!2d106.88036427478188!3d-6.111391659934747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a1f3592fbb0c9%3A0x95a9e16ebb2050e!2sPT.%20Orela%20Bahari%20Mandiri!5e0!3m2!1sid!2sid!4v1714703522319!5m2!1sid!2sid"
              width="600"
              height="450"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div>
            <OperationArea items={items} />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default Kontak;
