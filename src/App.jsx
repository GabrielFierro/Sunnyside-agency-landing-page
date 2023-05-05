// Components
import NavBar from './components/Navbar/NavBar';
import Image from './components/Card/Image';
import Text from './components/Card/Text';
import ImageText from './components/Card/ImageText';
import Testimonial from './components/Section/Testimonial';
import Gallery from './components/Gallery/Gallery';
import Footer from './components/Footer/Footer';
// Images
import ImageTransform from './assets/images/desktop/image-transform.jpg';
import ImageStandOut from './assets/images/desktop/image-stand-out.jpg';
import CherryImage from './assets/images/desktop/image-graphic-design.jpg';
import OrangeImage from './assets/images/desktop/image-photography.jpg';
// Profile pictures
import Emily from './assets/images/image-emily.jpg';
import Thomas from './assets/images/image-thomas.jpg';
import Jennie from './assets/images/image-jennie.jpg';
// Gallery images
import MilkBottles from './assets/images/desktop/image-gallery-milkbottles.jpg';
import Orange from './assets/images/desktop/image-gallery-orange.jpg';
import Cone from './assets/images/desktop/image-gallery-cone.jpg';
import SugarCubes from './assets/images/desktop/image-gallery-sugarcubes.jpg';
// Css file
import './App.css';

export default function App() {
  return (
    <>
      {/* Render the NavBar component */}
      <NavBar />
      {/* Render the Text, Image, and ImageText components as main content */}
      <main className='grid_container'>
        {/* Render the Text component */}
        <Text
          text={{
            title: 'Transform your brand',
            paragraph:
              'We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.',
            span: 'Learn more'
          }}
          isYellow={true}
        />
        {/* Render the Image component */}
        <Image
          src={ImageTransform}
          alt='Image about an egg with yellow background'
        />
        {/* Render the Image component */}
        <Image src={ImageStandOut} alt='Image about a ping glass' />
        {/* Render the Text component */}
        <Text
          text={{
            title: 'Stand out to the right audience',
            paragraph:
              "Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places.",
            span: 'Learn more'
          }}
          isYellow={false}
        />
        {/* Render the ImageText component */}
        <ImageText
          text={{
            title: 'Graphic design',
            paragraph:
              "Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients' attention."
          }}
          src={CherryImage}
          alt='Image about a cherry'
          isGreen={true}
        />
        {/* Render the ImageText component */}
        <ImageText
          text={{
            title: 'Photography',
            paragraph:
              'Increase your credibility by getting the most stunning, high-quality photos that improve your business image.'
          }}
          src={OrangeImage}
          alt='Image about an orange'
          isGreen={false}
        />
      </main>
      {/* Section for the testimonials */}
      <section className='containerSection'>
        <h4>Client testimonials</h4>
        <div className='containerFlex'>
          {/* Render the Testimonial component */}
          <Testimonial
            profilePicture={Emily}
            comment='We put our trust in Sunnyside and they delivered,
              making sure our needs were met and deadlines were always hit.'
            name='Emily R.'
            position='Marketing Director'
          />
          {/* Render the Testimonial component */}
          <Testimonial
            profilePicture={Thomas}
            comment="Sunnyside's enthusiasm coupled with their keen interest
              in our brand's success made it a satisfying and enjoyable experience."
            name='Thomas S.'
            position='Chief Operating Officer'
          />
          {/* Render the Testimonial component */}
          <Testimonial
            profilePicture={Jennie}
            comment='Incredible end result! Our sales
              increased over 400% when we worked with Sunnyside. Highly recommended!'
            name='Jennie F.'
            position='Business Owner'
          />
        </div>
      </section>
      <section className='gallery'>
        <Gallery src={MilkBottles} alt='Milk bottles' />
        <Gallery src={Orange} alt='Orange' />
        <Gallery src={Cone} alt='Cone' />
        <Gallery src={SugarCubes} alt='Sugar cubes' />
      </section>
      <Footer />
      About Services Projects Contact
    </>
  );
}
