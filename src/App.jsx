// Components
import NavBar from './components/navbar/NavBar'
import Image from './components/Card/Image'
import Text from './components/Card/Text'
import ImageText from './components/Card/ImageText'
// Images
import ImageTransform from './assets/images/desktop/image-transform.jpg'
import ImageStandOut from './assets/images/desktop/image-stand-out.jpg'
import CherryImage from './assets/images/desktop/image-graphic-design.jpg'
import OrangeImage from './assets/images/desktop/image-photography.jpg'
// Css file
import './App.css'

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
        />
        <ImageText
          text={{
            title: 'Graphic design',
            paragraph:
              "Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients' attention."
          }}
          src={CherryImage}
          alt='Image about a cherry'
        />
        <ImageText
          text={{
            title: 'Photography',
            paragraph:
              'Increase your credibility by getting the most stunning, high-quality photos that improve your business image.'
          }}
          src={OrangeImage}
          alt='Image about an orange'
        />
      </div>
      Learn more Graphic design Great design makes you memorable. We deliver
      artwork that underscores your brand message and captures potential
      clients' attention. Photography Increase your credibility by getting the
      most stunning, high-quality photos that improve your business image.
      Client testimonials We put our trust in Sunnyside and they delivered,
      making sure our needs were met and deadlines were always hit. Emily R.
      Marketing Director Sunnyside's enthusiasm coupled with their keen interest
      in our brand's success made it a satisfying and enjoyable experience.
      Thomas S. Chief Operating Officer Incredible end result! Our sales
      increased over 400% when we worked with Sunnyside. Highly recommended!
      Jennie F. Business Owner About Services Projects Contact
    </>
  )
}
