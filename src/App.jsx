// Components
import NavBar from './components/navbar/NavBar';
import Image from './components/Card/Image';
import Text from './components/Card/Text';
import ImageText from './components/Card/ImageText';
import Testimonial from './components/Section/Testimonial';
// Images
import ImageTransform from './assets/images/desktop/image-transform.jpg';
import ImageStandOut from './assets/images/desktop/image-stand-out.jpg';
import CherryImage from './assets/images/desktop/image-graphic-design.jpg';
import OrangeImage from './assets/images/desktop/image-photography.jpg';
// Profile pictures
import Emily from './assets/images/image-emily.jpg';
import Thomas from './assets/images/image-thomas.jpg';
import Jennie from './assets/images/image-jennie.jpg';
// Css file
import './App.css';

export default function App() {
  return (
    <>
      <NavBar />
      <div className='grid_container'>
        <Text
          text={{
            title: 'Transform your brand',
            paragraph:
              'We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.',
            span: 'Learn more'
          }}
          isYellow={true}
        />
        <Image
          src={ImageTransform}
          alt='Image about an egg with yellow background'
        />
        <Image src={ImageStandOut} alt='Image about a ping glass' />
        <Text
          text={{
            title: 'Stand out to the right audience',
            paragraph:
              "Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places.",
            span: 'Learn more'
          }}
          isYellow={false}
        />
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
      </div>
      <section>
        <h4>Client testimonials</h4>
        <div className='containerFlex'>
          <Testimonial
            profilePicture={Emily}
            comment='We put our trust in Sunnyside and they delivered,
              making sure our needs were met and deadlines were always hit.'
            name='Emily R.'
            position='Marketing Director'
          />
          <Testimonial
            profilePicture={Thomas}
            comment="Sunnyside's enthusiasm coupled with their keen interest
              in our brand's success made it a satisfying and enjoyable experience."
            name='Thomas S.'
            position='Chief Operating Officer'
          />
          <Testimonial
            profilePicture={Jennie}
            comment='Incredible end result! Our sales
              increased over 400% when we worked with Sunnyside. Highly recommended!'
            name='Jennie F.'
            position='Business Owner'
          />
        </div>
      </section>
      About Services Projects Contact
    </>
  );
}
