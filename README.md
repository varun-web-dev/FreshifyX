React setup :   npm create vite@latest (terminal)
                npm install (terminal)
                npm run dev (terminal)

                src/app.jsx (clearup)
                src/App.css (delete)
                src/index.css (clearup)
                src/assets/react.svg (delete)
                public/vite.svg (Delete favicon)

Install Extension : ES7 react/redux
                    cmd - rafce (boiler plate)

Add Images :    in Assets folder
                public/icon.png (Add favicon)
                Change in link tag in index.html (update favicon)

Install Tailwind css :  npm install tailwindcss @tailwindcss/vite (terminal)
                        import tailwindcss from "@tailwindcss/vite" (vite.config.js)
                        plugins: [react(),tailwindcss()] (vite.config.js)
                        @import "tailwindcss"; (index.css)

Install react router :  npm install react-router-dom (terminal) 

Install react icons :   npm install react-icons (terminal)

Add google font :       Choose any font and get import form it.
                        Add import in top of index.css file.
                        @theme{--font-poppins: 'Poppins', sans-serif;} 
                        Add className="font-poppins" in app.jsx   

Install React Swiper :  npm run swiper(terminal) 

                        // Import Swiper React components 
                        import { Swiper, SwiperSlide } from 'swiper/react';(Testimonial.jsx)

                        // Import Swiper styles
                        import 'swiper/css'; (Testimonial.jsx)
                        import 'swiper/css/navigation'; (Testimonial.jsx)

                        // import required modules
                        import { Navigation } from 'swiper/modules'; (Testimonial.jsx)

                        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                        
                        </Swiper> (Testimonial.jsx)

Deployment :            Add:"scripts": {
                                "dev": "vite",
                                "build": "vite build",
                                "deploy": "gh-pages -d dist"
                            }

                        npm install gh-pages --save-dev(Terminal)

                        npm run deploy(Terminal)

