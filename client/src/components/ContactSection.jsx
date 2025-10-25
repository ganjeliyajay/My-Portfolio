import { Github, Instagram, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { sendMail } from "../Redux/Thunk/ContactMailthunk";
import { useDispatch, useSelector } from "react-redux";
import { Bounce, toast } from "react-toastify";

export const ContactSection = () => {

  const { error, process, loading } = useSelector((state) => state.mail)

  const dispatch = useDispatch()

  const [data, setData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const inputHandle = async (e) => {
    const { name, value } = e.target
    setData({ ...data, [name]: value })

  }

  const formHandle = async (e) => {
    e.preventDefault();
    try {
      await dispatch(sendMail(data)).unwrap()

      setData({
        name: "",
        email: "",
        message: "",
      });

      toast("Mail Succesfully Send!", {
        position: "top-right",
        autoClose: 1000,
        theme: "light",
        transition: Bounce,
      })
    } catch (err) {
      toast.error(error || err, {
        position: "top-right",
        autoClose: 1000,
        theme: "light",
        transition: Bounce,
      });
    }
  }
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left: Contact Info */}
          <div className="space-y-8 ">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4 rounded-2xl p-6 hover:bg-slate-800 hover:scale-105 transition-all duration-500 ease-in-out">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className=" absolute text-muted-foreground hover:text-primary transition-all cursor-pointer hover:scale-105 ease-in-out duration-300 hover:font-medium">
                    ganjeliyajay0745@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4 rounded-2xl p-6 hover:bg-slate-800 hover:scale-105 transition-all duration-500 ease-in-out">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p
                    className=" absolute text-muted-foreground hover:text-primary transition-all cursor-pointer hover:scale-105 ease-in-out duration-300 hover:font-medium">
                    <a href="tel:+11234567890">+91 9727110745</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 rounded-2xl p-6 hover:bg-slate-800 hover:scale-105 transition-all duration-500 ease-in-out ">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className=" absolute text-muted-foreground hover:text-primary transition-all cursor-pointer hover:font-semibold duration-300">
                    Ahmedabad, India
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4 text-center">Connect With Me</h4>
              <div className="flex space-x-4 justify-center ">
                <Linkedin className="cursor-pointer hover:text-primary hover:scale-110 transition-all ease-in-out" />
                <Instagram className="cursor-pointer hover:text-primary hover:scale-110 transition-all ease-in-out" />
                <Github className="cursor-pointer hover:text-primary hover:scale-110 transition-all ease-in-out" />
              </div>
            </div>
          </div>

          {/* Right: Message Form */}
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <form className="space-y-6" onSubmit={formHandle}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  onChange={inputHandle}
                  id="name"
                  name="name"
                  value={data.name}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Ganjeliya Jay..."
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={data.email}
                  onChange={inputHandle}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="ganjeliyajay0745@gmail.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={data.message}
                  onChange={inputHandle}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                className="cosmic-button w-full flex items-center justify-center gap-2 cursor-pointer"
              >
                {loading ? (<span
                  className="w-6 h-6 rounded-full border-4 border-t-transparent border-gradient-to-r from-purple-400 via-pink-500 to-indigo-500 animate-spin shadow-xl"
                ></span>
                ) : 'Send Message'}
                {loading ? '' : <Send size={16} />}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
